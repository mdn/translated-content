---
title: rx
slug: Web/SVG/Attribute/rx
---

{{SVGRef}}

**`rx`** 属性用于定义水平轴向的圆角半径尺寸。

{{SVGElement("ellipse")}} 和 {{SVGElement("rect")}} 两个基本图形使用了这个属性。

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
  <ellipse cx="50" cy="50" rx="0" ry="25" />
  <ellipse cx="150" cy="50" rx="25" ry="25" />
  <ellipse cx="250" cy="50" rx="50" ry="25" />

  <rect x="20" y="120" width="60" height="60" rx="0" ry="15" />
  <rect x="120" y="120" width="60" height="60" rx="15" ry="15" />
  <rect x="220" y="120" width="60" height="60" rx="150" ry="15" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 200)}}

## 椭圆

对于 {{SVGElement('ellipse')}}，`rx` 属性定义了水平方向的半径尺寸。如果使用了负值或者零，那么椭圆就不会被绘制。

| 取值         | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/zh-CN/docs/Web/SVG/Content_type#Percentage)** \| `auto` |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 默认值       | `auto`                                                                                                                                 |
| 是否支持动画 | 是                                                                                                                                     |

**注释：** 从 SVG2 开始， `rx` 是一个几何属性，也就是说，这个属性也可以用作椭圆的 CSS 属性。

## 矩形

对于 {{SVGElement('rect')}}，`rx` 定义了水平方向的圆角尺寸。

`rx` 属性的实际效果取决于矩形的 {{SVGAttr("ry")}} 属性和宽度：

- 如果你为 `rx` 属性指定了正确的值，但是没有定义 {{SVGAttr("ry")}} 属性的值，那么浏览器会让 {{SVGAttr("ry")}} 取 `rx` 属性被指定的相等的值。（反之亦然）
- 如果 `rx` 和 {{SVGAttr("ry")}} 都没有被正确的赋值，那么浏览器会绘制一个带有直角尖角的矩形。
- `rx` 属性的有效值为矩形宽度的一半（即，如果为 `rx` 指定的值大于矩形宽度的一半，那么浏览器会视为 `rx` 的值为矩形宽度的一半）。

| 取值         | **[\<length>](/zh-CN/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/zh-CN/docs/Web/SVG/Content_type#Percentage)** \| `auto` |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 缺省值       | `auto`                                                                                                                                 |
| 是否支持动画 | 是                                                                                                                                     |

**注释：** 从 SVG2 开始，`rx` 是一个几何属性，也就是说，这个属性也可以用作矩形（rect）的 CSS 属性。

## 规范

{{Specifications}}
