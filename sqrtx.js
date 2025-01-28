/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
        if (x < 2) return x;
        let left = 1;
        let right = x;
        result = 0;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (mid * mid === x) {
                return mid;
            } else if (mid * mid < x) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Approach:

// Example usage:
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(0)); // Output: 0
console.log(mySqrt(1)); // Output: 1
console.log(mySqrt(16)); // Output: 4

### Explanation:
1. **Binary Search Approach**:
   - Use binary search to find the square root of \( x \).
   - Start with \( left = 1 \) and \( right = x \).
   - Calculate the middle value \( mid \) and check if \( mid^2 \) equals \( x \).
   - If \( mid^2 < x \), move the left pointer to \( mid + 1 \) and store \( mid \) as the potential result.
   - If \( mid^2 > x \), move the right pointer to \( mid - 1 \).

2. **Efficiency**:
   - The binary search ensures \( O(\log(x)) \) time complexity.

3. **Edge Cases**:
   - If \( x = 0 \) or \( x = 1 \), return \( x \) directly.
 */