---
title: CSS グリッドにおける線に基づく配置
slug: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
tags:
  - CSS
  - CSS グリッド
  - ガイド
translation_of: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
---
{{CSSRef}}

[グリッドレイアウトの基本的な考え方](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)の記事では、線番号を使ってグリッド上にアイテムを配置する方法をご紹介しました。今回は、この仕様の基本的な機能について詳しくご紹介します。

グリッドレイアウトを使用する際には、常に番号付きの線があるので、番号付きの線からグリッドの探求を始めるのが最も論理的な方法です。グリッドには列と行にそれぞれ番号が振られており、1 から順番に並んでいます。ただし、グリッドは文書の記述方法に応じて番号が振られます。英語のような左書きの言語では、行 1 はグリッドの左側にあります。アラビア語のように右書きの言語では、行 1 はグリッドの右端になります。書字方向とグリッドの相互作用については、後のガイドで詳しく説明します。

<h3 id="A_basic_example">基本的な例</h3>

非常に簡単な例として、3 本の列トラックと 3 本の行トラックを持つグリッドを考えてみましょう。これにより、各次元に 4 本の線ができます。

グリッドコンテナーの中には、4 つの子要素があります。これらをグリッドに何も配置しなければ、自動配置ルールに従って、最初の 4 つのセルにそれぞれ 1 つのアイテムが配置されます。[Firefox グリッドハイライター](/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)を使うと、グリッドの列と行がどのように定義されているかがわかります。

![開発ツールで強調表示されたグリッド](3_hilighted_grid.png)

```css hidden
* {box-sizing: border-box;}

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

```html
<div class="wrapper">
   <div class="box1">One</div>
   <div class="box2">Two</div>
   <div class="box3">Three</div>
   <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

<h2 id="Positioning_items_by_line_number">線番号によるアイテムの配置</h2>

これらのアイテムをグリッド上のどこに配置するかは、線ベースの配置を使って制御できます。最初のアイテムは、グリッドの左端から始まり、1 列分のトラックに広がるようにしたいと思います。また、グリッドの一番上にある 1 行目の線から始まり、4 行目の線までの範囲に配置します。

```css
.box1 {
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 4;
}
```

あるアイテムを位置指定すると、グリッド上の他のアイテムは、自動配置ルールに従って続いて配置されます。この仕組みについては後ほど詳しく紹介しますが、グリッドを操作していると、位置指定されていないアイテムがグリッドの空きセルにレイアウトされていくのがわかります。

それぞれのアイテムに対応して、4 つのアイテムを行と列のトラックにまたがって配置します。なお、必要に応じてセルを空けておくこともできます。グリッドレイアウトの優れた点の 1 つは、余白を残したままのデザインが実現できることです。

```css hidden
* {box-sizing: border-box;}

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

## `grid-column` および `grid-row` の一括指定

ここでは、各アイテムを配置するためにかなり多くのコードを使用しています。当然ながら一括指定プロパティがあります。{{cssxref("grid-column-start")}} と {{cssxref("grid-column-end")}} のプロパティは併せて {{cssxref("grid-column")}} となり、{{cssxref("grid-row-start")}} と {{cssxref("grid-row-end")}} は併せて {{cssxref("grid-row")}} となります。

```css hidden
* {box-sizing: border-box;}

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
   grid-row: 1 /  2;
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
* {box-sizing: border-box;}

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
* {box-sizing: border-box;}

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
   grid-column: 1 ;
   grid-row: 1 / 4;
}
.box2 {
   grid-column: 3 ;
   grid-row: 1 / 3;
}
.box3 {
   grid-column: 2 ;
   grid-row: 1 ;
}
.box4 {
   grid-column: 2 / 4;
   grid-row: 3 ;
}
```

{{ EmbedLiveSample('Default_spans_with_shorthand_placement', '300', '330') }}

## `grid-area` プロパティ

さらに一歩進んで、各領域を単一のプロパティ {{cssxref("grid-area")}} で定義することができます。 grid-area の値の順番は以下の通りです。

- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end

```css hidden
* {box-sizing: border-box;}

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

この `grid-area` の値の順序は、少し奇妙に思えるかもしれません。これは、例えば、マージンやパディングを一括指定として指定するときの順番とは逆です。これは、グリッドが CSS Writing Modes 仕様書で定義されているフローに関連した方向を使用しているためだと理解するとよいでしょう。グリッドと書字方向の連携については後述しますが、ここではフローに関連した方向の概念が 4 つあります。

- block-start
- block-end
- inline-start
- inline-end

ここでは、左書きの言語である英語で考えてみます。 block-start はグリッドコンテナーの先頭の行の線で、 block-end はコンテナーの末尾の行の線です。inline-start は左の列の線で、inline-start は常に現在の書字方向でテキストが書かれる位置であり、inline-end はグリッドの最終列の線です。

`grid-area` プロパティを使用してグリッド領域を指定する際には、まず、両方の先頭の線、 `block-start` と `inline-start` を定義し、次に両方の末尾の線、 `block-end` と `inline-end` を定義します。top、right、bottom、leftという物理的なプロパティに慣れていると、最初は変わっているように見えますが、ウェブサイトが書字方向によって多数の方向があると考えれば、より納得がいきます。

## 逆に数える

また、グリッドのブロックやイン線の端から逆に数えることもできます。英語の場合は、右の列の線と最後の行の線になります。これらの線は `-1` として扱われ、そこから逆算することができます。つまり、最後から 2 行目は `-2` となります。最後の線は、*明示的グリッド* (`grid-template-columns` と `grid-template-rows` で定義されるグリッド) の最後の線であり、その外で追加された*暗黙的グリッド*である行や列は考慮されないことに注意しましょう。

次の例では、アイテムを配置する際に、グリッドの右と下から行うことで、それまでのレイアウトを反転させています。

```css hidden
* {box-sizing: border-box;}

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

### アイテムをグリッド上に伸ばす

グリッドの先頭と末尾の線を指定することができると、アイテムをグリッド全体に引き伸ばせるので便利です。

```css
.item {
    grid-column: 1 / -1;
}
```

## 溝または路地

CSS Grid 仕様書では、{{cssxref("column-gap")}} と {{cssxref("row-gap")}} プロパティを使って、列と行のトラックの間に溝を追加する機能があります。これらは、段組みレイアウトにおける {{cssxref("column-gap")}} プロパティと同様の働きをするギャップを指定します。

> **Note:** グリッドがブラウザーに初めて搭載されたとき、{{cssxref("column-gap")}}、{{cssxref("row-gap")}}、{{cssxref("gap")}} プロパティには、それぞれ `grid-` という接頭辞が付けられ、`grid-column-gap`、`grid-row-gap`、`grid-gap` となっていました。
>
> ブラウザーのレンダリングエンジンはこの接頭辞を削除するように更新されていますが、接頭辞付きのバージョンは別名として維持されるため、安全に使用することができます。

ギャップはグリッドのトラック間にのみ現れ、コンテナーの上下左右に余白を追加することはありません。これらのプロパティをグリッドコンテナーに使用することで、先ほどの例にギャップを追加することができます。

```css hidden
* {box-sizing: border-box;}

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
    grid-column: 1 ;
    grid-row: 1 / 4;
}
.box2 {
    grid-column: 3 ;
    grid-row: 1 / 3;
}
.box3 {
    grid-column: 2 ;
    grid-row: 1 ;
}
.box4 {
    grid-column: 2 / 4;
    grid-row: 3 ;
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

この 2 つのプロパティは、{{cssxref("gap")}} という省略形で表すこともできます。`gap` に 1 つの値だけを指定すると、列と行の両方のギャップに適用されます。2 つの値を指定した場合は、1 つ目の値が `row-gap` に、2 つ目の値が `column-gap` に使用されます。

```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 1em 20px;
}
```

線ベースのアイテムの配置において、ギャップはあたかも線の幅が増えたかのように機能します。その線から始まるものはギャップの後に始まり、ギャップを処理したり、ギャップに何かを配置することはできません。通常のトラックのように動作するガッターが必要な場合は、もちろん、そのためのトラックを定義することができます。

## `span` キーワードの使用

先頭の線と末尾の線を番号で指定するだけでなく、先頭の線を指定してから領域をまたぐトラックの数を指定することもできます。

```css hidden
* {box-sizing: border-box;}

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

また、`grid-row-start`/`grid-row-end` や `grid-column-start`/`grid-column-end` の値に `span` キーワードを使用することもできます。次の 2 つの例では、同じグリッド領域を作成します。最初の例では、先頭の行の線を設定し、次に末尾の行を設定し、3 本にまたがるようにしたいと説明しています。領域は 1 本目から始まり、3 本目から 4 本目までとなります。

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

また、このように明示的に配置すると、グリッド上のアイテム同士が重なってしまうことがあります。いい効果が得られることもありますが、先頭の線や末尾の線の指定を間違えると、間違って重なってしまうこともあります。[Firefox グリッドハイライター](/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)は、特にグリッドが非常に複雑な場合、学習の際にとても役立ちます。
