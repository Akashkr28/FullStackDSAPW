// LeetCode Problem: 

class Solution {
    public int splitArray(int[] nums, int k) {
        int totalNums = 0;
        int maxNums = -1;
        
        for (int num : nums) {
            totalNums += num;
            maxNums = Math.max(maxNums, num);
        }
        
        int lo = maxNums, hi = totalNums;
        int ans = hi;
        
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (midNumWithinK(nums, mid, k)) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        
        return ans;
    }
    
    private boolean midNumWithinK(int[] nums, int mid, int k) {
        int kCount = 0;
        int tn = 0;
        for (int num : nums) {
            if (tn + num > mid) {
                kCount++;
                tn = 0;
            }
            tn += num;
        }
        kCount++;
        return kCount <= k;
    }
}