---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
---

{{CSSRef}}

**`unicode-range`** は CSS の記述子で、 {{cssxref("@font-face")}} で定義されたフォントから使用される特定の文字範囲を設定し、現在のページで使用できるようにします。ページがこの範囲内の文字を使用しない場合、フォントはダウンロードされません。少なくとも 1 つの文字を使用すると、フォント全体がダウンロードされます。

## 構文

```css
/* <unicode-range> 値 */
unicode-range: U+26; /* 単一の符号位置 */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF; /* 符号位置の範囲 */
unicode-range: U+4??; /* ワイルドカードの範囲 */
unicode-range: U+0025-00FF, U+4??; /* 複数の値 */
```

### 値

- **_単一の符号位置_**
  - : 単一の Unicode 符号位置。例: `U+26`
- **_符号位置の範囲_**
  - : Unicode 符号位置の範囲。例えば、 `U+0025-00FF` は、 *`U+0025` から `U+00FF` の範囲内の全文字を含む*こと意味します。
- **_ワイルドカードの範囲_**
  - : ワイルドカード文字を含む Unicode 符号位置の範囲。 `'?'` 文字を使用します。例えば、`U+4??` は *`U+400` から `U+4FF` の範囲の全文字を含む*ことを意味します。

## 解説

この記述子の目的は、ブラウザーが特定のページのテキストコンテンツに必要なフォントリソースをダウンロードするだけで済むように、フォントリソースをセグメント化できるようにすることです。たとえば、ローカライズが多いサイトでは、英語、ギリシャ語、日本語のフォントリソースを個別に提供できます。英語版のページを閲覧しているユーザーには、ギリシャ語と日本語のフォントのフォントリソースをダウンロードする必要はなく、帯域幅を節約できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 1 文字だけ異なるフォントを使用

異なるフォントでスタイルを設定したいアンパサンド（アンド記号）を含む 1 つの {{HTMLElement("div")}} 要素を持つだけの HTML を作成します。明確にするために、テキストにはサンセリフフォントの _Helvetica_ を使用し、アンパサンドにはセリフフォントの _Times New Roman_ を使用します。

CSS において、1 つの文字だけを含んだ完全に別個の {{cssxref("@font-face")}} を定義していることが分かります。つまりこの文字だけがこのフォントでスタイルされることになります。これはアンパサンドを {{HTMLElement("span")}} 内に入れて別のフォントを適用することによっても可能ですが、それには追加の要素とルールセットが必要です。

#### HTML

```html
<div>Me & You = Us</div>
```

#### CSS

```css
@font-face {
  font-family: "Ampersand";
  src: local("Times New Roman");
  unicode-range: U+26;
}

div {
  font-size: 4em;
  font-family: Ampersand, Helvetica, sans-serif;
}
```

#### 結果

{{EmbedLiveSample("Using_a_different_font_for_a_single_character", 500,104)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
