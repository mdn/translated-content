---
title: stroke-dasharray
slug: Web/SVG/Reference/Attribute/stroke-dasharray
---

**`stroke-dasharray`** 表现属性定义了用于绘制形状轮廓的虚线段和间隙的排列形式。

> [!NOTE]
> 作为一个表现属性，`stroke-dasharray` 可以用作 CSS 属性。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 12" xmlns="http://www.w3.org/2000/svg">
  <style>
    line {
      stroke: black;
    }
  </style>
  <!-- 没有虚线和间隙 -->
  <line x1="0" y1="1" x2="30" y2="1" />

  <!-- 虚线段和间隙长度相同 -->
  <line x1="0" y1="3" x2="30" y2="3" stroke-dasharray="4" />

  <!-- 虚线段和间隙长度不同 -->
  <line x1="0" y1="5" x2="30" y2="5" stroke-dasharray="4 1" />

  <!-- 具有奇数个不同长度的虚线段和间隙 -->
  <line x1="0" y1="7" x2="30" y2="7" stroke-dasharray="4 1 2" />

  <!-- 具有偶数个不同长度的虚线段和间隙 -->
  <line x1="0" y1="9" x2="30" y2="9" stroke-dasharray="4 1 2 3" />

  <!-- 以间隙开始的虚线 -->
  <line x1="0" y1="11" x2="30" y2="11" stroke-dasharray="0 4 0" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 150)}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>none</code> | <code>&#x3C;dasharray></code></td>
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

- \<dasharray>
  - : 以逗号或空格分隔的 [`<length>`](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) 和 [`<percentage>`](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数) 列表，用于定义交替的虚线段和间隙的长度。

    如果提供了奇数个值，则重复该列表以产生偶数个值，因此 `5,3,2` 等价于 `5,3,2,5,3,2`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
