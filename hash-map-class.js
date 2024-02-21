const HashLinkedList = require("../Odin-Linked-List/listClass");

class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size);
    for (let i = 0; i < size; i += 1) {
      this.buckets[i] = new HashLinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return Math.abs(hashCode);
  }

  set(key, value) {
    const index = this.hash(key);
    const LinkedListBucket = this.buckets[index];
    const node = LinkedListBucket.find(key);
    if (node) {
      node.value = value;
    } else {
      LinkedListBucket.append(key, value);
    }
  }
}
module.exports = HashMap;
