const HashLinkedList = require("./linkedList-Hashmap");
// const Node = require("./hashNode");
class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size);
    for (let i = 0; i < size; i += 1) {
      this.buckets[i] = new HashLinkedList();
    }

    this.capacity = this.buckets.length;
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

  calculateLoadFactor() {
    const numberOfEntries = this.length();
    const loadFactor = numberOfEntries / this.capacity;
    return loadFactor;
  }

  resize() {
    const newHashMap = new Array(this.buckets.length * 2);
    for (let i = 0; i < newHashMap.length; i += 1) {
      newHashMap[i] = new HashLinkedList();
    }
    const oldHashEntries = this.entries();
    this.buckets = newHashMap;
    oldHashEntries.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }

  set(key, value) {
    if (this.calculateLoadFactor() > 0.75) {
      this.resize();
    }
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const LinkedListBucket = this.buckets[index];
    const node = LinkedListBucket.find(key);
    if (node) {
      node.value = value;
    } else {
      LinkedListBucket.append(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const LinkedListBucket = this.buckets[index];
    const node = LinkedListBucket.find(key);
    if (node) {
      return node.value;
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const LinkedListBucket = this.buckets[index];
    return LinkedListBucket.has(key);
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const LinkedListBucket = this.buckets[index];

    return LinkedListBucket.removeNode(key);
  }

  length() {
    let numberOfKeys = 0;
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        let current = bucket.head;
        while (current !== null) {
          numberOfKeys += 1;
          current = current.next;
        }
      }
    });
    return numberOfKeys;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i += 1) {
      this.buckets[i] = new HashLinkedList();
    }
    console.log("Hash Map cleared");
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i].head) {
        let current = this.buckets[i].head;
        while (current !== null) {
          keys.push(current.key);
          current = current.next;
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (this.buckets[i].head) {
        let current = this.buckets[i].head;
        while (current !== null) {
          values.push(current.value);
          current = current.next;
        }
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      let current = this.buckets[i].head;
      if (current) {
        while (current !== null) {
          entries.push([current.key, current.value]);
          current = current.next;
        }
      }
    }
    return entries;
  }
}

module.exports = HashMap;
