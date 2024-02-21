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
}

module.exports = HashLinkedList;
