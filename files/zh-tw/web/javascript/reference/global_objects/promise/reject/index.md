---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

{{JSRef}}

**`Promise.reject(reason)`** 方法回傳一個以 `reason` 拒絕的 `Promise` 物件。

## 語法

```js
Promise.reject(reason);
```

### 參數

- reason
  - : `Promise` 的失敗訊息。

### 回傳值

一個以 `reason` 拒絕的 {{jsxref("Promise")}}。

## 描述

靜態函式 `Promise.reject` 回傳一個被拒絕的 `Promise。由於除錯目的及選擇性錯誤捕捉（selective error catching），使`用一個 `instanceof` {{jsxref("Error")}} 作為 reason 是很有幫助的。

## 範例

### 使用靜態方法 Promise.reject()

```js
Promise.reject(new Error("fail")).then(
  function (error) {
    // not called
  },
  function (error) {
    console.log(error); // Stacktrace
  },
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Promise")}}
- [Selective error catching using the BlueBird Promise library](https://github.com/petkaantonov/bluebird#error-handling)
