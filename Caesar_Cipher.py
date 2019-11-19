text = input('insert text to encrypt: ')
pattern = int(input('choose a shift pattern: '))
alphabet = abcdefghijklmnopqrstuvwxyz


def encrypt(text, pattern):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + pattern - (ord('A'))) % len(alphabet) + (ord('A')))
        else:
            result += chr((ord(char) + pattern - (ord('a'))) % len(alphabet) + (ord('a')))
    return result


print(f'Caesar Cipher: {encrypt(text, pattern)}')
