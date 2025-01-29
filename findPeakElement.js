/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length ==  1) return 0;

    // Define the search space
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        // Find the mid point
        let mid = l + Math.floor((r - l) / 2);


        if (mid === 0 && nums[mid] > nums[mid + 1]) return mid; // leftmost element being in peak

        if (mid === nums.length - 1 && nums[mid] > nums[mid - 1]) return mid; // rightmost element being in peak

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid; // some internal element being in peak

        if (mid < nums.length -1 && nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            if (mid === 0 || nums[mid] > nums[mid - 1]) return mid;
            r = mid - 1;
        }
    }
};