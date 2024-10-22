---
title: "文档：lastElementChild 属性"
short-title: lastElementChild
slug: Web/API/Document/lastElementChild
---

{{ APIRef("DOM") }}

**`Document.lastElementChild`** 只读属性返回文档的最后一个子元素 {{domxref("Element")}}，如果没有子元素，则返回 `null`。

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