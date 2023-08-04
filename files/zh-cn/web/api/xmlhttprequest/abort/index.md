---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
---

{{APIRef('XMLHttpRequest')}}

如果该请求已被发出，**XMLHttpRequest.abort()** 方法将终止该请求。当一个请求被终止，它的 {{domxref("XMLHttpRequest.readyState", "readyState")}} 将被置为 {{domxref("XMLHttpRequest.UNSENT")}} (0)，并且请求的 {{domxref("XMLHttpRequest.status", "status")}} 置为 0。

## 语法

```plain
xhrInstance.abort();
```

### 参数

无。

### 返回值

`undefined`

## 示例

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
