---
title: border-image
slug: Web/CSS/border-image
---

{{CSSRef}}

**`border-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定された要素の周りに画像を描きます。これは要素の通常の[境界](/ja/docs/Web/CSS/border)を置き換えます。

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> **メモ:** 境界画像の読み込みに失敗したときのために、 {{cssxref("border-style")}} を指定してください。仕様では厳密には要求されていませんが、{{cssxref("border-style")}} が `none` または {{cssxref("border-width")}} が `0` の場合、境界画像を描画しないブラウザーもあります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-image-outset`](/ja/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/ja/docs/Web/CSS/border-image-repeat)
- [`border-image-slice`](/ja/docs/Web/CSS/border-image-slice)
- [`border-image-source`](/ja/docs/Web/CSS/border-image-source)
- [`border-image-width`](/ja/docs/Web/CSS/border-image-width)

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
border-image: unset;
```

`border-image` プロパティは以下に挙げた 1 つから 5 つの値で指定します。

> **メモ:** {{cssxref("border-image-source")}} の [計算値](/ja/docs/Web/CSS/computed_value) が `none` であったり、画像が表示できなかったりした場合は、 {{cssxref("border-style")}} が代わりに表示されます。

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

## アクセシビリティの考慮

支援技術は境界画像を解釈することができません。画像にページ全体の目的を理解するために重要な情報が含まれている場合は、文書内に意味的に記述したほうがいいでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Bitmap">ビットマップ</h3>

この例では、要素の境界にダイヤモンド模様を適用します。 source の画像は、縦と横にダイヤモンドが 3 つずつ並んだ 81 × 81 ピクセルの ".png" ファイルです。

![境界画像の例](border.png)

#### HTML

```html
<div id="bitmap">この要素はビットマップベースの境界画像に囲まれています。</div>
```

#### CSS

個々のダイヤモンドの大きさに一致するように、3で割れる81の値を使用するか、角と辺の領域を分割するための `27` を使用します。境界画像が要素の背景の辺の中央になるように、 outset の値を幅の半分にします。最後に、 `round` に repeat の値を設定して、境界線の断片が等分に合うように、つまり、クリッピングをしたり隙間ができたりしないようにします。

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px round;
}
```

#### 結果

{{EmbedLiveSample('Bitmap', '100%', 200)}}

<h3 id="Gradient">グラデーション</h3>

#### HTML

```html
<div id="gradient">この要素はグラデーションの境界に囲まれています。</div>
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

{{EmbedLiveSample('Gradient')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url()", "url()")}} 関数
- グラデーション関数: {{CSSxRef("gradient/conic-gradient()", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient()", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient()", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}
