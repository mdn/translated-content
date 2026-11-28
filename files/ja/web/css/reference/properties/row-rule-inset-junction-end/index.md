---
title: "`row-rule-inset-junction-end` プロパティ"
short-title: row-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/row-rule-inset-junction-end
l10n:
  sourceCommit: a8ef801e2065b729d1a227f2dbd44e46d2dd5c1b
---

{{SeeCompatTable}}

**`row-rule-inset-junction-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[接合端点](#接合端点を理解する)である行間罫の区間の末尾側の端をずらせます。つまり、罫線区間が交差する隙間の接合部にある端点をずらせます。

{{InteractiveExample("CSS デモ: row-rule-inset-junction-end")}}

```css interactive-example-choice
row-rule-inset-junction-end: 0;
```

```css interactive-example-choice
row-rule-inset-junction-end: 0.5em;
```

```css interactive-example-choice
row-rule-inset-junction-end: 5px;
```

```css interactive-example-choice
row-rule-inset-junction-end: -50%;
```

```css interactive-example-choice
row-rule-inset-junction-end: overlap-join;
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
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  row-rule-color: magenta;
  row-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: row-over-column;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
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
row-rule-inset-junction-end: overlap-join;

/* <length-percentage> 値 */
row-rule-inset-junction-end: 0;
row-rule-inset-junction-end: 1em;
row-rule-inset-junction-end: -5px;
row-rule-inset-junction-end: -25%;

/* グローバル値 */
row-rule-inset-junction-end: inherit;
row-rule-inset-junction-end: initial;
row-rule-inset-junction-end: revert;
row-rule-inset-junction-end: revert-layer;
row-rule-inset-junction-end: unset;
```

### 値

このプロパティは、以下のリスト内の値を単一で指定します。

- `overlap-join`
  - : 接合区間が列間罫をまたいで伸びるよう指定します。その値は {{cssxref("column-gap")}} の値の半分と、使用されている {{cssxref("column-rule-width")}} の値の半分を足した値として解決されます。
- {{cssxref("length-percentage")}}
  - : インセットの大きさを指定します。パーセント値は、接合部にある端点での `column-gap` の幅を基準とします。

## 解説

`row-rule-inset-junction-end` プロパティは、行間罫の区間の末尾側にある[接合端点](#接合端点を理解する)を内側または外側にずらせます。デフォルト値は `0` です。正の値は区間を短くし、負の値と[`overlap-join` キーワード](#overlap-join_値)は区間を長くします。

行間罫は行の隙間に 1 つ以上の区間として描画されます。区間が描画されるのは、次のような領域の間です。

- CSS グリッドレイアウトの隣接する行。
- `flex-direction` に応じて、フレックスレイアウトの隣接するフレックスアイテムまたはフレックス行。
- {{cssxref("column-height")}} が {{cssxref("&lt;length>")}} に設定されている場合に存在しうる、段組みレイアウトの隣接する行。

行間罫が複数の列にまたがるか、複数の区間に分割されるかは {{cssxref("row-rule-break")}} プロパティで定義されます。行間罫の区間の間にある内部の区切りの大きさは {{cssxref("column-gap")}} の値になります。行間罫の各区間の末尾が、ほかの行間罫または罫線区間がある隙間の接合部に達する箇所に、接合端点が生じます。

`row-rule-inset-junction-end` プロパティはいくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- 行間罫の区間の左端と右端にある接合端点を内側にずらすには、`row-rule-inset-junction-end` プロパティと {{cssxref("row-rule-inset-junction-start")}} プロパティを {{cssxref("row-rule-inset-junction")}} 一括指定で設定できます。

- 行間罫の区間の末尾側にあるすべての端点を内側にずらすには、`row-rule-inset-junction-end` プロパティと {{cssxref("row-rule-inset-cap-end")}} プロパティを {{cssxref("row-rule-inset-end")}} 一括指定で設定できます。

- 区間の上端、下端、左端、右端にある接合端点を内側にずらすには、{{cssxref("row-rule-inset-junction")}} 一括指定と {{cssxref("column-rule-inset-junction")}} 一括指定を {{cssxref("rule-inset-junction")}} 一括指定で設定できます。

このプロパティの `-start`、`-cap`、`column-` に相当するプロパティも含め、すべての区間端点は {{cssxref("rule-inset")}} 一括指定で設定できます。

### 接合端点を理解する

_接合端点_とは、内部の隙間にある区間端点のうち、ほかの列間罫または行間罫の区間が存在する隙間の交差部に達するものです。`row-rule-inset-junction-end` プロパティは、行間罫の接合区間の末尾側を内側にずらし、区間を短縮または延長できます。

`row-rule-inset-junction-end` に長さを指定すると、その値の分だけ接合区間が内側にずれます。パーセント値は {{cssxref("column-gap")}} の大きさを基準とします。負の値を指定すると外側にずれ、接合区間の末尾側が伸びます。`-50%` を設定すると、列の隙間の幅にかかわらず、接合区間の末尾側が隣接する列の隙間の中ほどまで伸びます。

次のデモでは、最後の列以外のすべての列で、行間罫の区間が接合端点で終わっています。`row-rule-inset-junction-end: 16px` を設定すると、これらの区間の右端、つまり末尾が `16px` 内側にずれます。インセットの `<length>` 値を変更すると、どの行間罫の区間が接合端点で終わっているかを確認しやすくなります。

```html hidden live-sample___junctions live-sample___percents
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
  <li class="b">21</li>
  <li class="c">23</li>
</ul>

<p>
  <label
    ><code>rule-visibility-items</code> の値 <code>
    <select id="visibility">
      <option>all</option>
      <option>between</option>
      <option>around</option>
      <option selected>normal</option>
  </select>
  </label>
</p>
```

```html hidden live-sample___junctions
<p>
  <label
    >インセットの大きさを変更してください。
    <input type="range" min="-20" max="16" value="16" id="inset" data-unit="px"
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
      value="50"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">50%</output>
</p>
```

```css hidden live-sample___junctions live-sample___percents
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
  row-rule-inset-junction-end: 16px;

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
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-junction-end に対応していません";
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
  row-rule-inset-junction-end: 100%;
  row-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetJunctionEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
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

{{EmbedLiveSample("junctions", "", "400")}}

{{cssxref("rule-break")}} プロパティは `intersection` に設定されているため、すべての行と列の区間が各隙間の接合部で分割され、内部にある行間罫の各区間の末尾はデフォルトで列の隙間に接します。`row-rule-inset-junction-end` プロパティのデフォルト値は `0` です。

インセットの値を変更してみてください。プロパティの値を変更すると、グリッド中央にある行間罫の区間の右端だけが変わることに注目してください。コンテナーにある区間の端点は変わりません。これらはキャップ端点であり、`row-rule-inset-junction-end` プロパティの影響を受けません。

`rule-visibility-items` の値として `between` を選択してみてください。この値では、隣接する両方の領域にアイテムがある場合にのみ、隙間の区間に罫線が描画されます。`17` と `23` の間にある行間罫の区間は、ほかの罫線区間がない内部交差部で終わるようになります。この行間罫の区間の末尾は _キャップ区間端点_ であり、`row-rule-inset-junction-end` プロパティの影響を受けません。この区間端点を内側にずらすには、`row-rule-inset-cap-end` プロパティを使用できます。

`around` は、隣接する 2 つの領域の少なくとも一方にアイテムがある場合、隙間の区間に罫線を描画します。この例では、接合区間端点がキャップ区間端点に変わることはありませんが、描画されないキャップ区間があります。

### `overlap-join` 値

`overlap-join` 値は内部区間の末尾を外側にずらし、交差する列間罫の反対側の端に揃えます。この値は {{cssxref("column-gap")}} の半分（隙間の中央まで伸ばす長さ）と、列間罫の幅の半分を足した値として解決されます。`row-rule-inset-junction-end` に `overlap-join` キーワード値を設定すると、接合端点を持つ行間罫の区間が列の隙間に伸び、その隙間に描画された列間罫の反対側の端に接続します。

次のライブサンプルでは、`row-rule-inset-junction-end` に `overlap-join` を設定しています。

```html hidden
<p>
  <label
    ><code>column-gap</code> の値を変更してください。
    <input type="range" min="10" max="40" value="40" id="gap" data-unit="px"
  /></label>
  <output id="og">40px</output>
</p>
<p>
  <label
    ><code>column-rule-width</code> の値を変更してください。
    <input type="range" min="0" max="40" value="16" id="rrw" data-unit="px"
  /></label>
  <output id="ow">16px</output>
</p>

<ul>
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
</ul>
```

```css hidden
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style-type: none;
  gap: 30px;
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: row-over-column;
  rule-visibility-items: around;
  row-rule-break: intersection;
  row-rule-inset-junction-end: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
  margin: auto;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em;
  width: 100%;
  box-sizing: border-box;
}
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-junction-end に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const ul = document.querySelector("ul");
const gapSize = document.getElementById("gap");
const og = document.getElementById("og");
const ruleWidth = document.getElementById("rrw");
const ow = document.getElementById("ow");

gapSize.addEventListener("input", () => {
  og.innerText = ul.style.columnGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.columnRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

{{cssxref("column-rule-width")}} と {{cssxref("column-gap")}} の大きさを変更してみてください。隙間や列間罫の大きさにかかわらず、行間罫の区間の末尾が常に列間罫をまたいで伸び、端点が隙間に描画された列間罫の反対側の端に揃うことを確認してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`row-rule-inset-junction-end` を設定して、フレックスコンテナー内の行間罫の接合区間の末尾側の端点を内側にずらす方法を示します。

#### HTML

マークアップには、それぞれ 7 つの子要素を持つ 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>行間罫の接合端点を内側にずらす</h1>
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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。列の隙間と行の隙間の両方に罫線を描画するため、明るい青色の {{cssxref("rule")}} を定義し、さらに {{cssxref("row-rule-color")}} を上書きして、行間罫の色を濃い `blue` に設定します。最後に、`row-rule-inset-junction-end` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-junction-end: 16px;
}
```

`.column` コンテナーの {{cssxref("flex-direction")}} も `column` に設定します。これにより、フレックスコンテナーの主軸が変わり、アイテムが行ではなく列に沿って配置されます。

```css
.column {
  flex-direction: column;
}
```

残りの CSS は簡潔にするため省略しています。

```css hidden
h1,
article {
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
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-junction-end に対応していません";
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
  containers[0].style.rowRuleInsetJunctionEnd = val;
  containers[1].style.rowRuleInsetJunctionEnd = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。このプロパティは、複数の区間に分割された行間罫にのみ影響します。行間罫がコンテナーの幅全体にわたる単一の区間である場合、その区間には 2 つのキャップ端点があり、接合端点はありません。そのため、`row-rule-inset-junction-end` の値を変更しても影響しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("row-rule-inset-junction-start")}}
- {{cssxref("row-rule-inset-junction")}} 一括指定
- {{cssxref("row-rule-inset")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
