---
title: font-variant
slug: Web/CSS/font-variant
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.font-variant
translation_of: Web/CSS/font-variant
---
{{CSSRef}}

**`font-variant`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、フォントのすべての変化形を設定することができます。

CSS Level 2 (Revision 1) における `font-variant` の値 (つまり、 `normal` や `small-caps`) は、一括指定の {{cssxref("font")}} を用いて設定することもできます。

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

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
font-variant: revert;
font-variant: unset;
```

### 値

- `normal`
  - : 通常のフォントフェイスを定義します。それぞれの個別指定プロパティは通常の初期値になります。 `font-variant` の個別指定プロパティは、 {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-east-asian")}} です。
- `none`
  - : {{cssxref("font-variant-ligatures")}} を `none` に、その他の個別指定プロパティを `normal` に、それぞれの初期値を設定します。
- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : 個別指定の {{cssxref("font-variant-ligatures")}} プロパティに関するキーワードを指定します。指定可能な値は、 `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual`, `no-contextual` です。
- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : 個別指定の {{cssxref("font-variant-alternates")}} プロパティに関するキーワードや関数を指定します。
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : 個別指定の {{cssxref("font-variant-caps")}} プロパティに関するキーワードや関数を指定します。
- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : 個別指定の {{cssxref("font-variant-numeric")}} プロパティに関するキーワードを指定します。指定可能な値は、 `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, `slashed-zero` です。
- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : 個別指定の {{cssxref("font-variant-east-asian")}} プロパティに関するキーワードを指定します。指定可能な値は、 `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby` です。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Setting_the_small-caps_font_variant">スモールキャップのフォント変化形の設定</h3>

#### HTML

```html
<p class="normal">Firefox rocks!</p>
<p class="small">Firefox rocks!</p>
```

#### CSS

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

#### 結果

{{ EmbedLiveSample('Setting_the_small-caps_font_variant', '', '', '', 'Web/CSS/font-variant') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-transform")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
