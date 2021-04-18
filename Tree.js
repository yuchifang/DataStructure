let Queue = require("./QueueArray")

function Node(data) {
    this.data = data;
    this.parent = null
    this.children = []
}

function Tree(data) {
    let node = new Node(data);
    this._root = node
}

Tree.prototype.traverseDF = function (callback) {
    (function recurse(currentNode) {
        callback(currentNode)
        for (let i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }
    })(this._root)
}

Tree.prototype.contains = function (callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.traverseBF = function (callback) {
    let queue = new Queue();
    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while (currentTree) {
        for (let i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.add = function (data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function (node) {
            if (node.data === toData) {
                parent = node;

            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function (data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;

    var callback = function (node) {
        if (node.data === fromData) {
            parent = node;
        }
    };

    this.contains(callback, traversal);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }

    return childToRemove;
};

function findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }

    return index;
}

var tree = new Tree('CEO');

// 自己寫一次
// 先看看 二元搜尋樹 >> 看看他的寫法 決定
// 1. 自己寫 一次 上面的 再改成  範例的樣子
// 2. 看一次 二元  試著邊看邊寫 不行就照抄
// 3. 看看 可不可以把 二元 改為上列的寫法



/*
tree.contains(function(node){
    if (node.data === 'two') {
        console.log(node);
    }
}, tree.traverseBF);
*/

/*
tree.traverseDF(function(node) {
    console.log(node.data)
});
*/

tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);

tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);
console.log(tree._root)