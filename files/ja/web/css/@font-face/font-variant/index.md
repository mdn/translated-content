---
title: font-variant
slug: Web/CSS/@font-face/font-variant
browser-compat: css.at-rules.font-face.font-variant
translation_of: Web/CSS/@font-face/font-variant
---
{{CSSRef}}

**`font-variant`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、 {{cssxref("@font-face")}} ルールで指定されたフォントのすべての変化形を設定することができます。

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}

## 構文

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* グローバル値 */
font-variant: inherit;
font-variant: initial;
font-variant: unset;
```

### 値

- `normal`
  - : 通常のフォントフェイスを指定します。それぞれの個別指定プロパティは normal の初期値になります。 `font-variant` の個別指定プロパティは、 {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-east-asian")}} です。
- `none`
  - : {{cssxref("font-variant-ligatures")}} の値を `none` に設定し、それ以外の個別指定プロパティは、初期値である `normal` とします。
- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : 個別指定プロパティの {{cssxref("font-variant-ligatures")}} に関するキーワードを指定します。指定可能な値は、 `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual`, `no-contextual` です。
- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : 個別指定プロパティの {{cssxref("font-variant-alternates")}} に関するキーワードや関数を指定します。
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : 個別指定プロパティの {{cssxref("font-variant-caps")}} に関するキーワードや関数を指定します。
- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : 個別指定プロパティの {{cssxref("font-variant-numeric")}} に関するキーワードを指定します。指定可能な値は、 `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, `slashed-zero` です。
- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : 個別指定プロパティの {{cssxref("font-variant-east-asian")}} に関するキーワードを指定します。指定可能な値は、 `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フォントの変化形 small-caps を設定

以下は、ローカルの Open Sans フォントを見つけるか、それをインポートして、スモールキャップのフォントを利用できるようにするものです。

```css
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-variant: small-caps;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
