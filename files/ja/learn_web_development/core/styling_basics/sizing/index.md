---
title: CSS におけるアイテムのサイズ設定
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

これまでのさまざまなレッスンで、CSS を使用してウェブページ上のアイテムのサイズを調整するいくつかの方法に出会いました。デザイン作業をしていくうえで、それぞれの手法がどれほど大事かを理解することが重要です。このレッスンでは、CSS によって要素のサイズを設定する方法をまとめ、サイジングに役立ついくつかの用語を定義します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS の基本的な構文</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS セレクター<a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>内在サイズの概念を理解すること。</li>
          <li>絶対的またはパーセント値でのサイズ設定。</li>
          <li>幅と高の最大値と最小値の設定。</li>
          <li>ビューポート単位を理解し、それがなぜ有益なのかを理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 自然なサイズまたは内在サイズ

HTML 要素には自然なサイズがあり、 CSS の影響を受ける前に設定されます。簡単な例は画像です。画像には、ページに埋め込む画像ファイルで定義された幅と高さがあります。このサイズは**内在サイズ**と呼ばれ、画像自体に由来します。

`<img>` タグまたは CSS の属性を使用してページに画像を配置し、その高さと幅を変更しない場合、その内在サイズを使用して表示されます。以下の例では、ファイルの範囲を確認できるように画像に境界線を付けています。

```html live-sample___intrinsic-image
<img
  alt="star"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
```

```css live-sample___intrinsic-image
img {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-image")}}

ただし、空の {{htmlelement("div")}} には独自のサイズはありません。コンテンツのない HTML に {{htmlelement("div")}} を追加し、画像で行ったように境界線を付けると、ページに線が表示されます。これは、要素の折りたたまれた境界線です。開いたままにするコンテンツはありません。以下の例では、その境界線はコンテナーの幅まで伸びています。これはブロックレベルの要素であるため、慣れ親しんだ動作になるはずです。コンテンツがないため、高さ（またはブロック軸のサイズ）はありません。

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

上記の例では、空の要素内にテキストを追加してみてください。要素の高さがコンテンツによって定義されているため、境界線にはそのテキストが含まれています。したがって、 `<div>` ブロック軸におけるこのサイズは、コンテンツのサイズに由来します。繰り返しますが、これは要素の内在サイズです。そのサイズはコンテンツによって定義されます。

## サイズの指定

もちろん、デザインの要素に特定のサイズを与えることもできます。要素にサイズが指定されている場合（およびそのコンテンツがそのサイズに収まる必要がある場合）、それを**外部サイズ**と呼びます。上記の例の `<div>` を見てみます。特定の {{cssxref("width")}} と {{cssxref("height")}} の値を指定できるため、そ コンテンツがどのように配置されても、そのサイズになります。 [前のオーバーフローに関するレッスンで](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)見たように、要素の中に収まるスペースよりも多くのコンテンツがある場合、高さを設定するとコンテンツがオーバーフローする可能性があります。

```html live-sample___height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    これらのボックスはどちらも高さが設定されていますが、このボックスにはコンテンツが含まれており、割り当てられた高さよりも多くの空間が必要となるため、オーバーフローが発生します。
  </div>
</div>
```

```css live-sample___height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("height", "", "200px")}}

このオーバーフローの問題のため、要素の高さを長さまたはパーセント値で固定することは、ウェブ上で非常に注意深く行う必要があります。

### 比率指定

多くの点で、パーセント値は長さの単位のように機能し、[値と単位に関するレッスンで説明した](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#パーセント値)ように、多くの場合、長さと同じ意味で使用できます。パーセント値を使用している場合、あなたはそれが*何に対する*比率であるかを認識する必要があります。別のコンテナー内のボックスの場合、子ボックスに幅のパーセント値を与えると、親コンテナーの幅のパーセント値になります。

```html live-sample___percent-width
<div class="box">幅がパーセント値です。</div>
```

```css live-sample___percent-width
body {
  font: 1.2em sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 50%;
}
```

{{EmbedLiveSample("percent-width")}}

これは、パーセント値がそれを包含するブロックのサイズに対して解決されるためです。パーセント値を適用しない `<div>` 場合、これはブロックレベルの要素であるため、使用可能なスペースの 100％を占めます。パーセント値の幅を指定すると、これは通常埋められるスペースに対するの比率になります。

### マージンとパディングの比率

`margin` と `padding` をパーセント値で設定すると、奇妙な動作に気づくかもしれません。下記の例にはボックスがあります。内側のボックスには {{cssxref("margin")}} に 10%、{{cssxref("padding")}} に 10% が指定されています。ボックスの上下のパディングやマージンは、左右のパディングやマージンと同じサイズです。

```html live-sample___percent-mp
<div class="box">すべての辺でマージンとパディングを10%に設定しています。</div>
```

```css live-sample___percent-mp
body {
  font: 1.2em sans-serif;
}
.box {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

{{EmbedLiveSample("percent-mp", "", "380px")}}

例えば、上下のマージンのパーセント値は要素の高さのパーセント値であり、左右のマージンのパーセント値は要素の幅のパーセント値であると予想するかもしれません。しかし、そうではありません。

マージンとパディングをパーセント値で設定する場合、値は**インラインサイズ**から計算されます。したがって横書きの言語で作業しているときは幅になります。この例では、マージンとパディングはすべて幅の 10% です。つまり、ボックス全体で同じサイズのマージンとパディングを使用できます。この方法でパーセント値を使用する場合、これは覚えておかなければならない事実です。

## 最小サイズ、最大サイズ

固定サイズを与えることに加えて、要素に最小サイズまたは最大サイズを与えるよう CSS に要求できます。さまざまな量のコンテンツを含む可能性のあるボックスがあり、常に特定の高さ*以上*にしたい場合は、そのボックスに {{cssxref("min-height")}} プロパティを設定できます。ボックスは常にこの高さ以上になりますが、ボックスの最小高さでのスペースよりも多くのコンテンツがある場合は、ボックスの高さが高くなります。

以下の例では、2 つのボックスがあり、どちらも 150 ピクセルの高さが定義されています。左側のボックスの高さは 150 ピクセルです。右側のボックスには、より多くのスペースを必要とするコンテンツがあるため、150 ピクセルよりも高くなっています。

```html-nolint live-sample___min-height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    これらのボックスはどちらも min-height が設定してありますが、このボックスにはコンテンツが含まれており、割り当てられた高さよりも大きな空間が必要であるため、最小の高さから伸長します。
  </div>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("min-height", "", "220px")}}

これは、オーバーフローを回避しながら、可変量のコンテンツを処理するのに非常に役立ちます。

{{cssxref("max-width")}} の一般的な用途は、固有の幅で表示するための十分なスペースがない場合に画像を縮小し、その幅よりも大きくならないようにすることです。

例として、画像に `width: 100%` を設定する場合、その固有の幅がコンテナーよりも小さいと、画像は強制的に引き伸ばされて大きくなり、ピクセル化されたように見えます。固有の幅がコンテナーよりも大きい場合、オーバーフローします。どちらの場合も、あなたが起こりたいことではないでしょう。

代わりに `max-width: 100%` を使用すると、画像は本来のサイズよりも小さくなりますが、サイズの 100％で止まります。

以下の例では、同じ画像を 2 回使用しています。最初の画像には `width: 100%` が指定されており、それよりも大きいコンテナー内にあるため、コンテナーの幅まで拡大されます。2 番目の画像には `max-width: 100%` が設定されているため、コンテナーを埋めるために引き伸ばされることはありません。3 番目のボックスにも同じ画像が含まれており、 `max-width: 100%` も設定されています。この場合、ボックスに収まるように縮小された様子を確認できます。

```html live-sample___max-width
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```css hidden live-sample___max-width
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box,
.mini-box {
  border: 5px solid darkblue;
}
```

```css live-sample___max-width
.box {
  width: 200px;
}
.mini-box {
  width: 50px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", "260px")}}

この手法は、画像を*レスポンシブ*にするために使用されます。そのため、より小さなデバイスで表示すると、適切に縮小されます。ただし、この手法を使用して非常に大きな画像を読み込んでから、ブラウザーで縮小するべきではありません。画像は、デザインに表示される最大サイズに必要なサイズよりも大きくならないように適切なサイズにするべきです。大きすぎる画像をダウンロードすると、サイトが遅くなり、ユーザーが従量制の接続を使用している場合は、より多くの費用がかかる可能性があります。

## ビューポートに関する単位

ビューポート（サイトの表示に使用しているブラウザーでのページの表示領域）にもサイズがあります。CSS には、ビューポートのサイズに関連する単位（ビューポートの幅 `vw` とビューポートの高さ `vh`）があります。これらの単位を使用すると、ユーザーのビューポートを基準にしてサイズを変更できます。

`1vh` はビューポートの高さの 1% に、 `1vw` はビューポートの幅の 1% に等しくなります。これらの単位を使用して、ボックスだけでなくテキストのサイズも変更できます。以下の例では、 20vh と 20vw のサイズのボックスがあります。ボックスには、 {{cssxref("font-size")}} が 10vh の文字 `A` が含まれています。

```html live-sample___vw-vh
<div class="box">A</div>
```

```css live-sample___vw-vh
body {
  font-family: sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```

{{EmbedLiveSample("vw-vh")}}

`vh` との `vw` 値を変更すると、ボックスまたはフォントのサイズが変更されます。ビューポートに相対的なサイズであるため、ビューポートのサイズを変更しても、サイズが変更されます。ビューポートのサイズを変更したときにサンプルの変更を確認するには、サイズを変更できる新しいブラウザーウィンドウにサンプルを読み込む必要があります（上記の例を含む埋め込み `<iframe>` がビューポートであるため）。サンプルを開き、ブラウザーウィンドウのサイズを変更して、ボックスとテキストのサイズがどうなるかを観察しましょう。

ビューポートに応じてサイズを調整することは、デザインに役立ちます。例えば、全ページのヒーローセクション (hero section) を他のコンテンツの前に表示させたい場合、ページのその部分を `100vh` の高さにすると、残りのコンテンツはビューポートの下に押しやられてしまい、文書がスクロールされたときにのみ表示されます。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: サイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing)を見てください。

## まとめ

このレッスンでは、ウェブ上のサイズを決定するときに遭遇する可能性があるいくつかの重要な問題の概要を説明しました。[CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout)に移ると、さまざまなレイアウトメソッドを習得する際にサイズ設定が非常に重要になるため、先に進む前に、ここで概念を理解しておくことをお勧めします。

次の記事では、 CSS で背景や境界線がどのように操作されているかを見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
