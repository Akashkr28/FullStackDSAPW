// You are given a sorted integer array of size 'n'. You have an element 'x'. Return the index of first value >= x, and if 'x' is 0 return -1, and if 'x' is not present in the array, return 'n'. 

function lowerBound(arr, x) {
    let n = arr.length;
    // declare the search space
    let low = 0; // the first element
    let high = n - 1; // the last element
    let ans = arr.length;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // get the middle element & Math.floor() rounds down to the nearest whole number

        if (arr[mid] < x) {
            low = mid + 1;
        } else {
            ans = mid; // we got a candiidate
            high = mid - 1;
        }
    }
    return ans;
}

let arr = [1, 1, 2, 2, 2, 3, 3, 3, 5, 6];
console.log(lowerBound(arr, 4));