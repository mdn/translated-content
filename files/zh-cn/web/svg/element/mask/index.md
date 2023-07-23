---
title: mask
slug: Web/SVG/Element/mask
---

{{SVGRef}}

在 SVG 中，你可以指一个透明的遮罩层和当前对象合成，形成背景。透明遮罩层可以是任何其他图形对象或者{{ SVGElement("g") }}元素。`mask`元素用于定义这样的遮罩元素。属性{{ SVGAttr("mask") }}用来引用一个遮罩元素。

## 使用场景

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
<svg viewBox="-10 -10 120 120">
  <mask id="myMask">
    <!-- 白色像素下的所有内容都将可见 -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- 黑色像素下的所有内容都将不可见 -->
    <path
      d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
      fill="black" />
  </mask>

  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- 应用此蒙版后，我们在圆圈中“打”一个心形孔 -->
  <circle cx="50" cy="50" r="50" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("maskUnits") }}
- {{ SVGAttr("maskContentUnits") }}
- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}

## DOM 接口

该元素实现了[`SVGMaskElement`](/zh-CN/DOM/SVGMaskElement)接口。

## 参见

- {{ SVGElement("clipPath") }}
