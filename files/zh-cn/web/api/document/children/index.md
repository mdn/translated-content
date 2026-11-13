---
title: Document：children 属性
slug: Web/API/Document/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`children`** 只读属性返回一个实时的 {{domxref("HTMLCollection")}}，其中包含对调用该属性的文档的所有子{{domxref("Element", "元素", "", 1)}}。

对于 HTML 文档，这通常只有根 `<html>` 元素。

请参见 {{domxref("Element.children")}} 以获取文档中具体 HTML 元素的子元素。

## 值

一个 {{ domxref("HTMLCollection") }}，它是当前文档子 DOM 元素的一个实时、有序集合。你可以通过对集合使用 {{domxref("HTMLCollection.item()", "item()")}} 方法，或者使用 JavaScript 数组风格的表示法来访问集合中的单个子节点。

如果文档没有元素子节点，则 `children` 是一个空列表，其 `length` 为 `0`。

## 示例

```js
document.children;
// HTMLCollection [<html>]
// 通常只包含根 <html> 元素，即文档唯一的直接子元素
```

请参见 {{domxref("Element.children")}} 以获取文档中具体 HTML 元素的子元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.children")}}
- {{domxref("Node.childNodes")}}
