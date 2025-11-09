---
title: 背景と境界線
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

このレッスンでは、CSS の背景および境界モジュールの機能を使ったクリエイティブな表現方法をいくつか見ていきます。グラデーション、背景画像、角の丸めを加えることを通じて、CSS を使ったスタイル設定の多様な課題に対する解答が得られるでしょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS の値と単位</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS におけるサイズ設定<a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>基本的な背景スタイル設定（色と画像）。</li>
          <li>背景画像のサイズ、繰り返し、位置指定、添付場所。</li>
          <li>背景のグラデーション — 一般的な概念と線形グラデーション（放射、扇形、反復グラデーションはより高度なものです。現段階では、深い知識は要求されません。）</li>
          <li>背景のアクセシビリティを考慮する — コントラストを確実に保持する。</li>
          <li>境界線の基本 — 幅、スタイル設定、色、境界線の一括指定。角を丸める場合は、角丸機能を使用します。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS による背景の設定

CSS の {{cssxref("background")}} プロパティは一括指定プロパティであり、このレッスンで説明する多くの個別指定プロパティを一度に指定します。スタイルシートで複雑な背景プロパティを見かけると、一度に多くの値を渡していて理解するのが少し難しく感じるかもしれません。

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgb(255 255 255 / 20%) 39%,
        rgb(51 56 57 / 100%) 96%
      )
      center center / 400px 200px no-repeat,
    url(image.png) center no-repeat,
    rebeccapurple;
}
```

一括指定の仕方については後ほど改めて扱います。まずは背景に対して CSS で何ができるのかを知るために、ひとつひとつのプロパティを見ていきましょう。

### 背景色

{{cssxref("background-color")}} プロパティは、要素の背景色を定義します。このプロパティは、有効な [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) 値を受け入れます。 `background-color` は、要素のコンテンツおよびパディングボックスの下に広がります。

次の例では、さまざまな色の値を使用して、ボックス、見出し、 {{htmlelement("span")}} 要素に背景色を指定しています。
あなた自身で、利用可能な [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) を使ってみましょう。

```html live-sample___color
<div class="box">
  <h2>背景色</h2>
  <p>背景の<span>色</span>を変更してみてください。</p>
</div>
```

```css live-sample___color
.box {
  padding: 0.3em;
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
span {
  background-color: rgb(255 255 255 / 50%);
}
```

{{EmbedLiveSample("color")}}

### 背景画像

{{cssxref("background-image")}} プロパティにより、要素の背景に画像を表示することができます。下記の例では、 2 種類のボックスがあります。 1 つはボックスよりも大きな背景画像 ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)) があり、もう一方は単一の星の小さな画像 ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)) があります。

この例は、背景画像に関する 2 つのことを示しています。既定では、大きな画像はボックスに収まるように縮小されず、一部分のみが表示されます。いっぽう、小さな画像はボックスの内側いっぱいまで繰り返されます。この場合、実際の画像は星 1 個のみです。

```html live-sample___background-image
<div class="wrapper">
  <div class="box a"></div>
  <div class="box b"></div>
</div>
```

```css live-sample___background-image
.wrapper {
  display: flex;
}

.box {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}

.a {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
}

.b {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png);
}
```

{{EmbedLiveSample("background-image")}}

背景画像と背景色を同時に指定すると、背景色より手前に背景画像が表示されます。
上記の例に `background-color` プロパティを追加して、動作を確認してみましょう。

#### 背景画像の反復の指定

{{cssxref("background-repeat")}} プロパティは、画像の反復表示の動作を制御するために使用されます。使用可能な値には次のものがあります:

- `no-repeat` — 背景画像が反復されるのを完全に防ぎます。
- `repeat-x` — 水平方向に反復します。
- `repeat-y` — 垂直方向に反復します。
- `repeat` — 既定値です。両方の方向に反復します。
- `space` — 可能な限り何度も反復し、利用できる空間があれば、画像と画像の間に空間を加えます。
- `round` — `space` に似ていますが、余分な空間を埋めるように画像を伸ばします。

以下の例でこれらの値を試してみましょう。値を `no-repeat` に設定したため、星が 1 つだけ表示されます。異なる値（`repeat-x` や `repeat-y`）に変えてみて、その効果を確認してみましょう。

```html live-sample___repeat
<div class="box"></div>
```

```css hidden live-sample___repeat
.box {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}
```

```css live-sample___repeat
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png);
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("repeat")}}

#### 背景画像のサイズ指定

最初の背景画像の例で使用した _balloons.jpg_ の画像は、背景となる要素よりも大きいためにトリミングされた大きな画像です。この用途では、 {{cssxref("background-size")}} プロパティを使用することができます。このプロパティは、 {{cssxref("length")}} または {{cssxref("percentage")}} 値を導くことができ、背景内に収まるように画像のサイズを調整します。

また、次のキーワードを使うこともできます。

- `cover` — ブラウザーは、{{glossary("aspect ratio","アスペクト比")}}を維持したままボックスの領域を完全に覆うように画像の大きさを調整します。
  この場合、画像の一部が箱の外に出る可能性があります。
- `contain` — ブラウザーは、画像がボックス内にちょうど収まるように画像の大きさを調整します。この場合、画像とボックスのアスペクト比が異なる場合、画像の左右または上下に隙間ができる可能性があります。

下記の例では、 _balloons.jpg_ の画像を長さの単位と共に使用して、ボックス内に収まるサイズにしました。これにより、画像が歪んでいるのがわかります。

以下を試してみましょう。

- 背景のサイズをあらわす長さの単位を変更しましょう。
- 長さの単位を削除し、 `background-size: cover` や `background-size: contain` を使うとどうなるかを確認しましょう。
- 画像がボックスより小さい場合は、 `background-repeat` の値を変更すると画像を繰り返すことができます。

```html live-sample___size
<div class="box"></div>
```

```css hidden live-sample___size
.box {
  width: 500px;
  height: 100px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 10px;
}
```

```css live-sample___size
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-repeat: no-repeat;
  background-size: 80px 10em;
}
```

{{EmbedLiveSample("size")}}

#### 背景画像の位置の指定

{{cssxref("background-position")}} プロパティを適用すると、そのボックス上で背景画像を表示する位置を選択できます。これは、ボックスの左上端を `(0,0)` とし、ボックスを水平軸 (`x`) と垂直軸 (`y`) に沿って位置指定する座標系を使用します。

> [!NOTE]
> 既定の `background-position` の値は `(0,0)` です。

最も一般的な `background-position` の値は、2 個の値をとります—水平方向、垂直方向の順で値を指定します。

`top` や `right` などのキーワードが使用できます（詳しくは {{cssxref("background-position")}} ページを参照）。

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

そして、{{cssxref("length", "長さ")}}および{{cssxref("percentage", "パーセント値")}}を使用できます。

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

キーワード値と長さやパーセント値を混在させることもできます。その場合、最初の値は水平位置またはオフセットを参照し、 2 つ目は垂直位置を参照する必要があります。例えば、次のようにします。

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

最後に、 4 つの値をとる構文を使って、ボックスのいずれかの端からの距離を示すこともできます。この場合の長さは、その直前の値で指定した位置からの距離（オフセット）です。下の CSS では、背景を上から 20px、右から 10px に配置しています。

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

次の例を使い、プロパティの値を変えてボックス内で星を動かしてみましょう。

```html live-sample___position
<div class="box"></div>
```

```css hidden live-sample___position
.box {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}
```

```css live-sample___position
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png);
  background-repeat: no-repeat;
  background-position: 120px 1em;
}
```

{{EmbedLiveSample("position")}}

> [!NOTE]
> 一括指定の `background-position` を {{cssxref("background-position-x")}} および {{cssxref("background-position-y")}} の代わりに使用して、それぞれの座標軸の方向の位置を個別に設定することができます。

### グラデーションの背景

グラデーション (gradient) は、背景に使用する場合には画像と同じようにふるまいます。グラデーションは {{cssxref("background-image")}} プロパティを使用して設定されます。

[`<gradient>`](/ja/docs/Web/CSS/Reference/Values/gradient) データ型の MDN ページで、さまざまな種類のグラデーションとそれらを使ってできることについて詳しく読むことができます。ウェブで数多く提供されている CSS グラデーションジェネレーター、たとえば [CSSGradient.io](https://cssgradient.io/) を使用して、グラデーションを楽しく試せます。このウェブサービスでは、グラデーションを作成したのち、グラデーションを生成するソースコードをコピー & ペーストできます。

以下の例でいろいろなグラデーションを試してみましょう。 1 つめのボックスには、ボックス全体に広がる線形グラデーション (linear gradient) を指定しています。2 つめのボックスには、サイズを設定して（そのため繰り返されている）放射グラデーション (radial gradient) を指定しています。

```html live-sample___gradients
<div class="wrapper">
  <div class="box a"></div>
  <div class="box b"></div>
</div>
```

```css live-sample___gradients
.wrapper {
  display: flex;
}

.box {
  width: 400px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}

.a {
  background-image: linear-gradient(
    105deg,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
}

.b {
  background-image: radial-gradient(
    circle,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
  background-size: 100px 50px;
}
```

{{EmbedLiveSample("gradients")}}

### 複数の背景画像

`background-image` プロパティにカンマ区切りで複数の画像を指定することで、複数の背景画像を使用することもできます。

これを行うと、背景画像が重なり合うことがあります。背景は、最後に記載されている背景画像が積み重ねの最下層となり、その上にコードで前の画像が順に積み重ねられます。

> [!NOTE]
> グラデーションを通常の背景画像と同じように重ね合わせることができます。

他の `background-*` プロパティも、 `background-image` と同じ方法でカンマ区切りの値を持つことができます。

```css
background-image:
  url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

プロパティに指定した複数のプロパティ値は、他のプロパティの同じ位置にある値と対応します。上の例で、`image1` の `background-repeat` 値は `no-repeat` です。では、プロパティごとに値の個数が異なるとどうなるでしょうか？答えは、個数が少ない値が繰り返し使われる、ということです。上の例では、 4 つの背景画像がありますが、 2 つの `background-position` の値しかありません。最初の 2 つの位置の値は対応する位置の画像に適用され、その後は繰り返されます。つまり、 `image3` には 1 番目、`image4`には 2 番目の値がふたたび使われます。

実際に試してみましょう。以下の例には 2 つの背景画像があります。重ね合わせの順序を確かめるために、どの背景画像を先にするかを変えてみてください。また、他のプロパティを操作して、位置、サイズ、繰り返し方法を変えてみてください。

```html live-sample___multiple-background-image
<div class="wrapper">
  <div class="box"></div>
</div>
```

```css live-sample___multiple-background-image
.wrapper {
  display: flex;
}

.box {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}

.box {
  background-image:
    url(https://mdn.github.io/shared-assets/images/examples/star.png),
    url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}
```

{{EmbedLiveSample("multiple-background-image")}}

### スクロール時の背景画像の固定

背景に使用できるもうひとつのオプションは、コンテンツがスクロールするときのスクロール方法を指定することです。これは、 {{cssxref("background-attachment")}} プロパティを使用して制御され、次の値を取ることができます。

- `scroll`: ページ全体のスクロールに応じて要素の背景を移動します。要素のコンテンツがスクロールされた場合には、背景は移動しません。
  実際には背景はページ上の同じ位置に固定されているため、ページがスクロールするとスクロールします。
- `fixed`: 要素の背景をビューポート (viewport) に固定します。ページや要素のコンテンツがスクロールされても移動せず、画面上の同じ位置にとどまります。
- `local`: 要素の背景をその要素自身に対して固定します。要素のコンテンツをスクロールした場合にもそれにあわせて背景が移動します。

{{cssxref("background-attachment")}} プロパティは、スクロールするコンテンツがある場合にのみ効果を保有するので、3つの値の違いを示すデモを作成しました。3 つの値の違いを示すデモを作成しました。 [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)（[ソースコード](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds)はこちら）。

### background 一括指定プロパティの使用

このレッスンの冒頭で、 {{cssxref("background")}} プロパティを使って背景が指定されている場合についてふれました。この一括指定プロパティを使うと、複数のプロパティを一度に設定できます。

複数の背景を使用する場合は、最初の背景に対するプロパティをすべて指定してから、カンマで区切って次の背景を追加します。以下の例では、サイズと位置を伴ったグラデーション、`no-repeat`と位置指定を伴った画像の背景、そして背景色を指定しています。

背景画像に関する一括指定を書くとき、いくつかのルールを守る必要があります。例を挙げます。

- `background-color` は最後のカンマの後にのみ指定できます。
- `background-size` の値は、 `background-position` の値の直後に `/` 文字で区切ってのみ、 `center/80%` のように指定できます。

すべての注意点を確認するには、 {{cssxref("background")}} の MDN ページをご覧ください。

```html live-sample___background
<div class="box"></div>
```

```css live-sample___background
.box {
  width: 500px;
  height: 300px;
  padding: 0.5em;
  background:
    linear-gradient(
        105deg,
        rgb(255 255 255 / 20%) 39%,
        rgb(51 56 57 / 100%) 96%
      )
      center center / 400px 200px no-repeat,
    url(https://mdn.github.io/shared-assets/images/examples/big-star.png) center
      no-repeat,
    rebeccapurple;
}
```

{{EmbedLiveSample("background", "", "320px")}}

### 背景についてのアクセシビリティの考慮

テキストを背景画像や背景色の上に配置する際には、閲覧者がテキストを読み取れるだけの十分な[コントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)を確保するよう注意する必要があります。画像の上にテキストを配置する場合は、画像が読み込まれない場合でもテキストが読み取れるような背景色も指定する必要があります。

スクリーンリーダーは背景画像を解釈できないため、画像は装飾としての役割のみを担うべきです。重要なコンテンツはすべて HTML ページの中で表現するべきで、背景画像の中に含めるべきではありません。

## 境界線

[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)について学習するとき、境界線 (border) がボックスのサイズにどのように影響するかを見てきました。このレッスンでは、境界線をクリエイティブに活用する方法を見ていきます。通常、CSS で要素に境界線を追加するときは、CSS の 1 行で境界線の色、幅、[スタイル](/ja/docs/Web/CSS/Reference/Values/line-style)を指定する一括指定プロパティを使います。

{{cssxref("border")}} を使用すると、ボックスの 4 辺すべてに境界線を設定できます。

```css
.box {
  border: 1px solid black;
}
```

または、次のように、ボックスの 1 つの辺を対象にすることができます。

```css
.box {
  border-top: 1px solid black;
}
```

個々のプロパティには一括指定の {{cssxref("border-width")}}、{{cssxref("border-style")}}、{{cssxref("border-color")}} プロパティがあります。

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

4 つの辺それぞれに幅、スタイル、色の個別指定プロパティがあります。

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> top, right, bottom, left の各方向の境界線を指定するプロパティには、HTML 文書の書字方向 (writing mode) と結びついた[論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values#プロパティ)が割り当てられています（書字方向は、左から右、右から左、上から下といったテキストの方向を制御するものです）。次回のレッスンでは、[テキスト方向の扱い](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)に応じたこれらの方法を探ります。

境界線にはさまざまなスタイルを指定できます。以下の例では、ボックスの 4 辺にそれぞれ異なる境界線スタイルを使用しています。境界線の色、幅、スタイルを試して、境界線の動作を確認しましょう。

```html live-sample___borders
<div class="box">
  <h2>境界線</h2>
  <p>境界線を変更してみましょう。</p>
</div>
```

```css live-sample___borders
* {
  padding: 0.2em;
}
.box {
  width: 500px;
  background-color: #567895;
  border: 5px solid #0b385f;
  border-bottom-style: dashed;
  color: #fff;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", "200px")}}

### 角の丸め

{{cssxref("border-radius")}} 一括指定プロパティと、各々の角に対応した個別指定プロパティを使用して、ボックスの角の丸みを実現できます。各プロパティは 2 個の長さまたはパーセント値を値として使用できます。最初の値は水平方向の半径 (radius) を定義し、2 番目の値は垂直方向の半径を定義します。多くの場合、1 つの値のみを指定して両方向に適用します。

例えば、ボックスの 4 つの角すべてに半径 10px の丸みを持たせるには次のようにします。

```css
.box {
  border-radius: 10px;
}
```

または、右上角の水平方向の半径を `1em`、垂直方向の半径を 10% にするには次のようにします。

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> 上記の境界線プロパティと同様に、これらの border-radius プロパティも割り当てられた[論理的 border-radius プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values#プロパティ)もあります。

以下の例では、はじめに 4 つの角すべてについて角の丸みを設定したのち、右上角を他と異なる値に変更しました。値を変えて試してみましょう。使用できる構文は {{cssxref("border-radius")}} プロパティのページを見て確認してください。[境界角丸ジェネレーター](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)を使用して、角丸値を出力することができます。

```html live-sample___corners
<div class="box">
  <h2>境界線</h2>
  <p>境界線を変更してみましょう。</p>
</div>
```

```css live-sample___corners
.box {
  width: 500px;
  height: 110px;
  padding: 0.5em;
  border: 10px solid rebeccapurple;
  border-radius: 1em;
  border-top-right-radius: 10% 30%;
}
```

{{EmbedLiveSample("corners")}}

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: 背景と境界線](/ja/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders)を見てください。

## まとめ

ここでかなり多くのことを取り上げましたが、ボックスに背景や境界線を追加するにはかなり多くのことがあることがお分かりいただけたと思います。ここで説明した機能についてもっと知りたければ、さまざまなプロパティのページを探してみてください。 MDN でほとんどすべてのページに、知識を深めるために試してみる例があります。

次の記事では、要素ボックス内に収まりきらないほどコンテンツが多い場合に現れる「オーバーフロー」の概念について、さらに詳しく見ていきましょう。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
