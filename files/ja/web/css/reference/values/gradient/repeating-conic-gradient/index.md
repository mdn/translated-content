---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
original_slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 8e2465af7cac389b70e83d54eeb288448f2ae08d
---

**`repeating-conic-gradient()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、（[単一のグラデーション](/ja/docs/Web/CSS/Reference/Values/gradient/conic-gradient)ではなく）繰り返しのグラデーションからなる、色の遷移が（中心から[放射状に広がるのではなく](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)）、中心点の周りを回転する画像を生成します。

{{InteractiveExample("CSS デモ: repeating-conic-gradient()")}}

```css interactive-example-choice
background: repeating-conic-gradient(red 0%, yellow 15%, red 33%);
```

```css interactive-example-choice
background: repeating-conic-gradient(
  from 45deg at 10% 50%,
  brown 0deg 10deg,
  darkgoldenrod 10deg 20deg,
  chocolate 20deg 30deg
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
/* スターバースト: 青の上に青のスターブラスト:
   このグラデーションは左上 4 分の 1 の位置を中心とした
   明るい青と暗い青のスターブラストで、 3 度傾いている
   ため垂直線がありません。 */
repeating-conic-gradient(
    from 3deg at 25% 25%,
  hsl(200 100% 50%) 0deg 15deg,
  hsl(200 100% 60%) 10deg 30deg
)

/* 円筒色空間での補間
  色相の補間方法に longer を指定 */
repeating-conic-gradient(in hsl shorter hue, red, blue 90deg, green 180deg)
```

### 値

- {{CSSxRef("&lt;angle&gt;")}}
  - : `from` キーワードに続いて角度を指定することで、時計回りのグラデーションの位置を定義します。
- `<position>`
  - : [`background-position`](/ja/docs/Web/CSS/Reference/Properties/background-position) プロパティと同じ長さ、順番、キーワード値を使用して、グラデーションの中心の位置を定義します。省略すると、既定値は`center`、すなわちグラデーションに配置されます。
- `<angular-color-stop>`
  - : 色経由点の {{CSSxRef("&lt;color&gt;")}} 値で、その後にオプションで 1 ～ 2 個の位置 (グラデーションの円周軸に沿った {{CSSxRef("&lt;angle&gt;")}}) が続きます。最後の色経由点から最初の色経由点までの角度が反復グラデーションの大きさを定義します。
- `<color-hint>`
  - : 隣接する色経由点の間でグラデーションがどのように進行するかを定義する{{Glossary("interpolation","補間")}}のヒントです。長さは、 2 つの色経由点の間のどの位置でグラデーションの色が色の遷移の中間点に到達するかを定義します。省略した場合、色の遷移の中間点は 2 つの色経由点間の中間点になります。

> [!NOTE]
> 反復扇形グラデーションにおける色経由点は、[線形グラデーションにおける色経由点](/ja/docs/Web/CSS/Reference/Values/gradient/linear-gradient#線形グラデーションの構成)と同じルールに従います。

## 解説

反復扇形グラデーションの例にはスターバーストがあります。 `repeating-conic-gradient()` 関数の返値は {{CSSxRef("&lt;gradient&gt;")}} データ型のオブジェクトで、これは {{CSSxRef("&lt;image&gt;")}} の特殊形です。

最初と最後の色経由点がどちらも 0 度以上か 360 度未満になっていない場合、 conic-gradient は繰り返されません。

他のグラデーションと同様、扇形グラデーションは[内在的な寸法を持ちません](/ja/docs/Web/CSS/Reference/Values/image#description)。つまり、自然の寸法や推奨される寸法、推奨される縦横比もありません。自身の寸法は適用先の要素の寸法、または要素の寸法以外で設定された `<image>` の寸法に一致します。

`<gradient>` は `<image>` データ型に属するため、 `<image>` が使用できるところでしか使用できません。このため、 `conic-gradient()` は {{CSSxRef("background-color")}} や、その他の {{CSSxRef("&lt;color&gt;")}} データ型を使用するプロパティでは動作しません。</p>

> [!NOTE]
> 反復しない扇形グラデーションを作成するには、グラデーションを 360 度の回転にするか、 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 関数を使用するかしてください。

### 反復扇形グラデーションの理解

repeating-conic-gradient の構文は、 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} や {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} の構文に似ています。反復しない扇形グラデーションのように、色経由点はグラデーションの円弧の周りに配置されます。反復放射グラデーションのように、反復部分の大きさは、最後の色経由点の角度から最初の色経由点を引いたものになります。

![反復／反復なしの扇形／放射グラデーションの色経由点の比較](repeatingconicgradient.png)

上記のグラデーションは 3 分の 1 が青、 3 分の 1 が赤、 3 分の 1 が黄色として定義されています。

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

反復グラデーションを繰り返すためには、最初と最後の色経由点を定義します。繰り返さないグラデーションと同様に、最初と最後の色経由点は、明示的に宣言されていない場合、 0 と 100% または 360deg のいずれかであると仮定されます。これらの値を既定値とした場合、反復アークは360度となるため、繰り返されません。

繰り返しのない扇形グラデーションと同様に、色経由点はグラデーションの中心から出ているグラデーション軸上ではなく、グラデーション円弧 (円の円周) の周りに配置されます。 `from <angle>` が宣言されていない場合は一番上から始まり、最大と最小の色の角度の違いである角度の大きさ分だけ時計回りに進み、それを繰り返すことで、円の中心を回るように色が推移します。

繰り返しの扇形グラデーションは、回転角度とグラデーションの中心を指定し、さらに色経由点のリストを指定します。反復のない扇形グラデーションと同様に、反復扇形グラデーションの色経由点は {{cssxref('angle')}} で指定します。単位は、度は `deg`、グラデーションは `grad`、ラジアンは `rad`、ターンは `turn` です。円は、360 度、400 グラード、2πラジアン、1 ターンです。反復扇形グラデーションに対応しているブラウザーでは、360 度を 100% とするパーセント値も受け付けますが、これは仕様にはありません。

放射グラデーションと扇形グラデーションの構文は、グラデーションの中心を画像内または画像外の任意の場所に配置することができます。位置を指定する値は、 2 値の {{cssxref('background-position')}} の構文と同様です。

グラデーション円弧はグラデーションの円周の一部です。 0 度は北、つまり 12 時の方向です。グラデーションの色は、角度のついた色経由点、その開始点、終了点、そしてその間にある、任意の角度の色経由点ポイントによって決定されます。色の遷移は、隣接する色の色経由点の間にあるカラーヒントで変更することができます。

#### グラデーションのカスタマイズ

グラデーションの円弧上に角度のついた色経由点ポイントをさらに追加することで、複数の色の間の高度なカスタマイズされた移行を行うことができます。色経由点の位置は、{{CSSxRef("&lt;angle&gt;")}} を使って明示的に定義することができます。色経由点の位置を指定しない場合は、その前の色経由点と後の色経由点の中間に配置されます。反復しないグラデーションと同様に、最初と最後の色経由点の角度を指定しない場合、その値は 0 度と 360 度になります。いずれの角度も指定しない場合は、非反復の円錐形グラデーションになります。最初と最後の色経由点にそれぞれ 0 度と 360 度以外の値を宣言すると、グラデーションはその値に基づいて繰り返されます。例えば、最初の色に角度を宣言せず、最後の色止めに 10% と宣言した場合、円弧は 10 回繰り返されます。むしろ、最初に宣言した色経由点が起点となり、最後の色経由点は最後に宣言した色経由点の角度となります。次の 2 つのグラデーションは等価です。

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

既定では、色はある色経由点の色から次の色経由点の色へとスムーズに移行し、色と色の中間点が色移行の中間点となります。この色遷移の中間点は、色遷移の中間点の位置を示すカラーヒントを追加することで、 2 つの色経由点間の任意の位置に移動させることができます。

2 つ以上の色経由点が同じ場所にある場合、その場所で宣言された最初の色と最後の色の間で硬い線になります。

異なる角度の単位を混在させることは可能ですが、やめておきましょう。 CSS が読みづらくなります。

### 形式文法

{{csssyntax}}

## アクセシビリティの考慮

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要なことで、スクリーンリーダーはその存在を告知しないため、ユーザーに何も伝えられません。扇形グラデーションを使って円グラフや市松模様などの効果を出すことは可能ですが、 CSS 画像は代替テキストを割り当てるネイティブな方法を提供していないため、扇形グラデーションで表現された画像はスクリーンリーダーのユーザーが認知することはできません。ページの全体的な目的を理解するために重要な情報が画像に含まれている場合は、文書内で意味的に記述する方が良いでしょう。

- [MDN WCAG を理解する, ガイドライン 1.1 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 例

### 白黒のスターブラスト

```css hidden live-sample___black_and_white_starburst
div {
  width: 200px;
  height: 200px;
}
```

```html hidden live-sample___black_and_white_starburst
<div></div>
```

```css live-sample___black_and_white_starburst
div {
  background-image: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}
```

{{EmbedLiveSample("Black_and_white_starburst", 220, 220)}}

### 中心をずらしたグラデーション

このグラデーションは 18 回繰り返されますが、右半分しか見えないので、 9 回の繰り返しにしか見えません。

```css hidden live-sample___off-centered_gradient
div {
  width: 200px;
  height: 200px;
}
```

```html hidden live-sample___off-centered_gradient
<div></div>
```

```css live-sample___off-centered_gradient
div {
  background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    green,
    blue 2deg 5deg,
    green,
    yellow 15deg 18deg,
    green 20deg
  );
}
```

{{EmbedLiveSample("Off-centered_gradient", 220, 220)}}

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
  background-image: repeating-conic-gradient(
    in hsl shorter hue,
    red,
    blue 180deg
  );
}

.longer {
  background-image: repeating-conic-gradient(
    in hsl longer hue,
    red,
    blue 180deg
  );
}
```

左のボックスは、 [shorter の補間](/ja/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter)を使用しており、[色相環](/ja/docs/Glossary/Color_wheel)の短い方の弧を使用して、色が赤から青に直接変化しているということになります。右のボックスは、 [longer の補間](/ja/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer)を使用しており、色が赤から青に変化する際に、緑、黄、オレンジを通って変化しているということになります。

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### その他の repeating-conic-gradient の例

それ以外の例は [CSS グラデーション](/ja/docs/Web/CSS/Guides/Images/Using_gradients)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
- その他のグラデーション関数: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/ja/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/ja/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
