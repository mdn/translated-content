---
title: <center>
slug: Web/HTML/Element/center
---

{{deprecated_header()}}

HTML Center 元素（`<center>`）是个[块级元素](/zh-CN/docs/HTML/Block-level_elements)，可以包含段落，以及其他块级和内联元素。这个元素的整个内容在它的上级元素中水平居中（通常是 {{HTMLElement("body")}}）。

这个标签已经在 HTML 4（以及 XHTML 1）中废除了，以支持 [CSS](/zh-CN/docs/Web/CSS) {{Cssxref("text-align")}} 属性，它可以用于 {{HTMLElement("div")}} 元素，或者独立的 {{HTMLElement("p")}}。对于居中的块，使用其他 CSS 属性，例如 {{Cssxref("margin-left")}} 和 {{Cssxref("margin-right")}}，并将其设置为 `auto` (或者将 {{Cssxref("margin")}} 设为 `0 auto`).

## DOM 接口

这个元素实现了 {{domxref("HTMLElement")}} 接口。

> **备注：** 直到 Gecko 1.9.2（包含）, Firefox 为这个元素实现了 {{domxref("HTMLSpanElement")}} 接口。

## 示例 1

```html
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

## 示例 2 (CSS 替代)

```html
<div style="text-align:center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

## 示例 3 (CSS 替代)

```html
<p style="text-align:center">
  This line will be centered.<br />
  And so will this line.
</p>
```

## 注

向 {{HTMLElement("div")}} 或者 {{HTMLElement("p")}} 元素应用 {{Cssxref("text-align")}}`:center` 会使这些元素的*内容*居中，同时保留其整体大小不变。

## 另见

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}

{{HTMLSidebar}}
