---
title: set
slug: Web/SVG/Element/set
---

{{SVGRef}}

`set`元素可以用来设定一个属性值，并为该值赋予一个持续时间。它支持所有的属性类型，包括那些原理上不能插值的，例如值为字符串和布尔类型的属性。set 元素是非叠加的。无法在其上使用 additive 属性或 accumulate 属性，即使声明了这些属性也会自动被忽略。

## 使用上下文

{{svginfo}}

## 示例

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#core) »
- [动画事件属性](/zh-CN/docs/SVG/Attribute#animationevent) »
- [Xlink 属性](/zh-CN/docs/SVG/Attribute#xlink) »
- [动画属性目标属性](/zh-CN/docs/SVG/Attribute#animationattributetarget) »
- [动画定时属性](/zh-CN/docs/SVG/Attribute#animationtiming) »
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("to") }}

## DOM 接口

该元素实现了 [`SVGSetElement`](/zh-CN/docs/DOM/SVGSetElement) 接口。

## 参见

- {{ SVGElement("animate") }}
