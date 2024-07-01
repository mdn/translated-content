---
title: filter
slug: Web/SVG/Element/filter
---

{{SVGRef}}

`filter`元素作用是作为原子滤镜操作的容器。它不能直接呈现。可以利用目标 SVG 元素上的{{ SVGAttr("filter") }}属性引用一个滤镜。

## 用法

{{svginfo}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [XLink 属性](/zh-CN/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("filterRes") }}
- {{ SVGAttr("filterUnits") }}
- {{ SVGAttr("primitiveUnits") }}
- {{ SVGAttr("xlink:href") }}

## DOM 接口

该元素实现了 `SVGFilterElement` 接口。

## 示例

#### SVG

```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### 结果

{{EmbedLiveSample("示例",232,124)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/SVG/Tutorial/Filter_effects)
