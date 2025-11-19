---
title: シェイプの概要
slug: Web/CSS/Guides/Shapes/Overview
original_slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

[CSS シェイプモジュール](/ja/docs/Web/CSS/Guides/Shapes)は、 CSS における幾何学的な図形（シェイプ）を記述しています。この記事では、必ずしも長方形とは限らない浮動要素にテキストを回り込ませるために、シェイプを使用する方法の概要を説明します。

アイテムを左に浮動した状態にすると、テキストがアイテムの右と下に長方形に回り込みます。 CSS シェイプを使用すると、例えば、円のシェイプを適用すると、テキストはその円の縁に沿って折り返されます。

この円を作成する方法はいくつもあります。これらのガイドで CSS シェイプの動作や、利用する方法を見ていきます。

## この仕様書は何を定義しているのか

仕様書では、いくつかのプロパティを定義しています。

- {{cssxref("shape-outside")}} — 基本的なシェイプを定義することができます
- {{cssxref("shape-image-threshold")}} — 透過度のしきい値を設定します。画像がシェイプの定義に使用される場合、画像の中で透過度がしきい値以上の部分のみが、シェイプとして定義されます。他の部分は無視されます。
- {{cssxref("shape-margin")}} — 定義されたシェイプの周囲のマージンを設定します。

## 基本シェイプの定義

`shape-outside` プロパティでシェイプを定義することができます。これは様々な値を取り、 {{cssxref("&lt;basic-shape&gt;")}} データ型で定義され、すべてが異なるシェイプを定義します。とても簡単なケースから見てみましょう。

次の例では、左に浮動状態にした画像があります。それから `shape-outside` プロパティを `circle(50%)` の値で適用しています。その結果として、コンテンツは画像のボックスで形成された矩形ではなく、丸い形状の周りのカーブになります。

```html-nolint live-sample___circle
<div class="box">
  <img
    alt="下から見たオレンジ色の熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "280px")}}

ここでは、現代のすべてのブラウザーで対応している {{cssxref("basic-shape/circle", "circle()")}} 関数を使用しました。完全対応していない新しいシェイプ型を使用した場合、非対応ブラウザーのユーザーは、画像が浮動するため、コンテンツが長方形の辺を流れるように表示されます。シェイプは視覚的なプログレッシブエンハンスメントです。

### 基本的なシェイプ

`circle(50%)` の値は基本的なシェイプの例の一つです。仕様書では次のように、いくつかの `<basic-shape>` 値を定義しています。

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

これらの関数のうち 3 つは長方形を定義するだけです。 `inset()` 関数では、 4 つのオフセット値を定義し、折り返しコンテンツの行ボックスを他の方法よりもオブジェクトに近づけます。 `rect()` 関数は、ブロックの上端と左端からの距離を指定して矩形を定義します。 `xywh()` 関数は、参照ボックスの上端と左端からの距離を指定し、その始点から矩形の幅と高さを設定します。

`circle()` で円形を作る方法はすでに見ました。 `ellipse()` は基本的に円をつぶしたものです。これらの基本的な図形でうまくいかない場合は、一連の直線を定義できる `polygon()` 関数を使ってより複雑な図形を作ることができます。 `path()` 関数と `shape()` 関数を使えば、線、曲線、移動の一連のコマンドを使ってどんな形でも作ることができます。

この章の[基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)で、利用できるそれぞれの基本シェイプとその作成方法を紹介します。

### ボックス値からのシェイプの作成

シェイプはボックス値の周りに作成することができます。従って、次のボックスの上にシェイプを作成することができます。

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

次の例では、 `border-box` の値を他の取りうる値に変更して、シェイプがボックスに近づいたり離れたりする様子を確認することができます。

```html-nolint live-sample___box
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___box
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("box", "", "320px")}}

ボックス値についてより詳しく知るには、[ボックス値からのシェイプの作成](/ja/docs/Web/CSS/Guides/Shapes/From_box_values)を参照してください。

### 画像からのシェイプの作成

パスを作成するための面白い方法として、アルファチャンネルを持つ画像を使用する方法があります。 — 文字列は画像の不透過な部分に回り込みます。これにより、画像の周りに折り返されたコンテンツを重ね合わせたり、ページには表示されない画像を、ポリゴンを注意深くマッピングすることなく、複雑な形状を作成する方法として純粋に使用したりすることができる。

なお、この方法で使用される画像は [CORS 互換である](/ja/docs/Web/HTTP/Guides/CORS)必要があり、そうでなければ `shape-outside` は値として `none` が指定されたかのように動作し、シェイプを得ることはできません。

次の例では、完全に透過した領域がある画像を用い、この画像を `shape-outside` の URL 値として使用しています。シェイプは透過しない領域 — つまり、気球の画像の周りに作られます。

```html-nolint live-sample___image
<div class="box">
  <img
    alt="下から見たオレンジ色の熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___image
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/round-balloon.png);
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

`shape-image-threshold` プロパティは、シェイプに使われる画像の領域を定義する画像の透過性のしきい値を設定するために使用します。 `shape-image-threshold` が `0.0` （初期値）である場合、領域は完全に透過になります。値が `1.0` である場合は完全に不透過になります。この間の値ならば、半透過の領域をシェイプを定義する領域として設定することができます。

シェイプを定義する画像としてグラデーションを使用すると、しきい値が良く見えます。次の例では、しきい値を変更すると、選択した透明度のレベルに基づいてシェイプが変化するパスが変化します。

```html-nolint live-sample___threshold
<div class="box">
  <div class="shape"></div>
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___threshold
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  float: left;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-outside: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-image-threshold: 0.4;
}
```

{{EmbedLiveSample("threshold", "", "280px")}}

画像からのシェイプの作成については、このガイドの[画像からのシェイプ](/ja/docs/Web/CSS/Guides/Shapes/From_images)でより深く見てみます。

## `shape-margin` プロパティ

{{cssxref("shape-margin")}} プロパティは `shape-outside` にマージンを追加します。これにより、シェイプを囲むコンテンツの行ボックスがシェイプから引き離されるため、短くなります。

次の例では、基本的なシェイプに `shape-margin` を追加しました。マージンを変更して、初期値で設定されるシェイプの輪郭からテキストを引き離してみてください。

```html-nolint live-sample___shape-margin
<div class="box">
  <img
    alt="下から見たオレンジ色の熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___shape-margin
body {
  font: 1.2em / 1.4 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 5px;
}
```

{{EmbedLiveSample("shape-margin", "", "280px")}}

## 生成コンテンツを浮動状態のアイテムとしての使用

上記の例では、シェイプを定義するために画像や見える要素、つまりページ上にシェイプを見ることができる形でシェイプを定義してきました。しかし、単に矩形ではない見えない線に沿ってテキストを流したい場合があるでしょう。これをシェイプを使って行うことができますが、この場合も浮動状態のアイテムが必要で、これを非表示にすることができます。これは文書に空の {{htmlelement("div")}} または {{htmlelement("span")}} のような冗長な要素を挿入することで実現できます。 しかし、[生成コンテンツ](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)を使って CSS だけでシェイプを作成し、すべてのスタイル設定機能を CSS 内に保持することができる。

次の例では、高さと幅が 150px の要素を挿入するために生成されたを利用します。それから基本シェイプやボックス値、画像のアルファチャネルを使用して、文字列を折り返すシェイプを作成します。

```html-nolint live-sample___generated-content
<div class="box">
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___generated-content
body {
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("generated-content", "", "260px")}}

## `clip-path` との関係

シェイプを作成するために使われる基本シェイプとボックス値は、 {{cssxref("clip-path")}} の値として使われているものと同じです。従って、画像を使ってシェイプを作成したい場合や、画像の一部を切り抜きたい場合は、同じ値を使用してください。

以下の画像は青い背景の四角い画像です。 `shape-outside: ellipse(40% 50%);` および `clip-path: ellipse(40% 50%);` を使用して、シェイプを定義するのに使われるのと同じ領域で切り取りを行うよう定義しました。

```html-nolint live-sample___clip-path
<div class="box">
  <img
    alt="下から見たオレンジ色の熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/balloon-small.jpg" />
  <p>
    1782 年 11 月のある夜、フランスの小さな町アノネーで、2人の兄弟が冬の焚き火を囲みながら、囲炉裏から立ち上る灰色の煙が広い煙突に巻き上がるのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前には、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___clip-path
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: ellipse(40% 50%);
  clip-path: ellipse(40% 50%);
}
```

{{EmbedLiveSample("clip-path", "", "280px")}}

## シェイプのための開発者ツール

ブラウザーが CSS シェイプに対応するのと同時に、 Firefox は開発ツール内で[シェイプパスエディター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)を公開しています。このツールはつまり、ページ内にあるシェイプを検査し、値の変更も行います。ポリゴンが正しくない場合は、シェイプエディターを使用して調整してから、新しい値をコピーして CSS に書き戻すことができます。

## それ以外の CSS シェイプ機能

このガイドでは、浮動したシェイプにテキストを回り込ませることについて説明しました。モジュールの全機能とその他の関連機能へのリンクについては、 [CSS シェイプモジュール](/ja/docs/Web/CSS/Guides/Shapes)を参照してください。これには、すべてのシェイプ関数と関連ガイドが含まれています。
