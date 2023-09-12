---
title: グリッドレイアウトと他のレイアウト方法との関係
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
---

{{CSSRef}}

CSS グリッドレイアウトはレイアウトを行うための完全なシステムの一部として、 CSS の他の機能と一緒に動作するよう設計されました。このガイドでは、既に使われている他の技術と、どのようにグリッドが適合するかを説明します。

## グリッドとフレックスボックス

CSS グリッドレイアウトと[CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)の基本的な違いは、フレックスボックスは一次元 - 一列*または*一行 - のレイアウトのために設計されたという点です。一方、グリッドは、行と列を同時に扱う二次元のレイアウト用に設計されています。しかし、この 2 つの仕様には共通の機能がいくつかあり、フレックスボックスの使い方をすでに学んでいる場合は、その共通点を参考にしてグリッドを使いこなすことができます。

<h3 id="One-dimensional_vs._two-dimensional_layout">一次元 vs. 二次元レイアウト</h3>

一次元と二次元のレイアウトの違いを示すことができる単純な例です。

最初の例では、一連のボックスを配置するためにフレックスボックスを使用しています。コンテナーの中には 5 つの子項目があり、 flex プロパティ値を与えて 150 ピクセルの flex-basis から伸縮できるようにしています。

{{cssxref("flex-wrap")}} プロパティを `wrap` に設定し、コンテナーの大きさが狭くなりすぎて flex basis を維持することができなくなったら、項目が次の行へ折り返されるようにしています。

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
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 150px;
}
```

{{ EmbedLiveSample('One-dimensional_versus_two-dimensional_layout', '500', '230') }}

図では、2 つのアイテムが新しい行へ折り返されているのがわかると思います。これらのアイテムは利用可能な空間を共有していますが、上のアイテムの下に整列されているわけではありません。フレックスアイテムが折り返しをした時、新しい行（もしくは列として機能している時は列）のそれぞれがフレックスコンテナーになるからです。空間の配分は行をまたがって起こります。

そこでよく聞かれるのが、それらのアイテムをどうやって並べるかということです。そこで、二次元のレイアウト方式が必要になります。配置を行と列で制御したい、ここでグリッドの出番です。

<h3 id="The_same_layout_with_CSS_grids">CSS グリッドによる同様のレイアウト</h3>

次の例では、グリッドを使って同様のレイアウトを構築します。今回は 3 つの `1fr` の列トラックがあります。アイテム自体には何も設定する必要はりません。構築されたグリッドのセルそれぞれにアイテムを一つずつ配置していきます。厳格なグリッドにアイテムが配置されているため、行と列は整列しています。アイテムは 5 つなので、2 行目の最後は空間になります。

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
}
```

{{ EmbedLiveSample('The_same_layout_with_CSS_grids', '300', '170') }}

グリッドとフレックスボックスのどちらを使うかを決めるシンプルな質問です。

- 行*または*列のみによってレイアウトを制御する必要がありますか。 – フレックスボックスを使いましょう
- 行*および*列によりレイアウトを制御する必要がありますか。 - グリッドを使いましょう

### 内容物の外か、レイアウトの中か

一次元と二次元の区別に加えて、レイアウトにフレックスボックスとグリッドのどちらを使うべきかを決めるには、もうひとつの方法があります。フレックスボックスは内容物の外側から動作します。フレックスボックスの理想的な使用例は、複数のアイテムをコンテナー内で均等に配置したい場合です。内容物の大きさに合わせて、それぞれのアイテムがどれだけの空間を占めるかを決定します。アイテムが新しい行に折り返された場合、そのサイズとその行で利用可能な空間に基づいて、空間が調整されます。

グリッドはレイアウトの中で機能します。CSS グリッドレイアウトを使用する場合、レイアウトを作成し、そこにアイテムを配置するか、自動配置ルールによって厳密なグリッドに沿ってグリッドセルにアイテムを配置していきます。コンテンツのサイズに対応したトラックを作成することは可能ですが、トラック全体が変化してしまいます。

もしフレックスボックスを使っていていくつかの柔軟性が欠けていたら、おそらく CSS グリッドレイアウトを使う必要があるでしょう。例えばフレックスアイテムの幅をパーセント値で設定し、ある行へその他のアイテムとともに整列させていた場合は、グリッドがより良い選択肢になるでしょう。

<h3 id="Box_alignment">ボックス配置</h3>

フレックスボックスの最も素晴らしい特徴は、我々に適切な配置制御を与えてくれる最初のものということでした。これによりページの真ん中にボックスを置くことが簡単になりました。フレックス要素はフレックスコンテナーの高さに引き伸ばすことができ、これはつまり、同じ高さの列が可能ということです。これらは私たちが長い間求めてきたもので、少なくとも視覚効果を実現するためのさまざまな種類のハックが考え出されてきました。

フレックスボックスの仕様による配置プロパティは [Box Alignment Level 3](https://drafts.csswg.org/css-align/) と呼ばれる新しい仕様に追加されました。これはつまり、グリッドレイアウトを含む他の仕様でも使用できるということです。将来的には、他のレイアウト手法にも適用できるようになるでしょう。

この一連のガイドの後、ボックス配置と、それがグリッドレイアウトの中でどのように動作するのかを見ていきます。今回の場合、フレックスボックスと grid の簡単な比較例を挙げます。

最初の例では、フレックスボックスを使用しており、3 つの要素を持つコンテナーがあります。コンテナーである `wrapper` には {{cssxref("min-height")}} が設定され、フレックスコンテナーの高さを決めています。コンテナーには {{cssxref("align-items")}} を `flex-end` に設定してコンテナーの末尾に要素が並ぶようにしています。また、`box1` の {{cssxref("align-self")}} プロパティをコンテナーの高さに合わせるよう `streach` へ上書きし、`box2` もコンテナーの始まりから整列するにように上書きしています。

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
```

{{ EmbedLiveSample('Box_alignment', '300', '230') }}

<h3 id="Alignment_in_CSS_Grids">CSS グリッド上での配置</h3>

2 つ目の例ではグリッドを使って同じレイアウトを作りましょう。今回はグリッドレイアウトを使うため、ボックス配置プロパティを使います。従って、 `start` と `end` を `flex-start` と `flex-end` の代わりに使って配置します。グリッドレイアウトの場合は、グリッド領域の中にアイテムを配置していきます。今回のケースでは単一のグリッドセルを作成していますが、これは複数のグリッドセルで構成された領域にもなることが可能です。

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
```

{{ EmbedLiveSample('Alignment_in_CSS_Grids', '200', '310') }}

### `fr` 単位と `flex-basis`

すでに、`fr` の単位がグリッドコンテナー内の利用可能な空間の割合をグリッドトラックに割り当てる仕組みを見てきました。この `fr` の単位と {{cssxref("minmax()", "minmax()")}} 関数を組み合わせると、フレックスボックスの `flex` プロパティと非常によく似た動作をしながら、二次元のレイアウトを作成することができます。

一次元と二次元のレイアウトの違いを示した例を振り返ると、この 2 つのレイアウトがレスポンシブに動作する方法に違いがあることがわかります。フレックスレイアウトでは、ウィンドウをドラッグして大きくしたり小さくしたりすると、フレックスボックスが利用可能な空間に応じて各行のアイテム数をうまく調整してくれます。空間に余裕がある場合は、 5 つのアイテムが 1 列に収まります。しかし、コンテナーが非常に狭い場合は、 1 つのアイテムしか置けないかもしれません。

それに比べてグリッド版では、常に 3 列のトラックがあります。トラック自体は大きくなったり小さくなったりしますが、グリッドを定義するときに 3 つとしたので、常に 3 つあります。

<h4 id="Auto-filling_grid_tracks">グリッドトラックの自動入力</h4>

反復記法と `auto-fill` および `auto-fit` プロパティを使用してトラックリストを作成することで、コンテンツを厳密な行と列に配置しながら、フレックスボックスと同様の効果を得ることができます。

次の例では、反復記法で整数の代わりに `auto-fill` キーワードを使用し、トラックリストを 200 ピクセルに設定しています。これにより、 grid はコンテナーに収まるだけの 200 ピクセルの列トラックを作成します。

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
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{ EmbedLiveSample('Auto-filling_grid_tracks', '500', '170') }}

<h3 id="A_flexible_number_of_tracks">柔軟なトラック数</h3>

これはフレックスボックスとは全く同じではありません。フレックスボックスの例では、アイテムは折り返す前では 200 ピクセルの基準よりも大きくなっています。グリッドでも `auto-fit` と {{cssxref("minmax()", "minmax()")}} 関数を組み合わせることで、同じことが実現できます。次の例では、 `minmax` を使って自動フィットトラックを作成します。トラックの大きさは最低でも 200 ピクセルにしたいので、最大値を `1fr` に設定しています。ブラウザーは、 200 ピクセルがコンテナーにいくつ収まるかを計算し、グリッドの隙間も考慮した上で、最大値の `1fr` を、アイテム間の残りの空間を共有する指示として扱います。

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
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

{{ EmbedLiveSample('A_flexible_number_of_tracks', '500', '170') }}

自由度の高いトラック数のグリッドを作成しながら、グリッド上に並べられたアイテムを行と列で同時に確認することができるようになりました。

## グリッドと絶対位置指定された要素

グリッドは絶対位置指定要素と相互作用するので、グリッドやグリッド領域内にアイテムを配置したい場合に便利です。仕様では、グリッドコンテナーが包含ブロックであり、絶対配置されたアイテムの親である場合の動作を定義しています。

<h3 id="A_grid_container_as_containing_block">包含ブロックとしてのグリッドコンテナー</h3>

グリッドコンテナーを包含ブロックにするには、他の絶対位置指定アイテムの包含ブロックを作るのと同じように、コンテナーに position プロパティを relative の値で追加する必要があります。こうすると、グリッドアイテムに `position: absolute` を与えると、グリッドコンテナーを包含ブロックとし、アイテムにグリッド位置がある場合には、アイテムが配置されたグリッドの領域を包含ブロックとします。

以下の例では、4 つの子アイテムを含むラッパーがあります。アイテム 3 は絶対的な位置が指定されており、線ベースの配置を用いてグリッドに配置されています。グリッドコンテナーには `position: relative` が設定されているので、このアイテムの位置指定コンテキストになります。

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    このブロックは絶対位置指定されます。この例では、グリッドコンテナーが包含ブロックとなっているため、絶対位置指定のオフセット値は、配置された領域の外縁から計算されます。
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{ EmbedLiveSample('A_grid_container_as_containing_block', '500', '330') }}

アイテムがグリッド列の 2 本目から 4 本目までの領域を取り、1 本目の後に始まっているのがわかります。そして、 top と left のプロパティを使用して、その領域内に配置されています。しかし、絶対的に位置指定されたアイテムでは、通常のようにフローから外されているため、自動配置ルールによってアイテムが同じスペースに配置されています。また、このアイテムは、 3 本目にまたがるように追加の線を作成する原因にもなりません。

`.box3` のルールから `position:` `absolute` を削除すると、位置指定なしでどのように表示されるかがわかります。

## 親としてのグリッドコンテナー

絶対位置指定された子がグリッドコンテナーを親に持つが、そのコンテナーが新たな位置指定コンテキストを作成しない場合は、前述の例のようにフローから外されます。位置指定コンテキストは、他のレイアウト方式と共通するように、位置指定コンテキストを作成する要素であれば何でも構いません。今回の例では、上記のラッパーから `position:` `relative` を削除すると、この画像のように、ビューポートからの位置指定コンテキストになります。

![Image of grid container as parent](2_abspos_example.png)

この場合も、サイズ調整や他のアイテムが自動配置される際に、アイテムはグリッドレイアウトに参加しなくなります。

<h3 id="With_a_grid_area_as_the_parent">グリッド領域を親にする</h3>

絶対的に位置指定されたアイテムがグリッド領域内で入れ子になっている場合、その領域に位置指定コンテキストを作成することができます。以下の例では、先ほどと同じようにグリッドを作成していますが、今回はグリッドの `.box3` 内にアイテムを入れ子にしています。

`.box3` に相対位置を与え、オフセットプロパティを使ってサブアイテムを配置しています。この場合、位置指定コンテキストはグリッド領域です。

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    Three
    <div class="abspos">
      このブロックは絶対的に位置指定されます。この例では、グリッド領域が包含ブロックとなっているため、絶対位置指定のオフセット値はグリッド領域の外縁から計算されます。
    </div>
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #000;
  padding: 10px;
}
```

{{ EmbedLiveSample('With_a_grid_area_as_the_parent', '500', '460') }}

## グリッドと `display: contents`

最後に、他のレイアウト仕様との相互作用として、CSS グリッドレイアウトと `display: contents` との相互作用をご紹介します。 display プロパティの `contents` の値は、[Display 仕様書](https://drafts.csswg.org/css-display/#box-generation)に以下のように記述されている新しい値です。

> 「その要素自体はボックスを生成しませんが、その子や擬似要素は通常通りボックスを生成します。ボックスの生成とレイアウトのために、その要素は文書ツリー内でその子や擬似要素と置き換えられたかのように扱われなければなりません。」

アイテムを `display:` `contents` にすると、通常は作成されるはずのボックスが消え、子要素のボックスが一段上がったように見えます。つまり、グリッドアイテムの子がグリッドアイテムになることができるのです。変だと思いませんか？簡単な例を見てみよう。

<h3 id="Grid_layout_with_nested_child_elements">子要素を入れ子にしたグリッドレイアウト</h3>

次のマークアップでは、グリッドがあり、グリッド上の最初のアイテムが 3 つの列トラックすべてにまたがるように設定されています。その中には 3 つの入れ子になったアイテムが含まれています。これらのアイテムは直接の子ではないので、グリッドレイアウトの一部にはならず、通常のブロックレイアウトで表示されます。

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
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
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
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{ EmbedLiveSample('Grid_layout_with_nested_child_elements', '400', '440') }}

<h3 id="Using_display_contents">display: contents の使用</h3>

次に、`box1` のルールに `display:` `contents` を追加すると、そのアイテムのボックスは消え、サブアイテムはグリッドアイテムとなり、自動配置ルールを使ってレイアウトされるようになりました。

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
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
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
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{ EmbedLiveSample('Using_display_contents', '400', '350') }}

これは、グリッドに入れ子になったアイテムをグリッドの一部のように動作させる方法で、サブグリッドが実装された場合に解決されるであろう問題のいくつかを回避する方法でもあります。また、フレックスボックスと同様の方法で、 `display:` `contents` を使用して、入れ子になったアイテムをフレックスアイテムにすることもできます。

このガイドからわかるように、CSS グリッドレイアウトはツールキットの一部に過ぎません。必要な効果を得るために、他のレイアウト方法と組み合わせることを恐れないでください。

## 関連情報

- [フレックスボックスガイド](/ja/docs/Learn/CSS/CSS_layout/Flexbox)
- [段組みレイアウトガイド](/ja/docs/Web/CSS/CSS_Columns)
