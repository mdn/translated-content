---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---

{{JSRef}}

**`Promise.resolve(value)`** 方法回傳一個以 value 判定結果的 {{jsxref("Promise")}} 物件。若 value 是個 thenable（例如，具有 `then()` 方法，則回傳的 promise 將依其結果採取其最終狀態；若 value 是 promise，則作為呼叫 Promise.resolve 之結果；其他情形都將回傳以 value 實現的 promise。

## 語法

```js
Promise.resolve(value);
Promise.resolve(promise);
Promise.resolve(thenable);
```

### 參數

- value
  - : 將被 `Promise` 實現的引數（argument）。可以是個 `Promise` 或待解決的 thenable。

### 回傳值

以 value 或作為 value 的 promise 解決的 {{jsxref("Promise")}}。

## 描述

`靜態函式` `Promise.resolve` 回傳判定後的 `Promise。`

## 範例

### 使用 `Promise.resolve` 靜態方法

```js
Promise.resolve("Success").then(
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // not called
  },
);
```

### 判定陣列

```js
var p = Promise.resolve([1, 2, 3]);
p.then(function (v) {
  console.log(v[0]); // 1
});
```

### 判定另一個 `Promise`

```js
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function (value) {
  console.log("value: " + value);
});
console.log("original === cast ? " + (original === cast));

// logs, in order:
// original === cast ? true
// value: 33
```

由於 handler 是非同步地被調用而導致相反的紀錄順序。經由[這篇文章](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#回傳值)了解 then 如何運作。

### 判定 thenable 及拋出 Error

```js
// Resolving a thenable object
var p1 = Promise.resolve({
  then: function (onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true, object casted to a Promise

p1.then(
  function (v) {
    console.log(v); // "fulfilled!"
  },
  function (e) {
    // not called
  },
);

// Thenable throws before callback
// Promise rejects
var thenable = {
  then: function (resolve) {
    throw new TypeError("Throwing");
    resolve("Resolving");
  },
};

var p2 = Promise.resolve(thenable);
p2.then(
  function (v) {
    // not called
  },
  function (e) {
    console.log(e); // TypeError: Throwing
  },
);

// Thenable throws after callback
// Promise resolves
var thenable = {
  then: function (resolve) {
    resolve("Resolving");
    throw new TypeError("Throwing");
  },
};

var p3 = Promise.resolve(thenable);
p3.then(
  function (v) {
    console.log(v); // "Resolving"
  },
  function (e) {
    // not called
  },
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
