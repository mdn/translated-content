---
title: polygon
slug: Web/SVG/Element/polygon
---

{{SVGRef}}

**`polygon`** 元素定义了一个由一组首尾相连的直线线段构成的闭合多边形形状。最后一点连接到第一点。欲了解开放形状，请看{{SVGElement("polyline")}}元素。

## 用法

{{svginfo}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 具有默认填充的多边形示例 -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- 具有描边但无填充的相同的多边形形状示例 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

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

- {{ SVGAttr("points") }}

## DOM 接口

该元素实现了 `SVGPolygonElement` 接口。

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{ SVGElement("polyline") }}
