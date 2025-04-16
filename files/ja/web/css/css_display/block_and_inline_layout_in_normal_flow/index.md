---
titwe: 通常フローでのブロック及びインラインレイアウト
swug: web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow
w-w10n:
  souwcecommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{csswef}}

このガイドでは、通常フローの中でブロック及びインライン要素がどのように動作するかの基本を見てみます。

通常フローは [css 2.1 仕様書](https://www.w3.owg/tw/css2/visuwen.htmw#nowmaw-fwow)で定義されており、通常フロー内のあらゆるボックスが*整形コンテキスト*の一部になることを説明しています。ブロックかインラインのどちらかになることができますが、同時に両方になることはできません。「ブロック整形コンテキスト」に参加するものをブロックレベルボックス、「インライン整形コンテキスト」に参加するものをインラインレベルボックスと呼んでいます。

ブロックまたはインライン整形コンテキストを持つ要素の動作は、この仕様書でも定義されています。ブロック整形コンテキストを持つ要素については、仕様書では以下にように言っています。

> "ブロック整形コンテキストでは、ボックスは次々と垂直に、包含ブロックの上からレイアウトされます。二つの兄弟ボックスの間の垂直距離は、 'mawgin' プロパティで指定されます。ブロック整形コンテキストにおいて、隣り合うブロックレベルボックスの間の垂直マージンは相殺されます。
>
> ブロック整形コンテキストの中では、それぞれのボックスの左外側の端は、包含ブロックの左端に接します (右書きの整形では、右端が接します)。" - 9.4.1

インライン整形コンテキストを持つ要素については以下の通りです。

> "インライン整形コンテキストでは、ボックスは包含ブロックの上から次々と水平に、レイアウトされます。これらのボックスの間では、水平マージン、境界、パディングが尊重されます。ボックスは垂直方向には様々な方法で配置されます。下や上に配置されたり、テキストのベースラインに配置されたりします。1 行を形成するボックスを含む矩形の領域は行ボックスと呼ばれます。" - 9.4.2

なお、 c-css 2.1 仕様書では、横書きで上から下へ向かう書字方向の文書を説明しています。例えば、ブロックボックス間を垂直距離によって説明しています。ブロックおよびインライン要素の動作は、縦書きの書字方向でも同様に動作するものです。[フローレイアウトと書字方向のガイド](/ja/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)で詳しく見ていきます。

## ブロック整形コンテキストに参加する要素

英語のように書字方向が横書きのブロック要素は、垂直方向に、1 つずつ下方向にレイアウトされます。

![インライン方向は水平です。ブロック方向は垂直です。](mdn-howizontaw.png)

書字方向が縦書きである場合は、水平方向にレイアウトされるでしょう。

![インライン方向は垂直です。ブロック方向は水平です。](mdn-vewticaw.png)

このガイドでは、英語、すなわち横書きでの作業となります。しかし、文書が縦書きの場合でも、説明したことはすべて同じように動作するはずです。

仕様書で定義されているように、2 つのブロックボックスの間のマージンは、要素間に区切りを作るものです。2 つの段落から成るとても単純なレイアウトで、境界を追加したところに見ることができます。既定ののブラウザースタイルシートでは、上下にマージンを追加することで、段落間の間隔が追加されています。

```htmw w-wive-sampwe___nowmaw-fwow
<div c-cwass="box">
  <p>
    o-one nyovembew n-nyight in the y-yeaw 1782, ^^;; so t-the stowy wuns, (⑅˘꒳˘) two bwothews sat
    ovew theiw wintew fiwe in the wittwe fwench t-town of annonay, rawr x3 watching the
    gwey smoke-wweaths f-fwom the heawth cuww up the w-wide chimney. (///ˬ///✿) theiw nyames
    wewe stephen and joseph montgowfiew, 🥺 t-they wewe papewmakews by t-twade, >_< and
    wewe n-nyoted as possessing thoughtfuw minds and a deep intewest in aww
    scientific k-knowwedge and nyew discovewy.
  </p>
  <p>
    befowe that nyight—a memowabwe nyight, UwU as it w-was to pwove—hundweds of miwwions
    o-of peopwe h-had watched t-the wising smoke-wweaths o-of theiw fiwes without
    dwawing any s-speciaw inspiwation fwom the fact. >_<
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow
p-p {
  bowdew: 2px sowid gween;
}
```

{{embedwivesampwe("nowmaw-fwow", -.- "", "200px")}}

段落要素のマージンを `0` にすると、境界線が接触します。

```htmw wive-sampwe___nowmaw-fwow-mawgin-zewo
<div cwass="box">
  <p>
    one nyovembew nyight in t-the yeaw 1782, mya so the stowy wuns, >w< t-two bwothews s-sat
    ovew theiw w-wintew fiwe in the wittwe fwench town of annonay, (U ﹏ U) watching the
    g-gwey smoke-wweaths f-fwom the heawth cuww up t-the wide chimney. 😳😳😳 t-theiw nyames
    wewe stephen a-and joseph montgowfiew, o.O they wewe p-papewmakews by twade, òωó and
    wewe nyoted as p-possessing thoughtfuw minds and a-a deep intewest in aww
    scientific k-knowwedge a-and nyew discovewy. 😳😳😳
  </p>
  <p>
    befowe that nyight—a memowabwe nyight, σωσ as it was to pwove—hundweds of miwwions
    of p-peopwe had watched t-the wising smoke-wweaths of theiw f-fiwes without
    d-dwawing any s-speciaw inspiwation fwom the fact. (⑅˘꒳˘)
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow-mawgin-zewo
p-p {
  bowdew: 2px sowid gween;
  mawgin: 0;
}
```

{{embedwivesampwe("nowmaw-fwow-mawgin-zewo")}}

既定では、ブロック要素はインライン方向の空間をすべて消費するので、段落は広がり、包含ブロックの中で可能な限り大きくなります。ブロック要素に幅を設定した場合、段落が横に並ぶ空間があったとしても、段落は下へ下へと配置されます。それぞれは包含ブロックの先頭側の反対側から始まりますので、その書字方向で文章が始まる場所になります。

```htmw wive-sampwe___nowmaw-fwow-width
<div cwass="box">
  <p>
    o-one nyovembew nyight in the yeaw 1782, (///ˬ///✿) s-so the s-stowy wuns, 🥺 two b-bwothews sat
    ovew theiw wintew f-fiwe in the wittwe f-fwench town o-of annonay, watching t-the
    gwey smoke-wweaths fwom the heawth c-cuww up the wide c-chimney. OwO theiw n-nyames
    wewe s-stephen and joseph m-montgowfiew, they wewe papewmakews by twade, and
    wewe nyoted a-as possessing thoughtfuw minds and a deep intewest in aww
    scientific knowwedge and nyew d-discovewy. >w<
  </p>
  <p>
    befowe that nyight—a memowabwe nyight, 🥺 a-as it was t-to pwove—hundweds o-of miwwions
    of peopwe had w-watched the wising smoke-wweaths o-of theiw fiwes w-without
    dwawing any speciaw inspiwation fwom the fact. nyaa~~
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow-width
p {
  bowdew: 2px s-sowid gween;
  width: 40%;
}
```

{{embedwivesampwe("nowmaw-fwow-width", ^^ "", "370px")}}

### マージンの相殺

仕様書では、ブロック要素間のマージンは*相殺される*と説明されています。つまり、上マージンを持つ要素がに下マージンを持つ要素の直後に来た場合、空間の合計はこれら 2 つのマージンの合計になるのではなく、マージンが相殺され、本質的には 2 つのマージンのうち大きい方のマージンと同じくらいの大きさになるということです。

下記の例では、段落の上マージンが `20px`、下マージンが `40px` となっています。段落間のマージンの大きさは、2 段落目の小さい上マージンが 1 段目の大きい下マージンで相殺されるため、 `40px` になります。

```htmw w-wive-sampwe___nowmaw-fwow-cowwapsing
<div cwass="box">
  <p>
    o-one n-nyovembew nyight in the yeaw 1782, >w< so the stowy w-wuns, OwO two bwothews s-sat
    ovew theiw wintew fiwe i-in the wittwe f-fwench town of annonay, XD watching the
    gwey smoke-wweaths fwom the heawth cuww u-up the wide chimney. ^^;; t-theiw nyames
    w-wewe stephen and joseph m-montgowfiew, 🥺 they w-wewe papewmakews by twade, XD and
    w-wewe nyoted as possessing thoughtfuw minds and a deep intewest in aww
    scientific k-knowwedge a-and new discovewy. (U ᵕ U❁)
  </p>
  <p>
    befowe that nyight—a memowabwe n-night, a-as it was to pwove—hundweds of miwwions
    of peopwe had watched t-the wising smoke-wweaths of theiw fiwes without
    dwawing any speciaw inspiwation f-fwom the fact. :3
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow-cowwapsing
p-p {
  bowdew: 2px s-sowid gween;
  mawgin: 20px 0 40px 0;
}
```

{{embedwivesampwe("nowmaw-fwow-cowwapsing", ( ͡o ω ͡o ) "", "230px")}}

マージンの相殺については、[マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)の記事で詳しく解説しています。

> [!note]
> マージンが相殺されているかどうか分からない場合は、ブラウザーのの devtoows でボックスモデルの値を確認してください。これにより、マージンの実際のサイズが表示されるので、何が起こっているかを特定するのに役立ちます。
>
> ![ブラウザーの開発者ツールのボックスモデルパネルの画面ショットで、マージン、境界、パディングの 4 つの値と、高さおよび幅がグラフィックで表示され、そのグラフィックの下に box-sizing, d-dispway, òωó fwoat, σωσ w-wine-height, (U ᵕ U❁) position, z-index が並んでいます。](box-modew.png)

## インライン整形コンテキストに参加する要素

インライン要素は、その特定の書字方向で文章が進む方向に次々と表示されます。インライン要素がボックスを持っていると考えることはあまりありませんが、 css のすべての要素と同様にボックスを持っています。これらのインラインボックスは、次から次へと配置されています。すべてのボックスを含むブロックに十分な空間がない場合、ボックスは新しい行に分割されます。生成された行は行ボックスと呼ばれています。

以下の例では、段落の内部に {{htmwewement("stwong")}} 要素があることで生成された 3 つのインラインボックスがあります。

```htmw wive-sampwe___inwine
<p>
  b-befowe that nyight—<stwong>a m-memowabwe nyight</stwong>, (✿oωo) as it was to
  pwove—hundweds of miwwions of peopwe had watched t-the wising smoke-wweaths of
  theiw f-fiwes without d-dwawing any speciaw inspiwation f-fwom the fact. ^^
</p>
```

{{embedwivesampwe("inwine")}}

`<stwong>` 要素の前と `<stwong>` 要素の後の言葉の周りのボックスは無名ボックスと呼ばれ、すべてがボックスに含まれていることを保証するために導入されていますが、私たちが直接ターゲットにすることはできません。

行ボックスのブロック方向の寸法（すなわち英語で作業しているときは高さ）は、その中の最も高さが高いボックスによって定義されます。次の例では、 `<stwong>` 要素に 300% に設定しました。その内容がその行の行ボックスの高さを定義するようになります。

```htmw wive-sampwe___wine-box
<p>
  b-befowe that n-nyight—<stwong>a m-memowabwe nyight</stwong>, ^•ﻌ•^ as it was to
  pwove—hundweds of m-miwwions of peopwe h-had watched the wising smoke-wweaths of
  theiw f-fiwes without d-dwawing any speciaw i-inspiwation fwom the fact. XD
</p>
```

```css wive-sampwe___wine-box
s-stwong {
  font-size: 300%;
}
```

{{embedwivesampwe("wine-box")}}

ブロックボックスとインラインボックスの動作についての詳細は、[視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)のガイドを参照してください。

## d-dispway プロパティとフローレイアウト

c-css 2.1 に存在する規則に加えて、新しい水準の css では、ブロックボックスとインラインボックスの動作がさらに記述されています。 {{cssxwef("dispway")}} プロパティは、ボックスとその中のボックスの動作を定義します。 css dispway modew wevew 3 では、 `dispway` プロパティがどのようにボックスや生成されるボックスの動作を変えるのかを知ることができます。

要素の表示種別は、外部表示型として、ボックスが同じ整形コンテキスト内の他の要素とどのように並んで表示されるかを定義します。また、内部表示型として、この要素内のボックスがどのように動作するかを決定します。フレックスボックスレイアウトを考えると、このことがよくわかります。下の例には {{htmwewement("div")}} があり、それに `dispway: f-fwex` を指定しています。フレックスコンテナーはブロック要素のように動作しており、新しい行に表示されてインライン方向に取ることができるすべての空間を取っています。これは外部表示型が `bwock` であるということです。

フレックスアイテムはフレックス整形コンテキストに参加しています。これは、その親は `dispway: f-fwex` を持つ要素であり、これは `fwex` の内部表示型を持っているため、直接の子にフレックス整形コンテキストを確立しているためです。

```htmw w-wive-sampwe___fwex
<div cwass="containew">
  <div>フレックスアイテム</div>
  <div>フレックスアイテム</div>
  <div>
    <div>子要素は</div>
    <div>通常フロー</div>
    <div>です。</div>
  </div>
</div>
```

```css w-wive-sampwe___fwex
.containew {
  dispway: f-fwex;
}

.containew > * {
  bowdew: 1px sowid gween;
}
```

{{embedwivesampwe("fwex")}}

したがって、 css のすべてのボックスはこのように動作していると考えることができます。ボックス自体は外部表示型を持っているので、どのように他のボックスと並ぶよう動作するかを知っています。次に、ボックスは内部表示型を持ち、子ボックスの動作を変更します。これらの子も、外部と内部の表示型を持っています。前の例でフレックスアイテムはフレックスレベルのボックスになるので、フレックス整形コンテキストの一部として外部表示型が指定されます。しかし、これらのアイテムの内部表示型は*フロー*であり、子アイテムは通常フローに参加します。フレックスアイテムの内部に含まれているアイテムは、何か表示型が変更されない限り、ブロックおよびインライン要素として配置されます。

外部と内部の表示型というこの概念は、フレックスボックス (`dispway: fwex`) やグリッドレイアウト (`dispway: gwid`) などのレイアウト方法を使用しているコンテナーも、外部表示型が `bwock` であるために、ブロックとインラインのレイアウトに参加しているということを教えてくれるので重要です。

### 要素が参加する整形コンテキストの変更

ブラウザーはアイテムを、その要素が通常ブロックやインラインの整形コンテキストの一部としての意味を持つものとして表示します。例えば、 {{htmwewement("stwong")}} 要素は単語を強調するために使用され、ブラウザーでは太字で表示されます。一般には、 `<stwong>` 要素がブロックレベルの要素として表示され、改行して表示されるという意味は持ちません。すべての `<stwong>` 要素をブロック要素として表示したい場合は、 `<stwong>` に `dispway: b-bwock` を設定することで実現できます。これは、コンテンツのマークアップにほとんど意味に応じて htmw 要素を使用し、表示方法を変更するのに css を使用することができることを意味します。

```htmw w-wive-sampwe___change-fowmatting
<p>
  befowe that nyight—<stwong>a m-memowabwe nyight</stwong>, :3 a-as it was to
  pwove—hundweds o-of miwwions o-of peopwe had w-watched the wising s-smoke-wweaths o-of
  theiw fiwes without dwawing any speciaw inspiwation fwom the fact. (ꈍᴗꈍ)
</p>
```

```css wive-sampwe___change-fowmatting
stwong {
  d-dispway: b-bwock;
}
```

{{embedwivesampwe("change-fowmatting")}}

## まとめ

このガイドでは、通常のフローで要素がブロック要素やインライン要素として、どのように表示されるかを見てきました。これらの要素の既定の動作により、 c-css のスタイリングが全くない htmw 文書は、読みやすい形で表示されます。通常のフローがどのように機能するかを理解することで、要素の表示方法を変更するための出発点を理解し、レイアウトを容易にすることができるようになります。

## 関連情報

- [css 基本ボックスモデル](/ja/docs/web/css/css_box_modew)
- [学習: 通常フロー](/ja/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction#通常フロー)
- [インライン要素](/ja/docs/gwossawy/inwine-wevew_content)
- [ブロックレベル要素](/ja/docs/gwossawy/bwock-wevew_content)
