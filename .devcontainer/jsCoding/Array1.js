//types of array declaration 
let arr1=["varun",1,2,"tarun"]//with multiple type of data
//to access it 



//we can push or pop the element inside array..........
arr1.push(33)
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(arr1[index]);
    
}

/////___________\
let arr2=new Array(1,3,11,44)
console.log(arr2);
arr2.push(21)//push at end and pop last element
console.log(arr2,"after first push ");
arr2.pop()
console.log(arr2,"after first pop ");
//_______unshif method,adds value at the start of array by shifting all the elements ,
//it is not efficient because if the size of array is high then it is time consuming
arr2.unshift(12)
console.log(arr2,"after first unshift ");
//And shif() is use delete that element which is place at starting of array
arr2.shift()
console.log(arr2,"after first shift ");
//use include to check a number is inside the array or not
console.log(arr2.includes(11));
console.log(arr2.includes(4));
console.log(arr2.indexOf(11));
//Join function, use bind the array element and convert it into string
const newArr=arr2.join()
console.log(arr2);
console.log(newArr);

console.log(typeof(newArr));
//slice and splice 
//slice 
console.log("A",arr2);
const newA1=arr2.slice(0,3)
//it takes the elements from the given range with -1 range (it will print elements from 0 index to 2)

console.log(newA1);
//splice ,in this it prints all elements of given range ,but it actually manipulates the array ,it extracts 
//the element of given range from the original array 
console.log("B,original",arr2);
const newA2=arr2.splice(0,3)
console.log("after splice ",arr2);

console.log(newA2);




