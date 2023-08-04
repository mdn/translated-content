---
title: circle
slug: Web/SVG/Element/circle
---

{{SVGRef}}

**`<circle>`** [SVG](/zh-CN/docs/Web/SVG) 元素是一个 SVG 的基本形状，用来创建圆，基于一个圆心和一个半径。

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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/SVG/Attribute#GraphicalEvent) »
- [展现属性](/zh-CN/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("cx") }}
- {{ SVGAttr("cy") }}
- {{ SVGAttr("r") }}

## DOM 接口

该元素实现了 {{ domxref("SVGCircleElement") }} 接口。

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{ SVGElement("ellipse") }}
