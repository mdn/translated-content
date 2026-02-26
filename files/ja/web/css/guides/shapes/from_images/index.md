---
title: 画像からのシェイプの作成
short-title: 画像に基づくシェイプ
slug: Web/CSS/Guides/Shapes/From_images
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

このガイドでは、アルファチャンネルを含む画像ファイル、または CSS グラデーションからシェイプを作成する方法を見ていきます。これはシェイプを作成するためのとても柔軟な方法です。 CSS で複雑なポリゴンを持つパスを描画するのではなく、グラフィックプログラムでシェイプを作成し、しきい値よりも透明度の高いピクセルによって作成されたパスを使用することができます。

## 画像からシェイプを作成

画像を使用してシェイプを作成するためには、画像に完全に不透明ではない領域があるアルファチャンネルが必要です。 {{cssxref("shape-image-threshold")}} プロパティは、この透明度のしきい値を設定するために使用されます。この値よりも透明度の低いピクセルは、シェイプの範囲を計算するために使用されます。

次の例では、赤い塗りつぶしの星形の領域と、完全に透明な領域のある画像があります。 {{cssxref("shape-outside")}} プロパティの値として、画像ファイルへのパスを使用します。コンテンツは星形の図形で折り返されるようになりました。

```html-nolint live-sample___simple-example
<div class="box">
  <img
    alt="赤い星"
    src="https://mdn.github.io/shared-assets/images/examples/star-shape.png" />
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___simple-example
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

{{EmbedLiveSample("simple-example", "", "340px")}}

シェイプからテキストを離すために {{cssxref("shape-margin")}} を使用することができ、作成されたシェイプの周囲と、テキストとの間のマージンを指定します。

```html-nolint hidden live-sample___margin
<div class="box">
  <img
    alt="赤い星"
    src="https://mdn.github.io/shared-assets/images/examples/star-shape.png" />
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___margin
body {
  font: 1.2em / 1.5 sans-serif;
}

img {
  float: left;
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  shape-margin: 20px;
}
```

{{EmbedLiveSample("margin", "", "340px")}}

## CORS 互換

画像からシェイプを作成する際には、使用する画像が [CORS 互換](/ja/docs/Web/HTTP/Guides/CORS)である必要があります。サイトと同じドメインにホスティングされている画像は動作しますが、画像が CDN などの別のドメインでホスティングされている場合は、正しいヘッダーを送信してシェイプで利用できるようにする必要があります。この CORS 互換画像の要件のため、ローカルのウェブサーバーを使用せずにローカルでファイルをプレビューすると、シェイプは機能しません。

### CORS の問題かどうか

開発者ツールは CORS エラーを特定するのに役立ちます。 Chrome では、コンソールから CORS の問題が通知されます。 Firefox では、プロパティを調べると、画像が読み込めないという警告が表示されます。これは、画像が CORS のためにシェイプのソースとして使用できないという事実を警告するはずです。

## しきい値の設定

{{cssxref("shape-image-threshold")}} プロパティを使用すると、完全な透明ではない領域からシェイプを作成することができます。 `shape-image-threshold` の値が `0.0` (初期値) の場合、領域は完全に透明になります。値が `1.0` の場合は完全に不透明です。中間の値は、半透明領域を定義領域として設定できることを意味します。

次の例では、最初の例と同様の画像を使用していますが、この画像では、星の背景が完全に透明ではなく、グラフィックプログラムで 20% の不透明度に作成されています。 `shape-image-threshold` を `0.3` に設定すると図形が表示され、 `0.2` より小さい値に設定すると、図形がなくなります。

```html-nolint hidden live-sample___threshold
<div class="box">
  <img
    alt="赤い星"
    src="https://mdn.github.io/shared-assets/images/examples/star-red-20.png" />
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___threshold
body {
  font: 1.2em / 1.5 sans-serif;
}

img {
  float: left;
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-red-20.png");
  shape-image-threshold: 0.2;
}
```

{{EmbedLiveSample("threshold", "", "340px")}}

## 生成コンテンツの画像を使用

上記の例では、画像を {{cssxref("shape-outside")}} の値として使用し、ページにも追加しました。多くのデモでは、沿わせるシェイプを見せるためにこれを行っていますが、 `shape-outside` プロパティはページに表示される画像とは関係がないため、画像を使用してシェイプを作成するために、画像を表示する必要はありません。

何かを浮動状態にする必要がありますが、以下の例のように生成コンテンツを使用することもできます。ここでは生成コンテンツを浮動状態にし、大きな星形の画像を使ってコンテンツを整形していますが、ページ上には何も画像を表示していません。

```html-nolint live-sample___generated-content
<div class="box">
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___generated-content
body {
  font: 1.2em / 1.5 sans-serif;
}

.box::before {
  content: "";
  float: left;
  width: 400px;
  height: 300px;
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("generated-content", "", "420px")}}

## グラデーションを用いたシェイプの作成

[CSS グラデーション](/ja/docs/Web/CSS/Guides/Images/Using_gradients)は画像として扱われるので、透過や半透過の領域をグラデーションの一部として持つことで、グラデーションを使ってシェイプを作ることができます。

次の例では、直線グラデーションの背景画像によって与えられた生成された浮動状態のコンテンツを使用しています。 {{cssxref("shape-outside")}} の値と同じ値を使用しています。直線グラデーションは紫色から透明に変化しますので、 {{cssxref("shape-image-threshold")}} の値を変更すると、どれくらいのピクセルがシェイプを作成するのに必要かを決めることができます。以下の例で値を操作することで、その値に応じてシェイプを横切る対角線がどれだけ移動するかを確認することができます。

背景画像を完全に削除してみることもでき、そうすればグラデーションは純粋にシェイプを作成するために使用され、ページには全く表示されません。

```html-nolint live-sample___gradient
<div class="box">
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___gradient
body {
  font: 1.2em / 1.5 sans-serif;
}

.box::before {
  content: "";
  float: left;
  height: 250px;
  width: 400px;
  background-image: linear-gradient(
    to bottom right,
    rebeccapurple,
    transparent
  );
  shape-outside: linear-gradient(to bottom right, rebeccapurple, transparent);
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("gradient", "", "400px")}}

次の例では、楕円形の放射のグラデーションを使用し、グラデーションの透過部分を再利用してシェイプを作成しています。

```html-nolint hidden live-sample___radial-gradient
<div class="box">
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___radial-gradient
body {
  font: 1.2em / 1.5 sans-serif;
}

.box::before {
  content: "";
  float: left;
  height: 250px;
  width: 400px;
  background-image: radial-gradient(
    ellipse closest-side,
    rebeccapurple,
    blue 50%,
    transparent
  );
  shape-outside: radial-gradient(
    ellipse closest-side,
    rebeccapurple,
    blue 50%,
    transparent
  );
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("radial-gradient", "", "400px")}}

これらのライブサンプルで直接実験して、グラデーションを変更するとシェイプのパスがどのように変化するかを確認することができます。
