'''
def is_Power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

print(is_Power_of_two(2))

print(43 // 5)

print(15 // 5 , 25 * 5)


a = int(input('give a number to find its square: '))

print(a ** 2)


height = float(input('give the height of the triangle: '))
base = float(input('give the base of the triangle: '))
area = (base * height)//2

print(area)

year = 2020

age_of_user = float(input('how old are you: '))
name_of_user = str(input('what is your name :'))

years_to_hundred = 100 - age_of_user

print(years_to_hundred)


print(2020 + years_to_hundred, " you will be hundred years old on that year")
'''


year = 2020

number_of_user = int(input('how many users are goint to ask: '))

for a in range(number_of_user):
    age_of_user = float(input('how old are you: '))
    name_of_user = str(input('what is your name :'))
    years_to_hundred = 100 - age_of_user
    print(years_to_hundred)
    print(2020 + years_to_hundred, " you will be hundred years old on that year")

