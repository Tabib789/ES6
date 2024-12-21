let MyMap = new Map();

MyMap.set("Key1","Bangladesh")
MyMap.set("Key2","Pakistan")
MyMap.set("Key3","Afghanistan")
MyMap.set("Key4","Egypt")
MyMap.set("Key5","Iraq")
MyMap.set("Key6","Qatar")
MyMap.set("Key7","Sudan")

if (MyMap.has("Key10")){
    console.log("Yes")
}
else{
    console.log("No")
}

// for (let MyValue of MyMap.values()) {
//     console.log(MyValue);
// }