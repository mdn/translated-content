---
title: Request：text() 方法
short-title: text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Request")}} 接口的 **`text()`** 方法用于读取请求体，并将其以会兑现为 {{jsxref("String")}} 的 promise 返回。响应内容*始终*使用 UTF-8 解码。

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

request.text().then((text) => {
  // 对请求中发送的文本进行处理
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.text()")}}
