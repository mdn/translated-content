---
title: <font>
slug: Web/HTML/Element/font
---

{{HTMLSidebar}}{{Deprecated_Header}}

## 概要

_HTML Font 元素_（`<font>`）定义了该内容的字体大小、顏色与表现。

> [!NOTE]
> 不要使用这个元素！请使用 CSS [字体](/zh-CN/docs/Web/CSS/CSS_fonts)属性来为文本添加样式。

## 属性

如同其他 HTML 元素，这个元素支持[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `color` {{Deprecated_Inline}}
  - : 这个属性使用颜色名称或是十六进制的 #RRGGBB 格式，来设置文字的颜色。
- `face` {{Deprecated_Inline}}
  - : 这个属性列出了一个或多个逗号分隔的字体名称。默认样式中的文档文字，会使用客户端浏览器所支持的，第一个字体风格来渲染。如果本地系统中并没有安装列出的字体，浏览器会使用系统预设的均衡（proportional）或等宽（fixed-width）字体。
- `size` {{Deprecated_Inline}}
  - : 该属性将字体大小指定为数字或相对值。数值范围从 `1` 到 `7`，其中 `1` 是最小的，`3` 是默认值。可以使用相对值来定义它，例如 `+2` 或 `-3`，这将其设置为相对于默认值 `3`。

## DOM 接口

这个元素实现了 {{domxref("HTMLFontElement")}} 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
