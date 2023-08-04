---
title: Element.id
slug: Web/API/Element/id
---

{{ ApiRef("DOM") }}

{{domxref("Element")}} 接口的 **`id`** 属性表示元素的标识符，与全局属性 [**`id`**](/zh-CN/docs/Web/HTML/Global_attributes/id) 对应。

同一文档中，若 `id` 的值不是空字符串 `""`，便必须是独特的；也就是说，不同元素的 ID 必须是不同的。

这有助于让常用的 {{domxref("document.getElementById", "getElementById")}} 方法通过 `id` 的值找到对应的单个元素。另外，在 [CSS](/zh-CN/docs/Web/CSS) 中，ID 可作为选择器使用，详见：[ID 选择器](/zh-CN/docs/Web/CSS/ID_selectors)。

> **备注：** 虽然 ID 是区分大小写的，但是不应该同时使用仅大小写有不同的 ID 值。

## 语法

```js
var idStr = element.id; // Get the id
element.id = idStr; // Set the id
```

- `idStr`，元素的 ID 属性值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- DOM 全局属性 [**id**](/zh-CN/docs/Web/HTML/Global_attributes/id)。
