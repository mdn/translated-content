---
title: color
slug: Web/CSS/Reference/Properties/color
original_slug: Web/CSS/color
l10n:
  sourceCommit: cd3fbb8b10186d3466ab16d590978d5c10882875
---

**`color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のテキストや[テキスト装飾](/ja/docs/Web/CSS/Reference/Properties/text-decoration)における前景色の[色の値](/ja/docs/Web/CSS/Reference/Values/color_value)を設定し、 [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) の値を設定します。`currentColor` は他のプロパティの間接的な値として使用される可能性があり、 {{cssxref("border-color")}} のような他の色に関するプロパティの既定値にもなったりします。

{{InteractiveExample("CSS デモ: color")}}

```css interactive-example-choice
color: rebeccapurple;
```

```css interactive-example-choice
color: #00a400;
```

```css interactive-example-choice
color: rgb(214 122 127);
```

```css interactive-example-choice
color: hsl(30deg 82% 43%);
```

```css interactive-example-choice
color: hsl(237deg 74% 33% / 61%);
```

```css interactive-example-choice
color: hwb(152deg 0% 58% / 70%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <p id="example-element">
      London. Michaelmas term lately over, and the Lord Chancellor sitting in
      Lincoln's Inn Hall. Implacable November weather.
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.5em;
}

.example-container {
  background-color: white;
  padding: 10px;
}
```

HTML における色の使用の概要については、[CSS を使用した HTML 要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)をご覧ください。

## 構文

```css
/* キーワード値 */
color: currentColor;

/* <named-color> 値 */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> 値 */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> と古い <rgba()> 値 */
color: rgb(34, 12, 64);
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.6);
color: rgb(34.6 12 64 / 60%);
color: rgba(34.6 12 64 / 60%);

/* <hsl()> と古い <hsla()> 値 */
color: hsl(30, 100%, 50%);
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.2 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* <hwb()> 値 */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(0.25turn 0% 40% / 50%);

/* グローバル値 */
color: inherit;
color: initial;
color: revert;
color: revert-layer;
color: unset;
```

`color` プロパティは単一の {{cssxref("&lt;color&gt;")}} 値で指定します。

なお、値は単一の色でなければなりません。 {{cssxref("&lt;gradient&gt;")}} は実際の型が {{cssxref("&lt;image&gt;")}} であるため使用できません。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 要素のテキストや装飾部分の色を設定します。
- [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード)
  - : 要素の`color`プロパティの値に色を設定します。ただし、`color`の値として設定された場合、`currentColor`は`inherit`として扱われます。

## アクセシビリティ

背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページのコンテンツを読むことができる程度に高いことを確認することが重要です。

色のコントラスト比は、テキストおよび背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/Web/CSS/Reference/Properties/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストを赤くする

以下の例はすべて、要素のテキストを赤色にします。

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255 0 0);
}
p {
  color: rgb(100% 0% 0%);
}
p {
  color: hsl(0 100% 50%);
}

/* 50% 透過 */
p {
  color: #ff000080;
}
p {
  color: rgb(255 0 0 / 50%);
}
p {
  color: hsl(0 100% 50% / 50%);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 他の色に関するプロパティ: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("print-color-adjust")}}
- SVG の {{SVGAttr("color")}} 属性
- {{CSSXref("color_value/color")}} 関数
- [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
- [WCAG: 色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
