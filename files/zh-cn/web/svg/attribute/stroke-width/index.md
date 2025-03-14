---
title: stroke-width
slug: Web/SVG/Attribute/stroke-width
---

{{SVGRef}}

**`stroke-width`** 表现属性定义了应用于图形的外轮廓的宽度。

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
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 默认外轮廓宽度为 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- 使用数值设置外轮廓宽度 -->
  <circle cx="15" cy="5" r="3" stroke="green" stroke-width="3" />

  <!-- 使用百分数设置外轮廓宽度 -->
  <circle cx="25" cy="5" r="3" stroke="green" stroke-width="2%" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 150)}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Content_type#长度"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Content_type#百分数"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 百分数值始终以标准化 {{SVGAttr('viewBox')}} 的对角线长度的百分比计算。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
