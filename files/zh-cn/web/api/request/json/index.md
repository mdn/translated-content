---
title: Request.json()
slug: Web/API/Request/json
---

{{APIRef("Fetch API")}}

{{domxref("Request")}} 接口的 **`json()`** 方法读取请求体并将其作为一个 promise 返回，该 promise 将兑现一个由响应体的文本解析得到的 {{JSxRef("JSON")}}。

注意，尽管方法被命名为 `json()`，结果并不是 JSON，而是将输入作为 JSON 解析，以生成一个 JavaScript 对象。

## 语法

```js-nolint
json()
```

### 参数

无。

### 返回值

一个将兑现一个 JavaScript 对象的 {{jsxref("Promise")}}。这个对象可能是任何可以用 JSON 表示的东西——一个对象、一个数组、一个字符串、一个数值……

## 示例

```js
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then(function (data) {
  // do something with the data sent in the request
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.json()")}}
