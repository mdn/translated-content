---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

**`Promise.all()`** 方法回傳一個 {{jsxref("Promise")}} 物件，當引數 `iterable` 中所有的 promises 都被實現（resolved），或引數 iterable 不含任何 promise 時，被實現。或以第一個被拒絕的 promise 的原因被拒絕。

## 語法

```js
Promise.all(iterable);
```

- iterable
  - : 一個 [iterable](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) 物件像是 {{jsxref("Array")}} 或 {{jsxref("String")}}。

### 回傳值

- 一個**已被實現（already resolved）**的 {{jsxref("Promise")}}，若傳入的 iterable 為空。
- 一個**非同步地被實現（asynchronously resolved）**的 {{jsxref("Promise")}} 若傳入的 iterable 不含 promise。注意，Google Chrome 58 對此情形回傳一個**已被解決**的 promise。
- 一個**擱置（pending）**的 {{jsxref("Promise")}}，對所有剩餘情形。此 promise 接著被**非同步地**被 resolved/rejected（只要堆疊為空）當 iterable 中所有的 promises 都被實現，或其中一個被拒絕。參見下方關於"Promise.all 的非同步與同步性質"的例子。

## 描述

此方法在聚集（aggregating）多個 promises 的結果時很有幫助。

實現（Fulfillment）：
若傳入空的 iterable，此方法（同步地）回傳一個已被解決的 promise。若所有傳入的 promises 都被實現，或都不是 promise，`Promise.all` 回傳的 promise 被非同步地實現。無論是哪個情形，回傳一個以 iterable 其內**所有**值（包含非 promise 值）作為引數的陣列被實現。

拒絕（Rejection）：
若任一個傳入的 promise 被拒絕，Promise.all 非同步地以其值被拒絕，無論其他 promises 是否被解決。

## 範例

### 使用 `Promise.all`

`Promise.all` 等到全部實現（或一個拒絕）。

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

若 iterable 含非 promise 值，它們將被忽略，但依然會被記入回傳 promise 陣列值（若被實現）：

```js
// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1, 2, 3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function () {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### `Promise.all` 的非同步與同步性質

以下例子驗證了 `Promise.all` 的非同步性質（asynchronicity）（或同步性質（synchronicity），若傳入的 iterable 是空的）：

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
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
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

`當` `Promise.all` 被拒絕時發生一樣的事情：

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});

// logs
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

注意！`Promise.all` 同步地被解決**若且唯若**傳入的 iterable 為空：

```js
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p2);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### `Promise.all` 的失敗優先（fail-fast）行為

`當任一個陣列成員被拒絕則` `Promise.all` 被拒絕。例如，若傳入四個將在一段時間後被解決的 promises，而其中一個立刻被拒絕，則 `Promise.all` 將立刻被拒絕。

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values);
  },
  (reason) => {
    console.log(reason);
  },
);

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((reason) => {
    console.log(reason);
  });

//From console:
//"reject"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
