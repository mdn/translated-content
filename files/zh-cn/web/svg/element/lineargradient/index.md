---
title: linearGradient
slug: Web/SVG/Element/linearGradient
---

{{SVGRef}}

`linearGradient`元素用来定义线性渐变，用于图形元素的填充或描边。

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
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 属性

### Global 属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [Xlink 属性](/zh-CN/SVG/Attribute#XLink) »
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

该元素实现了[`SVGLinearGradientElement`](/zh-CN/DOM/SVGLinearGradientElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("radialGradient") }}
- {{ SVGElement("stop") }}
