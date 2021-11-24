---
title: background
slug: Web/CSS/background
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.background
translation_of: Web/CSS/background
---
{{CSSRef("CSS Background")}}

**`background`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、色、画像、原点と寸法、反復方法など、背景に関するすべてのスタイルプロパティを一括で設定します。

{{EmbedInteractiveExample("pages/css/background.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

## 構文

```css
/* <background-color> を使用 */
background: green;

/* <bg-image> と <repeat-style> を使用 */
background: url("test.jpg") repeat-y;

/* <box> と <background-color> を使用 */
background: border-box red;

/* 単一の画像、中央寄せかつ縮小 */
background: no-repeat center/80% url("../img/image.png");

/* グローバル値 */
background: inherit;
background: initial;
background: revert;
background: unset;
```

`background` プロパティは1つまたは複数の背景レイヤーをカンマで区切って指定します。

それぞれのレイヤーの構文は以下の通りです。

- それぞれのレイヤーは、以下の値をそれぞれ 0 ～ 1 回含めることができます。

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<repeat-style>`

- `<bg-size>` の値は `<position>` の直後に '/' の文字で区切って含めなければなりません。例: "`center/80%`"
- `<box>` の値は 0 ～ 2 回含めることができます。1 回の場合は {{cssxref("background-origin")}} と {{cssxref("background-clip")}} の両方に設定されます。2 回の場合は、1 つ目は {{cssxref("background-origin")}} に、2 つ目は {{cssxref("background-clip")}} に設定されます。
- `<background-color>` の値は最後のレイヤーの指定でのみ含めることができます。

### 値

- `<attachment>`
  - : {{cssxref("background-attachment")}} を参照
- `<box>`
  - : {{cssxref("background-clip")}} および {{cssxref("background-origin")}} を参照
- `<background-color>`
  - : {{cssxref("background-color")}} を参照
- `<bg-image>`
  - : {{Cssxref("background-image")}} を参照
- `<position>`
  - : {{cssxref("background-position")}} を参照
- `<repeat-style>`
  - : {{cssxref("background-repeat")}} を参照
- `<bg-size>`
  - : {{cssxref("background-size")}} を参照。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に画面リーダーにとって重要であり、画面リーダーはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_backgrounds_with_color_keywords_and_images">色キーワードと画像による背景の設定</h3>

#### HTML

```html
<p class="topbanner">
  Starry sky<br/>
  Twinkle twinkle<br/>
  Starry sky
</p>
<p class="warning">Here is a paragraph<p>
```

#### CSS

```css
.warning {
  background: pink;
}

.topbanner {
  background: url("starsolid.gif") #99f repeat-y fixed;
}
```

#### 結果

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("box-decoration-break")}}
- [グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [複数の背景の使用](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
