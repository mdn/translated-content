---
title: "::selection"
slug: Web/CSS/::selection
---

{{CSSRef}}

**`::selection`** は CSS の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、ユーザーが (テキストをマウスでクリックやドラッグすることで) 選択した文書の一部にスタイルを適用します。

```css
::selection {
  background-color: cyan;
}
```

## 利用できるプロパティ

`::selection` 擬似要素では、特定の CSS プロパティのみが利用できます。

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} および関連プロパティ
- {{CSSxRef("text-shadow")}}
- {{SVGAttr("stroke-color")}}, {{SVGAttr("fill-color")}}, {{SVGAttr("stroke-width")}}

特に、 {{CSSxRef("background-image")}} は無視されます。

## 構文

```css
/* 従来の Firefox の構文 (バージョン 61 以前) */
::-moz-selection

{{CSSSyntax}}
```

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

## アクセシビリティの考慮

**純粋に美的な理由により、選択されたテキストのスタイルを上書きしないでください。** — ユーザーは必要に応じてカスタマイズすることができます。認知の問題を抱えている人や、技術的な知識に弱い人にとって、予期せず選択のスタイルが変更されると、機能の理解が妨げられる可能性があります。

上書きする場合は、選択部分のテキストと背景の色の**コントラスト比**が、弱視の人でも読める程度に高いことを確認することが重要です。

色のコントラスト比は、プレイスホルダーの文字列と入力欄の背景色の値とを比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/intro/wcag) によれば、文字列コンテンツで **4.5:1** 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。 (WCAG は、大きめの文字列とは、[太字](/ja/docs/Web/CSS/font-weight)ならば `18.66px` 以上、または `24px` 以上と定義しています。)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 仕様書

{{Specifications}}

> **メモ:** `::selection` は CSS Selectors Level 3 の草稿にはありましたが、 (特に要素がネストされた場合の) 動作の仕様化が途中であることや相互運用性が確保されなかったこと [(W3C Style mailing list での議論に基づく)](https://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html)から、勧告の過程で削除されました。これは [Pseudo-Elements Level 4](https://dev.w3.org/csswg/css-pseudo-4/) で再導入されています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("pointer-events")}} - 要素でどのイベントが有効かを制御する
