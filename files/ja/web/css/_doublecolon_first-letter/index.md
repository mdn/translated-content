---
title: '::first-letter (:first-letter)'
slug: Web/CSS/::first-letter
tags:
  - CSS
  - レイアウト
  - 擬似要素
  - リファレンス
  - セレクター
browser-compat: css.selectors.first-letter
translation_of: Web/CSS/::first-letter
---
{{CSSRef}}

**`::first-letter`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、[ブロックレベル要素](/ja/docs/Web/CSS/Visual_formatting_model#block-level_elements_and_block_boxes)の最初の行の最初の文字にスタイルを適用します。ただし、最初の文字より前に他のコンテンツ (画像やインラインテーブルなど) がないときに限ります。

```css
/* <p> の最初の文字を選択します */
p::first-letter {
  font-size: 130%;
}
```

要素の最初の文字は、常に単純に識別できるとは限りません。

- 最初の文字のすぐ前後にある記号 (punctuation) も範囲に含まれます。記号とは、 Unicode の _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf), and _other punctuation_ (Po) の各クラスで定義されているすべての文字です。
- 言語によっては常に一緒に大文字化される連字があります。例えばオランダ語の `IJ` などです。この場合、連字の両方の文字が `::first-letter` 擬似要素で選択されます。
- {{ cssxref("::before") }} 擬似要素と {{ cssxref("content") }} プロパティの組み合わせにより、要素の先頭にテキストが挿入されることがあります。この場合、 `::first-letter` は生成されたこのコンテンツの最初の文字に一致します。

> **Note:** CSS3 では[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)と[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を見分けやすくするために、 `::first-letter` の表記法（二重コロン付き）が導入されました。ブラウザーでは CSS2 で導入された `:first-letter` も使用できます。
>
> オランダ語の `IJ` のような連字に対するブラウザーの対応は貧弱です。下記の互換性一覧表で、現在の対応状況を確認してください。

## 利用可能なプロパティ

`::first-letter` 擬似要素では、一部の CSS プロパティのみが利用できます。

- フォントの全プロパティ: {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} and {{ Cssxref("font-family") }}
- 背景の全プロパティ: {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, and {{cssxref("background-blend-mode")}}
- マージンの全プロパティ: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}
- パディングの全プロパティ: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}
- 境界の全プロパティ: 一括指定プロパティである {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, および個別指定プロパティ
- {{ cssxref("color") }} プロパティ
- {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} （`float` が `none` の場合のみ） の CSS プロパティ

## 構文

{{csssyntax}}

## 例

### 単純なドロップキャップ

この例では、 `::first-letter` 擬似要素を使用して、 `<h2>` の直後の段落の最初の文字にドロップキャップ効果を作成します。

#### HTML

```html
<h2>My heading</h2>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### 結果

{{ EmbedLiveSample('Simple_drop_cap', '100%', 350) }}

### 特殊な記号と非ラテン文字への効果

この例では、特殊な記号や非ラテン文字に対する `::first-letter` の効果を説明しています。

#### HTML

```html
<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「先頭が特殊区切り記号です。</p>
<p>《先頭が特殊区切り記号です。</p>
<p>“先頭が特殊区切り記号です。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### 結果

{{ EmbedLiveSample('Effect_on_special_punctuation_and_non-Latin_characters', '100%', 350) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::first-line")}}
