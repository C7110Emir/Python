class binary :
    def __init__(self, data = None, left = None, right= None):
        self.data = data
        self.left = left
        self.right = right

class binaryoperation:
    def __init__(self):
        self.root = None

    def inserter(self,data):
        node = binary(data)
        if self.root == None:
            self.root = node
        else:
            secroot = self.root
            while True:
                if data > secroot.data:
                    if secroot.right == None:
                        secroot.right = node
                        break                       
                    else:
                        secroot = secroot.right

                elif data <= secroot.data:
                    if secroot.left == None:
                        secroot.left = node
                        break
                    else:
                        secroot = secroot.left
    
    def maxremover(self):
        maxdata = None
        if self.root == None:
            print("you can't because your tree is empty")
        elif self.root.right == None and self.root.left == None:
            maxdata = self.root.data
            self.root = None
        elif self.root.right == None and self.root.left != None:
            secroot = self.root
            maxdata = self.root.data
            self.root = None
            self.root = secroot.left

        else:
            secroot = self.root
            while True:
                if secroot.right.right == None:
                    maxdata = secroot.right.data
                    secroot.right = None
                    break
                else:
                    secroot = secroot.right
        return maxdata
    
    def minremover(self):
        minvalue = None
        if self.root == None:
            print("you can't because your tree is empty")
        
        elif self.root.left == None and self.root.right == None:
            minvalue = self.root.data
            self.root = None
        
        elif self.root.left == None and self.root.right != None:
            secroot = self.root
            minvalue = self.root.data
            self.root = None
            self.root = secroot.right
        else:
            secroot = self.root
            while True:
                if secroot.left.left == None:
                    minvalue = secroot.left.data
                    secroot.left = None
                    break
                else:
                    secroot = secroot.left
        return minvalue

    def valuesearch(self,data):
        if self.root == None:
            return "tree is empty so your value doesn't exist"
        else:
            secroot = self.root
            while True:
                if secroot == None:
                    return f"{data} doesn't exist inside the list"
                elif data > secroot.data:
                    secroot = secroot.right
                elif data < secroot.data:
                    secroot = secroot.left
                elif data == secroot.data:
                    valuereturn = f'{data} exists inside list'
                    return valuereturn

    def preorder(self, root):
        if root == None:
            return
        print(root.data)
        self.preorder(root.left)
        self.preorder(root.right)
    
    def inorder(self,root):
        if root == None:
            return
        
        self.preorder(root.left)
        print(root.data)
        self.preorder(root.right)
    
    def postorder(self,root):
        if root == None:
            return
        
        self.preorder(root.left)
        self.preorder(root.right)
        print(root.data)

    
    
        


if __name__ == "__main__":
    binar = binaryoperation()
    binar.inserter(8)
    binar.inserter(3)
    binar.inserter(10)
    binar.inserter(1)
    binar.inserter(6)
    binar.inserter(4)
    binar.inserter(7)
    binar.inserter(14)
    binar.inserter(13)
    binar.preorder(binar.root)
    #binar.inorder(binar.root)
    binar.postorder(binar.root)
    