class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const comp = new Map();
        const ans = [];

        for (let i = 0; i < nums.length; i++) {
            if (comp.has(target - nums[i])) {
                return [comp.get(target - nums[i]), i]
            }
            comp.set(nums[i], i)
            
        }

        return ans
    }
}
