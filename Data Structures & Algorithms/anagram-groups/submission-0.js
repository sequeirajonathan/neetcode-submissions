class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const sorted = strs.map(str => ([...str].sort().join('')))
        const seen = new Map();
        const result = [];

        console.log(sorted);

        sorted.forEach((str, i) => {
            if(!seen.has(str)){
                seen.set(str,[strs[i]])
            } else {
                seen.get(str).push(strs[i])
            }
        })

        for(const [val,key] of seen ){
            result.push(key)
        }


        return result;
    }
}
