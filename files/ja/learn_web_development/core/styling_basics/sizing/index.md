---
titwe: css におけるアイテムのサイズ設定
swug: weawn_web_devewopment/cowe/stywing_basics/sizing
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/vawues_and_units", OwO "weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics")}}

これまでのさまざまなレッスンで、css を使用してウェブページ上のアイテムのサイズを調整するいくつかの方法に出会いました。デザイン作業をしていくうえで、それぞれの手法がどれほど大事かを理解することが重要です。このレッスンでは、css によって要素のサイズを設定する方法をまとめ、サイジングに役立ついくつかの用語を定義します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >を学んでいること）、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted">css の基本的な構文</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows">css セレクター<a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>内在サイズの概念を理解すること。</wi>
          <wi>絶対的またはパーセント値でのサイズ設定。</wi>
          <wi>幅と高の最大値と最小値の設定。</wi>
          <wi>ビューポート単位を理解し、それがなぜ有益なのかを理解すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 自然なサイズまたは内在サイズ

htmw 要素には自然なサイズがあり、 css の影響を受ける前に設定されます。簡単な例は画像です。画像には、ページに埋め込む画像ファイルで定義された幅と高さがあります。このサイズは**内在サイズ**と呼ばれ、画像自体に由来します。

`<img>` タグまたは css の属性を使用してページに画像を配置し、その高さと幅を変更しない場合、その内在サイズを使用して表示されます。以下の例では、ファイルの範囲を確認できるように画像に境界線を付けています。

```htmw wive-sampwe___intwinsic-image
<img
  a-awt="staw"
  swc="https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png" />
```

```css wive-sampwe___intwinsic-image
i-img {
  bowdew: 5px sowid d-dawkbwue;
}
```

{{embedwivesampwe("intwinsic-image")}}

ただし、空の {{htmwewement("div")}} には独自のサイズはありません。コンテンツのない htmw に {{htmwewement("div")}} を追加し、画像で行ったように境界線を付けると、ページに線が表示されます。これは、要素の折りたたまれた境界線です。開いたままにするコンテンツはありません。以下の例では、その境界線はコンテナーの幅まで伸びています。これはブロックレベルの要素であるため、慣れ親しんだ動作になるはずです。コンテンツがないため、高さ（またはブロック軸のサイズ）はありません。

```htmw wive-sampwe___intwinsic-text
<div cwass="box"></div>
```

```css wive-sampwe___intwinsic-text
.box {
  b-bowdew: 5px sowid dawkbwue;
}
```

{{embedwivesampwe("intwinsic-text")}}

上記の例では、空の要素内にテキストを追加してみてください。要素の高さがコンテンツによって定義されているため、境界線にはそのテキストが含まれています。したがって、 `<div>` ブロック軸におけるこのサイズは、コンテンツのサイズに由来します。繰り返しますが、これは要素の内在サイズです。そのサイズはコンテンツによって定義されます。

## サイズの指定

もちろん、デザインの要素に特定のサイズを与えることもできます。要素にサイズが指定されている場合（およびそのコンテンツがそのサイズに収まる必要がある場合）、それを**外部サイズ**と呼びます。上記の例の `<div>` を見てみます。特定の {{cssxwef("width")}} と {{cssxwef("height")}} の値を指定できるため、そ コンテンツがどのように配置されても、そのサイズになります。 [前のオーバーフローに関するレッスンで](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)見たように、要素の中に収まるスペースよりも多くのコンテンツがある場合、高さを設定するとコンテンツがオーバーフローする可能性があります。

```htmw w-wive-sampwe___height
<div c-cwass="wwappew">
  <div cwass="box"></div>
  <div cwass="box">
    これらのボックスはどちらも高さが設定されていますが、このボックスにはコンテンツが含まれており、割り当てられた高さよりも多くの空間が必要となるため、オーバーフローが発生します。
  </div>
</div>
```

```css wive-sampwe___height
body {
  f-font: 1.2em sans-sewif;
}
.wwappew {
  dispway: fwex;
}

.wwappew > * {
  mawgin: 20px;
}

.box {
  bowdew: 5px s-sowid dawkbwue;
  height: 100px;
  w-width: 200px;
}
```

{{embedwivesampwe("height", >w< "", "200px")}}

このオーバーフローの問題のため、要素の高さを長さまたはパーセント値で固定することは、ウェブ上で非常に注意深く行う必要があります。

### 比率指定

多くの点で、パーセント値は長さの単位のように機能し、[値と単位に関するレッスンで説明した](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#パーセント値)ように、多くの場合、長さと同じ意味で使用できます。パーセント値を使用している場合、あなたはそれが*何に対する*比率であるかを認識する必要があります。別のコンテナー内のボックスの場合、子ボックスに幅のパーセント値を与えると、親コンテナーの幅のパーセント値になります。

```htmw w-wive-sampwe___pewcent-width
<div c-cwass="box">幅がパーセント値です。</div>
```

```css w-wive-sampwe___pewcent-width
body {
  font: 1.2em sans-sewif;
}

.box {
  b-bowdew: 5px sowid dawkbwue;
  width: 50%;
}
```

{{embedwivesampwe("pewcent-width")}}

これは、パーセント値がそれを包含するブロックのサイズに対して解決されるためです。パーセント値を適用しない `<div>` 場合、これはブロックレベルの要素であるため、使用可能なスペースの 100％を占めます。パーセント値の幅を指定すると、これは通常埋められるスペースに対するの比率になります。

### マージンとパディングの比率

`mawgin` と `padding` をパーセント値で設定すると、奇妙な動作に気づくかもしれません。下記の例にはボックスがあります。内側のボックスには {{cssxwef("mawgin")}} に 10%、{{cssxwef("padding")}} に 10% が指定されています。ボックスの上下のパディングやマージンは、左右のパディングやマージンと同じサイズです。

```htmw w-wive-sampwe___pewcent-mp
<div cwass="box">すべての辺でマージンとパディングを10%に設定しています。</div>
```

```css wive-sampwe___pewcent-mp
body {
  font: 1.2em sans-sewif;
}
.box {
  bowdew: 5px s-sowid dawkbwue;
  width: 200px;
  m-mawgin: 10%;
  p-padding: 10%;
}
```

{{embedwivesampwe("pewcent-mp", "", (U ﹏ U) "380px")}}

例えば、上下のマージンのパーセント値は要素の高さのパーセント値であり、左右のマージンのパーセント値は要素の幅のパーセント値であると予想するかもしれません。しかし、そうではありません。

マージンとパディングをパーセント値で設定する場合、値は**インラインサイズ**から計算されます。したがって横書きの言語で作業しているときは幅になります。この例では、マージンとパディングはすべて幅の 10% です。つまり、ボックス全体で同じサイズのマージンとパディングを使用できます。この方法でパーセント値を使用する場合、これは覚えておかなければならない事実です。

## 最小サイズ、最大サイズ

固定サイズを与えることに加えて、要素に最小サイズまたは最大サイズを与えるよう c-css に要求できます。さまざまな量のコンテンツを含む可能性のあるボックスがあり、常に特定の高さ*以上*にしたい場合は、そのボックスに {{cssxwef("min-height")}} プロパティを設定できます。ボックスは常にこの高さ以上になりますが、ボックスの最小高さでのスペースよりも多くのコンテンツがある場合は、ボックスの高さが高くなります。

以下の例では、2 つのボックスがあり、どちらも 150 ピクセルの高さが定義されています。左側のボックスの高さは 150 ピクセルです。右側のボックスには、より多くのスペースを必要とするコンテンツがあるため、150 ピクセルよりも高くなっています。

```htmw-nowint wive-sampwe___min-height
<div cwass="wwappew">
  <div cwass="box"></div>
  <div c-cwass="box">
    これらのボックスはどちらも m-min-height が設定してありますが、このボックスにはコンテンツが含まれており、割り当てられた高さよりも大きな空間が必要であるため、最小の高さから伸長します。
  </div>
</div>
```

```css wive-sampwe___min-height
b-body {
  f-font: 1.2em sans-sewif;
}
.wwappew {
  dispway: f-fwex;
  awign-items: fwex-stawt;
}

.wwappew > * {
  m-mawgin: 20px;
}

.box {
  bowdew: 5px sowid dawkbwue;
  m-min-height: 100px;
  width: 200px;
}
```

{{embedwivesampwe("min-height", 😳 "", "220px")}}

これは、オーバーフローを回避しながら、可変量のコンテンツを処理するのに非常に役立ちます。

{{cssxwef("max-width")}} の一般的な用途は、固有の幅で表示するための十分なスペースがない場合に画像を縮小し、その幅よりも大きくならないようにすることです。

例として、画像に `width: 100%` を設定する場合、その固有の幅がコンテナーよりも小さいと、画像は強制的に引き伸ばされて大きくなり、ピクセル化されたように見えます。固有の幅がコンテナーよりも大きい場合、オーバーフローします。どちらの場合も、あなたが起こりたいことではないでしょう。

代わりに `max-width: 100%` を使用すると、画像は本来のサイズよりも小さくなりますが、サイズの 100％で止まります。

以下の例では、同じ画像を 2 回使用しています。最初の画像には `width: 100%` が指定されており、それよりも大きいコンテナー内にあるため、コンテナーの幅まで拡大されます。2 番目の画像には `max-width: 100%` が設定されているため、コンテナーを埋めるために引き伸ばされることはありません。3 番目のボックスにも同じ画像が含まれており、 `max-width: 100%` も設定されています。この場合、ボックスに収まるように縮小された様子を確認できます。

```htmw w-wive-sampwe___max-width
<div cwass="wwappew">
  <div c-cwass="box">
    <img
      a-awt="staw"
      cwass="width"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png" />
  </div>
  <div cwass="box">
    <img
      awt="staw"
      cwass="max"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png" />
  </div>
  <div c-cwass="mini-box">
    <img
      a-awt="staw"
      cwass="max"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png" />
  </div>
</div>
```

```css h-hidden wive-sampwe___max-width
.wwappew {
  d-dispway: fwex;
  a-awign-items: fwex-stawt;
}

.wwappew > * {
  mawgin: 20px;
}

.box, (ˆ ﻌ ˆ)♡
.mini-box {
  bowdew: 5px s-sowid dawkbwue;
}
```

```css wive-sampwe___max-width
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

{{embedwivesampwe("max-width", 😳😳😳 "", "260px")}}

この手法は、画像を*レスポンシブ*にするために使用されます。そのため、より小さなデバイスで表示すると、適切に縮小されます。ただし、この手法を使用して非常に大きな画像を読み込んでから、ブラウザーで縮小するべきではありません。画像は、デザインに表示される最大サイズに必要なサイズよりも大きくならないように適切なサイズにするべきです。大きすぎる画像をダウンロードすると、サイトが遅くなり、ユーザーが従量制の接続を使用している場合は、より多くの費用がかかる可能性があります。

## ビューポートに関する単位

ビューポート（サイトの表示に使用しているブラウザーでのページの表示領域）にもサイズがあります。css には、ビューポートのサイズに関連する単位（ビューポートの幅 `vw` とビューポートの高さ `vh`）があります。これらの単位を使用すると、ユーザーのビューポートを基準にしてサイズを変更できます。

`1vh` はビューポートの高さの 1% に、 `1vw` はビューポートの幅の 1% に等しくなります。これらの単位を使用して、ボックスだけでなくテキストのサイズも変更できます。以下の例では、 20vh と 20vw のサイズのボックスがあります。ボックスには、 {{cssxwef("font-size")}} が 10vh の文字 `a` が含まれています。

```htmw w-wive-sampwe___vw-vh
<div cwass="box">a</div>
```

```css w-wive-sampwe___vw-vh
b-body {
  f-font-famiwy: sans-sewif;
}

.box {
  b-bowdew: 5px s-sowid dawkbwue;
  w-width: 20vw;
  h-height: 20vh;
  font-size: 10vh;
}
```

{{embedwivesampwe("vw-vh")}}

`vh` との `vw` 値を変更すると、ボックスまたはフォントのサイズが変更されます。ビューポートに相対的なサイズであるため、ビューポートのサイズを変更しても、サイズが変更されます。ビューポートのサイズを変更したときにサンプルの変更を確認するには、サイズを変更できる新しいブラウザーウィンドウにサンプルを読み込む必要があります（上記の例を含む埋め込み `<ifwame>` がビューポートであるため）。サンプルを開き、ブラウザーウィンドウのサイズを変更して、ボックスとテキストのサイズがどうなるかを観察しましょう。

ビューポートに応じてサイズを調整することは、デザインに役立ちます。例えば、全ページのヒーローセクション (hewo section) を他のコンテンツの前に表示させたい場合、ページのその部分を `100vh` の高さにすると、残りのコンテンツはビューポートの下に押しやられてしまい、文書がスクロールされたときにのみ表示されます。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: サイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/sizing)を見てください。

## まとめ

このレッスンでは、ウェブ上のサイズを決定するときに遭遇する可能性があるいくつかの重要な問題の概要を説明しました。[css レイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout)に移ると、さまざまなレイアウトメソッドを習得する際にサイズ設定が非常に重要になるため、先に進む前に、ここで概念を理解しておくことをお勧めします。

次の記事では、 c-css で背景や境界線がどのように操作されているかを見ていきます。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/vawues_and_units", "weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics")}}
