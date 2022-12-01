---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}

**catch()** 方法返回一个[Promise](/zh-CN/docs/Web/API/Promise)，并且处理拒绝的情况。它的行为与调用{{jsxref("Promise.then", "Promise.prototype.then(undefined, onRejected)")}} 相同。(事实上，calling `obj.catch(onRejected)` 内部 calls `obj.then(undefined, onRejected)`).

## 语法

```plain
p.catch(onRejected);

p.catch(function(reason) {
   // 拒绝
});
```

### 参数

- **onRejected**
  - : 当 Promise 被 rejected 时，被调用的一个{{jsxref("Function")}}。该函数拥有一个参数：`reason` rejection 的原因。如果 `onRejected` 抛出一个错误或返回一个本身失败的 Promise，通过 `catch()` 返回的 Promise 被 rejected；否则，它将显示为成功（resolved）。

### 返回值

一个{{jsxref("Promise")}}.

## 描述

`catch` 方法可以用于您的 promise 组合中的错误处理。

Internally calls `Promise.prototype.then` on the object upon which is called, passing the parameters `undefined` and the `onRejected` handler received; then returns the value of that call (which is a {{jsxref("Promise")}}).

## 示例

### 使用链式语句的 `catch` 方法

```js
var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw 'oh, no!';
}).catch(function(e) {
  console.log(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// 以下行为与上述相同
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.log(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
```

### 捕获抛出的错误

```js
// 抛出一个错误，大多数时候将调用 catch 方法
var p1 = new Promise(function(resolve, reject) {
  throw 'Uh-oh!';
});

p1.catch(function(e) {
  console.log(e); // "Uh-oh!"
});

// 在异步函数中抛出的错误不会被 catch 捕获到
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw 'Uncaught Exception!';
  }, 1000);
});

p2.catch(function(e) {
  console.log(e); // 不会执行
});

// 在 resolve() 后面抛出的错误会被忽略
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw 'Silenced Exception!';
});

p3.catch(function(e) {
   console.log(e); // 不会执行
});
```

### 如果已决议

```js
//创建一个新的 Promise，且已决议
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    //这个方法永远不会调用
    console.log("catch p1!");
    console.log(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
