class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items.toString());
    }
}
const team = new Stack()
console.log(team.isEmpty());
team.push(30);
team.push(10);
team.push(40);
console.log(team.isEmpty());
console.log(team.peek());
team.pop();
console.log(team.peek());
team.print();