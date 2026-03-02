---
title: グリッドレイアウトでの自動配置
short-title: 自動配置
slug: Web/CSS/Guides/Grid_layout/Auto-placement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)には、グリッドを作成し、そのグリッド内に子アイテムの一部またはすべてを明示的に配置しない場合に、その動作を制御するルールが含まれています。コンテンツの配置を明示的に制御する必要がない場合、この「自動配置」は、一連のアイテムのグリッドを作成する最も簡単な方法です。

## 既定の配置

アイテムの配置情報を指定しないと、アイテムは自動的にグリッド上に配置され、各グリッドセルに 1 つのグリッドアイテムが配置されます。

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  gap: 10px;
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

{{EmbedLiveSample('Default_placement')}}

## 自動配置の既定のルール

上記の例でわかるように、アイテムを配置せずにグリッドを作成すると、子アイテムはソースコードの順に、各グリッドセルに 1 つずつ配置されます。既定のフローは、行ごとにアイテムを配置します。グリッドは、1 行目の各セルにアイテムを配置します。 {{cssxref("grid-template-rows")}} プロパティを使用して新しい行を作成した場合、グリッドはこれらの行にアイテムの配置を続けます。[明示的なグリッド](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#implicit_and_explicit_grids)にすべてのアイテムを配置するのに十分な行がない場合、新しい暗黙の行が作成されます。

### 暗黙のグリッド内での行の大きさ

暗黙のグリッドで自動的に作成される行の値は、既定では自動でサイズが決まります。これは、行が、オーバーフローを発生させることなく、追加されたコンテンツを含むようにサイズが自動的に調整されることを意味します。

これらの行のサイズは、 {{cssxref("grid-auto-rows")}} プロパティを使用して制御できます。例えば、すべての行の高さを 100px にするには、 `grid-auto-rows: 100px;` を使用することができます。

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  gap: 10px;
  grid-auto-rows: 100px;
}
```

{{EmbedLiveSample('Sizing_rows_in_the_implicit_grid', '500', '230')}}

### minmax() を使用した行の大きさの指定

{{cssxref("minmax")}} 関数を使用すると、最小サイズを設定した行を作成し、必要に応じてコンテンツに合わせて伸長することができます。 `grid-auto-rows` の値として設定します。`grid-auto-rows: minmax(100px, auto);` を設定すると、各行の高さを 100px 以上に設定し、各行の高さを必要に応じて変更できるようにします。

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html-nolint
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>
    Four <br />このセルには追加のコンテンツがあります。<br />最大値は auto なので、行が広がります。
  </div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample('Sizing_rows_using_minmax', '500', '300')}}

### トラックリストを使用した行の高さの指定

また、トラックリストを渡すこともできます。これは繰り返されます。次のトラックリストでは、最初の暗黙の行トラックを 100 ピクセル、2 番目を `200px` として作成します。これは、暗黙のグリッドに内容物が追加される限り、継続されます。

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px 200px;
}
```

{{EmbedLiveSample('Sizing_rows_using_a_track_listing', '500', '450')}}

### 列ごとの自動配置

グリッドにアイテムを列ごとに自動配置させることもできます。 {{cssxref("grid-auto-flow")}} プロパティに `column` という値を指定します。この場合、グリッドは {{cssxref("grid-template-rows")}} を使って定義した行にアイテムを追加します。列が一杯になると、次の明示的な列に移動するか、暗黙的なグリッドに新しい列トラックを作成します。暗黙の行トラックと同様に、これらの列トラックのサイズは自動的に調整されます。暗黙の列トラックのサイズは {{cssxref("grid-auto-columns")}} で制御できます。これは {{cssxref("grid-auto-rows")}} と同様に動作します。

この例では、高さ 200px の行トラックが 3 つあるグリッドがあります。 `grid-auto-flow: column;` を宣言して、列ごとに自動的に配置するようにします。 `grid-auto-columns: 300px 100px;` により、作成される列は、すべてのアイテムを収容するのに十分な列トラックがあるまで、幅 `300px` と `100px` が交互に繰り返されます。

```css
.wrapper {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
}
```

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{EmbedLiveSample('Auto-placement_by_column', '500', '650')}}

## 自動配置アイテムの順序

グリッドには、さまざまなアイテムの配置を混在させることができます。アイテムの中には、グリッド上で仕様上定義された位置を持つものもあれば、自動配置されるものもあります。これは便利なことで、グリッド上のアイテムの配置順を文書の順序に反映させれば、すべてのアイテムを配置するために CSS ルールを記述する必要がなくなるかもしれません。仕様書には、[グリッドアイテム配置アルゴリズム](https://drafts.csswg.org/css-grid/#auto-placement-algo)という長い節があります。しかし、ほとんどの場合、アイテムのためのいくつかのルールを覚えておくだけで十分です。

### order が文書順を変更

Gridは、グリッド位置が与えられていないアイテムを、仕様書では "order modified document order" と表現されている通りに配置します。これは、`order` プロパティを使用している場合、DOM の順序ではなく、その順序でアイテムが配置されることを意味します。それ以外の場合は、既定では文書のソースに入力された順に配置されます。

### 配置プロパティのあるアイテム

グリッドはまず、位置を指定したアイテムを配置します。以下の例では、 12 個のグリッドアイテムがあります。アイテム 2 とアイテム 5 は、グリッド上にラインベースで配置されています。これらのアイテムが配置されると、他のアイテムが自動的にスペースに配置されるのがわかります。自動配置されたアイテムは、 DOM順に配置されたアイテムの前に配置され、前に配置されたアイテムの位置より後に開始されることはありません。

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample('Items_with_placement_properties', '500', '500')}}

### 複数のトラックにまたがるアイテムの扱い

自動配置を利用しながら、配置プロパティを使用することができます。次の例では、奇数のアイテムが行と列の両方で 2 つのトラックにまたがるように設定することで、レイアウトを追加しています。これには {{cssxref("grid-column-end")}} と {{cssxref("grid-row-end")}} プロパティを使用し、その値を `span 2` に設定しています。これにより、アイテムの先頭の線は自動配置で設定され、末尾の線は 2 つのトラックにまたがることになります。

グリッドに隙間ができると、自動配置されたアイテムがトラックに入らない場合、アイテムが入るスペースが見つかるまで次の行に移動するのがわかります。

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample('Deal_with_items_that_span_tracks', '500', '800')}}

### 溝を埋める

これまでのところ、特別に配置したアイテムを除いて、グリッドは常に前進し、アイテムを DOM 順に並べています。これは一般的には望ましいことです。例えば、フォームをレイアウトする場合、隙間を埋めるためにラベルやフィールドがごちゃごちゃになってしまうのは避けたいものです。しかし、時には、論理的な順序ではないものをレイアウトすることがあり、隙間のないレイアウトを作成したいことがあります。

そのためには、コンテナーにプロパティ {{cssxref("grid-auto-flow")}} を `dense` の値で追加します。これは、フローの順番を `column` に変更するときに使用するプロパティと同じなので、列で作業する場合は、両方の値 `grid-auto-flow: column dense` を追加します。

こうしておくと、グリッドは隙間を埋め戻します。グリッド内を移動すると、以前と同じように隙間を残しますが、前の隙間に入るアイテムが見つかると、それをピックアップして DOM 順から外して隙間に入れます。グリッドの他の並べ替えと同様に、これは論理的な順序を変更するものではありません。例えば、タブの順序は文書の順序に従います。グリッドレイアウトのアクセシビリティの問題については[グリッドレイアウトとアクセシビリティガイド](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility)を参照してください。

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
  grid-auto-flow: dense;
}
```

{{EmbedLiveSample('Filling_in_the_gaps', '500', '680')}}

### 無名のグリッドアイテム

仕様書には、無名のグリッドアイテムについての記述があります。これは、グリッドコンテナーの中に、他の要素に包まれていない文字列がある場合に作成されます。下の例では、クラスが `grid` の親を `display: grid` に設定したと仮定して、 3 つのグリッドアイテムがあります。最初のアイテムは無名のアイテムで、周囲にマークアップがないため、常に自動配置のルールで処理されます。他の 2 つは、 div で囲まれたグリッドアイテムで、自動配置されるか、配置メソッドを使ってグリッドに配置することができます。

```html
<div class="grid">
  この文字列は無名のアイテムになります。
  <div>グリッドアイテムです</div>
  <div>グリッドアイテムです</div>
</div>
```

無名のアイテムは、ターゲットにする方法がないため、常に自動配置されます。そのため、何らかの理由で囲まれていないされていないテキストがグリッド内にある場合、自動配置ルールに従って自動配置されるため、予期せぬ場所に表示される可能性があります。

### auto-placement の用途

自動配置は、アイテムのコレクションがある場合に便利です。例えば、写真のギャラリーや製品リストなど、論理的な順序になっていないアイテムがあるかもしれません。そのような場合には、高密度パッキングモードを使ってグリッドの穴を埋めることができます。画像ギャラリーの例では、横向きの画像と縦向きの画像があります。横長の画像は、クラスを `landscape` に設定して、2 列のトラックにまたがるようにしています。そして、 `grid-auto-flow: dense` を使用して、密集したグリッドを作成しています。

この `grid-auto-flow: dense` の行を削除してみると、内容が並べなおされてレイアウトに隙間ができるのがわかります。

```html live-sample___autoplacement
<ul class="wrapper">
  <li>
    <img
      alt="A colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Three hot air balloons against a clear sky, as seen from the ground"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Three hot air balloons against a clear sky, as seen from the ground"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Three hot air balloons against a clear sky, as seen from the ground"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li>
    <img
      alt="A colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
  <li>
    <img
      alt="A colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
</ul>
```

```css hidden live-sample___autoplacement
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  list-style: none;
  margin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wrapper li {
  border: 1px solid #cccccc;
}

.wrapper li img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

```css live-sample___autoplacement
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;
}

.wrapper li.landscape {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("autoplacement", "", "500px")}}

自動配置は、論理的な順序を持つインターフェイスアイテムを配置する際にも役立ちます。その例が次の例の定義リストです。定義リストはスタイル付けするのに興味深い課題です。平坦であり、 `dt` と `dd` のアイテムのグループを包むものが何もないためです。この例では、自動配置でアイテムを配置していますが、列 1 では `dt`、列 2 では `dd` で始まるクラスを用意しています。これにより、用語がいくつあっても、片方に用語、片方に定義を配置することができます。

```css hidden live-sample___use-cases-for-auto-placement
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html live-sample___use-cases-for-auto-placement
<div class="wrapper">
  <dl>
    <dt>哺乳類</dt>
    <dd>猫</dd>
    <dd>犬</dd>
    <dd>鼠</dd>
    <dt>魚類</dt>
    <dd>グッピー</dd>
    <dt>鳥類</dt>
    <dd>ハクセキレイ</dd>
    <dd>フクロウ</dd>
  </dl>
</div>
```

```css live-sample___use-cases-for-auto-placement
dl {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 300px;
  margin: 1em;
  line-height: 1.4;
}
dt {
  grid-column: 1;
  font-weight: bold;
}
dd {
  grid-column: 2;
}
```

{{EmbedLiveSample('use-cases-for-auto-placement', '500', '230')}}

## auto-placement では（まだ）できないこと

よく質問として出てくることがいくつかあります。現在のところ、グリッドのすべてのセルをアイテムでターゲットするようなことはできません。グリッド上の名前付きラインに関する前回のガイドに従った場合、関連する問題がすでに思い浮かぶかもしれません。それは、「"n" という名前の次の行に対してアイテムを自動配置し、グリッドは他の行をスキップする」というルールを定義することです。 CSSWG の GitHub リポジトリーに[これに関する問題提起](https://github.com/w3c/csswg-drafts/issues/796)がありますので、自分の用途を追加してみてはいかがでしょうか。

自動配置やグリッドレイアウトの他の部分について、独自の用途を思いつくかもしれません。そのような場合には、用途を解決するための課題として提起するか、既存の課題に追加してください。これにより、将来のバージョンの仕様をより良いものにすることができます。
