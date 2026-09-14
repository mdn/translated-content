---
title: shape-outside と基本シェイプ
short-title: shape-outside の使用
slug: Web/CSS/Guides/Shapes/Using_shape-outside
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

CSS のシェイプは {{cssxref("basic-shape")}} 型を使用して定義することができます。このガイドでは、{{cssxref("shape-outside")}} プロパティを用いて矩形、円、楕円、多角形を作成する方法について解説します。これらは [CSS シェイプモジュール](/ja/docs/Web/CSS/Guides/Shapes)で定義された機能です。

シェイプについて見る前に、これらのシェイプを実現するために一緒に使われる 2 つの情報を理解しておくことに価値があります。

- `<basic-shape>` 型
- 参照ボックス

## \<basic-shape> 型

{{cssxref("basic-shape")}} 型は、すべての基本シェイプを値として使用します。この型は関数表記を使用します。シェイプ型の後に括弧が続き、中にシェイプを定義する追加の値があります。

受け付ける引数は、作成しようとしているシェイプによって様々です。これらは以下の例で説明します。

## 参照ボックス

CSS シェイプで使用される参照ボックスを理解することは、これがそれぞれのシェイプの座標システムを定義するので、基本シェイプを使用するときには重要です。参照ボックスは既に[ボックス値からシェイプを作成するガイド](/ja/docs/Web/CSS/Guides/Shapes/From_box_values)で、直接参照ボックスを使用してシェイプを作成するのを見たことがありますね。

次のスクリーンショットは、Firefox のシェイプインスペクターが `shape-outside: circle(50%)` で作成された円の参照ボックスを表示している様子を示しています。この要素には 20 ピクセル分のパディング、境界線、マージンが適用されています。シェイプインスペクターはこれらの参照ボックスを強調表示します。

![左寄せの浮動ボックスで配置された円周に沿ってテキストが回り込みます。テキストの左端は円形となり、マージンの外側でクリップ図形に接し、マージンは図形のクリップに従うことで追従します。](shapes-reference-box.png)

基本シェイプのデフォルト参照ボックスは `margin-box` です。このスクリーンショットでは、シェイプがボックスモデルの領域に対して相対的に定義されていることがわかります。

デフォルトの参照ボックスは `margin-box` ですが、これは変更可能です。別のボックスを参照ボックスとして設定するには、基本シェイプ定義の後に目的のボックス値を指定してください。

これらの 2 つの宣言は同じです。

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

異なる参照ボックスを使用するには、異なる {{cssxref("box-edge")}} 値を指定します。例えば、円に対して境界線を参照ボックスとして使用するには、次のように設定します。

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

マージンボックスからはみ出した図形は、マージンボックスに合わせて切り取られます。以下の基本シェイプでこれを確認できます。

## inset()

[`inset()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/inset) 型は矩形を定義します。アイテムを浮動にすると、その周囲に矩形ができるので、あまり有用ではないように見えるかもしれません。しかし、 `inset()` 型はオフセットの定義が可能なので、コンテンツをシェイプの上に引き込むことができます。

`inset()` 関数は最大 4 辺のオフセット値と、オプションの `round` キーワード、それに続く {{cssxref("border-radius")}} 値を取ります。次の CSS は、浮動ボックス要素の参照ボックスから、上下 20 ピクセル、左右 10 ピクセル内側に位置する矩形シェイプを生成し、`border-radius` 値を 10 ピクセルに設定します。

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

オフセット値は {{cssxref("margin")}} の一括指定と同じ規則を使用します。空白区切りで 4 つの値を指定し、上から順に上、右、下、左のオフセットを定義します。複数のオフセットを一度に設定することも可能です。

- 値が 1 つしかない場合、すべての辺に適用されます。
- 値が 2 つある場合、上下のオフセットに 1 つ目の値が設定され、左右のオフセットに 2 つ目の値が設定されます。
- 値が 3 つある場合、上に 1 つ目、左右に 2 つ目、下に 3 つ目の値が設定されます。

つまり、上記のルールは次のように表現することもできます。

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

以下の例では、 `inset()` シェイプを使用して、浮動要素にコンテンツを引き寄せています。オフセットの値を変更して、シェイプがどのように変化するかを見てみましょう。

```html-nolint live-sample___inset
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___inset
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  shape-outside: inset(20px 50px 10px 0 round 50px);
  background-color: rebeccapurple;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}
```

{{EmbedLiveSample("inset", "", "250px")}}

また、参照ボックスとして使用したいボックス値を追加することもできます。以下の例では、参照ボックスを `margin-box` から `border-box`、`padding-box`、`content-box` のいずれか変更すると、オフセットの計算前に開始点として使用する参照ボックスがどのように変化するかを確認することができます。

```html-nolint hidden live-sample___inset-box
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___inset-box
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  shape-outside: inset(20px 50px 10px 0 round 50px) margin-box;
  background-color: rebeccapurple;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}
```

{{EmbedLiveSample("inset-box", "", "250px")}}

また、[`rect()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/rect) 関数を使用して参照ボックスの上端および左端からの距離に基づいて矩形を作成したり、[`xywh()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/xywh) 関数を使用して、幅と高さで矩形を作成することも可能です。これら両方の関数では、角を丸めるオプションにも対応しています。

## circle()

`shape-outside` の [`circle()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/circle) 値は、サイズを指定する `<shape-radius>` と、場所を指定する `<position>` の 2 つの引数を取ることができます。

`shape-outside` の `circle()` と `ellipse()` の両方の値は、この [`<shape-radius>`](/ja/docs/Web/CSS/Reference/Values/basic-shape#shape-radius) という引数を受け付けるように指定されています。この引数は、{{cssxref("length")}}、{{cssxref("percentage")}}、キーワード値の `closest-side` または `farthest-side` のいずれかにすることができます。

`closest-side` のキーワードは、シェイプの中心から参照ボックスの最も近い辺までの長さを使用します。`farthest-side` のキーワードは、シェイプの中心から参照ボックスの最も遠い辺までの長さを使用します。

第 2 引数には位置を指定します。これは 1 つまたは 2 つのキーワードによる {{cssxref("&lt;position&gt;")}} 値で、円の中心を示します。これは {{cssxref("background-position")}} と同様の方法で指定します。一方または両方の値が省略された場合、値はデフォルトで `center` になります。

円を生成するには、単一の半径値を記載し、必要に応じてキーワード **at** と位置の値を続けます。この例では、{{htmlelement("img")}} に`width` と `height` が `210px`、`margin` が `20px` の円が適用されています。これにより、参照ボックスの幅の合計幅は `250px` となります。`<shape-radius>` の `50%` の値は半径が `125px` であることを意味します。位置の値は `30%` に設定されており、これは左端から `30%` の位置で、垂直方向はデフォルトの `center` （中央）となります。

```html-nolint live-sample___circle
<div class="box">
  <img
    alt="下から見たオレンジ色の熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em sans-serif;
}

img {
  float: left;
  shape-outside: circle(50% at 30%);
  margin: 20px;
}
```

{{EmbedLiveSample("circle", "", "250px")}}

円の半径を変更して円のサイズを増減させたり、位置値で円を移動させたり、`inset()` で行ったように参照ボックスを設定したりして操作してみてください。

次の例では、`circle()` 関数による生成コンテンツと、位置指定にキーワード `top left` を使用する組み合わせています。これにより、ページの左上角に 1/4 の扇形が生成され、テキストがその周囲に流れるようになります。

```html-nolint live-sample___circle-generated
<div class="box">
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___circle-generated
body {
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  float: left;
  width: 250px;
  height: 250px;
  shape-outside: circle(50% at top left);
}
```

{{EmbedLiveSample("circle-generated", "", "300px")}}

### 図形はマージンボックスで切り取られる

上記の[参照ボックス](#参照ボックス)の説明の際に、`margin-box` ではシェイプが切り取られることを説明しました。これは、位置を `60%` に設定して、円の中心をコンテンツの方に移動させることで確認できます。円の中心はコンテンツに近くなり、円は margin-box を越えて広がっています。これは、広がった部分が切り取られ、四角くなることを意味します。

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![円形はマージンボックスで切り取られる](shapes-circle-clipped.png)

## ellipse()

楕円は基本的に円をつぶしたものなので、 [`ellipse()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/ellipse) は `circle()` ととてもよく似た動作をしますが、 `x` と `y` の 2 つの半径をこの順番で指定しなければならない点が異なります。

その後、`circle()` と同様に、楕円の中心位置を定義するために、1 つまたは 2 つの `<position>` 値を続けることができます。以下の例では、 `x` の半径が `40%`、 `y` の半径が `50%`、`<position>` が `left` の楕円を作成しています。これは、楕円の中心がボックスの左端にあることを意味し、テキストを囲むための半分の楕円の形が得られます。これらの値を変更することで、楕円の形がどのように変化するかを確認できます。

```html-nolint live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

キーワード値である `closest-side` と `farthest-side` は、浮動要素の参照ボックスの大きさに基づいて、素早く楕円を作成するのに便利です。

```html-nolint hidden live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "250px")}}

## polygon()

[`polygon()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/polygon) 関数はより複雑で、多角形のシェイプを作成できます。このシェイプは 3 つ以上の値のペアを受け入れます（ポリゴンは少なくとも三角形を描画しなければなりません）。ぞれぞれの値は参照ボックスに相対的な単一の頂点の座標をカンマ区切りで指定したものであり、それを空白で区切ります。座標ペアの組み合わせでポリゴンの辺が定義され、最後の辺は最後の座標と最初の座標の組み合わせで定義されます。

下の例では、`polygon()` を使って、テキストを追うための形状を作成しました。どの値を変更しても、形状がどのように変化するかを見ることができます。

```html-nolint hidden live-sample___polygon
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___polygon
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  shape-outside: polygon(
    0px 0px,
    0px 189px,
    100.48% 94.71%,
    200px 120px,
    80.67% 37.17%
  );
  width: 200px;
  height: 200px;
}
```

{{EmbedLiveSample("polygon", "", "250px")}}

さらに複雑な図形を作成するには、[`path()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/path) または [`shape()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/shape) 関数を使用して任意のシェイプの輪郭を定義できます。

`inset()`、`circle()`、`ellipse()`、`polygon()` は、Firefox 開発者ツールのシェイプインスペクターを使用して確認および編集できます。下記スクリーンショットは、ツール内で図形が強調表示されている様子を示しています。

![シェイプインスペクターで強調表示されたポリゴンの基本シェイプ](shapes-polygon.png)

もう一つの有用なリソースは [Clippy](https://bennettfeely.com/clippy/) です。これは {{cssxref("clip-path")}} 用のシェイプを作成するツールですが、基本シェイプの値は `clip-path` で使われるものと同じだからです。
