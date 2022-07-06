---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-variant-numeric
translation_of: Web/CSS/font-variant-numeric
---
{{CSSRef}}

**`font-variant-numeric`** は CSS のプロパティで、数字、分数、序数記号の表記を制御するために使用します。

{{EmbedInteractiveExample("pages/css/font-variant-numeric.html")}}

## 構文

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums;         /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums;       /* <numeric-figure-values> */
font-variant-numeric: proportional-nums;   /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums;        /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions;  /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions;   /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* グローバル値 */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: unset;
```

このプロパティは 2 つの形のうちの 1 つを取ります。

- キーワード値 `normal`
- 以下の一覧にあるその他の値を空白区切り、自由な順番で

### 値

- `normal`
  - : このキーワードは、別形式の表記の使用を無効にします。
- `ordinal`
  - : このキーワードは、序数記号に対して特別な表記を使用します。英語では 1st, 2nd, 3rd, 4th、イタリア語では 1a です。 OpenType の `ordn` の値に対応します。
- `slashed-zero`
  - : このキーワードは、スラッシュ付きの 0 を使用します。これは O と 0 を明確に区別する必要がある場合に便利です。 OpenType の `zero` の値に対応します。
- _\<numeric-figure-values_>

  - : これらの値は、数字の形状を制御します。2 つの値が利用できます。

    - `lining-nums` は、全てをベースライン上に並べる表記を有効にします。 OpenType の `lnum` の値に対応します。
    - `oldstyle-nums` は、 3, 4, 7, 9 などいくつかの数字を下げる表記を有効にします。 OpenType の `onum` の値に対応します。

- _\<numeric-spacing-values_>

  - : これらの値は、数字の表記の大きさを制御します。2 つの値が利用できます。

    - `proportional-nums` は、数字をすべて同じ大きさにしない表記を有効にします。 OpenType の `pnum` の値に対応します。
    - `tabular-nums` は、数字を同じ大きさにする表記を有効にし、表の中に配置しやすくします。 OpenType の `tnum` の値に対応します。

- _\<numeric-fraction-values_>

  - : これらの値は、分数の表示に使う表記を制御します。2 つの値が利用できます。

    - `diagonal-fractions` は、分子と分母が小さめになり、スラッシュで区切られる表記を有効にします。 OpenType の `frac` の値に対応します。
    - `stacked-fractions` は、分子と分母が小さめになり、積み重ねられて水平線で区切られた表記を有効にします。 OpenType の `afrc` の値に対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 序数形式の設定

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-example.html", '100%', 600)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant")}}
