---
title: rect
slug: Web/SVG/Element/rect
tags:
  - SVG
  - SVG 图形
  - 元素
  - 参考
translation_of: Web/SVG/Element/rect
---
{{SVGRef}}

`rect`元素是 SVG 的一个基本形状，用来创建矩形，基于一个角位置以及它的宽和高。它还可以用来创建圆角矩形。

## 用法

{{svginfo}}

## 示例

### 简单矩形

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

» [rect-1.svg](https://mdn.mozillademos.org/files/8893/rect-1.svg)

### 圆角矩形

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10"
        width="100" height="100"
        rx="15" ry="15"/>

</svg>
```

» [rect-2.svg](https://mdn.mozillademos.org/files/8897/rect-2.svg)

## 属性

### 全局属性

- [条件处理属性](/en/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/en/SVG/Attribute#Core) »
- [图形事件属性](/en/SVG/Attribute#GraphicalEvent) »
- [外观属性](/en/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## DOM 接口

这个元素实现了 [`SVGRectElement`](/en/DOM/SVGRectElement) 接口。

## 浏览器支持

{{Compat("svg.elements.rect")}}

## 参见

- {{ SVGElement("path") }}
