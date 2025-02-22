// 1.swapping value in array
let array=[1,2,3,4,5];
// Normal swap
// const temp=array[0];
// array[0]=array[4];
// array[4]=temp;
// console.log(array);

// tips and tricks
[array[0], array[4]]=[array[4],array[0]];
console.log(array)