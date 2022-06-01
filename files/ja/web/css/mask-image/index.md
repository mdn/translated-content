---
title: mask-image
slug: Web/CSS/mask-image
tags:
  - CSS
  - CSS プロパティ
  - CSS マスク
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-image
translation_of: Web/CSS/mask-image
---
{{CSSRef}}

**`mask-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のマスクレイヤーとして使用される画像を設定します。
既定では、マスク画像のアルファチャンネルと要素のアルファチャンネルが乗算されることになります。これは {{cssxref("mask-mode")}} プロパティで制御することができます。

```css
/* キーワード値 */
mask-image: none;

/* <mask-source> 値 */
mask-image: url(masks.svg#mask1);

/* <image> 値 */
mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
mask-image: image(url(mask.png), skyblue);

/* 複数の値 */
mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* グローバル値 */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: unset;
```

## 構文

### 値

- `none`
  - : このキーワードは、透明な黒い画像レイヤーとして解釈されます。
- `<mask-source>`
  - : {{cssxref("url()","url()")}} による {{SVGElement("mask")}} または CSS 画像への参照です。
- {{cssxref("&lt;image&gt;")}}
  - : マスク画像レイヤーとして使用される画像の値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク画像を URL で設定

{{EmbedGHLiveSample("css-examples/masking/mask-image.html", '100%', 560)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
- [Apply effects to images with CSS's mask-image property](https://web.dev/css-masking/)
