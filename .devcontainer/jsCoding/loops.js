for (let i = 1; i <=10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
    //    console.log(`${i}x${j}=${i*j}`);
       
        
    }
        
}
let i=0
while(i<=10){
    // console.log(`the numbers are ${i}`)
    i++
}
const myarr=["superman","spiderman","ironman"]
let arr=0
while (arr<myarr.length) {
    // console.log(myarr[arr]);
    arr++
    
}
let score=1
do {
   // console.log(`the score is ${score}`);
    score++
    
} while (score<=10);
//for off loops
//array specific loops
//use to access the array of any type like,string,number ,object
let array=[1,2,3,4,5]
for (const number of array) {//on array
  //  console.log(number);
    
}
let strinGarr="Hello World"//on normal string
for (const str of strinGarr) {
   // console.log(`Each element ${str}`);
    
}
let number ="223344"
for (const num of number) {
   // console.log(`each number ${num}`);
    
}
//Maps
//specially used to store unique value , if we try to store same value twice then it will still give it one time in output,
let map=new Map()
//to put value in map we use set keyword
map.set("Brother name ","tarun shivam")
map.set("My name ","Varun shivam")
map.set("Sister name ","Tanu sri")
map.set("Mother's name ","Indu Singh")
map.set("Father's name ","Rupesh kumar singh")
map.set("Grandma's name ","Dropadi devi")
map.set("Grandpa's name ","Mr. Lalan Singh")
console.log(map);

for (const [key,value] of map) {//take key and value in an array fromate to get the exact value 
    //console.log(key);//it will print all value in the array form
   // console.log(`${key} :- ${value}`);
    
}//here we apply for of on map can we apply it on objects ,
// let newonj1={
//     'name':'varun',
//     'course':'cse',
//     'age':23
// }
// for (const obj of newonj1) {
//     console.log(obj);
    
    
// }//objects are not iterable easily
// we use forin loop to iterate over objects 

let newonj1={
    'name':'varun',
    'course':'cse',
    'age':23
}
for (const key in newonj1) {
   console.log(key);//it will only print the keys of the object
   //to print key and value of object we do like this
//    console.log(`${key} is ${newonj1[key]}`);    
    }

    //array has a lot of function to work on , one of those function is .foreach
    let newarr=["java","c++","ruby","javascript","c#"]
    //to access these values we use . foreach function ,which will require one callback function(fun that should not have name)
    newarr.forEach(function(anyname){
        // console.log(anyname);
        
    } )//we can also use arrow function in .foreach()
newarr.forEach((item) =>{
//console.log(item.substring(1,item.length));

})
let newarr2=["java","c++","ruby","javascript","c#"]
newarr2.forEach((item,index,array) =>{
console.log(item,index,array);

})//it not ony returns the elements of the array it also returns index , whole aarray
//multiple objects inside a array
let newarr3=[
    {
languageName:"java",
fileName:".java"
 },
 {
    languageName:"c++",
    fileName:".cpp"
     },
     {
        languageName:"javascript",
        fileName:".js"
         }
]
newarr3.forEach((item,value) => {
    console.log(item.languageName,item.fileName);
    
});