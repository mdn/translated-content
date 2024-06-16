---
title: Document：alinkColor 属性
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: 41c3f093216bda022f04b4a40fa55e2f0b7af5e0
---

{{APIRef("DOM")}}{{Deprecated_header}}

返回或设置文档正文中活动链接的颜色。在 `mousedown` 和 `mouseup` 事件之间，链接处于活动状态。

## 值

包含颜色名称（例如 `blue`、`darkblue` 等）或颜色十六进制值（例如 `#0000FF`）的字符串。

## 备注

Mozilla Firefox 中该属性的默认值为红色（十六进制 `#ee0000`）。

在 [DOM 第 2 版 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) 中 `document.alinkColor` 已弃用。一种替代方法是 CSS 选择器 {{Cssxref(":active")}}。

另一种替代方法是 `document.body.aLink`，不过这种方法已[在 HTML 4.01 中弃用](https://www.w3.org/TR/html401/struct/global.html#adef-alink)，转而使用 CSS 替代方法。

Firefox 同时支持 `alinkColor`/`:active` 和 {{Cssxref(":focus")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
