// function saymyName(username){
//     console.log(username,"just logged inn");//one way of printing data,and other way is 

// }
saymyName("varun")
function saymyName(username){
  return `${username} just logged in`
}
console.log(saymyName("Varun"));

//////////////////////////////////////////////
//use of (...)rest operator to make a bundle of multiple values in a function;
function new1(...num1){//(...)here we called it rest operator , it makes the bundle of multiple value
return num1;
}
let res=new1(22,33,44,55)
console.log(res);

console.log(res.length);

let sum=0;
for (let index = 0; index < res.length; index++) {
sum=sum+res[index];


  
}
console.log(typeof res);

console.log(sum);
let arr=[3,4]
console.log(typeof arr);
// how to access or pass object using function 
let obj1={
  name:"varun shivam",
  age:22,
  course:"CSE"
}
function handleObject(Anyobject){//we can pass any object in the parameter ,not just given object
console.log(`The name is ${Anyobject.name} ,age is ${Anyobject.age} and course is ${Anyobject.course}`);

}
handleObject(obj1)//here we have to give real defined object that we want to use 
//one more way to pass object directly in function
handleObject({
  name:"tarun",
  age:25,
  course:"Cse"
})

//how to pass array in function
const arr1=[20,30,40]
function returnSecondElement(getarray) {
  return getarray[1]
}
console.log(returnSecondElement(arr1));//same as object ,one more way is also similar to object passing
console.log( returnSecondElement([11,33,44]));






