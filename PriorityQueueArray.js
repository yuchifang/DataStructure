function PriorityQueue() {
    let list = [];
    // priority 越高 越優先
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function (element, priority = 1) {
        let queueElement = new QueueElement(element, priority)

        if (this.isEmpty()) {
            list.push(queueElement)
            return
        }

        for (let i = 0; i < list.length; i++) {
            if (list[i].priority < queueElement.priority) {
                list.splice(i, 0, queueElement)
                return true
            }
        }
        list.push(queueElement)
        return true
    }

    this.dequeue = function () {
        list.shift()
    }

    this.front = function () {
        return list[0]
    }

    this.clear = function () {
        list = []
    }

    this.size = function () {
        return list.length
    }

    this.isEmpty = function () {
        return list.length === 0
    }

    this.show = function () {
        return list
    }

}
const priorityQueue = new PriorityQueue();
// 判斷佇列是否為空
console.log(priorityQueue.isEmpty()); // true
// 將值和優先序放入佇列中
priorityQueue.enqueue('令狐衝', 2);
priorityQueue.enqueue('西方不拜', 1);
priorityQueue.enqueue('田薄光', 4);
priorityQueue.enqueue('任贏贏', 3);
priorityQueue.enqueue('田薄光光', 4);
console.log(priorityQueue.show())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.show())
/*
[
  QueueElement { element: '田薄光', priority: 4 },
  QueueElement { element: '田薄光光', priority: 4 },
  QueueElement { element: '任贏贏', priority: 3 },
  QueueElement { element: '令狐衝', priority: 2 },
  QueueElement { element: '西方不拜', priority: 1 }
]
*/