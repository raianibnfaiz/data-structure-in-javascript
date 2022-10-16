class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    display() {
        console.log("Person name and id is ", this.name, " and ", this.id);
    }

}
p1 = new Person("Raian", 3);
p2 = new Person("Orpi", 7)
p1.display();
p2.display();