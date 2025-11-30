---
title: font-variant
slug: Web/CSS/Reference/Properties/font-variant
original_slug: Web/CSS/font-variant
l10n:
  sourceCommit: 9172a95797019960c7baa9e0916f4e25efcf3f27
---

**`font-variant`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、フォントのすべての変化形を設定することができます。

CSS Level 2 (Revision 1) で定義された `font-variant` の `<font-variant-css2>` 値（つまり、 `normal` や `small-caps`）は、一括指定の [`font`](/ja/docs/Web/CSS/Reference/Properties/font) を用いて設定することもできます。

{{InteractiveExample("CSS デモ: font-variant")}}

```css interactive-example-choice
font-variant: normal;
```

```css interactive-example-choice
font-variant: no-common-ligatures proportional-nums;
```

```css interactive-example-choice
font-variant: common-ligatures tabular-nums;
```

```css interactive-example-choice
font-variant: small-caps slashed-zero;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
    <table>
      <tr>
        <td><span class="tabular">0O</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`font-variant-alternates`](/ja/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-caps`](/ja/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/ja/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/ja/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [`font-variant-position`](/ja/docs/Web/CSS/Reference/Properties/font-variant-position)

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
  - : [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures) を `none` に、その他の個別指定プロパティを `normal` に、それぞれの初期値を設定します。

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : 個別指定の [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures) プロパティに関するキーワードを指定します。指定可能な値は、 `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual`, `no-contextual` です。

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : 個別指定の [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures) プロパティに関するキーワードや特性を指定します。

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : 個別指定の [`font-variant-caps`](/ja/docs/Web/CSS/Reference/Properties/font-variant-caps) プロパティに関するキーワードや特性を指定します。 `small-caps` の値は、 {{cssxref("font")}} 一括指定プロパティ内で有効な唯一の `normal` 以外のフォントバリアントです。

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : 個別指定の [`font-variant-numeric`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric) プロパティに関するキーワードを指定します。指定可能な値は、 `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, `slashed-zero` です。

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : 個別指定の [`font-variant-east-asian`](/ja/docs/Web/CSS/Reference/Properties/font-variant-east-asian) プロパティに関するキーワードを指定します。指定可能な値は、 `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby` です。

- `sub`, `super`
  - : 個別指定の [`font-variant-position`](/ja/docs/Web/CSS/Reference/Properties/font-variant-position) プロパティに関するキーワードや特性を指定します。

- `text`, `emoji`, `unicode`
  - : 個別指定の [`font-variant-emoji`](/ja/docs/Web/CSS/Reference/Properties/font-variant-emoji) プロパティに関するキーワードや特性を指定します。

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

- [`text-transform`](/ja/docs/Web/CSS/Reference/Properties/text-transform)
- [`text-combine-upright`](/ja/docs/Web/CSS/Reference/Properties/text-combine-upright)
- [`text-orientation`](/ja/docs/Web/CSS/Reference/Properties/text-orientation)
