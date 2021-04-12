// Basic code for Javascript
export {};
function log(title) {
    console.log(title);
}
let title = "Hello";
log(title);

// Variable declaration

function doSomething() {
    for (var i: number = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Finally i is", i); // value of i available outside the block

    for (let j: number = 0; j < 10; j++) {
        console.log(j);
    }
    // this shows error beacuse j has block scope
    // console.log("Finally j is ",j)
}

doSomething();
//typescript doesn't show error in
let a;
a = 10;
a = "Hello";

let count: number; //better to define type of variable
count = 10;
// valid
console.log(a);
console.log(count);

//Variable's Types
let x: number;
let b: string;
let c: boolean;
let array: number[] = [1, 2, 3, 4, 5, 6];
let any: any[] = [1, "string", false, { agree: false }, [1, 4, 7]];

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
}
let backgroundColor = Color.Green;

// type is fixed(String)
let message = "abc";
let endsWithC = message.endsWith('c')

// type assertions with(type "any")
let msg;
msg = "askfjskdc";

let endsWith = (<string>msg).endsWith("c");
let alternative = (msg as string).endsWith("c");

// arrow functions

let logArrow = function (message) {
    console.log(message);
};
//  or

let doLogArrow = (message) => console.log(message);

// Custom types

// Not Recommended instead use interface
let drawPoint = (point: { x: number; y: number }) => {};

drawPoint({ x: 1, y: 2 });

//use interface
interface Point {
    a: number,
    b: number
}

let drawPoint2 = (point: Point) => {};
drawPoint2({
    a: 10,
    b: 30,
});

class PointClass{
    x: number;
    y: number;
    // implemetation is allowed
    draw2() {
        console.log("x is ", this.x);
        console.log("y is ", this.y);
    }

    getDistance(another: PointClass) {}
}

// this will throw error because we didn't allocated memory to variables with custom type
let point1: PointClass;
// point1.draw2()

let pointClass: PointClass = new PointClass();
pointClass.x = 1;
pointClass.y = 1;

pointClass.draw2();
 
// Using the Constructor
class Point2 {
    x: number;
    y: number;
    
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw3() {
        console.log("x is ", this.x);
        console.log("y is ", this.y);
    }
}

let point2 = new Point2(3, 5);
point2.draw3();

//class : Access Modifiers(to limit the visibility scope of properties )

class Employee {
    public empName: string;
    private empAge: number;
    protected empAgree: boolean;

    constructor(name?: string, age?: number, agree?: boolean) {
        this.empName = name;
        this.empAge = age;
        this.empAgree = agree;
    }

    greet() {
        //all variable is accesible inside class
        console.log(
            `Good Mornning ${this.empName} ${this.empAge} ${this.empAgree}`
        );
    }
}

let emp1 = new Employee("John", 29, true);
console.log(emp1.empName);
console.log(emp1.empAge); //Error - private
console.log(emp1.empAgree); //Error - protected
emp1.greet();

class Manager extends Employee {
    //Derived Class
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        //Error - private property not accessible in Derived class or anywhere outside class
        console.log(
            `Manager Delegated Tasks ${this.empName} ${this.empAge} ${this.empAgree}`
        );
    }
}

let m1 = new Manager("Steve");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
console.log(emp1.empAge); //Error - private
console.log(emp1.empAgree); //Error - protected accessible inside derived but not outside derived

// Properties

class Point3 {
    constructor(private x?: number, private y?: number) {}

    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0");
        }
        this.x = value;
    }
}

let point3 = new Point3(1, 3);
let num = point3.getX();
point3.setX(100);
console.log(num);

// Getters and Setters
// with get and set keyword

class Point4 {
    constructor(private x?: number, private y?: number) {}

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0");
        }
        this.x = value;
    }
}

let point4 = new Point4(1, 3);

console.log(point4.X);


