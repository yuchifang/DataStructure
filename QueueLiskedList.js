// enqueue // 從尾端推一個 進入
// dequeue // 將第一個 排出
// front // 第一個
// isEmpty
// clear 
// size
// print
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null
        this.length = 0;
    }

    enqueue(element) {
        let newNode = new Node(element)

        if (this.length === 0) {
            this.head = newNode
            this.length++
            return
        }

        let currentNode = this.head
        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }

        currentNode.next = newNode
        this.length++
    }

    dequeue() {
        if (this.length === 0) return false
        let currentNode = this.head
        let newHead = currentNode.next
        this.head = newHead
        this.length--
        return currentNode.element
    }

    front() {
        return this.head.element
    }

    isEmpty() {
        return this.length === 0
    }

    clear() {
        this.head = null
        this.length = 0;
    }

    size() {
        return this.length
    }

    print() {
        let returnArr = []
        let currentNode = this.head
        let previousNode
        while (currentNode !== null) {
            previousNode = currentNode
            currentNode = currentNode.next
            returnArr.push(previousNode.element)
        }
        return JSON.stringify(returnArr)
    }
}

let queueData = new Queue();

queueData.enqueue(5)
queueData.enqueue(6)
queueData.enqueue(7)
console.log(queueData.dequeue())
console.log(queueData.print())