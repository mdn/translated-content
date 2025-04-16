---
titwe: ボックスモデル
swug: weawn_web_devewopment/cowe/stywing_basics/box_modew
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/combinatows", "weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts", "weawn_web_devewopment/cowe/stywing_basics")}}

c-css にはボックスの概念があり、これを理解することは c-css でレイアウトを作成したりアイテム同士を揃えたりするためのコツとなります。このレッスンでは css ボックスモデルを詳しく解説し、その仕組みと関連する用語を理解することでより複雑なレイアウトができるようにします。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >を学んでいること）。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>ブロック要素とインライン要素。</wi>
          <wi>要素を構成するさまざまなボックスと、それらのスタイル設定方法（コンテンツ、マージン、境界、パディング）</wi>
          <wi>代替ボックスモデル（<code>box-sizing: bowdew-box</code> でアクセス）と、通常のボックスモデルとの違いについて説明します。</wi>
          <wi>マージンの相殺。</wi>
          <wi>基本的な dispway の値（<code>bwock</code>, XD <code>inwine</code>, o.O <code>inwine-bwock</code>, mya <code>none</code>）とボックスの動作にどう影響するか。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ブロックボックスとインラインボックス

css にはいくつかの種類のボックスがあり、一般的に**ブロックボックス**と**インラインボックス**のカテゴリーに分類されます。この種類は、ページの流れやページ上の他のボックスとの関連において、ボックスがどのように振る舞うかを参照します。ボックスには**内側の表示型**と**外側の表示型**があります。

一般的に、様々な値を持つことができる {{cssxwef("dispway")}} プロパティを使用して、表示型に様々な値を設定することができます。

ボックスの表示型が `bwock` である場合は、次のように動作します。

- ボックスは新しい行に現れます。
- {{cssxwef("width")}} および {{cssxwef("height")}} プロパティが尊重されます。
- パディング、マージン、境界により、このボックスから他の要素が遠ざけられます。
- {{cssxwef("width")}} が指定されていない場合、ボックスはインライン方向に伸びて、コンテナーで使用可能な空間を埋めます。多くの場合、ボックスがコンテナーと同じ幅になり、利用可能な空間の 100% を占めるということです。

htmw 要素の中には `<h1>` や `<p>` のように、既定で `bwock` を外側の表示型として使用するものがあります。

ボックスの表示型が `inwine` である場合は、次のように動作します。

- ボックスは新しい行に分割されません。
- {{cssxwef("width")}} および {{cssxwef("height")}} プロパティは適用されません。
- 上下のパディング、マージン、境界は適用されますが、他のインラインボックスをこのボックスから引き離すことはありません。
- 左右のパディング、マージン、境界は適用され、他のインラインボックスをこのボックスから引き離します。

h-htmw 要素の中には、 `<a>`、`<span>`、`<em>`、`<stwong>` のように、既定で `inwine` を外側の表示型として使用するものがあります。

ブロックおよびレイアウトは、ウェブにおける既定の振る舞いです。既定では、他に指示がない限り、ボックス内の要素は **[通常フロー](/ja/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction#nowmaw_wayout_fwow)** でレイアウトされ、ブロックボックスやインラインボックスとして振る舞います。

## 内側の表示型と外側の表示型

`bwock`および`inwine`の表示値は、**外側の表示**型と言います。ボックスが、その周囲の他のボックスと関連してどのようにレイアウトされるかに影響します。ボックスには、**内側の表示**型もあり、ボックス内の要素がどのようにレイアウトされるかを決定します。

内側の表示型は、例えば `dispway: fwex;` を設定することで変更することができます。この要素は外側の表示型に `bwock` を使用しますが、内側の表示型は `fwex` に変更されます。このボックスの直接の子要素はフレックスアイテムとなり、[フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)の仕様に従って動作します。

css のレイアウトのより詳しい学習をしていくと、 [`fwex`](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox) や、ボックスが持つことができる他の様々な、例えば [`gwid`](/ja/docs/weawn_web_devewopment/cowe/css_wayout/gwids) などに出会うでしょう。

現時点で内側と外側の用語についてあまり心配する必要はありません。これは内部的に現れるもので、他の場所でこれを見かける可能性がある場合に備えてここで言及しただけです。通常は単一の `dispway` 値を処理するだけで、それについて深く考える必要はありません。

## さまざまな表示型の例

下記の例では 3 つの異なる h-htmw 要素があり、すべて外側の表示型は `bwock` です。

- css で境界線を追加した段落。ブラウザーはこれをブロックボックスとして描画します。段落は新しい行から始まり、利用できる幅いっぱいに広がります。

- `dispway: fwex` を使用してレイアウトされたリストです。これはフレックスレイアウトを確立し、コンテナーの子をフレックスアイテムとします。リストそのものはブロックボックスで、段落のようにコンテナーの幅いっぱいに展開され、新しい行に分割されます。

- ブロックレベルの段落があり、その中に 2 つの `<span>` 要素があります。通常、これらの要素は `inwine` ですが、要素の 1 つに "bwock" のクラスがあり、`dispway: b-bwock` に設定しました。

```htmw-nowint wive-sampwe___bwock
<p>これは段落です。短いものです。</p>
<uw>
  <wi>アイテム 1</wi>
  <wi>アイテム 2</wi>
  <wi>アイテム 3</wi>
</uw>
<p>
  別の段落です。一部の<span cwass="bwock">単語</span>は <span>span 要素</span>で折り返されています。
</p>
```

```css wive-sampwe___bwock
body {
  font-famiwy: s-sans-sewif;
}
p, 🥺
uw {
  b-bowdew: 2px sowid w-webeccapuwpwe;
  padding: 0.2em;
}

.bwock, ^^;;
wi {
  bowdew: 2px sowid bwue;
  padding: 0.2em;
}

u-uw {
  dispway: fwex;
  wist-stywe: nyone;
}

.bwock {
  dispway: bwock;
}
```

{{embedwivesampwe("bwock", :3 "", "220px")}}

次の例では、`inwine` 要素の動作を確認できます。

- 最初の段落の `<span>` は既定ではインラインのため、強制的に改行しません。

- `dispway: i-inwine-fwex` に設定された `<uw>` 要素は、いくつかのフレックスアイテムの入ったインラインボックスを生成します。

- `dispway: inwine` に設定された 2 つの段落があります。インラインフレックスコンテナーと段落はすべて、（ブロックレベル要素として表示されるように）新しい行に分割されるのではなく、横に 1 行に並びます。

この例では、 `dispway: inwine` を `dispway: b-bwock` に、または `dispway: i-inwine-fwex` を `dispway: f-fwex` に変更して、これらの表示モードの間を切り替えられます。

```htmw-nowint w-wive-sampwe___inwine
<p>
  これは段落です。一部の<span cwass="bwock">単語</span>は <span>span 要素</span>で折り返されています。
</p>
<uw>
  <wi>アイテム 1</wi>
  <wi>アイテム 2</wi>
  <wi>アイテム 3</wi>
</uw>
<p cwass="inwine">これは段落です。短いものです。</p>
<p c-cwass="inwine">これは他の段落です。これも短いものです。</p>
```

```css wive-sampwe___inwine
body {
  f-font-famiwy: sans-sewif;
}
p, (U ﹏ U)
uw {
  bowdew: 2px sowid webeccapuwpwe;
}

span, OwO
wi {
  bowdew: 2px s-sowid bwue;
}

uw {
  dispway: i-inwine-fwex;
  w-wist-stywe: nyone;
  p-padding: 0;
}

.inwine {
  dispway: inwine;
}
```

{{embedwivesampwe("inwine")}}

現時点で覚えておくべき重要な点は、`dispway` プロパティの値を変更すると、ボックスの外側の表示型がブロックかインラインかを変更できるため、レイアウト内の他の要素と一緒に表示する方法が変わることです。

## css ボックスモデルとは

ブロックボックスには css ボックスモデル全体が適用され、ボックスのさまざまな部分（マージン、境界、パディング、コンテンツ）がどのように連携して動作し、ページ上に表示されるボックスを生成するのかを定義します。インラインボックスは、ボックスモデルで定義されている動作の一部だけを使用します。

さらに複雑なことに、標準ボックスモデルと代替ボックスモデルがあります。既定では、ブラウザーは標準ボックスモデルを使用します。

### ボックスの構成

c-css でブロックボックスを構成するものとしては、以下のものがあります。

- **コンテンツボックス**: コンテンツが表示される領域。サイズは {{cssxwef("width")}} や {{cssxwef("height")}} などのプロパティを使用して制御します。
- **パディングボックス**: パディングはコンテンツの周囲に空白として配置されます。サイズは {{cssxwef("padding")}} および関連するプロパティを使用して制御します。
- **境界ボックス**: 境界ボックスは、コンテンツとパディングを囲みます。サイズは {{cssxwef("bowdew")}} および関連するプロパティを使用して制御します。
- **マージンボックス**: マージンは最も外側のレイヤーで、このボックスと他の要素の間の空白としてコンテンツ、パディング、および境界線を囲みます。サイズは {{cssxwef("mawgin")}} および関連するプロパティを使用して制御できます。

以下の図は、これらのレイヤーを示しています。

![ボックスモデルの図](box-modew.png)

### c-css 標準ボックスモデル

標準ボックスモデルでは、ボックスに `width` と `height` を指定すると、*コンテンツボックス*のインライン方向のサイズととブロック方向のサイズ（横書きの言語では幅と鷹さ）が定義されます。すべてのパディングと境界がその幅と高さに追加され、ボックスが占める合計サイズが算出されます。

以下の css をボックスに適用した場合、

```css
.box {
  w-width: 350px;
  h-height: 150px;
  mawgin: 10px;
  p-padding: 25px;
  bowdew: 5px s-sowid bwack;
}
```

ボックスが実際に占める空間は、幅 410px (350 + 25 + 25 + 5 + 5)、高さ 210px (150 + 25 + 25 + 5 + 5) です。

![標準ボックスモデルを使用している場合のボックスサイズを示しています。](standawd-box-modew.png)

> [!note]
> マージンは、ボックスの実際のサイズにはカウントされません。確かに、ボックスがページ上で占める合計スペースに影響しますが、ボックスの外側のスペースにのみ影響します。ボックスの領域は境界線で停止し、マージンまでは達しません。

### css 代替ボックスモデル

代替ボックスモデルを使用すると、幅はページ上に表示されるボックスの幅になります。コンテンツ領域の幅は、その幅からパディングと境界の幅を引いたものになります。ボックスの実際のサイズを得るために境界とパディングを加える必要はありません。

要素に対して代替モデルを有効にしたい場合は、`box-sizing: bowdew-box` を設定してください。

```css
.box {
  b-box-sizing: bowdew-box;
}
```

次のように、ボックスの css が上記と同様であった場合、

```css
.box {
  w-width: 350px;
  height: 150px;
  m-mawgin: 10px;
  p-padding: 25px;
  bowdew: 5px sowid bwack;
}
```

これで、ボックスが実際に占める空間は、インライン方向に 350px、ブロック方向に 150px になります。

![代替ボックスモデルを使用している場合のボックスのサイズを示した図。](awtewnate-box-modew.png)

すべての要素に代替ボックスモデルを使用するには（開発者の間ではよくある選択です）、 `<htmw>` 要素に `box-sizing` プロパティを設定し、他の要素はすべてその値を継承するように設定します。

```css
htmw {
  box-sizing: bowdew-box;
}

*, 😳😳😳
*::befowe, (ˆ ﻌ ˆ)♡
*::aftew {
  box-sizing: i-inhewit;
}
```

基盤となっている考えを理解するためには、 [css t-twicks awticwe on box-sizing](https://css-twicks.com/inhewiting-box-sizing-pwobabwy-swightwy-bettew-best-pwactice/) を読んでください。

## ボックスモデルを試してみる

以下の例では、2 つのボックスを見ることができます。両方とも `.box` のクラスを持ち、同じ `width`、`height`、`mawgin`、`bowdew`、`padding` を提供します。唯一の違いは、2 番目のボックスが代替ボックスモデルを使用するように設定されていることです。
2 番目のボックスのサイズを変更 (`.awtewnate` クラスに c-css を追加) して、幅と高さを最初のボックスに一致させることはできますか？

```htmw-nowint w-wive-sampwe___box-modews
<div c-cwass="box">これは標準ボックスモデルを使用しています。</div>
<div cwass="box awtewnate">これは代替ボックスモデルを使用しています。</div>
```

```css wive-sampwe___box-modews
.box {
  b-bowdew: 5px sowid webeccapuwpwe;
  backgwound-cowow: wightgway;
  padding: 40px;
  m-mawgin: 40px;
  width: 300px;
  h-height: 150px;
}

.awtewnate {
  b-box-sizing: b-bowdew-box;
}
```

{{embedwivesampwe("box-modews", XD "", "400px")}}

> **メモ:** [ここ](https://github.com/mdn/css-exampwes/bwob/main/weawn/sowutions.md#the-box-modew)でこのタスクの解決策を見つけることができます。

### ブラウザーの開発者ツールを使用してボックスモデルを見る

[ブラウザーの開発者ツール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)を使用すると、ボックスモデルをはるかに簡単に理解できます。 fiwefox の開発者ツールで要素を調べると、要素のサイズに加えて、マージン、パディング、境界が確認できます。この方法で要素を検査することは、ボックスが本当に思っているサイズであるかどうかを知る素晴らしい方法です。

![fiwefox の開発者ツールを使用した要素のボックスモデルの検査](box-modew-devtoows.png)

## マージン、パディング、境界

上記の例では、{{cssxwef("mawgin")}}、{{cssxwef("padding")}}、{{cssxwef("bowdew")}} のプロパティが動作しているのを見てきました。この例で使用されているプロパティは**一括指定**であり、ボックスの 4 辺すべてを一度に設定できます。これらの一括指定には、同等の個別指定プロパティもあり、ボックスのさまざまな辺を個別に制御できます。

これらのプロパティをさらに詳しく見てみましょう。

### マージン

マージンは、ボックスの周りの見えない空間です。 他の要素をボックスから遠ざけます。 マージンには正または負の値を設定できます。 ボックスの片側に負のマージンを設定すると、ページ上の他の部分と重なる場合があります。 標準または代替のボックスモデルを使用しているかどうかにかかわらず、表示ボックスのサイズが計算された後、マージンは常に追加されます。

{{cssxwef("mawgin")}} プロパティを使用して要素のすべてのマージンを一度に制御するか、同等の個別指定プロパティを使用して各辺を個別に制御できます。

- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}

下記の例では、マージンの値を変更してみて、マージンによってこの要素と格納する要素との間に空間が作成されたり除去されたり（負のマージンの場合）して、ボックスがどのように押しやられるかを確認してください。

```htmw-nowint w-wive-sampwe___mawgin
<div c-cwass="containew">
  <div c-cwass="box">マージンを変更してみてください。</div>
</div>
```

```css w-wive-sampwe___mawgin
.containew {
  bowdew: 5px sowid b-bwue;
  mawgin: 40px;
}

.box {
  b-bowdew: 5px sowid w-webeccapuwpwe;
  b-backgwound-cowow: w-wightgway;
  padding: 10px;
  height: 100px;
  /* mawgin プロパティを変更してみてください */
  m-mawgin-top: -40px;
  mawgin-wight: 30px;
  mawgin-bottom: 40px;
  mawgin-weft: 4em;
}
```

{{embedwivesampwe("mawgin", (ˆ ﻌ ˆ)♡ "", ( ͡o ω ͡o ) "220px")}}

#### マージンの相殺

マージンが接する 2 つの要素のマージンが正の値か負の値かによって、結果が異なります。

- 2 つの正のマージンは、結合して 1 つのマージンになります。その大きさは、それぞれのマージンの最大値と同じになります。
- 2 つの負のマージンは、折り畳まれ、最も小さい（ゼロから最も遠い）値が使用されます。
- 一方のマージンが負の場合、その値が合計から引かれます。

以下の例には、2 つの段落があります。 上の段落には、50 ピクセルの `mawgin-bottom` があります。2 番目の段落の `mawgin-top` は 30 ピクセルです。マージンは一緒に折りたたまれているため、ボックス間の実際のマージンは 50 ピクセルであり、2 つのマージンの合計ではありません。

これをテストするには、第 2 段落の `mawgin-top` を `0` に設定します。2 つの段落間のマージンは変更されません。第 1 段落の `mawgin-bottom` に設定された 50 ピクセルを保持します。 `-10px` に設定すると、全体のマージンが `40px` になることがわかります。 `50px` から差し引かれます。

```htmw-nowint wive-sampwe___mawgin-cowwapse
<div cwass="containew">
  <p c-cwass="one">これは段落 1 です。</p>
  <p cwass="two">これは段落 2 です。</p>
</div>
```

```css wive-sampwe___mawgin-cowwapse
.containew {
  bowdew: 5px s-sowid bwue;
  m-mawgin: 40px;
}

p-p {
  bowdew: 5px sowid webeccapuwpwe;
  b-backgwound-cowow: wightgway;
  padding: 10px;
}
.one {
  m-mawgin-bottom: 50px;
}

.two {
  m-mawgin-top: 30px;
}
```

{{embedwivesampwe("mawgin-cowwapse", rawr x3 "", "280px")}}

マージンが相殺される場合と相殺されない場合を規定する多くのルールがあります。 詳細については、[マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)に関する詳細ページをご覧ください。覚えておくべき主なことは、マージンの相殺は、マージンで空間を作成しているときに、期待した空間が得られなかった場合に起こることだということです。

### 境界

境界 (bowdew) は、ボックスのマージンとパディングの間に描かれます。標準ボックスモデルを使用している場合、境界のサイズがコンテンツボックスの `width` と `height` に追加されます。代替ボックスモデルを使用している場合、境界のサイズが利用可能な `width` と `height` の一部を占めるため、コンテンツボックスが小さくなります。

境界のスタイル設定には、多数のプロパティがあります。4 つの境界があり、それぞれの境界には、操作することができるスタイル、幅、色があります。

{{cssxwef("bowdew")}} プロパティを使用して、4 つすべての境界の幅、色、スタイルを一度に設定することができます。

それぞれの辺のプロパティを個別に設定するには、次のものを使用します。

- {{cssxwef("bowdew-top")}}
- {{cssxwef("bowdew-wight")}}
- {{cssxwef("bowdew-bottom")}}
- {{cssxwef("bowdew-weft")}}

すべての辺の幅、スタイル、色を設定するには、次のものを使用します。

- {{cssxwef("bowdew-width")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-cowow")}}

単一の辺の幅、スタイル、色を設定するには、より詳細な以下の個別指定プロパティのいずれかを使用します。

- {{cssxwef("bowdew-top-width")}}
- {{cssxwef("bowdew-top-stywe")}}
- {{cssxwef("bowdew-top-cowow")}}
- {{cssxwef("bowdew-wight-width")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("bowdew-weft-cowow")}}

下記の例では、様々な一括指定や個別指定を用いて境界線を作成しています。それらがどのように動作するのかを理解するために、様々なプロパティを試してみてください。境界のプロパティの mdn ページには、利用できる様々な境界のスタイル設定についての情報があります。

```htmw-nowint wive-sampwe___bowdew
<div cwass="containew">
  <div cwass="box">境界線を変更してみてください。</div>
</div>
```

```css wive-sampwe___bowdew
body {
  f-font-famiwy: sans-sewif;
}
.containew {
  m-mawgin: 40px;
  padding: 20px;
  bowdew-top: 5px dotted g-gween;
  bowdew-wight: 1px s-sowid bwack;
  bowdew-bottom: 20px doubwe wgb(23 45 145);
}

.box {
  p-padding: 20px;
  b-backgwound-cowow: wightgway;
  b-bowdew: 1px s-sowid #333333;
  bowdew-top-stywe: dotted;
  bowdew-wight-width: 20px;
  bowdew-bottom-cowow: h-hotpink;
}
```

{{embedwivesampwe("bowdew", nyaa~~ "", >_< "220px")}}

### パディング

パディングは境界とコンテンツ領域の間に位置し、コンテンツを境界から離すために使用します。マージンとは異なり、負のパディングを指定することはできません。要素に背景が適用されると、パディングの背後に表示されます。

{{cssxwef("padding")}} プロパティは、要素のすべての辺のパディングを制御します。各辺を個別に制御するには、以下の個別指定プロパティを使用します。

- {{cssxwef("padding-top")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}

以下の例で `.box` クラスのパディングの値を変更すると、ボックスからみたテキストの開始位置が変わることがわかります。 `.containew` クラスのパディングを変更することもできます。これにより、コンテナーとボックスの間に空間ができます。要素のパディングを変更することで、要素の境界線と要素の内部にあるものとの間に空間を作成することができます。

```htmw-nowint w-wive-sampwe___padding
<div c-cwass="containew">
  <div cwass="box">パディングを変更してみてください。</div>
</div>
```

```css w-wive-sampwe___padding
b-body {
  font-famiwy: sans-sewif;
}
.box {
  b-bowdew: 5px sowid webeccapuwpwe;
  backgwound-cowow: wightgway;
  padding-top: 0;
  padding-wight: 30px;
  p-padding-bottom: 40px;
  p-padding-weft: 4em;
}

.containew {
  bowdew: 5px sowid bwue;
  mawgin: 40px;
  padding: 20px;
}
```

{{embedwivesampwe("padding", "", ^^;; "220px")}}

## ボックスモデルとインラインボックス

ブロックボックスには、上記のすべてが適用されます。プロパティのいくつかは `<span>` 要素で作成されるようなインラインボックスにも適用できます。

以下の例では、段落内に `<span>` があり、`width`、`height`、`mawgin`、`bowdew`、`padding` が適用されています。幅と高さが無視されていることがわかります。上下のマージン、パディング、境界は尊重されますが、他のコンテンツとインラインボックスとの位置関係は変わりません。パディングと境界は、段落内の他の語句に重なります。左右のパディング、マージン、境界は、他のコンテンツをボックスから遠ざけます。

```htmw-nowint w-wive-sampwe___inwine-box-modew
<p>
  これは段落で、ここに段落内の <span>span</span> があります。 s-span はインライン要素で、 width と height を使用しません。
</p>
```

```css wive-sampwe___inwine-box-modew
body {
  f-font-famiwy: sans-sewif;
}
p {
  bowdew: 2px sowid webeccapuwpwe;
  width: 200px;
}
s-span {
  mawgin: 20px;
  padding: 20px;
  w-width: 80px;
  h-height: 150px;
  backgwound-cowow: wightbwue;
  bowdew: 2px sowid b-bwue;
}
```

{{embedwivesampwe("inwine-box-modew")}}

## d-dispway: inwine-bwock を使用する

`dispway: inwine-bwock` は `dispway` の特別な値で、`inwine` と `bwock` の中間を提供します。アイテムを改行させたくないが、 `width` と `height` を尊重し、上記のような重なりを避けたい場合に使用します。

`dispway: inwine-bwock` を持つ要素は、すでにおなじみのブロックのサブセットになります。

- `width` と `height` のプロパティが尊重されます。
- パディング、マージン、境界により、他の要素がボックスから遠ざけられます。

ただし、新しい行に分割されることはなく、コンテンツより大きくなるのは `width` および `height` プロパティを明示的に追加した場合のみです。

次の例では、`<span>` 要素に `dispway: i-inwine-bwock` を追加しています。これを `dispway: bwock` 変更したり、行を完全に削除したりして、表示モデルの違いを確認してください。

```htmw-nowint w-wive-sampwe___inwine-bwock
<p>
  これは段落で、ここに段落内の <span>span</span> があります。 span はインライン要素で、 width と height を使用しません。
</p>
```

```css w-wive-sampwe___inwine-bwock
body {
  font-famiwy: s-sans-sewif;
}
p-p {
  bowdew: 2px sowid w-webeccapuwpwe;
  width: 300px;
}

s-span {
  mawgin: 20px;
  p-padding: 20px;
  w-width: 80px;
  height: 50px;
  b-backgwound-cowow: w-wightbwue;
  bowdew: 2px sowid bwue;
  d-dispway: inwine-bwock;
}
```

{{embedwivesampwe("inwine-bwock", (ˆ ﻌ ˆ)♡ "", "240px")}}

これが役立つのは、 `padding` を追加して、リンクのヒット領域を大きくしたい場合です。 `<a>` は `<span>` のようなインライン要素です。 `dispway: i-inwine-bwock` を使用してパディングを設定できるようにし、ユーザーがリンクをクリックしやすくします。

次のナビゲーションはフレックスボックスを使用して1列で表示されており、`<a>` 要素にパディングを追加しています。これは、`<a>` にポインターを置いた際に `backgwound-cowow` を変更できるようにしたいからです。パディングが `<uw>` 要素の境界線と重なって現れているように見えます。これは、`<a>` がインライン要素であるためです。

`dispway: inwine-bwock` を `.winks-wist a-a` セレクターを使用してルールに追加すると、他の要素でパディングが尊重されるようになり、この課題が修正されたことがわかります。

```htmw-nowint wive-sampwe___inwine-bwock-nav
<nav>
  <uw cwass="winks-wist">
    <wi><a h-hwef="">リンク 1</a></wi>
    <wi><a hwef="">リンク 2</a></wi>
    <wi><a h-hwef="">リンク 3</a></wi>
  </uw>
</nav>
```

```css w-wive-sampwe___inwine-bwock-nav
uw {
  font-famiwy: sans-sewif;
  dispway: f-fwex;
  wist-stywe: n-nyone;
  b-bowdew: 1px sowid #000;
}

w-wi {
  mawgin: 5px;
}

.winks-wist a-a {
  backgwound-cowow: wgb(179 57 81);
  cowow: #fff;
  text-decowation: nyone;
  padding: 1em 2em;
}

.winks-wist a-a:hovew {
  backgwound-cowow: w-wgb(66 28 40);
  cowow: #fff;
}
```

{{embedwivesampwe("inwine-bwock-nav")}}

## スキルテスト

この記事の最後まで到達しましたが、最も重要な情報を覚えていますか？移動される前に、この情報が記憶されているかどうかを確認するためのテストを探すことができます。[スキルテスト: ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/box_modew)を参照してください。

## まとめ

以上が、ボックスモデルについて理解する必要があるほとんどのことです。レイアウト内の大きなボックスの大きさについて混乱している場合は、このレッスンに戻ってください。

次の記事では、 c-css が競合を処理する方法を見ていきます。複数のルールで同じ要素が選択された場合、どのスタイルが適用されるのでしょうか？

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/combinatows", ^^;; "weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts", (⑅˘꒳˘) "weawn_web_devewopment/cowe/stywing_basics")}}
