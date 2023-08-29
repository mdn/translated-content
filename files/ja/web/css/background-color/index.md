---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`background-color`** プロパティは、要素の背景色を設定します。

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## 構文

```css
/* キーワード値 */
background-color: red;
background-color: indigo;

/* 16 進の値 */
background-color: #bbff00; /* 完全不透過 */
background-color: #bf0; /* 完全不透過の短縮形 */
background-color: #11ffee00; /* 完全透過 */
background-color: #1fe0; /* 完全透過の短縮形  */
background-color: #11ffeeff; /* 完全不透過 */
background-color: #1fef; /* 完全不透過の短縮形  */

/* RGB 値 */
background-color: rgb(255, 255, 128); /* 不透過 */
background-color: rgba(117, 190, 218, 0.5); /* 50% 不透過 */

/* HSL 値 */
background-color: hsl(50, 33%, 25%); /* 不透過 */
background-color: hsla(50, 33%, 25%, 0.75); /* 75% 不透過 */

/* 特殊なキーワード値 */
background-color: currentcolor;
background-color: transparent;

/* グローバル値 */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: unset;
```

`background-color` プロパティは単一の `<color>` 値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 背景の単一色 (uniform color) を表します。指定されていれば {{cssxref("background-image")}} の背後に描画されますが、画像に透明な部分があれば色が見えます。

## アクセシビリティの考慮事項

背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページのコンテンツを読むことができる程度の高さであることを確認することが重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/intro/wcag) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/Web/CSS/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: transparent;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### 結果

{{EmbedLiveSample("Examples", 200, 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [複数の背景](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- [CSS を使用した HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
