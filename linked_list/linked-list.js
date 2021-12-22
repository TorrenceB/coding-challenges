/* 
    Implement a Linked List
*/

/* 
    1. Define ListNode class
        Props: value, pointer
    2. Define LinkedList class
        props: head, tail
        methods: push, pop, peek
*/

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /* 
    Methods: 
        - Insert first node
        - Insert Last node
        - Insert at index
        - Get at Index
        - Remove at index
        - Clear list
        - Print list data
  */

  insertFirst(data) {
    this.head = new ListNode(data, this.head);
    this.size++;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);

      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.printListData();
