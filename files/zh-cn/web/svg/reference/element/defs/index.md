---
title: defs
slug: Web/SVG/Reference/Element/defs
---

SVG 允许我们定义以后需要重复使用的图形元素。建议把所有需要再次使用的引用元素定义在`defs`元素里面。这样做可以增加 SVG 内容的易读性和无障碍。在`defs`元素中定义的图形元素不会直接呈现。你可以在你的视口的任意地方利用 {{ SVGElement("use") }}元素呈现这些元素。

## 使用上下文

{{svginfo}}

## 示例

```xml
<svg width="80px" height="30px" viewBox="0 0 80 30"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)"  />
</svg>
```

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Reference/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/Web/SVG/Reference/Attribute#core) »
- [图形事件属性](/zh-CN/docs/Web/SVG/Reference/Attribute#graphicalevent) »
- [外观属性](/zh-CN/docs/Web/SVG/Reference/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

_没有专有属性。_

## DOM 接口

这个元素实现了 [`SVGDefsElement`](/zh-CN/docs/DOM/SVGDefsElement) 接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("use") }}
