---
title: ellipse
slug: Web/SVG/Element/ellipse
---

{{SVGRef}}

`ellipse`元素是一个 SVG 基本形状，用来创建一个椭圆，基于一个中心坐标以及它们的`x`半径和`y`半径。

椭圆不能指定精确的椭圆倾向（假设，举个例子，你想画一个 45 度角倾斜的椭圆），但是可以利用{{ SVGAttr("transform") }}属性实现旋转。

## 用法

{{svginfo}}

## 示例

» [ellipse.svg](/files/3253/ellipse.svg)

## 属性

### 全局属性

- [条件处理属性](/zh-CN/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/SVG/Attribute#GraphicalEvent) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("cx") }}
- {{ SVGAttr("cy") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## DOM 接口

该元素实现了[`SVGEllipseElement`](/zh-CN/DOM/SVGEllipseElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("circle") }}
