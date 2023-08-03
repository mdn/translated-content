---
title: Document.location
slug: Web/API/Document/location
---

{{APIRef}}

**`Document.location`** 是一个只读属性，返回一个 {{domxref("Location")}} 对象，包含有文档的 URL 相关的信息，并提供了改变该 URL 和加载其他 URL 的方法。

尽管 `Document.location` 是一个只读的 `Location` 对象，你也能够赋给它一个 {{domxref("DOMString")}}。这意味着你能够赋给 document.location 字符串，大多数情况下像这样使用：`document.location = 'http://www.example.com'`，也可写为`document.location.href = 'http://www.example.com'`。

只是想获取字符串形式的 URL，可以使用只读属性 {{domxref("document.URL")}}。

If the current document is not in a browsing context, the returned value is `null`.

## 语法

```js
locationObj = document.location;
document.location = "http://www.mozilla.org"; // Equivalent to document.location.href = 'http://www.mozilla.org'
```

## 示例

```js
dump(document.location);
// Prints a string like
// "http://www.example.com/juicybits.html" to the console
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The interface of the returned value, {{domxref("Location")}}.
- A similar information, but attached to the browsing context, {{domxref("Window.location")}}
