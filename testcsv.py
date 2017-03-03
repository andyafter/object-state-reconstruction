import csv

csvreader = {}
text = []
with open('sample.csv', 'rb') as csvfile:
    csvreader = csv.reader(csvfile)
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
        print info_obj
