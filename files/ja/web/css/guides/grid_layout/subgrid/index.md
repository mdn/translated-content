---
title: サブグリッド
slug: Web/CSS/Guides/Grid_layout/Subgrid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュールは、 `subgrid` の値を {{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} に追加しています。このガイドでは、サブグリッドでできること、いくつかの使用例と、この機能で解決されるデザインパターンを詳述します。

## サブグリッドの導入

グリッドコンテナーに [`display: grid`](/ja/docs/Web/CSS/Reference/Properties/display) を追加すると、その直下の子だけがグリッドアイテムになり、作成したグリッド上に置くことができます。これらグリッドアイテムの子要素は通常フローで表示されます。

グリッドアイテムをグリッドコンテナーにすることにより、グリッドを「入れ子」にすることができます。しかし、これらのグリッドは互いの親グリッドに依存し、親グリッドのサイズ変更に追従しません。これでは、入れ子のグリッドアイテムをメイングリッドで整列させることが難しくなります。

`subgrid` の値を `grid-template-columns` および `grid-template-rows` の両方またはどちらかに設定すると、新しいトラックリストを作成するのではなく、入れ子のグリッドが親要素上で定義されたトラックを利用します。

例えば、`grid-template-columns: subgrid` を使用し、入れ子のグリッドが親のトラック 3 列にまたがる場合、入れ子のグリッドは、親グリッドのサイズと同じトラック 3 列分になります。その列の[溝](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#溝)は継承されますが、異なる {{cssxref("gap")}} 値で上書きすることもできます。[線名](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)は親からサブグリッドへ渡されますが、サブグリッドが独自の線名を定義することもできます。

## 列のサブグリッド

以下の例では、幅 `1fr` の 9 列のトラックで高さが最低 100px の 4 行のグリッドレイアウトを定義しています。

`.item` は、列方向の 2 本目から 7 本目、行方向の 2 本目から 4 本目の間に配置されます。このグリッドアイテムは、`display: grid` を使用してグリッドとして指定され、サブグリッドである列のトラック（`grid-template-columns: subgrid`）と通常定義された行を指定することで、サブグリッドとして定義されます。サブグリッドは 5 列のトラックにまたがっているため、5 列のトラックを保持しています。

`.item` はサブグリッドであるため、たとえ `.subitem` が外側の `.grid` の直接の子ではない場合でも、その外側のグリッドに配置することができ、その列は外側のグリッドの列と揃えます。行はサブグリッドではないため、通常の入れ子グリッドと同じように動作します。親グリッドのグリッド領域は、この入れ子グリッドを収容できる大きさまで展開されます。

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

サブグリッド内の線番号は再び 1 番から始まるので注意してください。サブグリッド内の列線 1 番は、サブグリッドの最初の線です。サブグリッド化された要素は親グリッドの線番号を継承しません。これは、メイングリッド上の異なる位置に置かれるコンポーネントを安全に配置できることを意味し、このコンポーネント上の線番号が常に同じであることが分かります。

{{EmbedLiveSample("columns", "", "450px")}}

## 行のサブグリッド

この例では、上記と同じ HTML を使用していますが、ここでは、`subgrid` が `grid-template-rows` の値として適用され、列の予定が明示的に定義されています。この場合、列の予定は通常の入れ子グリッドとして動作しますが、行は `.item` がまたがる 2 つのトラックに結び付けられます。

```html live-sample___rows hidden
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

この例では、行と列の両方がサブグリッドとして定義されており、サブグリッドは親グリッドの予定の両方のサイズに結び付けられています。

```html live-sample___both hidden
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

次の例を見てみましょう。この例では、上記の例と同じ親グリッドと子グリッドが使用されています。サブグリッド内には 12 個のアイテムがあり、10 個のグリッドセルに自動配置されています。サブグリッドは両方のサイズにあるため、余分な 2 個のアイテムを配置する場所がないため、グリッドの最後のトラックに配置されます。これは、仕様で定義されている動作です。

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
  color: white;
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

`grid-template-rows` の値を除去すると、暗黙のトラックが定期的に作成され、要求された行数が作成されます。これらは親のトラックとは線が揃いません。

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
  color: white;
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

親で指定された {{cssxref("gap")}}、{{cssxref("column-gap")}}、{{cssxref("row-gap")}} の値は、サブグリッドに渡され、親と同じトラック間の間隔が作成されます。この既定の動作は、サブグリッドコンテナーに `gap-*` プロパティを適用することで上書きできます。

この例では、親グリッドは `20px` の行間隔と列間隔を持ち、サブグリッドは `row-gap` の値に `0` を設定しています。

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

開発者ツールのグリッドインスペクターでこれを確認すると、サブグリッドの線がギャップの中心にあることがわかります。ギャップを `0` に設定すると、要素に負のマージンを適用したのと同様の方法で、ギャップの空間がアイテムに戻されます。

![サブグリッドの row-gap が 0 に設定されていると、小さい方のアイテムがギャップに表示されます。](gap.png)

## 名前付きグリッド線

CSS のグリッドを利用する時、その[グリッド線に名前を付けて](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)、線番号ではなく、これらの名前でアイテムを配置することができます。親グリッドの線名がサブグリッドに渡されるので、それらを使用してアイテムを配置できます。以下の例では、親の線に `col-start` および `col-end` という名前を付けました。これらはサブアイテムの配置に使用されます。

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

また、サブグリッドにも線名を指定することができます。`subgrid` キーワードの後の線のリストに、角括弧で囲まれた線名を追加します。例えば、サブグリッドに 4 本の線がある場合、 `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` という構文ですべての線に名前を付けることができます。

サブグリッドで指定した行は、親で指定した行に追加されるため、どちらか一方、あるいは両方を使用することができます。この例では、親行を使用して 1 つのアイテムが、サブグリッド行を使用して 1 つのアイテムが、それぞれ追加されています。

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

サブグリッドは入れ子のグリッドにとてもよく似た動作をします。ただ一つ違うところは、サブグリッドのトラックのサイズ変更が親グリッドで設定されることです。どの入れ子のグリッドでもそうであったように、サブグリッド内のコンテンツのサイズがトラックのサイズを変更することがあり、コンテンツがトラックのサイズ変更に影響することを許すメソッドが用いられることが想定されます。このような場合、例えばサイズが自動調整される行トラックは、コンテンツがメイングリッドとサブグリッド内に収まるように大きくなります。

subgrid 値は、通常の入れ子のグリッドとほとんど同じ方法で動作するため、これらを切り替えるのは簡単です。例えば、暗黙的な行のグリッドが必要になったときにすべきことは、`grid-template-rows` の `subgrid` 値を削除し、あるいは暗黙的なトラックのサイズ変更を制御するために `grid-auto-rows` に値を与えることだけです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動画: Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [動画: Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [動画: Hello subgrid!](https://www.youtube.com/watch?v=vxOj7CaWiPU) (CSSConf.eu, 2019)
