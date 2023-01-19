/** Node: node for a deque. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Deque: chained-together nodes where you can
 *  remove from the front or back and add to the front or back. */

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** appendLeft(val): add new value to beginning of deque. Returns undefined. */

  appendLeft(val) {
    const newNode = new Node(val);

    if(!this.isEmpty()) {
      newNode.next = this.first;
      this.first.prev = newNode;
      this.first = newNode;
      this.size += 1;
    }
    else {
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
    }
  }

  /** appendRight(val): add new value to end of the deque. Returns undefined. */

  appendRight(val) {
    const newNode = new Node(val);
    if(!this.isEmpty()) {
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }

  /** popLeft(): remove the node from the start of the deque
   * and return its value. Should throw an error if the deque is empty. */

  popLeft() {
    if(this.isEmpty()) throw new Error("Empty deque");
    const popped = this.first.val;
    if(this.size > 1) {
      this.first.next.prev = null;
      this.first = this.first.next;
    }
    else {
      this.first = null;
      this.last = null;
    }
    this.size -= 1;
    return popped;
  }

  popRight() {
    if(this.isEmpty()) throw new Error("empty deque");
    const popped = this.last.val;
    if(this.size > 1) {
      this.last = this.last.prev;
      this.last.next = null;
      this.size -= 1;
    }
    else {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    return popped;
  }

  /** peekLeft(): return the value of the first node in the deque. */

  peekLeft() {
    return this.first.val;
  }

  /** peekRight(): return the value of the last node in the deque. */

  peekRight() {
    return this.last.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0 && !this.first && !this.last) return true;
    return false;
  }
}

module.exports = Deque;
