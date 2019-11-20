str1 = '7 3'
str2 = 'Tsi'
str3 = 'h%x'
str4 = 'i #'
str5 = 'sM '
str6 = '$a '
str7 = '#t%'
str8 = 'ir!'

list_st = [str1, str2, str3, str4, str5, str6, str7, str8]

list_f = []
for elem in list_st:
    list_elem = list(elem)

    for i in list_elem:
        if i in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ':
            list_f.append(i)
        else:
            list_f.append(' ')

for i in range(0, len(list_f), 3):
    if i < (len(list_f) - 2):
        print("".join(list_f[i:i + 3]))
    else:
        print(' '.join(list_f[i:]))
