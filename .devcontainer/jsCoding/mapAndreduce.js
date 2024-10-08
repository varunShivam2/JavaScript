//if we want to add 10 in all the values of an array  then we can use map operation
//map also accepts a call back function
let onearr=[1,2,3,4,5,6,7,8,9,10]
//const sumTen=onearr.map((nums) =>nums+10)//returns array element with 10 plus in it
//console.log(sumTen);
//when we use operation like map().map(),this is called chaining and the result of 1st map goes in 2nd map,then we can perform 
//more operation .
const multiMap=onearr
.map((num)=>num*10)
.map((num)=>num-5)
.filter((num)=>num>50)//here first multiply element with 10 and after that we subtracted 5 from them in 2nd map
//we can also add filter to get filtered value
//console.log(multiMap);

//-----------------------Reduce operation

let aray=[1,2,3]
let initial=0
const storarr=aray.reduce((accumu,currval)=>{
console.log(`accu valn${accumu} and currentvalue is ${currval}`);

   let accuval= accumu+currval,initial
   return accuval
})
console.log(storarr);


