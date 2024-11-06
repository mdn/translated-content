---
title: r
slug: Web/SVG/Attribute/r
---

{{SVGRef}}

**`r`** 属性用来定义圆的半径。

有两个元素在使用该属性：{{SVGElement("circle")}} 和 {{SVGElement("radialGradient")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient r="0" id="myGradient000">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="50%" id="myGradient050">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="100%" id="myGradient100">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="0" />
  <circle cx="150" cy="50" r="25" />
  <circle cx="250" cy="50" r="50" />

  <rect x="20" y="120" width="60" height="60" fill="url(#myGradient000)" />
  <rect x="120" y="120" width="60" height="60" fill="url(#myGradient050)" />
  <rect x="220" y="120" width="60" height="60" fill="url(#myGradient100)" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 200)}}

## 圆

对于 {{SVGElement('circle')}}，`r` 用来定义圆的半径以及它的大小。取值小于或等于零，圆将不会被绘制出来。

| 值     | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/zh-CN/docs/Web/SVG/Content_type#Percentage)** |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 默认值 | `0`                                                                                                                          |
| 可变性 | Yes                                                                                                                          |

**注：**起始于 SVG2，`r` 是一个几何属性，意味着该属性也可以用作圆的 CSS 属性。

## 径向渐变

对于 {{ SVGElement("radialGradient") }}，`r` 用来定义径向渐变终止圆的半径。

渐变将以此绘制出来：**100%** 渐变停止点会被映射到终止圆的一周上。取值小于或等于零，将会使用最后一个渐变 {{ SVGElement("stop") }} 的颜色和不透明度，导致该区域被绘制为单色。

| 值     | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/zh-CN/docs/Web/SVG/Content_type#Percentage)** |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 默认值 | `50%`                                                                                                                        |
| 可变性 | Yes                                                                                                                          |

## 规范

{{Specifications}}
