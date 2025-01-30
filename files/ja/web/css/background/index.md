---
title: background
slug: Web/CSS/background
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

**`background`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、色、画像、原点と寸法、反復方法など、背景に関するすべてのスタイルプロパティを一括で設定します。 `background` 一括指定プロパティの値宣言で設定されていない成分のプロパティは、既定値に設定されます。

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
background: revert-layer;
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

- `<bg-size>` の値は `<position>` の直後に '/' の文字で区切って含めなければなりません。例: `center/80%`
- `<box>` の値は 0 ～ 2 回含めることができます。1 回の場合は {{cssxref("background-origin")}} と {{cssxref("background-clip")}} の両方に設定されます。2 回の場合は、1 つ目は {{cssxref("background-origin")}} に、2 つ目は {{cssxref("background-clip")}} に設定されます。
- `<background-color>` の値は最後のレイヤーの指定でのみ含めることができます。

### 値

- `<attachment>`
  - : {{cssxref("background-attachment")}} を参照。既定値は `scroll` です。
- `<box>`
  - : {{cssxref("background-clip")}} および {{cssxref("background-origin")}} を参照。既定値はそれぞれ `border-box` および `padding-box` です。
- `<background-color>`
  - : {{cssxref("background-color")}} を参照。既定値は `transparent` です。
- `<bg-image>`
  - : {{Cssxref("background-image")}} を参照。既定値は `none` です。
- `<position>`
  - : {{cssxref("background-position")}} を参照。既定値は 0% 0% です。
- `<repeat-style>`
  - : {{cssxref("background-repeat")}} を参照。既定値は `repeat` です。
- `<bg-size>`
  - : {{cssxref("background-size")}} を参照。既定値は `auto` です。

以下の 3 行の CSS は等価です。

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要であり、スクリーンリーダーはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 例

### 色キーワードと画像による背景の設定

#### HTML

```html live-sample___setting_backgrounds_with_color_keywords_and_images
<p class="top-banner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">これは段落です</p>
<p></p>
```

#### CSS

```css live-sample___setting_backgrounds_with_color_keywords_and_images
.warning {
  background: pink;
}

.top-banner {
  background: url("star-solid.gif") #99f repeat-y fixed;
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
- [グラデーションの使用](/ja/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [複数の背景の使用](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
