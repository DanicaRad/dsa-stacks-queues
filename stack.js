/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to "top" of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    if(!this.isEmpty()) {
      newNode.next = this.first;
      this.first = newNode;
      this.size += 1;
    }
    else {
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()) throw new Error("empty stack");
    const popped = this.first.val;
    this.first = this.first.next;
    this.size -= 1;
    return popped;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0 && !this.first) return true;
    return false;
  }
}

module.exports = Stack;
