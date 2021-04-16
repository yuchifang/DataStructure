// append(ele):  從尾部增加一個 node
// insert(position, ele): 從特定位置增加一個 node
// removeAt(position): 刪除特定位置的 node
// remove (ele): 移除某個 node
// indexOf(ele):  回傳此 node 是否存在，不存在回傳 -1
// size(): 回傳總共有幾個 node 在 list 內

// 測全部的 insert remove
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

        if (index >= this.length) {
            this.append(element)
            return
        }

        let newNode = new DoublyNode(element)
        let currentNode = this.head
        let i = 0
        while (currentNode !== null) {
            if (i === index) {
                let tempNode = currentNode

                newNode.next = tempNode.next

                newNode.prev = currentNode

                tempNode.next = newNode
                tempNode.next.prev = newNode

                this.length++
                return
            }
            currentNode = currentNode.next
            i++

        }



    }

    show() {
        let currentNode = this.head
        let returnArr = []

        while (currentNode !== null) {
            returnArr.push(currentNode.element)
            currentNode = currentNode.next
        }
        console.log(returnArr)
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
list.show() // [ 1, '5', '3', '2' ]