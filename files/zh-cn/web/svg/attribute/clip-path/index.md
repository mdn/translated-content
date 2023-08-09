---
title: clip-path
slug: Web/SVG/Attribute/clip-path
---

{{SVGRef}}

元素的表现属性 **`clip-path`** 为其定义或关联一条剪切路径。

**注意：**`clip-path` 是一个表现属性，可以作为 CSS 属性使用。

作为一种表现属性，`clip-path` 可以用于任何元素，不过效果最明显的是下列十九种元素：{{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('ellipse')}}, {{SVGElement('g')}}, {{SVGElement('glyph')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('marker')}}, {{SVGElement('mask')}}, {{SVGElement('path')}}, {{SVGElement('pattern')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('svg')}}, {{SVGElement('symbol')}}, {{SVGElement('text')}}, {{SVGElement('use')}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="myClip" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".5" />
  </clipPath>

  <!-- 左上：应用自定义的剪切路径 -->
  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="url(#myClip)" />

  <!-- 右上：应用 CSS 基本形状和 fill-box 几何。
       实质上和自定义剪切路径并把 clipPathUnits
       设成 objectBoundingBox 一样 -->
  <rect
    x="11"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() fill-box" />

  <!-- 左下 -->
  <rect
    x="1"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() stroke-box" />

  <!-- 右下：应用 CSS 基本形状和 view-box 几何。
       实质上和自定义剪切路径并把 clipPathUnits
       设成 userSpaceOnUse 一样 -->
  <rect
    x="11"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() view-box" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 200)}}

## Usage notes

| 值         | {{cssxref('url')}} \| [ {{cssxref('basic-shape')}} \|\| `<geometry-box>` ] \| `none` |
| ---------- | ------------------------------------------------------------------------------------ |
| 默认值     | `none`                                                                               |
| Animatable | 是                                                                                   |

- \<geometry-box>
  - : geometry-box 是应用 {{cssxref('basic-shape')}} 的额外信息，用于区分 CSS 基本形状如何应用于元素上：`fill-box` 表示将对象的包围框作为参照框；`stroke-box` 表示将对象的包围框加上描边的范围作为参照框；`view-box` 表示使用最近的 SVG 视窗作为参照框。

> **备注：** `clip-path` 语法的更多细节可参考 CSS 属性 {{cssxref('clip-path')}} 的参考页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- The CSS {{cssxref("clip-path")}} property
