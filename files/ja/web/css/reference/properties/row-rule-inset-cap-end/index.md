---
title: "`row-rule-inset-cap-end` プロパティ"
short-title: row-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-end
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`row-rule-inset-cap-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、行間罫の区間の[キャップ端点](#キャップ端点を理解する)の末尾側をずらせます。

{{InteractiveExample("CSS デモ: row-rule-inset-cap-end")}}

```css interactive-example-choice
row-rule-inset-cap-end: -20px;
```

```css interactive-example-choice
row-rule-inset-cap-end: 1.25em;
```

```css interactive-example-choice
row-rule-inset-cap-end: 0;
```

```css interactive-example-choice
row-rule-inset-cap-end: 100%;
```

```css interactive-example-choice
row-rule-inset-cap-end: overlap-join;
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
    <i>Q</i>
    <i>R</i>

    <i id="u">U</i>
    <i id="x">X</i>
    <i id="y">Y</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick magenta;
  row-rule-color: rebeccapurple;
  gap: 1em;
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
#u {
  grid-row: 3 / 4;
  grid-column: 7 / 8;
}
#y {
  grid-row: 4 / 5;
  grid-column: 4 / 5;
}
#x {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}
```

## 構文

```css
/* キーワード */
row-rule-inset-cap-end: overlap-join;

/* <length-percentage> 値 */
row-rule-inset-cap-end: 0;
row-rule-inset-cap-end: 1rem;
row-rule-inset-cap-end: -15px;
row-rule-inset-cap-end: -50%;

/* グローバル値 */
row-rule-inset-cap-end: inherit;
row-rule-inset-cap-end: initial;
row-rule-inset-cap-end: revert;
row-rule-inset-cap-end: revert-layer;
row-rule-inset-cap-end: unset;
```

### 値

このプロパティは、以下のリスト内の値を単一で指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。パーセント値は、キャップ端点における `column-gap` の幅、または `0` を基準とします。

## 解説

`row-rule-inset-cap-end` プロパティは、コンテナーの末尾にある行間罫の[キャップ区間の端点](#キャップ端点を理解する)と、他の罫線区間と交差しないキャップ端点の末尾側を内側にずらせます。デフォルト値は `0` で、これは `overlap-join` と同じです。正の値を指定すると行間罫の区間が短くなり、負の値を指定すると長くなります。

行間罫は、行の隙間に 1 つまたは複数の区間として描画され、これらの区間は次の領域の間に配置されます。

- CSS グリッドレイアウトにおける隣接する行。
- `flex-direction` の設定に応じた、フレックスレイアウトにおける隣接するフレックスアイテムまたはフレックス行。
- {{cssxref("column-height")}} に {{cssxref("&lt;length>")}} を設定した場合に存在することがある、段組みレイアウトにおける隣接する行。

行間罫が複数の列にまたがるか、複数の区間に分割されるかは {{cssxref("row-rule-break")}} プロパティで定義されます。行間罫の区間の間にある内部の区切りの幅は {{cssxref("column-gap")}} のサイズです。

`row-rule-inset-cap-end` に長さの値を指定すると、内部とコンテナーの末尾にあるキャップ区間がその値に応じて内側または外側にずれます。負の長さの値を指定すると外側にずれ、コンテナーの末尾にあるキャップ区間はコンテナーの末尾を越えて伸びます。

[パーセント値](#パーセント値を理解する)は、内部のキャップ区間端点では {{cssxref("column-gap")}} のサイズを基準とします。コンテナーの末尾にあるキャップ区間では、パーセント値は `0` を基準とするため、端点は内側にも外側にもずれません。

`row-rule-inset-cap-end` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- 行間罫のキャップ端点の先頭側と末尾側を内側にずらすには、`row-rule-inset-cap-end` プロパティと {{cssxref("row-rule-inset-cap-start")}} プロパティを、{{cssxref("row-rule-inset-cap")}} 一括指定プロパティで設定できます。

- すべての行間罫の区間の末尾側の端点を内側にずらすには、`row-rule-inset-cap-end` プロパティと {{cssxref("row-rule-inset-junction-end")}} プロパティを、{{cssxref("row-rule-inset-end")}} 一括指定プロパティで設定できます。

このプロパティの `-start`、`-junction`、`column-` に相当するプロパティを含むすべての区間端点は、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

### キャップ端点を理解する

キャップ区間の端点とは、接合区間の端点ではない区間端点です。これには、コンテナーのコンテンツ端にある端点に加え、他の列間罫や行間罫の区間が存在しない隙間の接合部にある端点も含まれます。

`row-rule-inset-cap-end` プロパティは、行間罫の区間の末尾側にあるキャップ端点のインセットを制御します。書字方向によって、他の行間罫や列間罫の区間がない内部の隙間やコンテナーの末尾にある行間罫の区間の、末尾側の端点を内側にずらします。

このプロパティは、空の領域に隣接する隙間に行間罫や列間罫の区間を描画するかどうかを定義する {{cssxref("rule-visibility-items")}} プロパティの影響を受けます。行間罫のキャップ区間端点は、コンテナーの末尾と、他の行間罫や列間罫の区間がない内部の隙間にのみ存在します。そのため、区間が描画されるかどうか（または、`rule` が可視値に設定されていた場合に描画されるかどうか）によって、どの行間罫の区間が末尾側のキャップ区間になるかが決まります。

次のデモでは、実線の行間罫の末尾側の区間がキャップ端点で終わっています。`row-rule-inset-cap-end: 16px` を設定すると、これらの端点がすべて `16px` 内側にずれます。インセットの `<length>` 値を変更して、どの区間がキャップ端点で終わるかを確認してみてください。

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
  <li class="a">18</li>
  <li class="b">22</li>
  <li class="c">24</li>
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
  rule-overlap: row-over-column;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap-end: -32px;

  border: 1px solid;
}
ul {
  place-items: center;
  width: 95vw;
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
.a {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
@layer no-support {
  @supports not (row-rule-inset-cap-end: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-cap-end に対応していません";
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
  row-rule-inset-cap-end: 100%;
  row-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.rowRuleInsetCapEnd = `${inset.value}${inset.dataset["unit"]}`;
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

{{EmbedLiveSample("caps", "", "400")}}

`-32px` を設定すると、すべての行間罫の末尾が `32px` 外側にずれ、線はコンテナーの端を `32px` 越えて描画されます。行間罫はボックスモデルに影響を与えないため、コンテナーやその他のコンテンツのレイアウトには影響しません。`0px` を設定すると、行間罫の末尾はコンテナーの端に揃います。これがデフォルトです。

`rule-visibility-items` を `between` にすると現れる二重線スタイルの行間罫の区間には、キャップ端点が追加されます。`between` は、隣接する両方の領域にアイテムがある場合にのみ、隙間の区間に罫線を描画します。アイテム `24` の上にある行間罫の区間は、他の行間罫や列間罫の区間がない交差部で終わるため、キャップ端点となり、`row-rule-inset-cap-end` プロパティの影響を受けます。アイテム `22` の上の区間は、他の罫線区間がある隙間の接合部で終わるため、キャップ端点ではありません。コンテナーの末尾に接する区間は少なくなりますが、`6` と `12` の間にある残りの区間は引き続きキャップ端点です。

コンテナーの末尾に接する罫線区間は、常に行間罫の末尾側のキャップ区間となり、`row-rule-inset-cap-end` プロパティの値の影響を受けます。

### パーセント値を理解する

パーセント値が基準とする長さは、端点の位置によって異なります。内部の端点では、キャップ端点が接する隙間の幅を基準とするため、罫線の隙間に接している場合は {{cssxref("column-gap")}} が基準となり、コンテナーの端では `0` が基準となります。

この例に不具合があるわけではありません。すべてのキャップ区間はコンテナーの端で終わるため、デフォルトではすべてのインセットが `0` になります。

{{EmbedLiveSample("percents", "", "400")}}

`rule-visibility-items` の値として `around` を選択してみてください。キャップ区間端点はコンテナーの端にのみあるため、パーセント値によるインセットは引き続き `0` に解決されます。

`rule-visibility-items` の値として `between` を選択してみてください。インセットの影響を受ける行間罫の末尾側キャップが現れます。グリッドアイテム `18` と `24` の間にある区間を確認してください。この区間は他の罫線区間がない内部の隙間で終わるため、パーセント値によるインセットは {{cssxref("column-gap")}} の幅（この場合は `20px`）を基準とします。`100%` を設定すると末尾が `20px` 内側にずれます。`-200%` を設定すると区間が `40px` 外側にずれ、線は `20px` の隙間を通って隣の列まで描画されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`row-rule-inset-cap-end` を設定して、フレックスコンテナー内のキャップ区間の末尾側の端点を内側にずらす方法を示します。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>行間罫のキャップ端点のインセット</h1>
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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。明るい青色の {{cssxref("rule")}} で列の隙間と行の隙間の両方に罫線を描画し、{{cssxref("row-rule-color")}} で行間罫の色をより濃い `blue` に設定します。最後に、`row-rule-inset-cap-end` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap-end: 16px;
}
```

{{cssxref("flex-direction")}} も `.column` コンテナーで設定し、フレックスコンテナーの主軸を変更して、アイテムが行ではなく列に沿って配置されるようにします。残りの CSS は簡潔にするため省略しています。

```css
.column {
  flex-direction: column;
}
```

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
  @supports not (row-rule-inset-cap-end: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-cap-end に対応していません";
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
  containers[0].style.rowRuleInsetCapEnd = val;
  containers[1].style.rowRuleInsetCapEnd = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "320")}}

インセットの大きさを変更してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("row-rule-inset")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
