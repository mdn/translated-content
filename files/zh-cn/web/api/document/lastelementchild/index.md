---
title: Document：lastElementChild 属性
slug: Web/API/Document/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.lastElementChild`** 只读属性返回文档的最后一个子{{domxref("Element", "元素", "", "nocode")}}，如果没有子元素，则返回 `null`。

对于 HTML 文档，这通常是唯一的子元素，即根 `<html>` 元素。

有关文档中特定元素的最后一个子元素，请参见 {{domxref("Element.lastElementChild")}}。

## 值

根 `<html>` 元素。

## 示例

```js
document.lastElementChild;
// 返回根 <html> 元素，即文档的唯一子元素
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.lastElementChild")}}
