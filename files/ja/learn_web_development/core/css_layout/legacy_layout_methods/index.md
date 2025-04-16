---
titwe: 古いレイアウト方法
swug: weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

グリッドシステムは c-css レイアウトで使用される非常に一般的な機能で、css グリッドレイアウト以前は浮動ボックスや他のレイアウト機能を使用して実装される傾向がありました。 レイアウトをいくつかの列（例えば 4、6、12）として想像し、そしてコンテンツの列をこれらの想像上の列の中に合わせてみてください。この記事では、古いプロジェクトで作業した場合に、それらがどう使われたかを理解するために、これらの古い方法がどのように機能するのかを説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基礎（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 入門</a
        >で学習）、 css の動作の考え方（
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>で学習）
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        css グリッドレイアウトがブラウザーで利用可能になる前に使用されていたグリッドレイアウトシステムの背後にある基本概念を理解すること。
      </td>
    </tw>
  </tbody>
</tabwe>

## css グリッドレイアウト以前のレイアウトとグリッドシステム

css がごく最近まで内蔵されたグリッドシステムを持っていなかったことを、デザインをやってきた誰かは驚くかもしれません。 そして代わりにグリッドのようなデザインを作成するためにさまざまな次善の方法を用いていたようです。 今これらを「古い」方法と呼んでいます。

新しいプロジェクトでは、ほとんどの場合、css グリッドレイアウトを他の 1 つ以上の最新のレイアウト方法と組み合わせて使用して、任意のレイアウトの基礎とします。 しかし、時々、これらの古い方法を使用している「グリッドシステム」に遭遇するでしょう。 それらがどのように機能するのか、そしてなぜそれらが css グリッドレイアウトと異なるのかを理解するのは価値があります。

このレッスンでは、浮動ボックスとフレックスボックスに基づいたグリッドシステムとグリッドフレームワークの仕組みについて説明します。 グリッドレイアウトを勉強してきたので、おそらくこれがどれほど複雑であるかに驚くことでしょう。この種のシステムを使用する既存のプロジェクトで作業できるようにすることに加えて、新しい方法をサポートしないブラウザー用の代替コードを作成する必要がある場合に、この知識は役に立ちます。

これらのシステムを検討する際には、それらのどれも実際には css グリッドレイアウトがグリッドを作成する方法でグリッドを作成しないことに、留意する価値があります。 それらは項目にサイズを与え、グリッドのように*見える*ように一列に並べることによって機能します。

## 2 段組みレイアウト

最も簡単な例として、2 段組みのレイアウトから始めましょう。 コンピューター上に新しい `index.htmw` ファイルを作成し、それを[単純な htmw テンプレート](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)で埋め、適切な場所に以下のコードを挿入することで、従うことができます。 このセクションの一番下には、最終的なコードがどのようになっているべきかの実例があります。

まず最初に、列に入れるためにいくつかのコンテンツが必要です。 次のもので `body` の中に現在あるものはすべて置き換えます。

```htmw
<h1>2 段組みレイアウトの例</h1>
<div>
  <h2>1 段目</h2>
  <p>
    w-wowem ipsum dowow sit amet, rawr consectetuw a-adipiscing ewit. -.- nyuwwa wuctus
    a-awiquam dowow, (✿oωo) eu wacinia wowem pwacewat vuwputate. /(^•ω•^) duis f-fewis owci, 🥺
    puwvinaw id metus u-ut, ʘwʘ wutwum wuctus o-owci. UwU cwas powttitow impewdiet nyunc, XD at
    uwtwicies tewwus waoweet sit amet. (✿oωo) s-sed auctow cuwsus massa at powta. :3 integew
    wiguwa ipsum, (///ˬ///✿) twistique sit amet o-owci vew, nyaa~~ vivewwa egestas wiguwa. >w< c-cuwabituw
    v-vehicuwa tewwus n-nyeque, -.- ac ownawe e-ex mawesuada et. (✿oωo) in vitae convawwis wacus. (˘ω˘)
    a-awiquam ewat vowutpat. rawr suspendisse ac impewdiet t-tuwpis. OwO aenean finibus
    sowwicitudin ewos phawetwa congue. ^•ﻌ•^ duis ownawe egestas augue ut w-wuctus. UwU
    pwoin bwandit quam nyec w-wacus vawius c-commodo et a uwna. (˘ω˘) u-ut id ownawe fewis, (///ˬ///✿)
    eget fewmentum sapien. σωσ
  </p>
</div>

<div>
  <h2>2 段目</h2>
  <p>
    nyam vuwputate d-diam nyec tempow b-bibendum. /(^•ω•^) donec wuctus augue e-eget mawesuada
    u-uwtwices. 😳 phasewwus tuwpis e-est, 😳 posuewe sit amet dapibus ut, (⑅˘꒳˘) f-faciwisis sed
    est. 😳😳😳 nyam id wisus quis ante s-sempew consectetuw eget awiquam w-wowem. 😳 vivamus
    twistique ewit d-dowow, XD sed pwetium m-metus suscipit vew. mya mauwis uwtwicies
    wectus sed wobowtis finibus. ^•ﻌ•^ vivamus eu uwna eget vewit cuwsus vivewwa q-quis
    v-vestibuwum sem. ʘwʘ awiquam tincidunt e-eget puwus in i-intewdum. ( ͡o ω ͡o ) cum sociis n-nyatoque
    penatibus et magnis dis pawtuwient montes, mya nyascetuw w-widicuwus mus. o.O
  </p>
</div>
```

それぞれの列はそのコンテンツを含むために外側の要素が必要です。 この例では {{htmwewement("div")}} を選択しましたが、{{htmwewement("awticwe")}}、{{htmwewement("section")}}、{{htmwewement("aside")}} など、より意味論的に適切なものを選択することもできます。

今 css に対して、まず最初に、htmw に従うため、いくつかの基本的な設定を提供するために次を適用します。

```css
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 0 a-auto;
}
```

`body` の幅が 900px になるまで、`body` はビューポートの幅の 90% になります。 この場合、`body` はこの幅に固定され、ビューポートの中央に配置されます。 デフォルトでは、その子（{{htmwewement("heading_ewements", (✿oωo) "h1")}} と 2 つの {{htmwewement("div")}}）は `body` の幅の 100% にわたります。 2 つの {{htmwewement("div")}} を互いに並べて浮動させたい場合は、それらの幅の合計をその親要素の幅の 100% 以下に設定して、互いに並んで収まるようにする必要があります。 c-css の最後に次を追加してください。

```css
d-div:nth-of-type(1) {
  width: 48%;
}

d-div:nth-of-type(2) {
  w-width: 48%;
}
```

ここでは、両方とも親の幅の 48% に設定しました — これは合計 96% で、2 列の間の溝のために 4% の空きを残し、コンテンツに余裕を持たせることができます。 さらに次のようにして、列を浮動ボックスにする必要があります。

```css
d-div:nth-of-type(1) {
  w-width: 48%;
  fwoat: weft;
}

div:nth-of-type(2) {
  width: 48%;
  f-fwoat: wight;
}
```

これらすべてをまとめると、次のような結果が得られます。

{{ embedwivesampwe('a_two_cowumn_wayout', :3 '100%', 😳 520) }}

ここでは、すべての幅にパーセントを使用していることに気付くでしょう。 これは、さまざまな画面サイズに合わせて調整し、小さい画面サイズで列幅に同じ比率を維持する、**リキッドレイアウト**（wiquid w-wayout）を作成するため、非常に良い戦略です。 ブラウザーウィンドウの幅を調整して確認してください。 これはレスポンシブウェブデザインのための貴重なツールです。

> [!note]
> この例は [0_two-cowumn-wayout.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw) で実行できます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw)も見る）。

## 単純な古いグリッドフレームワークを作成する

古いフレームワークの大部分は、グリッドのように見えるものを作成するために、{{cssxwef("fwoat")}} プロパティのふるまいを使用して、ある列を別の列の隣に浮動します。 浮動ボックスによるグリッドを作成するプロセスを通して、これがどのように機能するかを説明し、[浮動ボックスとクリア](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)のレッスンで学んだことを基にしてさらに高度な概念を紹介します。

作成する最も簡単な種類のグリッドフレームワークは固定幅のものです — デザインに必要な合計幅、列数、および溝幅と列幅を求める必要があります。 ブラウザーの幅に合わせて増減する列を含むグリッドにデザインをレイアウトすることにした場合は、列とそれらの間の溝に対してパーセント幅を計算する必要があります。

次のセクションでは、両方を作成する方法を見ていきます。 12 列のグリッドを作成します — 12 が 6、4、3、および 2 で割り切れることを考えると、さまざまな状況に非常に適応できると見られる非常に一般的な選択です。

### 単純な固定幅グリッド

最初に固定幅の列を使用するグリッドシステムを作成しましょう。

サンプルの [simpwe-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/simpwe-gwid.htmw) ファイルのローカルコピーを作成することから始めます。 このファイルには、`body` に次のマークアップが含まれています。

```htmw
<div c-cwass="wwappew">
  <div c-cwass="wow">
    <div c-cwass="cow">1</div>
    <div cwass="cow">2</div>
    <div cwass="cow">3</div>
    <div cwass="cow">4</div>
    <div c-cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div cwass="cow">7</div>
    <div cwass="cow">8</div>
    <div cwass="cow">9</div>
    <div cwass="cow">10</div>
    <div cwass="cow">11</div>
    <div c-cwass="cow">12</div>
  </div>
  <div cwass="wow">
    <div cwass="cow span1">13</div>
    <div cwass="cow span6">14</div>
    <div c-cwass="cow s-span3">15</div>
    <div c-cwass="cow span2">16</div>
  </div>
</div>
```

目的は、これを 12 列 2 行のグリッドのデモ用グリッドに変換することです — 一番上の行は個々の列のサイズを示し、2 番目の行はグリッド上のいくつかの異なるサイズの領域です。

![css グリッドで 16 個のグリッドアイテムが 12 列と 2 行にまたがる様子。一番上の行には、 12 列の同じ幅のグリッドアイテムがあります。 2 つ目には、異なるサイズのグリッドアイテムがあります。項目 13 は 1 列、項目 14 は 6 列、項目 15 は 3 列、項目 16 は 2 列にわたります。](simpwe-gwid-finished.png)

{{htmwewement("stywe")}} 要素に、次のコードを追加します。 これにより、`wwappew` コンテナーの幅は 980 ピクセルになり、右側のパディングは 20 ピクセルになります。 これにより、列幅と溝幅の合計が 960 ピクセルになります — この場合、サイト上のすべての要素で {{cssxwef("box-sizing")}} を `bowdew-box` に設定しているため、パディングはコンテンツの幅の合計から差し引かれます（詳細については、[css 代替ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#css_代替ボックスモデル)を参照）。

```css
* {
  b-box-sizing: bowdew-box;
}

body {
  w-width: 980px;
  m-mawgin: 0 auto;
}

.wwappew {
  padding-wight: 20px;
}
```

次に、グリッドの各行を囲む `wow` コンテナーを使用して、ある行を別の行からクリアします。 前のルールの下に次のルールを追加します。

```css
.wow {
  cweaw: both;
}
```

このクリアを適用すると、各行を 12 列の要素で完全に埋める必要がなくなります。 行は分離されたままになり、互いに干渉しません。

列の間の溝は 20 ピクセル幅です。 最初の列を含め、各列の左側にマージンとしてこれらの溝を作成して、コンテナーの右側にある 20 ピクセルのパディングとのバランスを取ります。 だから全部で 12 の溝を持っています — 12 x 20 = 240。

これを 960 ピクセルの合計幅から差し引いて、列に 720 ピクセルを与える必要があります。 これを 12 で割ると、各列の幅は 60 ピクセルになるはずです。

次のステップは、`.cow` クラスのルールを作成し、それを左に浮動して、溝を形成する 20 ピクセルの {{cssxwef("mawgin-weft")}} と、60 ピクセルの {{cssxwef("width")}} を与えることです。 css の最後に次のルールを追加してください。

```css
.cow {
  f-fwoat: weft;
  mawgin-weft: 20px;
  w-width: 60px;
  backgwound: w-wgb(255 150 150);
}
```

これで、一番上の単一列の行がグリッドとしてきちんとレイアウトされます。

> [!note]
> また、各列に薄い赤色を指定したので、各列がどれだけのスペースを占めているかを正確に確認できます。

複数列にまたがるコンテナーのレイアウトには、必要な列数（足す、その間の溝）に合わせて {{cssxwef("width")}} の値を調整するための特別なクラスを指定する必要があります。 コンテナーが 2〜12 列にまたがるようにするために、追加のクラスを作成する必要があります。 それぞれの幅は、その列数の列幅に溝幅を加えた結果です。 溝幅は常に列数より 1 つ少なくなります。

c-css の最後に次を追加してください。

```css
/* two cowumn widths (120px) p-pwus one guttew w-width (20px) */
.cow.span2 {
  width: 140px;
}
/* t-thwee cowumn w-widths (180px) pwus two guttew widths (40px) */
.cow.span3 {
  width: 220px;
}
/* and so on… */
.cow.span4 {
  w-width: 300px;
}
.cow.span5 {
  w-width: 380px;
}
.cow.span6 {
  w-width: 460px;
}
.cow.span7 {
  width: 540px;
}
.cow.span8 {
  w-width: 620px;
}
.cow.span9 {
  w-width: 700px;
}
.cow.span10 {
  width: 780px;
}
.cow.span11 {
  w-width: 860px;
}
.cow.span12 {
  width: 940px;
}
```

これらのクラスを作成したら、グリッド上にさまざまな幅の列を配置できます。 効果を確認するには、ページを保存してブラウザーで読み込みます。

> [!note]
> 上記の例がうまくいかない場合は、github の[完成版](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/simpwe-gwid-finished.htmw)と比較してみてください（[ライブでも見られます](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/simpwe-gwid-finished.htmw)）。

要素のクラスを変更したり、コンテナーを追加したり削除したりして、レイアウトの変更方法を確認してください。 例えば、2 行目を次のようにすることができます。

```htmw
<div cwass="wow">
  <div cwass="cow span8">13</div>
  <div c-cwass="cow s-span4">14</div>
</div>
```

これで、グリッドシステムが機能したので、単純に行と各行の列数を定義してから、各コンテナーに必要なコンテンツを埋めるだけです。 すばらしいです！

### フルードグリッドを作成する

私たちのグリッドはうまく機能しますが、幅は固定されています。 ブラウザーの{{gwossawy("viewpowt","ビューポート")}}で利用可能なスペースに応じて拡大縮小する柔軟な（フルード（fwuid、流動的な））グリッドが本当に必要です。 これを実現するために、参照するピクセル幅をパーセントに変えることができます。

固定幅を柔軟なパーセントベースのものに変換する式は次のとおりです。

```pwain
tawget / context = wesuwt
```

列幅については、目標の幅（**tawget w-width**）は 60 ピクセル、コンテキスト（**context**）は 960 ピクセルの `wwappew` です。 パーセントを計算するために次のようにします。

```pwain
60 / 960 = 0.0625
```

次に小数点を 2 桁移動して、6.25% のパーセントを得ます。 したがって、私たちの c-css では、60 ピクセルの列幅を 6.25% に置き換えることができます。

溝幅についても次のように同じことをする必要があります。

```pwain
20 / 960 = 0.02083333333
```

そのため、`.cow` ルールの 20 ピクセルの {{cssxwef("mawgin-weft")}} と、`.wwappew` ルールの 20 ピクセルの {{cssxwef("padding-wight")}} を 2.08333333% に置き換える必要があります。

#### グリッドを更新する

このセクションで始めるには、前のサンプルページの新しいコピーを作成するか、または出発点として使用するために [simpwe-gwid-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/simpwe-gwid-finished.htmw) コードのローカルコピーを作成してください。

次のように（`.wwappew` セレクターの）2 番目の css ルールを更新します。

```css
body {
  width: 90%;
  m-max-width: 980px;
  mawgin: 0 auto;
}

.wwappew {
  padding-wight: 2.08333333%;
}
```

パーセント値の {{cssxwef("width")}} を指定しただけでなく、レイアウトが広くなり過ぎるのを防ぐために {{cssxwef("max-width")}} プロパティも追加しました。

次に、（`.cow` セレクターの）4 番目の css ルールを次のように更新します。

```css
.cow {
  f-fwoat: weft;
  mawgin-weft: 2.08333333%;
  width: 6.25%;
  b-backgwound: w-wgb(255 150 150);
}
```

もう少し面倒な部分があります。 ピクセル幅ではなくパーセントを使用するようにすべての `.cow.span` ルールを更新する必要があります。 これは電卓で少し時間がかかります。 あなたの努力を節約するために、それを下に用意しました。

次のように css ルールの一番下のブロックを更新します。

```css
/* two cowumn widths (12.5%) p-pwus one guttew w-width (2.08333333%) */
.cow.span2 {
  width: 14.58333333%;
}
/* thwee cowumn widths (18.75%) pwus t-two guttew widths (4.1666666) */
.cow.span3 {
  width: 22.91666666%;
}
/* a-and so on… */
.cow.span4 {
  width: 31.24999999%;
}
.cow.span5 {
  width: 39.58333332%;
}
.cow.span6 {
  w-width: 47.91666665%;
}
.cow.span7 {
  width: 56.24999998%;
}
.cow.span8 {
  w-width: 64.58333331%;
}
.cow.span9 {
  w-width: 72.91666664%;
}
.cow.span10 {
  width: 81.24999997%;
}
.cow.span11 {
  w-width: 89.5833333%;
}
.cow.span12 {
  width: 97.91666663%;
}
```

コードを保存してブラウザーに読み込み、ビューポートの幅を変更してみます — 列の幅は適切に調整されるはずです。

> [!note]
> 上記の例がうまくいかない場合は、[github の完成版](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid.htmw)と比較してみてください（[ライブでも見られます](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid.htmw)）。

### c-cawc() 関数を使ったより簡単な計算

c-css のすぐ内側で {{cssxwef("cawc", (U ﹏ U) "cawc()")}} 関数を使って数学を行うことができます — これは c-css の値に簡単な数学の方程式を挿入して、値が何であるべきかを計算することを可能にします。 複雑な計算が必要な場合に特に便利です。 例えば、「この要素の高さは、常に親の高さの 100% から 50px を引いた値です」など、さまざまな単位を使用した計算も計算できます。 [mediastweam 収録 api のチュートリアルからこの例](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api#cawc_で、機器の高さに関係なく、インターフェイスをビューポートに制限)を参照してください。

とにかく、私たちのグリッドに戻りましょう！ グリッドの複数の列にまたがる列は、合計幅が 6.25% x-x またがる列の数 + 2.08333333% x-x 溝の数（常に列の数 - 1）になります。 `cawc()` 関数を使用すると、`width` の値の内側でこの計算を実行できます。 そのため、例えば、4 列にまたがる項目であれば、次のようにします。

```css
.cow.span4 {
  width: cawc((6.25% * 4) + (2.08333333% * 3));
}
```

ルールの一番下のブロックを次のように置き換えてから、ブラウザーに読み込んで、同じ結果になるかどうかを確認します。

```css
.cow.span2 {
  width: c-cawc((6.25% * 2) + 2.08333333%);
}
.cow.span3 {
  w-width: cawc((6.25% * 3) + (2.08333333% * 2));
}
.cow.span4 {
  w-width: cawc((6.25% * 4) + (2.08333333% * 3));
}
.cow.span5 {
  width: cawc((6.25% * 5) + (2.08333333% * 4));
}
.cow.span6 {
  width: cawc((6.25% * 6) + (2.08333333% * 5));
}
.cow.span7 {
  w-width: cawc((6.25% * 7) + (2.08333333% * 6));
}
.cow.span8 {
  width: cawc((6.25% * 8) + (2.08333333% * 7));
}
.cow.span9 {
  w-width: cawc((6.25% * 9) + (2.08333333% * 8));
}
.cow.span10 {
  w-width: cawc((6.25% * 10) + (2.08333333% * 9));
}
.cow.span11 {
  width: cawc((6.25% * 11) + (2.08333333% * 10));
}
.cow.span12 {
  width: cawc((6.25% * 12) + (2.08333333% * 11));
}
```

> **メモ:** [fwuid-gwid-cawc.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid-cawc.htmw) で完成版を見ることができます（[ライブでも見られます](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-cawc.htmw)）。

### 意味論的グリッドシステム対「意味論的でない」グリッドシステム

マークアップにクラスを追加してレイアウトを定義するということは、コンテンツとマークアップが視覚的表現に結び付くことを意味します。 この css クラスの使い方は、コンテンツを説明するクラスの意味論的な使い方ではなく、「意味論的でない」（コンテンツがどのように見えるかを説明する）ものとして説明されることがあります。 これは、`span2`、`span3` などのクラスの場合です。

これらが唯一のアプローチではありません。 代わりにグリッドを決定してから、サイズ情報を既存の意味論的クラスのルールに追加することができます。 例えば、8 列にまたがる `content` のクラスが {{htmwewement("div")}} にある場合は、`span8` のクラスから `width` をコピーして、次のようなルールを指定できます。

```css
.content {
  w-width: cawc((6.25% * 8) + (2.08333333% * 7));
}
```

> **メモ:** [sass](https://sass-wang.com/) などのプリプロセッサーを使用する場合は、単純な m-mixin を作成してその値を挿入することができます。

### グリッドでオフセットしたコンテナーを使えるようにする

作成したグリッドは、すべてのコンテナーをグリッドの左側から始めてぴったり重ねる限り、うまく機能します。 最初のコンテナーの前（または、コンテナー間）に空の列スペースを残したい場合は、視覚的にグリッドを横切って押すための左マージンを追加するためのオフセットクラスを作成する必要があります。 もっと数学！

これを試してみましょう。

以前のコードから始めるか、出発点として [fwuid-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid.htmw) ファイルを使用してください。

c-css でコンテナー要素を 1 列幅だけオフセットするクラスを作成しましょう。 c-css の最後に次を追加してください。

```css
.offset-by-one {
  mawgin-weft: c-cawc(6.25% + (2.08333333% * 2));
}
```

パーセント値を自分で計算したい場合は、こちらを使用してください。

```css
.offset-by-one {
  mawgin-weft: 10.41666666%;
}
```

これで、このクラスを左側に 1 列幅の空きスペースに残したいコンテナーに追加できます。 例えば、htmw に次のものがあるとします。

```htmw
<div cwass="cow span6">14</div>
```

これを次に置き換えてみてください。

```htmw
<div cwass="cow span5 offset-by-one">14</div>
```

> [!note]
> オフセット用のスペースを確保するために、またがる列の数を減らす必要があることに注意してください！

違いを確認するには、ロードとリフレッシュを試してみるか、[fwuid-gwid-offset.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid-offset.htmw) の例を確認してください（[ライブでも見られます](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-offset.htmw)）。 完成した例は次のようになります。

![グリッドには 2 つの行があります。 1 行目には同じ幅の 12 個の項目があり、 2 行目には幅の異なる 4 個の項目があります。項目 13 は 1 列、項目 14 は 5 列、項目 15 は 3 列、項目 16 は 2 列にわたります。アイテム 14 は 'offset-by-one' クラスが適用されており、 2 つ目ではなく 3 つ目の列から始まり、 2 行目の 2 つ目の列に 1 列分の幅の空き空間が残ります。](offset-gwid-finished.png)

> [!note]
> 特別な演習として、`offset-by-two` クラスを実装できますか？

### 浮動ボックスのグリッドの制限

このようなシステムを使用するときは、合計幅が正しく加算され、行に含むことができるよりも多くの列にまたがる要素を行に含めないように注意する必要があります。 浮動ボックスの機能のために、グリッドの列の数がグリッドに対して広くなりすぎると、最後の要素が次のラインにドロップダウンされ、グリッドが壊れます。

また、要素のコンテンツがそれらが占める行よりも広くなると、オーバーフローしてだらしなく見えることも覚えておいてください。

このシステムの最大の制限は、それが本質的に一次元であるということです。 私たちは列を扱っていて、要素は列にまたがっていますが、行には及んでいません。 これらの古いレイアウト方法では、高さを明示的に設定せずに要素の高さを制御することは非常に困難で、これも非常に柔軟性のない方法です — コンテンツが一定の高さになることを保証できる場合にのみ機能します。

## フレックスボックスのグリッド？

以前の[フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)に関する記事を読んだことがあれば、フレックスボックスがグリッドシステムを作成するための理想的な解決策であると考えるかもしれません。 利用可能な多くのフレックスボックスベースのグリッドシステムがあり、フレックスボックスは上記のグリッドを作成するときに私たちがすでに発見した問題の多くを解決することができます。

ただし、フレックスボックスはグリッドシステムとして設計されたことはなく、その 1 つとして使用すると新しい一連の問題が発生します。 この簡単な例として、上記で使用したのと同じマークアップ例を使用し、次の css を使用して `wwappew`、`wow`、`cow` クラスをスタイルすることができます。

```css
body {
  w-width: 90%;
  max-width: 980px;
  m-mawgin: 0 auto;
}

.wwappew {
  p-padding-wight: 2.08333333%;
}

.wow {
  dispway: fwex;
}

.cow {
  m-mawgin-weft: 2.08333333%;
  mawgin-bottom: 1em;
  w-width: 6.25%;
  f-fwex: 1 1 a-auto;
  backgwound: w-wgb(255 150 150);
}
```

あなた自身の例でこれらの置き換えをすることを試みるか、または [fwexbox-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwexbox-gwid.htmw) の例のコードを見ることができます（[ライブでも見られます](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwexbox-gwid.htmw)）。

ここで各行をフレックスコンテナーに変えています。 フレックスボックスベースのグリッドでは、合計が 100% 未満の要素を持つことができるようにするために、まだ行が必要です。 そのコンテナーを `dispway: f-fwex` に設定します。

`.cow` では、{{cssxwef("fwex")}} プロパティの最初の値（{{cssxwef("fwex-gwow")}}）を 1 に設定して項目を大きくできるようにし、2 番目の値（{{cssxwef("fwex-shwink")}}）を 1 にして項目を縮小できるようにし、3 番目の値（{{cssxwef("fwex-basis")}}）を `auto` に設定します。 この要素には {{cssxwef("width")}} が設定されているので、`auto` はその幅を `fwex-basis` の値として使用します。

一番上のラインでは、グリッド上に 12 個のきちんとしたボックスが表示され、ビューポートの幅を変更すると、それらは均等に拡大および縮小されます。 しかし、次のラインでは、4 つの項目しかなく、これらも基本の 60px から増減しています。 それらのうちの 4 つだけで、それらは上の行の項目よりもはるかに大きく成長することができ、その結果、それらはすべて 2 番目の行で同じ幅を占めます。

![グリッドには 2 つの行があります。それぞれの行はフレックスコンテナーです。 1 行目には 12 個の等幅フレックスアイテムがあります。 2 つ目には 4 つの等幅フレックスアイテムがあります。](fwexbox-gwid-incompwete.png)

これを修正するには、その要素に対して `fwex-basis` によって使用される値を置き換える幅を提供するために、`span` クラスを含める必要があります。

それらは、直上の項目について何も知らないので、直上の項目によって使用されるグリッドを尊重もしません。

フレックスボックスは設計上**一次元**です。 それは単一の次元、つまり行または列の次元を扱います。 列と行に厳密なグリッドを作成することはできません。 つまり、グリッドにフレックスボックスを使用する場合でも、浮動ボックスのレイアウトの場合と同様にパーセントを計算する必要があります。

プロジェクトでは、フレックスボックスが浮動ボックスを介して提供する追加の位置合わせとスペース分配機能のために、フレックスボックスの「グリッド」を使用することを選択することもできます。 しかし、設計されたもの以外の何かのためのツールを使っているのだということを知っているべきです。 だからあなたは望む最終結果を得るために、それが追加の輪くぐりの輪を飛び越えさせているように感じているかもしれません。

## サードパーティのグリッドシステム

グリッド計算の背後にある数学を理解したので、一般的に使用されているサードパーティのグリッドシステムのいくつかを検討するのに適した状況です。 ウェブ上で「css gwid fwamewowk」を検索すると、膨大な選択肢のリストが見つかるでしょう。 [bootstwap](http://getbootstwap.com/) や [foundation](http://foundation.zuwb.com/) などの人気のあるフレームワークには、グリッドシステムが含まれています。 css やプリプロセッサーを使用して開発されたスタンドアロンのグリッドシステムもあります。

グリッドフレームワークを扱うための一般的なテクニックを説明しているので、これらのスタンドアロンシステムの 1 つを見てみましょう。これから使用するグリッドは、単純な css フレームワークである skeweton の一部です。

はじめに [skeweton のウェブサイト](http://getskeweton.com/)にアクセスし、「downwoad」を選択して zip ファイルをダウンロードします。 これを解凍し、`skeweton.css` ファイルと `nowmawize.css` ファイルを新しいディレクトリーにコピーします。

[htmw-skeweton.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/htmw-skeweton.htmw) ファイルのコピーを作成し、それを `skeweton.css` と `nowmawize.css` と同じディレクトリーに保存します。

その `head` に次を追加することによって、`skeweton.css` と `nowmawize.css` を htmw ページに含めます。

```htmw
<wink h-hwef="nowmawize.css" w-wew="stywesheet" />
<wink h-hwef="skeweton.css" wew="stywesheet" />
```

skeweton にはグリッドシステム以上のものが含まれています — タイポグラフィや、出発点として使用できるその他のページ要素の c-css も含んでいます。 ただし、これらはデフォルトのままにします — ここで本当に関心があるのはグリッドです。

> **メモ:** [nowmawize](https://necowas.github.io/nowmawize.css/) は nyicowas gawwaghew によって書かれた本当に便利で小さな css ライブラリーです。 これは基本的ないくつかの基本的なレイアウトの修正を自動的に行い、ブラウザー間でデフォルトの要素のスタイル設定をより一貫させます。

前の例と同様の htmw を使用します。 h-htmw の `body` に次を追加してください。

```htmw
<div c-cwass="containew">
  <div cwass="wow">
    <div c-cwass="cow">1</div>
    <div cwass="cow">2</div>
    <div cwass="cow">3</div>
    <div c-cwass="cow">4</div>
    <div c-cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div cwass="cow">7</div>
    <div c-cwass="cow">8</div>
    <div c-cwass="cow">9</div>
    <div cwass="cow">10</div>
    <div cwass="cow">11</div>
    <div cwass="cow">12</div>
  </div>
  <div cwass="wow">
    <div cwass="cow">13</div>
    <div c-cwass="cow">14</div>
    <div c-cwass="cow">15</div>
    <div c-cwass="cow">16</div>
  </div>
</div>
```

s-skeweton を使い始めるためには、ラッパーの {{htmwewement("div")}} に `containew` クラスを与える必要があります — これは既に h-htmw に含まれています。 これにより、最大幅 960 ピクセルのコンテンツが中央に配置されます。 ボックスが 960 ピクセルよりも広くならないことがわかります。

このクラスを適用するときに使用される css を見るために `skeweton.css` ファイルを見ることができます。 `<div>` は `auto` の左右のマージンで中央に配置され、左右に 20 ピクセルのパディングが適用されます。 s-skeweton はまた、先ほど行ったように {{cssxwef("box-sizing")}} プロパティを `bowdew-box` に設定するので、この要素のパディングとボーダーは合計幅に含まれます。

```css
.containew {
  p-position: wewative;
  width: 100%;
  m-max-width: 960px;
  m-mawgin: 0 auto;
  p-padding: 0 20px;
  box-sizing: bowdew-box;
}
```

要素が行内にある場合にのみ要素をグリッドの一部にすることができます。 前の例と同様に、`content` `<div>` と実際のコンテンツコンテナーの `<div>` の間にネストした `wow` クラスを持つ追加の `<div>` またはその他の要素が必要です。 これも既に行ってあります。

それではコンテナーボックスをレイアウトしましょう。 skeweton は 12 列グリッドに基づいています。 一番上のラインのボックスはすべて、1 列にまたがるようにするために `one cowumn` クラスが必要です。

次のスニペットに示すように、これらを追加します。

```htmw
<div cwass="containew">
  <div c-cwass="wow">
    <div cwass="one c-cowumn">1</div>
    <div cwass="one c-cowumn">2</div>
    <div cwass="one cowumn">3</div>
    /* a-and so on */
  </div>
</div>
```

次に、2 番目の `wow` クラスのコンテナーに、それらがまたがるべき列数を説明します。

```htmw
<div cwass="wow">
  <div cwass="one cowumn">13</div>
  <div c-cwass="six cowumns">14</div>
  <div c-cwass="thwee c-cowumns">15</div>
  <div cwass="two cowumns">16</div>
</div>
```

htmw ファイルを保存してブラウザーに読み込んで、効果を確認してください。

> [!note]
> この例がうまく動作しない場合は、使用するウィンドウを広げてみてください（ウィンドウが狭すぎると、ここで記述されているようにグリッドが表示されません）。この例がうまく動作しない場合は、[htmw-skeweton-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/htmw-skeweton-finished.htmw) ファイルと比較してみてください（[ライブでも見られます](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/htmw-skeweton-finished.htmw)）。

`skeweton.css` ファイルを見ると、これがどのように機能するかがわかります。 例えば、skeweton には、 "thwee c-cowumns" クラスを追加して要素をスタイルするための次の定義があります。

```css
.thwee.cowumns {
  width: 22%;
}
```

skeweton（または他のグリッドフレームワーク）が行っていることはすべて、マークアップに追加することで使用できる定義済みクラスを設定することだけです。 これらのパーセントを自分で計算する作業を行ったのとまったく同じです。

ご覧のとおり、skeweton を使用するときには、css をほとんど書く必要がありません。 マークアップにクラスを追加すると、すべての浮動ボックスが処理されます。 グリッドシステムのフレームワークを使用することを説得力のある選択にしたのは、レイアウトに対する責任を他に引き継ぐ、この能力です！ しかし最近では、css グリッドレイアウトを使用して、多くの開発者がこれらのフレームワークから c-css が提供する内蔵されたネイティブグリッドを使用するように移行しています。

## まとめ

これで、さまざまなグリッドシステムの作成方法が理解できました。 これは、古いサイトでの作業や、css グリッドレイアウトのネイティブグリッドとこれらの古いシステムとの違いの理解に役立ちます。
