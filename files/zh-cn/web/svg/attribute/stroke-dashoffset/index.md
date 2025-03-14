---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

**`stroke-dashoffset`** 是一种表现属性，它定义了虚线与路径起点之间的偏移量。

> [!NOTE]
> 作为一个表现属性，`stroke-dashoffset` 可以用作 CSS 属性。

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
- {{SVGElement('tref')}}
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
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 没有设置为虚线 -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- 没有设置偏移量 -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!-- 虚线正向偏移了 3 个单位 -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!-- 虚线反向偏移了 3 个单位 -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!-- 虚线正向偏移了 1 个单位，最终渲染结果和上一个例子相同 -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!-- 底下的红线突显了每行虚线的偏移量 -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">可动画化</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

偏移量的计算通常基于 {{SVGAttr('pathLength')}}，但如果使用 [\<percentage>](/zh-CN/docs/Web/SVG/Content_type#百分数) 值，那么将根据当前视口的百分比进行计算。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
