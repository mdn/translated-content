---
title: pointsAtX
slug: Web/SVG/Reference/Attribute/pointsAtX
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`pointsAtX`** 属性は、{{SVGElement("filter")}} 要素の {{SVGAttr("primitiveUnits")}} 属性によって定義された座標系における、光源が指し示す点の X 座標を表します。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("feSpotLight")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="lighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="60" y="60" z="50" pointsAtX="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="lighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="60" y="60" z="50" pointsAtX="400" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#lighting1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#lighting2)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}}</td>
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
