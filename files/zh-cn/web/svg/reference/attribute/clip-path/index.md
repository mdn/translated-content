---
title: clip-path
slug: Web/SVG/Reference/Attribute/clip-path
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`clip-path`** 表现属性为其相关元素定义或关联一条裁剪路径。

> [!NOTE]
> 作为一个表现属性，`clip-path` 也有对应的 CSS 属性：{{cssxref("clip-path")}}。两者同时指定时，CSS 属性优先。

你可以和下面的 SVG 元素一起使用该属性：

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('use')}}

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

  <!-- 左上：应用自定义的裁剪路径 -->
  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="url(#myClip)" />

  <!-- 右上：在 fill-box 几何上应用 CSS 基本形状。
       这等同于使用自定义裁剪路径，并将 clipPathUnits
       设为 objectBoundingBox -->
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

  <!-- 右下：在 view-box 几何上应用 CSS 基本形状。
       这等同于使用自定义裁剪路径，并将 clipPathUnits
       设为 userSpaceOnUse -->
  <rect
    x="11"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() view-box" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        {{CSSXref("url_value", "&lt;url&gt;")}} | [ {{cssxref('basic-shape')}} ||
        <code>&#x3C;geometry-box></code> ] | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- \<geometry-box>
  - : 用于说明如何将 {{cssxref('basic-shape')}} 应用于元素的额外信息：`fill-box` 表示使用对象包围盒；`stroke-box` 表示使用扩展了描边的对象包围盒；`view-box` 表示使用最近的 SVG 视口作为参照框。

> [!NOTE]
> 有关 clip-path 语法的更多详情，请参阅 CSS 属性 {{cssxref('clip-path')}} 参考页。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS {{cssxref("clip-path")}} 属性
- [CSS 裁剪简介](/zh-CN/docs/Web/CSS/Guides/Masking/Clipping)
