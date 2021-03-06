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

LinkedList.prototype.insert = function (index, element) {
    if (index <= -1) return false
    if (index > this.length - 1) {
        this.append(element)
        return true
    }

    let newNode = new LinkedListNode(element)
    let current = this.head

    if (this.length === 0 && index === 0) {
        this.append(element)
        return
    }

    if (index === 0) {
        this.head = newNode
        newNode.next = current
        this.length++;
        return true
    }

    if (index > 0) {
        let i = 0
        let previousNode
        while (i !== index) {
            previousNode = current
            current = current.next
            i++
        }
        previousNode.next = newNode
        newNode.next = current
    }
    this.length++;
    return true

}

LinkedList.prototype.removeAt = function (index) {
    if (index <= -1 || index > this.length - 1) return false

    if (this.length === 0) return false // 為空

    let currentNode = this.head
    if (index === 0) {
        this.head = this.head.next
        this.length--
        return currentNode
    }

    if (index > 0) {
        let i = 0
        let previousNode

        while (index !== i) {
            previousNode = currentNode
            currentNode = currentNode.next
            i++
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

LinkedList.prototype.print = function () {
    return JSON.stringify(this.head)
}

LinkedList.prototype.size = function () {
    return this.length
}

let list = new LinkedList
list.append(1)
list.insert(1, "5")
list.insert(0, "4")
console.log(list.size())
list.insert(3, "3")
list.insert(3, "2")
list.show() // [ '4', 1, '5', '2', '3' ]
console.log(list.indexOf('5')) // 2
list.removeAt(list.indexOf('5'))
list.show() // [ '4', 1, '2', '3' ]
list.removeAt(3)
list.removeAt(1)
list.show() // [ '4', '2' ]
list.remove('4')
list.show() // [ '2' ]
list.append(1)
list.append(2)
console.log(list.print()) // {"next":{"next":{"next":null,"element":2},"element":1},"element":"2"}