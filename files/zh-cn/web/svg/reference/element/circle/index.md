---
title: <circle>
slug: Web/SVG/Reference/Element/circle
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

[SVG](/zh-CN/docs/Web/SVG) 元素 **`<circle>`** 是用于根据圆心坐标和半径绘制圆形的 [SVG 基本形状](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("cx")}}
  - : 圆心的 x 轴坐标。_值类型_：**[\<length>](/zh-CN/docs/Web/SVG/Guides/Content_type#length)** | **[\<percentage>](/zh-CN/docs/Web/SVG/Guides/Content_type#percentage)**；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("cy")}}
  - : 圆心的 y 轴坐标。_值类型_：**[\<length>](/zh-CN/docs/Web/SVG/Guides/Content_type#length)** | **[\<percentage>](/zh-CN/docs/Web/SVG/Guides/Content_type#percentage)**；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("r")}}
  - : 圆的半径。若值小于或等于 0，则圆形不会被渲染。_值类型_：**[\<length>](/zh-CN/docs/Web/SVG/Guides/Content_type#length)** | **[\<percentage>](/zh-CN/docs/Web/SVG/Guides/Content_type#percentage)**；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("pathLength")}}
  - : 圆周的总长度，单位为用户单位。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#number)；_默认值_：_无_；_动画性_：**是**

> [!NOTE]
> 从 SVG2 开始，`cx`、`cy` 和 `r` 被视为*几何属性*，这意味着这些属性也可以作为该元素的 CSS 属性 来使用。

## DOM 接口

该元素实现了 {{domxref("SVGCircleElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 SVG 基本形状：**{{ SVGElement('ellipse') }}**、{{ SVGElement('line') }}、{{ SVGElement('polygon') }}、{{ SVGElement('polyline') }}、{{ SVGElement('rect') }}
