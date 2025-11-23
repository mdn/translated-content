---
title: グリッドレイアウトの基本概念
short-title: 基本概念
slug: Web/CSS/Guides/Grid_layout/Basic_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)は、 2 次元グリッドシステムを CSS にもたらします。グリッドは、主要なページ領域や小さなユーザーインターフェイス要素のレイアウトに利用できます。このガイドでは、CSS グリッドレイアウトと、CSS グリッドレイアウト仕様の一部である用語について紹介します。この概要で示した機能については、このシリーズの他のガイドで詳しく説明します。

## グリッドとは何か？

グリッドは、行と列を定義する水平線と垂直線の集合が交差したものです。要素をグリッド上の行と列の中に配置することができます。 CSS グリッドレイアウトには次のような特徴があります。

### 固定トラックサイズと可変トラックサイズ

例えばピクセル単位を使って、固定トラックサイズのグリッドを作成することができます。これであるグリッドに好きなレイアウトに合うようなピクセルを設定できます。また、可変サイズのグリッドを作成するために、パーセントやこの目的で制定された [`fr`](#単位_fr) 単位を使用することができます。

### アイテムの配置

グリッドの線番号や名前を使って、グリッドのある位置を指定してアイテムを配置することができます。グリッドには、位置が明示されていないアイテムの配置を制御するアルゴリズムも含まれています。

### コンテンツを保持するための追加トラックの作成

グリッドレイアウトを使用して、明示的なグリッドを定義することができます。グリッドレイアウトモジュールによって定義された機能により、必要に応じて新しい行や列を追加する柔軟性が提供されます。「コンテナーに収まるだけの数の列」を追加するなどの機能も含まれています。

### 配置の制御

CSS グリッドレイアウトと [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment) 機能により、グリッド領域に配置したアイテムの配置方法、およびグリッド全体の配置方法を制御することができます。

### 重複するコンテンツの制御

グリッドセルやグリッド領域内には複数のアイテムも配置でき、それらはお互いに部分的に重複できます。この階層は、 {{cssxref("z-index")}} プロパティで制御できます。

グリッドは強力なレイアウト手法であり、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)などの CSS の他の機能と組み合わせることで、レスポンシブで柔軟性があり、アクセシビリティに優れたレイアウトを作成することができます。まず、**{{glossary("grid container", "グリッドコンテナー")}}** にグリッドを作成することから始めます。

## グリッドコンテナー

グリッドコンテナーを作成するには、要素に対して `display: grid` か `display: inline-grid` を指定します。グリッドコンテナーを作成すると、直接の子要素がすべてグリッドアイテムへと変わります。

この例では、 `wrapper` クラスの div を親要素を設定しています。その中には 5 個の子要素が含まれています。

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

`display: grid;` を使用して、`.wrapper` をグリッドコンテナーにします。

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

すべての直接の子要素がグリッド要素になりました。それらの要素をグリッドにする前とウェブブラウザー上での見た目に変化は無いでしょう。グリッドには単一列のグリッドが作成されただけだからです。ブラウザーの開発者ツールでグリッドを調べると、値 `grid` の横に小さなアイコンが表示される場合があります。これをクリックすると、ほとんどのブラウザーでは、この要素のグリッドがブラウザーウィンドウにオーバーレイ表示されます。

![Firefox の開発者ツールのグリッドハイライターを使用したグリッドの表示](1-grid-inspector.png)

CSS グリッドレイアウトについて学び、使っていく中で、このブラウザーツールは、グリッドに何が起こっているかを視覚的に理解する助けになるでしょう。

この例をさらにグリッドらしくするためには、列トラックを追加する必要があります。

## グリッドトラック

ここでは、{{cssxref("grid-template-rows")}} および {{cssxref("grid-template-columns")}} プロパティを使用してグリッド上に行と列を定義します。これらは{{glossary("grid tracks", "グリッドトラック")}}を定義します。「グリッドトラック」は、グリッド上の任意の 2 本の線の間にある空間です。下の画像で、グリッド内の最初の行トラックが強調表示されているのが確認できるでしょう。

![3 つのグリッドアイテムがあるボックス。 3 つのアイテムの上には、トラックである薄緑色の領域があります。](1_grid_track.png)

グリッドトラックは[明示的グリッド](#暗黙的および明示的なグリッド)の中で、 `grid-template-columns` プロパティと `grid-template-rows` プロパティ、または一括指定の `grid` プロパティと `grid-template` プロパティで定義します。トラックは、明示的グリッドで作成されたトラックの外側にグリッドアイテムを配置することで、暗黙的グリッドでも作成されます。

### 基本的な例

先述の例に対して `grid-template-columns` プロパティで列トラック追加すると、列トラックのサイズが定義できます。

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

### 単位 fr

トラックは、どの長さの単位でも定義できます。グリッドには、柔軟なグリッドトラックを作成できるようにするため、追加の長さの単位が導入されています。単位 [`fr`](/ja/docs/Web/CSS/Reference/Values/flex_value) は、グリッドコンテナー内の利用可能な空間の比を表します。次のグリッド定義は、利用可能なスペースに応じて伸縮する、幅が 3 等分されたトラックを作成します。

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

### 等しくない大きさ

この例では、1 つの `2fr` のトラックと 2 つの `1fr` のトラックの定義を作成します。利用可能な空間は、4 つに分割されます。そのうち 2 つが最初のトラックに与えられ、残りはそれぞれ次の 2 つのトラックに与えられます。

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

### 変動する大きさと絶対的な大きさの混合

最後の例では、絶対サイズのトラックを `fr` 単位と混ぜて使用します。最初のトラックは `500px` なので、この固定幅は利用可能な空間から除外されます。残りの領域は 3 つに分割され、比率に応じて 2 つの変動幅のトラックに割り当てられます。

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

### repeat() 記法によるトラック列挙

多くのトラックを持つ大きなグリッドのため、 [`repeat()`](/ja/docs/Web/CSS/Reference/Values/repeat) 記法を使用して、一連のグリッドトラックのすべてまたは一部を繰り返すことができます。例えば、以下のグリッド定義を参照してください。

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

繰り返し記法は、トラックのリストの一部に対して使用することができます。この例では、8 列のグリッドを作成します。最初のトラックは `20px`、次に 6 つの `1fr` トラックが繰り返される部分、そして最後に `20px` のトラックを作成します。

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

繰り返し記法 (`repeat()`) は、トラックのリストを使用して、トラックの繰り返しパターンを作成します。この例では、グリッドには 10 個のトラックが存在し、 `1fr` トラックに `2fr` トラックが続き、このパターンが 5 回繰り返されます。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### 暗黙的および明示的なグリッド

この例のグリッドを作成する際に、列トラックを {{cssxref("grid-template-columns")}} プロパティで明確に定義し、グリッドがコンテンツに合うように必要な行を作成するようにしました。列は明示的なグリッドを定義し、行は暗黙的なグリッドの一部です。

明示的グリッド は、{{cssxref("grid-template-columns")}} または {{cssxref("grid-template-rows")}} で定義された行と列の数で構成されます。暗黙的グリッド は、コンテンツがグリッドの外側（行など）に配置された場合に、新しいグリッド行を描画して、定義された明示的グリッドを拡張します。

定義されたグリッドの外側に何かを配置した場合、またはコンテンツ量が多いために追加のグリッドトラックが必要な場合、グリッドは暗黙のグリッド内で行と列を生成します。これらの暗黙のトラックはデフォルトで自動サイズ調整され、生成される行や列のサイズは、そのコンテンツとグリッドコンテナー内の空き空間の両方に影響されます。`auto` キーワードを使用すると、生成されたトラックはコンテンツを収容すると同時に、残りの空間を共有します。

{{cssxref("grid-auto-rows")}} と {{cssxref("grid-auto-columns")}} プロパティで、暗黙的なグリッドに作成されたトラックのセットサイズを定義することもできます。

この例では、 `grid-auto-rows: 200px` を設定して、この暗黙のグリッドで作成される予定の高さが `200px` になることを保証しています。

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

### トラックのサイズ指定と minmax

明示的なグリッドのセットアップ時または自動生成された行や列のサイズを定義する時、最小サイズのトラックを与えておき、追加されたコンテンツに合わせて広げられるようにしたいでしょう。例えば、行を 100 ピクセルより小さくしたくないが、コンテンツの高さが 300 ピクセルに引き伸ばされた場合は行の高さをそのサイズに引き伸ばしたい場合です。これは、{{cssxref("minmax", "minmax()")}} 関数で解決できます。

この例では、 `minmax()` を `grid-auto-rows` プロパティの値内で使用しています。 `grid-auto-rows: minmax(100px, auto);` を設定すると、自動的に作成される行の高さは最小で `100px`、最大で `auto` になります。最大値を `auto` に設定すると、トラックはコンテンツに合わせて（`max-content` のサイズまで）拡大しつつ、グリッドコンテナー内の空き空間も共有できるようになります。

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

```html hidden
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>より多くのコンテンツがあります。</p>
    <p>これによって、高さが 100 ピクセルよりも高くなります。</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '270') }}

## グリッド線

私たちがグリッドを定義する時、グリッドトラックを定義するのであり、グリッド線ではないことに注意しなければなりません。グリッドには、アイテムの配置時に使用する番号の付いた線が与えられます。3 列 2 行のグリッドには、4 本の縦線があります。

![番号付きのグリッド行を示した図。](1_diagram_numbered_grid_lines.png)

グリッド線の番号は、文書の書字方向に従って付けられます。左書き (left-to-right) の言語では、線 1 はグリッドの左手側にあり、右書き (right-to-left) の言語では、グリッドの右手側にあります。線には名前を付けることもできます。これについては、[名前付きグリッド線を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)ガイドで説明しています。

### グリッド線に対するアイテムの配置

次の例は、基本的な線ベースの配置を示しています。アイテムを配置する場合、トラックではなく線を対象とします。これについては、[線ベースの配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) ガイドで詳しく説明しています。

この例では、最初の 2 つのアイテムを、{{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} および {{cssxref("grid-row-end")}} の各プロパティを使用して 3 列トラックのグリッド上に配置します。左から右へ向かって、最初のアイテムは列の線 1 から列の線 4 に対して、右端のグリッド線まで配置されます。また、行の線 1 から始まり、行の線 3 で終わる 2 行のトラックに及びます。

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

開発者ツールのグリッドインスペクターを使用すると、アイテムがグリッドの行に対してどのように位置指定されているかを確認できます。

### 線による配置の一括指定

上記で使用した個別指定の値は、列の場合は {{cssxref("grid-column")}} 一括指定で 1 行に、行の場合は {{cssxref("grid-row")}} 一括指定で 1 行に圧縮できます。次の例では、先ほどのコードと同じ位置関係を、はるかに少ない CSS で実現しています。フォワードスラッシュ文字 (`/`) の前の値が開始行、後の値が終了行となります。

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

## グリッドセル

「グリッドセル」は、グリッド上の最も小さな単位です。コンセプトとしては、表のセルのようなものです。先述の例で、親要素のグリッドが定義されると、子アイテムが定義されたグリッドの各セルにレイアウトされる様を見てきました。下の画像では、グリッドの最初のセルが強調表示されています。

![グリッドの最初のセルをハイライト表示](1_grid_cell.png)

## グリッド領域

アイテムは、行と列の複数のセルにまたがって配置でき、_グリッド領域_ を作ることができます。グリッド領域は四角形でなければなりません。例えば L 字型の領域は作れません。ハイライトされた領域は、2 行と 2 列にまたがるトラックです。

![グリッド領域](1_grid_area.png)

## 溝

グリッドセル間の _溝_ (Gutters) または _路地_ (alleys) は、 {{cssxref("column-gap")}} および {{cssxref("row-gap")}} プロパティを使用するか、一括指定の {{cssxref("gap")}} で作成できます。下の例では、列間 10 ピクセル、行間 `1em` の隙間を作っています。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

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

領域の前に占める溝による空間は、柔軟な長さの `fr` トラックに割り当てられ、通常のグリッドトラックのようにサイズ設定のために用いられます。しかしながら、溝の内側に何かを配置することはできません。グリッド線を基準にした配置では、溝は太い透明な線のように扱われます。

## 入れ子状のグリッド

グリッドアイテムはグリッドコンテナーにもなります。次の例では、先ほど見た 3 列のグリッドを 2 つの位置指定されたアイテムで拡張し、最初のグリッドアイテムにサブアイテムを追加しています。これらのネストされたアイテムはグリッドの直接の子ではないため、グリッドレイアウトには参加せず、通常の文書フローで表示されます。

![フロー中の入れ子上のグリッド](1_nested_grids_in_flow.png)

### サブグリッドのない入れ子

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

```html
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
  gap: 3px;
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

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '250') }}

この場合の入れ子状のグリッドは、親グリッドと関係しません。例で表示されているように、親グリッドの {{cssxref("gap")}} を継承せず、入れ子状のグリッド内の線は親グリッドの線に沿いません。

### サブグリッド

通常のグリッドに加えて、「サブグリッド」を作成することができます。 `subgrid` の値で、親グリッドのトラック定義を使用する、入れ子になったグリッドを作成することができます。

使用するには、入れ子上のグリッドの例を編集して、 `grid-template-columns: repeat(3, 1fr)` のトラック定義を `grid-template-columns: subgrid` へ変更しましょう。入れ子状のグリッドは親グリッドのトラックを利用してアイテムをレイアウトします。

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

## z-index によるアイテムのレイヤー化

グリッドアイテムは、同じセルを占有することがあり、この場合は {{cssxref("z-index")}} を使用してアイテムの重ね合わせの順序を制御することができます。

### z-index のない重ね合わせ

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

### 順序の制御

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

{{ EmbedLiveSample('Controlling_the_order', '230', '420') }}

## 次のステップ

この概要では、グリッドレイアウトの可能性についてごく簡単に紹介しました。サンプルコードを試してみて、ガイド、[グリッドレイアウトと他のレイアウトメソッドとの関係](/ja/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)に進んでください。ここでは、CSS グリッドレイアウトの詳細について実際に掘り下げていきます。
