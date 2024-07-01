---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

**`Promise.race(iterable)`** 方法回傳一個 promise 物件，此 promise 物件會於 iterable 引數中任一個 promise 轉為 resolve 或 rejected 時立即轉變成 resolve 或 rejected，並且接收其成功值或失敗訊息。

## 語法

```js
Promise.race(iterable);
```

### 參數

- iterable
  - : 一個 iterable 物件，像是 {{jsxref("Array")}}. 請參考[可迭代協議](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代協議)。

### 回傳值

當傳入的 iterable 中有 promise 被實現或拒絕時，立刻回傳被實現或拒絕的 {{jsxref("Promise")}}。

## 描述

`race` 函式回傳一個與傳入的 iterable 之中第一個被解決（settled）的 promise 相同方式被解決（且以相同值）的 `Promise`。

## 範例

### `Promise.race` 的非同步性質

以下例子演示了 `Promise.race` 的非同步性質：

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
```

一個空的 iterable 造成回傳的 promise 永久擱置：

```js
var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(foreverPendingPromise);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }
```

若 iterable 中有一個或多個非 promise 值且／或一個已經被實現／解決的 promise，`Promise.race` 將以陣列中第一個這樣的值解決：

```js
var foreverPendingPromise = Promise.race([]);
var alreadyResolvedProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyResolvedProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
  console.log(p2);
});

// logs, in order:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 666 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### 使用 `Promise.race` 及 `setTimeout` 的範例

```js
var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function (value) {
  console.log(value); // "two"
  // Both resolve, but p2 is faster
});

var p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(
  function (value) {
    console.log(value); // "three"
    // p3 is faster, so it resolves
  },
  function (reason) {
    // Not called
  },
);

var p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(
  function (value) {
    // Not called
  },
  function (reason) {
    console.log(reason); // "six"
    // p6 is faster, so it rejects
  },
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
