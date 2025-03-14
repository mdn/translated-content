---
title: <plaintext>
slug: Web/HTML/Element/plaintext
---

{{deprecated_header}}

## 概述

_HTML 纯文本元素_ (`<plaintext>`) 将起始标签后面的任何东西渲染为纯文本，不会解释为 HTML。它没有闭合标签，因为任何后面的东西都会看做纯文本。

> [!NOTE]
> 不要使用这个元素。
>
> - 它自从 HTML3.2 就废弃了，并且所有浏览器也不会实现它。此外，它在 HTML5 中已过时；仍然接受它的浏览器，可能将其看做 {{HTMLElement("pre")}} 元素，它仍然会解释其中的 HTML，即使这不是你想要的结果。
> - 如果 {{HTMLElement("plaintext")}} 元素是页面的第一个元素（除了任何不显示的元素），那就不要使用 HTML 了。配置你的服务器，使用 `text/plain` [MIME-type](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) 来发送你的页面。
> - 不要使用这个元素，你应该使用 {{HTMLElement("pre")}} 元素，或者如果满足语义的话，使用 {{HTMLElement("code")}} 元素。要确保转义了任何 '`<`' 、' `>`' 和 "&" 字符，来避免将内容解释为 HTML。
> - 等宽字体也可以显示在 {{HTMLElement("div")}} 元素中，通过使用足够的 [CSS](/zh-CN/docs/Web/CSS) 样式，在 {{cssxref("font-family")}} 中将 `monospace` 用作通用字体（generic-font）的值。

## 属性

除了 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 之外，这个元素没有其他属性。

## DOM 接口

元素实现了 {{domxref('HTMLElement')}} 接口。

> [!NOTE]
> 直到 Gecko 1.9.2（包含），Firefox 为这个元素实现了 {{domxref('HTMLSpanElement')}} 接口。

## 参见

- {{HTMLElement("pre")}} 和 {{HTMLElement("code")}} 元素可以用于替代。
- {{HTMLElement("listing")}} 和 {{HTMLElement("xmp")}} 元素，类似于 {{HTMLElement("plaintext")}} 但是也过时了。

{{HTMLSidebar}}
