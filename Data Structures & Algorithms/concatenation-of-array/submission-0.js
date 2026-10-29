class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const cap =  nums.length * 2;
        const ans = Array(cap).fill(0);
        let j = 0;

        for(let i = 0; i < ans.length; i++){
            if(i < nums.length) {
                ans[i] = nums[i]
            } else {
                ans[i] = nums[j];
                j++;
            }
        }


        return ans;
    }
}
