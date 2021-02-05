
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

print(is_power_of_two(8))

# & operator
# if they are different turns out as 0 



a = 6 | 5

#110
#101
#=111

print(a)

#If there is 1 turns out as 1



b = 6 ^ 5

#110
#101
# = 011

#If they are different turns out 1 

print(b)

c = 6 >> 1
#110
# = 011

#Takes one binary number from right side and adds it to left side
print(c)

d = 4 << 2
#100
# = 
# Takes one zero (visable or not) from the left side adds it to right side
print(d)

e = ~11
bin(~11)

#flips 0 to 1, 1 to 0 
#but this thing sucks so it doesn't work with the way it suppose to be working
print(e)