---
title: ::selection
slug: Web/CSS/Reference/Selectors/::selection
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`::selection`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、ユーザーが (テキストをマウスでクリックやドラッグすることで) 選択した文書の一部にスタイルを適用します。

`::selection` 擬似要素は、すべての表示強調擬似要素に共通する特別な継承モデルに従います。この継承の仕組みの詳細については、[表示強調擬似要素の継承](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance)の節を参照してください。

{{InteractiveExample("CSS デモ: ::selection", "tabbed-shorter")}}

```css interactive-example
p::selection {
  color: red;
  background-color: yellow;
}
```

```html interactive-example
<p>
  この段落の一部を選択し、その外観がどのように変化するかを確認してください。
</p>
```

## 利用できるプロパティ

`::selection` 擬似要素では、特定の CSS プロパティのみが利用できます。

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} および関連プロパティ
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}}, {{CSSxRef("-webkit-text-stroke-width")}}

特に、 {{CSSxRef("background-image")}} は無視されます。

## 構文

```css
::selection {
  /* ... */
}
```

## アクセシビリティ

**純粋に美的な理由により、選択されたテキストのスタイルを上書きしないでください。** — ユーザーは必要に応じてカスタマイズすることができます。認知の問題を抱えている人や、技術的な知識に弱い人にとって、予期せず選択のスタイルが変更されると、機能の理解が妨げられる可能性があります。

上書きする場合は、選択部分のテキストと背景の色の**コントラスト比**が、弱視の人でも読める程度に高いことを確認することが重要です。

色のコントラスト比は、プレイスホルダーの文字列と入力欄の背景色の値とを比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) によれば、文字列コンテンツで **4.5:1** 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。 (WCAG は、大きめの文字列とは、[太字](/ja/docs/Web/CSS/Reference/Properties/font-weight)ならば `18.66px` 以上、または `24px` 以上と定義しています。)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 例

### HTML

```html
この文字列は選択すると特殊なスタイルになります。
<p>こちらの段落も文字列を選択してみてください。</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* 選択されたテキストを赤の背景に金色とする */
::selection {
  color: gold;
  background-color: red;
}

/* 選択されたテキストを青の背景に白とする */
p::selection {
  color: white;
  background-color: blue;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("pointer-events")}} - 要素でどのイベントが有効かを制御する
