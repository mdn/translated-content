---
title: 作为图片的 SVG
slug: Web/SVG/SVG_as_an_Image
l10n:
  sourceCommit: bd6d98893c48e00bfcbdafd60c684bf30e0fa406
---

{{SVGRef}}

SVG 图像可以在多种场景中用作一种图像格式。浏览器在以下情况下支持 SVG 图像：

- HTML {{HTMLElement("img")}} 或 {{SVGElement("svg")}} 元素
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG {{SVGElement("image")}} 元素
- SVG {{SVGElement("feImage")}} 元素
- Canvas [`drawImage`](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#绘制图片) 函数

## 限制

出于安全考虑，Gecko 对作为图像使用的 SVG 内容施加了一些限制：

- [JavaScript](/zh-CN/docs/Web/JavaScript) 被禁用。
- 外部资源（例如图像、样式表）无法被加载，但如果通过 data: URL 内联，则可以使用。
- {{cssxref(":visited")}} 链接样式未渲染。
- 基于操作系统主题的原生控件样式已被禁用。

请注意，上述限制仅适用于图像上下文；当直接查看 SVG 内容或通过 {{HTMLElement("iframe")}}、{{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 元素嵌入文档时，这些限制不适用。

## 规范

{{Specifications}}
