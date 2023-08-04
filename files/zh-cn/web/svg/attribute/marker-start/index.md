---
title: marker-start
slug: Web/SVG/Attribute/marker-start
---

{{SVGRef}}

**`marker-start`** 属性将在给定[形状](/zh-CN/docs/Web/SVG/Element#Shape_elements)的起始顶点绘制的箭头或者多边形标记

对于除 SVG 的 polyline 和 path 元素之外的所有形状元素，最后的一个顶点与第一个顶点相同。在这种情况下，如果 SVG 的`marker-start`属性和 {{SVGAttr("marker-end")}} 的值都不是 `none` ，然后再最后一个顶点渲染两个图标。对于一个 `<path>` 元素，对于每个封闭的子路径，他的最后一个顶点都与第一个顶点相同。 `marker-end` 仅在[路径数据](/zh-CN/docs/Web/SVG/Attribute/d#Path_commands)的起始顶点上呈现。

**Note:**作为一个图像属性， `marker-start` 可以用作 CSS 属性。

作为一个图像属性，他可以应用到所有的元素上，但是他只针对于一下其中元素有效：{{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, 和{{SVGElement("rect")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      markerWidth="10"
      markerHeight="10"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00" />
    </marker>
  </defs>
  <polyline
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20"
    marker-start="url(#triangle)" />
</svg>
```

{{EmbedLiveSample("示例", "200", "200")}}

## 使用说明

| 值           | `none` \| `<marker-ref>` |
| ------------ | ------------------------ |
| 默认值       | `none`                   |
| 可用作与动画 | 是                       |

- `none`
  - : 表示将不会在起点绘制任何符号。
- `<marker-ref>`
  - : 这个值表示的是对 [`<marker>`](/zh-CN/docs/Web/SVG/Element/marker) 元素的引用，将在起点绘制该元素.。如果引用无效，将不会绘制任何东西。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{SVGElement("marker")}}
- {{SVGAttr("marker-end")}}
- {{SVGAttr("marker-mid")}}
