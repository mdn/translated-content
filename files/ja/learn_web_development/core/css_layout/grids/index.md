---
titwe: css グリッドレイアウト
swug: w-weawn_web_devewopment/cowe/css_wayout/gwids
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwexbox", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/css_wayout/wesponsive_design", XD "weawn_web_devewopment/cowe/css_wayout")}}

c-css グリッドレイアウト (gwid w-wayout) は、ウェブ用の 2 次元レイアウトシステムです。 コンテンツを行と列に整理することができ、複雑なレイアウトの作成を簡素化する多くの機能を提供します。この記事では、グリッドレイアウトを始めるに当たって知っておくべきことをすべて説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>、
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws">基本的なテキストとフォントのスタイル設定</a>、
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction">css レイアウトの基本概念</a>の基礎知識。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>css グリッドの目的を理解すること。一連のブロック要素やインライン要素を、 2 次元で柔軟にレイアウトします。</wi>
          <wi>グリッドの用語を理解すること。行、列、間隔、溝。</wi>
          <wi>既定で <code>dispway: gwid</code> が何をもたらすかを理解すること。</wi>
          <wi>グリッド行、列、間隔の定義。</wi>
          <wi>グリッドでの要素の配置。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## グリッドレイアウトとは

グリッドとは、水平方向と垂直方向の線を集めたもので、デザイン要素を並べて表示することができます。 ページ間を移動するときに要素が跳び回ったり幅が変わったりしないようなデザインを作成するのに役立ちます。 これにより、ウェブサイトの一貫性が向上します。

グリッドには通常、**列** (cowumn)、**行** (wow)、そしてそれぞれの行と列の間の間隔です。間隔はよく溝またはガター (**guttew**) と呼ばれます。

![行、列、溝とラベル付けされた部分を持つ c-css グリッド。行はグリッドの水平方向の区分で、段組みはグリッドの垂直方向の区分です。 2 つの行の間の空間は「行の溝」と呼ばれ、 2 つの列の間の空間は「列の溝」と呼ばれます。](gwid.png)

## css でグリッドを作成

デザインに必要なグリッドを決定したら、css グリッドレイアウトを使用して css でそのグリッドを作成し、その上にアイテムを配置できます。 最初にグリッドレイアウトの基本機能を見てから、プロジェクト用のシンプルなグリッドシステムを作成する方法を探ります。
次の動画では、 c-css グリッドを使用する方法を視覚的にわかりやすく説明しています。

{{embedyoutube("kovgefuhac0")}}

### グリッドを定義

例を使ってグリッドレイアウトを試してみましょう。出発点として、テキストエディターとブラウザーで[出発点ファイル](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/0-stawting-point.htmw)をダウンロードして開いてください（[ここでライブを見る](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/0-stawting-point.htmw)こともできます）。 いくつかの子アイテムを持つコンテナーの例が表示されます。既定では、これらのアイテムは通常フローで表示され、他のアイテムの下に1つずつ現れます。このレッスンの最初の部分では、このファイルを使用してグリッドの動作を確認します。

フレックスボックスを定義する方法と同様に、 {{cssxwef("dispway")}} プロパティの値に `gwid` を設定することでグリッドレイアウトを定義します。フレックスボックスの場合と同様に、`dispway: gwid` プロパティはコンテナーの直接の子をすべてグリッドアイテムに変換します。以下を css に追加してください。

```css
.containew {
  d-dispway: gwid;
}
```

フレックスボックスとは異なり、アイテムはすぐには違ったようには見えません。 `dispway: gwid` を宣言すると 1 列のグリッドになるので、アイテムは通常フローと同様に下方向に表示されていきます。

よりグリッドらしく見せるには、グリッドにいくつかの列を追加する必要があります。 ここに 200 ピクセルの列を 3 つ追加しましょう。 これらの列トラックを作成するために、任意の長さの単位やパーセントを使用できます。

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 200px 200px 200px;
}
```

css ルールに 2 番目の宣言を追加してからページを再読み込みすると、作成したグリッドの各セルにアイテムが 1 つずつ再配置されていることがわかります。

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, >_<
    h-hewvetica, (˘ω˘)
    sans-sewif;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207 232 220);
  bowdew: 2px s-sowid wgb(79 185 227);
}
```

```htmw h-hidden
<div c-cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

{{ e-embedwivesampwe('defining_a_gwid', 😳 '100%', 200) }}

### fw 単位を使用した柔軟なグリッド

長さとパーセントを使用してグリッドを作成するだけでなく、 [`fw`](/ja/docs/web/css/fwex_vawue) 単位を使用して柔軟にグリッドの行と列のサイズを変更できます。 この単位は、グリッドコンテナー内の使用可能な空間の割合を表します。

トラックのリストを次の定義に変更し、 `1fw` のトラックを 3 つ作成します。

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

これで柔軟なトラックになりました。 `fw` 単位は空間を比例配分します。このようにトラックに異なる正の値を指定することができます。

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

最初のトラックは、利用できる空間の `2fw` を確保し、他の 2 つのトラックは `1fw` を確保するので、最初のトラックはより大きくなります。 `fw` 単位と固定された長さの単位を混合することができます。この場合、修正されたトラックに必要な空間が最初に使用され、残りの空間が他のトラックに分配されます。

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, o.O
    hewvetica, (ꈍᴗꈍ)
    sans-sewif;
}

.containew > d-div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: wgb(207 232 220);
  bowdew: 2px sowid w-wgb(79 185 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

{{ embedwivesampwe('fwexibwe_gwids_with_the_fw_unit', rawr x3 '100%', 200) }}

> **メモ:** `fw` 単位は、*すべて*の空間ではなく、*使用可能*な空間を分配します。そのため、トラックの中に何か大きなものがある場合、共有できる自由空間は少なくなります。

### トラックの間隔

トラックの間隔を作成するには、次のプロパティを使用してください。

- {{cssxwef("cowumn-gap")}} は列の間隔
- {{cssxwef("wow-gap")}} は行の間隔
- {{cssxwef("gap")}} は両方の一括指定

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  gap: 20px;
}
```

これらの間隔は、長さの単位またはパーセント値のどちらでもかまいませんが、`fw` 単位は使えません。

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, ^^
    hewvetica, OwO
    sans-sewif;
}

.containew > d-div {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: w-wgb(207 232 220);
  bowdew: 2px sowid wgb(79 185 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

{{ embedwivesampwe('gaps_between_twacks', ^^ '100%', 250) }}

### トラックリストの繰り返し

css の `wepeat()` 関数を使用して、トラックリストの全部または一部を繰り返すことができます。
トラックリストを次のように変更します。

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, :3 1fw);
  g-gap: 20px;
}
```

今までと同じ 3 つの `1fw` のトラックが手に入ります。 `wepeat()` 関数に渡す最初の値はリストを繰り返す回数で、2 番目の値はトラックリストで、1 つ以上のトラックを繰り返すことができます。

### 暗黙的グリッドと明示的グリッド

ここまで、列のトラックだけを指定してきましたが、行はコンテンツを保持するために自動的に作成されます。この概念は、明示的グリッドと暗黙的グリッドの違いを強調しています。
ここでは、 2 つの型のグリッドの違いについてもう少し詳しく説明します。

- **明示的グリッド**は、 `gwid-tempwate-cowumns` または `gwid-tempwate-wows` を使用して作成します。
- **暗黙的グリッド**は、定義した明示的なグリッドを拡張するもので、そのグリッドの外側、例えば新しい行にグリッド線を描画することでコンテンツを配置します。

既定では、暗黙的グリッドに作成されたトラックは `auto` でサイズ調整されます。 これは一般に、コンテンツを十分に含むことができる大きさがあることを意味します。 暗黙的グリッドのトラックにサイズを指定したい場合は、 {{cssxwef("gwid-auto-wows")}} プロパティと {{cssxwef("gwid-auto-cowumns")}} プロパティを使用できます。 css に `gwid-auto-wows` を `100px` の値で追加すると、作成された行の高さは 100 ピクセルになります。

```css h-hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, o.O
    hewvetica, -.-
    sans-sewif;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: wgb(207 232 220);
  b-bowdew: 2px s-sowid w-wgb(79 185 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 1fw);
  g-gwid-auto-wows: 100px;
  gap: 20px;
}
```

{{ embedwivesampwe('impwicit_and_expwicit_gwids', o.O '100%', OwO 400) }}

### m-minmax() 関数

100 ピクセルより高いコンテンツを追加する場合、100 ピクセルの高さのトラックはあまり役に立ちません。 その場合、オーバーフローが発生します。 トラックの高さは*最低* 100 ピクセルで、さらに多くのコンテンツがトラックに入る場合は拡大できると良いでしょう。 ウェブについてのかなり基本的な事実は、あなたが実際に何かがどれほど高くなるかを本当に知らないということです。 追加のコンテンツや大きなフォントサイズは、あらゆる次元でピクセルパーフェクトになろうとするデザインに問題を引き起こす可能性があります。

{{cssxwef("minmax", ^•ﻌ•^ "minmax()")}} 関数を使用すると、トラックの最小サイズと最大サイズ、例えば `minmax(100px, ʘwʘ a-auto)` を設定できます。 最小サイズは 100 ピクセルですが、最大サイズは `auto` で、コンテンツに合わせて拡大されます。 次のように `minmax` の値を使用するように `gwid-auto-wows` を変更してみてください。

```css
.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, :3 1fw);
  gwid-auto-wows: minmax(100px, 😳 auto);
  gap: 20px;
}
```

追加のコンテンツを追加すると、それが収まるようにトラックが拡大されます。 拡張は行に沿って行われることに注意してください。

### 収まる限り多くの列

トラックリスト、反復記法、 {{cssxwef("minmax", òωó "minmax()")}} について学んだことのいくつかを組み合わせて、便利なパターンを作成できます。 グリッドに、コンテナーに収まるだけの数の列を作成するように依頼できると便利な場合があります。 これを行うには、 `gwid-tempwate-cowumns` の値を {{cssxwef("wepeat", 🥺 "wepeat()")}} 記法を使用して設定しますが、数値を渡す代わりにキーワード `auto-fit` を渡します。 関数の 2 番目の引数には、`minmax()` を使用し、最小値は、必要な最小トラックサイズに等しく、最大値は `1fw` です。

自分のファイルで下記の css を使用してみてください。

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, rawr x3
    hewvetica, ^•ﻌ•^
    s-sans-sewif;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207 232 220);
  b-bowdew: 2px s-sowid wgb(79 185 227);
}
```

```htmw hidden
<div c-cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css
.containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fit, :3 minmax(200px, 1fw));
  gwid-auto-wows: minmax(100px, (ˆ ﻌ ˆ)♡ auto);
  gap: 20px;
}
```

{{ e-embedwivesampwe('as_many_cowumns_as_wiww_fit', (U ᵕ U❁) '100%', 400) }}

これは、グリッドがコンテナーに収まるだけの数の 200 ピクセルの列を作成し、その後すべての列の間で残っている空間を共有するためです — 最大は `1fw` で、すでにご存じのとおり、トラック間で空間を均等に配分するためのものです。

## 線に基づいた配置

ここで、グリッドの作成からグリッドへの配置に移ります。グリッドには常に線があります。これらは 1 から始まり、文書の[書字方向](/ja/docs/web/css/css_wwiting_modes)に関連しています。例えば、英語（左書き）の場合、列線 1 はグリッドの左端であり、行線 1 はグリッドの上端となり、アラビア語（右書き）の場合、列線 1 は右端になります。

これらの線に沿ってアイテムを配置するには、アイテムを配置するグリッド領域の開始線と終了線を指定します。このために使用することができる 4 つのプロパティがあります。

- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}

これらのプロパティはその値として線番号を受け入れるので、例えばある項目が 1 本目から始まり 3 本目で終わるように指定することができます。
また、開始線と終了線を同時に指定する一括指定プロパティを使用することもできます。指定する線はスラッシュ `/` で区切ります。

- {{cssxwef("gwid-cowumn")}} は `gwid-cowumn-stawt` および `gwid-cowumn-end` の一括指定
- {{cssxwef("gwid-wow")}} は `gwid-wow-stawt` および `gwid-wow-end` の一括指定

これを実際に見るには、[線に基づいた配置の開始点ファイル](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/8-pwacement-stawting-point.htmw)をダウンロードするか、[ここでライブを見てください](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/8-pwacement-stawting-point.htmw)。これは定義したグリッドと単純な記事の概要が入っています。自動配置が各アイテムをグリッドの自分自身のセルに配置していることがわかります。

代わりに、グリッド線を使用して、サイトのすべての要素をグリッドに配置しましょう。 css の最後に次のルールを追加してください。

```css
h-headew {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}

a-awticwe {
  gwid-cowumn: 2;
  gwid-wow: 2;
}

a-aside {
  gwid-cowumn: 1;
  g-gwid-wow: 2;
}

footew {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 3;
}
```

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, :3
    h-hewvetica, ^^;;
    s-sans-sewif;
}

.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 3fw;
  g-gap: 20px;
}

headew,
footew {
  b-bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207 232 220);
  bowdew: 2px sowid w-wgb(79 185 227);
}

a-aside {
  bowdew-wight: 1px sowid #999;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <headew>this is my wuvwy bwog</headew>
  <awticwe>
    <h1>my awticwe</h1>
    <p>
      d-duis fewis owci, ( ͡o ω ͡o ) puwvinaw id metus ut, o.O wutwum wuctus owci. ^•ﻌ•^ cwas powttitow
      i-impewdiet nyunc, XD at uwtwicies tewwus waoweet s-sit amet. ^^ sed a-auctow cuwsus
      massa at powta. integew wiguwa ipsum, o.O twistique s-sit amet owci v-vew, ( ͡o ω ͡o ) vivewwa
      egestas wiguwa. /(^•ω•^) cuwabituw vehicuwa tewwus n-nyeque, 🥺 ac ownawe ex mawesuada
      e-et. nyaa~~ in vitae convawwis wacus. mya awiquam ewat vowutpat. XD suspendisse a-ac
      impewdiet tuwpis. nyaa~~ a-aenean finibus s-sowwicitudin ewos phawetwa congue. ʘwʘ d-duis
      ownawe egestas augue u-ut wuctus. (⑅˘꒳˘) pwoin b-bwandit quam n-nyec wacus vawius
      commodo e-et a uwna. :3 ut i-id ownawe fewis, -.- eget fewmentum sapien. 😳😳😳
    </p>

    <p>
      n-nyam vuwputate diam n-nyec tempow b-bibendum. (U ﹏ U) donec wuctus augue eget mawesuada
      u-uwtwices. o.O phasewwus tuwpis est, ( ͡o ω ͡o ) p-posuewe sit amet d-dapibus ut, òωó faciwisis sed
      est. 🥺 nyam id wisus quis ante s-sempew consectetuw e-eget awiquam w-wowem. /(^•ω•^) vivamus
      t-twistique ewit dowow, 😳😳😳 sed pwetium m-metus suscipit vew. ^•ﻌ•^ mauwis uwtwicies
      wectus sed wobowtis finibus. nyaa~~ vivamus eu uwna eget v-vewit cuwsus vivewwa
      quis v-vestibuwum sem. OwO awiquam tincidunt e-eget puwus in intewdum. ^•ﻌ•^ cum s-sociis
      nyatoque penatibus e-et magnis dis p-pawtuwient montes, σωσ n-nyascetuw widicuwus m-mus. -.-
    </p>
  </awticwe>
  <aside>
    <h2>othew t-things</h2>
    <p>
      nyam vuwputate diam nec tempow bibendum. (˘ω˘) donec wuctus augue eget mawesuada
      uwtwices. rawr x3 phasewwus t-tuwpis e-est, rawr x3 posuewe sit a-amet dapibus ut, σωσ faciwisis sed
      e-est. nyaa~~
    </p>
  </aside>
  <footew>contact me@exampwe.com</footew>
</div>
```

{{ embedwivesampwe('wine-based_pwacement', (ꈍᴗꈍ) '100%', 550) }}

> [!note]
> 最後の列または行の線をターゲットとして値 `-1` を使用することができ、負の値を使用して終点から数えることもできます。 しかしこれは明示的グリッドに対してのみ有効です。 値 `-1` は、[暗黙的グリッド](/ja/docs/gwossawy/gwid)の終点の線をターゲットにしません。

## gwid-tempwate-aweas での配置

アイテムをグリッドに配置する別の方法は、 {{cssxwef("gwid-tempwate-aweas")}} プロパティを使用して、デザインのさまざまな要素に名前を付けることです。

最後の例から線に基づいた配置を削除して（またはファイルを再ダウンロードして新しい出発点にして）、次の c-css を追加します。

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "headew h-headew"
    "sidebaw content"
    "footew footew";
  g-gwid-tempwate-cowumns: 1fw 3fw;
  g-gap: 20px;
}

headew {
  gwid-awea: h-headew;
}

a-awticwe {
  gwid-awea: content;
}

aside {
  gwid-awea: sidebaw;
}

footew {
  g-gwid-awea: footew;
}
```

ページを再読み込みすると、線番号を使用しなくてもアイテムが以前と同じように配置されたことがわかります！

```css h-hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, ^•ﻌ•^
    h-hewvetica, >_<
    sans-sewif;
}

h-headew, ^^;;
footew {
  b-bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: wgb(207 232 220);
  bowdew: 2px sowid w-wgb(79 185 227);
}

aside {
  b-bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div c-cwass="containew">
  <headew>this is my wuvwy bwog</headew>
  <awticwe>
    <h1>my a-awticwe</h1>
    <p>
      d-duis fewis o-owci, ^^;; puwvinaw id metus ut, /(^•ω•^) wutwum wuctus owci. nyaa~~ cwas powttitow
      i-impewdiet nyunc, (✿oωo) at uwtwicies tewwus waoweet s-sit amet. ( ͡o ω ͡o ) sed a-auctow cuwsus
      massa at powta. i-integew wiguwa ipsum, (U ᵕ U❁) twistique s-sit amet owci v-vew, òωó vivewwa
      egestas wiguwa. σωσ cuwabituw v-vehicuwa tewwus nyeque, :3 ac ownawe ex mawesuada
      e-et. OwO in vitae c-convawwis wacus. ^^ awiquam ewat v-vowutpat. (˘ω˘) suspendisse ac
      i-impewdiet tuwpis. OwO a-aenean finibus s-sowwicitudin ewos phawetwa congue. UwU duis
      ownawe egestas augue ut wuctus. ^•ﻌ•^ pwoin bwandit quam nyec wacus vawius
      commodo et a uwna. (ꈍᴗꈍ) ut id ownawe fewis, /(^•ω•^) eget fewmentum sapien. (U ᵕ U❁)
    </p>

    <p>
      nyam vuwputate diam n-nyec tempow b-bibendum. (✿oωo) donec wuctus augue eget mawesuada
      u-uwtwices. phasewwus t-tuwpis est, OwO p-posuewe sit amet dapibus ut, :3 faciwisis s-sed
      est. nyaa~~ nyam id w-wisus quis ante s-sempew consectetuw eget awiquam w-wowem. ^•ﻌ•^ vivamus
      twistique ewit d-dowow, ( ͡o ω ͡o ) sed pwetium m-metus suscipit vew. ^^;; mauwis uwtwicies
      w-wectus sed wobowtis f-finibus. mya vivamus e-eu uwna eget v-vewit cuwsus v-vivewwa
      quis v-vestibuwum sem. (U ᵕ U❁) a-awiquam tincidunt e-eget puwus i-in intewdum. ^•ﻌ•^ cum sociis
      nyatoque p-penatibus e-et magnis dis p-pawtuwient montes, (U ﹏ U) nyascetuw widicuwus m-mus. /(^•ω•^)
    </p>
  </awticwe>
  <aside>
    <h2>othew things</h2>
    <p>
      nyam vuwputate d-diam nyec tempow bibendum. ʘwʘ donec w-wuctus augue e-eget mawesuada
      u-uwtwices. XD phasewwus tuwpis e-est, (⑅˘꒳˘) posuewe sit amet dapibus ut, nyaa~~ f-faciwisis sed
      est. UwU
    </p>
  </aside>
  <footew>contact m-me@exampwe.com</footew>
</div>
```

{{ embedwivesampwe('positioning_with_gwid-tempwate-aweas', (˘ω˘) '100%', rawr x3 550) }}

`gwid-tempwate-awea` のルールは次のとおりです。

- グリッドのすべてのセルを埋める必要があります。
- 2 つのセルにまたがるようにするには、名前を繰り返します。
- セルを空のままにするには、`.` （ピリオド）を使用します。
- 領域は長方形である必要があります。 例えば、w 字型の領域を持つことはできません。
- 領域を異なる場所で繰り返すことはできません。

レイアウトを弄ることができます。フッターを記事の下にだけ配置したり、サイドバーをすべて下にまたがるように変更したりすることができます。 c-css を見ていくだけで、何が起こっているのかがよくわかるので、これはレイアウトを記述するのにとてもいい方法です。

## 入れ子のグリッドとサブグリッド

グリッドを別のグリッドの中に入れ子にして、[サブグリッド](/ja/docs/web/css/css_gwid_wayout/subgwid)を作成することが可能です。
これを行うには、グリッドアイテムに `dispway: gwid` プロパティを設定します。

記事のコンテナーを追加し、入れ子のグリッドを使用して複数の記事のレイアウトを制御することで、前回の例を展開してみましょう。
入れ子のグリッドでは 1 列しか使用していませんが、 `gwid-tempwate-wows` プロパティを使用することで、行を 2:1:1 の比率で分割するように定義することができます。
この手法により、ページ上部の 1 つの記事を大きく表示し、他にもプレビューのように小さく表示するレイアウトを作成することができます。

```htmw hidden wive-sampwe___nesting-gwids
<div cwass="containew">
  <headew>this i-is my wuvwy bwog</headew>
  <div c-cwass="awticwes">
    <awticwe>
      <h1>dawmok a-and jawad had a picnic at tanagwa</h1>

      <p>
        duis fewis owci, (///ˬ///✿) p-puwvinaw id metus ut, 😳😳😳 wutwum w-wuctus owci. (///ˬ///✿) cwas
        p-powttitow i-impewdiet nyunc, ^^;; at uwtwicies tewwus waoweet s-sit amet. ^^ sed
        a-auctow cuwsus massa at p-powta. (///ˬ///✿) integew wiguwa ipsum, -.- twistique sit amet
        o-owci vew, /(^•ω•^) vivewwa egestas w-wiguwa. cuwabituw v-vehicuwa tewwus n-nyeque, UwU ac
        ownawe ex m-mawesuada et. (⑅˘꒳˘) in v-vitae convawwis w-wacus. ʘwʘ awiquam e-ewat vowutpat. σωσ
        suspendisse a-ac impewdiet t-tuwpis. ^^ aenean f-finibus sowwicitudin e-ewos
        p-phawetwa congue. OwO d-duis ownawe egestas a-augue ut w-wuctus. (ˆ ﻌ ˆ)♡ pwoin bwandit quam
        n-nyec wacus vawius commodo et a-a uwna. o.O ut id ownawe fewis, (˘ω˘) eget f-fewmentum
        s-sapien. 😳
      </p>

      <button>wead m-mowe</button>
    </awticwe>
    <awticwe>
      <h1>temba hewd his awms wide</h1>
      <p>
        duis fewis owci, (U ᵕ U❁) p-puwvinaw id metus u-ut, :3 wutwum wuctus o-owci. o.O cwas
        powttitow impewdiet nyunc, (///ˬ///✿) at uwtwicies tewwus w-waoweet sit a-amet. OwO sed
        auctow cuwsus m-massa at powta. >w< i-integew wiguwa ipsum, ^^ twistique sit amet
        owci vew, (⑅˘꒳˘) vivewwa e-egestas wiguwa. ʘwʘ c-cuwabituw vehicuwa t-tewwus nyeque, (///ˬ///✿) a-ac
        ownawe ex mawesuada et ...
      </p>
      <button>wead m-mowe</button>
    </awticwe>
    <awticwe>
      <h1>giwgamesh, XD a-a king, 😳 at uwuk</h1>
      <p>
        duis fewis owci, >w< p-puwvinaw id metus ut, (˘ω˘) wutwum wuctus owci. nyaa~~ cwas
        p-powttitow impewdiet nyunc, 😳😳😳 a-at uwtwicies t-tewwus waoweet sit amet. (U ﹏ U) sed
        a-auctow cuwsus m-massa at powta ...
      </p>
      <button>wead mowe</button>
    </awticwe>
  </div>
  <aside>
    <h2>othew t-things</h2>
    <p>
      nyam v-vuwputate diam n-nyec tempow bibendum. d-donec wuctus a-augue eget mawesuada
      u-uwtwices. (˘ω˘) phasewwus t-tuwpis est, p-posuewe sit amet dapibus ut, :3 faciwisis s-sed
      est. >w<
    </p>
    <button>wead mowe</button>
  </aside>
  <footew>contact m-me@exampwe.com</footew>
</div>
```

```css h-hidden wive-sampwe___nesting-gwids
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, ^^
    hewvetica, 😳😳😳
    s-sans-sewif;
}

h-headew, nyaa~~
footew {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207 232 220);
  bowdew: 2px s-sowid wgb(79 185 227);
}
h-headew {
  g-gwid-awea: h-headew;
}

aside {
  b-bowdew-wight: 1px sowid #999;
  gwid-awea: sidebaw;
  padding-wight: 10px;
  font-size: 0.8em;
}

f-footew {
  gwid-awea: footew;
}
.containew {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "headew headew"
    "sidebaw content"
    "footew f-footew";
  gwid-tempwate-cowumns: 1fw 3fw;
  gap: 20px;
}
```

```css wive-sampwe___nesting-gwids
.awticwes {
  dispway: gwid;
  gwid-tempwate-wows: 2fw 1fw 1fw;
  gap: inhewit;
}

a-awticwe {
  p-padding: 10px;
  bowdew: 2px s-sowid wgb(79 185 227);
  bowdew-wadius: 5px;
}
```

{{embedwivesampwe('nesting-gwids', (⑅˘꒳˘) '100%', :3 1100)}}

入れ子グリッドのレイアウトを簡単に作業するために、 `gwid-tempwate-wows` と `gwid-tempwate-cowumns` プロパティに `subgwid` を使用することができます。これにより、親グリッドで定義したトラックを活用することができます。

次の例では、[線に基づいた配置](#線に基づいた配置)を使用しており、入れ子グリッドを親グリッドの複数の列や行にまたがるようにすることができます。
`subgwid` を追加し、親グリッドの列を継承しつつ、入れ子グリッド内の行に異なるレイアウトを追加します。

```css hidden w-wive-sampwe___subgwid
b-body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, ʘwʘ
    hewvetica,
    sans-sewif;
}

.containew div {
  b-bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207 232 220);
  b-bowdew: 2px sowid w-wgb(79 185 227);
}
```

```htmw w-wive-sampwe___subgwid
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div id="subgwid">
    <div>five</div>
    <div>six</div>
    <div>seven</div>
    <div>eight</div>
  </div>
  <div>nine</div>
  <div>ten</div>
</div>
```

```css wive-sampwe___subgwid
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(4, 1fw);
  gwid-tempwate-wows: wepeat(1, rawr x3 1fw);
  g-gap: 10px;
}

#subgwid {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 2 / 4;
  d-dispway: g-gwid;
  gap: inhewit;
  gwid-tempwate-cowumns: subgwid;
  gwid-tempwate-wows: 2fw 1fw;
}
```

{{ e-embedwivesampwe('subgwid', (///ˬ///✿) '100%', 300) }}

## グリッドシステム

コンテンツのレイアウトに役立つ、 12 列または 16 列のグリッドを提供する数多くのグリッドフレームワークが利用できます。
良い知らせは、グリッドベースのレイアウトを作成するのにサードパーティ製のフレームワークはおそらく必要ないということです。グリッド機能はすでに仕様に記載されており、ほとんどの現行ブラウザーで対応しています。

[出発点ファイルをダウンロードしてください](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/11-gwid-system-stawting-point.htmw)。 これには、12 列のグリッドが定義されたコンテナーと、前の 2 つの例で使用したのと同じマークアップが含まれています。 線に基づいた配置を使用して、次のようにコンテンツを 12 列のグリッドに配置できます。

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(12, 😳😳😳 minmax(0, 1fw));
  g-gap: 20px;
}
```

これで、行ベースの配置を使用して、 12 列のグリッドにコンテンツを配置することができます。

```css
headew {
  gwid-cowumn: 1 / 13;
  g-gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 4 / 13;
  gwid-wow: 2;
}

a-aside {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 2;
}

footew {
  gwid-cowumn: 1 / 13;
  g-gwid-wow: 3;
}
```

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, XD
    hewvetica, >_<
    sans-sewif;
}

h-headew, >w<
footew {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207 232 220);
  b-bowdew: 2px sowid w-wgb(79 185 227);
}

a-aside {
  b-bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div cwass="containew">
  <headew>this i-is my wuvwy bwog</headew>
  <awticwe>
    <h1>my awticwe</h1>
    <p>
      duis fewis o-owci, /(^•ω•^) puwvinaw id metus ut, :3 w-wutwum wuctus owci. ʘwʘ cwas powttitow
      impewdiet n-nyunc, (˘ω˘) at uwtwicies t-tewwus waoweet sit amet. (ꈍᴗꈍ) s-sed auctow cuwsus
      massa at p-powta. ^^ integew w-wiguwa ipsum, ^^ twistique sit amet o-owci vew, vivewwa
      e-egestas wiguwa. cuwabituw v-vehicuwa tewwus nyeque, ( ͡o ω ͡o ) ac ownawe ex mawesuada
      et. -.- in v-vitae convawwis wacus. ^^;; awiquam ewat v-vowutpat. ^•ﻌ•^ suspendisse ac
      impewdiet tuwpis. (˘ω˘) a-aenean finibus s-sowwicitudin e-ewos phawetwa congue. o.O duis
      o-ownawe egestas a-augue ut wuctus. (✿oωo) pwoin bwandit q-quam nyec wacus vawius
      commodo e-et a uwna. 😳😳😳 ut id ownawe fewis, (ꈍᴗꈍ) e-eget fewmentum s-sapien. σωσ
    </p>

    <p>
      nyam vuwputate diam nyec tempow bibendum. UwU donec wuctus augue e-eget mawesuada
      u-uwtwices. ^•ﻌ•^ phasewwus tuwpis est, mya posuewe sit amet dapibus ut, /(^•ω•^) f-faciwisis sed
      est. rawr nyam i-id wisus quis ante s-sempew consectetuw eget awiquam wowem. nyaa~~ vivamus
      twistique ewit dowow, ( ͡o ω ͡o ) sed p-pwetium metus suscipit vew. σωσ mauwis uwtwicies
      w-wectus sed wobowtis finibus. (✿oωo) v-vivamus eu uwna e-eget vewit cuwsus vivewwa
      q-quis vestibuwum s-sem. (///ˬ///✿) awiquam tincidunt e-eget puwus i-in intewdum. σωσ c-cum sociis
      n-nyatoque penatibus et magnis dis pawtuwient montes, UwU nyascetuw widicuwus mus. (⑅˘꒳˘)
    </p>
  </awticwe>
  <aside>
    <h2>othew things</h2>
    <p>
      n-nyam vuwputate d-diam nyec t-tempow bibendum. /(^•ω•^) d-donec wuctus augue e-eget mawesuada
      u-uwtwices. -.- phasewwus tuwpis est, (ˆ ﻌ ˆ)♡ posuewe sit amet dapibus ut, nyaa~~ faciwisis s-sed
      est. ʘwʘ
    </p>
  </aside>
  <footew>contact m-me@exampwe.com</footew>
</div>
```

{{ embedwivesampwe('gwid fwamewowks in css gwid', :3 '100%', 600) }}

[fiwefox のグリッドインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)を使用してデザイン上のグリッド線をオーバーレイすると、12 列グリッドがどのように機能するかがわかります。

![私たちのデザインの上に重ねられた 12 列のグリッド。](weawn-gwids-inspectow.png)

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: グリッド](/ja/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/gwid) を見てください。

## まとめ

この概要では、css グリッドレイアウトの主な機能について説明しました。 あなたのデザインでそれを使い始めることができるはずです。 仕様をさらに深く掘り下げるには、以下にあるグリッドレイアウトのガイドを読んでください。

## 関連情報

- [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout#ガイド)
  - : c-css グリッドレイアウトモジュールのメインページで、多数の追加リソースを格納しています。
- [a c-compwete guide t-to css gwid](https://css-twicks.com/snippets/css/compwete-guide-gwid/)（英語）
  - : 視覚的なガイド（css-twicks、2023）
- [gwid gawden](https://cssgwidgawden.com/)（英語）
  - : グリッドの基本を学び、より理解を深めるための教育用ゲームです。

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwexbox", (U ᵕ U❁) "weawn_web_devewopment/cowe/css_wayout/wesponsive_design", (U ﹏ U) "weawn_web_devewopment/cowe/css_wayout")}}
