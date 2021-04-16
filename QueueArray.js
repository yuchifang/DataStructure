function Queue() {
    let item = [];

    this.enqueue = function (element) {
        item.push(element)
    }
    // 輸出陣列第一個值
    this.dequeue = function () {
        item.shift()
    }

    this.front = function () {
        return item[0]
    }

    this.clear = function () {
        item = []
    }

    this.size = function () {
        return item.length
    }

    this.isEmpty = function () {
        return item.length === 0
    }

    this.show = function () {
        return item
    }

}
let queueAnimals = new Queue()
queueAnimals.enqueue('duck')
queueAnimals.enqueue('deer')
queueAnimals.enqueue('bear')
console.log(queueAnimals.size()) // 3
console.log(queueAnimals.isEmpty()) // false
console.log(queueAnimals.front()) // duck
console.log(queueAnimals.show()) // [ 'duck', 'deer', 'bear' ]
queueAnimals.dequeue()
console.log(queueAnimals.show())// [ 'deer', 'bear' ]