---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
---

« [SVG Attribute reference home](/zh-CN/SVG/Attribute)

`image-rendering` 属性向浏览器提供了一个提示，即在图片处理时，如何进行速度 vs 质量之间的权衡。

作为一个显示属性，它也可以在 CSS 样式文件中作为属性而存在，请参考 {{ cssxref("image-rendering","CSS image-rendering") }} 获取更多的信息

## 使用语境

| 类别     | Presentation attribute                                  |
| -------- | ------------------------------------------------------- |
| 值       | **auto** \| optimizeSpeed \| optimizeQuality \| inherit |
| 动画效果 | Yes                                                     |

- auto
  - : 表示用户代理可以在速度和质量间做适当的权衡，但是质量将比速度更重要一些。
- optimizeSpeed
  - : 表示用户代理应该更注重速度。
- optimizeQuality
  - : 表示用户代理应该更注重质量

## 示例

## 元素

下面的元素可以能够使用 `image-rendering` 属性

- {{ SVGElement("image") }}

## 规范

{{Specifications}}

## 参考

- {{ cssxref("image-rendering","CSS image-rendering") }}
