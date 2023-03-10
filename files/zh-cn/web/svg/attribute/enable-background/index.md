---
title: enable-background
slug: Web/SVG/Attribute/enable-background
---

{{SVGRef}} {{deprecated_header("SVG 2")}}

该 **`enable-background`** 属性指定如何管理背景图像的累积。

**注意：**作为演示文稿属性，`enable-background`可以用作 CSS 属性。

作为表示属性，它可以应用于任何元素，但仅对以下 11 个元素有效：{{SVGElement("a")}}，{{SVGElement("defs")}}，{{SVGElement("字形")}}，{{SVGElement("g")}}，{{SVGElement("marker")}}，{{SVGElement("mask")}}，{{SVGElement("missing-glyph")}}，{{SVGElement("pattern")}}，{{SVGElement("svg")}}，{{SVGElement("switch")}}和{{SVGElement("symbol")}}}

## 上下文注释

| 值       | `accumulate`\| `new`[ `<x>` `<y>` `<width>` `<height>`]？ |
| -------- | --------------------------------------------------------- |
| 默认值   | `accumulate`                                              |
| 可动画的 | 没有                                                      |

- `accumulate`
  - : 如果祖先容器元素的属性值为`enable-background: new`，则当前容器元素内的所有图形元素都将呈现到父容器元素的背景图像画布上以及目标设备上。否则，没有当前的背景图像画布，因此图形元素仅渲染到目标设备上。
- `new [ <x> <y> <width> <height> ]?`
  - : 该值使当前容器元素的子代能够访问背景图像。它还指示建立了新的（即最初为透明的黑色）背景图像画布，并且实际上，除了将当前容器元素的所有子对象呈现到目标设备上之外，还应将其呈现到新的背景图像画布中。The optional `<x>`, `<y>`, `<width>`, and `<height>` parameters are [`<number>`](/zh-CN/docs/Web/SVG/Content_type#Number) values that indicate the subregion of the container elementʼs user space where access to the background image is allowed to happen. Those values act as a clipping rectangle on the background image canvas.
    Negative values for `<width>` or `<height>` are forbidden. If one, two, or three values are specified or if neither `<width>` nor `<height>` are specified, the `BackgroundImage` and `BackgroundAlpha` of a filter primitive are processed as if background image processing were not enabled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
