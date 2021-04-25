function HashTable() {
    let table = [];

    let _hash = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37
    }

    this.set = function (key, value) {
        let index = _hash(key)
        if (!table[index]) {
            table[index] = value
        }
    }

    this.get = function (key) {
        let index = _hash(key)
        if (!table[index]) return false
        return table[index]
    }

    this.values = function () {
        // return Object.values(table)
        return table.filter(item => !!item)
    }

    this.keys = function () {
        return Object.keys(table).filter(key => !!key)
    }

    this.remove = function (key) {
        let index = _hash(key)
        if (!table[index]) return false
        let deleteItem = table[index]
        table[index] = undefined
        return deleteItem
    }

    this.show = function () {
        console.log(table)
    }

}

let hashTable = new HashTable();
hashTable.set('Mark', 'mark@gmail.com');
hashTable.set('Ivy', 'ivy@gmail.com');
hashTable.set('Mary', 'mary@gmail.com');
hashTable.set('Jamie', 'jamie@gmail.com')
hashTable.show()
/*
[
  <2 empty items>,
  'mary@gmail.com',
  <2 empty items>,
  'jamie@gmail.com',
  <10 empty items>,
  'ivy@gmail.com',
  <8 empty items>,
  'mark@gmail.com'
]
*/
hashTable.set('Sue', 'sue@gmail.com')
console.log(hashTable.get('Sue')) // jamie@gmail.com 
// Jamie 和 Sue 重復 用上面 _hash 的方法 會重複
console.log(hashTable.get('Mark')) // mark@gmail.com
console.log(hashTable.remove('Mark')) // mark@gmail.com
console.log(hashTable.get('Mark')); // false
hashTable.show()
/*
[
  <2 empty items>,
  'mary@gmail.com',
  <2 empty items>,
  'jamie@gmail.com',
  <10 empty items>,
  'ivy@gmail.com',
  <8 empty items>,
  undefined
]
*/
console.log(hashTable.values())
// [ 'mary@gmail.com', 'jamie@gmail.com', 'ivy@gmail.com' ]