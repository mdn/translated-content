---
title: SVG 作为图片
slug: Web/SVG/SVG_as_an_Image
---

SVG 图像可以作为一种图片格式用在很多环境中。很多浏览器支持在下列环境中应用 SVG 图像：

- HTML 的{{HTMLElement("img")}} 元素或 {{HTMLElement("svg")}} 元素
- CSS 的{{cssxref("background-image")}}属性

## Gecko 专有的环境

另外，Gecko 2.0 {{geckoRelease("2.0")}}引入了在以下环境中支持使用 SVG：

- CSS 的{{cssxref("list-style-image")}}属性
- SVG 的{{SVGElement("image")}}元素
- SVG 的{{SVGElement("feImage")}}元素
- Canvas 的[`drawImage`](/zh-CN/docs/HTML/Canvas/Tutorial/Using_images#drawImage)函数

### 局限

如果 SVG 作为一个图像，出于安全目的，Gecko 在 SVG 环境上作了一些限制：

- 禁用了[JavaScript](/zh-CN/docs/JavaScript)。
- 外部源（比如说：图像、样式表）不能载入，然而行内源可以使用（利用[BlobBuilder](/zh-CN/docs/DOM/BlobBuilder)对象 URL 或者 data: URI 属性）。
- 链接的{{cssxref(":visited")}}伪类不能呈现。
- 禁用了平台原生的小部件样式（基于操作系统主题）

注意上面的限制是对图像环境专有的；它们不能应用到直接看到的 SVG 上，也不能应用到嵌入在 HTML 的{{HTMLElement("iframe")}}元素、{{HTMLElement("object")}}元素和{{HTMLElement("embed")}}元素中的 SVG 上。

## 规范

{{Specifications}}

## 参见

- [SVG in HTML introduction](/zh-CN/docs/SVG_In_HTML_Introduction)
