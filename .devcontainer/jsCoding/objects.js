//object declaration as literals
//use symbol
const sym=Symbol("key1")
const obj1={
    name:"varun",
    email:"shivamvarun11@gmail.com",
    [sym]: "mykey1",//if we write sym without square brackets the it will be treated as string not as symbol
    age:19,
    "d.o.b month":"march 11",
    location:"bihar",
    city:"buxar",

}
console.log(obj1.name);//one way of accesssing info ,but nor very good,
console.log(obj1["name"]);//best way to access info inside object
//because if wirte name as "name last(with gap between name and last)" then obj1.name cannot be able to access it ;
console.log(obj1["d.o.b month"]);
//we can change values of info by,
obj1.email="shivamvarun3@gmail.com"
//if we want that no values should be changed inside the object ,
// Object.freeze(obj1)
//try changing 
obj1.age=33
console.log(obj1);


//we can also add a function in the object ,but first comment out freeze because it does nor allows changes 
obj1.greetings=function(){
    console.log(`hello ,${this.name}`);//we use string interpolation to get the data inside the object in function with help of this keyword
    
}
console.log(obj1.greetings());//gives only the reference 

