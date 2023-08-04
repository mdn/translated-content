---
title: stop
slug: Web/SVG/Element/stop
---

{{SVGRef}}

一个渐变上的颜色坡度，是用`stop`元素定义的。`stop`元素可以是{{SVGElement("linearGradient")}}元素或者{{SVGElement("radialGradient")}}元素的子元素。

## 用法

{{svginfo}}

## 示例

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 80 40"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="MyGradient">
      <stop offset="5%" stop-color="#F60" />
      <stop offset="95%" stop-color="#FF6" />
    </linearGradient>
  </defs>

  <!-- Outline the drawing area in black -->
  <rect fill="none" stroke="black" x="0.5" y="0.5" width="79" height="39" />

  <!-- The rectangle is filled using a linear gradient -->
  <rect
    fill="url(#MyGradient)"
    stroke="black"
    stroke-width="1"
    x="10"
    y="10"
    width="60"
    height="20" />
</svg>
```

示例输出：

{{EmbedLiveSample("示例",160,95)}}

## 属性

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Attribute#Core) »
- [外观属性](/zh-CN/docs/Web/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### 专有属性

- {{SVGAttr("offset")}}
- {{SVGAttr("stop-color")}}
- {{SVGAttr("stop-opacity")}}

## DOM 接口

该元素实现了[`SVGStopElement`](/zh-CN/docs/Web/API/SVGStopElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
