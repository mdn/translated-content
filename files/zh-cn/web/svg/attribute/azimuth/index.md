---
title: azimuth
slug: Web/SVG/Attribute/azimuth
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`azimuth`** 属性指定了光源在 XY 平面上的方向角度（顺时针），以相对于 x 轴的度数为单位。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("feDistantLight")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="distantLight1">
    <feDiffuseLighting>
      <feDistantLight azimuth="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight azimuth="240" />
    </feDiffuseLighting>
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#distantLight1);" />
  <circle
    cx="100"
    cy="100"
    r="80"
    style="filter: url(#distantLight2); transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("示例", "420", "200")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>有</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
