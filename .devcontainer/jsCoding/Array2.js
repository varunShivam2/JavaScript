const marvel_heros=["spiderman","ironman","hulk"]
const dc_heroes = ["Aquaman","superman","batman"]
//if use push method to merge these arrays it will put the second array
//as an element inside the first array
// marvel_heros.push(dc_heroes)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//it is not a very good way .//to access superman
// console.log(marvel_heros.splice(1,3));
// console.log(marvel_heros);
//_______________________________________________

//concate function use to merge 2 or more array into one and create a new array of merged array
// let merged = marvel_heros.concat(dc_heroes)
// console.log(merged);
//______________
//we prefer to use spread operator (...) beacuse has  no limitation as concate 
//like concate can have only one array to merge ,
let all_heroes=[...marvel_heros,...dc_heroes]//if we had one more array we can just add it to (...arr)
console.log(all_heroes);
//let us take one more array for flat function to use 
//flat is use to concatenate all the nested array into onr single array 
const newar1=[1,2,3,[44,11,22,[221,111]],[8,9,77]]
console.log(newar1.flat(Infinity));//you can give the no. of depths you want to concatenate ,(no. of nested array(here 3))

//Array method,
console.log(Array.isArray("Varun"));//not presten in any array so returns false 
console.log(Array.from("varun"));//makes array of given string
//making array of given variables
let num1=2
let num2=3
let num3=11
console.log(Array.of(num1,num2,num3));





