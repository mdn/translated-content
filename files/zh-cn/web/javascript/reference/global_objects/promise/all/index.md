---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个{{jsxref("Promise")}}实例，那个输入的所有 promise 的 resolve 回调的结果是一个数组。这个{{jsxref("Promise")}}的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。它的 reject 回调执行时，只要任何一个输入的 promise 的 reject 回调执行或者输入不合法的 promise 就会立即抛出错误，并且 reject 的是第一个抛出的错误信息。

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## 语法

```plain
Promise.all(iterable);
```

### 参数

- iterable
  - : 一个[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)对象，如 {{jsxref("Array")}} 或 {{jsxref("String")}}。

### 返回值

- 如果传入的参数是一个空的可迭代对象，则返回一个**已完成**（already resolved）状态的 {{jsxref("Promise")}}。
- 如果传入的参数不包含任何 `promise`，则返回一个**异步完成**（asynchronously resolved）{{jsxref("Promise")}}。注意：Google Chrome 58 在这种情况下返回一个**已完成**（already resolved）状态的 {{jsxref("Promise")}}。
- 其它情况下返回一个**处理中**（pending）的{{jsxref("Promise")}}。这个返回的 `promise` 之后会在所有的 `promise` 都完成或有一个 `promise` 失败时**异步**地变为完成或失败。见下方关于“Promise.all 的异步或同步”示例。返回值将会按照参数内的 `promise` 顺序排列，而不是由调用 `promise` 的完成顺序决定。

## 说明

此方法在集合多个 `promise` 的返回结果时很有用。

完成（Fulfillment）：
如果传入的可迭代对象为空，`Promise.all` 会同步地返回一个已完成（resolved）状态的`promise`。
如果所有传入的 `promise` 都变为完成状态，或者传入的可迭代对象内没有 `promise`，`Promise.all` 返回的 `promise` 异步地变为完成。
在任何情况下，`Promise.all` 返回的 `promise` 的完成状态的结果都是一个数组，它包含所有的传入迭代参数对象的值（也包括非 `promise` 值）。

失败/拒绝（Rejection）：
如果传入的 `promise` 中有一个失败（rejected），`Promise.all` 异步地将失败的那个结果给失败状态的回调函数，而不管其它 `promise` 是否完成。

## 示例

### `Promise.all` 的使用

`Promise.all` 等待所有都完成（或第一个失败）。

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```

如果参数中包含非 `promise` 值，这些值将被忽略，但仍然会被放在返回数组中（如果 `promise` 完成的话）：

```js
// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1,2,3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log(p);
    console.log(p2);
    console.log(p3);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### `Promise.all` 的异步和同步

下面的例子中演示了 `Promise.all` 的异步性（如果传入的可迭代对象是空的，就是同步）：

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

如果 `Promise.all` 失败，也是一样的：

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

但是，`Promise.all` **当且仅当**传入的可迭代对象为空时为同步：

```js
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### `Promise.all` 的快速返回失败行为

`Promise.all` 在任意一个传入的 `promise` 失败时返回失败。例如，如果你传入的 `promise`中，有四个 `promise` 在一定的时间之后调用成功函数，有一个立即调用失败函数，那么 `Promise.all` 将立即变为失败。

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}).catch(reason => {
  console.log(reason)
});

//From console:
//"reject"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
