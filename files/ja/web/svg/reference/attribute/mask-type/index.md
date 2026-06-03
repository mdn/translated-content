---
title: mask-type
slug: Web/SVG/Reference/Attribute/mask-type
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

**`mask-type`** 属性は、マスク時に {{ SVGElement("mask") }} 要素のコンテンツに使用するマスクモード（_alpha_ または _luminance_）を示します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('mask')}}

> [!NOTE]
> このプレゼンテーション属性には、 CSS プロパティで相当する {{cssxref("mask-type")}} があります。両方が指定されている場合、 CSS プロパティが優先されます。

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
  <!-- Two identical masks other than the id and mask-type values -->
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

  <!-- The first rect is masked with an alpha mask -->
  <rect x="0" y="0" width="45" height="45" mask="url(#myMask1)" fill="red" />

  <!-- The last rect is masked with a luminance mask -->
  <rect x="55" y="0" width="45" height="45" mask="url(#myMask2)" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## mask

{{SVGElement("mask")}} の場合、 `mask-type` は、マスク要素のコンテンツを輝度マスクとして扱うかアルファマスクとして扱うかを定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>alpha</code> | <code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- `alpha`
  - : この値は、この {{SVGElement('mask')}} 要素のアルファ値を使用することを示します。マスクされたオブジェクトのピクセルは、マスクの色調の輝度に関係なく、マスク領域の不透明度と一致します。
- `luminance`
  - : この値は、この {{SVGElement('mask')}} 要素の輝度値を使用することを示します。マスクされたオブジェクトの不透明度は、マスクの不透明度と明度によって決まります。`luminance` マスクの不透明度は、マスクの `R`、`G`、`B`、および `A` チャンネルを使用して、 `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A` という算出式で決定されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("mask-type")}} property
- CSS {{cssxref("mask-mode")}} property
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
