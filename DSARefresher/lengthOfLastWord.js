/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let n = s.length;
    let i = n-1;

    while(i >= 0 && s[i] != ' ') {
        i--;
    }
    return n-(i + 1);
};