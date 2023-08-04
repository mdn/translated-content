---
title: textPath
slug: Web/SVG/Element/textPath
---

{{SVGRef}}

除了笔直地绘制一行文字以外，SVG 也可以根据 {{ SVGElement("path") }} 元素的形状来放置文字。只要在`textPath`元素内部放置文本，并通过其`xlink:href`属性值引用{{ SVGElement("path") }}元素，我们就可以让文字块呈现在{{ SVGElement("path") }}元素给定的路径上了。

## 用法

{{svginfo}}

## 示例

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 1000 300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path
      id="MyPath"
      d="M 100 200
             C 200 100 300   0 400 100
             C 500 200 600 300 700 200
             C 800 100 900 100 900 100" />
  </defs>

  <use xlink:href="#MyPath" fill="none" stroke="red" />

  <text font-family="Verdana" font-size="42.5">
    <textPath xlink:href="#MyPath">
      We go up, then we go down, then up again
    </textPath>
  </text>

  <!-- Show outline of the viewport using 'rect' element -->
  <rect
    x="1"
    y="1"
    width="998"
    height="298"
    fill="none"
    stroke="black"
    stroke-width="2" />
</svg>
```

即时结果：

{{EmbedLiveSample("示例",500,175)}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/SVG/Attribute#GraphicalEvent) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [Xlink 属性](/zh-CN/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("startOffset") }}
- {{ SVGAttr("method") }}
- {{ SVGAttr("spacing") }}
- {{ SVGAttr("xlink:href") }}

## DOM 接口

该元素实现了[`SVGTextPathElement`](/zh-CN/DOM/SVGTextPathElement)接口。
