---
title: Document：firstElementChild 属性
slug: Web/API/Document/firstElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.firstElementChild`** 只读属性返回文档的第一个子{{domxref("Element", "元素", "", 1)}}，如果没有子元素，则返回 `null`。

对于 HTML 文档，这通常是唯一的子元素，即 `<html>` 根元素。

有关文档中特定元素的第一个子元素，请参见 {{domxref("Element.firstElementChild")}}。

## 值

{{domxref("Element")}} 对象或 `null`。

## 示例

```js
document.firstElementChild;
// 返回 <html> 根元素，即文档的唯一子元素
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.firstElementChild")}}
