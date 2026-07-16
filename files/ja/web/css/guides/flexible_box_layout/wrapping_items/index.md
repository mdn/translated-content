---
title: フレックスアイテムの折り返しをマスターする
short-title: フレックスアイテムの折り返し
slug: Web/CSS/Guides/Flexible_box_layout/Wrapping_items
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

フレックスボックスは一次元のレイアウトツールとして設計されており、アイテムを単一の行または列として扱います（両方同時ではありません）。しかし、フレックスアイテムを改行し、 {{cssxref("flex-direction")}} が `row` の場合は新しい行を、 `flex-direction` が `column` の場合は新しい列を生成することができます。このガイドでは、フレックスボックスの折り返しについて、何のために設計されているのか、どのような場合にフレックスボックスより [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)が必要になるかを説明します。

## 折り返しを行う

{{cssxref("flex-wrap")}} プロパティの初期値は `nowrap` です。つまり、一連のフレックスアイテムがフレックスコンテナーと比べて幅が広くなると、はみ出してしまいます。幅が広いときに折り返すようにしたい場合は、`flex-wrap` プロパティを追加して `wrap` の値を設定するか、一括指定の {{cssxref("flex-flow")}} を使用して `row wrap` または `column wrap` の値を設定する必要があります。そうするとアイテムは、コンテナーをあふれる場合に改行するようになります。

この例では、伸長・縮小可能な 10 個のフレックスアイテムがあり、 `flex-basis` は `160px` です。 160 ピクセルのアイテムのある行にもう配置する空間がなくなった時点で、新しいフレックス行が作成されます。すべてのアイテムが配置されるまで、必要に応じて改行が生成されます。アイテムが伸長するにつれ、展開された行が完全に埋め尽くされます。最終行にアイテムが 1 つだけしかない場合、その行全体がそのアイテムで埋め尽くされます。

```html live-sample___row-wrap
<div class="box">
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
</div>
```

```css live-sample___row-wrap
.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-wrap")}}

フレックス列でも同じことが起こります。 列を折り返して新しい列を作成するには、コンテナーに高さを指定する必要があります。 列の場合、アイテムは垂直方向に伸縮し、各列を完全に埋めます。

```html live-sample___column-wrap
<div class="box">
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
</div>
```

```css live-sample___column-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 80px;
}
```

{{EmbedLiveSample("column-wrap", "", "320px")}}

## 折り返しと flex-direction

折り返しは、`flex-direction` と組み合わせることで、期待通りの効果を発揮します。`flex-direction` が `row-reverse` に設定されている場合、アイテムはコンテナーの端から始まり、逆順に並んでいきます。

```html live-sample___row-reverse-wrap
<div class="box">
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
</div>
```

```css live-sample___row-reverse-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  width: 500px;
}
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-reverse-wrap")}}

なお、反転は行内方向にのみ行われます。右から開始して 2 行目に進み、再び右から開始します。下から開始してコンテナーを上がっていくという、両方の方向で反転しているわけではありません。

## 一次元レイアウトの説明

上の例で見たように、アイテムが伸縮することが許されていれば、最後の行や列のアイテムが少なくなると、それらのアイテムは空いた空間を埋めるように伸びていきます。

フレックスボックスには、ある行のアイテムとその上の行のアイテムの位置を揃える機能はありません。各フレックス行は新しいフレックスコンテナーのように機能します。これが主軸の空間分配を行います。アイテムが 1 つだけで、そのアイテムが成長することが許可されている場合、1 つのアイテムのフレックスコンテナーがある場合と同様に、その軸いっぱいに表示されます。二次元でのレイアウトが必要な場合は、おそらくグリッドレイアウトを使用します。

この例では、 CSS グリッドレイアウトを使用して、収まるだけ多くの `160px` 以上の列を持つレイアウトを作成し、余った空間をすべての列に分配することで、その違いを示しています。 HTML は、上記の[フレックスボックスで折り返された行](#折り返しを行う)の例と同じものを使用しますが、 `display: grid` を設定します。 フレックスボックスの外では効果のない {{cssxref("flex")}} 一括指定の代わりに、アイテムの最小幅とコンテナー上で直接成長する能力を {{cssxref("grid-template-columns")}} で設定します。 CSS グリッドを使用すると、最後のアイテムはグリッドセル内に留まります。最後の行のアイテムが少ない場合でも、グリッドアイテムは伸張しません。

```html live-sample___grid-example
<div class="box">
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
</div>
```

```css live-sample___grid-example
.box {
  border: 2px dotted rgb(96 139 168);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 500px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-example")}}

これが一次元と二次元のレイアウトの違いです。フレックスボックスのような一次元レイアウト方式では、行または列のみを制御します。グリッドのような二次元のグリッドレイアウトでは、両方を同時に制御します。行ごとに空間を分配したい場合は、フレックスボックスを使用してください。そうでない場合は、 CSS グリッドを使用してください。

## フレックスボックスベースのグリッドシステムはどのように機能するか

フレックスボックスベースのレイアウトはグリッドシステムとして強制的に整列させることができますが、それはフレックスボックスの意図通りの使い方ではありません。フレックスアイテムに `flex-basis` で、または `flex-basis` を `auto` してアイテム自体に幅を追加することで、フレックスアイテムにパーセント値の幅を割り当てると、二次元のレイアウトのような印象を与えることができます。

ここでは、`flex-grow` と `flex-shrink` を `0` に設定して、柔軟性のないフレックスアイテムを作っています。柔軟性はパーセント値で制御しています。

```html live-sample___flex-grid
<div class="box">
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
</div>
```

```css live-sample___flex-grid
* {
  box-sizing: border-box;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 0 0 33.3333%;
}
```

{{EmbedLiveSample("flex-grid")}}

このテクニックを用いると、フレックスアイテムを交差軸上に整列させることができます。しかし、この方法でフレックスアイテムに幅を追加したり、スペースを取るために空のフレックスアイテムを追加している場合は、そのコンポーネントを CSS グリッドレイアウトに変更した方がよいことを示します。

## アイテム間のすき間の生成

フレックスアイテム間にすき間または溝を作成するには、 {{CSSXref("gap")}} プロパティをフレックスコンテナーに直接使用することで、その子のフレックスアイテム間に固定幅のすき間を生成することができます。 `gap` プロパティは、 `row-gap` と `column-gap` の一括指定です。これらのプロパティは、グリッド、フレックス、段組みレイアウト内の行と列の間のすき間の寸法を指定します。

アイテムの間に空間を追加することができるのは `gap` プロパティだけではありません。マージン、パディング、`justify-content`、`align-content` もすき間の寸法を大きくすることができ、実際のすき間の寸法に影響を与えます。

両方の軸で `gap` プロパティが `margin` とどのように異なるかを確認するには、コンテナー `.box` の `gap` 値を変更し、下記スタイルシートの `.box > *` ルールに `margin` 値を追加してみてください。リセットボタンをクリックすると前回の値に戻ります。

```html live-sample___gaps
<div class="wrapper">
  <div class="box">
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
  </div>
</div>
```

```css live-sample___gaps
.wrapper {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.box > * {
  flex: 1 1 160px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gaps", "", "220px")}}

## アイテムの折り畳み

フレックスボックスの仕様では、アイテムに `visibility: collapse` を設定することで、フレックスアイテムが折り畳まれた場合の動作が詳細に規定されています。 {{cssxref("visibility")}} プロパティの MDN ドキュメントを参照してください。仕様では、以下のように動作を説明しています。

> 「フレックスアイテムに `visibility: collapse` を指定すると、折り畳まれたフレックスアイテムになり、table-row や table-column の `visibility: collapse` と同様の効果が得られます。折り畳まれたフレックス アイテムはレンダリングから完全に削除されますが、フレックス行の交差軸の寸法を安定させる「支柱」が残ります。したがって、フレックスコンテナーにフレックス行が 1 つしかない場合、アイテムの折り畳み状態を動的に変化させると、フレックスコンテナーの主軸の寸法が変更されることがありますが、交差軸の寸法には影響しないことが保証されているため、ページの残りのレイアウトが「ぐらつく」ことはありません。ただし、フレックスの行の折り返しは折り畳み後に再実行されるため、複数の行を持つフレックスコンテナーの交差軸の寸法は変更される場合もあれば、変更されない場合もあります。" - [Collapsed items](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

この動作は、 JavaScript を使用してフレックスアイテムを対象にし、コンテンツの表示・非表示を行う場合などに便利です。仕様書の例では、そのようなパターンの一つを示しています。

以下のライブ例では、折り返しのないフレックスコンテナー内に、等しいサイズに設定された 3 つのフレックスアイテムを含む行が含まれています。3 番目のアイテムには複数行のコンテンツがあり、コンテナーを拡大します。`align-items` のデフォルト値は `normal` です。フレックスアイテムの場合、`normal` は `stretch` と同様に動作するため、デフォルトではすべてのアイテムがコンテナーの交差軸サイズの高さを埋めるように伸縮します。

交差軸サイズを生成するアイテムは `visibility: collapse` に設定されており、これによりフレックスアイテムが折りたたまれたり非表示になったりします（ブラウザーによって異なります）。いずれの場合でも、フレックスコンテナーは非表示であっても交差軸サイズの支柱を保持します。これにより、アイテムが表示された場合でも、単一行フレックスコンテナーの交差軸サイズは変化しません。CSSから`visibility: collapse`を削除するか、値を`visible`に変更すると、そのアイテムが表示され、主軸サイズの余白は非折り畳みアイテム間で再分配されますが、交差軸サイズは変更されません。

> [!NOTE]
> 以下の例では Firefox を使用してください。他の主要なブラウザーでは `collapse` を `hidden` として扱います。

```html-nolint hidden live-sample___visibility-collapse
<p>
  <label><input type="checkbox" /> <code>visibility</code> の値の切り替え</label>
</p>
```

```html live-sample___visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="collapse">Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___visibility-collapse
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  width: 600px;
}
.box > * {
  flex: 1 1 200px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.collapse {
  visibility: collapse;
}
```

```css hidden live-sample___visibility-collapse
p:has(:checked) + div .collapse {
  visibility: visible;
}
```

{{EmbedLiveSample("visibility-collapse")}}

上の例は単一行で折り返しなしのフレックスコンテナーであり、幅は `600px` に固定されています。そのため、アイテムが表示されているか折り畳まれていても、幅は同じです。重要なのは、コンテナーは折り畳まれたアイテムの横方向サイズ（交差軸サイズ）の支柱を保持しますが、主軸サイズ（縦方向サイズ）は保持されないという点です。複数行フレックスコンテナーは、折り畳まれたアイテムをレンダリングから除外した後、アイテムを再配置します。折り畳まれたアイテムが主方向に生み出す新たな空間により、折り畳まれていないアイテムが、折り畳まれていた場合とは異なる行に配置される可能性があります。各行は独立した単一行フレックスコンテナーのようにレイアウトされ、折り畳み後に構成が変化するため、その交差軸サイズも変化する可能性があります。

次の例はこの動作を示しています。3 番目のフレックスアイテムは折りたたまれているため、主軸方向の空間を一切占有しません（インラインサイズは `0`）。折り畳まれた状態では、その支柱は 4 番目のアイテムの後の最初の行に位置し、最初の行は 3 番目のアイテムが本来持つはずだった 3 行分のテキストを収めるのに十分な高さがあります。次に、このアイテムの折りたたみを解除すると（例：`collapse` クラスを削除）、最初の行に 5 番目のアイテムを配置する十分な横方向の空間がなくなるため、5 番目のアイテムは 2 行目に移動します。これにより、2 行目は新しいメンバーの 2 行分のテキストを収めるために高さが伸び、最後のフレックスアイテムは新しい行に押し出されます。2 行目が長くなり、新たに3行目が追加されたことで、フレックスコンテナの高さは以前よりも大幅に増加します。

> [!NOTE]
> 以下の例では Firefox を使用してください。他の主要なブラウザーでは `collapse` を `hidden` として扱います。

```html hidden live-sample___wrapped-visibility-collapse
<p>
  <label><input type="checkbox" /> Toggle <code>visibility</code> value</label>
</p>
```

```html live-sample___wrapped-visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two is the width of this sentence.</div>
  <div class="collapse">Three <br />is <br />five <br />lines <br />tall.</div>
  <div>Four</div>
  <div>Five<br />Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven is longer</div>
</div>
```

```css live-sample___wrapped-visibility-collapse
.box {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.box > * {
  padding: 10px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 auto;
  min-width: 50px;
}
.collapse {
  visibility: collapse;
}
```

```css hidden live-sample___wrapped-visibility-collapse
p:has(:checked) + div .collapse {
  visibility: visible;
}
```

{{EmbedLiveSample("wrapped-visibility-collapse", "", "300")}}

これによりレイアウトに問題が生じる場合は、構造を見直す必要があるかもしれません。たとえば、各行を別々のフレックスコンテナーに入れて、行がずれないようにするなどです。

### `visibility: hidden` と `display: none` の使用

上のライブサンプルにおいて、 `visiblity: collapse` の代わりに `visibility: hidden` または `display: none` を使用してみてください。 `visibility: hidden` を使用すると、アイテムは見えなくなりますが、ボックスは書式構造内に保持されるので、レイアウトの一部であるかのように動作します。
`display: none` を使用すると、項目は完全に書式構造から除去されます。見えないだけでなく、構造も除去されます。これはカウンターがそれを無視し、トランジションなどのことが実行されないことを意味しています。
