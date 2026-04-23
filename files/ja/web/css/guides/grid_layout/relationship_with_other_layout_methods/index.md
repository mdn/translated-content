---
title: グリッドレイアウトと他のレイアウト方法との関係
short-title: グリッドと他のレイアウト
slug: Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)はレイアウトを行うための完全なシステムの一部として、 CSS の他の機能と一緒に動作するよう設計されました。このガイドでは、既に使われている他の技術と、どのようにグリッドが適合するかを説明します。

## グリッドとフレックスボックス

CSS グリッドレイアウトと[CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の基本的な違いは、フレックスボックスは 1 次元 - 1 列または 1 行 - のレイアウトのために設計されたという点です。一方、グリッドは、行と列を同時に扱う 2 次元のレイアウト用に設計されています。 2 つの仕様はどちらも、 [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)機能を使用しています。フレックスボックスの使い方をすでに学んでいる場合は、その共通点を参考にしてグリッドを使いこなすことができます。

### 1 次元 vs. 2 次元レイアウト

1 次元と 2 次元のレイアウトの違いを示すことができる基本的な例です。

最初の例では、一連のボックスを配置するためにフレックスボックスを使用しています。コンテナーの中には 5 つの子アイテムがあり、 flex プロパティ値を与えて 150 ピクセルの flex-basis から伸縮できるようにしています。

{{cssxref("flex-wrap")}} プロパティを `wrap` に設定し、コンテナーの大きさが狭くなりすぎて flex basis を維持することができなくなったら、アイテムが次の行へ折り返されるようにしています。

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

{{ EmbedLiveSample('One-dimensional_versus_two-dimensional_layout', '500', '170') }}

図では、2 つのアイテムが新しい行へ折り返されているのがわかると思います。これらのアイテムは利用可能な空間を共有していますが、上のアイテムの下に整列されているわけではありません。フレックスアイテムが折り返しをした時、新しい行（もしくは列として機能している時は列）のそれぞれがフレックスコンテナーになるからです。空間の配分は行をまたがって起こります。

そこでよく聞かれるのが、それらのアイテムをどうやって並べるかということです。そこで、二次元のレイアウト方式が必要になります。配置を行と列で制御したい、ここでグリッドの出番です。

### CSS グリッドによる同様のレイアウト

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

グリッドとフレックスボックスのどちらを使うかを決める重要な質問です。

- 行または列のみを揃えてレイアウトを制御する必要がありますか。 – フレックスボックスを使いましょう
- 行および列を揃えてレイアウトを制御する必要がありますか。 - グリッドを使いましょう

### コンテンツの外か、レイアウトの中か

一次元と二次元の区別に加えて、レイアウトにフレックスボックスとグリッドのどちらを使うべきかを決めるには、もうひとつの方法があります。フレックスボックスはコンテンツの外側から動作します。フレックスボックスの理想的な使用例は、複数のアイテムをコンテナー内で均等に配置したい場合です。コンテンツの大きさに合わせて、それぞれのアイテムがどれだけの空間を占めるかを決定します。アイテムが新しい行に折り返された場合、そのサイズとその行で利用可能な空間に基づいて、空間が調整されます。

グリッドはレイアウトの中で機能します。CSS グリッドレイアウトを使用する場合、レイアウトを作成し、そこにアイテムを配置するか、自動配置ルールによって厳密なグリッドに沿ってグリッドセルにアイテムを配置していきます。コンテンツのサイズに対応したトラックを作成することは可能ですが、トラック全体が変化してしまいます。

もしフレックスボックスを使っていていくつかの柔軟性が欠けていたら、おそらく CSS グリッドレイアウトを使う必要があるでしょう。例えば、フレックスアイテムの幅を設定して、そのアイテムを上の行の他のアイテムと揃える場合、グリッドの方が適しているでしょう。

### ボックス配置

ほとんどのグリッド配置機能は、もともと [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で定義されていました。これらの機能は、初めて適切な位置合わせの制御を提供し、ページ上でボックスを容易に中央に配置することができるようになりました。フレックスアイテムはフレックスコンテナーの高さまで引き伸ばすことができるため、同じ高さの列を作成することができるようになりました。これらのプロパティは、 [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュールで定義され、グリッドレイアウトを含む複数のレイアウトモードで使用されます。

[CSS グリッドレイアウトでのアイテムの配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment) については、後で詳しく見ていきます。ここでは、フレックスボックスとグリッドの例を比較してみましょう。

最初の例では、フレックスボックスを使用しており、3 つの要素を持つコンテナーがあります。コンテナーに {{cssxref("min-height")}} を設定し、フレックスコンテナーの高さを定義しています。コンテナーには {{cssxref("align-items")}} を `flex-end` に設定して、コンテナーの末尾に要素が並ぶようにしています。また、`box1` に {{cssxref("align-self")}} プロパティを設定して、既定値を上書きしてコンテナーの高さまで伸びるようにし、`box2` にも設定して、フレックスコンテナーの開始位置に揃えるようにしました。

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

### CSS グリッド上での配置

この例では、グリッドを使用して同じレイアウトを作成しています。グリッドレイアウトに適用されるボックスの配置プロパティを使用しています。 `start` と `end` に配置します。（{{cssxref("content-position")}} の同義語である `flex-start` および `flex-end` を使用することもできました。）グリッドレイアウトの場合、アイテムはグリッド領域内に配置されます。この例では、グリッドセルは単一ですが、複数のグリッドセルで構成される領域でもかまいません。

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

{{ EmbedLiveSample('Alignment_in_CSS_Grids', '200', '240') }}

### `fr` 単位と `flex-basis`

すでに、`fr` の単位がグリッドコンテナー内の利用可能な空間の割合をグリッドトラックに割り当てる仕組みを見てきました。この `fr` の単位と {{cssxref("minmax", "minmax()")}} 関数を組み合わせると、フレックスボックスの `flex` プロパティと非常によく似た動作をしながら、 1 次元のレイアウトを作成することができます。

1 次元と 2 次元のレイアウトの違いを示した例を振り返ると、この 2 つのレイアウトがレスポンシブに動作する方法に違いがあることがわかります。フレックスレイアウトでは、ウィンドウをドラッグして大きくしたり小さくしたりすると、フレックスボックスが利用可能な空間に応じて各行のアイテム数をうまく調整してくれます。空間に余裕がある場合は、 5 つのアイテムが 1 列に収まります。しかし、コンテナーが非常に狭い場合は、 1 つのアイテムしか置けないかもしれません。

それに比べてグリッド版では、常に 3 列のトラックがあります。トラック自体は大きくなったり小さくなったりしますが、グリッドを定義するときに 3 つとしたので、常に 3 つあります。

#### グリッドトラックの自動充填

反復記法と `auto-fill` および `auto-fit` プロパティを使用してトラックリストを作成することで、コンテンツを厳密な行と列に配置しながら、フレックスボックスと同様の効果を得ることができます。

次の例では、反復記法で整数の代わりに `auto-fill` キーワードを使用し、トラックリストを 200 ピクセルに設定しています。これにより、グリッドはコンテナーに収まるだけの 200 ピクセルの列トラックを作成します。

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

{{ EmbedLiveSample('Auto-filling_grid_tracks', '500', '70') }}

### 柔軟なトラック数

これはフレックスボックスとは全く同じではありません。フレックスボックスの例では、アイテムは折り返す前では 200 ピクセルの基準よりも大きくなっています。グリッドでも `auto-fit` と {{cssxref("minmax", "minmax()")}} 関数を組み合わせることで、同じことが実現できます。

この例では、 `minmax` を使って自動的に大きさを合わせるトラックを作成します。トラックの大きさは最低でも 200 ピクセルにしたいので、最大値を `1fr` に設定しています。ブラウザーは、 200 ピクセルがコンテナーにいくつ収まるかを計算し、グリッドの隙間も考慮した上で、最大値の `1fr` を、アイテム間の残りの空間を共有する指示として扱います。

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

{{ EmbedLiveSample('A_flexible_number_of_tracks', '500', '70') }}

自由度の高いトラック数のグリッドを作成しながら、グリッド上に並べられたアイテムを行と列で同時に確認することができるようになりました。

## グリッドと絶対位置指定要素

グリッドは[絶対位置指定](/ja/docs/Web/CSS/Reference/Properties/position#絶対位置指定)要素と相互作用するので、グリッドやグリッド領域内にアイテムを配置したい場合に便利です。仕様では、グリッドコンテナーが包含ブロックであり、絶対配置されたアイテムの親である場合の動作を定義しています。

### 包含ブロックとしてのグリッドコンテナー

グリッドコンテナーを[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)にするには、他の絶対位置指定アイテムの包含ブロックを作るのと同じように、コンテナーに {{cssxref("position")}} プロパティを `relative` の値で追加する必要があります。こうすると、グリッドアイテムに `position: absolute` を与えると、グリッドコンテナーを包含ブロックとし、アイテムにグリッド位置がある場合には、アイテムが配置されたグリッドの領域を包含ブロックとします。

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

{{ EmbedLiveSample('A_grid_container_as_containing_block', '500', '270') }}

アイテムがグリッド列の 2 本目から 4 本目までの領域を取り、1 本目の後に始まっているのがわかります。そして、 top と left のプロパティを使用して、その領域内に配置されています。しかし、絶対的に位置指定されたアイテムでは、通常のようにフローから外されているため、自動配置ルールによってアイテムが同じスペースに配置されています。また、このアイテムは、 3 本目にまたがるように追加の線を作成する原因にもなりません。

`.box3` のルールから `position: absolute` を削除すると、位置指定なしでどのように表示されるかがわかります。

### 親としてのグリッドコンテナー

絶対位置指定された子がグリッドコンテナーを親に持つが、そのコンテナーが新たな位置指定コンテキストを作成しない場合は、前述の例のようにフローから外されます。位置指定コンテキストは、絶対位置指定要素が相対的に位置指定される要素です。位置指定コンテキストは、他のレイアウト方式と共通するように、位置指定コンテキストを作成する要素であれば何でも構いません。今回の例では、上記のラッパーから `position: relative` を削除すると、この画像のように、ビューポートからの位置指定コンテキストになります。

![グリッドコンテナーを親とするイメージ](2_abspos_example.png)

この場合も、サイズ調整や他のアイテムが自動配置される際に、アイテムはグリッドレイアウトに参加しなくなります。

### グリッド領域を親にする

絶対的に位置指定されたアイテムがグリッド領域内で入れ子になっている場合、その領域に位置指定コンテキストを作成することができます。この例では、先ほどと同じようにグリッドを作成していますが、今回はグリッドの `.box3` 内にアイテムを入れ子にしています。

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
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid rgb(0 0 0 / 50%);
  color: black;
  padding: 10px;
}
```

{{ EmbedLiveSample('With_a_grid_area_as_the_parent', '500', '460') }}

## グリッドと display: contents

最後に、注目すべき相互作用として、CSS グリッドレイアウトと [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display) モジュールで定義されている `display: contents` との相互作用があります。 {{cssxref("display")}} プロパティが `contents` に設定されている場合、要素自体はボックスを生成しませんが、その子や擬似要素は通常通りボックスを生成します。ボックスの生成とレイアウトにおいては、その要素は文書ツリー内でその子や擬似要素と置き換えられたかのように扱われるということです。

アイテムを `display: contents` にすると、通常は作成されるはずのボックスが消え、子要素のボックスが一段上がったように見えます。つまり、グリッドアイテムの子がグリッドアイテムになることができるのです。変だと思いませんか？例を見てみよう。

### 子要素を入れ子にしたグリッドレイアウト

この例では、グリッドの最初のアイテムは 3 つの列トラックすべてにまたがるように設定されています。このアイテムには 3 つの入れ子アイテムが含まれています。これらのアイテムは直接の子ではないため、グリッドレイアウトの一部にはならず、通常のブロックレイアウトで表示されます。

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

### display: contents の使用

次に、`box1` のルールに `display: contents` を追加すると、そのアイテムのボックスは消え、サブアイテムはグリッドアイテムとなり、自動配置ルールを使ってレイアウトされるようになります。

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

これは、グリッドに入れ子になったアイテムをグリッドの一部のように動作させる方法です。また、フレックスボックスと同様の方法で、 `display: contents` を使用して、入れ子になったアイテムをフレックスアイテムにすることもできます。

このガイドからわかるように、CSS グリッドレイアウトはツールキットの一部に過ぎません。必要な効果を得るために、他のレイアウト方法と組み合わせることを恐れないでください。

## 関連情報

- [フレックスボックスガイド](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [段組みレイアウトガイド](/ja/docs/Web/CSS/Guides/Multicol_layout)
