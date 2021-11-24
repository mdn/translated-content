---
title: background-image
slug: Web/CSS/background-image
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.background-image
translation_of: Web/CSS/background-image
---
{{CSSRef}}

**`background-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に 1 つ以上の背景画像を設定します。

{{EmbedInteractiveExample("pages/css/background-image.html")}}

画像はお互いの上に積み重ねるコンテキストレイヤーに描画されます。最初に指定されたレイヤーが、ユーザーに対し最も手前にあるかのように描画されます。

要素の[境界](/ja/docs/Web/CSS/border)は背景画像よりも上、 {{cssxref("background-color")}} は背景画像より下に描画されます。画像がボックスとその境界に対し相対的にどう描画されるかは、 {{cssxref("background-clip")}} および {{cssxref("background-origin")}} プロパティによって定義されます。

指定された画像を描画することができない (例えば、指定された URI が指し示すファイルをロードできない) 場合、ブラウザーはその指定を `none` 値であるかのように処理します。

> **Note:** たとえ画像が不透明で通常は色が表示されないとしても、ウェブ開発者は常に {{cssxref("background-color")}} を指定すべきです。例えばネットワークが切断された場合など、もし画像が読み込めなかったときに、背景色がフォールバックとして使われます。

## 構文

それぞれの背景画像は、キーワード `none` または {{cssxref("&lt;image&gt;")}} 値として指定されます。

複数の背景画像を指定するには、複数の値をカンマで区切って指定してください。

```css
background-image:
  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
  url('catfront.png');

/* グローバル値 */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: unset;
```

### 値

- `none`
  - : 画像を用いないことを表すキーワード。
- `<image>`
  - : 表示する背景を記述する {{cssxref("&lt;image&gt;")}}。[複数の背景](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)に対応している場合は、カンマ区切りで複数指定することができます。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Layering_background_images">背景画像の重ね合わせ</h3>

星の画像は一部透過となっており、猫の画像の上に重ねられている点に注意してください。

#### HTML

```html
<div>
  <p class="catsandstars">
    This paragraph is full of cats<br />and stars.
  </p>
  <p>This paragraph is not.</p>
  <p class="catsandstars">
    Here are more cats for you.<br />Look at them!
  </p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-size: 1.5em;
  color: #FE7F88;
  background-image: none;
  background-color: transparent;
}

div {
  background-image:
      url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image:
      url("startransparent.gif"),
      url("catfront.png");
  background-color: transparent;
}
```

#### 結果

{{EmbedLiveSample('Layering_background_images')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS での画像スプライトの実装](/ja/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- {{HTMLElement("img")}}
- 画像に関するデータ型: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}
- 画像に関する関数:

  - {{cssxref("cross-fade()")}}
  - {{cssxref("element()")}}
  - {{cssxref("image/image()", "image()")}}
  - {{cssxref("image/image-set()", "image-set()")}}
  - {{cssxref("gradient/linear-gradient()", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient()", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}
  - {{cssxref("image/paint()", "paint()")}}
  - {{cssxref("url()", "url()")}}
