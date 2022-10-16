class Student :
    def __init__(self,name,id):
        self.name=name;
        self.id=id;
    def display(self):
        print("Student name and id is", self.name, self.id);
std1= Student("Raian",3);
std2= Student("Orpi",7);
std1.display();
std2.display();