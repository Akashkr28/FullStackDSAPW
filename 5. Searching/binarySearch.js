/**
 * 
 * @param {The given input array inside which we have to find an element} arr 
 * @param {x is the element expected to be found} x 
 */

function binarySearch(arr, x){
    let n = arr.length;
    // declare the search space
    let low = 0; // the first element
    let high = n - 1; // the last element

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // get the middle element & Math.floor() rounds down to the nearest whole number

        if (arr[mid] == x) {
            // element found at mid
            return mid;
        } else if (arr[mid] < x) {
            // element is in the right half && discard the left half
            low = mid + 1;
        } else {
            // element is in the left half && discard the right half
            high = mid - 1;
        }
    }
    // if the loop ends without finding the element, then the element is not present in the array
    return -1;
}

let arr = [2, 3, 4, 10, 40];
console.log(binarySearch(arr, 41));