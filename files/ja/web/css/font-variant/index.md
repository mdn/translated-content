---
title: font-variant
slug: Web/CSS/font-variant
l10n:
  sourceCommit: 9172a95797019960c7baa9e0916f4e25efcf3f27
---

{{CSSRef}}

**`font-variant`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、フォントのすべての変化形を設定することができます。

CSS Level 2 (Revision 1) で定義されたにおける `font-variant` の `<font-variant-css2>` 値（つまり、 `normal` や `small-caps`）は、一括指定の [`font`](/ja/docs/Web/CSS/font) を用いて設定することもできます。

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`font-variant-alternates`](/ja/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/ja/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/ja/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/ja/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/ja/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/ja/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/ja/docs/Web/CSS/font-variant-position)

## 構文

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* グローバル値 */
font-variant: inherit;
font-variant: initial;
font-variant: revert;
font-variant: revert-layer;
font-variant: unset;
```

### 値

- `normal`

  - : 通常のフォントフェイスを定義します。それぞれの個別指定プロパティは `normal` の初期値になります。

- `none`

  - : [`font-variant-ligatures`](/ja/docs/Web/CSS/font-variant-ligatures) を `none` に、その他の個別指定プロパティを `normal` に、それぞれの初期値を設定します。

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`

  - : 個別指定の [`font-variant-ligatures`](/ja/docs/Web/CSS/font-variant-ligatures) プロパティに関するキーワードを指定します。指定可能な値は、 `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual`, `no-contextual` です。

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`

  - : 個別指定の [`font-variant-ligatures`](/ja/docs/Web/CSS/font-variant-ligatures) プロパティに関するキーワードや特性を指定します。

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`

  - : 個別指定の [`font-variant-caps`](/ja/docs/Web/CSS/font-variant-caps) プロパティに関するキーワードや特性を指定します。 `small-caps` の値は、 {{cssxref("font")}} 一括指定プロパティ内で有効な唯一の `normal` 以外のフォントバリアントです。

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`

  - : 個別指定の [`font-variant-numeric`](/ja/docs/Web/CSS/font-variant-numeric) プロパティに関するキーワードを指定します。指定可能な値は、 `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, `slashed-zero` です。

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`

  - : 個別指定の [`font-variant-east-asian`](/ja/docs/Web/CSS/font-variant-east-asian) プロパティに関するキーワードを指定します。指定可能な値は、 `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby` です。

- `sub`, `super`

  - : 個別指定の [`font-variant-position`](/ja/docs/Web/CSS/font-variant-position) プロパティに関するキーワードや特性を指定します。

- `text`, `emoji`, `unicode`
  - : 個別指定の [`font-variant-emoji`](/ja/docs/Web/CSS/font-variant-emoji) プロパティに関するキーワードや特性を指定します。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### スモールキャップのフォント変化形の設定

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

{{ EmbedLiveSample('Setting the small-caps font variant') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`text-transform`](/ja/docs/Web/CSS/text-transform)
- [`text-combine-upright`](/ja/docs/Web/CSS/text-combine-upright)
- [`text-orientation`](/ja/docs/Web/CSS/text-orientation)
