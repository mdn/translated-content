---
title: Element：id 属性
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: 88c33ab5f4ccd88d13a0a5272de45d4d33f9f636
---

{{ApiRef("DOM")}}

{{domxref("Element")}} 接口的 **`id`** 属性反映元素的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 内容属性。

如果 `id` 的值不是空字符串，则它在文档中必须唯一。

`id` 常与 {{domxref("Document.getElementById()", "getElementById()")}} 一起使用，用来获取某个特定元素。另一种常见用法是，在用 [CSS](/zh-CN/docs/Web/CSS) 为文档设置样式时，把元素的 [ID 当作选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/ID_selectors)。

> [!NOTE]
> 标识符区分大小写，但应避免创建仅大小写不同的 ID。

## 值

一个字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- DOM 全局属性 [**id**](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id)。
