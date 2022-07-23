class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// instances
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// console.log('Node Class Object ', { a });

//* Print NodeLink with while loop
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log('output node val -> ',current.val);
//     current = current.next;
//   }
// };

//* Write it recurselive
const printLinkedList = (head) => {
  // base case
  if (head === null) return;
  console.log('Node Val...', head.val);
  printLinkedList(head.next);
};

//* While Loop , returns array with values
const printLinkedArr = (head) => {
  const arrVal = [];
  let current = head;
  while (current !== null) {
    arrVal.push(current.val);
    current = current.next;
  }
  return arrVal;
};

//* Recursive linked list returning an arr
const printLinkedArr2 = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

console.log(printLinkedArr2(a));
// a -> b -> c -> d -> null
