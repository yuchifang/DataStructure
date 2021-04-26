function HashTable() {
    const defaultHashTableSize = 37;
    let table = new Array(defaultHashTableSize);
    let ValuePair = function (key, value) {
        this.value = value;
        this.key = key;
    }

    let _hash = function (key) {
        let totalHash = 0
        for (let i = 0; i < key.length; i++) {
            totalHash += key.charCodeAt(i)
        }
        return totalHash % table.length
    }

    this.set = function (key, value) {
        let index = _hash(key)
        if (!table[index]) {
            table[index] = new ValuePair(key, value)
            return true
        }
        index++
        while (table[index] != null) {
            index++
        }
        table[index] = new ValuePair(key, value)
        return true
    }

    this.get = function (key) {
        let index = _hash(key)
        if (!table[index]) {
            return false
        }

        while (table[index] === undefined || table[index].key !== key) {
            if (table.length < index) {
                return false
            }
            index++
        }
        return table[index].value
    }

    this.remove = function (key) {
        let index = _hash(key)
        if (!table[index]) {
            return false
        }
        let deleteElement

        while (table[index] === undefined || table[index].key !== key) {
            if (table.length < index) {
                return false
            }
            index++
        }
        deleteElement = table[index].value
        table[index] = undefined
        return deleteElement

    }

    this.keys = function () {
        if (!table.length) {
            return false
        }
        let keysArray = []

        for (let key in table) {
            if (table[key]) {
                keysArray.push(table[key].key)
            }
        }
        return keysArray
    }

    this.values = function () {
        if (!table.length) {
            return false
        }
        let valueArray = []
        for (let key in table) {
            if (table[key]) {
                valueArray.push(table[key].value)
            }
        }
        return valueArray
    }

    this.show = function () {
        console.log(table)
    }

}
let table = new HashTable

table.set("dan", 5)
table.set("sam", 6)
table.set("john", 7)
console.log(table.get("dan")); // 5
console.log(table.remove("john"));// 7
console.log(table.keys());// [ 'dan', 'sam' ]
console.log(table.values())// [ 5 , 6 ]
