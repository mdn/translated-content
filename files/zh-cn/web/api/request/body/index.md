---
title: Request：body 属性
slug: Web/API/Request/body
---

{{APIRef("Fetch API")}}

{{domxref("Request")}} 接口的只读 **`body`** 属性包含一个 {{domxref("ReadableStream")}}，其中包含已添加到请求中的主体内容。请注意，使用 `GET` 或 `HEAD` 方法的请求不能有主体，这些情况下返回 `null`。

## 值

{{domxref("ReadableStream")}} 或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 示例

```js
const request = new Request("/myEndpoint", {
  method: "POST",
  body: "Hello world",
});

request.body; // ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Request.bodyUsed")}}
