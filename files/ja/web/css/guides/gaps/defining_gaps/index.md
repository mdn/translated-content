---
title: CSS 隙間の定義
short-title: 隙間の定義
slug: Web/CSS/Guides/Gaps/Defining_gaps
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)、 [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)レイアウトを作成する際、[CSS 隙間プロパティ](/ja/docs/Web/CSS/Guides/Gaps#properties) を使用することで、列や行間の隙間 (gap) を定義・制御することができます。

{{cssxref("margin")}} および {{cssxref("padding")}} プロパティは個々のボックス周囲の視覚的な隙間を指定しますが、CSS 隙間モジュールの[プロパティ](/ja/docs/Web/CSS/Guides/Gaps#properties)を使用することで、{{glossary("gutters", "溝")}}やギャップを含むレイアウトにおいて、隣接するボックス間の隙間を指定することができます。

このガイドでは、さまざまな種類のレイアウトにおける列と行の隙間、隙間の定義方法、および `gap` の値としてパーセント値を使用する方法について説明します。

## 隙間を理解する

マージンやパディングを使用すると個々のボックス周囲の隙間を指定できますが、指定されたレイアウト内で隣接するボックス間の隙間を指定するほうが便利な場合もあります。これは特に、兄弟ボックス間の隙間が、最初のボックスや最後のボックスとコンテナーの端との間の隙間と異なる場合に当てはまります。
{{cssxref("gap")}} プロパティ、およびその構成プロパティである {{cssxref("row-gap")}} と {{cssxref("column-gap")}} は、グリッド、フレックスボックス、段組みレイアウトにおいてこの機能を提供します。

「隙間」とは、「列の隙間」または「行の隙間」のどちらかです。その定義はレイアウトの種類によって異なります。どのレイアウトの種類においても、隙間が断片化の区切りと一致する場合、その隙間は消滅します。

### グリッドコンテナーの隙間

グリッドコンテナーのコンテキストにおいて、行の隙間および列の隙間とは、それぞれグリッド行とグリッド列の間の溝を指します。この隙間の幅によって、影響を受けるグリッド線は、あたかも太さを持ったかのように振る舞います。つまり、2 本のグリッド線の間にあるグリッドトラックは、それらを表す溝間の空間となります。デフォルトで、隙間の幅は両方向とも `0` です。

トラックのサイズ設定のためには、それぞれの溝は、指定されたサイズの追加の空の固定サイズトラックとして扱われます。複数の行または列にまたがるグリッドアイテムは、それらの間の溝にもまたがります。

例えば、`gap: 20px` が `100px` × `100px` のボックスからなる 4×4 のグリッドに設定されている場合、グリッドのサイズは `460px` × `460px` になります。それぞれのボックスのサイズは `100px` × `100px` ですが、水平方向に 2 行にまたがるグリッドアイテムの高さは `220px` になります。3 行にまたがらせる場合は、その高さは `340px` になります。4 行すべてにまたがらせる場合は、その高さは `460px` になります。

溝の隙間はは、アイテム間の最小間隔を設定します。{{cssxref("justify-content")}} および {{cssxref("align-content")}} プロパティの値によって、さらに間隔を追加することができ、それにより対応する隙間のサイズは大きくなります。

溝は、暗黙のグリッド上のトラックの間でのみ現れます。グリッドがトラック間で断片化されている場合、それらのトラックの間には溝の隙間は追加されません。最初のトラックの前や最後のトラックの後には溝はありません。トラックが折りたたまれている場合、そのトラックには溝がありません。

### フレックスコンテナーの隙間

フレックスコンテナーは、複数の子要素が含まれている要素の {{cssxref("display")}} を `flex` または `inline-flex` に設定することで作成されます。デフォルトで、フレックスアイテムは、改行されない単一の行に配置されます。隣接するフレックスアイテム間、および折り返しがある場合の隣接する列や行間のデフォルトのギャップは `0` です。複数のアイテムを含むフレックスコンテナーが列、行、あるいはその両方を持つかどうかは、{{cssxref("flex-flow")}} 一括指定を使用して設定されたフローと折り返しによって決まります。

主軸に沿って、隣接するフレックスアイテムの間に隙間を追加できます。{{cssxref("flex-flow")}} プロパティが `row wrap` または `row-reverse wrap` に設定されている場合、列の隙間は隣接するフレックスアイテム間の溝を指し、行の隙間はフレックス行間の溝を参照します。`flex-flow` が `column wrap` または `column-reverse wrap` に設定されている場合、行の隙間は隣接するフレックスアイテム間の隙間を指し、列の隙間はフレックス行間の隙間を指します。

### 段組みの隙間

段組みコンテナーは、{{cssxref("column-count")}} の値を `1` より大きい値に設定することで生成される、複数の段からなるブロックレベル要素です。デフォルトで、段は 1 行に配置され、隣接する段の間には `1em` 幅の「段間」が設けられます。
「行間」とは、{{cssxref("column-height")}} を設定することで列ボックスが行を折り返し、追加の行が作成される際に生じる行間の隙間を指します。

## `gap` 一括指定の使用

{{cssxref("row-gap")}} プロパティは、コンテナー内の隣接する行間の隙間（{{glossary("gutters","溝")}}）のサイズを設定します。{{cssxref("column-gap")}} プロパティは、コンテナー内の列間のサイズを設定します。それぞれのプロパティの値は、`<length>`、`<percentage>`、またはキーワード `normal` として指定できます。パーセント値は、その方向におけるコンテナー要素の[コンテンツボックス](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)のサイズを基準に計算されます。

{{cssxref("gap")}} という一括指定は、行と列の両方の間隔を定義し、1 つまたは 2 つの値を受け付けます。両方のサブプロパティのデフォルト値は `normal` です。値が 1 つだけ宣言された場合は、行と列の両方の間隔に適用されます。2 つの値が宣言された場合は、1 つ目の値が `row-gap` の値として、2 つ目の値が `column-gap` の値として設定されます。

この定義による効果は、コンテナーがグリッド、フレックスボックス、段組みレイアウトのいずれを使用しているかによって異なります。

隙間には目に見える区切りを追加できます。これを「隙間の装飾」と呼びます。列間、行間、あるいはその両方の隙間に装飾用の区切りを追加すると、それらは隙間の中央に表示されますが、隙間のサイズやコンテナーのサイズには影響を与えません。これらの隙間の装飾は、{{cssxref("rule")}} という一括指定、またはその構成プロパティを使用することで、本来「空白」である部分に追加されます。

### グリッドレイアウトでの隙間

グリッドコンテナーにおいて、`gap` プロパティは、垂直トラックと水平トラックの間の隙間（溝）のサイズを定義します。一括指定プロパティは、`<'row-gap'>` の値として指定され、必要に応じてその後に `<'column-gap'>` の値が続きます。値が 1 つだけ宣言された場合、その値は行と列の両方の隙間に適用されます。

この例では、7 列のグリッドコンテナーを作成します：

```css live-sample___grid_gap
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```

さまざまな `gap` の値を選択して、行と列の間隔がどのように変化するかを確認してください。

```css hidden live-sample___grid_gap
:has([value="a"]:checked) p {
  gap: 2px 10px;
}
:has([value="b"]:checked) p {
  gap: 10px 2px;
}
:has([value="c"]:checked) p {
  gap: 10px;
}
:has([value="d"]:checked) p {
  gap: 2px;
}
```

{{EmbedLiveSample("grid_gap", "", "390")}}

### フレックスボックスレイアウトの隙間

フレックスコンテナー内で、`gap` プロパティは、フレックスアイテム同士の間やフレックス行間の空間を定義します。最初の値がフレックスアイテム間の空間を設定するのか、それともフレックス行間の空間を設定するのかは、フレックスアイテムが配置される方向によって異なります。

フレックスアイテムは、{{cssxref("flex-direction")}} プロパティの値に応じて、行または列に配置されます。`row` または `row-reverse` に設定された場合、最初の値はフレックス行間の間隔を定義し、2 つ目の値は各行内の隣接するフレックスアイテム間の間隔を定義します。値が 1 つだけ記載された場合は、その値が両方の間隔に適用されます。

`flex-direction` が `column` または `column-reverse` に設定されている場合、最初の値はフレックス行内の隣接するフレックスアイテム間の間隔を定義し、2 番目の値はフレックス行間の間隔を定義します。ここでも、値が 1 つしか記載されていない場合は、その値が両方の間隔に適用されます。

この例では、フレックスコンテナーを生成し、フレックスアイテムが改行されるようにします。

```css live-sample___flex_gap
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  height: 500px;
}
```

さまざまな `gap` や `flex-direction` の値を選択して、フレックスアイテム間やフレックス行間の隙間がどのように変化するかを確認してください。

```css hidden live-sample___flex_gap live-sample___percent_gap live-sample___percent_gap2
i {
  flex: 0 0 18%;
}
i:nth-of-type(2n) {
  flex: 0 0 12%;
}
i:nth-of-type(3n) {
  flex: 0 0 26%;
}
i:nth-of-type(5n) {
  flex: 0 0 20%;
}
i:nth-of-type(7n) {
  flex: 0 0 34%;
}
```

```css hidden live-sample___flex_gap
:has([value="a"]:checked) p {
  gap: 2px 10px;
}
:has([value="b"]:checked) p {
  gap: 10px 2px;
}
:has([value="c"]:checked) p {
  gap: 10px;
}
:has([value="d"]:checked) p {
  gap: 2px;
}

:has([value="row"]:checked) p {
  flex-direction: row;
}
:has([value="rowR"]:checked) p {
  flex-direction: row-reverse;
}
:has([value="col"]:checked) p {
  flex-direction: column;
}
:has([value="colR"]:checked) p {
  flex-direction: column-reverse;
}
```

```html hidden live-sample___flex_gap
<fieldset>
  <legend>フレックスの方向を選択:</legend>
  <label
    ><input type="radio" value="row" name="dir" /> flex-direction: row;</label
  >
  <label
    ><input type="radio" value="rowR" name="dir" /> flex-direction:
    row-reverse;</label
  >
  <label
    ><input type="radio" value="col" name="dir" /> flex-direction:
    column;</label
  >
  <label
    ><input type="radio" value="colR" name="dir" /> flex-direction:
    column-reverse;</label
  >
</fieldset>
```

```html-nolint hidden live-sample___percent_gap live-sample___percent_gap2
<fieldset>
  <legend>レイアウトを選択</legend>
  <label><input type="radio" value="grid" name="dir" checked />グリッド</label>
  <label><input type="radio" value="flex" name="dir" />フレックスボックス</label>
  <label
    ><input type="radio" value="flex2" name="dir" />フレックスボックス（列方向）</label
  >
  <label><input type="radio" value="multicol" name="dir" />段組み</label>
</fieldset>
```

{{EmbedLiveSample("flex_gap", "", "900")}}

### 段組みレイアウトの隙間

[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)において、`gap` プロパティは、段間および段の行間の隙間を定義します。最初の値は、{{cssxref("column-height")}} プロパティによって複数の段が設定されている場合、段ボックスの行間の隙間を定義します。2 つ目のものは、隣接する段ボックス間の隙間を定義します。

この例では、`columns` 一括指定プロパティを使用して、最大 7 段、最小列幅を `1em` に設定した段組みコンテナーを作成します。段の高さを `2.35em` に設定することで、追加の行を作成できるようになります。また、{{cssxref("rule")}} プロパティを使用して、隙間の中央に細い装飾用の線も追加します。

```css hidden live-sample___col_gap
.container {
  columns: 7 1em / 2.35em;
  width: 450px;
  rule: 1px solid #cccccc;
}
@supports not (column-height: 1em) {
  body::before {
    content: "このブラウザーは column-height プロパティには対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

デフォルトで、行と段の間に `1em` の間隔が設けられています。別の `gap` 値を選択することで、この間隔を変更できます。

```css hidden live-sample___col_gap
:has([value="a"]:checked) p {
  gap: 0.5em 3em;
}
:has([value="b"]:checked) p {
  gap: 3em 0.5em;
}
:has([value="c"]:checked) p {
  gap: 0.5em;
}
:has([value="d"]:checked) p {
  gap: 3em;
}
```

{{EmbedLiveSample("col_gap", "", "820")}}

文字が割り当てられた空間を埋めきっていないため、溝が指定された間隔サイズよりも大きく現れることがあります。装飾用の罫線は、選択した設定に応じて、段や行のコンテンツのブロックおよびインライン先頭から `0.25em` または `1.5em` の位置に、間隔の中央に表示されます。ブロック末尾およびインライン末尾に余分な空間があるため、間隔が実際よりも大きく見えます。

```html hidden live-sample___grid_gap live-sample___flex_gap
<fieldset>
  <legend>隙間の値を選択:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 2px 10px;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 10px 2px;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 10px;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 2px;</label>
</fieldset>
```

```html hidden live-sample___col_gap
<fieldset>
  <legend>隙間の値を選択:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 0.5em 3em;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 3em 0.5em;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 0.5em;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 3em;</label>
</fieldset>
```

```html hidden live-sample___percent_gap live-sample___percent_gap2
<fieldset>
  <legend>隙間の値を選択:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 1% 5%;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 5% 1%;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 1%;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 5%;</label>
</fieldset>
```

```html hidden live-sample___grid_gap live-sample___flex_gap live-sample___col_gap live-sample___percent_gap live-sample___percent_gap2
<div>
  <p class="container">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </p>
</div>
```

```css hidden live-sample___grid_gap live-sample___flex_gap live-sample___col_gap live-sample___percent_gap live-sample___percent_gap2
.container {
  font-size: 2rem;
  font-family: monospace;
  font-weight: bold;
}
i {
  background-color: #cccccc;
  text-align: center;
}
label {
  display: block;
  font-family: monospace;
  margin: 10px;
}
```

## 隙間の値をパーセント値で指定

コンテナーのサイズが固定されている場合、パーセント値で指定された列や行の隙間は、それぞれコンテナーの幅や高さを基準に計算されます。

この例では、コンテナーのサイズが設定されています。さまざまな幅の隙間をパーセント値で指定し、レイアウトの種類を変更して、コンテナーのサイズを基準に隙間がどのように計算されるかを確認してください。`1%` および `5%` の列の隙間は、それぞれ `3px` および `15px` の幅になります。`1%` および `5%` の行の隙間は、それぞれ `6px` および `30px` の高さになります。これらの隙間のサイズは、コンテンツがコンテナーからはみ出した場合でも適用されます。

```css live-sample___percent_gap
.container {
  width: 300px;
  height: 600px;
  background-color: #eeeeee;
  rule: 1px dotted #666666;
}
```

{{EmbedLiveSample("percent_gap", "", "800")}}

なお、`gap` プロパティに単一のパーセント値を設定した場合、コンテナーの高さは幅の 2 倍であるため、行の間隔は列の間隔の 2 倍になります。

```css hidden live-sample___percent_gap live-sample___percent_gap2
fieldset {
  width: 44%;
  float: left;
}
p {
  clear: both;
  font-size: 1.25rem;
}

:has([value="a"]:checked) p {
  gap: 1% 5%;
}
:has([value="b"]:checked) p {
  gap: 5% 1%;
}
:has([value="c"]:checked) p {
  gap: 1%;
}
:has([value="d"]:checked) p {
  gap: 5%;
}

:has([value="grid"]:checked) p {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
:has([value="flex"]:checked) p {
  display: flex;
  flex-flow: row wrap;
}
:has([value="flex2"]:checked) p {
  display: flex;
  flex-flow: column wrap;
}
:has([value="multicol"]:checked) p {
  columns: 5 2em / 2.35em;
}
```

コンテナーの高さや幅が定義されていない場合、パーセント値単位の隙間の値の挙動は大きく異なります。コンテナーの幅が固定されている場合、パーセント値単位の隙間の値は予測可能な挙動を示します。
コンテナーのサイズが自動調整される場合、パーセント値単位の隙間設定は循環依存関係を引き起こす可能性があります。つまり、隙間はコンテナーのサイズに依存しますが、コンテナーのサイズも隙間に依存するということです。ブラウザーは、内在サイズ決定処理中、パーセント値単位の隙間を `auto`（実質的に `0`）として扱います。

```css live-sample___percent_gap2
.container {
  background-color: #eeeeee;
  rule: 1px dotted #666666;
  height: auto;
  width: auto;
}
```

{{EmbedLiveSample("percent_gap2", "", "500")}}

この例では、コンテナーの幅は包含ブロックによって制約されていますが、高さは制約されていません。

グリッドレイアウトにおける隙間の内在サイズ設定では、パーセント値は `auto` として扱われるため、コンテナーのサイズが決定されるまで隙間は折りたたまれます。つまり、コンテナーのサイズはコンテンツのサイズのみによって決定されることになります。この例で 6 行のグリッドセルがレンダリングされる場合、5 つの行間の隙間が生成されます。つまり、隙間が `1%` または `5%` に設定されていると、グリッドアイテムの最後の行が背景からあふれる割合は、それぞれ `5%` または `25%` となります。

フレックスボックスレイアウトでは、パーセント値で指定された隙間は、内在サイズ決定の際には `0` として扱われるか、無視されます。隙間はサイズ決定が完了した後のみ適用されます。コンテナーのブロックサイズが `auto` であるため、行の隙間のパーセント値は `0` に対して解決されます。つまり、`0` の `1%` や `5%` は `0` となります。パーセント値は事実上無視されるため、フレックスボックスレイアウトと段組みレイアウトのどちらにおいて、`row-gap` の値は `0` となります。

## 関連情報

- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
