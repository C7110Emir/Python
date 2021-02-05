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
c.setdefault('keks', 231)# Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
c.update({'asdasf' : 2134}) #adds new key value pair 
print(c.values())
c['example'] = 10 #changes the value of key
print(c)
#fromkeys() = returns a dictionary with the specified keys and value
x = ('key1', 'key2', 'key3')
y = 0

thisdict = dict.fromkeys(x, y)


print(thisdict)
#############################################################################
#############################################################################




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
#symmetric_difference() prints out the non common items
#symmetric_difference_update()
print(i.union(j))#unites the sets


####################################################################
####################################################################
thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

x = thistuple.count(5)#Counts the value inside tuple

print(x)


y = thistuple.index(8) # gives the index of the VALUE

####################################################################
####################################################################
'''


thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

print(type(thistuple))

d = list(thistuple)

print(type(d))

d.append(25)

print(tuple(d))
