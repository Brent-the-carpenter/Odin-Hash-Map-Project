const HashNode = require("./hashNode");

class HashLinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new HashNode(key, value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  find(key) {
    let current = this.head;

    while (current !== null) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  has(key) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;

    while (current !== null) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeNode(key) {
    if (this.head === null) {
      return `Bucket is empty`;
    }
    let current = this.head;
    let previousNode = null;

    if (current.key === key) {
      this.head = this.head.next;
      return `removed key`;
    }

    while (current !== null) {
      if (current.key === key) {
        previousNode.next = current.next;
        return `removed key`;
      }
      if (current.next === null) {
        return null;
      }
      previousNode = current;
      current = current.next;
    }
    return `key not found`;
  }
}

module.exports = HashLinkedList;
