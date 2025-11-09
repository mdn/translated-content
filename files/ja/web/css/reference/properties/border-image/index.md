---
title: border-image
slug: Web/CSS/Reference/Properties/border-image
original_slug: Web/CSS/border-image
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

**`border-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定された要素の周りに画像を描きます。これは要素の通常の[境界](/ja/docs/Web/CSS/Reference/Properties/border)を置き換えます。

{{InteractiveExample("CSS デモ: border-image")}}

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30 /
  19px round;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
  fill / 30px / 30px space;
```

```css interactive-example-choice
border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
```

```css interactive-example-choice
border-image: repeating-linear-gradient(30deg, #4d9f0c, #9198e5, #4d9f0c 20px)
  60;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

> [!NOTE]
> 境界画像の読み込みに失敗したときのために、 {{cssxref("border-style")}} を指定してください。仕様では厳密には要求されていませんが、{{cssxref("border-style")}} が `none` または {{cssxref("border-width")}} が `0` の場合、境界画像を描画しないブラウザーもあります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-image-outset`](/ja/docs/Web/CSS/Reference/Properties/border-image-outset)
- [`border-image-repeat`](/ja/docs/Web/CSS/Reference/Properties/border-image-repeat)
- [`border-image-slice`](/ja/docs/Web/CSS/Reference/Properties/border-image-slice)
- [`border-image-source`](/ja/docs/Web/CSS/Reference/Properties/border-image-source)
- [`border-image-width`](/ja/docs/Web/CSS/Reference/Properties/border-image-width)

## 構文

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* グローバル値 */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

`border-image` プロパティは以下に挙げた 1 つから 5 つの値で指定します。

> [!NOTE]
> {{cssxref("border-image-source")}} の [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値) が `none` であったり、画像が表示できなかったりした場合は、 {{cssxref("border-style")}} が代わりに表示されます。

### 値

- `<'border-image-source'>`
  - : 元となる画像です。 {{cssxref("border-image-source")}} を参照してください。
- `<'border-image-slice'>`
  - : source の画像を領域に分割する座標です。4つまでの値が指定できます。 {{cssxref("border-image-slice")}} を参照してください。
- `<'border-image-width'>`
  - : 境界画像の幅です。4つまでの値が指定できます。 {{cssxref("border-image-width")}} を参照してください。
- `<'border-image-outset'>`
  - : 要素の縁から境界画像までの間隔です。4つまでの値が指定できます。 {{cssxref("border-image-outset")}} を参照してください。
- `<'border-image-repeat'>`
  - : source の画像の辺の領域を境界画像の寸法にどのように合わせるかを定義します。2つまでの値が指定できます。 {{cssxref("border-image-repeat")}} を参照してください。

## アクセシビリティ

支援技術は境界画像を解釈することができません。画像にページ全体の目的を理解するために重要な情報が含まれている場合は、文書内に意味的に記述したほうがいいでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビットマップ

この例では、要素の境界にダイヤモンド模様を適用します。 source の画像は、縦と横にダイヤモンドが 3 つずつ並んだ 81 × 81 ピクセルの ".png" ファイルです。

![8 つのダイヤ： 4 つの赤いダイヤが各コーナーに 1 つずつ、 4 つのオレンジのダイヤが各辺に 1 つずつ。真ん中は空。](border.png)

#### HTML

```html-nolint
<div id="bitmap">
  この要素はビットマップベースの境界画像に囲まれています。
</div>
```

#### CSS

個々のダイヤモンドの大きさに一致するように、 3 で割れる 81 の値を使用するか、角と辺の領域を分割するための `27` を使用します。境界画像が要素の背景の辺の中央になるように、 outset の値を幅の半分にします。最後に、 `round` に repeat の値を設定して、境界線の断片が等分に合うように、つまり、クリッピングをしたり隙間ができたりしないようにします。

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### 結果

{{EmbedLiveSample('Bitmap', '100%', 200)}}

### グラデーション

#### HTML

```html-nolint
<div id="gradient">
  この要素はグラデーションの境界に囲まれています。
</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### 結果

{{EmbedLiveSample('グラデーション')}}

### 角丸の境界線

{{cssxref("border-radius")}} は境界画像に効果がありません。これは、 {{cssxref("border-image-outset")}} は画像を境界ボックスの外に置くことができるので、境界画像が境界領域でクリップされることに意味がないからです。境界画像を使用して角を丸めるには、画像自体の角を丸めて作成するか、グラデーションの場合は背景として描画する必要があります。次の例では、境界線を拡張する画像とパディング枠に使用する画像の 2 つの {{cssxref("background-image")}}を使用する手法を示します。

#### HTML

```html-nolint
<div id="rounded">
  この要素は、角が丸められた境界線で囲まれています！
</div>
```

#### CSS

```css
#rounded {
  width: 200px;
  /* Use transparent so the background image is visible */
  border: 10px solid transparent;
  padding: 20px;
  border-radius: 20px;
  background-image:
    linear-gradient(white, white), linear-gradient(to right, cyan, lime);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

#### 結果

{{EmbedLiveSample('rounded_borders')}}

> [!NOTE]
> この用途に向けて新しい `{{cssxref("background-clip")}}: border-area` の値が[提案されて](https://github.com/w3c/csswg-drafts/issues/9456)います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} データ型
- グラデーション関数: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Border images in CSS: A key focus area for Interop 2023](/en-US/blog/border-images-interop-2023/) (MDN blog, 2023)
