class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const sMatch = new Map();
        const tMatch = new Map();

        for(let i = 0; i< s.length; i++){
            if(!sMatch.has(s[i])){
                sMatch.set(s[i], 1)
            } else {
                sMatch.set(s[i], sMatch.get(s[i]) + 1)
            }
            if(!tMatch.has(t[i])){
                tMatch .set(t[i], 1)
            } else {
                tMatch .set(t[i], tMatch.get(t[i]) + 1)
            }
        }
        
        for (const [key, v] of sMatch ) {
            if(sMatch.get(key) !== tMatch.get(key)) return false;
        }

        return true;
    }
}
