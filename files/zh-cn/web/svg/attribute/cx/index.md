---
title: cx
slug: Web/SVG/Attribute/cx
---

{{SVGRef}}

**`cx`** 属性定义一个中心点的 x 轴坐标。

有三个元素在使用此属性：{{SVGElement("circle")}}, {{SVGElement("ellipse")}}, 和 {{SVGElement("radialGradient")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

## 圆

对于 {{SVGElement('circle')}}，`cx` 用来定义图形中心的 x 轴坐标。

| 值     | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/zh-CN/docs/Web/SVG/Content_type#Percentage)** |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 默认值 | `0`                                                                                                                          |
| 可变性 | Yes                                                                                                                          |

注：起始于 SVG2 `cx`，是一个几何属性，意味着该属性也可以用作圆的 CSS 属性。

## 椭圆

对于 {{SVGElement('ellipse')}}，`cx` 用来定义图形中心的 x 轴坐标。

| 值     | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/zh-CN/docs/Web/SVG/Content_type#Percentage)** |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 默认值 | `0`                                                                                                                          |
| 可变性 | Yes                                                                                                                          |

**注：** 起始于 SVG2 `cx`，是一个几何属性，意味着该属性也可以用作椭圆的 CSS 属性。

## 径向渐变

对于 {{SVGElement('radialGradient')}}, `cx` 用来定义径向渐变终止圆的 x 轴坐标。

| 值     | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** |
| ------ | -------------------------------------------------------- |
| 默认值 | `50%`                                                    |
| 可变性 | Yes                                                      |

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('径向渐变', 150, '100%')}}

## 规范

{{Specifications}}
