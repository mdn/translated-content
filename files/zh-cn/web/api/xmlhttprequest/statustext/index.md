---
title: XMLHttpRequest.statusText
slug: Web/API/XMLHttpRequest/statusText
---

{{APIRef('XMLHttpRequest')}}只读属性 **`XMLHttpRequest.statusText`** 返回了`XMLHttpRequest` 请求中由服务器返回的一个[`DOMString`](/zh-CN/docs/Web/API/DOMString) 类型的文本信息，这则信息中也包含了响应的数字状态码。不同于使用一个数字来指示的状态码[`XMLHTTPRequest.status`](/zh-CN/docs/Web/API/XMLHTTPRequest/status)，这个属性包含了返回状态对应的文本信息，例如"OK"或是"Not Found"。如果请求的状态[`readyState`](/zh-CN/docs/Web/API/XMLHttpRequest/readyState)的值为"UNSENT"或者"OPENED"，则这个属性的值将会是一个空字符串。如果服务器未明确指定一个状态文本信息，则`statusText`的值将会被自动赋值为"OK"。

## 例子

```js
var xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = function () {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = function () {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * 输出如下：
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考内容

- List of [HTTP response codes](/zh-CN/docs/Web/HTTP/Response_codes)
- [HTTP](/zh-CN/docs/Web/HTTP)
