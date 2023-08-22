---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
---

{{JSRef}}

**`finally()`** 方法會回傳一個 {{jsxref("Promise")}}。當 promise 被 settled 後，無論其結果是 fulfilled 還是 rejected ，都會執行指定的回呼函數。它提供了一個讓 `Promise` 在被確認後，無論是 fulfilled 或是 rejected 都會執行某些程式碼的一種手段。

這樣可以避免你在 promise 的 {{jsxref("Promise.then", "then()")}} 和 {{jsxref("Promise.catch", "catch()")}} 重複處理相同的程式碼。

## Syntax

```js
p.finally(onFinally);

p.finally(function () {
  // settled（fulfilled 或 rejected)
});
```

### Parameters

- `onFinally`
  - : 當 `Promise` settled 後呼叫的 {{jsxref("Function")}}。

### Return value

回傳 {{jsxref("Promise")}} 當 `finally` 的處理函數 `onFinally` 被指定時。

## Description

當你希望在 promise settled 後且不關心它的結果為何時，執行一些處理或清理的工作， `finally()` 方法會很有幫助。

`finally()` 方法非常類似於 `.then(onFinally, onFinally)` 的呼叫方式，但仍有一些差異：

- 當建立行內的函數時，可以只傳遞一次，從而避免重複宣告或為它宣告變數。
- `finally` 的回呼函數並不會接收到任何引數，因其沒有可靠的方式來確認 promise 是被 fulfilled 還是 rejected 。它的使用情境僅適用於當你*不關心* rejection 的原因或 fulfillment 的值，因此無須提供。範例：

  - 與 `Promise.resolve(2).then(() => {}, () => {})`（將被 resolved 為`undefined`）不同，`Promise.resolve(2).finally(() => {})` 將被 resolved 為`2`。
  - 同樣的，與 `Promise.reject(3).then(() => {}, () => {})`（將 fulfilled 為`undefined`）不同，`Promise.reject(3).finally(() => {})` 將被 rejected 為`3`。

> **備註：** 在 finally 回呼中使用 throw（或回傳 rejected promise）會導致新的 promise 被 reject，reject 的原因則是呼叫 throw() 時所指定的值。

## 範例

```js
let isLoading = true;

fetch(myRequest)
  .then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function (json) {
    /* process your JSON further */
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    isLoading = false;
  });
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
