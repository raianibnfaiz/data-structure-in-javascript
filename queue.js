class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;

    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}
const team = new Queue()
console.log(team.isEmpty());
team.enqueue(30);
team.enqueue(10);
team.enqueue(40);
console.log(team.isEmpty());
console.log(team.peek());
team.dequeue();
console.log(team.peek());
team.print();
console.log(team.size());