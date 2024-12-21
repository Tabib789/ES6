class Parent{
    Prop1(){
        console.log('Mac Mini m4')
    }
    Prop2(){
        console.log('Imac')
    }
}
class Child extends Parent{
    // Prop1(){
    //     console.log('I am overridind hehehehe')
    // }
    childProp(){
        //Super Keyword
        super.Prop1();
        super.Prop2();
    }
}

var obj = new Child;

obj.childProp()