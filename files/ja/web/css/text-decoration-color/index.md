---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

**`text-decoration-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{ cssxref("text-decoration-line") }} でテキストに追加された装飾の色を設定します。

色はプロパティ値のスコープにある装飾、すなわち下線、上線、打消し線、それにスペルミスに印をつけるために使われるような波線などに適用されます。

{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}

CSS はそれぞれの線種ごとに固有の色を指定する仕組みを直接は持っていません。しかしながら、この効果は要素を入れ子にして、それぞれの要素毎に ({{cssxref("text-decoration-line")}} プロパティで) 異なる線種を適用し、 (`text-decoration-color` で) 線の色を指定することで実現できます。

## 構文

```css
/* <color> 値 */
text-decoration-color: currentcolor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgb(255 128 128 / 50%);
text-decoration-color: transparent;

/* グローバル値 */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: revert;
text-decoration-color: revert-layer;
text-decoration-color: unset;
```

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 装飾線の色です。

## アクセシビリティ

テキストの色、テキストが置かれている背景、テキストの装飾線の間のコントラスト比が、弱視の人がページの内容を読むことができるように十分に高いことを確認ことが重要です。色のコントラスト比は、テキストと背景の色の輝度を比較して決定されます。

色だけで意味を伝えるべきではありません。例えば、テキストの色と text-decoration-color の変更だけでは、リンクにフォーカスがあることを示すのに十分ではありません。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```html-nolint
<p>
  この段落の中には、注意を喚起したい<s>誤ったテキスト</s>があります。
</p>
```

```css
p {
  text-decoration-line: underline;
  text-decoration-color: cyan;
}

s {
  text-decoration-line: line-through;
  text-decoration-color: red;
  text-decoration-style: wavy;
}
```

{{ EmbedLiveSample('Examples') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 複数の行内装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使った方が便利かもしれません。
- {{cssxref("&lt;color&gt;")}} データ型
- 色に関する他のプロパティ: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
