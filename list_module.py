'''
def List_caller(j):
    a = []
    b = []
    c = []
    for i in j:
        if type(i) == str:
            a.append(i)
        if type(i) == float or type(i) == int:
            b.append(i)
        if type(i) == bool:
            c.append(i)
    if len(a) == 0 and len(c) == 0 and len(b) != 0:
        return b
    elif len(a) == 0 and len(c) != 0 and len(b) == 0:
        return c
    elif len(a) != 0 and len(c) == 0 and len(b) == 0:
        return a
    elif len(a) == 0 and len(c) != 0 and len(b) != 0:
        return b, c
    elif len(a) != 0 and len(c) == 0 and len(b) != 0:
        return a, b 
    elif len(a) != 0 and len(c) != 0 and len(b) == 0:
        return a, c
    return a, b, c

def List_math(k,l):
    for i in l:
        if k % i == 0:
            return False
    return True

class Person :
    def __init__(self,first_name,last_name):
        self.first_name = first_name
        self.last_name = last_name
    def person_class(self):
        print(self.first_name, self.last_name)

Emir = Person('Emir','Sus')
Sas = Person('sds', 'wqeqwe')
Sas.person_class()
Emir.person_class()


def sadasfas(n):
    if n == 20:
        return
    print(n)
    sadasfas(n + 5)
sadasfas(5)
'''


