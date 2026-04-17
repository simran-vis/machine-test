// reverse string 

 export const  ReverseString(str) {
    return str.split('').include('').join('');
}

console.log(ReverseString('Simran Vishwakarma'));

// find Larges number in array

 export const  findLargest = (arr) => {
    return Math.max(...arr);
 };

 console.log(findLargest([1,2,3,4,5,6,7,8]));

 //remove dublocate array

 export const removeDublicate = (arr) => {
return [...new Set(arr)];
 }

 console.log(removeDublicate([1,1,2,2,3,3,4,4,5]))