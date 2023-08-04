---
title: Request.blob()
slug: Web/API/Request/blob
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 接口的 **`blob()`** 方法读取请求体并将其作为 promise 返回，该 promise 将兑现一个 {{domxref("Blob")}}。

## 语法

```js-nolint
blob()
```

### 参数

无。

### 返回值

一个 promise，会兑现一个 {{domxref("Blob")}}。

## 示例

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then(function (myBlob) {
  // do something with the blob sent in the request
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.blob()")}}
