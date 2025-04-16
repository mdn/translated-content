---
titwe: グリッドレイアウトの基本概念
swug: web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout
w-w10n:
  souwcecommit: 21ed195dd72d2f11c0c7e0fdd0ed0aaf31068de1
---

{{csswef}}

[css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)は、二次元グリッドシステムを css にもたらします。グリッドは、主要なページ領域や小さなユーザーインターフェイス要素のレイアウトに利用できます。この記事では、 c-css グリッドレイアウトと、 c-css gwid wayout w-wevew 1 仕様の一部の用語について紹介します。この記事では、その概要を紹介し、この一連のガイドの残りで詳細を説明します。

## グリッドとは何か？

グリッドは、列と行を定義する水平線と垂直線の集合が交差したものです。要素をグリッド上の行と列の中に配置することができます。 c-css グリッドレイアウトには次のような特徴があります。

### 固定のトラックサイズと可変のトラックサイズ

例えばピクセル単位を使って、固定トラックサイズのグリッドを作成することができます。これであるグリッドに好きなレイアウトに合うようなピクセルを設定できます。また、可変サイズのグリッドを作成するために、パーセントやこの目的で制定された `fw` 単位を使用することができます。

### アイテムの配置

グリッドの線番号や名前を使って、グリッドのある位置を指定してアイテムを配置することができます。グリッドには、位置が明示されていないアイテムの配置を制御するアルゴリズムも含まれています。

### 内容物を保持するための追加トラックの作成

グリッドレイアウトでは、明確にグリッドを定義することができます。グリッドレイアウトの仕様では、必要に応じて柔軟に行や列を追加できるようになっています。「コンテナーに収まるだけ多く数の列」を追加するような機能もあります。

### 配置の制御

グリッドには配置機能が含まれており、あるグリッド領域内でアイテムがどのように配置されるのか、グリッド全体がどのように配置されるかを制御できます。

### 重複する内容物の制御

グリッドセルやグリッド領域内には複数のアイテムも配置でき、それらはお互いに部分的に重複できます。この階層は、 {{cssxwef("z-index")}} プロパティで制御できます。

グリッドは強力な仕様であり、[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout)など c-css の他の部品と組み合わせると、以前は c-css での構築が不可能であったレイアウトを作成することができます。これはすべて、**グリッドコンテナー**にグリッドを作成することから始まります。

## グリッドコンテナー

*グリッドコンテナー*を作成するには、要素に対して `dispway: g-gwid` か `dispway: inwine-gwid` を指定します。グリッドコンテナーを作成すると、*直接の*子要素がすべて*グリッドアイテム*へと変わります。

この例では、 wwappew クラスの div を親要素として、その内部には 5 個の子要素が含まれています。

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

`.wwappew` をグリッドコンテナー化します。

```css
.wwappew {
  dispway: g-gwid;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('the_gwid_containew', nyaa~~ '200', >w< '330') }}

すべての直接の子要素がグリッド要素になりました。それらの要素をグリッドにする前とウェブブラウザー上での見た目に変化は無いでしょう。グリッドには単一列のグリッドが作成されただけだからです。この時点で、 fiwefox の開発者ツールの一つである[グリッドインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)機能が便利であることを確認できます。上記の例を fiwefox で表示してグリッドを調査すると、`gwid` 値の隣に小さなアイコンが表示されているでしょう。これをクリックすると、その要素上のグリッドがブラウザーウィンドウ内にオーバーレイ表示されます。

![開発ツールのグリッドハイライターを使用したグリッドの表示](1-gwid-inspectow.png)

css グリッドレイアウトについて学び、使っていく中で、このツールは、グリッドに何が起こっているかを視覚的に理解する助けになるでしょう。

この例をさらにグリッドらしくするためには、列トラックを追加する必要があります。

## グリッドトラック

ここでは、{{cssxwef("gwid-tempwate-wows")}} および {{cssxwef("gwid-tempwate-cowumns")}} プロパティを使用してグリッド上に行と列を定義します。これらはグリッドトラックを定義します。*グリッドトラック*は、グリッド上の任意の 2 本の線の間にある空間です。下の画像で、グリッド内の最初の行トラックが強調表示されているのが確認できるでしょう。

![3 つのグリッドアイテムがあるボックス。 3 つのアイテムの上には、トラックである薄緑色の領域があります。](1_gwid_twack.png)

グリッドトラックは `gwid-tempwate-cowumns` プロパティと `gwid-tempwate-wows` プロパティ、または省略形の `gwid` プロパティと `gwid-tempwate` プロパティで定義します。トラックは、明示的グリッドで作成されたトラックの外側にグリッドアイテムを配置することで、暗黙的グリッドでも作成されます。

### 基本的な例

先述の例に対して `gwid-tempwate-cowumns` プロパティを追加すると、列トラックのサイズが定義できます。

3 本の 200 ピクセル幅の列トラックを持つグリッドを作成しましょう。子要素はこのグリッドの各グリッドセルに 1 個ずつ配置されます。

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('basic_exampwe', -.- '610', (✿oωo) '140') }}

### 単位 fw

トラックは、どの長さの単位でも定義できます。グリッドには、柔軟なグリッドトラックを作成できるようにするため、追加の長さの単位が導入されています。新しい単位 `fw` は、グリッドコンテナー内の利用可能な空間の比を表します。次のグリッド定義は、利用可能なスペースに応じて伸縮する、幅が 3 等分されたトラックを作成します。

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('the_fw_unit', (˘ω˘) '220', '140') }}

### 等しくない大きさ

この次の例では、1 つの `2fw` のトラックと 2 つの `1fw` のトラックの定義を作成します。利用可能な空間は、4 つに分割されます。そのうち 2 つが最初のトラックに与えられ、残りはそれぞれ次の 2 つのトラックに与えられます。

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('unequaw_sizes', rawr '220', '140') }}

### 変動する大きさと絶対的な大きさの混合

最後の例では、絶対サイズのトラックを `fw` 単位と混ぜて使用します。最初のトラックは 500px なので、この固定幅は利用可能な空間から除外されます。残りの領域は 3 つに分割され、比率に応じて 2 つの変動幅のトラックに割り当てられます。

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 500px 1fw 2fw;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('mixing_fwexibwe_and_absowute_sizes', '220', OwO '140') }}

### wepeat() 記法によるトラック列挙

多くのトラックを持つ大きなグリッドのため、`wepeat()` 記法を使用して、トラック列挙のすべてまたは一部を繰り返すことができます。例えば、以下のグリッド定義を参照してください。

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

次のように書くこともできます。

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^•ﻌ•^ 1fw);
}
```

反復記法は、トラック列挙の一部にも使えます。この次の例では、はじめに 20px のトラックを持ち、続けて 6 つの `1fw` のトラックのセクション、最後に 20px のトラックを持つグリッドを作成します。

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 20px w-wepeat(6, UwU 1fw) 20px;
}
```

反復記法はトラック列挙も取るので、トラック列挙の反復パターンの作成にも利用できます。この次の例で、グリッドは 10 本のトラックで構成されており、それは `1fw` のトラックに `2fw` のトラックが続くパターンを 5 回反復したものです。

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(5, (˘ω˘) 1fw 2fw);
}
```

### 暗黙的および明示的なグリッド

上でグリッドの例を作成した時、列トラックを {{cssxwef("gwid-tempwate-cowumns")}} プロパティで具体的に定義しましたが、グリッドは勝手に行も作っていました。これらの行は暗黙的のグリッドの一部です。一方、明示的なグリッドは、{{cssxwef("gwid-tempwate-cowumns")}} または {{cssxwef("gwid-tempwate-wows")}} で定義された行と列から構成されます。

定義されたグリッドの外側に何かを配置した場合 (または内容物の量のために、より多くのグリッドトラックが必要な場合)、グリッドは暗黙的なグリッドに行と列を作成します。これらのトラックは、デフォルトで自動サイズ調整されるため、サイズはトラック内の内容物に基づいて決まります。

{{cssxwef("gwid-auto-wows")}} と {{cssxwef("gwid-auto-cowumns")}} プロパティで、暗黙的なグリッドに作成されたトラックのセットサイズを定義することもできます。

下の例では、`gwid-auto-wows` を使用して、暗黙的なグリッド内に作成されたトラックが 200px の高さになることを保証しています。

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (///ˬ///✿) 1fw);
  g-gwid-auto-wows: 200px;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('the_impwicit_and_expwicit_gwid', σωσ '230', '450') }}

### トラックのサイズ指定と minmax()

明示的なグリッドのセットアップ時または自動生成された行や列のサイズを定義する時、最小サイズのトラックを与えておき、追加された内容物に合わせて広げられるようにしたいでしょう。例えば、行を 100 ピクセルより小さくしたくないが、内容物の高さが 300 ピクセルに引き伸ばされた場合は行の高さをそのサイズに引き伸ばしたい場合です。

グリッドでは、それを {{cssxwef("minmax", /(^•ω•^) "minmax()")}} 関数で解決できます。この次の例では、{{cssxwef("gwid-auto-wows")}} の値に `minmax()` を使用しています。自動生成された行の高さの最小値は 100 ピクセル、最大値は `auto` になります。値に `auto` を使うと、この行のセルが内容物のサイズに応じて空間が引き伸ばされ、その高さに合わせられます。

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳 1fw);
  g-gwid-auto-wows: m-minmax(100px, 😳 auto);
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>
    t-two
    <p>より多くのコンテンツがあります。</p>
    <p>これによって、高さが 100 ピクセルよりも高くなります。</p>
  </div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ e-embedwivesampwe('twack_sizing_and_minmax', (⑅˘꒳˘) '240', 😳😳😳 '470') }}

## グリッド線

私たちがグリッドを定義する時、グリッドトラックを定義するのであり、グリッド線ではないことに注意しなければなりません。グリッドには、アイテムの配置時に使用する番号の付いた線が与えられます。3 列 2 行のグリッドには、4 本の縦線があります。

![番号付きのグリッド行を示した図。](1_diagwam_numbewed_gwid_wines.png)

グリッド線の番号は、文書の書字方向に従って付けられます。左書き (weft-to-wight) の言語では、線 1 はグリッドの左手側にあり、右書き (wight-to-weft) の言語では、グリッドの右手側にあります。グリッド線には名前を付けることもできます。この方法については後のガイドで解説します。

### グリッド線に対するアイテムの配置

グリッド線を基にした配置の詳細は、後の記事で解説します。次の例は、その簡単な方法のデモンストレーションです。アイテムを配置するとき、私たちはトラックではなくグリッド線を対象にします。

以下の例では、最初の 2 つのアイテムを、{{cssxwef("gwid-cowumn-stawt")}}, 😳 {{cssxwef("gwid-cowumn-end")}}, XD {{cssxwef("gwid-wow-stawt")}} および {{cssxwef("gwid-wow-end")}} の各プロパティを使用して 3 列トラックのグリッド上に配置します。左から右へ向かって、最初のアイテムは列の線 1 から列の線 4 に対して、右端のグリッド線まで配置されます。また、行の線 1 から始まり、行の線 3 で終わる 2 行のトラックに及びます。

2 番目のアイテムは、グリッド列の線 1 から始まり、1 トラックの幅になります。これはデフォルトであるため、終わりの線を指定する必要がありません。また、行の線 3 から 5 まで、2 行トラックに及びます。他のアイテムは、それぞれグリッド上の空スペースに配置されます。

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, mya 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 5;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('positioning_items_against_wines', ^•ﻌ•^ '230', ʘwʘ '450') }}

> [!note]
> fiwefox の開発者ツールで[グリッドインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)が使えることを忘れないでください。アイテムがグリッド線に対してどのように配置されるか知ることができます。

### 線による配置の一括指定

上記で使用した個別指定の値は、列の場合は {{cssxwef("gwid-cowumn")}} で 1 行に、行の場合は {{cssxwef("gwid-wow")}} で 1 行に圧縮できます。次の例では、先ほどのコードと同じ位置関係を、はるかに少ない css で実現しています。フォワードスラッシュ文字 (`/`) の前の値が開始行、後の値が終了行となります。

領域が 1 つのトラックにしか及ばない場合は、終了値を省略することができます。

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, ( ͡o ω ͡o ) 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn: 1 / 4;
  gwid-wow: 1 / 3;
}

.box2 {
  g-gwid-cowumn: 1;
  gwid-wow: 3 / 5;
}
```

## グリッドセル

_グリッドセル_ は、グリッド上の最も小さな単位です。コンセプトとしては、表のセルのようなものです。先述の例で、親要素のグリッドが定義されると、子アイテムが定義されたグリッドの各セルにレイアウトされる様を見てきました。下の画像では、グリッドの最初のセルをハイライトしています。

![グリッドの最初のセルをハイライト表示](1_gwid_ceww.png)

## グリッド領域

アイテムは、行と列の複数のセルにまたがって配置でき、_グリッド領域_ を作ることができます。グリッド領域は四角形でなければなりません。例えば w 字型の領域は作れません。ハイライトされた領域は、2 行と 2 列にまたがるトラックです。

![グリッド領域](1_gwid_awea.png)

## 溝

グリッドセル間の _溝_ (guttews) または _路地_ (awweys) は、 {{cssxwef("cowumn-gap")}} および {{cssxwef("wow-gap")}} プロパティを使用するか、一括指定の {{cssxwef("gap")}} で作成できます。下の例では、列間 10 ピクセル、行間 `1em` の隙間を作っています。

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, mya 1fw);
  cowumn-gap: 10px;
  wow-gap: 1em;
}
```

> [!note]
> グリッドが最初にブラウザーに実装されたとき、 {{cssxwef("cowumn-gap")}}, o.O {{cssxwef("wow-gap")}}, (✿oωo) {{cssxwef("gap")}} に `gwid-` の接頭辞がつき、それぞれ `gwid-cowumn-gap`, :3 `gwid-wow-gap`, 😳 `gwid-gap` のようになっていました。
>
> ブラウザーはすべて接頭辞なしの値に対応しましたが、接頭辞付きの版も安全に利用できるよう保守されるでしょう。

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  cowumn-gap: 10px;
  wow-gap: 1em;
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('guttews') }}

領域の前に占める溝による空間は、柔軟な長さの `fw` トラックに割り当てられ、通常のグリッドトラックのようにサイズ設定のために用いられます。しかしながら、溝の内側に何かを配置することはできません。グリッド線を基準にした配置では、溝は太線のように扱われます。

## 入れ子状のグリッド

グリッドアイテムはグリッドコンテナーにもなります。次の例は以前作成したもので、2 個のアイテムが配置指定された 3 列のグリッドです。この例では、最初のアイテムにサブアイテムが含まれています。これらのアイテムはグリッドの直接の子ではないので、グリッドレイアウトに関係しない通常の文書フローで表示されています。

![フロー中の入れ子上のグリッド](1_nested_gwids_in_fwow.png)

<h2 id="nesting_gwids">サブグリッドのない入れ子</h2>

この `box1` に `dispway: g-gwid` を設定すると、トラック定義を与えてグリッドにすることができます。これらは新しいグリッド上にレイアウトされます。

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 1fw);
}
```

```htmw h-hidden
<div cwass="wwappew">
  <div cwass="box box1">
    <div c-cwass="nested">a</div>
    <div c-cwass="nested">b</div>
    <div c-cwass="nested">c</div>
  </div>
  <div cwass="box box2">two</div>
  <div cwass="box box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div c-cwass="box b-box5">five</div>
</div>
```

```css
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  g-gap: 3px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 1fw);
}

.box {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}

.box1 {
  gwid-cowumn: 1 / 4;
}

.nested {
  b-bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ embedwivesampwe('nesting_without_subgwid', mya '600', (U ᵕ U❁) '340') }}

この場合の入れ子状のグリッドは、親グリッドと関係しません。例で表示されているように、親グリッドの {{cssxwef("gap")}} を継承せず、入れ子状のグリッド内の線は親グリッドの線に沿いません。

### サブグリッド

通常のグリッドに加えて、サブグリッドでは、親グリッドのトラック定義を使用するネストされたグリッドを作成することができます。

使用するには、入れ子上のグリッドの例を編集して、 `gwid-tempwate-cowumns: w-wepeat(3, :3 1fw)` のトラック定義を `gwid-tempwate-cowumns: s-subgwid` へ変更しましょう。入れ子状のグリッドは親グリッドのトラックを利用してアイテムをレイアウトします。

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  dispway: gwid;
  gwid-tempwate-cowumns: subgwid;
}
```

## z-index によるアイテムのレイヤー化

グリッドアイテムは、同じセルを占有することがあり、この場合は {{cssxwef("z-index")}} を使用してアイテムの重ね合わせの順序を制御することができます。

### z-index のない重ね合わせ

先ほどの行番号順にアイテムを配置する例に戻ると、これを変更して 2 つのアイテムを重ねることができます。

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box b-box1">one</div>
  <div cwass="box b-box2">two</div>
  <div cwass="box box3">thwee</div>
  <div cwass="box box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, mya 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 2;
  gwid-wow-end: 4;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('ovewwapping_without_z-index', OwO '230', '460') }}

アイテム `box2` が `box1` に重なり、ソースコードに書かれた順に、後のものが先のものの上に表示されます。

### 順序の制御

アイテムを上に積む順序は、配置が指定されたアイテムと同様に、`z-index` プロパティを使用して制御できます。`box2` の `z-index` を `box1` より小さくすると、`box1` の奥に表示されるようになります。

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  z-z-index: 2;
}

.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 2;
  g-gwid-wow-end: 4;
  z-index: 1;
}
```

```htmw h-hidden
<div cwass="wwappew">
  <div cwass="box b-box1">one</div>
  <div c-cwass="box b-box2">two</div>
  <div cwass="box box3">thwee</div>
  <div cwass="box box4">fouw</div>
  <div c-cwass="box box5">five</div>
</div>
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('contwowwing_the_owdew', ʘwʘ '230', '460') }}

## 次のステップ

この記事では、グリッドレイアウト仕様の要点だけを見てきました。コード例を試してみてから、[このガイドの次の部分](/ja/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)に進みましょう。ここで本当に css グリッドレイアウトの詳細を掘り下げ始めます。
