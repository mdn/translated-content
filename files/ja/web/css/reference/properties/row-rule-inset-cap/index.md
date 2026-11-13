---
title: "`row-rule-inset-cap` プロパティ"
short-title: row-rule-inset-cap
slug: Web/CSS/Reference/Properties/row-rule-inset-cap
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`row-rule-inset-cap`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、コンテナーの左端と右端にある行間罫の区間の[キャップ端点](#キャップ端点を理解する)と、他の列間罫や行間罫の区間と交差しない端点をずらせます。

{{InteractiveExample("CSS デモ: row-rule-inset-cap")}}

```css interactive-example-choice
row-rule-inset-cap: -20px;
```

```css interactive-example-choice
row-rule-inset-cap: 0;
```

```css interactive-example-choice
row-rule-inset-cap: 1em;
```

```css interactive-example-choice
row-rule-inset-cap: 100%;
```

```css interactive-example-choice
row-rule-inset-cap: overlap-join;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
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

    <i id="r">R</i>
    <i id="z">Z</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick rebeccapurple;
  row-rule-color: magenta;
  gap: 0.5em;
  rule-overlap: row-over-column;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#r {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 5 / 6;
  grid-row: 5 / 6;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}

## 構文

```css
/* キーワード */
row-rule-inset-cap: overlap-join;

/* <length-percentage> 値 */
row-rule-inset-cap: 0;
row-rule-inset-cap: 1em;
row-rule-inset-cap: -5px;
row-rule-inset-cap: -25%;

/* 2 つの値 */
row-rule-inset-cap: overlap-join 1em;
row-rule-inset-cap: -5px -25%;

/* グローバル値 */
row-rule-inset-cap: inherit;
row-rule-inset-cap: initial;
row-rule-inset-cap: revert;
row-rule-inset-cap: revert-layer;
row-rule-inset-cap: unset;
```

### 値

このプロパティは、以下のリスト内の値 1 つまたは 2 つで指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。[パーセント値](#パーセント値を理解する)は、交差する隙間の幅を基準とします。この幅は、隙間の接合部にある区間の端点では `column-gap` の幅となり、コンテナーの端にある端点では `0` となります。

## 解説

`row-rule-inset-cap` 一括指定プロパティを使用すると、{{cssxref("row-rule-inset-cap-start")}} および {{cssxref("row-rule-inset-cap-end")}} プロパティを設定でき、単一の宣言で[キャップ区間の端点](#キャップ端点を理解する)の左側と右側を内側または外側にずらせます。

1 つの値を指定すると、両方のプロパティにその値が設定されます。2 つの値を指定すると、`-start` には最初の値が、`-end` には 2 番目の値が設定されます。デフォルト値は `0` で、キャップ端点の場合は `overlap-join` と同じです。正の値を指定すると区間が短く（内側に）なり、負の値を指定すると長く（外側に）なります。

行間罫は、行の隙間に 1 つまたは複数の区間として描画され、これらの区間は次の領域の間に配置されます。

- CSS グリッドレイアウトにおける隣接する行。
- `flex-direction` の設定に応じた、フレックスレイアウトにおける隣接するフレックスアイテムまたはフレックス行。
- {{cssxref("column-height")}} に {{cssxref("&lt;length>")}} を設定した場合に存在することがある、段組みレイアウトにおける隣接する行。

行間罫が複数の列にまたがるか、複数の区間に分割されるかは {{cssxref("row-rule-break")}} プロパティで定義されます。行間罫の区間の間にある内部の区切りの幅は、通常 {{cssxref("column-gap")}} のサイズです。

`row-rule-inset-cap` に長さの値を指定すると、その値だけ区間が内側にずれます。負の長さの値を指定すると区間が外側に広がり、コンテナーの左端と右端にあるキャップ区間はコンテナーの外側まで伸びます。

[パーセント値](#パーセント値を理解する)は、内部の区間では {{cssxref("column-gap")}} のサイズを基準とします。`-50%` を設定すると区間は隙間の中央まで伸び、`-100%` を設定すると隙間全体に広がります。コンテナーの端にあるキャップ区間では、パーセント値は `0` を基準とするため、キャップ端点に影響しません。

`row-rule-inset-cap` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- すべての行間罫の区間の左側と右側を内側にずらすには、`row-rule-inset-cap` プロパティと {{cssxref("row-rule-inset-junction")}} プロパティを、{{cssxref("row-rule-inset")}} 一括指定プロパティで設定できます。

- 行間罫と列間罫のキャップ区間の端点を内側にずらすには、`row-rule-inset-cap` プロパティと {{cssxref("column-rule-inset-cap")}} プロパティを、{{cssxref("rule-inset-cap")}} 一括指定プロパティで設定できます。

このプロパティの `-junction` および `column-` に相当するプロパティを含むすべての区間端点は、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

### キャップ端点を理解する

キャップ区間の端点とは、接合区間の端点ではない区間の端点です。これには、コンテナーのコンテンツ端にある端点に加え、他の列間罫や行間罫の区間が存在しない隙間の接合部にある端点も含まれます。

`row-rule-inset-cap` プロパティは、コンテナー端にある行間罫の先頭と末尾、および他の区間が存在しない内部の行間罫の区間の先頭と末尾を、外側または内側にずらせます。

キャップ区間は、空の領域に隣接する隙間に行間罫や列間罫の区間を描画するかどうかを定義する {{cssxref("rule-visibility-items")}} プロパティの影響を受けます。値を `auto` から `between` または `around` に変更すると、内部に追加のキャップ区間が作られることがあります。

次のデモでは、行間罫の区間がコンテナーの左端と右端でキャップ端点になっています。`row-rule-inset-cap: -32px` を設定すると、これらの端点が `32px` 外側にずれます。インセットの `<length>` 値を変更して、どの区間がキャップ端点から始まるか、またはキャップ端点で終わるかを確認してみてください。

```html hidden live-sample___caps live-sample___percents
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
</ul>

<p>
  <label>
    <code>rule-visibility-items</code> の値
    <select id="visibility">
      <option>all</option>
      <option>between</option>
      <option>around</option>
      <option selected>normal</option>
    </select>
  </label>
</p>
```

```html hidden live-sample___caps
<p>
  <label
    >インセットの大きさを変更してください。
    <input
      type="range"
      min="-40"
      max="16"
      value="-32"
      id="inset"
      data-unit="px"
  /></label>
  <output id="o">-32px</output>
</p>
```

```html hidden live-sample___percents
<p>
  <label
    >インセットの大きさを変更してください。
    <input
      type="range"
      min="-200"
      max="100"
      value="100"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">100%</output>
</p>
```

```css hidden live-sample___caps live-sample___percents
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: none;
  gap: 20px;
  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap: -32px;

  border: 1px solid;
  margin: auto 40px;
}
ul {
  place-items: center;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(n + 9) {
  grid-row: 3 / 4;
}
li:nth-of-type(n + 13) {
  grid-row: 4 / 5;
}
li:nth-of-type(12),
li:nth-of-type(16) {
  grid-column: 5/6;
}
li:nth-of-type(17) {
  grid-column: 6/7;
}
@layer no-support {
  @supports not (row-rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-cap に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css hidden live-sample___percents
ul {
  row-rule-inset-cap: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else if (visibility.value === "around") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value === "around") {
    ul.style.rowRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "380")}}

`0px` を設定すると、行間罫の端がコンテナーの左端と右端に揃います。これがデフォルトです。

`rule-visibility-items` の値として `between` を選択してみてください。この値では、隣接する両方の領域にアイテムがある場合にのみ、隙間の区間に罫線が描画されます。コンテナーの先頭側には引き続き行間罫のキャップ端点がありますが、末尾側にはありません。二重線で示された 3 本目の行間罫には、さらに 2 つのキャップ端点があります。1 つは `11` と `15` の間の区間の末尾側、もう 1 つは `12` と `16` の間の区間の先頭側です。これらは他の罫線区間と交差しないため、`row-rule-inset-cap-start` プロパティの影響を受けます。

この場合、隣接する領域の少なくとも一方にアイテムがあれば隙間の区間に罫線を描画する `around` を `rule-visibility-items` に設定しても、キャップ区間の端点は追加されません。内部の区間端点はすべて列間罫の区間がある接合部に達するため、キャップ端点ではなく接合端点になります。接合端点は {{cssxref("row-rule-inset-junction")}} 一括指定プロパティで内側にずらせます。

### パーセント値を理解する

パーセント値が基準とする長さは、端点の位置によって異なります。内部の端点でのパーセント値は、キャップ端点が接する隙間の幅を基準とします。罫線の隙間に接している場合は {{cssxref("column-gap")}} に、{{cssxref("justify-content")}} の設定で追加された間隔があればそれを加えた幅が基準となり、コンテナーの端では `0` が基準となります。例えば、内部のキャップ端点では `row-rule-inset-cap: 50%` は隙間の接合部の幅（`column-gap` の値）の半分に解決され、コンテナーの端では `0` に解決されます。

この例に不具合があるわけではありません。`rule-visibility-items` が `normal` の場合、すべての行間罫のキャップ端点はコンテナーの左端または右端に接するため、パーセント値はすべて `0` を基準とします。

{{EmbedLiveSample("percents", "", "380")}}

`rule-visibility-items` の値として `around` を選択してみてください。最初の 3 行はコンテナー端から始まり、最初と最後の行はコンテナー端で終わります。これらの行間罫のキャップ区間端点に指定したパーセント値は、すべて `0` に解決されます。他の区間はすべて、列間罫の区間がある内部の隙間で終わるため、キャップ区間の端点ではありません。

`rule-visibility-items` の値として `between` を選択してみてください。前のデモと同様に、この値では内部に 2 つのキャップ区間端点が作られます。`11` と `15` の間の区間の右側、および `12` と `16` の間の区間の左側は、他の罫線区間と交差しません。この 2 つのキャップ端点では、パーセント値によるオフセットは {{cssxref("column-gap")}} の幅（この場合は `20px`）を基準とします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`row-rule-inset-cap` を設定して、フレックスコンテナー内の行間罫のキャップ区間端点を内側にずらす方法を示します。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>行間罫のキャップ端点を内側にずらす</h1>
<article>
  <section>
    <h2>flex-direction: row</h2>
    <div class="flexbox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  <section>
    <h2>flex-direction: column</h2>
    <div class="flexbox column">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</article>
```

```html hidden
<p>
  <label
    >インセットの大きさを変更してください。
    <input type="range" min="-40" max="16" value="16" id="inset"
  /></label>
  <output id="o">16px</output>
</p>
```

#### CSS

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。`lightblue` の {{cssxref("rule")}} で列の隙間と行の隙間の両方に罫線を描画し、{{cssxref("row-rule-color")}} で行間罫の色をより濃い `blue` に設定します。最後に、`row-rule-inset-cap` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap: 16px;
}
```

{{cssxref("flex-direction")}} も `.column` コンテナーで設定し、フレックスコンテナーの主軸を変更して、アイテムが行ではなく列に沿って配置されるようにします。

```css
.column {
  flex-direction: column;
}
```

残りの CSS は簡潔にするため省略しています。

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}
article {
  display: flex;
  gap: 5vw;
  rule: 1px solid black;
  width: 100vw;
}
section {
  flex-basis: 45vw;
}
.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
output {
  display: inline-block;
  width: 2em;
}
p {
  margin-top: 2.5em;
}
@layer no-support {
  @supports not (row-rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-cap に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden live-sample___basic
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.rowRuleInsetCap = val;
  containers[1].style.rowRuleInsetCap = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。行間罫の区間は、他の行間罫や列間罫の区間と交差しないキャップ端点、つまり左側、右側、または両側の端点でのみ伸縮することに注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}
- {{cssxref("row-rule-inset")}} 一括指定
- {{cssxref("column-rule-inset-cap")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
