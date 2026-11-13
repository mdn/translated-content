---
title: ::first-line
slug: Web/CSS/Reference/Selectors/::first-line
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`::first-line`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[ブロックコンテナー](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model#ブロックコンテナー)の先頭行にスタイルを適用します。

{{InteractiveExample("CSS デモ: ::first-line", "tabbed-shorter")}}

```css interactive-example
p::first-line {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}
```

```html interactive-example
<p>
  In warm ocean waters around the world, you may see a strange sight: A fish
  leaping from the water and soaring dozens of meters before returning to the
  ocean's depths. Early Mediterranean sailors thought these flying fish returned
  to the shore at night to sleep, and therefore called this family of marine
  fish Exocoetidae.
</p>
```

`::first-line` の効果は、要素内のテキストの先頭行の長さとコンテンツによって制限されます。先頭行の長さは、要素の幅、文書の幅、テキストのフォントサイズなど、多くの要因に依存します。要素の最初の子（先頭行の最初の部分となる）がインラインテーブルなどのインラインブロックレベル要素である場合、`::first-line` は効果を持ちません。

> [!NOTE]
> [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-line) では二重コロン (`::`) を導入し、[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を単一コロン (`:`) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と見分けやすくしています。ブラウザーは `::first-line` と、CSS2 で導入された `:first-line` の両方を受け付けます。

CSS の {{CSSXref("background")}} の目的上、`::first-line` 擬似要素はインラインレベル要素と同様に扱われます。つまり、左揃えの先頭行では、背景が右マージンまで完全に広がらない場合があります。

## 利用可能なプロパティ

`::first-line` 擬似要素では、一部の CSS プロパティのみが利用できます。

- フォントに関する全プロパティ: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, {{Cssxref("font-family")}}
- 背景に関する全プロパティ: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, {{cssxref("background-blend-mode")}}
- {{cssxref("color")}} プロパティ
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("vertical-align")}}

## 構文

```css
::first-line {
  /* ... */
}
```

## 例

### 段落の先頭行のスタイル設定

#### HTML

```html-nolint
<p>
  スタイルはこの段落の先頭行にのみ適用されます。
  その後のすべての文字列は普通のスタイルになります。分かりますか？
</p>

<span>
  ブロックレベル要素ではないので、この文字列の先頭行は、特殊なスタイルになりません。
</span>
```

#### CSS

```css hidden
* {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
::first-line {
  color: blue;
  font-weight: bold;

  /* 警告: これらを使用しないでください */
  /* ::first-line 擬似要素では多くのプロパティが無効になります */
  margin-left: 20px;
  text-indent: 20px;
}
```

### 結果

{{EmbedLiveSample('styling_first_line_of_a_paragraph', 350, 130)}}

### SVG の text 要素の先頭行をスタイル設定

この例では、SVG の {{SVGElement("text")}} 要素の先頭行を `::first-line` 擬似要素を使用してスタイル設定します。

> [!NOTE]
> 執筆時点で、この機能は[対応が限定されています](#ブラウザーの互換性)。

#### HTML

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20">Here is an English paragraph
that is broken into multiple lines
in the source code so that it can
be more easily read and edited
in a text editor.
  </text>
</svg>
```

#### CSS

SVG の `<text>` 要素を複数行に折り返すには、{{cssxref("white-space", "", "#svg_の_text_要素内の複数行")}} CSS プロパティを使用します。その後、`::first-line` 擬似要素で最初の行を選択します。

```css hidden
text {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
text {
  white-space: break-spaces;
}

text::first-line {
  fill: blue;
  font-weight: bold;
}
```

#### 結果

{{EmbedLiveSample("styling_the_first_line_of_a_SVG_text_element", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::first-letter")}}
- {{cssxref("white-space")}}
