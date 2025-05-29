from func.PrintFunctions import print_lists_info
import json

with open('./srcJSON/lists.json', 'r') as listsFile:
    listObj = json.load(listsFile)
    print_lists_info(listObj)

