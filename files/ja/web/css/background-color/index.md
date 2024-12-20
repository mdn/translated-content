---
title: background-color
slug: Web/CSS/background-color
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**`background-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背景色を設定します。

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
background-color: #1fe0; /* 完全透過の短縮形 */
background-color: #11ffeeff; /* 完全不透過 */
background-color: #1fef; /* 完全不透過の短縮形 */

/* RGB 値 */
background-color: rgb(255 255 128); /* 不透過 */
background-color: rgba(117 190 218 / 50%); /* 50% 不透過 */

/* HSL 値 */
background-color: hsl(50 33% 25%); /* 不透過 */
background-color: hsl(50 33% 25% / 75%); /* 75% 不透過、すなわち 25% 透過 */

/* 特殊なキーワード値 */
background-color: currentcolor;
background-color: transparent;

/* グローバル値 */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

`background-color` プロパティは単一の `<color>` 値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 背景の単一色 (uniform color) を表します。指定されていれば {{cssxref("background-image")}} の背後に描画されますが、画像に透明な部分があれば色が見えます。

## アクセシビリティ

背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページのコンテンツを読むことができる程度の高さであることを確認することが重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/Web/CSS/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ボックスへの色付け

この例では、さまざまな CSS の {{cssxref("color_value", "&lt;color&gt;")}} 値を使用して、 HTML の {{HTMLelement("div")}} 要素に `background-color` を適用する方法を示しています。

#### HTML

```html live-sample___colorize_boxes
<div class="example-one">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="example-two">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="example-three">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css live-sample___colorize_boxes
.example-one {
  background-color: transparent;
}

.example-two {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.example-three {
  background-color: #777799;
  color: #ffffff;
}
```

#### 結果

{{EmbedLiveSample("Colorize boxes", 200, 150)}}

### 表への色付け

この例では、 `background-color` を HTML の {{HTMLelement("table")}} 要素（{{HTMLelement("tr")}} の行や {{HTMLelement("td")}} のセルを含む）に使用する方法を示しています。

#### HTML

```html live-sample___colorize_tables
<table>
  <tr id="r1">
    <td id="c11">11</td>
    <td id="c12">12</td>
    <td id="c13">13</td>
  </tr>
  <tr id="r2">
    <td id="c21">21</td>
    <td id="c22">22</td>
    <td id="c23">23</td>
  </tr>
  <tr id="r3">
    <td id="c31">31</td>
    <td id="c32">32</td>
    <td id="c33">33</td>
  </tr>
</table>
```

#### CSS

```css live-sample___colorize_tables
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
}
#r1 {
  background-color: lightblue;
}
#c12 {
  background-color: cyan;
}
#r2 {
  background-color: grey;
}
#r3 {
  background-color: olive;
}
```

#### 結果

{{EmbedLiveSample('Colorize tables', "100%", "100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [複数の背景](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
