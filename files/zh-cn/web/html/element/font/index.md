---
title: <font>
slug: Web/HTML/Element/font
---

{{Deprecated_header}}

## 概要

_HTML Font 元素_（`<font>`）定义了该内容的字体大小、顏色与表现。

> **备注：** _注意：_**不要使用这个元素！**尽管它在 HTML 3.2 规范化，但在 HTML 4.01 中已废除，因为该元件只和样式相关，接着在 HTML5 过时。从 HTML 4 开始，HTML 不能在 {{HTMLElement("style")}} 元素，或各元素 **style** 属性以外，表现任何样式信息。今后的网页开发，样式只能使用 [CSS](/zh-CN/docs/CSS) 来编写。{{HTMLElement("font")}} 元素的行为，可以通过 [CSS](/zh-CN/docs/CSS) 属性实现，以及更好控制。

## 属性

如同其他 HTML 元素，这个元素支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{htmlattrdef("color")}}
  - : 这个属性使用颜色名称或是十六进制的 #RRGGBB 格式，来设置文字的颜色。
- {{htmlattrdef("face")}}
  - : 这个属性列出了一个或多个逗号分隔的字体名称。默认样式中的文档文字，会使用客户端浏览器所支持的，第一个字体风格来渲染。如果本地系统中并没有安装列出的字体，浏览器会使用系统预设的均衡（proportional）或等宽（fixed-width）字体。
- {{htmlattrdef("size")}}
  - : 这个属性使用数字或相对值指定文字大小。数字在最小的 7 到最大的 7 之间，默认值为 3。也可以用诸如 +2 或 -3 的相对值指定，这会将其设置为，相对于 {{HTMLElement("basefont")}} 元素 {{htmlattrxref("size", "basefont")}}属性的值，或者如果不存在，则是相对于 3 也就是默认值的值。

## DOM 接口

这个元素实现了 {{domxref("HTMLFontElement")}} 接口。

## 浏览器兼容性

### Gecko 注解

在 Gecko 15.0 {{geckoRelease("15.0")}} 之前的版本，Gecko 并不能正确处理 `size` 属性的超出范围的数值。对于相对大小，它并不接受超出范围的数值。现在，它已经能够将其正确截断为 -10 到 +10 之内的范围。

Gecko 15.0 还移除了 `<font>` 元素对 `font-weight` 与 `point-size` 属性的支持：这些非标准属性只受 Gecko 引擎支持。

{{HTMLRef}}
