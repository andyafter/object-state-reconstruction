from django.http import HttpResponse
from django.shortcuts import render
from .forms import UploadFileForm

import sys, csv
import codecs

def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            print >>sys.stderr, "something right"
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
                print >>sys.stderr, info_obj
            return HttpResponse('SUCCESS')
    else:
        form = UploadFileForm()
    return HttpResponse('response')
