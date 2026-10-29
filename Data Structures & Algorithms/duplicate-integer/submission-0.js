class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        let isDupe = false;

        nums.forEach(num => {
            if (!seen.has(num)) {
                seen.add(num)
            } else {
                isDupe = true;
            }
        })

        return isDupe;
    }
}
