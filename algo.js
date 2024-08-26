// Iteration or Loopoing
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.forEach(num => {
  sum += num;
});

// console.log(sum); // Output: 15

//Linear Search
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const searchUserByName = (name) => {
  return users.find((user) => user.name === name);
};

// console.log(searchUserByName('Bob')); // Output: { id: 2, name: 'Bob' }


  // Binary Search
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found
      } else if (arr[mid] < target) {  
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Target not found
  };
  
  const sortedArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const target = 29;
  
  const result = binarySearch(sortedArray, target);
  console.log(result); // Output: 5 (the index of target in the sortedArray)
  

// Bubble sort
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 },
  ];
  
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  
  // console.log(sortedProducts);
  // Output: [{ name: 'Phone', price: 500 }, { name: 'Tablet', price: 700 }, { name: 'Laptop', price: 1000 }]

  
  // Merge sort
  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };
  
  const unsortedArray = [34, 7, 23, 32, 5, 62];
  // console.log(mergeSort(unsortedArray)); 
  // Output: [5, 7, 23, 32, 34, 62]

  
  