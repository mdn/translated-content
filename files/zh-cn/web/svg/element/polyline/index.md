---
title: polyline
slug: Web/SVG/Element/polyline
---

{{SVGRef}}

`polyline`元素是 SVG 的一个基本形状，用来创建一系列直线连接多个点。典型的一个`polyline`是用来创建一个开放的形状，最后一点不与第一点相连。欲了解闭合形状，请看{{SVGElement("polygon")}} 元素。

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
  <!-- 具有默认填充的折线示例 -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- 具有描边但无填充的相同的多段线形状示例 -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
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

该元素实现了[`SVGPolylineElement`](/zh-CN/DOM/SVGPolylineElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("line") }}
- {{ SVGElement("polygon") }}
