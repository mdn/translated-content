---
title: color
slug: Web/CSS/color
tags:
  - CSS
  - CSS 色
  - CSS プロパティ
  - CSS テキスト
  - HTML 色
  - HTML 
  - レイアウト
  - リファレンス
  - Styling HTML
  - Styling text
  - ウェブ
  - color
  - recipe:css-property
browser-compat: css.properties.color
translation_of: Web/CSS/color
---
{{CSSRef}}

CSS の **`color`** プロパティは、要素のテキストや[テキスト装飾](/ja/docs/Web/CSS/text-decoration)における前景色の[色の値](/ja/docs/Web/CSS/color_value)を設定し、 {{cssxref("color_value#currentcolor_keyword", "currentcolor")}} の値を設定します。`currentcolor` は*他の*プロパティの間接的な値として使用される可能性があり、 {{cssxref("border-color")}} のような他の色に関するプロパティの既定値にもなったりします。

{{EmbedInteractiveExample("pages/css/color.html")}}

HTML における色の使用の概要については、[CSS を使用した HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)をご覧ください。

## 構文

```css
/* キーワード値 */
color: currentcolor;

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

/* <rgb()> 値 */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()> 値 */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* グローバル値 */
color: inherit;
color: initial;
color: revert;
color: unset;
```

`color` プロパティは単一の {{cssxref("&lt;color&gt;")}} 値で指定します。

なお、値は {{cssxref("color")}} の形でなければなりません。 {{cssxref("&lt;gradient&gt;")}} は実際の型が {{cssxref("&lt;image&gt;")}} であるため使用できません。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 要素のテキストや装飾部分の色を設定します。

## アクセシビリティの考慮

背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページのコンテンツを読むことができる程度に高いことを確認することが重要です。

色のコントラスト比は、テキストおよび背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/intro/wcag) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/Web/CSS/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストを赤くする

以下の例はすべて、要素のテキストを赤色にします。

```css
p { color: red; }
p { color: #f00; }
p { color: #ff0000; }
p { color: rgb(255,0,0); }
p { color: rgb(100%, 0%, 0%); }
p { color: hsl(0, 100%, 50%); }

/* 50% 透過 */
p { color: #ff000080; }
p { color: rgba(255, 0, 0, 0.5); }
p { color: hsla(0, 100%, 50%, 0.5); }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 他の色に関するプロパティ: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("color-adjust")}}
- [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)
