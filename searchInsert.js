// Link: https://leetcode.com/problems/search-insert-position/ [Problem #35]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2); 
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }
    return ans;
};

// Time Complexity: O(log(n))
// Space Complexity: O(1)

// Test cases:
// nums = [1,3,5,6], target = 5
// nums = [1,3,5,6], target = 2
// nums = [1,3,5,6], target = 7

// Output:
// 2
// 1
// 4

// Note: This is a binary search problem. The key idea is to find the first element that is greater than or equal to the target.
// If the target is found, return the index of the target. If the target is not found, return the index where the target should
// be inserted. We can use a binary search to find the index of the target. If the target is not found, the low pointer will be
// at the index where the target should be inserted. We can return the low pointer as the answer.
