// const fib = function(n){
// // if(n<=1) return n;
// // return fib(n-1) + fib(n-2);
// const arr = [0,1];

// for(let i=2; i<=n ;i++ ){
//     arr.push(arr[i-1]+arr[i-2]);
// }
// return arr[n];
// }

// const um = fib(5);
// console.log(um);

//f series 0,1,1,2,3,5,8,13  f(0)=0 f(1)=1 f(n ) = f(n-1) + f(n-2);


// const isAnagram = function(a,b){
// //     if(a.length !== b.length) return false;
// //    return a.split("").sort().join("") === b.split("").sort().join("");
// if(a.length !== b.length) return false;
// let obja = {};
// let objb={};

// for( let key of a){
//     console.log(key);
//     obja[key] = (obja[key] || 0)+1;
//     objb[key] = (objb[key] || 0)+1;

// }
// for(let key in obja){
//     if(obja[key] !== objb[key]) return false;
// }

// return true
// }

// console.log(isAnagram("anaam","anaam"));

// // split / sort / join ===

// const twoSum = function(nums,target){
// //     let map = {};
// //     for(let i=0; i<nums.length; i++){
// //         let n = nums[i]; 
// //         if(map[target-n] > 0) return [map[target-n],i];
// //       else{
// //         map[nums[i]] = i;
// //     }
// // }
// for(let i=0; i< nums.length ; i++){
//     for(let j=i+1; j<nums.length; j++){
//         if(nums[i] + nums[j] === target){
//             return [i,j];

//         }
//     }
// }
// }

// console.log(twoSum([2,7,11,15],26));

// const maxProfit = function(prices){
// let maxProfit =0;
// let purchasePrice = prices[0] || 0;
// for(let i=1; i<prices.length; i++){
//     if(prices[i] < purchasePrice){
//       purchasePrice = prices[i]

//     }

//     maxProfit = Math.max(maxProfit,prices[i]- purchasePrice)



// }
// return [maxProfit,purchasePrice];
// }

// console.log(maxProfit([7,1,5,3,6,4]));

// reverse a string using recurssion 

// function reverse(str){
//     if(str.length < 1) return " ";
    
//    return reverse(str.slice(1)) + str.charAt(0)
//   }
//   console.log(reverse("hello"))

// factorial using recurssion

// function factorial(n){
//     if(n==1) return 1;
    
//     return n * factorial(n-1)
    
// }

// console.log(factorial(5))

// function range(strt,end){
//     if(end < strt) return [];
   
   
//     let numbers = range(strt,end-1);
//       numbers.push(end);
   
//     return numbers
    
// }

// console.log(range(1,5))

// function recursiveSubsets(nums){
// result = [];
// temp = [];
// function subsets(nums,i){
//   if (i == nums.length){
//     result.push([...temp]);
//   }
//   else{
//     temp.push(nums[i]);
//     subsets(nums, i+1);
//     temp.pop();
//     subsets(nums, i+1);

//   }

// }
// subsets(nums,0)
// return result;
// }

// console.log(recursiveSubsets([1,2,3,4]))


// stack implementation

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(element) {
//     this.stack.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is Empty. Can't perform pop.";
//     }

//     return this.stack.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is Empty. Can't perform peek.";
//     }

//     return this.stack[this.size() - 1];
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }

//   size() {
//     return this.stack.length;
//   }

//   printStack() {}
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(69);
// stack.push(420);

// console.log(stack.size());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());


// reverse words 

// function reverseWords(str){
//   if(str.length <= 1) return "not able to reverse"
//   let strarr = str.split(" ");
//   // console.log(strarr);
//   let storage = "";
//   for(let n of strarr){
//       let val = strarr.pop();
//       if(val){
//           console.log(storage);
//         storage = storage + " " + val;
//              console.log(storage);
//       }
     
//   }
  
//  return storage.trim(); 
// }

// console.log(reverseWords("  hello world "))


// valid paranthesis


// function validparams(str){
//   if(str.length < 1) return "not valid";
//   let arr = []
//   for(let s of str){
//       // console.log(s);
//       if(s==='[' || s==='{' || s==='('){
//          arr.push(s) 
//       }else{
//           if(s==='}' || s===']' || s===')'){
//              if(arr.length === 0) return false;
//           let prev = arr.pop();
//           if((prev==='{' && s!=='}')||(prev==='[' && s!==']')||(prev==='(' && s!==')'))return false; 
//           }
          
//       }
//   }
// return arr.length === 0  
// }

// console.log(validparams("[{})]"))


// queue implementation

// class Queue{
//   constructor(){
//       this.queue = []
//   }
  
//   enqueue(ele){
//       this.queue.push(ele)
//   }
  
//   dequeue(){
//       if(this.isEmpty()) return "Empty queue";
//      return this.queue.shift();
//   }
  
//   peek(){
//          if(this.isEmpty()) return "Empty queue";
//      return this.queue[0]; 
//   }
  
//   isEmpty(){
//     return  this.queue.length === 0;
//   }
  
//   size(){
//       return this.queue.length;
//   }
  
//   printQueue(){
//       let queueStr = ""
//       for(let n of this.queue){
//           queueStr +=  n + ", " ;
//       }
//       console.log(queueStr);
//   }
// }

// const que = new Queue();

// console.log(que.dequeue());
// que.enqueue(10);
// que.enqueue(20);
// que.enqueue(30);
// console.log(que.dequeue());
// console.log(que.peek());
// que.printQueue();



// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a
// linear data structure in which the operations are performed based on First In First Out
// principle, and the last position is connected back to the first position to make a circle.

// var MyCircularQueue = function (k) {
//   this.queue = [];
//   this.size = k;
// };

// MyCircularQueue.prototype.enQueue = function (value) {
//   if (this.size === this.queue.length) return false;
//   this.queue.push(value);
//   return true;
// };

// MyCircularQueue.prototype.deQueue = function () {
//   if (this.queue.length === 0) return false;
//   this.queue.shift();
//   return true;
// };

// MyCircularQueue.prototype.Front = function () {
//   if (this.queue.length === 0) return -1;
//   return this.queue[0];
// };

// MyCircularQueue.prototype.Rear = function () {
//   if (this.queue.length === 0) return -1;
//   return this.queue[this.queue.length - 1];
// };

// MyCircularQueue.prototype.isEmpty = function () {
//   return this.queue.length === 0;
// };

// MyCircularQueue.prototype.isFull = function () {
//   return this.size === this.queue.length;
// };

// // [2,5,72]

// var obj = new MyCircularQueue(3);
// obj.enQueue(1);
// obj.enQueue(4);
// obj.enQueue(2);
// obj.deQueue();
// obj.enQueue(5);
// obj.deQueue();
// obj.enQueue(72);

// console.log(obj.Front(), obj.Rear());

// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

// var MyStack = function () {
//   this.q1 = [];
//   this.q2 = [];
// };

// // q1 - [4,2,3,5]
// // q2 - []

// MyStack.prototype.push = function (x) {
//   while (this.q1.length !== 0) {
//     this.q2.push(this.q1.shift());
//   }
//   this.q1.push(x);
//   while (this.q2.length !== 0) {
//     this.q1.push(this.q2.shift());
//   }
// };

// MyStack.prototype.pop = function () {
//   return this.q1.shift();
// };

// MyStack.prototype.top = function () {
//   return this.q1[0];
// };

// MyStack.prototype.empty = function () {
//   return this.q1.length === 0;
// };

// var stack = new MyStack();
// stack.push(3);
// stack.push(5);
// stack.push(96);
// stack.push(24);
// stack.pop();
// console.log(stack.top());



// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

// var MyQueue = function () {
//   this.stack1 = [];
//   this.stack2 = [];
// };

// MyQueue.prototype.enqueue = function (x) {
//   this.stack1.push(x);
// };

// // stack1 = [9,10]
// // stack2 = []

// MyQueue.prototype.dequeue = function () {
//   if (this.stack2.length === 0) {
//     while (this.stack1.length > 0) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }

//   return this.stack2.pop();
// };

// MyQueue.prototype.front = function () {
//   if (this.stack2.length === 0) {
//     while (this.stack1.length > 0) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }

//   return this.stack2[this.stack2.length - 1];
// };

// MyQueue.prototype.empty = function () {
//   return this.stack1.length === 0 && this.stack2.length === 0;
// };

// [3, 6, 7];

// const queue = new MyQueue();
// queue.enqueue(3);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.dequeue();
// console.log(queue.front());


// Sliding window

// function maxSlidingWindowQueue(nums,k){
//     let result = [];
//     let n = nums.length;
   
//     for(let i=0; i< n-k; i++){
//          let max = nums[i]
//         for(let j=1;j<k;j++){
//           if(nums[i+j]>max){
//               max = nums[i+j];
//           }  
          
//         }
//         result.push(max);
//     }
//     return result;
//  }
 
 
//  console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));


//  const maxSlidingWindowQueue = function (nums, k) {
//     const result = [];
//     const deque = [];
  
//     for (let i = 0; i < nums.length; i++) {
//       // O(n)
//       if (deque.length > 0 && deque[0] <= i - k) {
//         deque.shift();
//       }
  
//       while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
//         deque.pop();
//       }
  
//       deque.push(i);
  
//       if (i >= k - 1) {
//         result.push(nums[deque[0]]);
//       }
//     }
  
//     return result;
//   };
  
//   // Time Complexity - O(n)
//   // Space Complexity - O(n)
//   console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));