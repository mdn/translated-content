---
title: グリッドレイアウトの基本概念
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
---

{{CSSRef}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)は、二次元グリッドシステムを CSS にもたらします。グリッドは、主要なページ領域や小さなユーザーインターフェイス要素のレイアウトに利用できます。この記事では、 CSS グリッドレイアウトと、 CSS Grid Layout Level 1 仕様の一部の用語について紹介します。この記事では、その概要を紹介し、この一連のガイドの残りで詳細を説明します。

## グリッドとは何か？

グリッドは、列と行を定義する水平線と垂直線の集合が交差したものです。要素をグリッド上の行と列の中に配置することができます。 CSS グリッドレイアウトには次のような特徴があります。

### 固定のトラックサイズと可変のトラックサイズ

例えばピクセル単位を使って、固定トラックサイズのグリッドを作成することができます。これであるグリッドに好きなレイアウトに合うようなピクセルを設定できます。また、可変サイズのグリッドを作成するためにパーセントやこの目的で新たに制定された `fr` 単位を使用することができます。

### アイテムの配置

グリッドの線番号や名前を使って、グリッドのある位置を指定してアイテムを配置することができます。グリッドには、位置が明示されていないアイテムの配置を制御するアルゴリズムも含まれています。

### 内容物を保持するための追加のトラックの作成

グリッドレイアウトでは、明確にグリッドを定義することができます。グリッドレイアウトの仕様では、必要に応じて柔軟に行や列を追加できるようになっています。「コンテナーに収まるだけ多い数の列」を追加するような機能もあります。

### 配置の制御

グリッドには配置機能が含まれており、あるグリッド領域内でアイテムがどのように配置されるのか、グリッド全体がどのように配置されるかを制御できます。

### 重複内容物の制御

グリッドセルやグリッド領域内には複数のアイテムも配置でき、それらはお互いに部分的に重複できます。この階層化は、 {{cssxref("z-index")}} プロパティで制御できます。

グリッドは強力な仕様であり、[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)など CSS の他の部品と組み合わせると、以前は CSS での構築が不可能であったレイアウトを作成することができます。これはすべて、**グリッドコンテナー**にグリッドを作成することから始まります。

<h2 id="The_Grid_container">グリッドコンテナー</h2>

*グリッドコンテナー*を作成するには、要素に対して `display: grid` か `display: inline-grid` を指定します。グリッドコンテナーを作成すると、*直接の*子要素がすべて*グリッドアイテム*へと変わります。

この例では、 wrapper クラスの div を親要素として、その内部には 5 個の子要素が含まれています。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

`.wrapper` をグリッドコンテナー化します。

```css
.wrapper {
  display: grid;
}
```

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

{{ EmbedLiveSample('The_Grid_container', '200', '330') }}

すべての直接の子要素がグリッド要素になりました。それらの要素をグリッドにする前とウェブブラウザー上での見た目に変化は無いでしょう。グリッドには単一列のグリッドが作成されただけだからです。この時点で、 Firefox の開発者ツールの一つである[グリッドインスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)機能が便利であることを確認できます。上記の例を Firefox で表示してグリッドを調査すると、`grid` 値の隣に小さなアイコンが表示されているでしょう。これをクリックすると、その要素上のグリッドがブラウザーウィンドウ内にオーバーレイ表示されます。

![Using the Grid Highlighter in DevTools to view a grid](1-grid-inspector.png)

CSS グリッドレイアウトについて学び、使っていく中で、このツールは、グリッドに何が起こっているかを視覚的に理解する助けになるでしょう。

この例をさらにグリッドらしくするためには、列トラックを追加する必要があります。

## グリッドトラック

ここでは、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} プロパティを使用してグリッド上に行と列を定義します。これらはグリッドトラックを定義します。*グリッドトラック*は、グリッド上の任意の 2 本の線の間にある空間です。下の画像で、グリッド内の最初の行トラックが強調表示されているのが確認できるでしょう。

![](1_grid_track.png)

<h3 id="Basic_example">基本的な例</h3>

先述の例に対して `grid-template-columns` プロパティを追加すると、列トラックのサイズが定義できます。

3 本の 200 ピクセル幅の列トラックを持つグリッドを作成しましょう。子要素はこのグリッドの各グリッドセルに 1 個ずつ配置されます。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

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

{{ EmbedLiveSample('Basic_example', '610', '140') }}

<h3 id="The_fr_Unit">単位 fr</h3>

トラックは、どの長さの単位でも定義できます。グリッドには、柔軟なグリッドトラックを作成できるようにするため、追加の長さの単位が導入されています。新しい単位 `fr` は、グリッドコンテナー内の利用可能な空間の比を表します。次のグリッド定義は、利用可能なスペースに応じて伸縮する、幅が 3 等分されたトラックを作成します。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

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

{{ EmbedLiveSample('The_fr_unit', '220', '140') }}

<h3 id="Unequal_sizes">等しくない大きさ</h3>

この次の例では、1 つの `2fr` のトラックと 2 つの `1fr` のトラックの定義を作成します。利用可能な空間は、4 つに分割されます。そのうち 2 つが最初のトラックに与えられ、残りはそれぞれ次の 2 つのトラックに与えられます。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

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

{{ EmbedLiveSample('Unequal_sizes', '220', '140') }}

<h3 id="Mixing_flexible_and_absolute_sizes">変動する大きさと絶対的な大きさの混合</h3>

最後の例では、絶対サイズのトラックを `fr` 単位と混ぜて使用します。最初のトラックは 500px なので、この固定幅は利用可能な空間から除外されます。残りの領域は 3 つに分割され、比率に応じて 2 つの変動幅のトラックに割り当てられます。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

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

{{ EmbedLiveSample('Mixing_flexible_and_absolute_sizes', '220', '140') }}

<h3 id="Track_listings_with_repeat_notation">repeat() 記法によるトラック列挙</h3>

多くのトラックを持つ大きなグリッドのため、`repeat()` 記法を使用して、トラック列挙のすべてまたは一部を繰り返すことができます。例えば、以下のグリッド定義を参照してください。

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

次のように書くこともできます。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

反復記法は、トラック列挙の一部にも使えます。この次の例では、はじめに 20px のトラックを持ち、続けて 6 つの `1fr` のトラックのセクション、最後に 20px のトラックを持つグリッドを作成します。

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

反復記法はトラック列挙も取るので、トラック列挙の反復パターンの作成にも利用できます。この次の例で、グリッドは 10 本のトラックで構成されており、それは `1fr` のトラックに `2fr` のトラックが続くパターンを 5 回反復したものです。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

<h3 id="The_implicit_and_explicit_grid">暗黙的と明示的なグリッド</h3>

上でグリッドの例を作成した時、列トラックを {{cssxref("grid-template-columns")}} プロパティで具体的に定義しましたが、グリッドは勝手に行も作っていました。これらの行は暗黙的のグリッドの一部です。一方、明示的なグリッドは、{{cssxref("grid-template-columns")}} または {{cssxref("grid-template-rows")}} で定義された行と列から構成されます。

定義されたグリッドの外側に何かを配置した場合 (または内容物の量のために、より多くのグリッドトラックが必要な場合)、グリッドは暗黙的なグリッドに行と列を作成します。これらのトラックは、デフォルトで自動サイズ調整されるため、サイズはトラック内の内容物に基づいて決まります。

{{cssxref("grid-auto-rows")}} と {{cssxref("grid-auto-columns")}} プロパティで、暗黙的なグリッドに作成されたトラックのセットサイズを定義することもできます。

下の例では、`grid-auto-rows` を使用して、暗黙的なグリッド内に作成されたトラックが 200px の高さになることを保証しています。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
```

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

{{ EmbedLiveSample('The_implicit_and_explicit_grid', '230', '450') }}

<h3 id="Track_sizing_and_minmax">トラックのサイズ指定と minmax()</h3>

明示的なグリッドのセットアップ時または自動生成された行や列のサイズを定義する時、最小サイズのトラックを与えておき、追加された内容物に合わせて広げられるようにしたいでしょう。例えば、行を 100 ピクセルより小さくしたくないが、内容物の高さが 300 ピクセルに引き伸ばされた場合は行の高さをそのサイズに引き伸ばしたい場合です。

グリッドでは、それを {{cssxref("minmax()")}} 関数で解決できます。この次の例では、{{cssxref("grid-auto-rows")}} の値に `minmax()` を使用しています。自動生成された行の高さの最小値は 100 ピクセル、最大値は `auto` になります。値に `auto` を使うと、この行のセルが内容物のサイズに応じて空間が引き伸ばされ、その高さに合わせられます。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

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

```html
<div class="wrapper">
  <div>One</div>
  <div>
    Two より多くの内容物があります。
    <p>これによって、高さが 100 ピクセルよりも高くなります。</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '470') }}

## グリッド線

私たちがグリッドを定義する時、グリッドトラックを定義するのであり、グリッド線ではないことに注意しなければなりません。グリッドには、アイテムの配置時に使用する番号の付いた線が与えられます。3 列 2 行のグリッドには、4 本の縦線があります。

![番号付きのグリッド行を示した図。](1_diagram_numbered_grid_lines.png)

グリッド線の番号は、文書の書字方向に従って付けられます。左書き (left-to-right) の言語では、線 1 はグリッドの左手側にあり、右書き (right-to-left) の言語では、グリッドの右手側にあります。グリッド線には名前を付けることもできます。この方法については後のガイドで解説します。

<h3 id="Positioning_items_against_lines">グリッド線に対するアイテムの配置</h3>

グリッド線を基にした配置の詳細は、後の記事で解説します。次の例は、その簡単な方法のデモンストレーションです。アイテムを配置するとき、私たちはトラックではなくグリッド線を対象にします。

以下の例では、最初の 2 つのアイテムを、{{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} および {{cssxref("grid-row-end")}} の各プロパティを使用して 3 列トラックのグリッド上に配置します。左から右へ向かって、最初のアイテムは列の線 1 から列の線 4 に対して、右端のグリッド線まで配置されます。また、行の線 1 から始まり、行の線 3 で終わる 2 行のトラックに及びます。

2 番目のアイテムは、グリッド列の線 1 から始まり、1 トラックの幅になります。これはデフォルトであるため、終わりの線を指定する必要がありません。また、行の線 3 から 5 まで、2 行トラックに及びます。他のアイテムは、それぞれグリッド上の空スペースに配置されます。

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

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

{{ EmbedLiveSample('Positioning_items_against_lines', '230', '450') }}

Firefox の開発者ツールで[グリッドインスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)が使えることを忘れないでください。アイテムがグリッド線に対してどのように配置されるか知ることができます。

### 線による配置の一括指定

上記で使用した個別指定の値は、列の場合は {{cssxref("grid-column")}} で 1 行に、行の場合は {{cssxref("grid-row")}} で 1 行に圧縮できます。次の例では、先ほどのコードと同じ位置関係を、はるかに少ない CSS で実現しています。フォワードスラッシュ文字 (`/`) の前の値が開始行、後の値が終了行となります。

領域が 1 つのトラックにしか及ばない場合は、終了値を省略することができます。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.box2 {
  grid-column: 1;
  grid-row: 3 / 5;
}
```

<h2 id="Grid_cells">グリッドセル</h2>

_グリッドセル_ は、グリッド上の最も小さな単位です。コンセプトとしては、表のセルのようなものです。先述の例で、親要素のグリッドが定義されると、子アイテムが定義されたグリッドの各セルにレイアウトされる様を見てきました。下の画像では、グリッドの最初のセルをハイライトしています。

![グリッドの最初のセルをハイライト表示](1_grid_cell.png)

<h2 id="Grid_areas">グリッド領域</h2>

アイテムは、行と列の複数のセルにまたがって配置でき、_グリッド領域_ を作ることができます。グリッド領域は四角形でなければなりません。例えば L 字型の領域は作れません。ハイライトされた領域は、2 行と 2 列にまたがるトラックです。

![グリッド領域](1_grid_area.png)

<h2 id="Gutters" name="Gutters">セル間隔</h2>

グリッドセル間の _溝_ (Gutters) または _路地_ (alleys) は、 {{cssxref("column-gap")}} および {{cssxref("row-gap")}} プロパティを使用するか、一括指定の {{cssxref("gap")}} で作成できます。下の例では、列間 10 ピクセル、行間 `1em` の溝を作っています。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

> **メモ:** グリッドが最初にブラウザーに実装されたとき、 {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, {{cssxref("gap")}} に `grid-` の接頭辞がつき、それぞれ `grid-column-gap`, `grid-row-gap`, `grid-gap` のようになっていました。
>
> ブラウザーは接頭辞を外すよう更新されつつありますが、接頭辞付きの版も安全に利用できるよう保守されるでしょう。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  column-gap: 10px;
  row-gap: 1em;
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

{{ EmbedLiveSample('Gutters') }}

領域の前に占める溝による空間は、柔軟な長さの `fr` トラックに割り当てられ、通常のグリッドトラックのようにサイズ設定のために用いられます。しかしながら、溝の内側に何かを配置することはできません。グリッド線を基準にした配置では、溝は太線のように扱われます。

## 入れ子状のグリッド

グリッドアイテムはグリッドコンテナーにもなります。次の例は以前作成したもので、2 個のアイテムが配置指定された 3 列のグリッドです。この例では、最初のアイテムにサブアイテムが含まれています。これらのアイテムはグリッドの直接の子ではないので、グリッドレイアウトに関係しない通常の文書フローで表示されています。

![フロー中の入れ子上のグリッド](1_nested_grids_in_flow.png)

<h2 id="Nesting_grids">サブグリッドのない入れ子</h2>

この `box1` に `display: grid` を設定すると、トラック定義を与えてグリッドにすることができます。これらは新しいグリッド上にレイアウトされます。

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '340') }}

この場合の入れ子状のグリッドは、親グリッドと関係しません。例で表示されているように、親グリッドの {{cssxref("gap")}} を継承せず、入れ子状のグリッド内の線は親グリッドの線に沿いません。

### サブグリッド

Level 2 のグリッド仕様書の草稿では、サブグリッド (subgrid) と呼ばれる機能があり、親グリッドのトラック定義を利用した入れ子状のグリッドを作成できます。

> **メモ:** この機能は Firefox 71 で初めて搭載され、これがサブグリッドを実装している唯一のブラウザーです。

現在の仕様書では、入れ子上のグリッドの例を編集して、 `grid-template-columns: repeat(3, 1fr)` のトラック定義を `grid-template-columns: subgrid` へ変更します。入れ子状のグリッドは親グリッドのトラックを利用してアイテムをレイアウトします。

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
```

## `z-index` による項目のレイヤー化

グリッドアイテムは、同じセルを占有することがあり、この場合は {{cssxref("z-index")}} を使用してアイテムの重ね合わせの順序を制御することができます。

<h3 id="">z-index のない重ね合わせ</h3>

先ほどの行番号順にアイテムを配置する例に戻ると、これを変更して 2 つのアイテムを重ねることができます。

```html
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Overlapping_without_z-index', '230', '460') }}

アイテム `box2` が `box1` に重なり、ソースコードに書かれた順に、後のものが先のものの上に表示されます。

<h3 id="Controlling_the_order">順序の制御</h3>

アイテムを上に積む順序は、配置が指定されたアイテムと同様に、`z-index` プロパティを使用して制御できます。`box2` の `z-index` を `box1` より小さくすると、`box1` の奥に表示されるようになります。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Controlling_the_order', '230', '460') }}

## 次のステップへ

この記事では、グリッドレイアウト仕様の要点だけを見てきました。コードの例を試してみてから、[次のパートでは CSS グリッドレイアウトの詳細](/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)に進みます。
