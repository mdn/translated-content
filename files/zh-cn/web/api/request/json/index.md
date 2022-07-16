---
title: Request.json()
slug: Web/API/Request/json
page-type: web-api-instance-method
tags:
  - API
  - Fetch
  - JSON
  - Method
  - Reference
  - Request
translation_of: Web/API/Request/json
---
{{APIRef("Fetch API")}}

{{domxref("Request")}} 接口的 **`json()`** 方法读取请求体并将其作为一个 promise 返回，该 promise 兑现之后将正文解析为 {{JSxRef("JSON")}}。

注意，尽管方法被命名为 `json()`，结果并不是 JSON，而是将 JSON 作为输入并且解析它以生成一个 JavaScript 对象。

## 语法

```js
json()
```

### 参数

无。

### 返回值

一个兑现之后为 JavaScript 对象的 {{jsxref("Promise")}}。这个对象可能是任何可以用由 JSON 表示的东西——一个 object、一个 array、一个 string、一个 number…

## 示例

```js
const obj = {hello: 'world'};

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: JSON.stringify(obj)
 });

request.json().then(function(data) {
  // do something with the data sent in the request
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.json()")}}
