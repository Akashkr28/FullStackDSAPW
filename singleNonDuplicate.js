/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === n) {
            return nums[mid];
        } else if (nums[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};