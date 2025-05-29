def print_lists_info(listsObj):
    print('List of lists:')
    for i in range (len(listsObj['lists'])-1):
        print(f'Name: {listsObj['lists'][i]['name']}')
        print(f'ID: {listsObj['lists'][i]['id']}')
        print('------------------------------------------')
