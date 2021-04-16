// append(ele):  從尾部增加一個 node
// insert(position, ele): 從特定位置增加一個 node
// removeAt(position): 刪除特定位置的 node
// remove (ele): 移除某個 node
// indexOf(ele):  回傳此 node 是否存在，不存在回傳 -1
// size(): 回傳總共有幾個 node 在 list 內

class DoublyNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(element) {
        let newNode = new DoublyNode(element)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return
        }


        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode;

        this.length++
        return
    }

    insert(index, element) {
        if (index < -1) {
            return false
        }

        if (index > this.length - 1) {
            this.append(element)
            return
        }

        let newNode = new DoublyNode(element)
        let currentNode = this.head

        if (this.length === 0 && index === 0) {
            this.append(element)
            return
        }

        if (index === 0) {
            this.head = newNode;
            currentNode.prev = newNode
            newNode.next = currentNode
            this.length++
            return
        }
        let i = 0
        while (currentNode !== null) {
            if (i === index) {
                // 先處理 newNode 位置
                let tempNode = currentNode
                newNode.prev = currentNode.prev
                newNode.next = currentNode



                tempNode.prev.next = newNode
                tempNode.prev = newNode


                this.length++
                return
            }
            currentNode = currentNode.next
            i++

        }

    }

    indexOf(element) {
        let i = 0
        let currentNode = this.head
        while (currentNode !== null) {
            if (currentNode.element === element) {
                return i
            }
            currentNode = currentNode.next
            i++
        }
        return -1

    }

    remove(element) {
        if (this.length === 0) {
            return false
        }
        let currentNode = this.head

        while (currentNode !== null) {
            if (currentNode.element === element) {

                if (currentNode.prev === null) {
                    this.head = currentNode.next
                }

                if (currentNode.prev !== null) {
                    currentNode.prev.next = currentNode.next
                }

                if (currentNode.next === null) {
                    this.tail = currentNode.prev
                }

                if (currentNode.next !== null) {
                    currentNode.next.prev = currentNode.prev
                }

                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    removeAt(index) {
        if (this.length === 0 || index > this.length - 1) {
            return false
        }
        let currentNode = this.head
        let i = 0
        while (currentNode !== null) {

            if (i === index) {
                // console.log("currentNode", currentNode.prev)
                if (currentNode.prev !== null) {
                    currentNode.prev.next = currentNode.next
                }
                if (currentNode.prev == null) {
                    this.head = currentNode.next
                }

                if (currentNode.next !== null) {
                    currentNode.next.prev = currentNode.prev
                }

                if (currentNode.next === null) {
                    this.tail = currentNode.prev
                }

                return true
            }
            i++
            currentNode = currentNode.next
        }
        return false
    }

    show() {
        let currentNode = this.head
        let previousNode = this.tail
        let nextArr = []
        let prevArr = []
        while (currentNode !== null) {
            nextArr.push(currentNode.element)
            currentNode = currentNode.next
        }

        while (previousNode !== null) {
            prevArr.push(previousNode.element)
            previousNode = previousNode.prev
        }

        console.log("next: ", nextArr)
        console.log("prev: ", prevArr)
    }

    size() {
        return this.length
    }

}

let list = new DoublyLinkedList

list.append(1)
list.insert(1, "5")
list.insert(0, "4")
list.insert(3, "3")
list.insert(3, "2")
list.show()
// next:  [ '4', 1, '5', '2', '3' ]
// prev:  [ '3', '2', '5', 1, '4' ]
console.log(list.indexOf("3")) // 4
list.remove('3')
list.show()
// next:  [ '4', 1, '5', '2' ]
// prev:  [ '2', '5', 1, '4' ]
list.remove('4')
list.show()
// next:  [ 1, '5', '2' ]
// prev:  [ '2', '5', 1 ]
list.removeAt(2)
list.show() //
list.append(4)
list.removeAt(0)
list.show()
console.log(list.removeAt(2)) // false
// next:  [ '5', 4 ]
// prev:  [ 4, '5' ]