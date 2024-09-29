//singleton declaration of object 
const myObj1=new Object("varun","21","cse")
//every thing is same in singleton and literal object declaration except the way of declaration
let tinderUser={}
//new way of adding literals 
tinderUser.name="tatttu"
tinderUser.age=33
tinderUser.address="new delhi"
console.log(tinderUser);
//we can declare an object inside an object
let newObj={
    name:"Tarun",
    fullname:{
        userFullname:{
        firstName:"tarun",
        LastName:"shivam",
        },
    },
    age:25,
    company:"Wipro",
}
//to access all these nested objects just use .(dot) and access it 
console.log(newObj.fullname.userFullname);

//objects merging
let obj1={name: "vv",age:36}
let obj2={1:"aa",2:"bb"}
//store in new object
let obj3={obj1,obj2}//here obj2 and  obj1 will be inside obj3 ,they are not basically merged
console.log(obj3);
// we use assign keyword also to merge these objects 
let obj4=Object.assign({},obj1,obj2)
console.log(obj4);
//Best way is spread operator
let obj5={...obj1,...obj2}
console.log(obj5);
//when we fetch data from websites we generaly use arrays which contains 
//multiple objests ,,,example
let user=[
{
    id:221,
    name:"aaa",
    roll:12
},
{

},
{

},
//like this we can use multiple objects inside this array 
//and these objects are the index of this array

]
user[1].id
//lets talk about newObj more
console.log(newObj);
//to get the all keys of an object we use
console.log(Object.keys(newObj));//output is type of array
//just like keyy we can also get the values of that key
console.log(Object.values(newObj));
//to check if a object has a key or property of given name,
console.log(newObj.hasOwnProperty('name'));











