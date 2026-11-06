---
title: CSS 行間罫と列間罫の定義
short-title: 罫線の定義
slug: Web/CSS/Guides/Gaps/Defining_rules
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)、 [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout) を作成する際、行と列の間にある溝の中央に装飾線、つまり「罫線」を追加することができます。すべての隙間、あるいは一部の隙間に罫線を表示したり、罫線の幅、色、インセットを完全にアニメーションさせたりすることが可能です。このガイドでは、これらの罫線の幅、色、スタイルを指定します。

## 概要

[CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps#properties)モジュールでは、グリッド、フレックスボックス、段組みコンテナーの溝（隙間）の中に、コンテンツの背後に描画される線の外観を指定するいくつかのプロパティが定義されています。これらの線は、[ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)やレイアウトには影響を与えません。溝のサイズは {{cssxref("gap")}} プロパティによって定義され、デフォルト値は段組みコンテナーでは `1em`、それ以外のコンテキストでは `0` です。

罫線が {{cssxref("gap")}} よりも幅が広い場合、コンテンツが隠れないように、コンテンツの背後に線が描画されます。それでも、コンテンツ、背景、罫線の[色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)が十分であり、可読性を確保できることを確認する必要があります。

{{glossary("gutters")}} や隙間を含むレイアウトにおいて、指定されたレイアウトコンテキスト内で隣接するボックス間の間隔を指定する方法の詳細については、[CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)を参照してください。

罫線の色、線幅、線種の各プロパティはすべて、カンマ区切りの値のリストを受け入れるため、コンテナー内で隙間のさまざまな装飾を設定することができます。

```css
rule-color: blue;
rule-width: 10px, 20px;
rule-style: solid, dashed, solid, dotted;
```

リスト内で [`repeat()` 関数](#repeat_関数)を使用することで、繰り返し回数を定義したり、描画されるそれぞれの線に値が提供されるよう、必要に応じて自動的に繰り返しを追加したりすることができます。

```css
rule-color: blue, repeat(3, gray, red);
rule-width: 50px, repeat(10, 10px, 20px), 10px;
rule-style: solid, repeat(auto, dashed, dotted), solid;
```

罫線の色、線幅、線種の一括指定プロパティは、列と行の両方の罫線に対して同じ値を設定します。

## `repeat()` 関数

列と行の罫線のプロパティを紹介する前に、{{cssxref("repeat()")}} 関数について理解しておくことが重要です。

`repeat()` 関数を使用すると、有効な CSS 値のリストを繰り返し指定することができます。最初の引数では、後続の引数として渡される値のリストを何回繰り返すかを指定します。これにより、色、線幅、線種などの値を、個別に列挙することなく、必要な回数だけ繰り返して指定することができます。

以下の宣言は同等であり、どちらも 8 色のリストを生成します。

```css
rule-color: blue, yellow, red, yellow, red, yellow, red, gray;
rule-color: blue, repeat(3, yellow, red), gray;
```

値の個数が隙間の数を上回る場合、余分な値は無視されます。例えば、3 × 3 のグリッドコンテナーでは、1 本目の行間・列間の罫線は青、2 本目は黄色になります。リスト内のその他の色の値は使用されません。

値の個数より隙間の数が多い場合、リストは循環して割り当てられます。10 × 10 のグリッドコンテナーでは、それぞれの方向に 9 本の隙間があります。この場合、最後の罫線は青になります。最初の 8 本の行間・列間の罫線にはそれぞれ関連付けられた色が割り当てられ、その後リストが循環するため、9 本目の行間・列間の罫線にはリストの最初の値が取得されます。

ここでは、行と列の数が 3 つしかないため、行の隙間の色付けには 2 つの値のみが使用されますが、11 本の列の罫線それぞれに `<color>` 値を割り当てるためにリストが循環されます。

```css hidden live-sample___regular
div {
  rule-color: blue, repeat(3, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("regular", "", "190")}}

`repeat()` 関数の最初の引数は、`1` 以上の {{cssxref("integer")}} またはキーワード `auto` のどちらかです。数値が無効（`0`、負の数、指定なし、整数以外の数値のいずれか）の場合、宣言全体が無効とみなされ、無視されます。`repeat()` 関数内の `auto` キーワードは、自動リピーターを生成します。これは、リストの他の部分から値を受け取らないはずの箇所に値を埋め込み、リストが循環するのを防ぎます。プロパティ値には、最大で 1 つの `repeat(auto, <value-list>)` の自動リピーターを含めることができます。

以下のように設定すると、3 × 3 以上のグリッドにおいて、`blue` と `gray` の罫線が各方向でそれぞれちょうど 1 回ずつ出現するようになります。

```css
rule-color: blue, repeat(auto, yellow, red), gray;
```

この場合、`yellow` と `red` は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返されます。最初の罫線は常に青になります。罫線が複数ある場合、最後の罫線は常に灰色になります。それ以外の罫線はすべて、`yellow` と `red` を交互に繰り返します。

```css hidden live-sample___autorepeat
div {
  rule-color: blue, repeat(auto, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("autorepeat", "", "190")}}

## 線のプロパティ

表示されるそれぞれの罫線には、色、幅、スタイルが設定されています。これらはそれぞれ、1 つの値として、あるいは値のリストとして定義することができます。

### 色のプロパティ

{{cssxref("column-rule-color")}} プロパティは、列間に描画される線の色を指定し、{{cssxref("row-rule-color")}} プロパティは、行間に描画される線の色を定義し、{{cssxref("rule-color")}} プロパティは、`column-rule-color` と `row-rule-color` の両方を同じ値に設定します。これらのプロパティはすべて、カンマ区切りの値のリストとして指定し、以下の値を含めることができます。

- {{cssxref("&lt;color&gt;")}}
  - : 行の色を指定する有効な `<color>` の値。デフォルトは `currentcolor` です。

- `<repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数。最初の引数として {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の `<color>` 値を指定します。`1` 以上の値を持つ `<integer>` は、`<color>` 値のリストを何回繰り返すかを指定します。

- `<auto-repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数。最初の引数として `auto` を、その後の引数として 1 つ以上の `<color>` 値を指定します。これにより、自動リピーターが生成され、プロパティ値の他の要素から値を受け取らない罫線に `<color>` 値が割り当てられます。これにより、プロパティのカンマ区切りのリストが循環するのを防ぎます。リストには、`<auto-repeat-line-color>` 値を最大で 1 つだけ含めることができます。

`repeat()` 関数内で `rule-color` プロパティの一部として `auto` を使用することで、最初と最後の線を暗い色に、その間のすべての線を明るい色に設定できます。

```css live-sample___color
div {
  rule-color: black, repeat(auto, lightgray), black;
}
```

{{EmbedLiveSample("color", "", "300")}}

列数を `6` から `4` または `8` に変更しても、それぞれの方向の最初と最後の線は引き続き `black` となり、その他の線はすべて `lightgray` になります。

黒い縦線の上に、灰色の横線が描画されています。これは、デフォルトで行間の罫線が列間の罫線の上に描画されるためです。この挙動は、{{cssxref("rule-overlap")}} プロパティの値を、デフォルトの `row-over-column` ではなく `column-over-row` に設定することで変更できます。

### 幅のプロパティ

{{cssxref("column-rule-width")}} プロパティは、列間に描画される線の幅を指定し、{{cssxref("row-rule-width")}} プロパティは、行間に描画される線の幅を定義し、{{cssxref("rule-width")}} プロパティは、`column-rule-width` と `row-rule-width` の両方を同じ値に設定します。これらのプロパティはすべて、カンマ区切りの値のリストとして指定され、以下の値を含めることができます。

- {{cssxref("&lt;line-width&gt;")}}
  - : 線の幅を、明示的な非負の {{cssxref("&lt;length&gt;")}} またはキーワード `thin`、`medium`、`thick` のいずれかで定義します。デフォルトは `medium` で、これは通常 `3px` として解釈されます。`<line-width>` として解釈されるカスタムプロパティも有効です。
- `<repeat-line-width>`
  - : `repeat()` 関数。最初の引数として {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の `<line-width>` 値を指定します。`<integer>` の値は `1` 以上で、`<line-width>` 値のリストを何回繰り返すかを指定します。
- `<auto-repeat-line-width>`
  - : `repeat()` 関数。最初の引数に `auto` を、その後の引数に 1 つ以上の `<line-width>` 値を指定します。これにより、自動リピーターが生成され、プロパティ値の他の要素から値を受け取らない隙間の罫線に `<line-width>` 値が割り当てられます。これにより、プロパティのカンマ区切りのリストが循環することを防ぎます。リストには、最大で `<auto-repeat-line-width>` の値を 1 つだけ含めることができます。

{{cssxref("gap")}} プロパティとは異なり、`rule-width` プロパティはレイアウトに影響を与えません。
これらのプロパティは、線の幅を定義するだけです。線は隙間の中央に現れ、隙間のサイズには影響せず、ボックスモデルにも影響を与えません。隙間よりも幅の広い線は、コンテンツの背後に描画されます。

この例では、{{cssxref("gap")}} が `20px` と指定されています。`rule-width` プロパティを使用して、さまざまな幅の線を定義します。

```css live-sample___width
div {
  rule-width: 10px, repeat(auto, 20px, 30px), 40px;
}
```

{{EmbedLiveSample("width", "", "300")}}

黒い罫線は隙間の中央に配置されます。これは、1 本目の列の隙間で最も顕著であり、`20px` の隙間の中央に `10px` の線が引かれています。罫線はコンテンツの背後に描画されます。これは、`rule-width` が `gap` よりも大きい場合に最も顕著で、半透明のグリッドアイテム越しに線が表示されます。

グリッドアイテムはすべて、黒いテキストと、半透明でほぼ白に近い背景色を持っています。コンテンツに {{cssxref("background-color")}} を指定することで、罫線がはみ出した場合でも、アクセシビリティ上の問題が発生しないように保証できます。コンテンツがアクセシブルであるためには、[十分なコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)が背景（背景色や罫線の色）と、 テキストやその他の[重要な視覚情報](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)との間に確保されている必要があります。

### 線種のプロパティ

{{cssxref("column-rule-style")}} プロパティは、列間に描画される線のスタイルを指定し、{{cssxref("row-rule-style")}} プロパティは、行間に描画される線のスタイルを定義し、{{cssxref("rule-style")}} は、`column-rule-style` と `row-rule-style` の両方を同じ値に設定します。

これらのプロパティはすべて、カンマ区切りの値のリストとして指定され、以下の値を含めることができます。

- {{cssxref("&lt;line-style&gt;")}}
  - : 描画される線のスタイルを定義するキーワードで、`solid`、`dashed`、`dotted`、`double`、`groove`、`ridge`、`inset`、`outset`、`none`、`hidden` のいずれか。デフォルトは `none` です。
- `<repeat-line-style>`
  - : `repeat()` 関数。最初の引数として {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の `<line-style>` 値を指定します。`<integer>` の値は `1` 以上で、`<line-style>` 値のリストを何回繰り返すかを指定します。
- `<auto-repeat-line-style>`
  - : `repeat()` 関数。最初の引数に `auto` を、その後の引数に 1 つ以上の `<line-style>` 値を指定します。これにより、自動リピーターが生成され、プロパティ値の他の要素から値を受け取らない隙間の罫線に `<line-style>` 値が割り当てられます。これにより、プロパティのカンマ区切りリストが循環することを防ぎます。リストには、`<auto-repeat-line-style>` の値を最大 1 つだけ含めることができます。

{{cssxref("border")}} と同様に、デフォルト値は `none` であるため、罫線が描画されるためには、`<line-style>` が `hidden` または `none` 以外の値で宣言されている必要があります。

この例では、`column-rule-style` プロパティに 7 つの値からなるリストを代入しています。8 列のグリッドには 7 つの列の隙間があるため、それぞれの値は 1 回ずつしか使用されません。`row-rule-style` の宣言には 3 つの行間罫に対して 3 つの値が指定されているため、それぞれの値は 1 回ずつ使用されます。

```css live-sample___style
div {
  column-rule-style: solid, dotted, dashed, double, groove, ridge, inset;
  row-rule-style: outset, none, hidden;
}
```

```css hidden live-sample___style
div {
  grid-template-columns: repeat(8, 1fr);
}
```

{{EmbedLiveSample("style", "", "240")}}

行の溝には `outset` の罫線のみが描画されます。これは、`<line-style>` が `none` または `hidden` に設定されている場合、線が描画されないためです。

### 一括指定プロパティ

{{cssxref("row-rule")}}、{{cssxref("column-rule")}}、{{cssxref("rule")}} の一括指定を使用することができます。これにより、単一の宣言で 1 本以上の線の色、線幅、線種を指定することができます。

これらの一括指定プロパティはすべて、以下のリストから選択した値をカンマ区切りで並べた形式で指定します。

- `<gap-rule>`
  - : {{cssxref("&lt;line-width&gt;")}}、{{cssxref("&lt;line-style&gt;")}}、{{cssxref("&lt;color&gt;")}} のいずれか 1 つ、2 つ、3 つを、任意の順序で指定します。{{cssxref("border")}} 一括指定と同様に、線を表示させるには `<line-style>` を指定する必要があります。指定しない場合のデフォルトは `none` となるからです。`<line-width>` のデフォルト値は `medium`、`<color>` のデフォルト値は `current-color` です。

- `<gap-repeat-rule>`
  - : `repeat()` 関数。最初の引数として {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の `<gap-rule>` 値を指定します。`<integer>` の値は `1` 以上で、`<gap-rule>` 値のリストを何回繰り返すかを指定します。

- `<auto-repeat-gap-rule>`
  - : `repeat()` 関数。最初の引数に `auto` を、その後の引数に 1 つ以上の `<gap-rule>` 値を指定します。これにより、自動リピーターが生成され、プロパティ値の他の要素から値を受け取らない隙間の罫線に `<gap-rule>` 値が割り当てられます。これにより、プロパティのカンマ区切りリストが循環することを防ぎます。リストには、`<auto-repeat-gap-rule>` の値を最大 1 つだけ含めることができます。

一括指定プロパティの宣言は、構成プロパティの値と似ていますが、カンマ区切りの値のリストに含まれるそれぞれの値は、最大 3 つの成分値からなる空白区切りのリストです。`repeat()` 関数の動作は構成プロパティの場合と同じですが、ここでも各値は空白区切りの成分のリストとなります。

```css live-sample___shorthand
div {
  rule:
    10px solid blue,
    repeat(auto, 20px dashed teal, 5px double orange),
    15px inset rebeccapurple;
}
```

{{EmbedLiveSample("shorthand", "", "300")}}

`rule` 一括指定を使用すると、`column-rule` と `row-rule` の両方が同じ値に設定されます。

```html hidden live-sample___autorepeat live-sample___regular live-sample___color live-sample___width live-sample___style live-sample___shorthand
<section>
  <div>
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
    <i id="bang">!</i>
  </div>
</section>
```

```css hidden live-sample___autorepeat live-sample___regular live-sample___color live-sample___width live-sample___style live-sample___shorthand
@layer hidden {
  div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    rule: solid 10px;
    border: 1px solid;
    overflow: visible;
    margin: 1em;
    background-color: white;
  }
  i {
    padding: 8px;
    border: 1px dashed;
    color: black;
    background-color: #ddddffcc;
  }
}
@supports not (row-rule-style: solid) {
  body::before {
    content: "このブラウザーはこれらの機能に対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

## 関連情報

- [CSS 隙間の装飾プロパティの概要](/ja/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
