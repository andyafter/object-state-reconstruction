from django.http import HttpResponse
from django.shortcuts import render
from .forms import UploadFileForm
from .models.table import *

import sys, csv
import codecs

import json


def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        result = {}
        if form.is_valid():
            #handle_uploaded_file(request.FILES['file'])
            csvfile = request.FILES['file']
            dialect = csv.Sniffer().sniff(codecs.EncodedFile(csvfile, "utf-8").read(1024))
            csvfile.open()
            csvreader = csv.reader(codecs.EncodedFile(csvfile, "utf-8"), delimiter=',', dialect=dialect)
            for row in csvreader:
                info = ','.join(row[3:]).replace('\\', '').replace('\"', '').replace('{', '').replace('}', '')
                info_obj = {}
                last_obj = ''
                for obj in info.split(','):
                    if len(obj.split(':')) == 1:
                        info_obj[last_obj] = info_obj[last_obj]+','+obj
                        continue
                    key, item = obj.split(':')
                    info_obj[key] = item
                    last_obj = key
                    
                info_str = ""
                for key in info_obj:
                    info_str += key
                    info_str += ":"
                    info_str += info_obj[key]
                    info_str += "--"
                #info_str.strip("-")
                table_row, created = Table.objects.get_or_create(
                    object_id = row[0],
                    timestamp = row[2]
                )
                table_row.object_type = row[1]
                table_row.info = info_str.strip('-')
                table_row.save()
                result = table_row
                print >>sys.stderr, table_row #row[:3], info_str.strip("-").split("--")
            csvfile.close()
            return HttpResponse("success")
    else:
        form = UploadFileForm()
    return HttpResponse('response')


def query_object(request):
    obj = {}
    try:
        obj = Table.objects.get(object_id=request.POST["object_id"], timestamp=request.POST["timestamp"])
    except Table.DoesNotExist:
        return HttpResponse("none")
    result = {}
    result["object_id"] = obj.object_id
    result["object_type"] = obj.object_type
    result["timestamp"] = obj.timestamp
    result["info"] = obj.info
    return HttpResponse(json.dumps(result), content_type="application/json")
