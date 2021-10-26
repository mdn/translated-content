---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient()
tags:
  - CSS
  - CSS Function
  - CSS Images
  - Function
  - Graphics
  - Layout
  - Reference
  - Web
  - gradient
browser-compat: css.types.image.gradient.conic-gradient
translation_of: Web/CSS/gradient/conic-gradient()
original_slug: Web/CSS/conic-gradient()
---
{{CSSRef}}

**`conic-gradient()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 (中心から広がるのではなく) 中心点の周りを回りながら色が変化する画像を生成します。扇型グラデーションの例としては、円グラフや色相環などがあります。 `conic-gradient()` 関数の結果は {{CSSxRef("&lt;gradient&gt;")}} データ型のオブジェクトであり、これは {{CSSxRef("&lt;image&gt;")}} の特殊型です。

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## 構文

```css
/* 45度回転した扇形グラデーション、
   青で始まり赤で終わる */
conic-gradient(from 45deg, blue, red);

/* 青みがかった紫のボックス。グラデーションは青から赤へと
   進みます。しかし、扇形グラデーションの中心が左上にある
   ため、右下の四分の一しか見えません。 */
conic-gradient(from 90deg at 0 0, blue, red);

/* 色相環 */
background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
);
```

### 値

- {{CSSxRef("&lt;angle&gt;")}}
  - : `from` キーワードに続いて角度を指定することで、時計回りのグラデーションの位置を定義します。
- `<position>`
  - : {{cssxref("background-position")}} プロパティと同じ長さ、順番、キーワード値を使用して、グラデーションの中心の位置を定義します。省略すると、既定値は`center`、すなわちグラデーションに配置されます。
- `<angular-color-stop>`
  - : 色経由点の {{CSSxRef("&lt;color&gt;")}} 値で、その後にオプションで 1 ～ 2 個の位置 (グラデーションの円周軸に沿った {{CSSxRef("&lt;angle&gt;")}}) が続きます。
- `<color-hint>`
  - : 隣接する色経由点の間でグラデーションがどのように進行するかを定義する補間のヒントです。長さは、 2 つの色経由点の間のどの位置でグラデーションの色が色の遷移の中間点に到達するかを定義します。省略した場合、色の遷移の中間点は 2 つの色経由点間の中間点になります。

> **Note:** [CSS グラデーションにおける色経由点](#gradient_with_multiple_color_stops)の描画は、 [SVG グラデーション](/ja/docs/Web/SVG/Tutorial/Gradients)と同じ規則に従います。

## 解説

他のグラデーションと同様、扇形グラデーションは[自身の寸法を持ちません](/ja/docs/Web/CSS/image#description)。つまり、自然の寸法や推奨される寸法、推奨される縦横比もありません。自身の寸法は適用先の要素の寸法、または要素の寸法以外で設定された `<image>` の寸法に一致します。

繰り返して 360 度の回転を埋める扇形グラデーションを生成するには、代わりに {{CSSxRef("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}} 関数を使用してください。

`<gradient>` は `<image>` データ型に属するため、 `<image>` が使用できるところでしか使用できません。このため、 `conic-gradient()` は {{CSSxRef("background-color")}} や、その他の {{CSSxRef("&lt;color&gt;")}} データ型を使用するプロパティでは動作しません。</p>

> **Note:** 英語ではなぜ "conic" (円錐) グラデーションと呼ばれるのか。色経由点が一方よりもう一方が明るい場合、上から見た円錐のように見えるからです。

### 扇型グラデーションの構成

扇形グラデーションの構文は放射グラデーションと似ていますが、色経由点はグラデーションの中心から現れるグラデーション軸上ではなく、グラデーション円弧、すなわち円周上に配置されます。扇形グラデーションでは、色の遷移は円の中心を回るように、上から始まって時計回りに行われます。放射グラデーションでは、色の遷移は楕円の中心から外に向けて、すべての方向に行われます。

![扇形グラデーションの円周と放射グラデーションの軸に沿った色経由点](screenshot_2018-11-29_21.09.19.png)

扇形グラデーションは、回転角度とグラデーションの中心を指定し、色経由点のリストを指定します。[長さ](/ja/docs/Web/CSS/length)を指定して色経由点を配置する線形グラデーションや放射グラデーションとは異なり、扇形グラデーションの色経由点は角度を指定します。単位には[度](/ja/docs/Web/CSS/angle)を表す `deg`、グラードを表す `grad`、ラジアンを表す `rad`、回転数を表す `turn` があります。 1 つの円は 360 度、 400 グラード、 2π ラジアン、 1 回転になります。扇形グラデーションに対応しているブラウザーはパーセント値も受け付けており、 100% は 360 度に相当しますが、これは仕様にはありません。

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

2 つ以上の色経由点が同じ場所にある場合、その場所で宣言された最初の色と最後の色の間に不連続の (硬い) 色変化として表示されます。扇形グラデーションを使用して円グラフを作成するには、 -- 背景画像はアクセシビリティが確保できないため、正しい方法ではありませんが -- 隣接する 2 つの色経由点の色経由点の角度が同じである、硬い色経由点を使用します。これを実現する最も簡単な方法は、複数のポジションの色経由点を使用することです。次の 2 つの宣言は等価です。

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

## アクセシビリティの考慮

ブラウザは、背景画像に関する特別な情報を支援技術に提供しません。これは主に画面リーダーにとって重要なことで、画面リーダーはその存在を告知しないため、ユーザーに何も伝えられません。扇形グラデーションを使って円グラフや市松模様などの効果を出すことは可能ですが、 CSS 画像は代替テキストを割り当てるネイティブな方法を提供していないため、扇形グラデーションで表現された画像は画面リーダーのユーザーが認知することはできません。ページの全体的な目的を理解するために重要な情報が画像に含まれている場合は、文書内で意味的に記述する方が良いでしょう。

- [MDN WCAG を理解する, ガイドライン 1.1 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 例

<h3 id="Gradient_at_40-degrees">40 度のグラデーション</h3>

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image:
     conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

<h3 id="Off-centered_gradient">中心をずらしたグラデーション</h3>

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("Off-centered_gradient", 120, 120)}}

<h3 id="Gradient_pie-chart">グラデーションの円グラフ</h3>

This example uses multi-position color stops, with adjacent colors having the same color stop value, creating a striped effect.

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(
     red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%
}
```

{{EmbedLiveSample("Gradient_pie-chart", 120, 120)}}

<h3 id="Checkerboard">市松模様</h3>

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background:
     conic-gradient(#fff 0.25turn, #000 0.25turn 0.5turn, #fff 0.5turn 0.75turn, #000 0.75turn)
     top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Checkerboard", 120, 120)}}

### その他の conic-gradient の例

他の例は [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- 他のグラデーション関数: {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient()", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image()","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set()","image-set()")}}
- {{cssxref("cross-fade()")}}
