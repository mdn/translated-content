---
title: <xmp>
slug: Web/HTML/Element/xmp
---

{{HTMLRef}} {{deprecated_header}}

## 概述

`<xmp>` 标签之间的内容不会被当作文档内容解析，而会被用等宽字体直接呈现。HTML2 规范建议，本标签中的内容应该具有足够容纳每行 80 个字母的宽度。

> **备注：** 请不要使用这个元素。
>
> - 从 HTML3.2 开始反对使用本元素，同时它不再会在之后版本内被推荐使用。在 HTML5 规范内，本元素已经完全被移除。
> - 建议您使用{{HTMLElement("pre")}} 元素，如果有特殊需求，您可以使用 {{HTMLElement("code")}} 元素。需要您注意的是，使用元素的时候，需要将内容中的"<"转义为"\&lt;"，以防止被浏览器当作正常标签解析。
> - 通过[CSS](/zh-CN/docs/CSS)样式表将 {{cssxref("font-family")}} 属性的值设置成为 generic-font，可以让任何其他任何标签获得等宽字体的样式。

## 属性

该元素支持[全局属性](/zh-CN/docs/Web/HTML/global_attributes)。

## DOM 接口

本元素支持{{domxref('HTMLElement')}} 接口。

> **备注：** Gecko 1.9.2 内核及更高版本已经兼容本元素，在火狐浏览器内本元素支持使用{{domxref('HTMLSpanElement')}}接口。

## 浏览器兼容性

{{Compat}}

## 参阅

- 可以使用{{HTMLElement("pre")}} 和 {{HTMLElement("code")}} 元素来代替本元素。
- {{HTMLElement("plaintext")}} 和 {{HTMLElement("listing")}} 元素和{{HTMLElement("xmp")}} 类似，都已被废弃。.
