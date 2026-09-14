---
title: Element：id 属性
slug: Web/API/Element/id
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ ApiRef("DOM") }}

{{domxref("Element")}} 接口的 **`id`** 属性表示元素的标识符，反映了全局属性 [**`id`**](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 的值。

如果 `id` 的值不为空字符串，则在同一文档中必须唯一。

这有助于让常用的 {{domxref("document.getElementById()", "getElementById()")}} 方法通过 `id` 的值找到对应的单个元素。另外，在使用 [CSS](/zh-CN/docs/Web/CSS) 为文档添加样式时，[ID 可作为选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/ID_selectors)使用。

> [!NOTE]
> 虽然 ID 是区分大小写的，但是不应该同时使用仅大小写不同的 ID 值。

## 值

一个字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- DOM 全局属性 [**id**](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id)。
