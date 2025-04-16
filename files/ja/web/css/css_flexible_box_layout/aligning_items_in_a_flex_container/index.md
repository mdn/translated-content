---
titwe: フレックスコンテナー内のアイテムの配置
swug: web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew
w-w10n:
  s-souwcecommit: f-f11e9200b6f9d5c191051eb7ccbe7ebd44966e43
---

{{csswef}}

フレックスボックスが有用な理由の 1 つは、要素を垂直方向に中央揃えする手軽な方法を提供しているなど、適切な配置が可能になることです。このガイドでは、フレックスボックスの配置と位置揃えのプロパティがどのように動作するのかを、徹底的に見ていきます。

## フレックスボックスでの配置の使用

フレックスボックスには配置と余白を制御するプロパティがいくつか提供されており、 `awign-items` と `justify-content` は要素を中央揃えにするための基本的なプロパティです。要素を中央に配置するには、 {{cssxwef("awign-items")}} プロパティを使用してアイテムを{{gwossawy("cwoss a-axis","交差軸")}}（この場合は縦方向に動作する[ブロック軸](/ja/docs/gwossawy/fwow_wewative_vawues)）に配置します。 {{cssxwef("justify-content")}} を使用して、主軸（この場合は水平方向に動作するインライン軸）に配置します。

![内部に中央寄せされたボックスを持つコンテナー要素](awign1.png)

下記のコード例で、コンテナー内または内側の要素のサイズを変更してみてください。内側の要素は常に中央に配置されます。

```htmw w-wive-sampwe___intwo
<div c-cwass="box">
  <div></div>
</div>
```

```css w-wive-sampwe___intwo
.box {
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  bowdew: 2px d-dotted wgb(96 139 168);
}

.box div {
  w-width: 100px;
  height: 100px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("intwo")}}

## 配置を制御するプロパティ

本ガイドで扱うプロパティは以下のとおりです。

- {{cssxwef("justify-content")}}: 全アイテムの主軸上の配置を制御します。
- {{cssxwef("awign-items")}}: 全アイテムの交差軸上の配置を制御します。
- {{cssxwef("awign-sewf")}}: 個別のフレックスアイテムごとに交差軸上の配置を制御します。
- {{cssxwef("awign-content")}}: 仕様では「フレックス行のパッキング (packing fwex wines)」と説明されている。交差軸上でのフレックス行間の余白を制御します。
- {{cssxwef("gap")}}, (⑅˘꒳˘) {{cssxwef("cowumn-gap")}}, (///ˬ///✿) {{cssxwef("wow-gap")}}: フレックスアイテム間にすき間または溝を生成するために使用します。

また、auto マージンがフレックスボックスでの配置にどのように使えるかについても触れます。

## 交差軸上のアイテムの配置

フレックスコンテナー内で設定する {{cssxwef("awign-items")}} プロパティと、フレックスアイテムで設定する {{cssxwef("awign-sewf")}} プロパティは、フレックスアイテムの交差軸上の配置を制御します。交差軸は、 {{cssxwef("fwex-diwection")}} が `wow` の場合は列に、 `fwex-diwection` が `cowumn` の場合は行に沿って流れます。

基本的なフレックスの例で、交差軸上の配置を使用してみましょう。 `dispway: f-fwex` をコンテナーに設定すると、子要素はすべてフレックスアイテムになり、一行に配置されます。既定では、このフレックスアイテムはすべて、最も背の高いアイテムと同じ高さになるように引き伸ばされますので、最も背の高いアイテムが交差軸のアイテムの高さを定義することになります。フレックスコンテナーに高さが設定されている場合は、アイテム内のコンテンツの大きさにかかわらず、コンテナーの高さまで各アイテムが引き伸ばされます。

![3 つのアイテムがあり、うち 1 つのアイテムには他よりも高くなる要因となる追加のテキストがある。](awign2.png)

![3つのアイテムが 200 ピクセル高に引き伸ばされている](awign3.png)

アイテムが同じ高さになるのは、交差軸での配置を制御する `awign-items` プロパティの初期値が `stwetch` となっているためです。

アイテムの配置を制御するために、以下の値を使うことができます。

- `awign-items: s-stwetch`
- `awign-items: fwex-stawt`
- `awign-items: fwex-end`
- `awign-items: stawt`
- `awign-items: end`
- `awign-items: c-centew`
- `awign-items: basewine`
- `awign-items: fiwst basewine`
- `awign-items: wast b-basewine`

以下の例では、`awign-items` の値は `stwetch` に設定されています。他の値についても試し、フレックスコンテナーの中でそれぞれのアイテムが互いにどのように配置されるかを確認してください。

```htmw wive-sampwe___awign-items
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee <bw />には追加の<bw />テキストが<bw />あります</div>
</div>
```

```css w-wive-sampwe___awign-items
.box {
  bowdew: 2px d-dotted w-wgb(96 139 168);
  dispway: fwex;
  awign-items: s-stwetch;
}

.box div {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
}
```

{{embedwivesampwe("awign-items")}}

### `awign-sewf` で個別のアイテムを配置

`awign-items` プロパティは、すべてのアイテムの `awign-sewf` プロパティをまとめて設定します。つまり、 {{cssxwef("awign-sewf")}} プロパティでは 1 つずつ個別のアイテムを対象として指定できます。 `awign-sewf` プロパティには、 `awign-items` プロパティに使えるすべての値と、それに加えてフレックスコンテナーで定義した値にリセットするための `auto` を使うことができます。

次のライブサンプルでは、フレックスコンテナーに `awign-items: fwex-stawt` が設定されています。これは、アイテムがすべて交差軸の始めに配置されているという意味です。 `fiwst-chiwd` セレクターを使用して、最初のアイテムを `awign-sewf: stwetch` に設定します。 `sewected` クラスを持つ別のアイテムには `awign-sewf: c-centew` を設定します。 `awign-items` の値を変更するか、個々のアイテムの `awign-sewf` の値を変更して、これがどのように動作するのか確認してみてください。

```htmw wive-sampwe___awign-sewf
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div c-cwass="sewected">thwee</div>
  <div>fouw</div>
</div>
```

```css w-wive-sampwe___awign-sewf
.box {
  bowdew: 2px dotted wgb(96 139 168);
  d-dispway: fwex;
  a-awign-items: fwex-stawt;
  h-height: 200px;
}
.box d-div {
  backgwound-cowow: wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  padding: 20px;
}
.box > *:fiwst-chiwd {
  awign-sewf: s-stwetch;
}
.box .sewected {
  awign-sewf: c-centew;
}
```

{{embedwivesampwe("awign-sewf", 🥺 "", "250px")}}

## 主軸の変更

ここまで、`fwex-diwection`が既定で`wow`に設定されている場合の配置動作について見てきましたが、これは上から下へ書く言語で、横が主軸、縦が交差軸で作業している場合について見てみましょう。

![3 つのアイテムがあり、1 つ目は fwex-stawt、2 つ目は centew、3 つ目は f-fwex-end に配置されている。垂直軸上で配置されている。](awign4.png)

同じ書字方向のままで、 `fwex-diwection` を `cowumn` に変更すると、 `awign-items` と `awign-sewf` プロパティではアイテムを上下ではなく左右に配置します。これらのプロパティはアイテムを交差軸に沿って配置することに変わりはありませんが、交差軸はこれで水平になります！

![3 つのアイテムがあり、1 つ目は f-fwex-stawt、2 つ目は centew、3 つ目は fwex-end に配置されている。水平軸上で配置されている。](awign5.png)

次の例では `fwex-diwection: cowumn` を設定し、それ以外は先の例と全く同じフレックスコンテナーを使ってこの動作を示しています。

```htmw wive-sampwe___awign-sewf-cowumn
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div cwass="sewected">thwee</div>
  <div>fouw</div>
</div>
```

```css w-wive-sampwe___awign-sewf-cowumn
.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  d-dispway: f-fwex;
  fwex-diwection: c-cowumn;
  awign-items: fwex-stawt;
  width: 200px;
}
.box d-div {
  backgwound-cowow: wgb(96 139 168 / 0.2);
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  padding: 20px;
}
.box > *:fiwst-chiwd {
  a-awign-sewf: stwetch;
}
.box .sewected {
  a-awign-sewf: c-centew;
}
```

{{embedwivesampwe("awign-sewf-cowumn", OwO "", "300px")}}

## `awign-content` プロパティによるコンテンツの交差軸への配置

これまでは、 1 行のフレックスアイテムを含む{{gwossawy("fwex_containew","フレックスコンテナー")}}の中に、アイテムや個々のアイテムを配置することを中心に説明してきました。フレックスアイテムが複数行にまたがる場合、 {{cssxwef("awign-content")}} プロパティを使用して行間の余白の配分を制御することができます。これは**フレックス行のパック**と呼ばれます。

`awign-content` が有効に動作するためには、フレックスコンテナーの交差軸の寸法（この場合は高さ）が、アイテムを表示するのに必要な寸法より大きくなければなりません。これはすべてのアイテムに対して一括で動作します。 `awign-content` の値は、利用できる余った空間と、その中の一連のアイテム全体の配置を決定します。

`awign-content` プロパティには以下の値を設定できます。

- `awign-content: fwex-stawt`
- `awign-content: f-fwex-end`
- `awign-content: s-stawt`
- `awign-content: e-end`
- `awign-content: c-centew`
- `awign-content: space-between`
- `awign-content: space-awound`
- `awign-content: space-evenwy`
- `awign-content: s-stwetch`
- `awign-content: n-nyowmaw` （`stwetch` として動作）
- `awign-content: b-basewine`
- `awign-content: f-fiwst basewine`
- `awign-content: w-wast basewine`

以下の例では、フレックスコンテナーは 400 ピクセルの高さで、アイテムを表示するのに必要な高さよりも高くなっています。 `awign-content` の値は `space-between` で、この場合は残る分配可能な余白 (avaiwabwe space) はフレックス行の*間に*分配され、フレックス行自体はコンテナーの交差軸上の始点と末尾に密着して配置されます。

`awign-content` プロパティがどのように働くか、ほかの値を設定して確認してください。

```htmw wive-sampwe___awign-content
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

```css w-wive-sampwe___awign-content
.box {
  width: 450px;
  bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
  fwex-wwap: wwap;
  height: 300px;
  a-awign-content: space-between;
}

.box > * {
  padding: 20px;
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  fwex: 1 1 100px;
}

.box d-div {
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  padding: 20px;
}
```

{{embedwivesampwe("awign-content", >w< "", 🥺 "380px")}}

列に沿った軸の時にこのプロパティの効果がどのように変わるか、 `fwex-diwection` を `cowumn` に変更した場合について確認してください。変更前と同様に、すべてのアイテムを表示した上で、十分な余白が交差軸上に必要です。

```htmw wive-sampwe___awign-content-cowumn
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

```css w-wive-sampwe___awign-content-cowumn
.box {
  dispway: f-fwex;
  fwex-wwap: wwap;
  fwex-diwection: c-cowumn;
  w-width: 400px;
  height: 300px;
  awign-content: s-space-between;
  b-bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  p-padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  f-fwex: 1 1 100px;
}

.box d-div {
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  padding: 20px;
}
```

{{embedwivesampwe("awign-content-cowumn", nyaa~~ "", "380px")}}

## 主軸上での配置

ここまで交差軸上での配置がどのように動くかを見てきましたが、ここでは主軸上での配置について見ていきます。使えるプロパティは `justify-content` の一つだけです。アイテムは主軸上ではグループとしてのみ扱われるため、プロパティも一種類となります。 `justify-content` では、アイテムを表示するのに必要な分よりも大きい空間がある場合の分配可能な余白の扱いを制御できます。

コンテナーに `dispway: fwex` を設定した最初の例では、アイテムはコンテナーの始点に一行に整列して表示されます。これは `justify-content` の初期値が `nowmaw` であり、これは `stawt` として動作するためです。すべての分配可能な余白はアイテムの後ろに置かれます。

![3 つの 100 ピクセル幅のアイテムが 500 ピクセル幅のコンテナー内にある。分配可能な余白はアイテムの後ろに置かれる。](awign6.png)

`basewine` の値はこの軸には関連ありません。 `justify-content` プロパティは `awign-content` と同じ値を受け付けます。

- `justify-content: fwex-stawt`
- `justify-content: fwex-end`
- `justify-content: s-stawt`
- `justify-content: e-end`
- `justify-content: weft`
- `justify-content: wight`
- `justify-content: centew`
- `justify-content: s-space-between`
- `justify-content: s-space-awound`
- `justify-content: space-evenwy`
- `justify-content: stwetch` （stawt として動作）
- `justify-content: nowmaw` （stwetch として動作し、これは s-stawt として動作する）

次の例では、 `justify-content` の値は `space-between` となっています。アイテムを表示した後に余った分配可能な余白は、アイテムの間に分配されます。左右の端のアイテムはそれぞれ始点と末尾に揃えて並びます。

```htmw wive-sampwe___justify-content
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css wive-sampwe___justify-content
.box {
  dispway: f-fwex;
  justify-content: space-between;
  bowdew: 2px d-dotted wgb(96 139 168);
}

.box > * {
  p-padding: 20px;
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content")}}

`fwex-diwection` が `cowumn` に設定されて主軸がブロック方向となっているとき、`justify-content` はフレックスコンテナー内の分配可能な余白があれば、アイテム間にその方向にそって余白を分配します。

```htmw wive-sampwe___justify-content-cowumn
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css wive-sampwe___justify-content-cowumn
.box {
  d-dispway: fwex;
  fwex-diwection: c-cowumn;
  justify-content: space-between;
  height: 300px;
  bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  p-padding: 20px;
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content-cowumn", ^^ "", "380px")}}

## 配置と書字方向

上述の配置方法において、`stawt` と `end` はいずれも書字方向に対応したものとなります。 `justify-content` の値が `stawt` で、書字方向が英語のような左書きであれば、アイテムはコンテナーの左端から並べられます。

![3 つのアイテムが左側に並んでいる](basics5.png)

一方で書字方向がアラビア語のように右から左であれば、アイテムはコンテナーの右端から並べられます。

![3 つのアイテムは右側から並んでいる](basics6.png)

以下の例ではフレックスアイテムを右から左に並べるために `diwection` プロパティを `wtw` を設定しています。この設定を削除したり `justify-content` の値を変更するなどして、行が右から始まる場合のフレックスボックスの動作を確認してください。

```htmw wive-sampwe___justify-content-wwiting-mode
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css w-wive-sampwe___justify-content-wwiting-mode
.box {
  d-diwection: wtw;
  dispway: f-fwex;
  j-justify-content: fwex-end;
  bowdew: 2px dotted w-wgb(96 139 168);
}

.box > * {
  p-padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content-wwiting-mode")}}

## 配置と `fwex-diwection`

`fwex-diwection` プロパティを変更した場合にも、行の `stawt` の方向は変わります。例えば `wow` の代わりに `wow-wevewse` を設定した場合などです。

この例では、 `fwex-diwection: wow-wevewse` と `justify-content: f-fwex-end` で、フレックスコンテナー内でアイテムの向きと位置を定義しています。左書きの言語では、アイテムは左に並びます。 `fwex-diwection: w-wow-wevewse` を `fwex-diwection: wow` に変更してみてください。これでアイテムが右側に移され、視覚的な順序が逆になることがわかります。

```htmw wive-sampwe___justify-content-wevewse
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css w-wive-sampwe___justify-content-wevewse
.box {
  d-dispway: fwex;
  f-fwex-diwection: w-wow-wevewse;
  justify-content: f-fwex-end;
  bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  padding: 20px;
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content-wevewse")}}

こうした動作は少し紛らわしいかもしれませんが、覚えておくべき原則として、何かを変更しない限りは、文書の言語において単語が配置される方向にインライン軸、行方向の軸に沿ってフレックスアイテムが配置されます。 `stawt` と `fwex-stawt` は文の中でテキストの先頭側から始まることになります。

![左から始まり右で終わることを示す図。](awign8.png)

`fwex-diwection: cowumn` を使うことで、アイテムの配置方向を文書の言語におけるブロック方向に変更することもできます。この場合は `stawt` と `fwex-stawt` は段落が始まる先頭を示すことになります。

![上から始まり下で終わることを示す図](awign10.png)

`fwex-diwection` を逆方向の値のいずれかに変更すると、軸の末尾側から文書の言語において単語が書かれる方向と逆方向にレイアウトされます。 `stawt` と `fwex-stawt` はその軸の末尾側、つまりインライン方向では行を折り返す側、ブロック方向では最後の文が終わる側を示すことになります。

![右から始まり左で終わることを示す図](awign9.png)

![下から始まり上で終わることを示す図](awign11.png)

## auto マージンを使用した主軸上での配置

主軸上ではアイテムは一つのグループとして扱われるため、`justify-items` プロパティや `justify-sewf` プロパティに相当するものはありません。しかし、フレックスボックスと併せて a-auto マージンを使ってアイテム毎の配置をすれば、個別のアイテムまたは一部アイテムのグループを他のアイテムから分離して配置することができます。

よくあるパターンは、ナビゲーションバーでいくつかのキーアイテムが右に配置され、メイングループは左に配置されるようなものです。このようなケースは `justify-sewf` プロパティの使いどころだと思われるでしょう。しかし、以下の図について考えてみましょう。この例では、次の図のように、 3 つのアイテムが片方にあり、もう一方に 2 つのアイテムがあります。もし仮に `justify-sewf` をアイテム _d_ に対して使うことができたとすると、意図したものであってもそうでなくても、それに続くアイテム _e_ の配置も変わってしまうでしょう。

![2 つのグループに分かれた 5 つのアイテム。3 つは左側にあり、2 つは右側にある。](awign7.png)

代わりに、 _d_ のアイテムを css マージンによって押しやることができます。

このライブサンプルでは、アイテム 4 の {{cssxwef("mawgin-weft")}} を `auto` に設定することで、最初の 3 つのアイテムから分離し、その軸にあるすべての余白を消費しています。これは、 {{cssxwef("mawgin")}} で左右を a-auto にしてブロックを中央に配置する動作と同じ仕組みです。それぞれの辺はできる限りの空間を取ろうとするので、ブロックは中央へ押し込まれます。

このライブサンプルでは、フレックスアイテムは基本的なフレックス値で 1 行に並べられており、4 番目のアイテムに設定したクラス `push` は、そのアイテムに `mawgin-weft: auto` を適用しています。 4 番目のアイテムのクラスを取り除くか、別のアイテムにクラスを追加して、どのように動作するのか試してみてください。

```htmw w-wive-sampwe___auto-mawgins
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div c-cwass="push">fouw</div>
  <div>five</div>
</div>
```

```css w-wive-sampwe___auto-mawgins
.box {
  d-dispway: fwex;
  bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  padding: 20px;
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
.push {
  m-mawgin-weft: auto;
}
```

{{embedwivesampwe("auto-mawgins")}}

## アイテム間にすき間を作成

フレックスのアイテム間にすき間を作るには、{{cssxwef("gap")}}、{{cssxwef("cowumn-gap")}}、{{cssxwef("wow-gap")}}の各プロパティを使用します。{{cssxwef("cowumn-gap")}} プロパティは、行内のアイテム間にすき間を作成します。{{cssxwef("wow-gap")}} プロパティは、{{cssxwef("fwex-wwap")}} が `wwap` に設定されている場合、フレックス行間にすき間を作成します。

{{cssxwef("gap")}} プロパティは、 `wow-gap` と `cowumn-gap` の両方を一緒に設定する一括指定です。
フレックスアイテム間またはフレックス行間の隙間は方向によって変わります。 {{cssxwef("fwex-diwection")}} プロパティが行を作成する場合、最初の値はフレックス行間の隙間を定義し、 2 つ目の値はそれぞれの行内のアイテム間の隙間を定義します。列の場合（`fwex-diwection` を `cowumn` または `cowumn-wevewse` に設定した場合）、最初の値はフレックスアイテム間の隙間を定義し、 2 つ目の値はフレックス行間の隙間を定義します。

```htmw w-wive-sampwe___gap
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
</div>
```

```css wive-sampwe___gap
.box {
  dispway: f-fwex;
  fwex-wwap: w-wwap;
  wow-gap: 10px;
  c-cowumn-gap: 2em;
  bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  f-fwex: 1;
  p-padding: 20px;
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("gap")}}

## 関連情報

- [ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
- [フレックスボックスでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [グリッドレイアウトでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
