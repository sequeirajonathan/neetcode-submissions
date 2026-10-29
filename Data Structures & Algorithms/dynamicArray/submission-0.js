class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity) {
            this.resize();
        }

        this.arr[this.size] = n
        this.size = this.size + 1;;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size = this.size - 1;
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        const temp = Array(this.capacity)

        for(let i = 0 ; i < this.size; i++ ){
            temp[i] = this.arr[i];
        }
        
        this.arr = temp;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}

const arr = new DynamicArray(10)
console.log(arr.getCapacity())
