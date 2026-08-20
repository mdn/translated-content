---
title: zoomAndPan
slug: Web/SVG/Reference/Attribute/zoomAndPan
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{Deprecated_Header}}

**`zoomAndPan`** 属性指定 SVG 文档是否可以被放大和平移。

此语境中的放大是指对最外层 SVG 文档片段施加附加的缩放与平移变换所产生的效果。

平移表示响应用户界面操作而对 SVG 文档片段施加的平移（即移位）变换。

你可以和下面的 SVG 元素一起使用该属性：

- {{SVGElement("svg")}}
- {{SVGElement("view")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  zoomAndPan="disable">
  <filter id="diffuseLighting" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" zoomAndPan="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting)" />
</svg>
```

{{EmbedLiveSample("示例", "200", "200")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>disable</code> | <code>magnify</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>magnify</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
