'''
str="haha"

x=str[::-1]
print(x)
# writes it backwards

import sys
print("Python version")
print (sys.version)
print("Version info.")
print (sys.version_info)
#to check python version with code

city = 'Phoenix'

print(city[1:])  # starts from index 1 to the end
print(city[:6])  # starts from zero to 5th index
print(city[::2])  # starts from zero to end by 2 step
print(city[1::2])  # starts from index 1 to the end by 2 step
print(city[-3:])  # starts from index -3 to the end
print(city[::-1])  # negative step starts from the end to zero

vegetable = 'Tomato'

print('length of the word', vegetable, 'is :', len(vegetable))


string = '00'


print(string.startswith('0',0))
print(string.endswith('0',1))




name = 'HARRISONNNNN'

print(name.strip())


import list_module

b = [2, 3 , 5]
for a in range(2,1001):
    if list_module.List_math(a,b):
        b.append(a)

print(b)


def count_odd_digits(n):
    count = 0
    for a in str(n):
        if int(a) % 2 != 0:
            count += 1
    return count

print(count_odd_digits(5319))

def if_prime(n):
    for i in range(2,n):
        if n % i == 0:
            return False
    return True
def prime_divsors(n):
    b = []
    for c in range(2,n + 1):
        if n % c == 0:
            if if_prime(c):
                b.append(c)
    return b

print(prime_divsors(1020))

2
celcius = float(input("how is the weather over there: "))
fahrenheit_convertion = (celcius * 1.8)+ 32

print(fahrenheit_convertion)


kilometer = float(input("give the distance in km: "))

miles_conerter = kilometer * 0.6214

print(miles_conerter)


print(not 0 and "write me")


def whatever(n,num,check):
    if n % 2 == 0 and n % 4 == 0:
        print('your mom is gay: ')

    elif n % 2 == 0:
        print('fuck you motherfucker: ')
    

    else:
        print('go fuck yourself: ')

    if num % check == 0:
        print("your mom didn't wanted give a birth to you" )
    
    else:
        print('kill your self while jumping off the cliff')

whatever(float(input('you fuckin dumbfuck')),float(input('kick yourself in balls')),float(input('shoot your mom then yourself')))
'''
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

user_num = float(input('give a num'))
def whatever():
    b = []
    for i in a:
        if i >= user_num:
            continue
        else:
            b.append(i)
    print(b)
whatever()
  




