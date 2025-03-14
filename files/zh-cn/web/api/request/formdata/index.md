---
title: Request.formData()
slug: Web/API/Request/formData
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 接口的 **`formData()`** 方法读取请求体并将其作为 promise 返回，该 promise 将兑现一个 {{domxref("FormData")}} 对象。

## 语法

```js-nolint
formData()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，会兑现一个 {{domxref("FormData")}} 对象。

## 示例

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: formData,
});

request.formData().then(function (data) {
  // do something with the formdata sent in the request
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.formData()")}}
