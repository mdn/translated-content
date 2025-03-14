---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}

**catch()** 方法只處理 Promise 的被拒絕狀態，並回傳一個新的 `Promise` 物件。此方法的行為等同於呼叫 {{jsxref("Promise.then", "Promise.prototype.then(undefined, onRejected)")}}。

## 語法

```js
p.catch(onRejected);

p.catch(function (reason) {
  // rejection
});
```

### 參數

- onRejected

  - : 一個 {{jsxref("Function")}} ，在 `Promise` 被拒絕時被呼叫。這個函式有一個引數：

    - `reason`
      - : 失敗訊息。

    若 onRejected 拋出一個錯誤或回傳一個被拒絕的 Promise，則 catch() 回傳的 Promise 被拒絕；其他情形都是被實現。

### 回傳值

呼叫（`catch` 的 promise）物件，內部呼叫 `Promise.prototype.then`，傳入引數 undefined 及 onRejected；接著以之結果回傳（結果為 {{jsxref("Promise")}}）。

**內部呼叫演示：**

```js
// overriding original Promise.prototype.then/catch just to add some logs
(function (Promise) {
  var originalThen = Promise.prototype.then;
  var originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function () {
    console.log(
      "> > > > > > called .then on %o with arguments: %o",
      this,
      arguments,
    );
    return originalThen.apply(this, arguments);
  };
  Promise.prototype.catch = function () {
    console.log(
      "> > > > > > called .catch on %o with arguments: %o",
      this,
      arguments,
    );
    return originalCatch.apply(this, arguments);
  };
})(this.Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX() {});

// logs:
// > > > > > > called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// > > > > > > called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

## 描述

`catch` 方法在處理 promise 組合的錯誤時很有幫助。

## 範例

### 使用及串接 `catch` 方法

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Success");
});

p1.then(function (value) {
  console.log(value); // "Success!"
  throw "oh, no!";
})
  .catch(function (e) {
    console.log(e); // "oh, no!"
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      console.log("Not fired due to the catch");
    },
  );

// The following behaves the same as above
p1.then(function (value) {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch(function (e) {
    console.log(e); // "oh, no!"
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      console.log("Not fired due to the catch");
    },
  );
```

### 拋出例外時的陷阱

```js
// Throwing an error will call the catch method most of the time
var p1 = new Promise(function (resolve, reject) {
  throw "Uh-oh!";
});

p1.catch(function (e) {
  console.log(e); // "Uh-oh!"
});

// Errors thrown inside asynchronous functions will act like uncaught errors
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw "Uncaught Exception!";
  }, 1000);
});

p2.catch(function (e) {
  console.log(e); // This is never called
});

// Errors thrown after resolve is called will be silenced
var p3 = new Promise(function (resolve, reject) {
  resolve();
  throw "Silenced Exception!";
});

p3.catch(function (e) {
  console.log(e); // This is never called
});
```

### 如果 Promise 被實現

```js
//Create a promise which would not call onReject
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
  //This is never called
  console.log("catch p1!");
  console.log(reason);
});

p2.then(
  function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
  },
  function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
