---
title: サブグリッド
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}}

CSS グリッドレイアウトのレベル 2 は、 `subgrid` の値を {{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} に追加しています。このガイドでは、サブグリッドでできること、いくつかの使用例と、この機能で解決されるデザインパターンを詳述します。

## サブグリッドの導入

グリッドコンテナーに `display: grid` を追加すると、その直下の子だけがグリッドアイテムになり、作成したグリッド上に置くことができます。これらグリッドアイテムの子要素は通常フローで表示されます。

グリッドアイテムをグリッドコンテナーにすることにより、グリッドを「入れ子」にすることができます。しかし、これらのグリッドは互いの親グリッドに依存し、親グリッドのサイズ変更に追従しません。これでは、入れ子のグリッドアイテムをメイングリッドで整列させることが難しくなります。

`subgrid` の値を `grid-template-columns` および `grid-template-rows` の両方またはどちらかに設定すると、新しいトラックリストを作成するのではなく、入れ子のグリッドが親要素上で定義されたトラックを利用します。

例えば、`grid-template-columns: subgrid` を使用し、入れ子のグリッドが親のトラック 3 列にまたがる場合、入れ子のグリッドは、親グリッドのサイズと同じトラック 3 列分になります。その列の間隔は継承されますが、異なる {{cssxref("gap")}} 値で上書きすることもできます。線名は親からサブグリッドへ渡されますが、サブグリッドが独自の線名を定義することもできます。

## 列のサブグリッド

以下の例では、幅 `1fr` の 9 列のトラックで高さが最低 100px の 4 行のグリッドレイアウトを定義しています。

このグリッドの 2 から 7 番の列の線、2 から 4 番の行の線に `.item` を置き、これをグリッドアイテムからグリッドコンテナーにします。これをサブグリッドである列トラックに与え、通常の行を定義します。アイテムの幅が 5 列のトラックにまたがるので、サブグリッドも 5 列のトラックを持ちます。次に、このグリッド上に `.subitem` を置きます。

この例の行はサブグリッドではないため、通常の入れ子のグリッドとして振る舞います。親グリッド領域は、この入れ子のグリッドが十分入る大きさに拡張されます。

```html live-sample___columns
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___columns
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___columns
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, 80px);
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("columns", "", "450px")}}

サブグリッド内の線番号は再び 1 番から始まるので注意してください。サブグリッド内の列線 1 番は、サブグリッドの最初の線です。サブグリッド化された要素は親グリッドの線番号を継承しません。これは、メイングリッド上の異なる位置に置かれるコンポーネントを安全に配置できることを意味し、このコンポーネント上の線番号が常に同じであることが分かります。

## 行のサブグリッド

次の例は、上記と同じ設定で、`grid-template-rows` の値に `subgrid` を使用し、明示的に列トラックを定義しています。このため、列トラックが通常の入れ子のグリッドとして振る舞い、行が子スパンの 2 トラックに紐づけられます。

```html live-sample___rows
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___rows
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___rows
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("rows", "", "450px")}}

## 列と行のサブグリッド

以下の例のように、行と列の両方をサブグリッドとして定義できます。これは、サブグリッドが親グリッドの行と列両方のトラックの数に紐づけられることを意味します。

```html live-sample___both
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___both
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___both
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("both", "", "450px")}}

### サブグリッド化された範囲に暗黙のグリッドはない

アイテムを自動配置する必要があり、アイテムの数がわからない場合は、サブグリッドを作成するときに、それらのアイテムを保持するために新しい行が作成されないように注意してください。

次の例を見てください。上の例と同じ親子グリッドを使用しています。しかし、サブグリッド内に 12 個のアイテムがあり、 10 個のグリッドセルに自動配置しようとしています。サブグリッドは両方の次元にあるので、余分な 2 つのアイテムの行き場がなく、仕様で定義されているように、それらはグリッドの最後のトラックに入ります。

```html live-sample___no-implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___no-implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: #fff;
  border-radius: 5px;
}
```

```css live-sample___no-implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

{{EmbedLiveSample("no-implicit", "", "440px")}}

`grid-template-rows` の値を削除すると、通常の明示的なトラックが作成できるようになります。とはいえ、これらは親のトラックに沿って並ばないため、その数に応じて作成する必要があります。

```html live-sample___implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: #fff;
  border-radius: 5px;
}
```

```css live-sample___implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample("implicit", "", "520px")}}

## gap プロパティとサブグリッド

親グリッドに {{cssxref("gap")}}, {{cssxref("column-gap")}}, {{cssxref("row-gap")}} のいずれかが指定されている場合、これらはサブグリッドにも渡され、トラックの間隔が親と同じになります。状況によっては、サブグリッドのトラックの間隔を親と異なるものに設定したい場合があるでしょう。これは、サブグリッドのグリッドコンテナーに `gap-*` プロパティを使用することにより達成できます。

これは以下の例で確認できます。親グリッドは 20px の行間隔と列間隔を持ち、サブグリッドは `row-gap` の値に `0` を設定しています。

```html live-sample___gap
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___gap
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___gap
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  row-gap: 0;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: 2;
  grid-row: 1;
}
```

{{EmbedLiveSample("gap", "", "500px")}}

これを Firefox のグリッドインスペクターで調査すると、グリッドの線が gap の中央に正しく描かれていることが分るでしょう。gap の値を 0 に設定した場合、同様の動作で要素に負のマージンが適用され、gap からアイテムまでの空間が与えられます。

![サブグリッドの row-gap が 0 に設定されていると、小さい方のアイテムがギャップに表示されます。](gap.png)

## 名前付きグリッド線

CSS のグリッドを利用する時、そのグリッドの線に名前を付けて、線番号ではなく、これらの名前でアイテムを配置することができます。親グリッドの線名がサブグリッドに渡されるので、それらを使用してアイテムを配置できます。以下の例では、親の線に `col-start` および `col-end` という名前を付けました。これらはサブアイテムの配置に使用されます。

```html live-sample___line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___line-names
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("line-names", "", "500px")}}

また、サブグリッドにも線名を指定することができます。`subgrid` キーワードの後の線のリストに、角括弧で囲まれた線名を追加します。サブグリッドに 4 本の線がある場合、 `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` という構文ですべての線に名前を付けることができます。

サブグリッドに指定された線は親で指定された任意の線に追加されるため、その線名を親とサブグリッドのどちらでも利用できます。デモンストレーションするため、以下の例で、アイテムの一つは親線を利用して配置し、もう一つはサブグリッドの線を利用しています。

```html live-sample___adding-line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___adding-line-names
* {
  box-sizing: border-box;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___adding-line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid [sub-a] [sub-b] [sub-c] [sub-d] [sub-e] [sub-f];
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: sub-b / sub-d;
  grid-row: 1;
}
```

{{EmbedLiveSample("adding-line-names", "", "500px")}}

## サブグリッドの利用

サブグリッド内にうまく収まらないアイテムを心配する必要なく、サブグリッドは入れ子のグリッドにとてもよく似た動作をします。ただ一つ違うところは、サブグリッドのトラックのサイズ変更が親グリッドで設定されることです。どの入れ子のグリッドでもそうであったように、サブグリッド内のコンテンツのサイズがトラックのサイズを変更することがあり、コンテンツがトラックのサイズ変更に影響することを許すメソッドが用いられることが想定されます。このような場合、例えばサイズが自動調整される行トラックは、コンテンツがメイングリッドとサブグリッド内に収まるように大きくなります。

subgrid 値は、通常の入れ子のグリッドとほとんど同じ方法で動作するため、これらを切り替えるのは簡単です。例えば、暗黙的な行のグリッドが必要になったときにすべきことは、`grid-template-rows` の `subgrid` 値を削除し、あるいは暗黙的なトラックのサイズ変更を制御するために `grid-auto-rows` に値を与えることだけです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 動画: [Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) と [Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4)
- [Hello subgrid!](https://noti.st/rachelandrew/i6gUcF/hello-subgrid) (CSSConf.eu)
