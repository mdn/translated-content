---
titwe: グリッドレイアウトのボックス配置
swug: w-web/css/css_gwid_wayout/box_awignment_in_gwid_wayout
w-w10n:
  souwcecommit: f-f79a491594ebb5634949ed31b26155973a39166e
---

{{csswef}}

c-css グリッドレイアウトは [box a-awignment w-wevew 3](https://dwafts.csswg.owg/css-awign/) 仕様を実装しています。これは標準の[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout)がフレックスコンテナーの中でアイテム配置を行うのと同じです。この仕様書には、様々なレイアウト方式すべてにおける配置の動作を詳述されています。どのレイアウト方式も、可能な限り仕様に準拠し、その違い (特徴と制約) に基づいて個々の動作を実装します。現在、仕様書にはすべてのレイアウト方式の詳細がありますが、ブラウザーの実装は完全ではありません。しかしながら、css グリッドレイアウト方式は広く実装されています。

このガイドでは、グリッドレイアウトにおけるボックス配置がどのように機能するのか説明します。フレックスボックスのプロパティと値の機能と多くの類似点があります。しかし、グリッドは二次元、フレックスボックスは一次元であるため、いくつか小さな違いがあることに気をつけてください。それではグリッド内のものを配置するときに使う 2 つの軸について見ていきましょう。

## グリッドレイアウトの 2 つの軸

グリッドレイアウトでは、*ブロック軸*と*インライン軸*という 2 つの軸が利用できます。ブロック軸は、ブロックレイアウトでブロックが配置される軸です。ページ内に 2 つの段落がある場合、上から下に向かって並べられますので、この方向がブロック軸となります。

![ブロック軸は垂直方向](bwock_axis.png)

*インライン軸*はブロック軸に交差する軸です。通常、テキストはインライン方向に向かって並べられます。

![インライン／行軸は水平方向](7_inwine_axis.png)

中身はグリッド領域の中に並べることができ、グリッドトラック自体が 2 つの軸の上にあります。

## ブロック軸上でのアイテムの配置

{{cssxwef("awign-sewf")}} と {{cssxwef("awign-items")}} プロパティは、ブロック軸上の配置を制御します。これらのプロパティを使用すると、配置したグリッド領域内でアイテムの配置を変更することができます。

### a-awign-items の使用

以下の例には、4 つのグリッド領域があります。グリッドコンテナー上で {{cssxwef("awign-items")}} プロパティと次の値の一つを使い、アイテムを配置しています。

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst b-basewine`
- `wast basewine`

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(8, :3 1fw);
  g-gap: 10px;
  gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a a a b b b b"
    "a a a-a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  awign-items: stawt;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  gwid-awea: d-d;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('using_awign-items', 😳 '500', '500') }}

`awign-items: s-stawt` を設定すると、それぞれの子である `<div>` の高さはコンテンツの `<div>` によって決定されることを覚えておいてください。また、[`awign-items`](/ja/docs/web/css/awign-items) を完全に省略すると、それぞれの子である `<div>` の高さはグリッド領域を満たすように広がります。

{{cssxwef("awign-items")}} プロパティはすべての子グリッドアイテムに {{cssxwef("awign-sewf")}} プロパティを設定します。これは、グリッドアイテム上で `awign-sewf` を使えばプロパティを個別に設定できるということです。

### awign-sewf の使用

次の例では、`awign-sewf` プロパティを使い、様々な配置の値を実験します。最初の領域で見られるのは `awign-sewf` の既定の動作で、引き伸ばされています。2 つ目のアイテムは `awign-sewf` が `stawt` 値を持っており、3 つ目は `end` 、4 つ目は `centew` です。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(8, (U ﹏ U) 1fw);
  g-gap: 10px;
  g-gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a-a a a b b b b"
    "a a a-a a b b b b"
    "c c c c d d d d"
    "c c c c d-d d d d";
}
.item1 {
  gwid-awea: a-a;
}
.item2 {
  gwid-awea: b;
  a-awign-sewf: stawt;
}
.item3 {
  g-gwid-awea: c;
  awign-sewf: end;
}
.item4 {
  gwid-awea: d;
  awign-sewf: centew;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('using_awign-sewf', mya '500', '500') }}

### アイテムと固有のアスペクト比

既定では、{{cssxwef("awign-sewf")}} の動作はアイテムを広げます。しかし、固有のアスペクト比を持つアイテムの動作は `stawt` になります。固有のアスペクト比を持つアイテムに既定で `stwetch` を設定するとアイテムを歪めるからです。

この動作は現在、仕様で明確になっていますが、ブラウザーはまだ正しく実装していません。その間、{{cssxwef("awign-sewf")}} と {{cssxwef("justify-sewf")}} を `stawt` に設定することによって、画像などのアイテムがグリッドの直接の子のように既定で広がらないことを保証できます。これにより、実装後の正しい動作を模倣することができます。

## インライン軸上のアイテムの位置揃え

{{cssxwef("awign-items")}} と {{cssxwef("awign-sewf")}} がブロック軸上でアイテムの配置を処理するように、{{cssxwef("justify-items")}} と {{cssxwef("justify-sewf")}} は、インライン軸上で同じ動作をします。選べる値は `awign-sewf` と同じです。

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst b-basewine`
- `wast b-basewine`

以下では、{{cssxwef("awign-items")}} と同様の例を見ることができます。今回は {{cssxwef("justify-sewf")}} を適用しています。

ここでも既定は、固有のアスペクト比を持つアイテム以外、`stwetch` です。配置の設定を変更しない場合、グリッドアイテムはグリッド領域をカバーします。例の最初のアイテムは既定の配置を表しています。

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
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

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(8, (U ᵕ U❁) 1fw);
  g-gap: 10px;
  gwid-auto-wows: 100px;
  g-gwid-tempwate-aweas:
    "a a-a a a b b b b"
    "a a-a a a b b b b"
    "c c c c d d d d"
    "c c-c c c d d d d-d";
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
  justify-sewf: stawt;
}
.item3 {
  gwid-awea: c;
  justify-sewf: e-end;
}
.item4 {
  gwid-awea: d;
  justify-sewf: centew;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('justifying_items_on_the_inwine_axis', :3 '500', '500') }}

{{cssxwef("awign-sewf")}} と {{cssxwef("awign-items")}} と同様に、グリッドコンテナーに {{cssxwef("justify-items")}} を適用することで、すべてのアイテムに {{cssxwef("justify-sewf")}} の値を設定できます。

{{cssxwef("justify-sewf")}} と {{cssxwef("justify-items")}} プロパティは[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout)に実装されていません。これはフレックスボックスが一次元であること、軸にそって複数のアイテムがあるかもしれず単一のアイテムを揃えることができないことによります。フレックスボックスの主軸・インライン軸に沿って配置するには、{{cssxwef("justify-content")}} プロパティを使用します。

### 一括指定プロパティ

{{cssxwef("pwace-items")}} プロパティは {{cssxwef("awign-items")}} と {{cssxwef("justify-items")}} の一括指定です。

{{cssxwef("pwace-sewf")}} は {{cssxwef("awign-sewf")}} と {{cssxwef("justify-sewf")}} の一括指定です。

## 領域内のアイテムを中央に揃える

a-awign プロパティと j-justify プロパティを組み合わせると、グリッド領域の中でアイテムを簡単に中央揃えすることができます。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
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

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, mya 1fw);
  g-gap: 10px;
  gwid-auto-wows: 200px;
  gwid-tempwate-aweas:
    ". OwO a-a a ."
    ". (ˆ ﻌ ˆ)♡ a-a a .";
}
.item1 {
  gwid-awea: a;
  awign-sewf: c-centew;
  j-justify-sewf: centew;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
</div>
```

{{ embedwivesampwe('centew_an_item_in_the_awea', ʘwʘ '500', o.O '500') }}

## ブロック軸上のグリッドトラックの配置

グリッドトラックが使う領域がグリッドコンテナーより小さければ、コンテナー内にグリッドトラック自体を配置できます。繰り返しますが、これはブロック軸とインライン軸上で行われます。{{cssxwef("awign-content")}} はブロック軸方向でトラックを配置し、{{cssxwef("justify-content")}} はインライン軸方向の配置を行います。{{cssxwef("pwace-content")}} プロパティは {{cssxwef("awign-content")}} と {{cssxwef("justify-content")}} のショートハンドです。{{cssxwef("awign-content")}} と {{cssxwef("justify-content")}} と {{cssxwef("pwace-content")}} の値は次の通りです。

- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `space-awound`
- `space-between`
- `space-evenwy`
- `basewine`
- `fiwst basewine`
- `wast b-basewine`

以下の例では 500 ピクセル × 500 ピクセルのグリッドコンテナーがあります。3 つの行トラックと列トラックがあり、それぞれ、幅 100 ピクセル、溝 10 ピクセルです。これはグリッドコンテナー内でブロックとインラインどちらの方向にも隙間があることを意味します。

`awign-content` プロパティはグリッドコンテナーに適用され、グリッド全体に作用します。

### 既定の配置

グリッドレイアウトの既定の動作は `stawt` です。そのため、グリッドトラックはグリッドの左上にあり、開始グリッド線に対して整列しています。

```css
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, UwU 100px);
  gwid-tempwate-wows: w-wepeat(3, rawr x3 100px);
  h-height: 500px;
  width: 500px;
  gap: 10px;
  gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d d";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('defauwt_awignment', 🥺 '500', :3 '550') }}

### a-awign-content: end を設定

コンテナーに `awign-content` を追加し、値を `end` に設定すると、トラックは、すべてブロック方向の中でグリッドコンテナーが終わる線に移動します。

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (ꈍᴗꈍ) 100px);
  g-gwid-tempwate-wows: w-wepeat(3, 🥺 100px);
  height: 500px;
  w-width: 500px;
  g-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d-d d";
  awign-content: e-end;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  g-gwid-awea: d-d;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('setting_awign-content_end', (✿oωo) '500', '550') }}

### a-awign-content: space-between の設定

このプロパティには、フレックスボックスでおなじみの値を使うこともできます。スペース配分の値は、 `space-between`、`space-awound`、`space-evenwy` です。 {{cssxwef("awign-content")}} を `space-between` に更新すると、グリッド上の要素がどのように配置されるかが分かります。

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 100px);
  g-gwid-tempwate-wows: wepeat(3, :3 100px);
  h-height: 500px;
  w-width: 500px;
  gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d d";
  awign-content: space-between;
}
.item1 {
  g-gwid-awea: a-a;
}
.item2 {
  g-gwid-awea: b;
}
.item3 {
  gwid-awea: c-c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('setting_awign-content_space-between', ^^;; '500', '600') }}

スペース配分の値を使用すると、グリッド上のアイテムが大きくなる可能性があることに注意してください。アイテムが複数のグリッドトラックにまたがる場合、トラック間にさらにスペースを追加すると、アイテムはその分大きくなる必要があります。グリッドは常に厳密です。したがって、これらの値を使用する場合は、トラックの内容が追加のスペースに対応できるようにするか、整列プロパティを使用して引き伸ばさず始点に置くようにします。

下の図では、`awign-content` を `stawt` にして配置したグリッドの隣に、`awign-content` を `space-between` に設定して配置したグリッドがあります。2 つのトラックの間にスペースを取るとき、2 つの行トラックにまたがる item 1 と 2 が どのように余分な高さを確保しているか見てください。

![space-between を使用したときアイテムがどのように大きくなるかのデモ。](7_space-between.png)

## インライン軸上のグリッドトラックの位置揃え

ブロック軸で {{cssxwef("awign-content")}} を使うのと同様に、インライン軸では {{cssxwef("justify-content")}} を使うことができます。

同じ例を使って、{{cssxwef("justify-content")}} に `space-awound` を設定してみましょう。やはり、1 つ以上の列トラックにまたがるトラックが余分なスペースを得ることになります。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, 100px);
  g-gwid-tempwate-wows: w-wepeat(3, rawr 100px);
  height: 500px;
  w-width: 500px;
  g-gap: 10px;
  gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d d";
  awign-content: space-between;
  j-justify-content: space-awound;
}
.item1 {
  g-gwid-awea: a-a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d-d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('justifying_the_gwid_twacks_on_the_inwine_axis', 😳😳😳 '500', (✿oωo) '550') }}

## 配置と a-auto マージン

領域の中でアイテムを配置するもう一つの方法は、自動マージンを使用することです。コンテナーブロックの左右のマージンを `auto` に設定すると、ビューポート内でレイアウトを中央に配置できます。既に知っているように、自動マージンは空きスペースのすべてを吸収します。両側のマージンを `auto` に設定すると、両マージンはスペースのすべてを取るよう試みるため、ブロックは中央に押し込まれます。

次の例では、 item 1 に `auto` の左マージンを与えます。自動マージンは、そのアイテムのコンテンツ用の空間が割り当てられた後に残りのスペースを取るため、コンテンツが領域の右側に押し出されます。どのように押し出されるか見てみましょう。

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, OwO 100px);
  g-gwid-tempwate-wows: wepeat(3, ʘwʘ 100px);
  h-height: 500px;
  w-width: 500px;
  g-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  gwid-awea: a;
  mawgin-weft: auto;
}
.item2 {
  gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('awignment_and_auto_mawgins', (ˆ ﻌ ˆ)♡ '500', '550') }}

[fiwefox グリッドハイライター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) を使って、どのようにアイテムが整列されるか見てみましょう。

![グリッドハイライターを使って自動マージンを表している画像。](7_auto_mawgins.png)

## 整列と書字方向

ここまでのすべての例は英語を使ったものであり、これは左から右へ書く言語です。物理方向で考えるとき、行の始点はグリッドの左上になります。

c-css グリッドレイアウトとボックス配置の仕様は、css の書字方向と共に機能するよう設計されています。アラビア語などの右から左へ書く言語で作業する場合、グリッドの始点は右上になり、`justify-content: s-stawt` の既定はグリッドトラックがグリッドの右手側から始まるようになるでしょう。

`mawgin-wight` または `mawgin-weft` で自動マージンを使用した場合、および `top`、`wight`、`bottom`、`weft` を使って位置を絶対指定した場合、書字方向が尊重されません。次のガイドでは、css グリッドレイアウトのボックス配置と書字方向の間における相互作用を見ていきます。これは、複数の言語で表示されるサイトを開発する場合、またはデザインの中で言語や書字方向を混在させたい場合に、理解することが重要になります。
