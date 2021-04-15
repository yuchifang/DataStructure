// append(ele):  從尾部增加一個 node
// insert(position, ele): 從特定位置增加一個 node
// removeAt(position): 刪除特定位置的 node
// remove (ele): 移除某個 node
// indexOf(ele):  回傳此 node 是否存在，不存在回傳 -1
// toString(): 把 List 物件內容轉換成字串
// size(): 回傳總共有幾個 node 在 list 內
function LinkedListNode(element) {
    this.next = null
    this.element = element
}

function LinkedList() {
    this.head = null
    this.length = 0
    // 在這邊新增 method
}

LinkedList.prototype.append = function (element) {
    let newNode = new LinkedListNode(element)
    if (this.head === null) {
        // 1. 是空的
        this.head = newNode
    } else {
        // 2. 不是空的
        // Loop nodeList 最後一個然後加進去
        // 最後一個就是 current.next === null
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = newNode
    }
    this.length++;
}

LinkedList.prototype.insert = function (position, element) {

    if (position <= -1 || position > this.length) return false
    let newNode = new LinkedListNode(element)
    let current = this.head

    if (position === 0) {
        this.head = newNode
        newNode.next = current
        this.length++;
        return true
    }

    if (position > 0) {
        let index = 0
        let previousNode
        while (position !== index) {
            console.log({ index })
            previousNode = current
            current = current.next
            index++
        }
        previousNode.next = newNode
        newNode.next = current
    }
    this.length++;
    return true

}

LinkedList.prototype.removeAt = function (position) {
    if (position <= -1 || position > this.length) return false

    if (this.length === 0) return false // 為空

    let currentNode = this.head
    if (position === 0) {
        this.head = this.head.next
        this.length--
        return currentNode
    }

    if (position > 0) {
        let index = 0
        let previousNode

        while (position !== index) {
            previousNode = currentNode
            currentNode = currentNode.next
            index++
        }

        previousNode.next = currentNode.next
    }

    this.length--
    return currentNode.element;
}

LinkedList.prototype.remove = function (element) {
    // 另一個刪除的方法
    // let index = this.indexOf(element)
    // return this.removeAt(index)


    if (this.length === 0) return false
    let currentNode = this.head
    let previousNode

    if (currentNode.element === element) { // 刪第一個
        this.head = currentNode.next
        this.length--
        return element
    }

    while (currentNode.next !== null) { // 如果是要刪第一個值刪不到
        previousNode = currentNode
        currentNode = currentNode.next
        console.log(currentNode.element)
        if (element === currentNode.element) {
            previousNode.next = currentNode.next
            this.length--
            return element
        }
    }
    return false

}

LinkedList.prototype.indexOf = function (element) {
    let index = 0
    let currentNode = this.head
    while (currentNode) {
        if (currentNode.element === element) return index
        currentNode = currentNode.next
        index++
    }
    return -1
}

LinkedList.prototype.toString = function () {
    let currentNode = this.head
    let returnStr = ""
    while (currentNode) {
        returnStr += currentNode.element
        currentNode = currentNode.next
    }
    return returnStr
}

LinkedList.prototype.show = function () {
    let currentNode = this.head;
    let returnArr = []
    while (currentNode !== null) {
        returnArr.push(currentNode.element)
        currentNode = currentNode.next
    }
    console.log(returnArr)
}
let list = new LinkedList
list.append("A")
list.append("B")
list.insert(1, "D")
list.show() // [ 'A', 'D', 'B' ]
list.removeAt(1)
list.show() // [ 'A', 'B' ]
list.remove("A")
list.remove("E")
list.show() // [ 'B' ]
list.append("C")
list.append("D")
list.show() // [ 'B', 'C', 'D' ]
console.log(list.indexOf("B")) // 0
console.log(list.toString()) // BCD