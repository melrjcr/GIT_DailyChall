text = input('insert text to encrypt: ')
pattern = int(input('choose a shift pattern: '))


def encrypt(text, pattern):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + pattern - (ord('A'))) % 26 + (ord('A')))
        else:
            result += chr((ord(char) + pattern - (ord('a'))) % 26 + (ord('a')))
    return result


print(f'Caesar Cipher: {encrypt(text, pattern)}')
