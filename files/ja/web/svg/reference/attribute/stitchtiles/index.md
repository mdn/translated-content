---
title: stitchTiles
slug: Web/SVG/Reference/Attribute/stitchTiles
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`stitchTiles`** 属性は、パーリンノイズのタイルが境界線でどのように振る舞うかを定義します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("feTurbulence")}}

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
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="noStitch" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="stitch" />
  </filter>

  <rect x="0" y="0" width="100" height="100" filter="url(#noise1)" />
  <rect x="100" y="0" width="100" height="100" filter="url(#noise1)" />
  <rect x="0" y="100" width="100" height="100" filter="url(#noise1)" />
  <rect x="100" y="100" width="100" height="100" filter="url(#noise1)" />

  <rect x="220" y="0" width="100" height="100" filter="url(#noise2)" />
  <rect x="320" y="0" width="100" height="100" filter="url(#noise2)" />
  <rect x="220" y="100" width="100" height="100" filter="url(#noise2)" />
  <rect x="320" y="100" width="100" height="100" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>noStitch</code> | <code>stitch</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>noStitch</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `noStitch`
  - : この値は、タービュランス関数が含まれているタイルの境界において、滑らかな遷移を意図的に行わないことを示しています。場合によっては、タイルの境界線に明らかな不連続性が表示されることがあります。
- `stitch`
  - : この値は、ユーザーエージェントが基本周波数の x および y 値を自動的に調整し、{{SVGElement("feTurbulence")}} ノードの幅と高さ（つまり、現在のサブ領域の幅と高さ）が、第 1 オクターブのタイルの幅と高さの整数倍に含まれていることを示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
