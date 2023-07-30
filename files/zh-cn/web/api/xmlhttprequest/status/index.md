---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
---

{{APIRef('XMLHttpRequest')}}只读属性 **`XMLHttpRequest.status`** 返回了 `XMLHttpRequest` 响应中的数字状态码。`status` 的值是一个`无符号短整型`。在请求完成前，`status` 的值为 `0`。值得注意的是，如果 XMLHttpRequest 出错，浏览器返回的 status 也为 0。status 码是标准的 [HTTP status codes](/zh-CN/docs/Web/HTTP/Response_codes)。举个例子，`status` `200` 代表一个成功的请求。如果服务器响应中没有明确指定 status 码，`XMLHttpRequest.status` 将会默认为 `200`。

## 例子

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.status);

xhr.open("GET", "/server", true);
console.log("OPENED", xhr.status);

xhr.onprogress = function () {
  console.log("LOADING", xhr.status);
};

xhr.onload = function () {
  console.log("DONE", xhr.status);
};

xhr.send(null);

/**
 * 输出如下：
 *
 * UNSENT（未发送）0
 * OPENED（已打开）0
 * LOADING（载入中）200
 * DONE（完成）200
 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他相关资料

- HTTP 响应代码（[HTTP response codes](/zh-CN/docs/Web/HTTP/Response_codes)）列表
- [HTTP](/zh-CN/docs/Web/HTTP)
