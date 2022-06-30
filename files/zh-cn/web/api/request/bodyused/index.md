---
title: Request.bodyUsed
slug: Web/API/Request/bodyUsed
page-type: web-api-instance-property
tags:
  - API
  - Fetch
  - Property
  - Reference
  - bodyUsed
  - Request
translation_of: Web/API/Request/bodyUsed
---
{{APIRef("Fetch")}}

{{domxref("Request")}} 接口的只读属性 **`bodyUsed`** 是一个布尔值，表示请求体是否已经被读取。

## 值

一个布尔值。

## 示例

```js
const request = new Request('/myEndpoint', {
  method: 'POST',
  body: 'Hello world'
});

request.bodyUsed; // false

request.text().then(function(bodyAsText) {
  console.log(request.bodyUsed); // true
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Request.body")}}
