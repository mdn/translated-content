---
title: use
slug: Web/SVG/Element/use
---

{{SVGRef}}

`use`元素在 SVG 文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的 DOM 中，然后将其粘贴到`use`元素的位置，很像 HTML5 中的克隆[模板元素](/zh-CN/docs/Web/HTML/Element/template)。因为克隆的节点是不可见的，所以当使用[CSS](/zh-CN/CSS)样式化一个`use`元素以及它的隐藏的后代元素的时候，必须小心注意。隐藏的、克隆的 DOM 不能保证继承 CSS 属性，除非你明文设置使用[CSS 继承](/zh-CN/CSS/inheritance)。

出于安全原因，一些浏览器可能在 use 元素上应用同源策略，还有可能拒绝载入 xlink:href 属性内的跨源 URI。

## 用法

{{svginfo}}

## 示例

```xml
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .classA { fill:red }
  </style>
  <defs>
    <g id="Port">
      <circle style="fill:inherit" r="10"/>
    </g>
  </defs>

  <text y="15">black</text>
  <use x="50" y="10" xlink:href="#Port" />
  <text y="35">red</text>
  <use x="50" y="30" xlink:href="#Port" class="classA"/>
  <text y="55">blue</text>
  <use x="50" y="50" xlink:href="#Port" style="fill:blue"/>
 </svg>
```

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
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("xlink:href") }}

## DOM 接口

该元素实现了[`SVGUseElement`](/zh-CN/DOM/SVGUseElement)接口。

## 浏览器兼容性

{{Compat}}
