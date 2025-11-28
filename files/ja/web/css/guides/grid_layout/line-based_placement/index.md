---
title: 線ベースの配置を使用したグリッドレイアウト
short-title: 線ベースの配置の使い方
slug: Web/CSS/Guides/Grid_layout/Line-based_placement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[グリッドレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)ガイドでは、線番号を使ってグリッド上にアイテムを配置する方法を紹介しました。今回は、この仕様の基本的な機能について詳しくご紹介します。

グリッドの探索は、番号が付けられた線から始めるのが最も論理的です。グリッドレイアウトを使用する場合、常に番号が付けられた線があるからです。線は列と行に番号が付けられ、`1` から順に番号が振られます。なお、グリッドは、文書の書字方向に従って番号が振られます。英語などの左書きの言語では、1 本目はグリッドの左側にあります。アラビア語などの右書きの言語で作業している場合、1 本目はグリッドの右側にあります。書字方向とグリッドの相互作用の詳細については、[グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)のガイドで学びます。

### 基本的な例

基本的な例として、3 本の列トラックと 3 本の行トラックを持つグリッドを作成します。これにより、それぞれの次元に 4 本の線ができます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}
```

グリッドコンテナーの中には、 4 つの子要素が含まれています。

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

グリッドコンテナーの中には、4 つの子要素があります。これらをグリッドに何も配置しなければ、自動配置ルールに従って、最初の 4 つのセルにそれぞれ 1 つのアイテムが配置されます。ブラウザーの開発者ツールを使用すると、グリッドの列と行がどのように定義されているかを調べることができます。

![開発ツールで強調表示されたグリッド](highlighted_grid.png)

## 線番号によるアイテムの配置

線ベースの配置を使用すると、これらのアイテムがグリッド上のどこに配置されるかを制御することができます。 {{cssxref("grid-column-start")}} および {{cssxref("grid-column-end")}} プロパティを使用すると、最初のアイテムをグリッドの左端から開始し、単一の列トラックにまたがって配置することができます。 {{cssxref("grid-row-start")}} および {{cssxref("grid-row-end")}} で、アイテムをグリッドの上部にある 1 行目に開始し、4 行目までまたがらせることができます。

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

いくつかのアイテムを位置指定すると、グリッド上の他のアイテムは自動配置ルールを使用してレイアウトされ続けます。この動作については、[グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/Guides/Grid_layout/Auto-placement) ガイドで説明しています。ここでは、グリッドが、配置されていないアイテムをグリッドの空のセルにどのようにレイアウトしているかを観察してください。

各アイテムに同じプロパティを使用しますが、値はそれぞれ異なる値を設定して、行と列のトラックにまたがる 4 つのアイテムをすべて配置します。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

{{ EmbedLiveSample('Positioning_items_by_line_number', '300', '330') }}

必要に応じて、セルを空白のままにしておくことができることに注意してください。グリッドレイアウトのとても良い点の 1 つは、ハックを使用せずにデザインに空白を含めることができることです。

## `grid-column` および `grid-row` の一括指定

前の例では、各アイテムを配置するためにかなり多くのコードを使用しています。当然のことですが、[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)があることはご存じでしょう。 {{cssxref("grid-column-start")}} と {{cssxref("grid-column-end")}} のプロパティは併せて {{cssxref("grid-column")}} となり、{{cssxref("grid-row-start")}} と {{cssxref("grid-row-end")}} は併せて {{cssxref("grid-row")}} となります。この例では、これらの一括指定プロパティを使用して、上記の例を再現します。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

{{ EmbedLiveSample('The_grid-column_and_grid-row_shorthands', '300', '330') }}

## 既定のスパン

上の例では、プロパティを実演するために、列と行のすべての端点を指定していますが、実際には、アイテムが 1 つのトラックにしか広がらない場合は、 `grid-column-end` や `grid-row-end` の値を省略することができます。グリッドの既定では、1 つのトラックにまたがるように設定されています。

### 既定のスパンに個別指定で配置

つまり、基本的な個別指定で例を表すと次のようになります。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
```

{{ EmbedLiveSample('Default_spans_with_longhand_placement', '300', '330') }}

### 一括指定の配置における既定のスパン

一括指定は以下のコードのようになります。スラッシュはなく、2 番目の値は 1 つのトラックにまたがるアイテムのみになります。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
```

{{ EmbedLiveSample('Default_spans_with_shorthand_placement', '300', '330') }}

## `grid-area` プロパティ

さらに一歩進んで、各領域を単一のプロパティ {{cssxref("grid-area")}} で定義することができます。 `grid-area` の値の順番は以下の通りです。

– {{cssxref("grid-row-start")}}
– {{cssxref("grid-column-start")}}
– {{cssxref("grid-row-end")}}
– {{cssxref("grid-column-end")}}

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

{{ EmbedLiveSample('The_grid-area_property', '300', '330') }}

`grid-area` の値のこの順序は、少し奇妙に見えるかもしれません。これは、例えば、マージンやパディングを一括指定で指定する場合の方向と逆になっているからです。これは、CSS グリッドレイアウトが [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)で定義されているフロー関連方向を使用しているためであることを理解すると理解しやすいでしょう。グリッドが書き込みモードでどのように動作するのかについては、[グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)で説明しています。ここでは、4 つの{{glossary("Flow relative values", "フロー関連")}}方向の概念について考えてみましょう。

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

ここでは、左書きの言語である英語で考えてみます。 `block-start` はグリッドコンテナーの行方向の先頭の線で、 `block-end` はコンテナーの行方向の末尾の線です。 `inline-start` は常に現在の書字方向でテキストが書かれる位置であるため、 `inline-start` は列方向の左端の線であり、 `inline-end` はグリッドの列方向の最後の線です。

`grid-area` プロパティを使用してグリッド領域を指定する際には、まず、両方の先頭の線、 `block-start` と `inline-start` を定義し、次に両方の末尾の線、 `block-end` と `inline-end` を定義します。{{glossary("physical properties", "物理的なプロパティ")}}（`top`、`right`、`bottom`、`left`）に慣れていると、最初は奇妙に見えますが、ウェブサイトが書字方向によって多数の方向があると考えれば、より納得がいきます。

## 逆に数える

また、グリッドのブロックやインラインの端から逆に数えることもできます。英語の場合は、右の列の線と最後の行の線になります。明示的グリッドの末尾の線は `-1` として扱われ、そこから逆算することができます。つまり、最後から 2 行目は `-2` となります。

負の値は明示的なグリッドにのみ適用されることに注意してください。最後の線は、明示的グリッド（`grid-template-columns` と `grid-template-rows` で定義されるグリッド）の最後の線であり、その外で追加された暗黙的グリッドである行や列は考慮されないことに注意しましょう。

次の例では、アイテムを配置する際に、グリッドの右と下から行うことで、それまでのレイアウトを反転させています。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

{{ EmbedLiveSample('Counting_backwards', '300', '330') }}

### グリッドをまたがってアイテムを伸ばす

グリッドの先頭と末尾の線を指定することができると、アイテムをグリッド全体に引き伸ばせるので便利です。

```css
.item {
  grid-column: 1 / -1;
}
```

## 溝または路地

CSS グリッドでは、{{cssxref("column-gap")}} と {{cssxref("row-gap")}} プロパティ、または {{cssxref("gap")}} 一括指定を使って、列と行のトラックの間に溝を追加する機能があります。

間隔はグリッドのトラック間にのみ現れ、コンテナーの上下左右に余白を追加することはありません。これらのプロパティをグリッドコンテナーに使用することで、先ほどの例に間隔を追加することができます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  column-gap: 20px;
  row-gap: 1em;
}
```

{{ EmbedLiveSample('Gutters_or_Alleys', '300', '350') }}

### gap 一括指定

この 2 つのプロパティは、 {{cssxref("gap")}} という一括指定で表すこともできます。`gap` に 1 つの値だけを指定すると、列と行の両方の間隔に適用されます。2 つの値を指定した場合は、1 つ目の値が `row-gap` に、2 つ目の値が `column-gap` に使用されます。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

線ベースのアイテムの配置において、間隔はあたかも線の幅が増えたかのように機能します。その線から始まるものは間隔の後に始まり、間隔を処理したり、間隔に何かを配置することはできません。通常のトラックと同様に機能する溝が必要な場合は、そのためのトラックを定義することができます。

## `span` キーワードの使用

先頭の線と最後の線を数値で指定する以外に、`span` キーワードを使用して、先頭の線と、その領域に含める予定のトラックの数を指定することができます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

{{ EmbedLiveSample('Using_the_span_keyword', '300', '330') }}

また、`grid-row-start`/`grid-row-end` や `grid-column-start`/`grid-column-end` の値に `span` キーワードを使用することもできます。次の 2 つの例では、同じグリッド領域を作成します。まず、行方向の先頭の線を設定し、次に行方向の末尾を設定し、領域が 3 トラックにまたがるようにしたいと指定しています。この領域は 1 本目から始まり、 1 本目から数えて 3 本目で終わるので、 4 本目で終わります。

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

2 つ目の例では、アイテムを終了させたい末尾の行の線を指定し、先頭の線を `span 3` と設定しています。これは、アイテムが指定された行の線から上方に広がる必要があることを意味しています。領域は 4 本目から始まり、 1 本目まで 3 本にまたがっています。

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

グリッドにおける線ベースの配置に慣れるために、列数の異なるグリッドにアイテムを配置して、一般的なレイアウトをいくつか作ってみましょう。すべてのアイテムを配置しなくても、残ったアイテムは自動配置のルールに従って配置されることを覚えておいてください。このようにして、思い通りのレイアウトになることもありますが、思いがけないところにアイテムが表示されている場合は、そのアイテムの位置が設定されているかどうかを確認してください。

また、このように明示的に配置すると、グリッド上のアイテム同士が重なってしまうことがあります。アイテムが重なることで、素敵な効果を生むこともできますが、開始線や終了線を間違って指定すると、不適切な重なりが生じる場合があります。ブラウザーの開発者ツールを使用してグリッドを検査すると、学習中にこのような問題を発見するのに非常に役立ちます。特に、グリッドが非常に複雑な場合は、この方法が有効です。
