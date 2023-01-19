---
title: marker
slug: Web/SVG/Element/marker
---

{{SVGRef}}

`marker`元素定义了在特定的{{ SVGElement("path") }}元素、{{ SVGElement("line") }}元素、{{ SVGElement("polyline") }}元素或者{{ SVGElement("polygon") }}元素上绘制的箭头或者多边标记图形。

## 用法

{{svginfo}}

## 示例

» [marker.svg](/files/3267/marker.svg)

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("viewBox") }}
- {{ SVGAttr("preserveAspectRatio") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("markerUnits") }}
- {{ SVGAttr("refX") }}
- {{ SVGAttr("refY") }}
- {{ SVGAttr("markerWidth") }}
- {{ SVGAttr("markerHeight") }}
- {{ SVGAttr("orient") }}

## DOM 接口

该元素实现了[`SVGMarkerElement`](/zh-CN/DOM/SVGMarkerElement) 接口。

## Example

### SVG

```plain
<?xml version="1.0"?>
<svg width="120" height="120" viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg" version="1.1">

  <defs>
    <marker id="Triangle" viewBox="0 0 10 10" refX="1" refY="5"
        markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>

  <polyline points="10,90 50,80 90,20" fill="none" stroke="black"
      stroke-width="2" marker-end="url(#Triangle)" />
</svg>
```

### Result

{{EmbedLiveSample("Example")}}

## 浏览器兼容性

{{Compat}}
