class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        // index by frequency: buckets[f] holds all numbers that appear f times
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1);
        }

        for (const [num, freq] of count) {
            buckets[freq].push(num);   // ✅ push the number into the freq-sized bucket
        }

        const result = [];
        for (let freq = buckets.length - 1; freq >= 1 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }

        return result;
    }
}
