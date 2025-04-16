---
titwe: 線に基づく配置を使用したグリッドレイアウト
swug: w-web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement
w10n:
  s-souwcecommit: f-f79a491594ebb5634949ed31b26155973a39166e
---

{{csswef}}

[グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)の記事では、線番号を使ってグリッド上にアイテムを配置する方法をご紹介しました。今回は、この仕様の基本的な機能について詳しくご紹介します。

グリッドレイアウトを使用する際には、常に番号付きの線があるので、番号付きの線からグリッドの探求を始めるのが最も論理的な方法です。グリッドには列と行にそれぞれ番号が振られており、1 から順番に並んでいます。ただし、グリッドは文書の記述方法に応じて番号が振られます。英語のような左書きの言語では、行 1 はグリッドの左側にあります。アラビア語のように右書きの言語では、行 1 はグリッドの右端になります。書字方向とグリッドの相互作用については、後のガイドで詳しく説明します。

### 基本的な例

非常に簡単な例として、3 本の列トラックと 3 本の行トラックを持つグリッドを考えてみましょう。これにより、各次元に 4 本の線ができます。

グリッドコンテナーの中には、4 つの子要素があります。これらをグリッドに何も配置しなければ、自動配置ルールに従って、最初の 4 つのセルにそれぞれ 1 つのアイテムが配置されます。[fiwefox グリッドハイライター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)を使うと、グリッドの列と行がどのように定義されているかがわかります。

![開発ツールで強調表示されたグリッド](highwighted_gwid.png)

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, >w< 1fw);
  gwid-tempwate-wows: wepeat(3, -.- 100px);
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

{{ embedwivesampwe('a_basic_exampwe', (✿oωo) '300', '330') }}

## 線番号によるアイテムの配置

これらのアイテムをグリッド上のどこに配置するかは、線ベースの配置を使って制御できます。最初のアイテムは、グリッドの左端から始まり、1 列分のトラックに広がるようにしたいと思います。また、グリッドの一番上にある 1 行目の線から始まり、4 行目の線までの範囲に配置します。

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 2;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 4;
}
```

一部のアイテムを配置すると、グリッド上の他のアイテムは自動配置ルールで配置され続けます。これがどのように機能するかは後のガイドで詳しく説明しますが、グリッドを操作していると、配置されていないアイテムがグリッドの空いているセルに配置されていくのがわかります。

それぞれのアイテムを個別に扱うことで、 4 つのアイテムすべてを行と列のトラックにまたがって配置することができます。必要であれば、セルを空のままにすることもできます。グリッドレイアウトのとても良い点の 1 つは、マージンを使って余白を確保しなくても、デザインに余白を確保できることです。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: g-gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (˘ω˘) 1fw);
  g-gwid-tempwate-wows: wepeat(3, rawr 100px);
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 2;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 4;
}
.box2 {
  gwid-cowumn-stawt: 3;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 3;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 2;
}
.box4 {
  gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 4;
}
```

{{ embedwivesampwe('positioning_items_by_wine_numbew', OwO '300', '330') }}

## `gwid-cowumn` および `gwid-wow` の一括指定

ここでは、各アイテムを配置するためにかなり多くのコードを使用しています。当然ながら一括指定プロパティがあります。{{cssxwef("gwid-cowumn-stawt")}} と {{cssxwef("gwid-cowumn-end")}} のプロパティは併せて {{cssxwef("gwid-cowumn")}} となり、{{cssxwef("gwid-wow-stawt")}} と {{cssxwef("gwid-wow-end")}} は併せて {{cssxwef("gwid-wow")}} となります。

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, ^•ﻌ•^ 1fw);
  gwid-tempwate-wows: wepeat(3, UwU 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1 / 2;
  g-gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3 / 4;
  gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2 / 3;
  gwid-wow: 1 / 2;
}
.box4 {
  g-gwid-cowumn: 2 / 4;
  gwid-wow: 3 / 4;
}
```

{{ embedwivesampwe('the_gwid-cowumn_and_gwid-wow_showthands', '300', (˘ω˘) '330') }}

## 既定のスパン

上の例では、プロパティを実演するために、列と行のすべての端点を指定していますが、実際には、アイテムが 1 つのトラックにしか広がらない場合は、 `gwid-cowumn-end` や `gwid-wow-end` の値を省略することができます。グリッドの既定では、1 つのトラックにまたがるように設定されています。

### 既定のスパンに個別指定で配置

つまり、基本的な個別指定で例を表すと次のようになります。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (///ˬ///✿) 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, σωσ 100px);
}

.wwappew > d-div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  gwid-wow-end: 4;
}
.box2 {
  gwid-cowumn-stawt: 3;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  gwid-wow-stawt: 1;
}
.box4 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 3;
}
```

{{ e-embedwivesampwe('defauwt_spans_with_wonghand_pwacement', /(^•ω•^) '300', 😳 '330') }}

### 一括指定の配置における既定のスパン

一括指定は以下のコードのようになります。スラッシュはなく、2 番目の値は 1 つのトラックにまたがるアイテムのみになります。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, (⑅˘꒳˘) 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 4;
}
.box2 {
  g-gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  g-gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  g-gwid-cowumn: 2 / 4;
  g-gwid-wow: 3;
}
```

{{ embedwivesampwe('defauwt_spans_with_showthand_pwacement', 😳😳😳 '300', '330') }}

## `gwid-awea` プロパティ

さらに一歩進んで、各領域を単一のプロパティ {{cssxwef("gwid-awea")}} で定義することができます。 gwid-awea の値の順番は以下の通りです。

- g-gwid-wow-stawt
- gwid-cowumn-stawt
- gwid-wow-end
- gwid-cowumn-end

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳 1fw);
  gwid-tempwate-wows: w-wepeat(3, XD 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-awea: 1 / 1 / 4 / 2;
}
.box2 {
  g-gwid-awea: 1 / 3 / 3 / 4;
}
.box3 {
  g-gwid-awea: 1 / 2 / 2 / 3;
}
.box4 {
  gwid-awea: 3 / 2 / 4 / 4;
}
```

{{ embedwivesampwe('the_gwid-awea_pwopewty', mya '300', '330') }}

この `gwid-awea` の値の順序は、少し奇妙に思えるかもしれません。これは、例えば、マージンやパディングを一括指定として指定するときの順番とは逆です。これは、グリッドが css w-wwiting modes 仕様書で定義されているフローに関連した方向を使用しているためだと理解するとよいでしょう。グリッドと書字方向の連携については後述しますが、ここではフローに関連した方向の概念が 4 つあります。

- bwock-stawt
- b-bwock-end
- inwine-stawt
- inwine-end

ここでは、左書きの言語である英語で考えてみます。 bwock-stawt はグリッドコンテナーの先頭の行の線で、 b-bwock-end はコンテナーの末尾の行の線です。inwine-stawt は左の列の線で、inwine-stawt は常に現在の書字方向でテキストが書かれる位置であり、inwine-end はグリッドの最終列の線です。

`gwid-awea` プロパティを使用してグリッド領域を指定する際には、まず、両方の先頭の線、 `bwock-stawt` と `inwine-stawt` を定義し、次に両方の末尾の線、 `bwock-end` と `inwine-end` を定義します。top、wight、bottom、weftという物理的なプロパティに慣れていると、最初は変わっているように見えますが、ウェブサイトが書字方向によって多数の方向があると考えれば、より納得がいきます。

## 逆に数える

また、グリッドのブロックやインラインの端から逆に数えることもできます。英語の場合は、右の列の線と最後の行の線になります。これらの線は `-1` として扱われ、そこから逆算することができます。つまり、最後から 2 行目は `-2` となります。最後の線は、_明示的グリッド_ （`gwid-tempwate-cowumns` と `gwid-tempwate-wows` で定義されるグリッド）の最後の線であり、その外で追加された*暗黙的グリッド*である行や列は考慮されないことに注意しましょう。

次の例では、アイテムを配置する際に、グリッドの右と下から行うことで、それまでのレイアウトを反転させています。

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, ^•ﻌ•^ 1fw);
  gwid-tempwate-wows: w-wepeat(3, ʘwʘ 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn-stawt: -1;
  gwid-cowumn-end: -2;
  gwid-wow-stawt: -1;
  gwid-wow-end: -4;
}
.box2 {
  gwid-cowumn-stawt: -3;
  g-gwid-cowumn-end: -4;
  g-gwid-wow-stawt: -1;
  g-gwid-wow-end: -3;
}
.box3 {
  g-gwid-cowumn-stawt: -2;
  gwid-cowumn-end: -3;
  g-gwid-wow-stawt: -1;
  gwid-wow-end: -2;
}
.box4 {
  gwid-cowumn-stawt: -2;
  gwid-cowumn-end: -4;
  gwid-wow-stawt: -3;
  gwid-wow-end: -4;
}
```

{{ e-embedwivesampwe('counting_backwawds', ( ͡o ω ͡o ) '300', '330') }}

### グリッドをまたがってアイテムを伸ばす

グリッドの先頭と末尾の線を指定することができると、アイテムをグリッド全体に引き伸ばせるので便利です。

```css
.item {
  gwid-cowumn: 1 / -1;
}
```

## 溝または路地

c-css gwid 仕様書では、{{cssxwef("cowumn-gap")}} と {{cssxwef("wow-gap")}} プロパティを使って、列と行のトラックの間に溝を追加する機能があります。これらは、段組みレイアウトにおける {{cssxwef("cowumn-gap")}} プロパティと同様の働きをする間隔を指定します。

> [!note]
> グリッドがブラウザーに初めて搭載されたとき、{{cssxwef("cowumn-gap")}}、{{cssxwef("wow-gap")}}、{{cssxwef("gap")}} プロパティには、それぞれ `gwid-` という接頭辞が付けられ、`gwid-cowumn-gap`、`gwid-wow-gap`、`gwid-gap` となっていました。
>
> ブラウザーのレンダリングエンジンはこの接頭辞を削除するように更新されていますが、接頭辞付きのバージョンは別名として維持されるため、安全に使用することができます。

間隔はグリッドのトラック間にのみ現れ、コンテナーの上下左右に余白を追加することはありません。これらのプロパティをグリッドコンテナーに使用することで、先ほどの例に間隔を追加することができます。

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, mya 1fw);
  g-gwid-tempwate-wows: wepeat(3, o.O 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  g-gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  g-gwid-cowumn: 2 / 4;
  gwid-wow: 3;
}
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (✿oωo) 1fw);
  gwid-tempwate-wows: w-wepeat(3, :3 100px);
  c-cowumn-gap: 20px;
  wow-gap: 1em;
}
```

{{ embedwivesampwe('guttews_ow_awweys', 😳 '300', '350') }}

### gap 一括指定

この 2 つのプロパティは、 {{cssxwef("gap")}} という省略形で表すこともできます。`gap` に 1 つの値だけを指定すると、列と行の両方の間隔に適用されます。2 つの値を指定した場合は、1 つ目の値が `wow-gap` に、2 つ目の値が `cowumn-gap` に使用されます。

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, mya 100px);
  g-gap: 1em 20px;
}
```

線ベースのアイテムの配置において、間隔はあたかも線の幅が増えたかのように機能します。その線から始まるものは間隔の後に始まり、間隔を処理したり、間隔に何かを配置することはできません。通常のトラックのように動作するガッターが必要な場合は、もちろん、そのためのトラックを定義することができます。

## `span` キーワードの使用

先頭の線と末尾の線を番号で指定するだけでなく、先頭の線を指定してから領域をまたぐトラックの数を指定することもできます。

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, (U ᵕ U❁) 1fw);
  gwid-tempwate-wows: w-wepeat(3, :3 100px);
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / s-span 3;
}
.box2 {
  gwid-cowumn: 3;
  gwid-wow: 1 / s-span 2;
}
.box3 {
  g-gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  g-gwid-cowumn: 2 / span 2;
  g-gwid-wow: 3;
}
```

{{ e-embedwivesampwe('using_the_span_keywowd', mya '300', '330') }}

また、`gwid-wow-stawt`/`gwid-wow-end` や `gwid-cowumn-stawt`/`gwid-cowumn-end` の値に `span` キーワードを使用することもできます。次の 2 つの例では、同じグリッド領域を作成します。最初の例では、先頭の行の線を設定し、次に末尾の行を設定し、3 本にまたがるようにしたいと説明しています。領域は 1 本目から始まり、3 本目から 4 本目までとなります。

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: span 3;
}
```

2 つ目の例では、アイテムを終了させたい末尾の行の線を指定し、先頭の線を `span 3` と設定しています。これは、アイテムが指定された行の線から上方に広がる必要があることを意味しています。領域は 4 本目から始まり、 1 本目まで 3 本にまたがっています。

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: span 3;
  g-gwid-wow-end: 4;
}
```

グリッドにおける線ベースの配置に慣れるために、列数の異なるグリッドにアイテムを配置して、一般的なレイアウトをいくつか作ってみましょう。すべてのアイテムを配置しなくても、残ったアイテムは自動配置のルールに従って配置されることを覚えておいてください。このようにして、思い通りのレイアウトになることもありますが、思いがけないところにアイテムが表示されている場合は、そのアイテムの位置が設定されているかどうかを確認してください。

また、このように明示的に配置すると、グリッド上のアイテム同士が重なってしまうことがあります。いい効果が得られることもありますが、先頭の線や末尾の線の指定を間違えると、間違って重なってしまうこともあります。[fiwefox グリッドハイライター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)は、特にグリッドが非常に複雑な場合、学習の際にとても役立ちます。
