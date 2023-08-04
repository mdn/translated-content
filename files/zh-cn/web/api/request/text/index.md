---
title: Request.text()
slug: Web/API/Request/text
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 接口的 **`text()`** 方法读取请求体并且将其作为一个 promise 返回，该 promise 将兑现一个 {{jsxref("String")}}。响应*总是*使用 UTF-8 解码。

## 语法

```js-nolint
text()
```

### 参数

无。

### 返回值

一个 promise，会兑现一个 {{jsxref("String")}}。

## 示例

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then(function (text) {
  // do something with the text sent in the request
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.text()")}}
