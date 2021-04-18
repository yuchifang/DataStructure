class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }

        let currentNode = this.root
        while (true) {
            if (currentNode.value > newNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode

                    return currentNode
                }
                currentNode = currentNode.left
            }

            if (currentNode.value < newNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode

                    return currentNode
                }
                currentNode = currentNode.right
            }

            if (currentNode.value === newNode.value) {
                console.log(" 插入重複節點 ")
                return false

            }

        }
    }

    contains(value) {

        if (!this.root) {
            return false
        }

        if (this.root.value === value) {
            return this.root
        }
        let currentNode = this.root

        while (true) {
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    return false
                }

                if (currentNode.left.value === value) {
                    return currentNode.left
                }
                currentNode = currentNode.left


            }

            if (currentNode.value < value) {
                if (!currentNode.right) {
                    return false
                }

                if (currentNode.right.value === value) {
                    return currentNode.right
                }
                currentNode = currentNode.right


            }

            if (currentNode.value === value) {
                return currentNode
            }

        }

    }

    remove(value) {
        if (!this.root) {
            return false
        }

        let tempNode
        if (this.root.value === value) {
            tempNode = this.root
            this.root = null
            return tempNode
        }

        let currentNode = this.root

        while (true) {
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    return false
                }

                if (currentNode.left.value === value) {
                    tempNode = currentNode.left
                    currentNode.left = null
                    return tempNode
                }
                currentNode = currentNode.left
            }

            if (currentNode.value < value) {
                if (!currentNode.right) {
                    return false
                }

                if (currentNode.right.value === value) {
                    tempNode = currentNode.right
                    currentNode.right = null
                    return tempNode
                }
                currentNode = currentNode.right
            }

            if (currentNode.value === value) {
                empNode = currentNode
                currentNode = null
                return tempNode
            }
        }

    }

    traverseBF() {
        let returnArr = []
        let currentNode = this.root
        let queue = []
        queue.push(currentNode)

        while (queue.length) {
            currentNode = queue.shift()
            returnArr.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }

        }
        return returnArr
    }

    traverseDF() {
        let returnArr = []
        let currentNode = this.root

        function traverse(node) {
            returnArr.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(currentNode)

        return returnArr
    }



}
let tree = new BinarySearchTree
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(1);
tree.insert(8);
tree.insert(15);
tree.insert(30);
console.log(tree.contains(30)) // Node { value: 30, left: null, right: null }
console.log(tree.remove(15)) // Node { value: 15, left: null, right: null }
console.log(tree)
/*
BinarySearchTree {
  root: Node {
    value: 10,
    left: Node { value: 5, left: [Node], right: [Node] },
    right: Node { value: 20, left: null, right: [Node] }
  }
}
*/
console.log(tree.traverseBF()) // [ 10, 5, 20, 1, 8, 30 ]
console.log(tree.traverseDF()) // [ 10, 5, 1, 8, 20, 30 ]