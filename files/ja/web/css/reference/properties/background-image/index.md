---
title: background-image
slug: Web/CSS/Reference/Properties/background-image
original_slug: Web/CSS/background-image
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

**`background-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に 1 つ以上の背景画像を設定します。

{{InteractiveExample("CSS デモ: background-image")}}

```css interactive-example-choice
background-image: url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/lizard.png"),
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/star.png"),
  url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
  url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

画像はお互いの上に積み重ねるコンテキストレイヤーに描画されます。最初に指定されたレイヤーが、ユーザーに対し最も手前にあるかのように描画されます。

要素の[境界](/ja/docs/Web/CSS/Reference/Properties/border)は背景画像よりも上、 {{cssxref("background-color")}} は背景画像より下に描画されます。画像がボックスとその境界に対し相対的にどう描画されるかは、 {{cssxref("background-clip")}} および {{cssxref("background-origin")}} プロパティによって定義されます。

指定された画像を描画することができない (例えば、指定された URI が指し示すファイルをロードできない) 場合、ブラウザーはその指定を `none` 値であるかのように処理します。

> [!NOTE]
> たとえ画像が不透明で通常は色が表示されないとしても、ウェブ開発者は常に {{cssxref("background-color")}} を指定すべきです。例えばネットワークが切断された場合など、もし画像が読み込めなかったときに、背景色がフォールバックとして使われます。

## 構文

```css
/* 単一の画像 */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

/* 複数の画像 */
background-image:
  radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* グローバル値 */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

それぞれの背景画像は、キーワード `none` または {{cssxref("&lt;image&gt;")}} 値として指定されます。

複数の背景画像を指定するには、複数の値をカンマで区切って指定してください。

### 値

- `none`
  - : 画像を用いないことを表すキーワード。
- `<image>`
  - : 表示する背景を記述する {{cssxref("&lt;image&gt;")}}。[複数の背景](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)に対応している場合は、カンマ区切りで複数指定することができます。

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

さらに、背景画像と前景テキストのコントラスト比を確保し、弱視者がページコンテンツを読めるようにすることも重要です。

カラーコントラスト比は、テキストと背景色の値の輝度を比較して決定されます。[ウェブコンテンツアクセシビリティガイドライン (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) に準拠するには、本文テキストコンテンツでは 4.5:1、見出しなどの大きなテキストでは 3:1 の比率が要求されます。大きなテキストとは、 24px 以上、または[太字](/ja/docs/Web/CSS/Reference/Properties/font-weight)で 18.66px 以上を定義します。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背景画像の重ね合わせ

星の画像は一部透過となっており、猫の画像の上に重ねられている点に注意してください。

#### HTML

```html
<div>
  <p class="cats-and-stars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="cats-and-stars">Here are more cats for you.<br />Look at them!</p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-weight: bold;
  font-size: 1.5em;
  color: white;
  text-shadow: 0.07em 0.07em 0.05em black;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.cats-and-stars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
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

- {{HTMLElement("img")}}
- 画像に関する関数:
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("url_value", "&lt;url&gt;")}}
- [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
- [CSS での画像スプライトの実装](/ja/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
- [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュール

- 背景に関するプロパティ
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} 一括指定
- [CSS の学習: 背景と境界線](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [複数の背景画像の使用](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [背景画像の拡大縮小](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
