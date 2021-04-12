"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
function log(title) {
    console.log(title);
}
var title = "Hello";
log(title);
// Variable declaration
function doSomething() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Finally i is", i); // value of i available outside the block
    for (var j = 0; j < 10; j++) {
        console.log(j);
    }
    // this shows error beacuse j has block scope
    // console.log("Finally j is ",j)
}
doSomething();
//typescript doesn't show error in
var a;
a = 10;
a = "Hello";
var count; //better to define type of variable
count = 10;
// valid
console.log(a);
console.log(count);
//Variable's Types
var x;
var b;
var c;
var array = [1, 2, 3, 4, 5, 6];
var any = [1, "string", false, { agree: false }, [1, 4, 7]];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Green;
// type is fixed(String)
var message = "abc";
var endsWithC = message.endsWith('c');
// type assertions with(type "any")
var msg;
msg = "askfjskdc";
var endsWith = msg.endsWith("c");
var alternative = msg.endsWith("c");
// arrow functions
var logArrow = function (message) {
    console.log(message);
};
//  or
var doLogArrow = function (message) { return console.log(message); };
// Custom types
// Not Recommended instead use interface
var drawPoint = function (point) { };
drawPoint({ x: 1, y: 2 });
var drawPoint2 = function (point) { };
drawPoint2({
    a: 10,
    b: 30
});
var PointClass = /** @class */ (function () {
    function PointClass() {
    }
    // implemetation is allowed
    PointClass.prototype.draw2 = function () {
        console.log("x is ", this.x);
        console.log("y is ", this.y);
    };
    PointClass.prototype.getDistance = function (another) { };
    return PointClass;
}());
// this will throw error because we didn't allocated memory to variables with custom type
var point1;
// point1.draw2()
var pointClass = new PointClass();
pointClass.x = 1;
pointClass.y = 1;
pointClass.draw2();
// Using the Constructor
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw3 = function () {
        console.log("x is ", this.x);
        console.log("y is ", this.y);
    };
    return Point2;
}());
var point2 = new Point2(3, 5);
point2.draw3();
//class : Access Modifiers(to limit the visibility scope of properties )
var Employee = /** @class */ (function () {
    function Employee(name, age, agree) {
        this.empName = name;
        this.empAge = age;
        this.empAgree = agree;
    }
    Employee.prototype.greet = function () {
        //all variable is accesible inside class
        console.log("Good Mornning " + this.empName + " " + this.empAge + " " + this.empAgree);
    };
    return Employee;
}());
var emp1 = new Employee("John", 29, true);
console.log(emp1.empName);
console.log(emp1.empAge); //Error - private
console.log(emp1.empAgree); //Error - protected
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    //Derived Class
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        //Error - private property not accessible in Derived class or anywhere outside class
        console.log("Manager Delegated Tasks " + this.empName + " " + this.empAge + " " + this.empAgree);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Steve");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
console.log(emp1.empAge); //Error - private
console.log(emp1.empAgree); //Error - protected accessible inside derived but not outside derived
// Properties
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.getX = function () {
        return this.x;
    };
    Point3.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0");
        }
        this.x = value;
    };
    return Point3;
}());
var point3 = new Point3(1, 3);
var num = point3.getX();
point3.setX(100);
console.log(num);
// Getters and Setters
// with get and set keyword
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point4.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be less than 0");
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point4;
}());
var point4 = new Point4(1, 3);
console.log(point4.X);
