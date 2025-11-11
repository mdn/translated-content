---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
original_slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

**`conic-gradient()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 (中心から広がるのではなく) 中心点の周りを回りながら色が変化する画像を生成します。扇型グラデーションの例としては、円グラフや{{glossary("color wheel", "色相環")}}などがあります。 `conic-gradient()` 関数の結果は {{CSSxRef("&lt;gradient&gt;")}} データ型のオブジェクトであり、これは {{CSSxRef("&lt;image&gt;")}} の特殊型です。

{{InteractiveExample("CSS デモ: conic-gradient()")}}

```css interactive-example-choice
background: conic-gradient(red, orange, yellow, green, blue);
```

```css interactive-example-choice
background: conic-gradient(
  from 0.25turn at 50% 30%,
  #f69d3c,
  10deg,
  #3f87a6,
  350deg,
  #ebf8e1
);
```

```css interactive-example-choice
background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5);
```

```css interactive-example-choice
background: conic-gradient(
  red 6deg,
  orange 6deg 18deg,
  yellow 18deg 45deg,
  green 45deg 110deg,
  blue 110deg 200deg,
  purple 200deg
);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

## 構文

```css
/* 45度回転した扇形グラデーション、
   青で始まり赤で終わる */
conic-gradient(from 45deg, blue, red)

/* 青みがかった紫のボックス。グラデーションは青から赤へと
   進みます。しかし、扇形グラデーションの中心が左上にある
   ため、右下の四分の一しか見えません。 */
conic-gradient(from 90deg at 0 0, blue, red)

/* 円筒色空間での補間
  色相の補間方法に longer を指定 */
conic-gradient(in hsl longer hue, red, blue, green, red)

/* 色相環 */
conic-gradient(
  hsl(360 100% 50%),
  hsl(315 100% 50%),
  hsl(270 100% 50%),
  hsl(225 100% 50%),
  hsl(180 100% 50%),
  hsl(135 100% 50%),
  hsl(90 100% 50%),
  hsl(45 100% 50%),
  hsl(0 100% 50%)
)
```

### 値

- {{CSSxRef("&lt;angle&gt;")}}
  - : `from` キーワードに続いて角度を指定することで、時計回りのグラデーションの位置を定義します。
- `<position>`
  - : [`background-position`](/ja/docs/Web/CSS/Reference/Properties/background-position) プロパティと同じ長さ、順序、キーワード値を使用して、 `position` 値はグラデーションの中心を定義します。指定されていない場合、既定では `position` に `center` 値が使用され、グラデーションが中央に配置されるということになります。
- `<angular-color-stop>`
  - : 色経由点の {{CSSxRef("&lt;color&gt;")}} 値で、その後にオプションで 1 ～ 2 個の位置 (グラデーションの円周軸に沿った {{CSSxRef("&lt;angle&gt;")}}) が続きます。
- `<color-hint>`
  - : 隣接する色経由点の間でグラデーションがどのように進行するかを定義する{{Glossary("interpolation","補間")}}のヒントです。長さは、 2 つの色経由点の間のどの位置でグラデーションの色が色の遷移の中間点に到達するかを定義します。省略した場合、色の遷移の中間点は 2 つの色経由点間の中間点になります。

> [!NOTE]
> 扇形グラデーションにおける色経由点は、[線形グラデーションにおける色経由点](/ja/docs/Web/CSS/Reference/Values/gradient/linear-gradient#線形グラデーションの構成)と同じルールに従います。

## 解説

他のグラデーションと同様、扇形グラデーションは[内在的な寸法を持ちません](/ja/docs/Web/CSS/Reference/Values/image#description)。つまり、自然の寸法や推奨される寸法、推奨される縦横比もありません。自身の寸法は適用先の要素の寸法、または要素の寸法以外で設定された `<image>` の寸法に一致します。

繰り返して 360 度の回転を埋める扇形グラデーションを生成するには、代わりに {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 関数を使用してください。

`<gradient>` は `<image>` データ型に属するため、 `<image>` が使用できるところでしか使用できません。このため、 `conic-gradient()` は {{CSSxRef("background-color")}} や、その他の {{CSSxRef("&lt;color&gt;")}} データ型を使用するプロパティでは動作しません。</p>

> [!NOTE]
> 英語ではなぜ "conic" （円錐）グラデーションと呼ばれるのか。色経由点が一方よりもう一方が明るい場合、上から見た円錐のように見えるからです。

### 扇型グラデーションの構成

扇形グラデーションの構文は放射グラデーションと似ていますが、色経由点はグラデーションの中心から現れるグラデーション軸上ではなく、グラデーション円弧、すなわち円周上に配置されます。扇形グラデーションでは、色の遷移は円の中心を回るように、上から始まって時計回りに行われます。放射グラデーションでは、色の遷移は楕円の中心から外に向けて、すべての方向に行われます。

![扇形グラデーションの円周と放射グラデーションの軸に沿った色経由点](screenshot_2018-11-29_21.09.19.png)

扇形グラデーションは、回転角度とグラデーションの中心を指定し、色経由点のリストを指定します。長さ ({{cssxref("length")}}) を指定して色経由点を配置する線形グラデーションや放射グラデーションとは異なり、扇形グラデーションの色経由点は角度を指定します。単位には[度](/ja/docs/Web/CSS/Reference/Values/angle)を表す `deg`、グラードを表す `grad`、ラジアンを表す `rad`、回転数を表す `turn` があります。 1 つの円は 360 度、 400 グラード、 2π ラジアン、 1 回転になります。扇形グラデーションに対応しているブラウザーはパーセント値も受け付けており、 100% は 360 度に相当しますが、これは仕様にはありません。

放射グラデーションと同様に、扇形グラデーションの構文では、グラデーションの中心を画像内のどこにでも、あるいは画像の外側にでも配置することができます。位置の値は、 2 値の背景位置の構文に似ています。

グラデーション円弧は、グラデーションの円周です。グラデーションまたは円弧の*始点*は北、つまり 12 時の方向です。そして、グラデーションは _from_ の角度だけ回転します。グラデーションの色は、角度のついた色経由点、それらの開始点、終了点、および、その間、および、任意の角度のついた色経由点によって決定されます。色間の遷移は、隣接する色の色経由点の間のカラーヒントで変更することができます。

#### グラデーションのカスタマイズ

グラデーション円弧上に角度のついた色経由点をさらに追加することで、複数の色の間で高度なカスタマイズされた遷移を行うことができます。色経由点の位置は、 {{CSSxRef("&lt;angle&gt;")}} を使って明示的に定義することができます。色経由点の位置を指定しない場合は、前の色経由点と後の色経由点の中間に配置されます。最初の色経由点と最後の色経由点に角度を指定しない場合、その値はそれぞれ 0deg と 360deg です。次の2つのグラデーションは同等です。

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

既定では、色はある色経由点の色から次の色経由点の色へとスムーズに移行し、色と色の中間点が色移行の中間点となります。カラーヒントを追加して色遷移の中間点を示すことで、この色遷移の中間点を 2 つの色経由点間の任意の位置に移動させることができます。次の例は、開始点から 10% の印までは赤一色で、回転の 80% 以上で赤から青に移行し、最後の 10% は青一色になっています。しかし、赤から青へのグラデーション変化の中間点は 20％ の位置になります。 80grad (20％) のカラーヒントがなかった場合は 50％ の位置になります。

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

2 つ以上の色経由点が同じ場所にある場合、その場所で宣言された最初の色と最後の色の間に不連続の (硬い) 色変化として表示されます。扇形グラデーションを使用して円グラフを作成するには、 — 背景画像はアクセシビリティが確保できないため、正しい方法ではありませんが — 隣接する 2 つの色経由点の色経由点の角度が同じである、硬い色経由点を使用します。これを実現する最も簡単な方法は、複数のポジションの色経由点を使用することです。次の 2 つの宣言は等価です。

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

色経由点は、昇順に並べる必要があります。後続の色経由点がより低い値であった場合、前の色経由点の値を上書きし、硬い (不連続の) 色変化を生成します。次の例では、 30% の地点で赤から黄色に変化し、グラデーションの 35% の地点で黄色から青に変化しています。

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

扇形グラデーションでは、他にもさまざまな効果を作り出すことができます。奇しくも市松模様もその一つです。左上と右下の白、左下と右上の黒で四分円を作り、グラデーションを16回 (横に4回、下に4回) 繰り返すと市松模様になります。

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

そして、そうですね、異なる角度のユニットを混ぜて使うこともできますが、やめておきましょう。以上、読みにくかったですね。

## 形式文法

{{csssyntax}}

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要なことで、スクリーンリーダーはその存在を告知しないため、ユーザーに何も伝えられません。扇形グラデーションを使って円グラフや市松模様などの効果を出すことは可能ですが、 CSS 画像は代替テキストを割り当てるネイティブな方法を提供していないため、扇形グラデーションで表現された画像はスクリーンリーダーのユーザーが認知することはできません。ページの全体的な目的を理解するために重要な情報が画像に含まれている場合は、文書内で意味的に記述する方が良いでしょう。

- [MDN WCAG を理解する, ガイドライン 1.1 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 例

### 40 度のグラデーション

```css hidden live-sample___gradient_at_40-degrees
div {
  width: 100px;
  height: 100px;
}
```

```html hidden live-sample___gradient_at_40-degrees
<div></div>
```

```css live-sample___gradient_at_40-degrees
div {
  background-image: conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

### 中心をずらしたグラデーション

```css hidden live-sample___off-centered_gradient
div {
  width: 100px;
  height: 100px;
}
```

```html hidden live-sample___off-centered_gradient
<div></div>
```

```css live-sample___off-centered_gradient
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("Off-centered_gradient", 120, 120)}}

### グラデーションの円グラフ

この例では、隣接する色が同じ色経由点値を持つ、複数位置の色経由点を使用しており、縞模様効果を生成しています。

```css hidden live-sample___gradient_pie-chart
div {
  width: 100px;
  height: 100px;
}
```

```html hidden live-sample___gradient_pie-chart
<div></div>
```

```css live-sample___gradient_pie-chart
div {
  background: conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%;
}
```

{{EmbedLiveSample("Gradient_pie-chart", 120, 120)}}

### 市松模様

```css hidden live-sample___checkerboard
div {
  width: 100px;
  height: 100px;
}
```

```html hidden live-sample___checkerboard
<div></div>
```

```css live-sample___checkerboard
div {
  background: conic-gradient(
      #fff 0.25turn,
      #000 0.25turn 0.5turn,
      #fff 0.5turn 0.75turn,
      #000 0.75turn
    )
    top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Checkerboard", 120, 120)}}

### 色相での補間

```html hidden live-sample___interpolating_with_hue
<div class="shorter"></div>
<div class="longer"></div>
```

```css hidden live-sample___interpolating_with_hue
div {
  display: inline-block;
  margin-top: 1rem;
  width: 45vw;
  height: 80vh;
}

.shorter::before {
  content: "shorter hue";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "longer hue";
  display: block;
  margin-top: -1rem;
}
```

この補間処理の例では、 [hsl](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) 色系を使用して、[色相](/ja/docs/Web/CSS/Reference/Values/hue)を補間しています。

```css live-sample___interpolating_with_hue
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

左のボックスは、 [shorter の補間](/ja/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter)を使用しており、[色相環](/ja/docs/Glossary/Color_wheel)の短い方の弧を使用して、色が赤から青に直接変化しているということになります。右のボックスは、 [longer の補間](/ja/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer)を使用しており、色が赤から青に変化する際に、緑、黄、オレンジを通って変化しているということになります。

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### その他の conic-gradient の例

他の例は [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
- 他のグラデーション関数: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/ja/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/ja/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
