---
title: gradientTransform
slug: Web/SVG/Reference/Attribute/gradientTransform
l10n:
  sourceCommit: bb3478393fbb30212a6aeb33235dadf2d627fd4a
---

**`gradientTransform`** 属性は、グラデーション座標系からターゲット座標系（つまり、userSpaceOnUse または objectBoundingBox）への、オプションの追加座標変換の定義が含まれています。 これにより、グラデーションの傾きを変えるなどの操作が可能です。この追加の座標変換行列は、オブジェクトのバウンディングボックス単位からユーザー空間へ変換するために必要な暗黙の座標変換を含め、以前に定義されたすべての座標変換に対して右から乗算されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

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
  <radialGradient
    id="gradient1"
    gradientUnits="userSpaceOnUse"
    cx="100"
    cy="100"
    r="100"
    fx="100"
    fy="100">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>
  <radialGradient
    id="gradient2"
    gradientUnits="userSpaceOnUse"
    cx="100"
    cy="100"
    r="100"
    fx="100"
    fy="100"
    gradientTransform="skewX(20) translate(185, 0)">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>

  <rect x="0" y="0" width="200" height="200" fill="url(#gradient1)" />
  <rect x="220" y="0" width="200" height="200" fill="url(#gradient2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## 使用コンテキスト

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>恒等変換</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;transform-list></code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<transform-list>`
  - : [座標変換関数](/ja/docs/Web/CSS/Reference/Values/transform-function)のリストで、グラデーション座標系から対象座標系への追加の変換を指定するものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform-function")}}
