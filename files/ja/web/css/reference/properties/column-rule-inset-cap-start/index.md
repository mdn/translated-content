---
title: "`column-rule-inset-cap-start` プロパティ"
short-title: column-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-start
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`column-rule-inset-cap-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、コンテナーの先頭にある列間罫の区間の[キャップ端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#キャップ端点を理解する)と、他の罫線区間と交差しないキャップ端点の位置を調整できます。

{{InteractiveExample("CSS デモ: column-rule-inset-cap-start")}}

<!-- 負の例を最初に置く必要がある -->

```css interactive-example-choice
column-rule-inset-cap-start: -20px;
```

```css interactive-example-choice
column-rule-inset-cap-start: 0;
```

```css interactive-example-choice
column-rule-inset-cap-start: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-start: 100%;
```

```css interactive-example-choice
column-rule-inset-cap-start: overlap-join;
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

    <i id="y">Y</i>
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
  column-rule-color: rebeccapurple;
  gap: 1em;
  rule-overlap: column-over-row;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#y {
  grid-column: 4 / 5;
  grid-row: 4 / 5;
}
#z {
  grid-column: 5 / 6;
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
column-rule-inset-cap-start: overlap-join;

/* <length-percentage> 値 */
column-rule-inset-cap-start: 0;
column-rule-inset-cap-start: 1em;
column-rule-inset-cap-start: -5px;
column-rule-inset-cap-start: -25%;

/* グローバル値 */
column-rule-inset-cap-start: inherit;
column-rule-inset-cap-start: initial;
column-rule-inset-cap-start: revert;
column-rule-inset-cap-start: revert-layer;
column-rule-inset-cap-start: unset;
```

### 値

このプロパティは、以下のリスト内の値を単一で指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : 位置を調整する大きさ（インセット）を指定します。パーセント値は、キャップ端点に対する割合であり、`row-gap` の幅、または `0` のどちらかになります。

## 解説

`column-rule-inset-cap-start` プロパティは、[キャップ区間の端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#キャップ端点を理解する)の先頭側の端点を内側にずらします。デフォルト値は `0` で、これは `overlap-join` と同じです。正の値を指定すると区間のサイズが減少し、負の値を指定すると増加します。

列間罫は、以下のものの間に配置され、列の隙間の中に 1 つまたは複数の区間として引かれます。

- CSS グリッドレイアウトにおける隣接する列。
- フレックスボックスレイアウトにおけるフレックスアイテムまたはフレックス行（`flex-direction` の設定次第）。
- 段組みレイアウトにおける段。

`column-rule-inset-cap-start` に長さの値を指定すると、内部とコンテナーの先頭側にあるキャップ区間が、その値に応じてずれます。負の値では外側にずれ、コンテナーの先頭を越えて伸びることがあります。

[パーセント値](#パーセント値を理解する)は、内部の区間では、{{cssxref("row-gap")}} のサイズに対する割合です。先頭のキャップ区間の場合、パーセント値は `0` を基準とするため、コンテナーの先頭側にあるキャップ区間の端点が、パーセント値によってコンテナーの先頭を越えてずれることはありません。

`column-rule-inset-cap-start` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の構成プロパティです。

- 先頭側と末尾側の両方のキャップ端点を内側にずらすには、`column-rule-inset-cap-start` プロパティと {{cssxref("column-rule-inset-cap-end")}} プロパティを、{{cssxref("column-rule-inset-cap")}} 一括指定プロパティを使って設定することができます。

- すべての列間罫の区間の先頭側の端点を内側にずらすには、`column-rule-inset-cap-start` プロパティと {{cssxref("column-rule-inset-junction-start")}} プロパティを、{{cssxref("column-rule-inset-start")}} 一括指定プロパティを使用して設定できます。

すべての区間の端点は、このプロパティの `-end`、`-junction`、`row-` の同等のものを含め、{{cssxref("rule-inset")}} 一括指定を使用して設定できます。

### 先頭側のキャップ端点を理解する

「キャップ区間の端点」とは、接合区間以外の端点を指します。これには、コンテナーのコンテンツの端にある端点に加え、他の罫線の区間が存在しない隙間の接合部の端点も含まれます。

`column-rule-inset-cap-start` プロパティは、列間罫のキャップ区間の先頭側の端点を内側にずらし、区間を短縮または延長できます。つまり、コンテナーの先頭に接する列間罫の区間と、他の列間罫や行間罫の区間がない内部の隙間から始まる区間の先頭側の端点を調整します。

列のキャップ区間の端点は、接合区間の区切りのみを制御する `column-rule-break` プロパティの値の設定の影響を受けません。ただし、これらの端点は、空の領域に隣接する隙間に列間罫および行間罫の区間が描画されるかどうかを定義する {{cssxref("rule-visibility-items")}} プロパティの影響を受けます。

列間罫のキャップ区間の端点は、コンテナーの端と、他の列間罫または行間罫の区間がない内部の隙間にのみ現れます。したがって、区間が描画されるかどうか（あるいは、`rule` が可視値に設定されていた場合に描画されるかどうか）によって、どの列間罫の区間が先頭側のキャップ区間になるかが決まります。

以下のデモでは、実線スタイルの列間罫の区間がキャップ端点から始まっています。`column-rule-inset-cap-start: 16px` を設定すると、コンテナーの先頭にあるすべての列間罫のキャップ区間が `16px` 内側にずれます。インセットの `<length>` 値を変更して、どの区間がキャップ端点から始まっているかを確認してください。

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
    <input type="range" min="-40" max="16" value="16" id="inset" data-unit="px"
  /></label>
  <output id="o">16px</output>
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
  column-rule: 10px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  column-rule-inset-cap-start: 16px;

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
li:nth-of-type(n + 9) {
  grid-row: 3 / 4;
}
li:nth-of-type(n + 12) {
  grid-row: 4 / 5;
}
li:nth-of-type(10) {
  grid-column: 5/6;
}
li:nth-of-type(11) {
  grid-column: 6/7;
}

@layer no-support {
  @supports not (column-rule-inset-cap-start: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-cap-start に対応していません";
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
  column-rule-inset-cap-start: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.columnRuleInsetCapStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "solid, repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "400")}}

インセットを変更してみてください。`0px` に設定すると、列間罫の先頭がコンテナーの先頭に配置されます。これがデフォルトの設定です。`-32px` に設定すると、区間の先頭が `32px` 外側にずれ、列間罫はコンテナーの端から `32px` はみ出して描画されます。列間罫はボックスモデルに影響を与えないため、これらの列間罫はコンテナーやその他のコンテンツのレイアウトに影響を及ぼしません。

`rule-visibility-items` の値として `between` を選択してみてください。この値を設定すると、隣接する 2 つの領域にアイテムが存在する場合にのみ、隙間の区間に罫線が描画されます。二重線スタイルの 3 本の列間罫に注目しながら、インセットの値を変更してみてください。これらの罫線には、コンテナーの先頭側の端にあるキャップ端点に加え、もう 1 つのキャップ端点があります。それぞれの罫線には、行間罫の区間が存在しない内部の隙間から始まる列間罫の区間があるため、これらの列区間もキャップ区間の端点となり、`column-rule-inset-cap-start` プロパティの影響を受けます。

`rule-visibility-items` の値として `around` を選択すると、隣接する 2 つの領域のうちどちらかにでもアイテムが存在する場合、隙間の区間に罫線が描画されます。この場合、内部の隙間の末尾の区間の上端に、行間罫の区間があります。これらの区間の先頭は、キャップではなく接合区間の端点であり、`column-rule-inset-cap-start` プロパティの影響を受けません。内部の隙間の接合部から始まるこれらの列区間のインセットは、{{cssxref("column-rule-inset-junction-start")}} プロパティで制御できます。

### パーセント値を理解する

パーセント値が基準とする長さは、端点の位置によって異なります。内部の端点におけるパーセント値は、キャップ端点が接する隙間の幅を基準とするため、罫線の隙間に隣接している場合は {{cssxref("row-gap")}} を基準とし、コンテナーの先頭側では `0` を基準とします。

この例は壊れているわけではありません。すべてのキャップ区間はコンテナーの端から始まっているため、デフォルトですべてのインセットが `0` になっています。

{{EmbedLiveSample("percents", "", "400")}}

`rule-visibility-items` の値として `around` を選択した場合も、どの区間も内側にずれません。コンテナーの端から始まる列間罫の区間では、パーセント値によるインセットはすべて `0` になります。一方、内部の隙間から始まり、行間罫の区間と交差する列間罫の区間は、キャップ端点から始まるのではなく接合端点から始まります。そのため、そのインセットは `column-rule-inset-junction-start` プロパティで定義されます。

`rule-visibility-items` の値として `between` を選択してください。2 つのキャップ先頭区間を備えた列間罫は、線種が `double` に設定されます。前と同様に、それぞれの列間罫には、他の罫区間が存在しない内部の隙間から始まる区間があります。これらの場合、パーセント値によるオフセットは {{cssxref("row-gap")}} の幅（この場合は `20px`）を基準としています。

`100%` を設定すると、キャップ区間の始まる位置が `20px` 内側にずれます。`-200%` を設定すると、これらの区間は `40px` だけ外側に配置され、線は `20px` の隙間を通って描画され、`20px` がアイテムの上の行に突き出ることになります。負の値が 1 行目と行間隔の合計の高さよりも大きい場合、この罫線はコンテナーの先頭の端から突き出ることになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`column-rule-inset-cap-start` を設定して、フレックスコンテナー内のキャップ区間の先頭側の端点を内側にずらす方法を示しています。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの唯一の違いは、2 つ目のコンテナーに `column` クラスが追加されている点です。

```html
<h1>列間罫のキャップ端点のインセット</h1>
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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーに変換します。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。`rule` で行の隙間と列の隙間に罫線を描画し、`column-rule-color` で列間罫の色をより濃い `blue` に設定します。最後に、`column-rule-inset-cap-start` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap-start: 16px;
}
```

次に、`.column` コンテナーに {{cssxref("flex-direction")}} を設定し、その中のアイテムが行ではなく列ごとに配置されるようにします。

```css
.column {
  flex-direction: column;
}
```

簡潔にするため、残りの CSS は省略しています。

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
  @supports not (column-rule-inset-cap-start: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-cap-start に対応していません";
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
  containers[0].style.columnRuleInsetCapStart = val;
  containers[1].style.columnRuleInsetCapStart = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("row-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-start")}} 一括指定
- {{cssxref("column-rule-inset-cap")}} 一括指定
- {{cssxref("column-rule-inset")}} 一括指定
- {{cssxref("rule-inset-start")}} 一括指定
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
