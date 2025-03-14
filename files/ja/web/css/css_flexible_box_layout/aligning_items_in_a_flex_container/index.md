---
title: フレックスコンテナー内のアイテムの配置
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: f11e9200b6f9d5c191051eb7ccbe7ebd44966e43
---

{{CSSRef}}

フレックスボックスが有用な理由の 1 つは、要素を垂直方向に中央揃えする手軽な方法を提供しているなど、適切な配置が可能になることです。このガイドでは、フレックスボックスの配置と位置揃えのプロパティがどのように動作するのかを、徹底的に見ていきます。

## フレックスボックスでの配置の使用

フレックスボックスには配置と余白を制御するプロパティがいくつか提供されており、 `align-items` と `justify-content` は要素を中央揃えにするための基本的なプロパティです。要素を中央に配置するには、 {{cssxref("align-items")}} プロパティを使用してアイテムを{{glossary("cross axis","交差軸")}}（この場合は縦方向に動作する[ブロック軸](/ja/docs/Glossary/Flow_relative_values)）に配置します。 {{cssxref("justify-content")}} を使用して、主軸（この場合は水平方向に動作するインライン軸）に配置します。

![内部に中央寄せされたボックスを持つコンテナー要素](align1.png)

下記のコード例で、コンテナー内または内側の要素のサイズを変更してみてください。内側の要素は常に中央に配置されます。

```html live-sample___intro
<div class="box">
  <div></div>
</div>
```

```css live-sample___intro
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted rgb(96 139 168);
}

.box div {
  width: 100px;
  height: 100px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("intro")}}

## 配置を制御するプロパティ

本ガイドで扱うプロパティは以下のとおりです。

- {{cssxref("justify-content")}}: 全アイテムの主軸上の配置を制御します。
- {{cssxref("align-items")}}: 全アイテムの交差軸上の配置を制御します。
- {{cssxref("align-self")}}: 個別のフレックスアイテムごとに交差軸上の配置を制御します。
- {{cssxref("align-content")}}: 仕様では「フレックス行のパッキング (packing flex lines)」と説明されている。交差軸上でのフレックス行間の余白を制御します。
- {{cssxref("gap")}}, {{cssxref("column-gap")}}, {{cssxref("row-gap")}}: フレックスアイテム間にすき間または溝を生成するために使用します。

また、auto マージンがフレックスボックスでの配置にどのように使えるかについても触れます。

## 交差軸上のアイテムの配置

フレックスコンテナー内で設定する {{cssxref("align-items")}} プロパティと、フレックスアイテムで設定する {{cssxref("align-self")}} プロパティは、フレックスアイテムの交差軸上の配置を制御します。交差軸は、 {{cssxref("flex-direction")}} が `row` の場合は列に、 `flex-direction` が `column` の場合は行に沿って流れます。

基本的なフレックスの例で、交差軸上の配置を使用してみましょう。 `display: flex` をコンテナーに設定すると、子要素はすべてフレックスアイテムになり、一行に配置されます。既定では、このフレックスアイテムはすべて、最も背の高いアイテムと同じ高さになるように引き伸ばされますので、最も背の高いアイテムが交差軸のアイテムの高さを定義することになります。フレックスコンテナーに高さが設定されている場合は、アイテム内のコンテンツの大きさにかかわらず、コンテナーの高さまで各アイテムが引き伸ばされます。

![3 つのアイテムがあり、うち 1 つのアイテムには他よりも高くなる要因となる追加のテキストがある。](align2.png)

![3つのアイテムが 200 ピクセル高に引き伸ばされている](align3.png)

アイテムが同じ高さになるのは、交差軸での配置を制御する `align-items` プロパティの初期値が `stretch` となっているためです。

アイテムの配置を制御するために、以下の値を使うことができます。

- `align-items: stretch`
- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: start`
- `align-items: end`
- `align-items: center`
- `align-items: baseline`
- `align-items: first baseline`
- `align-items: last baseline`

以下の例では、`align-items` の値は `stretch` に設定されています。他の値についても試し、フレックスコンテナーの中でそれぞれのアイテムが互いにどのように配置されるかを確認してください。

```html live-sample___align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />には追加の<br />テキストが<br />あります</div>
</div>
```

```css live-sample___align-items
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: stretch;
}

.box div {
  width: 100px;
  height: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}
```

{{EmbedLiveSample("align-items")}}

### `align-self` で個別のアイテムを配置

`align-items` プロパティは、すべてのアイテムの `align-self` プロパティをまとめて設定します。つまり、 {{cssxref("align-self")}} プロパティでは 1 つずつ個別のアイテムを対象として指定できます。 `align-self` プロパティには、 `align-items` プロパティに使えるすべての値と、それに加えてフレックスコンテナーで定義した値にリセットするための `auto` を使うことができます。

次のライブサンプルでは、フレックスコンテナーに `align-items: flex-start` が設定されています。これは、アイテムがすべて交差軸の始めに配置されているという意味です。 `first-child` セレクターを使用して、最初のアイテムを `align-self: stretch` に設定します。 `selected` クラスを持つ別のアイテムには `align-self: center` を設定します。 `align-items` の値を変更するか、個々のアイテムの `align-self` の値を変更して、これがどのように動作するのか確認してみてください。

```html live-sample___align-self
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```

```css live-sample___align-self
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
  height: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self", "", "250px")}}

## 主軸の変更

ここまで、`flex-direction`が既定で`row`に設定されている場合の配置動作について見てきましたが、これは上から下へ書く言語で、横が主軸、縦が交差軸で作業している場合について見てみましょう。

![3 つのアイテムがあり、1 つ目は flex-start、2 つ目は center、3 つ目は flex-end に配置されている。垂直軸上で配置されている。](align4.png)

同じ書字方向のままで、 `flex-direction` を `column` に変更すると、 `align-items` と `align-self` プロパティではアイテムを上下ではなく左右に配置します。これらのプロパティはアイテムを交差軸に沿って配置することに変わりはありませんが、交差軸はこれで水平になります！

![3 つのアイテムがあり、1 つ目は flex-start、2 つ目は center、3 つ目は flex-end に配置されている。水平軸上で配置されている。](align5.png)

次の例では `flex-direction: column` を設定し、それ以外は先の例と全く同じフレックスコンテナーを使ってこの動作を示しています。

```html live-sample___align-self-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```

```css live-sample___align-self-column
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self-column", "", "300px")}}

## `align-content` プロパティによるコンテンツの交差軸への配置

これまでは、 1 行のフレックスアイテムを含む{{glossary("flex_container","フレックスコンテナー")}}の中に、アイテムや個々のアイテムを配置することを中心に説明してきました。フレックスアイテムが複数行にまたがる場合、 {{cssxref("align-content")}} プロパティを使用して行間の余白の配分を制御することができます。これは**フレックス行のパック**と呼ばれます。

`align-content` が有効に動作するためには、フレックスコンテナーの交差軸の寸法（この場合は高さ）が、アイテムを表示するのに必要な寸法より大きくなければなりません。これはすべてのアイテムに対して一括で動作します。 `align-content` の値は、利用できる余った空間と、その中の一連のアイテム全体の配置を決定します。

`align-content` プロパティには以下の値を設定できます。

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: start`
- `align-content: end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: space-evenly`
- `align-content: stretch`
- `align-content: normal` （`stretch` として動作）
- `align-content: baseline`
- `align-content: first baseline`
- `align-content: last baseline`

以下の例では、フレックスコンテナーは 400 ピクセルの高さで、アイテムを表示するのに必要な高さよりも高くなっています。 `align-content` の値は `space-between` で、この場合は残る分配可能な余白 (available space) はフレックス行の*間に*分配され、フレックス行自体はコンテナーの交差軸上の始点と末尾に密着して配置されます。

`align-content` プロパティがどのように働くか、ほかの値を設定して確認してください。

```html live-sample___align-content
<div class="box">
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

```css live-sample___align-content
.box {
  width: 450px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content", "", "380px")}}

列に沿った軸の時にこのプロパティの効果がどのように変わるか、 `flex-direction` を `column` に変更した場合について確認してください。変更前と同様に、すべてのアイテムを表示した上で、十分な余白が交差軸上に必要です。

```html live-sample___align-content-column
<div class="box">
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

```css live-sample___align-content-column
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 400px;
  height: 300px;
  align-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content-column", "", "380px")}}

## 主軸上での配置

ここまで交差軸上での配置がどのように動くかを見てきましたが、ここでは主軸上での配置について見ていきます。使えるプロパティは `justify-content` の一つだけです。アイテムは主軸上ではグループとしてのみ扱われるため、プロパティも一種類となります。 `justify-content` では、アイテムを表示するのに必要な分よりも大きい空間がある場合の分配可能な余白の扱いを制御できます。

コンテナーに `display: flex` を設定した最初の例では、アイテムはコンテナーの始点に一行に整列して表示されます。これは `justify-content` の初期値が `normal` であり、これは `start` として動作するためです。すべての分配可能な余白はアイテムの後ろに置かれます。

![3 つの 100 ピクセル幅のアイテムが 500 ピクセル幅のコンテナー内にある。分配可能な余白はアイテムの後ろに置かれる。](align6.png)

`baseline` の値はこの軸には関連ありません。 `justify-content` プロパティは `align-content` と同じ値を受け付けます。

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: start`
- `justify-content: end`
- `justify-content: left`
- `justify-content: right`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: space-evenly`
- `justify-content: stretch` （start として動作）
- `justify-content: normal` （stretch として動作し、これは start として動作する）

次の例では、 `justify-content` の値は `space-between` となっています。アイテムを表示した後に余った分配可能な余白は、アイテムの間に分配されます。左右の端のアイテムはそれぞれ始点と末尾に揃えて並びます。

```html live-sample___justify-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content
.box {
  display: flex;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content")}}

`flex-direction` が `column` に設定されて主軸がブロック方向となっているとき、`justify-content` はフレックスコンテナー内の分配可能な余白があれば、アイテム間にその方向にそって余白を分配します。

```html live-sample___justify-content-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-column
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-column", "", "380px")}}

## 配置と書字方向

上述の配置方法において、`start` と `end` はいずれも書字方向に対応したものとなります。 `justify-content` の値が `start` で、書字方向が英語のような左書きであれば、アイテムはコンテナーの左端から並べられます。

![3 つのアイテムが左側に並んでいる](basics5.png)

一方で書字方向がアラビア語のように右から左であれば、アイテムはコンテナーの右端から並べられます。

![3 つのアイテムは右側から並んでいる](basics6.png)

以下の例ではフレックスアイテムを右から左に並べるために `direction` プロパティを `rtl` を設定しています。この設定を削除したり `justify-content` の値を変更するなどして、行が右から始まる場合のフレックスボックスの動作を確認してください。

```html live-sample___justify-content-writing-mode
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-writing-mode
.box {
  direction: rtl;
  display: flex;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-writing-mode")}}

## 配置と `flex-direction`

`flex-direction` プロパティを変更した場合にも、行の `start` の方向は変わります。例えば `row` の代わりに `row-reverse` を設定した場合などです。

この例では、 `flex-direction: row-reverse` と `justify-content: flex-end` で、フレックスコンテナー内でアイテムの向きと位置を定義しています。左書きの言語では、アイテムは左に並びます。 `flex-direction: row-reverse` を `flex-direction: row` に変更してみてください。これでアイテムが右側に移され、視覚的な順序が逆になることがわかります。

```html live-sample___justify-content-reverse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-reverse
.box {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-reverse")}}

こうした動作は少し紛らわしいかもしれませんが、覚えておくべき原則として、何かを変更しない限りは、文書の言語において単語が配置される方向にインライン軸、行方向の軸に沿ってフレックスアイテムが配置されます。 `start` と `flex-start` は文の中でテキストの先頭側から始まることになります。

![左から始まり右で終わることを示す図。](align8.png)

`flex-direction: column` を使うことで、アイテムの配置方向を文書の言語におけるブロック方向に変更することもできます。この場合は `start` と `flex-start` は段落が始まる先頭を示すことになります。

![上から始まり下で終わることを示す図](align10.png)

`flex-direction` を逆方向の値のいずれかに変更すると、軸の末尾側から文書の言語において単語が書かれる方向と逆方向にレイアウトされます。 `start` と `flex-start` はその軸の末尾側、つまりインライン方向では行を折り返す側、ブロック方向では最後の文が終わる側を示すことになります。

![右から始まり左で終わることを示す図](align9.png)

![下から始まり上で終わることを示す図](align11.png)

## auto マージンを使用した主軸上での配置

主軸上ではアイテムは一つのグループとして扱われるため、`justify-items` プロパティや `justify-self` プロパティに相当するものはありません。しかし、フレックスボックスと併せて auto マージンを使ってアイテム毎の配置をすれば、個別のアイテムまたは一部アイテムのグループを他のアイテムから分離して配置することができます。

よくあるパターンは、ナビゲーションバーでいくつかのキーアイテムが右に配置され、メイングループは左に配置されるようなものです。このようなケースは `justify-self` プロパティの使いどころだと思われるでしょう。しかし、以下の図について考えてみましょう。この例では、次の図のように、 3 つのアイテムが片方にあり、もう一方に 2 つのアイテムがあります。もし仮に `justify-self` をアイテム _d_ に対して使うことができたとすると、意図したものであってもそうでなくても、それに続くアイテム _e_ の配置も変わってしまうでしょう。

![2 つのグループに分かれた 5 つのアイテム。3 つは左側にあり、2 つは右側にある。](align7.png)

代わりに、 _d_ のアイテムを CSS マージンによって押しやることができます。

このライブサンプルでは、アイテム 4 の {{cssxref("margin-left")}} を `auto` に設定することで、最初の 3 つのアイテムから分離し、その軸にあるすべての余白を消費しています。これは、 {{cssxref("margin")}} で左右を auto にしてブロックを中央に配置する動作と同じ仕組みです。それぞれの辺はできる限りの空間を取ろうとするので、ブロックは中央へ押し込まれます。

このライブサンプルでは、フレックスアイテムは基本的なフレックス値で 1 行に並べられており、4 番目のアイテムに設定したクラス `push` は、そのアイテムに `margin-left: auto` を適用しています。 4 番目のアイテムのクラスを取り除くか、別のアイテムにクラスを追加して、どのように動作するのか試してみてください。

```html live-sample___auto-margins
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div class="push">Four</div>
  <div>Five</div>
</div>
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## アイテム間にすき間を作成

フレックスのアイテム間にすき間を作るには、{{cssxref("gap")}}、{{cssxref("column-gap")}}、{{cssxref("row-gap")}}の各プロパティを使用します。{{cssxref("column-gap")}} プロパティは、行内のアイテム間にすき間を作成します。{{cssxref("row-gap")}} プロパティは、{{cssxref("flex-wrap")}} が `wrap` に設定されている場合、フレックス行間にすき間を作成します。

{{cssxref("gap")}} プロパティは、 `row-gap` と `column-gap` の両方を一緒に設定する一括指定です。
フレックスアイテム間またはフレックス行間の隙間は方向によって変わります。 {{cssxref("flex-direction")}} プロパティが行を作成する場合、最初の値はフレックス行間の隙間を定義し、 2 つ目の値はそれぞれの行内のアイテム間の隙間を定義します。列の場合（`flex-direction` を `column` または `column-reverse` に設定した場合）、最初の値はフレックスアイテム間の隙間を定義し、 2 つ目の値はフレックス行間の隙間を定義します。

```html live-sample___gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css live-sample___gap
.box {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  flex: 1;
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gap")}}

## 関連情報

- [ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
