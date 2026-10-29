class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let currentCount = 0;
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentCount += 1;
                max = Math.max(max, currentCount);
            } else {
                currentCount = 0;
            }
        }

        return max;

    }
}
