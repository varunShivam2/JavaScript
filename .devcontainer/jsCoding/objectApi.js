//de - structuring of object................
//let us take an object .......
const course={
courseName:"Js with chai",
fees:999,
TeacherName:"Hitesh"
}
//one way is that by using dot (.) operator 
course.courseName;
course.fees;
//but if we want to print fees multiple time then this is not a very effective way 
//what value need to be extracted will be written inside {}
const {fees}=course//obj name 
console.log(fees)
