---
title: pattern
slug: Web/SVG/Element/pattern
---

{{SVGRef}}

使用预定义的图形对一个对象进行填充或描边，就要用到`pattern`元素。`pattern`元素让预定义图形能够以固定间隔在 x 轴和 y 轴上重复（或平铺）从而覆盖要涂色的区域。先使用`pattern` 元素定义图案，然后在给定的图形元素上用属性 `fill` 或属性 `stroke` 引用用来填充或描边的图案。

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
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>

  <circle cx="50" cy="50" r="50" fill="url(#star)" />
  <circle
    cx="180"
    cy="50"
    r="40"
    fill="none"
    stroke-width="20"
    stroke="url(#star)" />
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [Xlink 属性](/zh-CN/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("viewBox") }}

### 专有属性

- {{ SVGAttr("patternUnits") }}
- {{ SVGAttr("patternContentUnits") }}
- {{ SVGAttr("patternTransform") }}
- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("xlink:href") }}
- {{ SVGAttr("preserveAspectRatio") }}

## DOM 接口

该元素实现了[`SVGPatternElement`](/zh-CN/DOM/SVGPatternElement)接口。
