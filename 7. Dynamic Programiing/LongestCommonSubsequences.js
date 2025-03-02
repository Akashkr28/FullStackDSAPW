/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let dp;
let arr;    
function f(s1, s2, i, j) {
    if(i == -1 || j == -1) return 0;
    if (dp[i][j] != -1) return dp[i][j];

    if(s1[i] == s2[j]) {
        return dp[i][j] = 1 + f(s1, s2, i - 1, j - 1, dp);
    } else {
        return dp[i][j] = Math.max(f(s1, s2, i - 1, j, dp), f(s1, s2, i, j - 1, dp));
    }
}
var longestCommonSubsequence = function(text1, text2) {
    arr = text1.length, m = text2.length;
    dp = Array(1005).fill().map(() => Array(m).fill(-1));

    return f(text1, text2, arr - 1, m - 1, dp);
};

// LeetCode Problem: 1143 https://leetcode.com/problems/longest-common-subsequence/