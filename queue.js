var queue = exports;

queue.queue = function() {

    var queue = [];

    var queueSpace = 0;

    this.Count = function() {
        return queue.length - queueSpace;
    }

    this.IsEmpty = function() {

        // return true if the queue is empty, and false otherwise
        return (queue.length == 0);

    }

    this.Enqueue = function(element) {
        queue.push(element);
    }

    this.Dequeue = function() {

        var element = undefined;

        if (queue.length) {

            element = queue[queueSpace];

            if (++queueSpace * 2 >= queue.length) {
                queue = queue.slice(queueSpace);
                queueSpace = 0;
            }
        }

        return element;
    }
}
