---
title: mask-mode
slug: Web/CSS/mask-mode
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-mode
translation_of: Web/CSS/mask-mode
---
{{CSSRef}}

**`mask-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("mask-image")}} で定義されたマスクを、輝度とアルファマスクのどちらで扱うかを設定します。

```css
/* キーワード値 */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* 複数の値 */
mask-mode: alpha, match-source;

/* グローバル値 */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: unset;
```

## 構文

`mask-mode` プロパティは、以下に示す 1 つまたは複数のキーワード値を、カンマで区切って指定します。

### 値

- `alpha`
  - : このキーワードは、マスクレイヤーの透過性 (アルファチャンネル) の値をマスクの値として使用することを示します。
- `luminance`
  - : このキーワードは、マスクレイヤーの輝度の値をマスクの値として使用することを示します。
- `match-source`

  - : {{cssxref("mask-image")}} プロパティが `<mask-source>` 型であれば、マスクレイヤー画像の輝度の値がマスクの値として使用されます。

    {{cssxref("&lt;image&gt;")}} 型であれば、マスクレイヤー画像のアルファ値がマスクの値として使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アルファマスクモードの使用

{{EmbedGHLiveSample("css-examples/masking/mask-mode.html", '100%', 760)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
