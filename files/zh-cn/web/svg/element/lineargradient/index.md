---
title: linearGradient
slug: Web/SVG/Element/linearGradient
tags:
  - SVG
  - SVG 渐变
  - 元素
translation_of: Web/SVG/Element/linearGradient
---
{{SVGRef}}

`linearGradient`元素用来定义线性渐变，用于图形元素的填充或描边。

## 用法

{{svginfo}}

## 示例

```html
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink" >

    <defs>
        <linearGradient id="MyGradient">
            <stop offset="5%"  stop-color="green"/>
            <stop offset="95%" stop-color="gold"/>
        </linearGradient>
    </defs>

    <rect fill="url(#MyGradient)"
          x="10" y="10" width="100" height="100"/>
</svg>
```

{{EmbedLiveSample("Example", 120, 120, "https://mdn.mozillademos.org/files/10061/svg-lineargradient.png")}}

## 属性

### Global 属性

- [核心属性](/en/SVG/Attribute#Core) »
- [外观属性](/en/SVG/Attribute#Presentation) »
- [Xlink 属性](/en/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("gradientUnits") }}
- {{ SVGAttr("gradientTransform") }}
- {{ SVGAttr("x1") }}
- {{ SVGAttr("y1") }}
- {{ SVGAttr("x2") }}
- {{ SVGAttr("y2") }}
- {{ SVGAttr("spreadMethod") }}
- {{ SVGAttr("xlink:href") }}

## DOM 接口

该元素实现了[`SVGLinearGradientElement`](/en/DOM/SVGLinearGradientElement)接口。

## 浏览器兼容性

{{Compat("svg.elements.linearGradient")}}

## 参见

- {{ SVGElement("radialGradient") }}
- {{ SVGElement("stop") }}
