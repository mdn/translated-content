---
title: "`rule-inset-cap` プロパティ"
short-title: rule-inset-cap
slug: Web/CSS/Reference/Properties/rule-inset-cap
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`rule-inset-cap`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、列間罫と行間罫の区間の[キャップ端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#キャップ端点を理解する)を同じ値だけずらせます。

{{InteractiveExample("CSS デモ: rule-inset-cap")}}

<!-- negative example must come first -->

```css interactive-example-choice
rule-inset-cap: -20px;
```

```css interactive-example-choice
rule-inset-cap: 0;
```

```css interactive-example-choice
rule-inset-cap: 1em;
```

```css interactive-example-choice
rule-inset-cap: 100%;
```

```css interactive-example-choice
rule-inset-cap: overlap-join;
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

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("column-rule-inset-cap")}}
- {{cssxref("row-rule-inset-cap")}}

## 構文

```css
/* キーワード */
rule-inset-cap: overlap-join;

/* <length-percentage> 値 */
rule-inset-cap: 0;
rule-inset-cap: 1em;
rule-inset-cap: -5px;
rule-inset-cap: -25%;

/* 2 つの値 */
rule-inset-cap: 0 20px;
rule-inset-cap: 1em -5px;
rule-inset-cap: overlap-join -25%;

/* グローバル値 */
rule-inset-cap: inherit;
rule-inset-cap: initial;
rule-inset-cap: revert;
rule-inset-cap: revert-layer;
rule-inset-cap: unset;
```

### 値

このプロパティは、以下のリストの値で 1 つまたは 2 つ指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。コンテナー端にあるキャップでは、パーセント値は `0` に解決されます。内部の隙間では、列間罫の区間のキャップに対するパーセント値は隣接する `row-gap` の高さを、行間罫の区間のキャップに対するパーセント値は隣接する `column-gap` の幅を基準とします。

## 解説

`rule-inset-cap` 一括指定プロパティを使用すると、{{cssxref("row-rule-inset-cap")}} プロパティと {{cssxref("column-rule-inset-cap")}} プロパティを単一の宣言で同じ値に設定し、行間罫と列間罫のキャップ区間端点をその値だけ内側にずらせます。

値を 1 つ指定すると、キャップ区間端点の先頭側と末尾側の両方にその値が設定されます。値を 2 つ指定すると、行間罫と列間罫のキャップ区間端点の先頭側には最初の値が、末尾側には 2 つ目の値が設定されます。

デフォルト値は `0` で、キャップ端点では `overlap-join` と同じです。正の値を指定すると区間が短くなり、負の値を指定すると長くなります。

`rule-inset-cap` プロパティと {{cssxref("rule-inset-junction")}} プロパティは、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`rule-inset-cap` を設定して、フレックスコンテナー内のキャップ区間端点を内側にずらす方法を示します。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>キャップ端点のインセット</h1>
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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。明るい青色の {{cssxref("rule")}} で行の隙間と列の隙間の両方に罫線を描画し、{{cssxref("column-rule-color")}} で列間罫の色をより濃い `blue` に設定します。最後に、`rule-inset-cap` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  rule-inset-cap: 16px;
}
```

`.column` コンテナーでは {{cssxref("flex-direction")}} も設定し、アイテムが行ではなく列に沿って配置されるようにします。簡潔にするため、ほかの CSS スタイルとフォームを操作可能にするコードは省略しています。

```css
.column {
  flex-direction: column;
}
```

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
  width: 90vw;
  margin: auto;
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
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは rule-inset-cap に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.ruleInsetCap = val;
  containers[1].style.ruleInsetCap = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "300")}}

インセットの大きさを変更してください。

### 2 つの値を設定する

#### HTML

```html hidden
<p>
  <label
    ><code>row-rule-inset-cap</code> の値を変更してみてください。
    <input type="range" min="-40" max="40" value="40" id="row" data-unit="px"
  /></label>
  <output id="og">40px</output>
</p>
<p>
  <label
    ><code>column-rule-inset-cap</code> の値を変更してみてください。
    <input type="range" min="-40" max="40" value="-40" id="col" data-unit="px"
  /></label>
  <output id="ow">-40px</output>
</p>
```

HTML には、9 つのリスト項目 ({{htmlelement("li")}}) を含む順序なしリスト ({{htmlelement("ul")}}) があります。

```html
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
</ul>
```

簡潔にするため、値を選択するユーザーインターフェイスと、操作を可能にする JavaScript は省略しています。

#### CSS

{{cssxref("display")}} を `grid` に設定してグリッドコンテナーを作成し、{{cssxref("grid-template-columns")}} で 4 列を作り、{{cssxref("gap")}} を `30px` に設定します。{{cssxref("row-rule")}} プロパティと {{cssxref("column-rule")}} プロパティで罫線を定義します。次に `rule-inset-cap` プロパティを使用して、キャップ区間端点の先頭側を `40px` 内側に、末尾側を `-40px` 外側にずらします。

6 番目のグリッドアイテムは 2 列にまたがるように設定します。

```css
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 30px;
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;

  rule-inset-cap: 40px -40px;
}
li:nth-of-type(6) {
  grid-column-end: span 2;
}
```

```css hidden
ul {
  width: calc(95vw - 80px);
  border: 1px solid;
  list-style-type: none;
  margin: auto;
  padding: 0;
  place-items: center;
}
li {
  place-content: center;
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 5vw;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(6) {
  padding: 2em 0;
}
li code {
  display: block;
  margin: 0 auto;
  text-align: left;
  background-color: #fcfcfc;
  width: calc(47.5vw - 40px);
}
output {
  font-family: monospace;
}
input {
  accent-color: olive;
}
@layer no-support {
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは rule-inset-cap に対応していません";
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
const rowSize = document.getElementById("row");
const og = document.getElementById("og");
const colSize = document.getElementById("col");
const ow = document.getElementById("ow");
const cell = document.querySelector("li:nth-of-type(6)");
let text = "";
function update() {
  ul.style.ruleInsetCap = text = `${rowSize.value}px ${colSize.value}px`;
  cell.innerHTML = `<code>rule-inset-cap: ${text};</code>`;
}

update();

rowSize.addEventListener("input", () => {
  og.innerText = `${rowSize.value}px`;
  update();
});

colSize.addEventListener("input", () => {
  ow.innerText = `${colSize.value}px`;
  update();
});
```

#### 結果

{{EmbedLiveSample("Setting two value", "", "500")}}

キャップ区間端点の先頭側と末尾側のインセット値を変更してみてください。

### 内部のキャップ区間

この例では、`rule-inset-cap` を設定してグリッドコンテナー内のキャップ区間端点を内側にずらす方法と、{{cssxref("rule-visibility-items")}} プロパティによって内部の端点がキャップ区間端点になる仕組みを示します。

#### HTML

コンテナーとして順序なしリスト ({{htmlelement("ul")}}) を使用し、その中に複数のリスト項目 ({{htmlelement("li")}}) を含めます。

また、`rule-visibility-items` の各キーワードに対応する {{htmlelement("option")}} を含む {{htmlelement("select")}} 要素と、型が {{HTMLElement("input/range", "range")}} の {{htmlelement("input")}} 要素も含めます。

```html live-sample___caps
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

<p>
  <label
    >インセットの大きさを変更してみてください。
    <input type="range" min="-40" max="16" value="0" id="inset" data-unit="px"
  /></label>
  <output id="o"></output>
</p>
```

#### CSS

{{cssxref("display")}} を `grid` に設定してグリッドコンテナーを作成し、{{cssxref("grid-template-columns")}} で 6 列を作り、{{cssxref("gap")}} を `20px` に設定します。{{cssxref("rule")}} プロパティで罫線を定義し、{{cssxref("row-rule-color")}} プロパティで行間罫の色を上書きします。{{cssxref("rule-break")}} プロパティを設定して罫線を各交差部で分割し、それぞれの区間を独立させます。さらに {{cssxref("rule-visibility-items")}} をデフォルト値の `normal` に明示的に設定します。次に `rule-inset-cap` プロパティを使用して、すべてのキャップ区間端点を `16px` 内側にずらします。

{{cssxref("grid-column-end")}} プロパティを使用して、7 番目のリスト項目が 2 列にまたがるようにも設定します。

```css
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  rule-break: intersection;
  rule-visibility-items: normal;

  rule-inset-cap: 16px;
}

li:nth-of-type(7) {
  grid-column-end: span 2;
}
```

簡潔にするため、ほかの CSS スタイルとフォームを操作可能にするコードは省略しています。

```css hidden
ul {
  place-items: center;
  padding: 0;
  list-style-type: none;
  border: 1px solid;
  margin: 40px;
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

li:nth-of-type(15) {
  grid-area: 4 / 5 / 5 / 6;
}
li:nth-of-type(16) {
  grid-area: 4 / 6 / 5 / 7;
}
li:nth-of-type(17) {
  display: none;
  grid-area: 5 / 6 / 6 / 7;
}
@layer no-support {
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは rule-inset-cap に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.ruleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});

visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
});
```

#### 結果

{{EmbedLiveSample("Inner cap segments", "", "400")}}

ドロップダウンから `between` を選択すると、隣接する両方のグリッド領域にグリッドアイテムがある場合にのみ罫線区間が描画され、内部のキャップ区間が作られます。次にインセット値を変更して、どの区間端点がキャップ区間端点か確認してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-inset-cap")}} 一括指定
- {{cssxref("row-rule-inset-cap")}} 一括指定
- {{cssxref("column-rule-inset")}} 一括指定
- {{cssxref("row-rule-inset")}} 一括指定
- {{cssxref("rule-inset-start")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
