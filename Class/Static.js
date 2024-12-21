//without static

// class MyClass {
//     staticTest(){
//         console.log("Hello World!");
//     }
// }
//
// let Obj = new MyClass();
// Obj.staticTest();



//with static

class MyClass {
    static staticTest(){
        console.log("Hello World!");
    }
}

MyClass.staticTest()