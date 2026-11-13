---
title: "`row-rule-inset-cap-start` プロパティ"
short-title: row-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-start
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`row-rule-inset-cap-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、行間罫の区間の[キャップ端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#キャップ端点を理解する)の先頭側をずらせます。

{{InteractiveExample("CSS デモ: row-rule-inset-cap-start")}}

<!-- negative example must come first -->

```css interactive-example-choice
row-rule-inset-cap-start: -20px;
```

```css interactive-example-choice
row-rule-inset-cap-start: 0;
```

```css interactive-example-choice
row-rule-inset-cap-start: 1em;
```

```css interactive-example-choice
row-rule-inset-cap-start: 100%;
```

```css interactive-example-choice
row-rule-inset-cap-start: overlap-join;
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

## 構文

```css
/* キーワード */
row-rule-inset-cap-start: overlap-join;

/* <length-percentage> 値 */
row-rule-inset-cap-start: 0;
row-rule-inset-cap-start: 1em;
row-rule-inset-cap-start: -5px;
row-rule-inset-cap-start: -25%;

/* グローバル値 */
row-rule-inset-cap-start: inherit;
row-rule-inset-cap-start: initial;
row-rule-inset-cap-start: revert;
row-rule-inset-cap-start: revert-layer;
row-rule-inset-cap-start: unset;
```

### 値

このプロパティは、以下のリスト内の値を単一で指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。パーセント値は、キャップ端点における `column-gap` の幅、または `0` を基準とします。

## 解説

`row-rule-inset-cap-start` プロパティは、コンテナーの先頭にある行間罫の[キャップ区間の端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#キャップ端点を理解する)と、他の罫線区間と交差しないキャップ端点の先頭側を内側にずらせます。デフォルト値は `0` で、これは `overlap-join` と同じです。正の値を指定すると区間が短くなり、負の値を指定すると長くなります。

行間罫は、行の隙間に 1 つまたは複数の区間として描画され、これらの区間は次の領域の間に配置されます。

- CSS グリッドレイアウトにおける隣接する行。
- `flex-direction` の設定に応じた、フレックスレイアウトにおける隣接するフレックスアイテムまたはフレックス行。
- {{cssxref("column-height")}} に {{cssxref("&lt;length>")}} を設定した場合に存在することがある、段組みレイアウトにおける隣接する行。

`row-rule-inset-cap-start` に長さの値を指定すると、内部とコンテナーの先頭にあるキャップ区間端点が、その値に応じて内側または外側にずれます。負の長さの値を指定すると外側にずれ、コンテナー端にあるキャップ区間はコンテナーの先頭を越えて伸びます。

[パーセント値](#パーセント値を理解する)は、内部のキャップ区間では {{cssxref("column-gap")}} のサイズを基準とします。コンテナーの先頭にあるキャップ区間では、パーセント値は `0` を基準とするため、常に `0px` になります。

`row-rule-inset-cap-start` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- 行間罫のキャップ区間の先頭側と末尾側を内側にずらすには、`row-rule-inset-cap-start` プロパティと {{cssxref("row-rule-inset-cap-end")}} プロパティを、{{cssxref("row-rule-inset-cap")}} 一括指定プロパティで設定できます。

- すべての行間罫の区間の先頭側の端点を内側にずらすには、`row-rule-inset-cap-start` プロパティと {{cssxref("row-rule-inset-junction-start")}} プロパティを、{{cssxref("row-rule-inset-start")}} 一括指定プロパティで設定できます。

このプロパティの `-end`、`-junction`、`column-` に相当するプロパティを含むすべての区間端点は、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

### キャップ端点の先頭側を理解する

_キャップ区間の端点_とは、接合区間の端点ではない区間端点です。これには、コンテナーのコンテンツ端にある端点に加え、他の罫線区間が存在しない隙間の接合部にある端点も含まれます。

`row-rule-inset-cap-start` プロパティは、キャップ端点を持つ行間罫の先頭側のインセットを制御します。このプロパティにより、次の区間の先頭側を短縮または延長できます。

- コンテナーの先頭に接する行間罫の区間。
- 他の行間罫や列間罫の区間がない内部の隙間に、先頭側が接する行間罫の区間。

行間罫のキャップ区間は、空の領域に隣接する隙間に行間罫や列間罫の区間を描画するかどうかを定義する {{cssxref("rule-visibility-items")}} プロパティの影響を受けます。値を `auto` から `between` または `around` に変更すると、内部にキャップ区間が追加されることがあります。

次のデモでは、コンテナー端に接する行間罫の先頭側の区間が、キャップ端点から始まっています。`row-rule-inset-cap-start: -32px` を設定すると、これらの端点がすべて `32px` 外側にずれます。行間罫はボックスモデルに影響を与えないため、外側に伸びた線はコンテンツのレイアウトに影響しません。インセットの `<length>` 値を変更して、どの区間がキャップ端点から始まるかを確認してみてください。

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
  row-rule-inset-cap-start: -32px;

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
  @supports not (row-rule-inset-cap-start: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-cap-start に対応していません";
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
  row-rule-inset-cap-start: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.rowRuleInsetCapStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "350")}}

インセットを変更してみてください。`0px` を設定すると、行間罫の先頭がコンテナーの先頭に揃います。これがデフォルトです。

`rule-visibility-items` の値として `between` を選択してみてください。この値では、隣接する両方の領域にアイテムがある場合にのみ、隙間に罫線が描画されます。コンテナーの先頭には、引き続き行間罫のキャップ端点があります。二重線で示される 3 本目の行間罫には、アイテム `12` と `16` の間の区間の先頭側にもキャップ端点が追加されます。この端点は他の罫線区間と交差しないため、`row-rule-inset-cap-start` プロパティの影響を受けます。

この場合、隣接する領域の少なくとも一方にアイテムがあれば隙間に罫線を描画する `rule-visibility-items` の `around` では、キャップ区間端点は追加されません。`12` と `16` の間の区間の先頭は、アイテムの先頭側にある列の隙間で列間罫の区間と交差するため、キャップ端点ではなく接合区間端点になります。接合端点のインセットには、代わりに {{cssxref("row-rule-inset-junction-start")}} プロパティを使用します。

### パーセント値を理解する

パーセント値が基準とする長さは、端点の位置によって異なります。内部の端点では、キャップ端点が接する隙間の幅を基準とするため、罫線の隙間に接している場合は {{cssxref("column-gap")}} が基準となり、コンテナーの端では `0` が基準となります。

この例に不具合があるわけではありません。すべてのキャップ区間はコンテナーの端から始まるため、デフォルトではすべてのインセットが `0` になります。

{{EmbedLiveSample("percents", "", "350")}}

スライダーは、`rule-visibility-items` の値を `between` にした場合にのみ効果があり、その場合も、この値によって作られる内部のキャップ端点を持つ区間、つまり `12` と `16` の間の区間にのみ作用します。この区間では、パーセント値によるずれの基準は {{cssxref("column-gap")}} の幅で、この例では `20px` です。`100%` を設定するとキャップ区間の先頭が `20px` 内側にずれます。`-200%` を設定すると区間が `40px` 外側にずれ、罫線区間は `20px` の隙間を通って前の列まで描画されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`row-rule-inset-cap-start` を設定して、フレックスコンテナー内のキャップ区間の先頭側の端点を内側にずらす方法を示します。

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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。明るい青色の {{cssxref("rule")}} で列の隙間と行の隙間の両方に罫線を描画し、{{cssxref("row-rule-color")}} で行間罫の色をより濃い `blue` に設定します。最後に、`row-rule-inset-cap-start` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap-start: 16px;
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
  gap: 42px;
  rule: 1px solid black;
  width: 100vw;
  padding: 0 50px;
  box-sizing: border-box;
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
  @supports not (row-rule-inset-cap-start: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-cap-start に対応していません";
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
  containers[0].style.rowRuleInsetCapStart = val;
  containers[1].style.rowRuleInsetCapStart = val;
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

- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-junction-start")}}
- {{cssxref("row-rule-inset-start")}} 一括指定
- {{cssxref("row-rule-inset-cap")}} 一括指定
- {{cssxref("row-rule-inset")}} 一括指定
- {{cssxref("rule-inset-start")}} 一括指定
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
