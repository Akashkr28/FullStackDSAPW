/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Convert string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
};