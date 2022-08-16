---
title: XMLHttpRequest.response
slug: Web/API/XMLHttpRequest/response
---
{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} **`response`** 属性返回响应的正文。返回的类型为 {{domxref("ArrayBuffer")}}、{{domxref("Blob")}} 、 {{domxref("Document")}}、JavaScript {{jsxref("Object")}} 或 {{domxref("DOMString")}} 中的一个。这取决于 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性。

## 语法

```plain
var body = XMLHttpRequest.response;
```

### 取值

一个对象，其类型取决于 {{domxref("XMLHttpRequest.responseType", "responseType")}} 的值。你可以尝试设置 `responseType` 的值，以便通过特定的类型请求数据。 `responseType` 要在调用 {{domxref("XMLHttpRequest.open", "open()")}} 初始化请求之后调用，并且要在调用 {{domxref("XMLHttpRequest.send", "send()")}} 发送请求到服务器之前调用。

如果请求尚未完成或未成功，则取值是 `null`。例外的，读取文本数据时如果将 `responseType` 的值设置成 `"text"` 或空字符串（`""`）且当请求状态还在是 `LOADING` {{domxref("XMLHttpRequest.readyState", "readyState")}} (3) 时，response 包含到目前为止该请求已经取得的内容。

响应的类型如下所示。

{{page("/zh-CN/docs/Web/API/XMLHttpRequestResponseType", "取值")}}

## 例子

此例子提供了一个方法—— `load()` ，它可以从服务器加载和处理页面。它通过创建一个 {{domxref("XMLHttpRequest")}} 对象并为 {{event("readystatechange")}} 事件创建一个监听器。这样的话，当 `readyState` 变成 `DONE` (4) 时就会获取 `response` 并将其传递给 `load()` 中提供的回调函数。

返回的内容会被作为原始文本数据处理（因为这里没有覆盖 {{domxref("XMLHttpRequest.responseType", "responseType")}} 的默认值）。

```js
var url = 'somePage.html'; // 一个本地页面

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.XMLHttpRequest.response")}}

## 了解更多

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- 获取文本和 HTML/XML 数据：{{domxref("XMLHttpRequest.responseText")}} 和 {{domxref("XMLHttpRequest.responseXML")}}
