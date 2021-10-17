---
title: cross-fade()
slug: Web/CSS/cross-fade()
tags:
  - CSS
  - CSS 関数
  - CSS-4 画像
  - 実験的
  - 関数
  - Reference
  - ウェブ
browser-compat: css.types.image.cross-fade
translation_of: Web/CSS/cross-fade()
---
{{CSSRef}}

**`cross-fade()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、2 枚以上の画像を所定の透過度で合成するために使用することができます。これは単色で色を薄めたり、放射状グラデーションとの組み合わせでページの特定の領域を強調させたりするような、数多くの単純な画像加工に使用することができます。

## 構文

**重要**: 仕様書と現在の実装とで構文が異なっています。仕様書の構文を先に説明します。

## 仕様書上の構文

`cross-fade()` 関数は、画像と、他の画像と合成したときにそれぞれの画像が占める割合を定義したパーセント値のリストを取ります。パーセント値は引用符なしで記述し、`'%'` 記号を含め、 0% から 100% までの間である必要があります。

この関数は CSS の中で、通常の画像の参照が利用できるところならばどこでも利用できます。

#### cross-fade のパーセント値

子のパーセント値は、それぞれの画像の混合率の値と考えてください。つまり、0% の値は画像が完全に透明であり、100% の値は完全に不透明になります。

```css
cross-fade( url(white.png) 0%, url(black.png) 100%); /* 完全に黒 */
cross-fade( url(white.png) 25%, url(black.png) 75%); /* 黒 25%、白 75% */
cross-fade( url(white.png) 50%, url(black.png) 50%); /* 黒 50%、白 50% */
cross-fade( url(white.png) 75%, url(black.png) 25%); /* 白 75%、黒 25% */
cross-fade( url(white.png) 100%, url(black.png) 0%); /* 完全に白 */
cross-fade( url(green.png) 75%, url(red.png) 75%); /* 緑と赤がともに 75% */
```

パーセント値が省略された場合は、指定されたすべてのパーセント値が合計され、`100%` から減算されます。その結果が `0%` より大きい場合は、パーセント値が省略されているすべての画像で均等に分割されます。

最も単純なケースは、2 つの画像を互いにフェードアウトさせる場合です。そのためには、パーセント値を設定する必要があるのは片方の画像だけで、もう片方の画像はそれに応じてフェードされます。例えば、1 枚目の画像に 0% の値を設定すると 2 枚目の画像のみが表示され、100% の値を設定すると 1 枚目の画像のみが表示されます。25% の値を設定すると、1 枚目の画像は 25%、2 枚目の画像は 75% で表示されます。75% の場合はその逆で、1 枚目が 75%、2 枚目が 25% になります。

以下のように書くこともできます。

```css
cross-fade( url(white.png) 0%,   url(black.png)); /* 完全に黒 */
cross-fade( url(white.png) 25%,  url(black.png)); /* 黒 25%、白 75% */
cross-fade( url(white.png),      url(black.png)); /* 白 50%、白 50% */
cross-fade( url(white.png) 75%,  url(black.png)); /* 白 75%、黒 25% */
cross-fade( url(white.png) 100%, url(black.png)); /* 完全に白 */
cross-fade( url(green.png) 75%, url(red.png) 75%); /* 緑と赤がともに 75% */
```

パーセント値が宣言されていない場合は、両方の画像が 50% の混合率となり、cross-fade では両方の画像が均等に合成されたように描画されます。上述の 50%/50% の例では、パーセント値を記載する必要はありませんでした。パーセント値が省略された場合、含まれるパーセント値が合計され、100% から差し引かれます。その結果、0 より大きい場合は、パーセント値が省略されたすべての画像で均等に分割されます。

最後の例では、両方のパーセント値の合計が 100% ではないため、両方の画像にそれぞれの混合率が含まれています。

パーセント値が宣言されておらず、3 つの画像が含まれている場合、それぞれの画像は 33.33% の混合率になります。以下の 2 つは (ほぼ) 同じ線です。

```css
cross-fade( url(red.png), url(yellow.png), url(blue.png)); /* 3 つとも 33.3333% の混合率となる */
cross-fade( url(red.png) 33.33%, url(yellow.png) 33.33%, url(blue.png) 33.33%);
```

### 古い、実装されている構文

```css
cross-fade( <image>, <image>, <percentage> )
```

`cross-fade()` 関数の仕様では、複数の画像を指定し、それぞれの画像に他の値とは独立した透明度の値を持たせることができます。これは必ずしもそうではありませんでした。一部のブラウザーで実装されている元の構文では、2 つの画像しか使用できず、その 2 つの画像の透明度の合計がちょうど 100% になります。オリジナルの構文は Safari が対応しており、`-webkit-` の接頭辞付きのものは Chrome、Opera、その他の blink ベースのブラウザーで対応しています。

```css
cross-fade(url(white.png), url(black.png), 0%);   /* 完全に黒 */
cross-fade(url(white.png), url(black.png), 25%);  /* 黒 25%、白 75% */
cross-fade(url(white.png), url(black.png), 50%);  /* 白 50%、白 50% */
cross-fade(url(white.png), url(black.png), 75%);  /* 白 75%、黒 25% */
cross-fade(url(white.png), url(black.png), 100%); /* 完全に白 */
```

実装されている構文では、カンマで区切られた 2 つの画像を最初に宣言し、その後にカンマと必要なパーセント値を宣言します。カンマやパーセント値を省略すると、その値は無効になります。パーセント値は、最初に宣言された画像の混合率です。含まれるパーセントは 100% から差し引かれ、その差が 2 番目の画像の混合率になります。

仕様書の構文の項にある緑/赤の例 (パーセント値の合計が 150%) と黄/赤/青の例 (3 つの画像を使用) は、この実装では不可能です。

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。背景画像を使用する場合は、色のコントラストを大きくして、画像がない場合と同様に、画像の上にどのような文字も読み取れるようにしてください。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 形式文法

{{csssyntax}}

## 例

<h3 id="Older_syntax_for_cross-fade">cross-fade の古い構文</h3>

#### HTML

```html
<div class="crossfade"></div>
```

#### CSS

```css
.crossfade {
    width: 300px;
    height: 300px;
    background-image: -webkit-cross-fade(
        url('br.png'),
        url('tr.png'),
        75%);
    background-image: cross-fade(
        url('br.png'),
        url('tr.png'),
        75%);
}
```

#### 結果

{{EmbedLiveSample("Older_syntax_for_cross-fade", "330", "330")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("image")}}
- {{cssxref("url()")}}
- {{cssxref("image/image()", "image()")}}
- {{cssxref("image/image-set()", "image-set()")}}
- {{cssxref("element()")}}
- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- グラデーション関数: {{cssxref("gradient/linear-gradient()", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient()", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}
