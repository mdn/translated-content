---
title: Request.arrayBuffer()
slug: Web/API/Request/arrayBuffer
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 接口的 **`arrayBuffer()`** 方法读取请求体并将其作为一个 promise 返回，该 promise 将兑现一个 {{jsxref("ArrayBuffer")}}。

## 语法

```js-nolint
arrayBuffer()
```

### 参数

无。

### 返回值

一个 promise，会兑现一个 {{jsxref("ArrayBuffer")}}。

## 示例

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.arrayBuffer().then(function (buffer) {
  // do something with the buffer sent in the request
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.arrayBuffer()")}}
