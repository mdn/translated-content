---
title: CSS グリッドレイアウトでの自動配置
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
---

{{CSSRef}}

CSS グリッドレイアウト仕様書には、作成したグリッド上にアイテムを正確に配置する機能に加えて、グリッドを作成したときに子アイテムの一部またはすべてを配置しなかった場合の動作を制御するルールが含まれています。一連のアイテムでグリッドを作成することで、最も簡単な方法で自動配置を確認することができます。アイテムに配置情報を与えない場合、アイテムはグリッド上の各セルに 1 つずつ配置されます。

## 既定の配置

アイテムに配置情報を与えない場合は、アイテムはグリッド上に配置され、各グリッドセルに 1 つずつ配置されます。

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

{{ EmbedLiveSample('Default_placement', '500', '230') }}

## 自動配置の既定のルール

上記の例でわかるように、グリッドを作成すると、すべての子アイテムが各グリッドセルに 1 つずつ配置されます。既定のフローでは、行ごとにアイテムを配置します。グリッドは、それぞれのアイテムを 1 行目のそれぞれのセルに配置します。 `grid-template-rows` プロパティを使用して追加の行を作成した場合は、グリッドはこれらの行にアイテムを配置し続けます。明示的なグリッドにすべてのアイテムを配置するのに十分な行がない場合は、新たに*暗黙の*行が作成されます。

<h3 id="Sizing_rows_in_the_implicit_grid">暗黙のグリッド内での行の大きさ</h3>

暗黙のグリッドで自動的に作成される行の既定値は、大きさが自動になっています。これは、あふれることなく、それらに追加されたコンテンツを含むことを意味します。

しかし、`grid-auto-rows` プロパティを使用することで、これらの行の大きさを制御することができます。例えば、すべての作成された行を 100 ピクセルの高さにするには、次のように使います。

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
  gap: 10px;
  grid-auto-rows: 100px;
}
```

{{ EmbedLiveSample('Sizing_rows_in_the_implicit_grid', '500', '330') }}

<h3 id="Sizing_rows_using_minmax">minmax() を使用した行の大きさの指定</h3>

{{cssxref("minmax()")}} を {{cssxref("grid-auto-rows")}} の値に使用すると、最小サイズでありながら、コンテンツの高さに合わせて成長する行を作成することができます。

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
  <div>
    Four <br />This cell <br />Has extra <br />content. <br />Max is auto
    <br />so the row expands.
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

{{ EmbedLiveSample('Sizing_rows_using_minmax', '500', '330') }}

<h3 id="Sizing_rows_using_a_track_listing">トラックリストを使用した行の高さの指定</h3>

また、トラックリストを渡すこともでき、これは繰り返されます。次のトラックリストでは、最初の暗黙の行トラックを 100 ピクセル、2 番目を `200px` として作成します。これは、暗黙のグリッドに内容物が追加される限り、継続されます。

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

{{ EmbedLiveSample('Sizing_rows_using_a_track_listing', '500', '450') }}

<h3 id="Auto-placement_by_column">列ごとの自動配置</h3>

グリッドにアイテムを列ごとに自動配置させることもできます。 {{cssxref("grid-auto-flow")}} プロパティに `column` という値を指定します。この場合、グリッドは {{cssxref("grid-template-rows")}} を使って定義した行にアイテムを追加します。列が一杯になると、次の明示的な列に移動するか、暗黙的なグリッドに新しい列トラックを作成します。暗黙の行トラックと同様に、これらの列トラックのサイズは自動的に調整されます。暗黙の列トラックのサイズは {{cssxref("grid-auto-columns")}} で制御できますが、これは {{cssxref("grid-auto-rows")}} と同様に動作します。

次の例では、高さ 200 ピクセルの 3 列のトラックを持つグリッドを作成しています。列ごとに自動配置していますが、作成される列は、 300 ピクセルの列幅、 100 ピクセルの列幅となり、すべてのアイテムを配置するのに十分な列トラックができるまで続きます。

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

{{ EmbedLiveSample('Auto-placement_by_column', '500', '700') }}

## 自動配置アイテムの順序

グリッドには複数のアイテムを混在させることができます。グリッド上の位置を指定できるアイテムもあれば、自動配置されるアイテムもあります。これは便利なことで、グリッド上のアイテムの配置順を文書の順序に反映させれば、すべてのアイテムを配置するために CSS ルールを記述する必要がなくなるかもしれません。仕様書には、[グリッドアイテム配置アルゴリズム](https://drafts.csswg.org/css-grid/#auto-placement-algo)という長い節がありますが、ほとんどの場合、アイテムのためのいくつかの簡単なルールを覚えておくだけで十分です。

### order が文書順を変更

Gridは、グリッド位置が与えられていないアイテムを、仕様書では "order modified document order" と表現されている通りに配置します。これは、`order` プロパティを使用している場合、DOM の順序ではなく、その順序でアイテムが配置されることを意味します。それ以外の場合は、既定では文書のソースに入力された順に配置されます。

<h3 id="Items_with_placement_properties">配置プロパティのあるアイテム</h3>

グリッドはまず、位置を指定したアイテムを配置します。以下の例では、 12 個のグリッドアイテムがあります。アイテム 2 とアイテム 5 は、グリッド上にラインベースで配置されています。これらのアイテムが配置されると、他のアイテムが自動的にスペースに配置されるのがわかります。自動配置されたアイテムは、 DOM順に配置されたアイテムの前に配置され、前に配置されたアイテムの位置より後に開始されることはありません。

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

{{ EmbedLiveSample('Items_with_placement_properties', '500', '500') }}

<h3 id="Deal_with_items_that_span_tracks">複数のトラックにまたがるアイテムの扱い</h3>

自動配置を利用しながら、配置プロパティを使用することができます。次の例では、奇数のアイテムが行と列の両方で 2 つのトラックにまたがるように設定することで、レイアウトを追加しています。これには {{cssxref("grid-column-end")}} と {{cssxref("grid-row-end")}} プロパティを使用し、その値を `span 2` に設定しています。これにより、アイテムの先頭の線は自動配置で設定され、末尾の線は 2 つのトラックにまたがることになります。

自動配置されたアイテムの場合、トラックに収まらないアイテムに遭遇すると、アイテムが収まる空間を見つけるまで次々と行を移動するため、グリッドに隙間ができてしまいます。

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

{{ EmbedLiveSample('Deal_with_items_that_span_tracks', '500', '800') }}

<h3 id="Filling_in_the_gaps">溝を埋める</h3>

これまでのところ、特別に配置したアイテムを除いて、グリッドは常に前進し、アイテムを DOM 順に並べています。これは一般的には望ましいことです。例えば、フォームをレイアウトする場合、隙間を埋めるためにラベルやフィールドがごちゃごちゃになってしまうのは避けたいものです。しかし、時には、論理的な順序ではないものをレイアウトすることがあり、隙間のないレイアウトを作成したいことがあります。

そのためには、コンテナーにプロパティ {{cssxref("grid-auto-flow")}} を `dense` の値で追加します。これは、フローの順番を `column` に変更するときに使用するプロパティと同じなので、列で作業する場合は、両方の値 `grid-auto-flow: column dense` を追加します。

グリッドの中を移動すると、以前のように隙間ができますが、以前の隙間に収まるアイテムを見つけると、それを拾って DOM 順から外し、隙間に配置します。グリッド内の他の順序変更と同様に、これは論理的な順序を変更するものではありません。例えば、タブの順序は文書の順序に従います。グリッドレイアウトの潜在的なアクセシビリティの問題については、後のガイドで見ていきますが、視覚的な順序と表示の順序の間に断絶を設ける場合には注意が必要です。

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

{{ EmbedLiveSample('Filling_in_the_gaps', '500', '730') }}

<h3 id="Anonymous_grid_items">無名のグリッドアイテム</h3>

仕様書には、無名のグリッドアイテムについての記述があります。これは、グリッドコンテナーの中に、他の要素に包まれていない文字列がある場合に作成されます。下の例では、クラスが `grid` の親を `display: grid` に設定したと仮定して、 3 つのグリッドアイテムがあります。最初のアイテムは無名のアイテムで、周囲にマークアップがないため、常に自動配置のルールで処理されます。他の 2 つは、 div で囲まれたグリッドアイテムで、自動配置されるか、配置メソッドを使ってグリッドに配置することができます。

```html
<div class="grid">
  この文字列は無名のアイテムになります。
  <div>グリッドアイテムです</div>
  <div>グリッドアイテムです</div>
</div>
```

無名のアイテムは、ターゲットにする方法がないため、常に自動配置されます。そのため、何らかの理由で囲まれていないされていないテキストがグリッド内にある場合、自動配置ルールに従って自動配置されるため、予期せぬ場所に表示される可能性があります。

<h3 id="Use_cases_for_auto-placement">auto-placement の用途</h3>

自動配置は、アイテムのコレクションがある場合に便利です。例えば、写真のギャラリーや製品リストなど、論理的な順序になっていないアイテムがあるかもしれません。そのような場合には、高密度パッキングモードを使ってグリッドの穴を埋めることができます。画像ギャラリーの例では、横向きの画像と縦向きの画像があります。横長の画像は、クラスを `landscape` に設定して、2 列のトラックにまたがるようにしています。そして、 `grid-auto-flow: dense` を使用して、密集したグリッドを作成しています。

この `grid-auto-flow: dense` の行を削除してみると、内容が並べなおされてレイアウトに隙間ができるのがわかります。

{{EmbedGHLiveSample("css-examples/grid/docs/autoplacement.html", '100%', 1200)}}

自動配置は、論理的な順序を持つインターフェイスアイテムを配置する際にも役立ちます。その例が次の例の定義リストです。定義リストはスタイル付けするのに興味深い課題です。平坦であり、 `dt` と `dd` のアイテムのグループを包むものが何もないためです。この例では、自動配置でアイテムを配置していますが、列 1 では `dt`、列 2 では `dd` で始まるクラスを用意しています。これにより、用語がいくつあっても、片方に用語、片方に定義を配置することができます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html
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

```css
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

{{ EmbedLiveSample('Use_cases_for_auto-placement', '500', '230') }}

<h2 id="What_can't_we_do_with_auto-placement_yet">auto-placement では（まだ）できないこと</h2>

よく疑問に思うことがいくつかあります。現在のところ、グリッドのすべてのセルにアイテムを配置するようなことはできません。前回の「グリッド上の名前付きライン」のガイドをご覧になった方は、関連する問題をすでに思い浮かべているかもしれません。 CSSWG の GitHub リポジトリに[これに関する問題提起](https://github.com/w3c/csswg-drafts/issues/796)がありますので、自分の用途を追加してみてはいかがでしょうか。

自動配置やグリッドレイアウトの他の部分について、独自の用途を思いつくかもしれません。そのような場合には、用途を解決するための課題として提起するか、既存の課題に追加してください。これにより、将来のバージョンの仕様をより良いものにすることができます。
