// Url: https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b); // Sort potions array for binary search
    
    function countSuccessfulPairs(spell) {
        let left = 0, right = potions.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (potions[mid] * spell >= success) {
                right = mid; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        }
        return potions.length - left;
    }
    
    return spells.map(countSuccessfulPairs);
};