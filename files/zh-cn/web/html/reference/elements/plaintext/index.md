---
title: <plaintext>：纯文本元素（已弃用）
slug: Web/HTML/Reference/Elements/plaintext
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

## 概述

**`<plaintext>`** [HTML](/zh-CN/docs/Web/HTML) 元素将起始标签后面的任何东西渲染为纯文本，不会解释为 HTML。它没有闭合标签，因为闭合标签之后的所有内容都被视为原始文本。

> [!WARNING]
> 不要使用这个元素。
>
> - `<plaintext>` 自从 HTML 2 就废弃了，并且并不是所有浏览器都实现了它。就算是实现了它的浏览器，行为也并不一致。
> - `<plaintext>` 已经过时；接受它的浏览器可以将其视为 {{HTMLElement("pre")}} 元素，仍然会解释其中的 HTML。
> - 如果 {{HTMLElement("plaintext")}} 元素是页面的第一个元素（除了任何不显示的元素），那就不要使用 HTML 了，取而代之的是使用 `text/plain` [MIME 类型](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)的文本文件。
> - 应该使用 {{HTMLElement("pre")}} 元素代替 `<plaintext>`，或者如果语义准确（如内联文本），使用 {{HTMLElement("code")}} 元素。要确保转义了任何 `<`、`>` 和 `&` 字符，来避免将内容解释为 HTML。
> - 等宽字体也可以显示在 {{HTMLElement("div")}} 元素中，通过使用足够的 [CSS](/zh-CN/docs/Web/CSS) 样式，在 {{cssxref("font-family")}} 中将 `monospace` 用作通用字体的值。

## 属性

除了[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)之外，这个元素没有其他属性。

## DOM 接口

该元素实现了 {{domxref('HTMLElement')}} 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 可以使用 {{HTMLElement("pre")}} 和 {{HTMLElement("code")}} 元素来代替本元素。
- 类似于 `<plaintext>` 的 {{HTMLElement("xmp")}} 元素，但同样已过时。
