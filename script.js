//1.Creating a new empty array and getting input from user
let arr = [];
let n = prompt("Enter the size of the array:")
for (let i = 0; i < n; i++) {
    arr.push(prompt());
}
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}


//2.Array deduplication
let arr1 = [1,2,3,4,4,5,6,3,8,1];
let unique = [...new Set(arr1)];
console.log(unique);

//3.Finding intersection of two different arrays
let arr2 = [12,20,34,43,55,67,72,83];
let arr3 = [13,20,34,42,45,67,27,18];
let intersection = arr2.filter(x => arr3.includes(x));
console.log(intersection);

//4.Find difference between two arrays
let arr4 = [2,5,7,9,10];
let arr5 = [3,4,5,9];
let difference = arr4.filter(x => !arr5.includes(x));
console.log(difference);

//5.creating an array of arrays
let arr6 = [[2,4,6],[3,5,7],[-1,-2]];
console.log(arr6[1]);

