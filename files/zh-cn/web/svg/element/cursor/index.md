---
title: cursor
slug: Web/SVG/Element/cursor
---

{{SVGRef}}{{Deprecated_Header}}

> [!NOTE]
> 尽量使用 CSS 中的 {{cssxref("cursor")}} 属性来替换该属性。

`cursor`元素可以用来定义独立于平台的自定义指针。要想定义独立于平台的指针，建议先创建一个 PNG 图象，然后定义一个引用该 PNG 图像的`cursor`元素，并在图像内部标识指针头（亦即，热点）的精确位置。

建议使用 PNG 格式，因为它支持利用 alpha 通道定义透明并遮罩的能力。如果使用了别的图像格式，这个格式必须支持透明度遮罩的定义（两个选项：提供一个明确的 alpha 通道或者使用一个特殊的像素色以表示透明度）。如果能够确定透明度遮罩，遮罩确定了指针的形状；否则，指针将是一个不透明的矩形。通常地，别的像素信息（例如，R、G、B 通道）定义了指针没有被遮罩到的部分的颜色，注意指针一般至少包含两个颜色，这样在大多数背景中都能看到指针。

## 使用上下文

{{svginfo}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/Web/SVG/Attribute#core) »
- [Xlink 属性](/zh-CN/docs/Web/SVG/Attribute#xlink) »
- {{SVGAttr("externalResourcesRequired")}}

### 专有属性

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("xlink:href")}}

## DOM 接口

该元素实现了 [`SVGCursorElement`](/zh-CN/docs/Web/API/SVGCursorElement) 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
