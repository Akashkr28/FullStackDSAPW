/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let i = 0;
    while(i < n && fast != null) {
        i++;
        fast = fast.next;
    }
    if(fast == null) {
        //remove head
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    let slow = head;
    while(fast.next != null) {
        //till the time fast doesnot rwch tail node
        slow = slow.next;
        fast = fast.next;
    }
    let toBeDel = slow.next;
    slow.next = toBeDel.next;
    toBeDel.next = null;
    return head;
};