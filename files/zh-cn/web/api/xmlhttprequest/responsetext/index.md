---
title: XMLHttpRequest.responseText
slug: Web/API/XMLHttpRequest/responseText
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.responseText** 在一个请求被发送后，从服务器端返回文本。

## 语法

```plain
var resultText = XMLHttpRequest.responseText;
```

### 取值

{{domxref("DOMString")}} 是 `XMLHttpRequest` 返回的纯文本的值。当 {{domxref("DOMString")}} 为 `null` 时，表示请求失败了。当{{domxref("DOMString")}} 为 "" 时，表示这个请求还没有被 {{domxref("XMLHttpRequest.send", "send()")}}

当处理一个异步 request 的时候，尽管当前请求并没有结束，`responseText` 的返回值是当前从后端收到的内容。

当请求状态 {{domxref("XMLHttpRequest.readyState", "readyState")}} 变为 {{domxref("XMLHttpRequest.DONE", "XMLHttpRequest.DONE")}} (`4`)，且 {{domxref("XMLHttpRequest.status", "status")}} 值为 200（"OK"）时，`responseText` 是全部后端的返回数据

## 例子

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// If specified, responseType must be empty string or "text"
xhr.responseType = "text";

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
