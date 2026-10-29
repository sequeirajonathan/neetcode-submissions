class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false;
        }

        const countS = {};
        const countT = {};

        for(let i = 0; i < s.length; i++){ 
            if(s.charAt(i) in countS){
                countS[s.charAt(i)] += 1;
            } else {
                countS[s.charAt(i)] = 1;
            }
            if(t.charAt(i) in countT){
                countT[t.charAt(i)] += 1;
            } else {
                countT[t.charAt(i)] = 1;
            }
        }

        const ar = [];

        for (let ch in countS) {
            if(countT[ch] === countS[ch]){
                ar.push(true)
            } else {
                ar.push(false)
            }
        }

        

        return !ar.includes(false)
    }
}
