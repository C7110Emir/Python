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
def List_math(k,l):
    for i in l:
        if k % i == 0:
            return False
    return True
b = [2, 3 , 5]
for a in range(2,101):
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

num = int(input('give me a num to see divisors: '))
k = []
for a in range(1,num):
    if num % a == 0:
        k.append(a)

print(k)
    

fruits = ['apple', 'banana', 'watermelon', 'orange', 'mango', 'avocado']

fruit_list = []
fruit_list.insert(0, fruits)
print(fruit_list[0][2][7])



my_list = list(range(1, 11,))
my_list.sort(reverse=True)
print(my_list)

grocer = ["banana", ["orange", ["apple", "eggplant", "melon", "spinach", "cheese", "leek" ], "water"], "mandarin"]

print(grocer[1][1][1:6:2])


flowers = [["jasmine", ["lavender", "rose"], "tulip"]]
colors = ["red", ("blue", ["yellow", "green"]), "pink"]
text = "My two favorite flowers are {0} and {1}, two favorite colors are {2} and {3}.".format(flowers[0][2], flowers[0][1][1], colors[1][0], colors[1][1][1])
print(text)

escapes = ["\n\t", ("\t", "\t\t"), ["\n", "\n\t\t"]]

sentence = "I am 40 years old.{0} I have two children.{1} Data Science is my IT domain.".format(escapes[0], escapes[2][1])

print(sentence)

print(len(set('listen to the voice of enlisted')))

numbers_10 = [10, 30, 40, 50, 60, 70, 80, 90, 100]

numbers_10.insert(1,20)


family_members = ['Meghan', 'Tom', 'Nicole', 'Tim']

print(tuple(family_members))


def assignemnt():
    while True:
        number = float(input('give me a 4 digit number: '))
        if  number > 9999:
            print('give a smaller number')
        elif number <= 999:
            print('give bigger number')
        else:
            print(number)
            break
    if number % 4 == 0 and number % 100 == 0 and number % 400 == 0:
        print(True)
    else:
        print(False)
assignemnt()

def assignemnt():
    while True:
        number = float(input('give me a 4 digit number: '))
        if  number > 9999:
            print('give a smaller number')
        elif number <= 999:
            print('give bigger number')
        else:
            if number % 4 == 0 and number % 100 == 0 and number % 400 == 0:
                print(True)
            else:
                print(False)
            break
assignemnt()

def List_math(k,l):
    for i in l:
        if k % i == 0:
            return False
    return True
b = [2, 3 , 5]
for a in range(2,101):
    if List_math(a,b):
        b.append(a)

print(b)

a = int(input('give me a number user: '))
b = []
for i in range(1,a + 1):
    if a % i == 0:
        b.append(i)
        print(b)
print(b)



a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


print(list(set(a).intersection(set(b))))

import random
c = []
l = []
for i in range(0,5):
    n = random.randint(0,10)
    c.append(n)
print(c)

for i in range(0,5):
    k = random.randint(0,10)
    l.append(k)
print(l)


print(list(set(c).intersection(set(l))))

a = str(input('TENET: '))

b = a[::-1]

if a == b:
    print('it is a palindrome')
else:
    print('it is not a palindrome')

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

b = []

for i in a:
    if i % 2 == 1:
        b.append(i)
        print(b)
a = b
print(a)


import random

game_picks = ['Rock', 'Paper', 'Scissors']

c = random.choice(game_picks)

while True:
    a = str(input('rock paper scissors (please right answer in quotes): '))
    if a != game_picks[0] and a != game_picks[1] and a != game_picks[2]:
        print('new value please')

    else:
        if (a == 'Rock' and c == 'Rock') or (a == 'Paper' and c == 'Paper') or (a == 'Scissors' and c == 'Scissors'):
            print('tie')
            l = str(input('wanna play again?(y or n):'))
            if l != 'y':
                break
        elif (a == 'Rock' and c == 'Scissors') or (a == 'Paper' and c == 'Rock') or (a == 'Scissors' and c == 'Paper'):
            print('congrats you win!!!!!')
            l = str(input('wanna play again?(y or n):'))
            if l != 'y':
                break

        elif (a == 'Scissors' and c == 'Rock') or (a == 'Rock' and c == 'Paper') or (a == 'Paper' and c == 'Scissors'):
            print('oops, You lost!!')
            l = str(input('wanna play again?(y or n):'))
            if l != 'y':
                break
        else:
            print('byeee')




import random

counter = 0

while True:
    a = random.randrange(1, 10)
    b = int(input('guess the number: '))
    counter += 1

    if a == b:
        print('you were right')
        k = str(input('do you wanna play again(yes or exit): '))
        if k == 'yes':
            print('game starts')
        elif k == 'exit':
            print('goodbye')
            print('tries: ', counter)
            break
        else:
            print('code failed')

    elif b > a:
        print('the difference is',b - a, 'which is too high') 
        k = str(input('do you wanna play again(yes or exit): '))
        if k == 'yes':
            print('game starts')
        elif k == 'exit':
            print('goodbye')
            print('tries: ', counter)
            break
        else:
            print('code failed')


    elif b < a:
        print('the difference is', a - b,'which is too low' )
        k = str(input('do you wanna play again(yes or exit): '))
        if k == 'yes':
            print('game starts')
        elif k == 'exit':
            print('goodbye')
            print('tries: ', counter)
            break
        else:
            print('code failed')
    else: 
        print("code doesn't work")



a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


print(list(set(a).intersection(set(b))))

import random
c = []
l = []
for i in range(0,5):
    n = random.randint(0,10)
    c.append(n)
print(c)

for i in range(0,5):
    k = random.randint(0,10)
    l.append(k)
print(l)


print(list(set(c).intersection(set(l))))


x = [1, 2, 3]
y = [5, 10, 15]
allproducts = [a*b for a in x for b in y]

x = [1, 2, 3]
y = [5, 10, 15]
customlist = [a*b for a in x for b in y if a*b%2 != 0]



import random



def randomlist():
    a = list(random.sample(range(30),5))
    b, c =  [a[0], a[4]]
    print([b, c])

randomlist()


while True:
    a = str(input(' -, +, *, / '))
    b = float(input('give your first number '))
    c = float(input('give your second number '))

    if a == '-':
        print(b - c)
        i = str(input('do you wanna do another calculation?(y or n) '))
        if i == 'y':
            print('please do the inputs again')
        
        else:
            break

    
    elif a == '+':
        print(b + c)
        i = str(input('do you wanna do another calculation?(y or n) '))
        if i == 'y':
            print('please do the inputs again')
        
        else:
            break


    elif a == '*':
        print(b * c)
        i = str(input('do you wanna do another calculation?(y or n) '))
        if i == 'y':
            print('please do the inputs again')
        
        else:
            break

    
    elif a == '/':
        print(b / c)
        i = str(input('do you wanna do another calculation?(y or n) '))
        if i == 'y':
            print('please do the inputs again')
        
        else:
            break




import random



def randomlist():
    a = list(random.sample(range(30),5))
    print(a)
    b=  [a[0], a[4]]
    print(b)

randomlist()


def generate_fib():
    count = int(input('give the numbers to generate'))
    i = 1
    if count == 0:
        fib = []
    elif count == 1:
        fib = [1]
    elif count == 2:
        fib = [1,1]
    elif count > 2:
        fib = [1,1]
        while i < (count - 1):
            fib.append(fib[i] + fib[i - 1])
            i += 1
    print(fib)   
    return fib
    
generate_fib()



 
def loop_thing(k):
    a = []
    for i in k:
        if i not in a:
            a.append(i)
    return a

l = [1,2,3,4,3,2,1]

print(loop_thing(l))


def set_thing(x):
    return list(set(x))

print(set_thing(l))


def stringsarelists(x):
    haha = x.split()
    ahah = haha[::-1]
    return ahah

k = 'My name is Michele'
print(stringsarelists(k))



import string
import random

def pw_gen(size = 8, chars=string.ascii_letters + string.digits + string.punctuation):
	return ''.join(random.choice(chars) for _ in range(size))

print(pw_gen(int(input('How many characters in your password?'))))


#if you are trying to get random numbers,symbols,numbers. use ASCII


import random

def compare_numbers(number, user_guess):
    cowbull = [0,0] #cows, then bulls
    for i in range(len(number)):
        if number[i] == user_guess[i]:
            cowbull[1]+=1
        else:
            cowbull[0]+=1
    return cowbull

if __name__=="__main__":
    playing = True #gotta play the game
    number = str(random.randint(1000,9999)) #random 4 digit number
    print(number)
    guesses = 0

    while playing:
        user_guess = input("Give me your best guess!")
        if user_guess == "exit":
            break
        cowbullcount = compare_numbers(number,user_guess)
        guesses+=1

        print("You have "+ str(cowbullcount[0]) + " cows, and " + str(cowbullcount[1]) + " bulls.")

        if cowbullcount[1]==4:
            playing = False
            print("You win the game after " + str(guesses) + "! The number was "+str(number))
            break #redundant exit
        else:
            print("Your guess isn't quite right, try again.")



from collections import Counter 
import random
  
def most_frequent(List): 
    occurence_count = Counter(List) 
    return occurence_count.most_common(1)[0][0] 
    
List = [1, 3, 7, 4, 3, 0, 3, 6, 3]

a = most_frequent(List)

print(a)

List = [1, 3, 7, 4, 3, 0, 3, 6, 3]
print(List)

def most_frequent(List): 
    return max(set(List), key = List.count) 
a = most_frequent(List)
b = []
for i in List:
    if i == a:
        b.append(i)
c = len(b)

print('the most frequent number is {} and it was {} times repeated'.format(a,c))

'''


'''

c = {
    'example': 5,
    'XD':'whatever',
    'hahaha': True,
    'laua': 9,
    'afasfas': 213


}

print(c.get('XD'))#Gives the value of specific key 
print(c.items())# returns tuple for each key value pair in a list
print(c.keys()) # returns a list that contains keys 
print(c.pop('XD'))# removes the element with specific keyword
print(c.popitem())#removes last key value pair inserted
print(c.setdefault('laua'))#returns the value of specific key
c.setdefault('keks', 231)# creates a new key value pair inside the dictionary 
c.update({'asdasf' : 2134}) #adds new key value pair 
print(c.values())
c['example'] = 10 #changes the value of key
print(c)
p = ['asd','qw','qrt3']


k = (23,'kaka', 21321,'lemon','water','lemon','lemon')

z = k.index('lemon')
l = k.count('kaka')

print(z)
'''
'''
j = {23,True,21, 26,'weqw','sasd'}

i = {25,'weqw',78,True,}

i.add(26) #adds an element to the list  
print(i) 
print(j.difference(i)) #returns the diffrences between sets

print(j.intersection(i)) # returns the common parts between two lists
i.difference_update(j) #clears out the common value on first set you defined
i.intersection_update(j)# clears out the uncommon values between two lists and updates the first list
j.discard(21)#removes a specific item
print(i)
print(j)
i.add(23)
i.add(26)
i.add('sasd')
print(i)
print(i.isdisjoint(j)) #if there is common value between sets returns false if not returns true
print(i.issubset(j))#returns true if all items in set exist in specified set which is in paranthesis 
print(j.issuperset(i))# returns true if all items exist in first list which is j here
'''
#symmetric_difference() prints out the non common items
#symmetric_difference_update()
'''
o = {2,6,123,366,True}

q = {2,123,823,234,False}

v = {23,12341,6236,26436}
print(o.union(q))#unites the sets
print(o.update(v))
'''
'''
d = c.copy()

print(d)
k = {


}

print(c.clear())

l= k.fromkeys('sadas',12)
print(l)
print(d)
'''
'''
thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

x = thistuple.count(5)#Counts the value inside tuple

print(x)


y = thistuple.index(8) # gives the index of the VALUE



listOne = [3, 6, 9, 12, 15, 18, 21]
listTwo = [4, 8, 12, 16, 20, 24, 28]

odd_index_lisone = listOne[1::2]

evenindex = listTwo[0::2]
print(odd_index_lisone)
print(evenindex)

thirdlist =[]

thirdlist.extend(odd_index_lisone)
thirdlist.extend(evenindex)
print(thirdlist)

List = [54, 44, 27, 79, 91, 41]

b = List.pop(4)
print(b)
print(List)

c = List.insert(2,b)
print(List)

List.append(b)
print(List)
sampleList = [11, 45, 8, 23, 14, 12, 78, 45, 89]
sampleList = [11, 45, 8, 23, 14, 12, 78, 45, 89]

chunkone = sampleList[0:3]
print(chunkone)
chunkone.reverse()
print(chunkone)

chunktwo = sampleList[3:6]
print(chunktwo)
chunktwo.reverse()
print(chunktwo)

chunkthree = sampleList[6:]
print(chunkthree)
chunkthree.reverse()
print(chunkthree)

sampleList.clear()
sampleList.append(chunkone)
sampleList.append(chunktwo)
sampleList.append(chunkthree)

print(sampleList)

Original= [11, 45, 8, 11, 23, 45, 23, 45, 89]

dictionary = dict()

for a in Original:
    if a in dictionary:
        dictionary[a] += 1
    else:
        dictionary[a] = 1

print(dictionary)


first = [2, 3, 4, 5, 6, 7, 8]
second = [4, 9, 16, 25, 36, 49, 64]

sett = set()

for i in first:
    for z in second:
        if i ** 2 == z:
            sett.add((i,z))

print(sett)

FirstSet = {65, 42, 78, 83, 23, 57, 29}
SecondSet = {67, 73, 43, 48, 83, 57, 29}
b = FirstSet.intersection(SecondSet)
print(b)

FirstSet.difference_update(SecondSet)

print(FirstSet)



firstSet = {27, 43, 34}
secondSet = {34, 93, 22, 27, 43, 53, 48}


b = firstSet.issubset(secondSet)
print('First set is subset of second set - ',b)
d = secondSet.issubset(firstSet)
print('Second set is subset of First set - ', d)

c = firstSet.issuperset(secondSet)
print('First set is Super set of second set - ', c)
e = secondSet.issuperset(firstSet)
print('Second set is Super set of First set - ', e)

if d == True:
    secondSet.clear()
elif b == True:
    firstSet.clear()
else:
    print('no subsets or supersets')

print(firstSet)
print(secondSet)

rollNumber = [47, 64, 69, 37, 76, 83, 95, 97]
sampleDict ={'Jhon':47, 'Emma':69, 'Kelly':76, 'Jason':97}

c = sampleDict.values()
print(c)


for a in rollNumber:
    if a not in c:
        rollNumber.remove(a)

print(rollNumber)

k = []
speed ={'jan':47, 'feb':52, 'march':47, 'April':44, 'May':52, 'June':53, 'july':54, 'Aug':44, 'Sept':54}



c = speed.values()

k.extend(set(c))
print(k)

sampleList = [87, 45, 41, 65, 94, 41, 99, 94]
print(sampleList)
c = set(sampleList)
print(c)
d = tuple(c)
print(d)
print(max(c))
print(min(c)) 


def stutter(x):
    c,d = x[0], x[1]
    e = c + d +'...'+ ' ' + c + d + '...'+' '+  x
    return e

print(stutter("incredible"))

c = str(input('sfaffsafa'))

print(int(c))


def math(a,b):
    c = a % b

    return c

print(math(20,18))


def mins(x):
    c = x * 60
    return c


print(mins(5))


def rightshift(a,b):
    l = a >> b
    return l

print(rightshift(4666,6))



def thirdedge(a,b):
    c = (a + b) - 1
    return c

print(thirdedge(8,10))


def converter(x):
    print(type(x))
    if type(x) == str:
        str_to_int = int(x)
        print(type(str_to_int))
        return str_to_int
    elif type(x) == int:
        int_to_str = str(x)
        print(type(int_to_str))
        return int_to_str
    else:
        print('doomed')

print(converter(25))


def lenghtie(x):
    c = str(x)
    k = 0
    for i in c:
        k += 1
    return k

print(lenghtie(10))


def fuckfatherandson(f,s):
    c = (s * 2) - f
    k = f + c
    l = s + c
    z = f - c
    if c > 0:
        print(c, 'years from now, the father will be', k ,'years old and his son will be',l, 'years old' )
    elif c < 0:
        print(-1*c,'years ago, the father was',z,'years old and his son was',s - c,'years old')
    else:
        print('xd')

fuckfatherandson(36,7)


def fizzbuzz(k):
    if k % 3 == 0 and k % 5 == 0:
        print('"FizzBuzz"')
    elif k % 3 == 0:
        print('"Fizz"')
    elif k % 5 == 0:
        print('"Buzz"')
    elif k % 3 != 0 and k % 5 != 0:
        print(str(4))
    else:
        print('nothing')

fizzbuzz(4)



def fraction(f):
    grams = 28
    if f == 'half':
        print(grams / 2)
    elif f == 'quarter':
        print(grams / 4)
    elif f == 'eight':
        print(grams / 8)
    elif f == 'sixteenth':
        print(grams / 16)
    else:
        print('wtf')

fraction(str(input('give a fraction with words: ')))




def list_of_multiples(x,y):
    b = [x]
    k = x
    for i in range(y + 1):
        
        b.append(d)

print(list_of_multiples(7,5))

import string

valid = str(input('give a 4 to 6 character password to see if its valid: '))



if len(valid) > 6 or len(valid) < 4:
    print('try again')

elif string.ascii_letters in valid: 
    print('only numbers')

elif ' ' in valid:
    print('no white spaces')

else: 
    print(valid)


a = ({ "z": "q", "w": "f" })

reversed_dictionary = {value : key for (key, value)in a.items()}

print(reversed_dictionary)


class player():

    def __init__(self, name, age, height, weight):
        self.name = name
        self.age = age
        self.height = height
        self.weight = weight

    def get_age(self):
        return '{} is age {}'.format(self.name, self.age)

    def get_height(self):
        return '{} is {}cm'.format(self.name, self.height)

    def get_weight(self):
        return '{} weighs {}kg'.format(self.name, self.weight)


p1 = player('Emir Birlik', 18, 187, 85)

print(p1.get_age())


b = [True, False, False, False, False]
d = 0
for i in b:
    if len(b) == 0:
        print(0)
    elif i == True:
        d += 1
    elif i != True:
        continue
    else:
        print('nothing')

print(d)




sales = {
  "cost_value": 31.87,
  "sell_value": 45.00,
  "inventory": 1000
}  

e = (sales.get("sell_value") - sales.get("cost_value")) * sales.get('inventory')

print(round(e))



d = float(input('what is the payroll of the employee '))

print('$'+"{:.2f}".format(d))


k = float(input('what is the payroll of the employee '))

print('$'+"{:.2f}".format(k))


class Employee:

    ganyotcu = 50000

    def __init__(self,FirstName,LastName,Payment,lastyearpayment):
        self.first = FirstName
        self.last = LastName
        self.pay = Payment
        self.lastyear = lastyearpayment

    def payroll(self):
        print(self.pay - self.lastyear)
        
    
emp1 = Employee('Corey','John', 50000, 40000)

emp1.payroll()

List = [1, 3, 7, 4, 3, 0, 3, 6, 3]
print(List)

def most_frequent(List): 
    return max(set(List), key = List.count) 
a = most_frequent(List)
b = []
for i in List:
    if i == a:
        b.append(i)
c = len(b)

print('the most frequent number is {} and it was {} times repeated'.format(a,c))

section_3_5 = "python data types and useful operations"
print(str.title(section_3_5))

print(int("5" + "1"))
print(str("5" + "1"))
print("5" + "1")


var1 = "sleep"
var2 = "eat"
var3 = "better"
var4 = "life"

sentence = f"The less you {var1} and {var2}, the {var3} your {var4} will be."

print(sentence)

def palindrome(x):
    k = str(x)
    if k[0:] == k[::-1]:
        return True
    else:
        return False        

print(palindrome(121))

expenses = {
    'January': 2200,
    'February': 2350,
    'March': 2600,
    'April': 2130,
    'May': 2190
}

print(expenses.get('February') - expenses.get('January'))

print(expenses.get('January') + expenses.get('February') + expenses.get('March'))


for i in expenses.values():
    if 2000 == i:
        print('yes we do have')
    else:
        continue

expenses.setdefault('June', 1980)
expenses['April'] = 2330
print(expenses)

exp = [2200,2350,2600,2130,2190]

# 1. In Feb, how many dollars you spent extra compare to January?
print("In feb this much extra was spent compared to jan:",exp[1]-exp[0]) # 150

# 2. Find out your total expense in first quarter (first three months) of the year
print("Expense for first quarter:",exp[0]+exp[1]+exp[2]) # 7150

# 3. Find out if you spent exactly 2000 dollars in any month
print("Did I spent 2000$ in any month? ", 2000 in exp) # False

# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
exp.append(1980)
print("Expenses at the end of June:",exp) # [2200, 2350, 2600, 2130, 2190, 1980]

# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
# based on this
exp[3] = exp[3] - 200
print("Expenses after 200$ return in April:",exp) # [2200, 2350, 2600, 1930, 2190, 1980]

#linked lists
class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.nextval = None

class SLinkedList:
    def __init__(self):
        self.headval = None

list1 = SLinkedList()
list1.headval = Node("Mon")
e2 = Node("Tue")
e3 = Node("Wed")
# Link first Node to second node
list1.headval.nextval = e2

# Link second Node to third node
e2.nextval = e3


class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    def print(self):
        if self.head is None:
            print("Linked list is empty")
            return
        itr = self.head
        llstr = ''
        while itr:
            llstr += str(itr.data)+' --> ' if itr.next else str(itr.data)
            itr = itr.next
        print(llstr)

    def get_length(self):
        count = 0
        itr = self.head
        while itr:
            count+=1
            itr = itr.next

        return count

    def insert_at_begining(self, data):
        node = Node(data, self.head)
        self.head = node

    def insert_at_end(self, data):
        if self.head is None:
            self.head = Node(data, None)
            return

        itr = self.head

        while itr.next:
            itr = itr.next

        itr.next = Node(data, None)

    def insert_at(self, index, data):
        if index<0 or index>self.get_length():
            raise Exception("Invalid Index")

        if index==0:
            self.insert_at_begining(data)
            return

        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                node = Node(data, itr.next)
                itr.next = node
                break

            itr = itr.next
            count += 1

    def remove_at(self, index):
        if index<0 or index>=self.get_length():
            raise Exception("Invalid Index")

        if index==0:
            self.head = self.head.next
            return

        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break

            itr = itr.next
            count+=1

    def insert_values(self, data_list):
        self.head = None
        for data in data_list:
            self.insert_at_end(data)


if __name__ == '__main__':
    ll = LinkedList()
    ll.insert_values(["banana","mango","grapes","orange"])
    ll.insert_at(1,"blueberry")
    ll.remove_at(2)
    ll.print()

    ll.insert_values([45,7,12,567,99])
    ll.insert_at_end(67)
    ll.print()






fruits = ['Apples', 'Oranges', 'Bananas',]
quantities = [5, 3, 4,6]
prices = [1.50, 2.25, 0.89,0.231]
# Desired output
[('Apples', 5, 1.50),
('Oranges', 3, 2.25),
('Bananas', 4, 0.89)]


i = 0

List = []

for k in fruits:
    i += 1
    quant = quantities[i]
    amount = prices[i]
    List.append((k, quant, amount))
print(List)

'''

abc_list=['a', 'b', 'c']
num_list=[1, 2, 3]
for char in abc_list:
    for num in num_list:
        print(char, num)

















