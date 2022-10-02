---
title: Document.scrollingElement
slug: Web/API/Document/scrollingElement
---

{{APIRef("DOM")}}

**`scrollingElement`**（{{domxref("Document")}} 的只读属性）返回滚动文档的 {{domxref("Element")}} 对象的引用。在标准模式下，这是文档的根元素， {{domxref("document.documentElement")}}。

当在怪异模式下，`scrollingElement` 属性返回 HTML `body` 元素（若不存在返回 null）。

## 语法

```plain
var element = document.scrollingElement;
```

## 示例

```js
var scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
