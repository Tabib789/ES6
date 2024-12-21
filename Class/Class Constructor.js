// class ConstructorClass {
//     constructor() {
//         console.log("I am constructor method from ConstructorClass");
//     }
// }
//
// new ConstructorClass();


/// Parameterized Constructor
class ConstructorClass {
    constructor(a,b) {
        this.FirstNum = a;
        this.LastNum = b;
    }
    add(a, b) {
        let result = this.FirstNum + this.LastNum;
        console.log(result);
    }
}

let Number = new ConstructorClass(10,20);
Number.add()