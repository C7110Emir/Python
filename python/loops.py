'''
coin = 1000 
profit = 0
for j in range(7):
    profit += (coin * 0.07)  
    #print(coin + profit)

#print(profit)
#print(coin + profit)

deposit= 1000
profit = (((deposit * 0.07) * 7) + deposit)
#print(profit)

#####################################################################################################

fault_count = 3000
forgive_count = 1000
for love in range(2):
    forgive_count += 1000
    print(forgive_count)

if forgive_count == fault_count:
    print('love you, forgiven by forgiven count :', forgive_count)
else:
    print('fuck off, this is over : ', fault_count)

#####################################################################################################

lmao = ['kekw', 9, 3.14, True]
for a in lmao:
    print(a)

#####################################################################################################
    # Prints out the numbers 0,1,2,3,4
for x in range(5):
    print(x)

#####################################################################################################
# Prints out 3,4,5
for x in range(3, 6):
    print(x)

#####################################################################################################
# Prints out 3,5,7
for x in range(3, 8, 2):
    print(x)

#####################################################################################################

# Prints out 0,1,2,3,4

count = 0
while count < 5:
    print(count)
    count += 1  # This is the same as count = count + 1

#####################################################################################################

lol = 25 
while lol > 10:
    print(lol)
    lol -= 5

#####################################################################################################

# Prints out 0,1,2,3,4
#ends the loop when it reaches to the if statement

count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break

#####################################################################################################

# Prints out only odd numbers - 1,3,5,7,9
for x in range(10):
    # Check if x is even, continue block skips the even numbers and prints odd nums
    if x % 2 == 0:
        continue
    print(x)

#####################################################################################################
 
 #Prints out 0,1,2,3,4 and then it prints "count value reached 5"

count=0
while(count<5):
    print(count)
    count +=1
else:
    print("count value reached %d" %(count))

#####################################################################################################

# Prints out 1,2,3,4
for i in range(1, 10):
    if(i%5==0):
        break
    print(i)
else:
    print("this is not printed because for loop is terminated because of break but not due to fail in condition")

#####################################################################################################
nl=[]
for x in range(1500, 2701):
    if (x%7==0) and (x%5==0):
        nl.append(str(x))
print (','.join(nl))
#append is used to store the values you get into the list

import random
target_num, guess_num = random.randint(1, 10), 0
while target_num != guess_num:
    guess_num = int(input('Guess a number between 1 and 10 until you get it right : '))
print('Well guessed!')
#RANDOM NUMBER

#to reverse all the array data structures use .reverse
x = 5
y = 4 
z = 10
if x > y and not x > z:
    print(True)
else:
    print(False)

a = 5
b = 10

for j in range(a,b + 1):
    print(j)

a = 15
b = 25

if a < b:
    for j in range(a,b):
        if j % 2 == 0:
            print(j)
elif a >= b:
    for l in range(a,b,-1):
        if l % 2 == 1:
          continue
        print(l)
else:
    print('nothing')

a = 0
for k in range(11):
    b = float(input('give a number: '))
    a += b
    print(a)
print(a)

num = int(input('give a number: '))
a = 0
for j in range(num + 1):
    a += j
    print(a)

numb = int(input('give number: '))
a = 0
for k in range(numb):
    b = float(input('give a number: '))
    a += b
    print(a)
print(a)


coc = int(input('give a number: '))
for j in range(coc):
    h = 0
    h += j**3
    print(h,j)

range_num = int(input('give repeat time: '))

for a in range(range_num):
    b = str(input('give a number has 0 in it: '))
    print(b.count('0', 0, 2000))


a = 0
for k in range(11):
    b = float(input('give a number: '))
    a += b
    print(a)
print(a)


i = 0

while i < 5:
    i += 1
    print(i)
'''



