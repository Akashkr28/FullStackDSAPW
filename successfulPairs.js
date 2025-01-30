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

// Time Complexity: O(N * log(N) + M * log(M))

// N = spells.length
// M = potions.length
// O(N * log(N)) for sorting potions array
// O(M * log(M)) for binary search for each spell in potions array
// Total time complexity = O(N * log(N) + M * log(M))

// Space Complexity: O(1)

// N = spells.length
// M = potions.length
// O(1) for sorting in-place
// O(1) for binary search in-place
// Total space complexity = O(1)

/** Using Lower Bound **/

function successfulPairs(spells, potions, success) {
    potions.sort((a, b) => a - b); // Sort potions array for binary search
    
    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        }
        return left;
    }
    
    return spells.map(spell => {
        let minPotion = Math.ceil(success / spell);
        let index = lowerBound(potions, minPotion);
        return potions.length - index;
    });
}

// Example test cases
console.log(successfulPairs([5,1,3], [1,2,3,4,5], 7)); // Output: [4,0,3]
console.log(successfulPairs([3,1,2], [8,5,8], 16));   // Output: [2,0,2]


/** Using Two Pointers **/

function successfulPairs(spells, potions, success) {
    potions.sort((a, b) => a - b); // Sort potions array for two-pointer approach
    
    return spells.map(spell => {
        let minPotion = Math.ceil(success / spell);
        let count = 0, j = potions.length - 1;
        for (let i = 0; i < potions.length; i++) {
            while (j >= 0 && potions[i] * spell >= success) {
                j--;
            }
            count = potions.length - (j + 1);
        }
        return count;
    });
}

// Example test cases
console.log(successfulPairs([5,1,3], [1,2,3,4,5], 7)); // Output: [4,0,3]
console.log(successfulPairs([3,1,2], [8,5,8], 16));   // Output: [2,0,2]
