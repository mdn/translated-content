---
title: mask-type
slug: Web/SVG/Reference/Attribute/mask-type
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`mask-type`** 属性は、マスク時に {{ SVGElement("mask") }} 要素のコンテンツに使用するマスクモード（_alpha_ または _luminance_）を示します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('mask')}}

> [!NOTE]
> このプレゼンテーション属性には、対応する CSS プロパティ {{cssxref("mask-type")}} があります。両方が指定されている場合、CSS プロパティが優先されます。

## mask

{{SVGElement("mask")}} の場合、`mask-type` はマスク要素のコンテンツを輝度マスクとして扱うかアルファマスクとして扱うかを定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>alpha</code> | <code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- `alpha`
  - : この値は、{{SVGElement('mask')}} 要素のアルファ値を使用することを示します。マスクされたオブジェクトのピクセルは、マスクの色の輝度に関係なく、マスク領域の不透明度と一致します。
- `luminance`
  - : この値は、{{SVGElement('mask')}} 要素の輝度値を使用することを示します。マスクされたオブジェクトの不透明度は、マスクの不透明度と明度によって決まります。`luminance` マスクの不透明度は、マスクの `R`、`G`、`B`、`A` チャンネルと、式 `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A` を使用して決定されます。

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
  <!-- ID と mask-type 値以外が同じマスク -->
  <mask id="myMask1" mask-type="alpha">
    <rect
      fill="rgb(10% 10% 10% / 0.4)"
      x="0"
      y="0"
      width="100%"
      height="100%" />
    <circle fill="rgb(90% 90% 90% / 0.6)" cx="50" cy="50" r="35" />
  </mask>

  <mask id="myMask2" mask-type="luminance">
    <rect
      fill="rgb(10% 10% 10% / 0.4)"
      x="0"
      y="0"
      width="100%"
      height="100%" />
    <circle fill="rgb(90% 90% 90% / 0.6)" cx="50" cy="50" r="35" />
  </mask>

  <!-- 最初の矩形はアルファマスクでマスクする -->
  <rect x="0" y="0" width="45" height="45" mask="url(#myMask1)" fill="red" />

  <!-- 最後の矩形は輝度マスクでマスクする -->
  <rect x="55" y="0" width="45" height="45" mask="url(#myMask2)" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("mask-type")}} プロパティ
- CSS の {{cssxref("mask-mode")}} プロパティ
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
