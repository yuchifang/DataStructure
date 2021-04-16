/*
    push(element)
    pop()
    top() 
    isEmpty() 
    clear() 
    size() 
    show()
*/

class Node {
    constructor(element) {
        this.next = null;
        this.element = element;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(element) {
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
        return
    }

    pop() {
        if (this.length === 0) return false
        let currentNode = this.head
        let previousNode

        while (currentNode.next !== null) {

            previousNode = currentNode
            currentNode = currentNode.next
        }

        previousNode.next = null
        this.length--
        return currentNode.element
    }

    top() {
        if (this.length === 0) return undefined
        let currentNode = this.head
        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }
        return currentNode.element
    }

    clear() {
        this.head === null
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    show() {
        let returnArr = []
        let currentNode = this.head
        while (currentNode !== null) {
            returnArr.push(currentNode.element)
            currentNode = currentNode.next
        }
        console.log(returnArr)
        return returnArr
    }

    print() {
        return JSON.stringify(this.head)
    }
}

let stack = new Stack()
stack.push("1")
stack.push(2)
stack.push(5)
stack.push(4)
stack.show() // [ '1', 2, 5, 4 ]
console.log(stack.print())// {"next":{"next":{"next":{"next":null,"element":4},"element":5},"element":2},"element":"1"}
console.log(stack.pop()) // 4
stack.show() // ["1",2,5]
console.log(stack.print())
// {"next":{"next":{"next":null,"element":5},"element":2},"element":"1"}
console.log(stack.top()) // 5