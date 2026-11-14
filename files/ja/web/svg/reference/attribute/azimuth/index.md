---
title: azimuth
slug: Web/SVG/Reference/Attribute/azimuth
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`azimuth`** 属性は、光源の XY 平面上の方向角を、x 軸から時計回りに測った度数で指定します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("feDistantLight")}}

## 例

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

  <circle cx="100" cy="100" r="80" filter="url(#distantLight1)" />
  <circle cx="340" cy="100" r="80" filter="url(#distantLight2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
