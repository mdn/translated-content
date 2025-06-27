---
title: 在 HTML 中使用图像
slug: Web/Media/Guides/Images
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{Glossary("HTML")}} {{HTMLElement("img")}} 元素可让你在 HTML 文档中嵌入图像，而 {{HTMLElement("picture")}} 元素则可启用[响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images)。在本指南中，你可以找到有关在网站中添加图像的资源链接。

## 参考

这些文章介绍了一些 HTML 元素和 CSS 属性，它们用于控制图像在 web 上的显示方式。

### HTML

- {{HTMLElement("img")}}
  - : **HTML `<img>` 元素**用于在网页中嵌入图像。它支持多种属性，可控制图像的行为方式，并允许为看不到图像的人添加 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt) 文本等重要信息。
- {{HTMLElement("picture")}}
  - : **HTML `<picture>` 元素**包含零个或多个 {{HTMLElement("source")}} 元素和一个 {{HTMLElement("img")}} 元素，为不同的显示/设备场景提供不同版本的图像。浏览器会考虑每个子 `<source>` 元素，并选择其中最匹配的元素。

### CSS

- {{cssxref("object-fit")}}
  - : **`object-fit`** [CSS](/zh-CN/docs/Web/CSS) 属性设置了如何调整{{glossary("Replaced elements", "可替换元素")}}的内容大小以适应其容器，例如 [`<img>`](/zh-CN/docs/Web/HTML/Reference/Elements/img) 或 [`<video>`](/zh-CN/docs/Web/HTML/Reference/Elements/video)。
- {{cssxref("object-position")}}
  - : **`object-position`** [CSS](/zh-CN/docs/Web/CSS) 属性指定所选{{glossary("Replaced elements", "可替换元素")}}中的内容在元素框内的对齐方式。替换元素对象未覆盖的框内区域将显示该元素的背景。
- {{cssxref("background-image")}}
  - : **`background-image`** [CSS](/zh-CN/docs/Web/CSS) 属性为元素设置一个或多个背景图像。

## 指南

这些文章为选择和配置图像类型提供了指导。

- [图片文件类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats/Image_types)
  - : 本指南介绍 web 浏览器通常支持的各种图像文件类型，包括它们各自的使用情况、功能和兼容性因素的详细信息。此外，本文还提供了针对特定情况选择最佳图像文件类型的指导。
- [包含 `width` 和 `height` 属性以防止卡顿](/zh-CN/docs/Learn_web_development/Extensions/Performance/Multimedia#渲染策略：在加载图像时避免卡顿)
  - : 这就改变了浏览器加载图像的方式，使浏览器可以在加载图像前就计算出图像的宽高比，然后再利用宽高比预留图像的显示尺寸。

## 其他主题

你可能感兴趣的相关主题。

- [学习 HTML：响应式图片](/zh-CN/docs/Web/HTML/Guides/Responsive_images)
  - : 在本文中，我们将了解响应式图像（能在屏幕尺寸、分辨率和其他特性差异较大的设备上正常显示的图像）的概念并了解 HTML 提供了哪些工具来帮助我们实现这项技术。
