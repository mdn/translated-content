---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef}}

**`then()`** 方法回傳一個 {{domxref("Promise")}} 物件。它接收兩個引數： `Promise` 在成功及失敗情況時的回呼函式。

> **備註：** 如果有一個或兩個引數被省略，或為非函式（non-functions），則 `then` 將處於遺失 handler(s) 的狀態，但不會產生錯誤。若發起 `then` 之 `Promise` 採取了一個狀態（實現（`fulfillment）`或拒絕（`rejection））`而 `then` 沒有處理它的函式，一個不具有額外 handlers 的新 `Promise` 物件將被建立，單純採取原 `Promise` 其最終狀態。

## 語法

```js
p.then(onFulfilled[, onRejected]);

p.then(function(value) {
  // fulfillment
}, function(reason) {
  // rejection
});
```

### 參數

- `onFulfilled`
  - : 一個 {{jsxref("Function")}}，當 `Promise` 被實現（fulfilled）時被呼叫。此函式接收一個實現值（`fulfillment value`）作為引數。
- `onRejected` {{optional_inline}}
  - : 一個 {{jsxref("Function")}}，當 `Promise` 被拒絕（rejected）時被呼叫。此函式接收一個失敗訊息（`rejection reason`）作為引數。

### 回傳值

一個進入**擱置**（pending）狀態的 {{jsxref("Promise")}}。（只要堆疊一空）handler 函式**非同步地**（asynchronously）被呼叫。在調用 handler 後，若 handler 函式：

- 回傳一個值，則 `then` 回傳之 promise 以此值被實現（resolved）。
- 拋出一個例外，則 `then` 回傳之 promise 以此例外被否決（rejected）。
- 回傳一個被實現的 promise，則 `then` 回傳之 promise 以此值被實現。
- 回傳一個被否決的 promise，則 `then` 回傳之 promise 以此值被否決。
- 回傳另一個被**擱置**的 promise 物件，則 `then` 回傳之 promise 之實現／拒絕隨後由處理函式之實現/否決決定。並且，`then` 回傳之 promise 將與處理函式回傳之 promise 以相同值被解決。

以下例子展示 `then` 方法的非同步性質（asynchronicity）。

```js
// 使用一個已實現的 promise，'then' 區塊將立即被觸發，但是它的 handlers 將是非同步地被觸發，如同 console.logs 所示
var resolvedProm = Promise.resolve(33);

var thenProm = resolvedProm.then(function (value) {
  console.log("我在 main stack 之後被呼叫。收到及將回傳的值為：" + value);
  return value;
});
// 立即紀錄 thenProm
console.log(thenProm);

// 我們可以使用 setTimeout 以延遲（postpone）函式執行直到堆疊為空
setTimeout(function () {
  console.log(thenProm);
});

// 紀錄結果，依序為:
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "我在 main stack 之後被呼叫。收到及將回傳的值為：33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}
```

## 描述

因為 `then` 和 {{jsxref("Promise.prototype.catch()")}} 方法都回傳 promises，它們可以被串接 — 稱為組合（_composition）。_

## 範例

### 運用 `then` 方法

```js
var p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject ("Error!");
});

p1.then(
  (value) => {
    console.log(value); // Success!
  },
  (reason) => {
    console.log(reason); // Error!
  },
);
```

### 串接

`then` 方法回傳一個 `Promise` 而可以進行方法串接（method chaining）。

如果傳入 `then` 的 handler 函式回傳一個 promise，一個等價的 `Promise` 將被展現給方法串接中的下一個 then 。以下程式碼片段透過 `setTimout` 函式模擬非同步程式碼。

```js
Promise.resolve("foo")
  // 1. Receive "foo" concatenate "bar" to it and resolve that to the next then
  .then(function (string) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "bar";
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before return the unworked on
  // string to the next then
  .then(function (string) {
    setTimeout(function () {
      string += "baz";
      console.log(string);
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before string is actually processed by the mocked asynchronous code in the
  // prior then block.
  .then(function (string) {
    console.log(
      "Last Then:  oops... didn't bother to instantiate and return " +
        "a promise in the prior then so the sequence may be a bit " +
        "surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string);
  });
```

當 handler 僅回傳一個值，實際上它將回傳 `Promise.resolve(<value returned by whichever handler was called>)`.

```js
var p2 = new Promise(function (resolve, reject) {
  resolve(1);
});

p2.then(function (value) {
  console.log(value); // 1
  return value + 1;
}).then(function (value) {
  console.log(value + "- This synchronous usage is virtually pointless"); // 2- This synchronous usage is virtually pointless
});

p2.then(function (value) {
  console.log(value); // 1
});
```

若函式拋出一個錯誤或回傳一個被否決的 Promise，`then` 也將回傳一個被否決的 Promise。

```js
Promise.resolve()
  .then(() => {
    // 使 .then() 回傳一個被否決的 Promise
    throw "Oh no!";
  })
  .then(
    () => {
      console.log("Not called.");
    },
    (reason) => {
      console.error("onRejected function called: ", reason);
    },
  );
```

在所有其他情形，實現中的 Promise 被回傳。在以下例子中，第一個 `then()` 將回傳一個實現中包裹 42 的 promise，即使串接中的前一個 Promise 被否決。

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a resolving Promise
  .then((solution) => console.log("Resolved with " + solution)); // Resolved with 42
```

實務上，使用 `catch` 捕捉被否決的 promise 較理想的，而不建議使用兩個引數 `then` 語法，如下展示。

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw "Oh no!";
  })
  .catch((reason) => {
    console.error("onRejected function called: ", reason);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
```

你也可以透過串接實作一個 Promise-based API 函式，基於它本身。

```js
function fetch_current_data() {
  // The fetch() API returns a Promise.  This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") != "application/json") {
      throw new TypeError();
    }
    var j = response.json();
    // maybe do something with j
    return j; // fulfillment value given to user of
    // fetch_current_data().then()
  });
}
```

若 `onFulfilled` 回傳一個 promise，則 `then` 的實現/否決將取決它。

```js
function resolveLater(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function () {
    reject(20);
  }, 1000);
}

var p1 = Promise.resolve("foo");
var p2 = p1.then(function () {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(
  function (v) {
    console.log("resolved", v); // "resolved", 10
  },
  function (e) {
    // not called
    console.log("rejected", e);
  },
);

var p3 = p1.then(function () {
  // Return promise here, that will be rejected with 20 after 1 second
  return new Promise(rejectLater);
});
p3.then(
  function (v) {
    // not called
    console.log("resolved", v);
  },
  function (e) {
    console.log("rejected", e); // "rejected", 20
  },
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
