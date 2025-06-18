---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**`font-feature-settings`** は CSS の記述子で、 {{cssxref("@font-face")}} アットルールで定義されたフォントに使用する初期設定を定義します。さらに、この記述子を使用して、 `@font-face` で定義されたフォントの合字、スモールキャップ、スワッシュなどの字体フォント機能を制御することができます。この記述子の値は、グローバルキーワード値を除いて {{cssxref("font-feature-settings")}} プロパティと同じです。

この記述子は、要素全体ではなく `@font-face` アットルールのフォントオブジェクトに機能値を設定するので、この記述子を使用してレンダリングされるのは要素内の一部の字体だけかもしれません。

## 構文

```css
/* 既定の設定を使用 */
font-feature-settings: normal;

/* OpenType 特性タグの値を設定 */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
```

### 値

この記述子は、キーワード `normal` または `<feature-tag-value>` 値のカンマ区切りリストとして指定します。テキストをレンダリングするとき、 OpenType の `<feature-tag-value>` 値のリストは、テキストレイアウトエンジンに渡されてフォント特性を有効または無効にします。

- `normal`
  - : テキストが既定のフォント設定でレイアウトされることを示します。これが既定値です。
- `<feature-tag-value>`

  - : タグ名とオプション値からなる、空間区切りのタプルを表します。

    タグ名は {{cssxref("&lt;string&gt;")}} で、常に 4 つの {{Glossary("ASCII")}} 文字からなります。タグ名の文字数が多かったり少なかったり、 `U+20` – `U+7E` コードポイント範囲外の文字を格納している場合、記述子は無効になります。

    オプション値は正の整数か、キーワード `on` または `off` にすることができます。キーワード `on` および `off` は、それぞれ値 `1` および `0` と同義語です。値が設定されていない場合は、既定で `1` になります。論理値でない OpenType 特性 （[stylistic alternates](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt) など）では、この値は選択する具体的な字体を意味し、論理値の特性の場合は、その特性のオンとオフを意味します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### @font-face アットルールを使用してすわっしゅ字体を有効化

この例では、タグ名 `swsh` と論理値 `1` が、 `@font-face` アットルールの `font-feature-settings` 記述子の値として使用されています。

#### HTML

```html live-sample___enabling_swash_glyphs_using_the_font-face_at-rule
<p class="swash-off">Swash is off here</p>
<p class="swash-on">Swash is on here</p>
```

#### CSS

```css live-sample___enabling_swash_glyphs_using_the_font-face_at-rule
@font-face {
  font-family: MonteCarlo;
  src: url("montecarlo-regular.woff2");
}
@font-face {
  font-family: MonteCarlo2;
  src: url("montecarlo-regular.woff2");
  font-feature-settings: "swsh" 1;
}
p {
  font-size: 3rem;
  margin: 0.7rem 3rem;
}
.swash-off {
  font-family: MonteCarlo;
}
.swash-on {
  font-family: MonteCarlo2;
}
```

#### 結果

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

1 行目は [MonteCarlo](https://github.com/googlefonts/monte-carlo) フォントの既定の装飾的なデザインを示し、 2 行目は既定の字体を[スワッシュ](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh)字体に置き換えています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の `@font-face` 記述子: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- 関連フォントプロパティ: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}
