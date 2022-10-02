---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

**`Promise.race(iterable)` **方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

{{EmbedInteractiveExample("pages/js/promise-race.html")}}

## 语法

```plain
Promise.race(iterable);
```

### **参数**

- iterable
  - : 可迭代对象，类似{{jsxref("Array")}}。详见 [iterable](/zh-CN/docs/Web/JavaScript/Guide/iterable)。

### 返回值

一个**待定的** {{jsxref("Promise")}} 只要给定的迭代中的一个 promise 解决或拒绝，就采用第一个 promise 的值作为它的值，从而**异步**地解析或拒绝（一旦堆栈为空）。

## 描述

`race` 函数返回一个 `Promise`，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。

如果传的迭代是空的，则返回的 promise 将永远等待。

如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 `Promise.race` 将解析为迭代中找到的第一个值。

## 示例

### Promise.race 的异步性

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
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
// Promise { <state>: "fulfilled", <value>: 33 }
```

### 使用 Promise.race – setTimeout 的示例

```js
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 更快，所以它完成了
}, function(reason) {
  // 未被调用
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // 未被调用
}, function(reason) {
  console.log(reason); // "six"
  // p6 更快，所以它失败了
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
