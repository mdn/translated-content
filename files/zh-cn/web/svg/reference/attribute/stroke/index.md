---
title: stroke
slug: Web/SVG/Reference/Attribute/stroke
l10n:
  sourceCommit: 47996becf4d78c721f29a3004ac613bd51c11ab8
---

**`stroke`** 是一个表现属性，它定义了图形的外轮廓的颜色（_或者是任何 SVG 绘画方式，如渐变或图案_）。

> [!NOTE]
> 作为一个表现属性，`stroke` 可以用作 CSS 属性。参见 {{cssxref('stroke')}} 以了解更多信息。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

## 示例

### 基础颜色和渐变色描边

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 使用单一颜色描边 -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- 使用渐变色描边 -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

输出如下：

{{EmbedLiveSample("基础颜色和渐变色描边", '100%', 200)}}

### `context-stroke` 示例

在这个示例中，我们使用 {{SVGElement('path')}} 元素定义了三个形状的图形，每个图形都设置了不同的 `stroke` 和 [`fill`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill) 颜色。我们还通过 {{SVGElement('marker')}} 元素将 {{SVGElement('circle')}} 元素定义为标记。每个图形都通过 [`marker`](/zh-CN/docs/Web/CSS/Reference/Properties/marker) CSS 属性应用了标记。

{{SVGElement('circle')}} 元素上设置了 `stroke="context-stroke"` 和 `fill="context-fill"`。因为它被设置为图形的上下文标记，所以这些属性会导致它在各种情况下都会继承设置在 {{SVGElement('path')}} 元素上的 `fill` 和 `stroke`。

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url(#circle);
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

输出如下：

{{EmbedLiveSample("`context-stroke` 示例", '100%', 220)}}

> [!NOTE]
> 当元素被 {{SVGElement('use')}} 元素引用时，元素还可以使用 `context-stroke` 和 `context-fill` 来继承 `stroke` 和 `fill` 的值。

## 用法

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#涂色"
            >&#x3C;paint></a
          ></strong
        >
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
