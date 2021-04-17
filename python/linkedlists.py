class Node:

    def __init__(self, value = None, next= None):
        self.value = value
        self.next = next

class Objcreator:
    def __init__(self):
        self.head = None


    def print(self):
        datalist = []
        if self.head == None:
            print('why did you even create all this mess if you are not going to pass in something???!!?!??!?!?!?!??!?!?!?!?!?!??!?!?!??!?????')
        else:
            sechead = self.head
            while True:
                if sechead.next == None:
                    datalist.append(sechead.value)
                    print(datalist)
                    break
                datalist.append(sechead.value)
                sechead = sechead.next

    def lelenght(self):
        if self.head == None:
            return 0
        else:
            sechead = self.head
            i = 0
            while True:
                if sechead == None:
                    return i

                sechead = sechead.next
                i += 1 
            
    def addoverindex(self,index,value):
        newnode = Node(value)
        if self.lelenght() < index:
            print('out of index')
        else:
            sechead = self.head
            i = 0
            while True:
                if i == index - 1:
                    newnode.next = sechead.next
                    sechead.next = newnode
                    break
                sechead = sechead.next
                i += 1



    def Beginning(self, value):
        newnode = Node(value)
        if self.head == None:
            self.head = newnode
        else:
            sechead = self.head
            newnode.next = sechead
            self.head = newnode

    def endadder(self, value):
        newnode = Node(value)
        if self.head == None:
            self.head = newnode
        else:
            sechead = self.head
            while True:
                if sechead.next == None:
                    sechead.next = newnode
                    break
                sechead = sechead.next 
    
    def startremover(self):
        if self.lelenght() == 1:
            self.head = None
        else:
            sechead = self.head
            self.head = sechead.next

    def endremover(self):
        sechead = self.head
        i = 1
        a = self.lelenght() -1
        if a == 0:
            self.head = None
        else:    
            while True:
                if i == a:
                    sechead.next = None
                    break
                
                sechead = sechead.next
                i += 1

class Stack:

    def __init__(self):
        self.stack = Objcreator()
    def pop(self):
        if self.stack.lelenght()< 1:
            return None
        return self.stack.endremover()

    def push(self, item):
        self.stack.endadder(item)

    def size(self):
        return self.stack.lelenght()

class Queue:

    def __init__(self):
        self.queue = Objcreator()

    def enqueue(self, item):
        self.queue.endadder(item)

    def dequeue(self):
        self.queue.startremover()

    def size(self):
        return self.queue.lelenght()
        
                
            




if __name__ == "__main__":
    objcr = Objcreator()
    stack = Stack()
    stack.push(25)
    stack.pop()
    print(stack.size())

    queue = Queue()
    queue.enqueue('oof')
    print(queue.size())
    queue.dequeue()
    print(queue.size())










