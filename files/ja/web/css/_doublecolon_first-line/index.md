---
title: '::first-line (:first-line)'
slug: Web/CSS/::first-line
tags:
  - CSS
  - レイアウト
  - 擬似要素
  - リファレンス
  - セレクター
browser-compat: css.selectors.first-line
translation_of: Web/CSS/::first-line
---
{{CSSRef}}

**`::first-line`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、[ブロックレベル要素](/ja/docs/Web/CSS/Visual_formatting_model#block-level_elements_and_block_boxes)の最初の行にスタイルを適用します。なお、最初の行の長さは要素の幅、文書の幅、文字列のフォントの大きさなど、様々な要因に左右されます。

```css
/* <p> の最初の行を選択 */
p::first-line {
  color: red;
}
```

> **Note:** CSS3 では `::first-line` という (二重コロン付き) 表記が、[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)と[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を見分けやすくするために導入されました。ブラウザーでは CSS2 で導入された `:first-line` も使用できます。

## 利用可能なプロパティ

`::first-line` 擬似要素では、一部の CSS プロパティのみが利用できます。

- フォントに関する全プロパティ: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, {{Cssxref("font-family")}}
- 背景に関する全プロパティ: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, {{cssxref("background-blend-mode")}}
- {{cssxref("color")}} プロパティ
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("vertical-align")}}

## 構文

{{csssyntax}}

## 例

### HTML

```html
<p>スタイルはこの段落の最初の行にのみ適用されます。
その後のすべての文字列は普通のスタイルになります。分かりますか？</p>

<span>ブロックレベル要素ではないので、この文字列の最初の行は、
特殊なスタイルになりません。</span>
```

### CSS

```css
::first-line {
  color: blue;
  text-transform: uppercase;

  /* 警告: これらを使用しないでください */
  /* ::first-line 擬似要素では多くのプロパティが無効になります */
  margin-left: 20px;
  text-indent: 20px;
}
```

### 結果

{{EmbedLiveSample('Examples', 350, 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::first-letter")}}
