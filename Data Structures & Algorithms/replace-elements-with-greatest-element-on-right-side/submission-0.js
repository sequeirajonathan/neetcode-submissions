class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;

        for(let i = arr.length - 1; i >= 0; i--){
            if(max < arr[i]){
                let swap = arr[i];
                arr[i] = max;
                max = swap
            } else {
                arr[i] = max;
            }
        }

        return arr;
    }
}
