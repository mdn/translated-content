---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
---

{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.timeout`** 是一个无符号长整型数，代表着一个请求在被自动终止前所消耗的毫秒数。默认值为 0，意味着没有超时。超时并不应该用在一个 {{Glossary('document environment')}} 中的同步 XMLHttpRequests 请求中，否则将会抛出一个 `InvalidAccessError` 类型的错误。当超时发生， [timeout](/zh-CN/docs/Web/Events/timeout) 事件将会被触发。

> **备注：** 你不能在拥有的 window 中，给同步请求使用超时。

[在异步请求中使用 timeout](/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#.E4.BE.8B.E5.AD.90.3A_.E4.BD.BF.E7.94.A8.E8.B6.85.E6.97.B6)

在 IE 中，超时属性可能只能在调用 [open()](/zh-CN/docs/Web/API/XMLHttpRequest/open) 方法之后且在调用 [send()](/zh-CN/docs/Web/API/XMLHttpRequest/send) 方法之前设置。

## 示例

```
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.timeout = 2000; // 超时时间，单位是毫秒

xhr.onload = function () {
  // 请求完成。在此进行处理。
};

xhr.ontimeout = function (e) {
  // XMLHttpRequest 超时。在此做某事。
};

xhr.send(null);
```

## 规范

{{Specifications}}
