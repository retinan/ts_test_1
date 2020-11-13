"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var count = 0;
count + -1;
// count = '갑분문';
var message = "hello world";
var done = true;
var numbers = [1, 2, 3];
var messages = ['hello', 'world'];
messages.push('yo');
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = 'red';
color = 'yellow';
color = 'orange';
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3]);
console.log(total);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (ttt) { console.log(ttt.getArea()); });
function merge1(a, b) {
    return __assign(__assign({}, a), b);
}
var merged1 = merge1({ foo: 1 }, { bar: 2 });
console.log(merged1);
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
var merged2 = merge2({ foo: 1 }, { bar: 2 });
// const merged2 = merge2({foo:1}, {bar:2});
console.log(merged2);
function wrap(params) {
    return { params: params };
}
var wrapped = wrap(10);
console.log(wrapped);
// 클래스 제네릭
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (i) {
        this.list.push(i);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
