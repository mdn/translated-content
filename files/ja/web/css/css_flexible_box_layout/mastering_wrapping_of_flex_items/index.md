---
title: フレックスアイテムの折り返しをマスターする
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

フレックスボックスは一次元のレイアウトツールとして設計されており、アイテムを単一の行または列として扱います（両方同時ではありません）。しかし、フレックスアイテムを改行し、 {{cssxref("flex-direction")}} が `row` の場合は新しい行を、 `flex-direction` が `column` の場合は新しい列を生成することができます。このガイドでは、フレックスボックスの折り返しについて、何のために設計されているのか、どのような場合にフレックスボックスより [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)が必要になるかを説明します。

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

> 「フレックスアイテムに visibility:collapse を指定すると、折り畳まれたフレックスアイテムになり、table-row や table-column の visibility:collapse と同様の効果が得られます。折り畳まれたフレックス アイテムはレンダリングから完全に削除されますが、フレックス行の交差軸の寸法を安定させる「支柱」が残ります。したがって、フレックスコンテナーにフレックス行が 1 つしかない場合、アイテムの折り畳み状態を動的に変化させると、フレックスコンテナーの主軸の寸法が変更されることがありますが、交差軸の寸法には影響しないことが保証されているため、ページの残りのレイアウトが「ぐらつく」ことはありません。ただし、フレックスの行の折り返しは折り畳み後に再実行されるため、複数の行を持つフレックスコンテナーの交差軸の寸法は変更される場合もあれば、変更されない場合もあります。" - [Collapsed items](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

この動作は、 JavaScript を使用してフレックスアイテムを対象にし、コンテンツの表示・非表示を行う場合などに便利です。仕様書の例では、そのようなパターンの一つを示しています。

次のライブサンプルでは、折り返しのないフレックスコンテナーを使用しています。3 番目のアイテムは他のアイテムよりも内容物が多いのですが、 `visibility: collapse` に設定されているため、フレックスコンテナーはこのアイテムを表示するために必要な高さの*支柱*を保持しています。CSS から `visibility: collapse` を削除したり、値を `visible` に変更したりすると、アイテムが現れ、折り畳まれていないアイテムに空間が再分配されますが、フレックスコンテナーの高さは変わりません。

> [!NOTE]
> Chrome や Safari では折りたたまれている部分は非表示として扱われるため、以下の 2 つの例は Firefox を使用してください。

```html live-sample___visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="hide">Three <br />has <br />extra <br />text</div>
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
.hide {
  visibility: collapse;
}
```

{{EmbedLiveSample("visibility-collapse")}}

しかし、複数行のフレックスコンテナーを扱う場合は、折り返しが折り返しの後に再実行されることを理解する必要があります。つまり、ブラウザーは折り畳まれたアイテムがインライン方向に残した新しい空間を考慮して、折り返しの動作を再実行する必要があります。

つまり、アイテムが最初の行とは別の行になってしまう可能性があるのです。アイテムを表示したり隠したりすると、アイテムが別の行になってしまうこともあります。

次のライブサンプルでは、この動作を作成しました。折り畳まれたアイテムの位置に基づいて、引き伸ばされている行が変化している様子がわかります。2 番目のアイテムにさらにコンテンツを追加すると、十分な長さになった時点で行が変更されます。その結果、一番上の行は、テキストの 1 行分の高さにしかなりません。

```html live-sample___wrapped-visibility-collapse
<div class="box">
  <div>One</div>
  <div>Add more text to this box to make it grow</div>
  <div class="hide">Three <br />has <br />extra <br />text</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
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
}
.hide {
  visibility: collapse;
}
```

{{EmbedLiveSample("wrapped-visibility-collapse")}}

これによりレイアウトに問題が生じる場合は、構造を見直す必要があるかもしれません。たとえば、各行を別々のフレックスコンテナーに入れて、行がずれないようにするなどです。

### `visibility: hidden` と `display: none` の使用

上のライブサンプルにおいて、 `visiblity: collapse` の代わりに `visibility: hidden` または `display: none` を使用してみてください。 `visibility: hidden` を使用すると、アイテムは見えなくなりますが、ボックスは書式構造内に保持されるので、レイアウトの一部であるかのように動作します。
`display: none` を使用すると、項目は完全に書式構造から除去されます。見えないだけでなく、構造も除去されます。これはカウンターがそれを無視し、トランジションなどのことが実行されないことを意味しています。
