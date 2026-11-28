---
title: maskContentUnits
slug: Web/SVG/Reference/Attribute/maskContentUnits
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`maskContentUnits`** 属性は、{{SVGElement("mask")}} 要素のコンテンツに使用する座標系を示します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('mask')}}

## mask

{{SVGElement("mask")}} では、`maskContentUnits` は要素のコンテンツに使用する座標系を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : この値は、{{SVGElement('mask')}} 要素内のすべての座標が、マスク作成時に定義されたユーザー座標系を参照することを示します。
- `objectBoundingBox`
  - : この値は、{{SVGElement('mask')}} 要素内のすべての座標が、マスクを適用する要素の包含ボックスを基準としていることを示します。包含ボックスは、{{SVGElement("mask")}} のコンテンツが `"0 0 1 1"` {{SVGAttr("viewBox")}} に結び付けられている場合と同じと考えることができます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <mask id="myMask1" maskContentUnits="userSpaceOnUse">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <mask id="myMask2" maskContentUnits="objectBoundingBox">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx=".5" cy=".5" r=".35" />
  </mask>

  <!-- マスクの位置を示す基準矩形 -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- 最初の 3 つの矩形は userSpaceOnUse 単位でマスクする -->
  <use mask="url(#myMask1)" href="#r1" fill="red" />
  <use mask="url(#myMask1)" href="#r2" fill="red" />
  <use mask="url(#myMask1)" href="#r3" fill="red" />

  <!-- 最後の矩形は objectBoundingBox 単位でマスクする -->
  <use mask="url(#myMask2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
