
const defaultHashTableSize = 32
class HashTable {
    constructor(size = defaultHashTableSize) {
        this.table = new Array(size)
    }

    _hash(key) {
        let totalHash = 0
        for (let i = 0; i < key.length; i++) {
            totalHash += key.charCodeAt(i)
        }
        return totalHash % 37
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }

        this.table[index].push([key, value])

    }

    get(key) {
        let index = this._hash(key)
        if (!this.table[index]) return false
        if (!this.table[index].length) return false
        let element = this.table[index].filter(item => item[0] === key)
        return element[0][1]
    }

    remove(key) {
        let index = this._hash(key)
        if (!this.table[index]) return false
        if (!this.table[index].length) return false
        let deleteElement
        this.table[index] = this.table[index].filter(item => {
            if (item[0] === key) {
                deleteElement = item[1]
            }
            return item[0] !== key
        })
        return deleteElement
    }

    keys() {
        if (!this.table?.length) return []
        let keysArr = []
        for (const key in this.table) {
            if (key) {
                for (let tableKey of this.table[key]) {
                    keysArr.push(tableKey[0])
                }
            }
        }
        return keysArr
    }

    show() {
        console.log(this.table)
    }

    values() {
        if (!this.table?.length) return []
        let valuesArr = []
        for (const key in this.table) {
            if (key) {
                for (let tableKey of this.table[key]) {
                    valuesArr.push(tableKey[1])
                }
            }
        }
        return valuesArr
    }

}

let hashTable = new HashTable();
hashTable.set('Mark', 'mark@gmail.com');
hashTable.set('Ivy', 'ivy@gmail.com');
hashTable.set('Mary', 'mary@gmail.com');
hashTable.set('Jamie', 'jamie@gmail.com')
hashTable.set('Sue', 'sue@gmail.com')
console.log(hashTable.get('Sue')) // sue@gmail.com
console.log(hashTable.get('Jamie')) // jamie@gmail.com
console.log(hashTable.get('Mark')) // mark@gmail.com
console.log(hashTable.remove('Mark')) // mark@gmail.com
console.log(hashTable.get('Mark')); // false
console.log(hashTable.keys())
// [ 'Mary', 'Jamie', 'Sue', 'Ivy', 'Mark' ]
console.log(hashTable.values())
// [
//   'mary@gmail.com',
//   'jamie@gmail.com',
//   'sue@gmail.com',
//   'ivy@gmail.com',
//   'mark@gmail.com'
// ]
hashTable.show()
// /*
// [
//   <2 empty items>,
//   'mary@gmail.com',
//   <2 empty items>,
//   'jamie@gmail.com',
//   <10 empty items>,
//   'ivy@gmail.com',
//   <8 empty items>,
//   undefined
// ]
