
let count = 0;
count+-1;
// count = '갑분문';

const message: string = "hello world";

const done: boolean = true;

const numbers: number[] = [1,2,3];
const messages: string[] = ['hello', 'world'];

messages.push('yo');

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
color = 'orange';


function sum(x:number, y:number): number {
    return x + y;
}

console.log(sum(1,2));

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0)
}

const total = sumArray([1,2,3]);

console.log(total);

// interface test

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    radius: number;
    constructor( radius:number) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor( width: number,  height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [ new Circle(5), new Rectangle(10,5)];

shapes.forEach( ttt => {console.log(ttt.getArea())});


function merge1(a:any, b:any): any {
    return {
        ...a, ...b
    };
}

const merged1 = merge1({foo:1}, {bar:2});

console.log(merged1);

function merge2<A,B>(a:A, b:B): A&B {
    return {
        ...a, ...b
    };
}

const merged2 = merge2({foo:1}, {bar:2});
// const merged2 = merge2({foo:1}, {bar:2});

console.log(merged2);

function wrap<T>(params:T) {
    return { params }
}

const wrapped = wrap(10)

console.log(wrapped);


// 클래스 제네릭
class Queue<T> {
    list:T[] = [];
    get length(){
        return this.list.length;
    }

    enqueue(i:T) {
        this.list.push(i);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.length);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);




