---
title: symbol
slug: Web/SVG/Element/symbol
---

{{SVGRef}}

`symbol`元素用来定义一个图形模板对象，它可以用一个{{ SVGElement("use") }}元素实例化。`symbol`元素对图形的作用是在同一文档中多次使用，添加结构和语义。结构丰富的文档可以更生动地呈现出来，类似讲演稿或盲文，从而提升了无障碍。注意，一个`symbol`元素本身是不呈现的。只有`symbol`元素的实例（亦即，一个引用了`symbol`的 {{ SVGElement("use") }}元素）才能呈现。

## 用法

{{svginfo}}

## 示例

```html
<svg>
  <!-- symbol definition  NEVER draw -->
  <symbol id="sym01" viewBox="0 0 150 110">
    <circle cx="50" cy="50" r="40" stroke-width="8" stroke="red" fill="red" />
    <circle
      cx="90"
      cy="60"
      r="40"
      stroke-width="8"
      stroke="green"
      fill="white" />
  </symbol>

  <!-- actual drawing by "use" element -->
  <use xlink:href="#sym01" x="0" y="0" width="100" height="50" />
  <use xlink:href="#sym01" x="0" y="50" width="75" height="38" />
  <use xlink:href="#sym01" x="0" y="100" width="50" height="25" />
</svg>
```

{{EmbedLiveSample("示例", 150, 110)}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/SVG/Attribute#GraphicalEvent) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("preserveAspectRatio") }}
- {{ SVGAttr("viewBox") }}

## DOM 接口

该元素实现了[`SVGSymbolElement`](/zh-CN/DOM/SVGSymbolElement)接口。

## 浏览器兼容性

{{Compat}}

## 另见

- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
