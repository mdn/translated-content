---
title: ボックスモデル
slug: Learn/CSS/Building_blocks/The_box_model
l10n:
  sourceCommit: cafb94fe8b20ea9f38db7910b7da1b13e29354b5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

CSS にはボックスの概念があり、これを理解することは CSS でレイアウトを作成したりアイテム同士を揃えたりするためのコツとなります。このレッスンでは CSS ボックスモデルを詳しく解説し、その仕組みと関連する用語を理解することでより複雑なレイアウトができるようにします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアがインストールされている</a
        >こと、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイルの扱い</a
        >、
        HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >で学習）、および CSS の動作に関する考え（<a href="/ja/docs/Learn/CSS/First_steps">CSS の第一歩</a>で学習）に関する基本的な知識を得ている。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        CSS のボックスモデルとその構成要素、代替モデルへの切り替えについて学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## ブロックボックスとインラインボックス

CSS にはいくつかの種類のボックスがあり、一般的に**ブロックボックス**と**インラインボックス**のカテゴリーに分類されます。この種類は、ページの流れやページ上の他のボックスとの関連において、ボックスがどのように振る舞うかを参照します。ボックスには**内側の表示型**と**外側の表示型**があります。

一般的に、様々な値を持つことができる {{cssxref("display")}} プロパティを使用して、表示型に様々な値を設定することができます。

## 外側の表示型

ボックスの外側の表示型が `block` である場合は、次のように動作します。

- ボックスは新しい行に分割されます。
- {{cssxref("width")}} および {{cssxref("height")}} プロパティが尊重されます。
- パディング、マージン、境界により、このボックスから他の要素が遠ざけられます。
- {{cssxref("width")}} が指定されていない場合、ボックスはインライン方向に伸びて、コンテナーで使用可能な空間を埋めます。多くの場合、ボックスがコンテナーと同じ幅になり、利用可能な空間の 100% を占めるということです。

HTML 要素の中には `<h1>` や `<p>` のように、既定で `block` を外側の表示型として使用するものがあります。

ボックスの外側の表示型が `inline` である場合は、次のように動作します。

- ボックスは新しい行に分割されません。
- {{cssxref("width")}} および {{cssxref("height")}} プロパティは適用されません。
- 上下のパディング、マージン、境界は適用されますが、他のインラインボックスをこのボックスから引き離すことはありません。
- 左右のパディング、マージン、境界は適用され、他のインラインボックスをこのボックスから引き離します。

HTML 要素の中には、 `<a>`、`<span>`、`<em>`、`<strong>` のように、既定で `inline` を外側の表示型として使用するものがあります。

## 内側の表示型

ボックスには内側の表示型もあり、ボックス内の要素をどのようにレイアウトするかを指定します。

ブロックおよびレイアウトは、ウェブにおける既定の振る舞いです。既定では、他に指示がない限り、ボックス内の要素は **[通常フロー](/ja/docs/Learn/CSS/CSS_layout/Normal_Flow)** でレイアウトされ、ブロックボックスやインラインボックスとして振る舞います。

内側の表示型は、例えば`display: flex;`を設定することで変更することができます。この要素は外側の表示型に `block` を使用しますが、内側の表示型は `flex` に変更されます。このボックスの直接の子要素はフレックスアイテムとなり、[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)の仕様に従って動作します。

CSS のレイアウトのより詳しい学習をする段階では、 [`flex`](/ja/docs/Learn/CSS/CSS_layout/Flexbox) を始めとしたボックスが持つことができる他の様々な内部値、例えば [`grid`](/ja/docs/Learn/CSS/CSS_layout/Grids) などに出会うでしょう。

> **メモ:** display の値、およびブロックおよびインラインレイアウトでのボックスの動作の詳細については、[ブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)に関する MDN ガイドを参照してください。

## さまざまな表示型の例

下記の例では 3 つの異なる HTML 要素があり、すべて外側の表示型は `block` です。

- CSS で境界線を追加した段落。ブラウザーはこれをブロックボックスとして描画します。段落は新しい行から始まり、利用できる幅いっぱいに広がります。

- `display: flex` を使用してレイアウトされたリストです。これはフレックスレイアウトを確立し、コンテナーの子をフレックスアイテムとします。リストそのものはブロックボックスで、段落のようにコンテナーの幅いっぱいに展開され、新しい行に分割されます。

- ブロックレベルの段落があり、その中に 2 つの `<span>` 要素があります。通常、これらの要素は `inline` ですが、要素の 1 つに "block" のクラスがあり、`display: block` に設定しました。

{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1100)}}

この次の例では、`inline` 要素の動作を確認できます。

- 最初の段落の `<span>` は既定ではインラインのため、強制的に改行しません。

- `display: inline-flex` に設定された `<ul>` 要素は、いくつかのフレックスアイテムの入ったインラインボックスを生成します。

- `display: inline` に設定された 2 つの段落があります。インラインフレックスコンテナーと段落はすべて、（ブロックレベル要素として表示されるように）新しい行に分割されるのではなく、横に 1 行に並びます。

**この例では、`display: inline` を `display: block` に、または`display: inline-flex` を `display: flex` に変更して、これらの表示モードの間を切り替えられます。**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1100)}}

現時点で覚えておくべき重要な点は、`display` プロパティの値を変更すると、ボックスの外側の表示型がブロックかインラインかを変更できるため、レイアウト内の他の要素と一緒に表示する方法が変わることです。

## CSS ボックスモデルとは

ブロックボックスには CSS ボックスモデル全体が適用され、ボックスのさまざまな部分（マージン、境界、パディング、コンテンツ）がどのように連携して動作し、ページ上に表示されるボックスを生成するのかを定義します。インラインボックスは、ボックスモデルで定義されている動作の一部だけを使用します。

さらに複雑なことに、標準ボックスモデルと代替ボックスモデルがあります。既定では、ブラウザーは標準ボックスモデルを使用します。

### ボックスの構成

CSS でブロックボックスを構成するものとしては、以下のものがあります。

- **コンテンツボックス**: コンテンツが表示される領域。サイズは {{cssxref("inline-size")}} と {{cssxref("block-size")}}、または {{cssxref("width")}} と {{cssxref("height")}} などのプロパティを使用して制御します。
- **パディングボックス**: パディングはコンテンツの周囲に空白として配置されます。サイズは {{cssxref("padding")}} および関連するプロパティを使用して制御します。
- **境界ボックス**: 境界ボックスは、コンテンツとパディングを囲みます。サイズは {{cssxref("border")}} および関連するプロパティを使用して制御します。
- **マージンボックス**: マージンは最も外側のレイヤーで、このボックスと他の要素の間の空白としてコンテンツ、パディング、および境界線を囲みます。サイズは {{cssxref("margin")}} および関連するプロパティを使用して制御できます。

以下の図は、これらのレイヤーを示しています。

![ボックスモデルの図](box-model.png)

### CSS 標準ボックスモデル

標準ボックスモデルでは、ボックスに `inline-size` と `block-size` （または `width` と `height`）を指定すると、*コンテンツボックス*のインライン方向のサイズととブロック方向のサイズ（横書きの言語では幅と鷹さ）が定義されます。すべての padding と border がその幅と高さに追加され、ボックスが占める合計サイズが取得されます。

以下の CSS をボックスに適用した場合、

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

ボックスが実際に占める空間は、幅 410px (350 + 25 + 25 + 5 + 5)、高さ 210px (150 + 25 + 25 + 5 + 5) です。

![標準ボックスモデルを使用している場合のボックスサイズを示しています。](standard-box-model.png)

> **メモ:** マージンは、ボックスの実際のサイズにはカウントされません。確かに、ボックスがページ上で占める合計スペースに影響しますが、ボックスの外側のスペースにのみ影響します。ボックスの領域は境界線で停止し、マージンまでは達しません。

### CSS 代替ボックスモデル

代替ボックスモデルを使用すると、幅はページ上に表示されるボックスの幅になります。コンテンツ領域の幅は、その幅からパディングと境界の幅を引いたものになります。ボックスの実際のサイズを得るために境界とパディングを加える必要はありません。

要素に対して代替モデルを有効にしたい場合は、`box-sizing: border-box` を設定してください。

```css
.box {
  box-sizing: border-box;
}
```

次のように、ボックスの CSS が上記と同様であった場合、

```css
.box {
  width: 350px;
  inline-size: 350px;
  height: 150px;
  block-size: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

これで、ボックスが実際に占める空間は、インライン方向に 350px、ブロック方向に 150px になります。

![代替ボックスモデルを使用している場合のボックスのサイズを示した図。](alternate-box-model.png)

すべての要素に代替ボックスモデルを使用するには（開発者の間では一般的な選択です）、 `<html>` 要素に `box-sizing` プロパティを設定し、他の要素はすべてその値を継承するように設定します。

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

基盤となっている考えを理解するためには、 [CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) を読んでください。

## ボックスモデルを試してみる

以下の例では、2 つのボックスを見ることができます。両方とも `.box` のクラスを持ち、同じ `width`、`height`、`margin`、`border`、`padding` を提供します。唯一の違いは、2 番目のボックスが代替ボックスモデルを使用するように設定されていることです。

**2 番目のボックスのサイズを変更 (`.alternate` クラスに CSS を追加) して、幅と高さを最初のボックスに一致させることはできますか？**

{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1100)}}

> **メモ:** [ここ](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model)でこのタスクの解決策を見つけることができます。

### ブラウザーの開発者ツールを使用してボックスモデルを見る

[ブラウザーの開発者ツール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)を使用すると、ボックスモデルをはるかに簡単に理解できます。 Firefox の開発者ツールで要素を調べると、要素のサイズに加えて、マージン、パディング、境界が確認できます。この方法で要素を検査することは、ボックスが本当に思っているサイズであるかどうかを知る素晴らしい方法です。

![Firefox の開発者ツールを使用した要素のボックスモデルの検査](box-model-devtools.png)

## マージン、パディング、境界

上記の例では、{{cssxref("margin")}}、{{cssxref("padding")}}、{{cssxref("border")}} のプロパティが動作しているのを見てきました。この例で使用されているプロパティは**一括指定**であり、ボックスの 4 辺すべてを一度に設定できます。これらの一括指定には、同等の個別指定プロパティもあり、ボックスのさまざまな辺を個別に制御できます。

これらのプロパティをさらに詳しく見てみましょう。

### マージン

マージンは、ボックスの周りの見えない空間です。 他の要素をボックスから遠ざけます。 マージンには正または負の値を設定できます。 ボックスの片側に負のマージンを設定すると、ページ上の他の部分と重なる場合があります。 標準または代替のボックスモデルを使用しているかどうかにかかわらず、表示ボックスのサイズが計算された後、マージンは常に追加されます。

{{cssxref("margin")}} プロパティを使用して要素のすべてのマージンを一度に制御するか、同等の個別指定プロパティを使用して各辺を個別に制御できます。

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

**下記の例では、マージンの値を変更してみて、マージンによってこの要素と格納する要素との間に空間が作成されたり除去されたり（負のマージンの場合）して、ボックスがどのように押しやられるかを確認してください。**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 800)}}

#### マージンの相殺

マージンが接する 2 つの要素のマージンが正の値か負の値かによって、結果が異なります。

- 2 つの正のマージンは、結合して 1 つのマージンになります。その大きさは、それぞれのマージンの最大値と同じになります。
- 2 つの負のマージンは、折り畳まれ、最も小さい（ゼロから最も遠い）値が使用されます。
- 一方のマージンが負の場合、その値が合計から引かれます。

以下の例には、2 つの段落があります。 上の段落には、50 ピクセルの `margin-bottom` があります。2 番目の段落の `margin-top` は 30 ピクセルです。マージンは一緒に折りたたまれているため、ボックス間の実際のマージンは 50 ピクセルであり、2 つのマージンの合計ではありません。

**これをテストするには、第二段落の `margin-top` を 0 に設定します。2 つの段落間のマージンは変更されません。第一段落の `margin-bottom` に設定された 50 ピクセルを保持します。-10px に設定すると、全体のマージンが 40px になることがわかります。50px から差し引かれます。**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 800)}}

マージンが相殺される場合と相殺されない場合を規定する多くのルールがあります。 詳細については、[マージンの相殺](/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)に関する詳細ページをご覧ください。覚えておくべき主なことは、マージンの相殺は、マージンで空間を作成しているときに、期待した空間が得られなかった場合に起こることだということです。

### 境界

境界 (border) は、ボックスのマージンとパディングの間に描かれます。標準ボックスモデルを使用している場合、境界のサイズがコンテンツボックスの `width` と `height` に追加されます。代替ボックスモデルを使用している場合、境界のサイズが利用可能な `width` と `height` の一部を占めるため、コンテンツボックスが小さくなります。

境界のスタイル設定には、多数のプロパティがあります。4 つの境界があり、それぞれの境界には、操作することができるスタイル、幅、色があります。

{{cssxref("border")}} プロパティを使用して、4 つすべての境界の幅、色、スタイルを一度に設定することができます。

それぞれの辺のプロパティを個別に設定するには、次のものを使用します。

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

すべての辺の幅、スタイル、色を設定するには、次のものを使用します。

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

単一の辺の幅、スタイル、色を設定するには、より詳細な以下の個別指定プロパティのいずれかを使用します。

- {{cssxref("border-top-width")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-color")}}

下記の例では、様々な一括指定や個別指定を用いて境界線を作成しています。それらがどのように動作するのかを理解するために、様々なプロパティを試してみてください。境界のプロパティの MDN ページには、利用できる様々な境界のスタイル設定についての情報があります。

{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 700)}}

### パディング

パディングは境界とコンテンツ領域の間に位置し、コンテンツを境界から離すために使用します。マージンとは異なり、負のパディングを指定することはできません。要素に背景が適用されると、パディングの背後に表示されます。

{{cssxref("padding")}} プロパティは、要素のすべての辺のパディングを制御します。各辺を個別に制御するには、以下の個別指定プロパティを使用します。

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

以下の例で `.box` クラスのパディングの値を変更すると、ボックスからみたテキストの開始位置が変わることがわかります。 `.container` クラスのパディングを変更することもできます。これにより、コンテナーとボックスの間に空間ができます。要素のパディングを変更することで、要素の境界線と要素の内部にあるものとの間に空間を作成することができます。

{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 700)}}

## ボックスモデルとインラインボックス

ブロックボックスには、上記のすべてが適用されます。プロパティのいくつかは `<span>` 要素で作成されるようなインラインボックスにも適用できます。

以下の例では、段落内に `<span>` があり、`width`、`height`、`margin`、`border`、`padding` が適用されています。幅と高さが無視されていることがわかります。上下のマージン、パディング、境界は尊重されますが、他のコンテンツとインラインボックスとの位置関係は変わりません。パディングと境界は、段落内の他の語句に重なります。左右のパディング、マージン、境界は、他のコンテンツをボックスから遠ざけます。

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 700)}}

## display: inline-block を使用する

`display: inline-block` は `display` の特別な値で、`inline` と `block` の中間を提供します。アイテムを改行させたくないが、 `width` と `height` を尊重し、上記のような重なりを避けたい場合に使用します。

`display: inline-block` を持つ要素は、すでにおなじみのブロックのサブセットになります。

- `width` と `height` のプロパティが尊重されます。
- パディング、マージン、境界により、他の要素がボックスから遠ざけられます。

ただし、新しい行に分割されることはなく、コンテンツより大きくなるのは `width` および `height` プロパティを明示的に追加した場合のみです。

**次の例では、`<span>` 要素に `display: inline-block` を追加しています。これを `display: block` 変更したり、行を完全に削除したりして、表示モデルの違いを確認してください。**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}

これが役立つのは、 `padding` を追加して、リンクのヒット領域を大きくしたい場合です。 `<a>` は `<span>` のようなインライン要素です。 `display: inline-block` を使用してパディングを設定できるようにし、ユーザーがリンクをクリックしやすくします。

これはナビゲーションバーでとてもよく見られます。下記のナビゲーションはフレックスボックスを使って一列に表示されていますが、 `<a>` 要素にパディングを追加しています。パディングは `<ul>` 要素の境界線に重なって現れます。これは `<a>` がインライン要素だからです。

**`display: inline-block` を `.links-list a` セレクターを使用してルールに追加すると、他の要素でパディングが尊重されるようになり、この課題が修正されたことがわかります。**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 700)}}

## スキルテスト

この記事の最後まで到達しましたが、最も重要な情報を覚えていますか？移動される前に、この情報が記憶されているかどうかを確認するためのテストを探すことができます。[スキルテスト: ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/Box_Model_Tasks)を参照してください。

## まとめ

以上が、ボックスモデルについて理解する必要があるほとんどのことです。レイアウト内の大きなボックスの大きさについて混乱している場合は、このレッスンに戻ってください。

次のレッスンでは[背景と境界](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)を使用してプレーンボックスをより面白くする方法を見ていきます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}
