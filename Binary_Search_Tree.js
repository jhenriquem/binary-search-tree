class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertArray(array) {
    array.forEach((item) => {
      this.insert(item);
    });
  }

  delete(element) {
    const array = [];

    function explorer(node) {
      if (!node) {
        return;
      }
      array.push(node.value);
      explorer(node.right);
      explorer(node.left);
    }
    explorer(this.root);

    this.root = null;
    array.splice(array.indexOf(element), 1);
    this.insertArray(array);
  }

  find(value) {
    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (value === current.left.value) {
          this.display(current.left);
          break;
        }
        current = current.left;
      } else if (value > current.value) {
        if (value === current.right.value) {
          this.display(current.right);
          break;
        }
        current = current.right;
      }
    }
  }

  inOrder() {
    const array = [];
    function explorer(node) {
      if (!node) {
        return;
      }
      explorer(node.left);
      array.push(node.value);

      explorer(node.right);
    }
    explorer(this.root);
    return array;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  display(node) {
    if (!this.root) return console.log("Empty Tree");

    function prettyPrint(node, prefix = "", isLeft = true) {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    }

    prettyPrint(node || this.root);
  }

  balanced() {
    const array = this.inOrder();

    const middleElement = array.indexOf(
      array[parseInt((array.length - 1) / 2)],
    );

    this.root = null;
    this.insert(array[middleElement]);

    let leftIndex = middleElement - 2;
    let rightIndex = middleElement + 2;

    while (leftIndex >= 0) {
      this.insert(array[leftIndex]);
      this.insert(array[leftIndex + 1]);
      this.insert(array[leftIndex - 1]);
      leftIndex -= 2;
    }
    while (rightIndex < array.length) {
      this.insert(array[rightIndex]);
      this.insert(array[rightIndex - 1]);
      this.insert(array[rightIndex + 1]);
      rightIndex += 2;
    }
    this.display();
  }
}
