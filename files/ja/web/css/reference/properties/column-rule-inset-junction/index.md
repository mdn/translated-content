---
title: "`column-rule-inset-junction` プロパティ"
short-title: column-rule-inset-junction
slug: Web/CSS/Reference/Properties/column-rule-inset-junction
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`column-rule-inset-junction`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、[接合端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#接合端点を理解する)にある列間罫の区間の先頭側と末尾側の端点をずらせます。つまり、罫線の区間が交差する隙間の接合部にある端点をずらせます。

{{InteractiveExample("CSS デモ: column-rule-inset-junction")}}

```css interactive-example-choice
column-rule-inset-junction: 0;
```

```css interactive-example-choice
column-rule-inset-junction: 10px;
```

```css interactive-example-choice
column-rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
column-rule-inset-junction: overlap-join;
```

```css interactive-example-choice
column-rule-inset-junction: overlap-join 10px;
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
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  column-rule-color: magenta;
  column-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: column-over-row;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
}
#example-element i {
  background-color: #efefef;
  padding: 1em;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("column-rule-inset-junction-end")}}
- {{cssxref("column-rule-inset-junction-start")}}

## 構文

```css
/* キーワード */
column-rule-inset-junction: overlap-join;

/* <length-percentage> 値 */
column-rule-inset-junction: 0;
column-rule-inset-junction: 1em;
column-rule-inset-junction: -5px;
column-rule-inset-junction: -25%;

/* 2 つの値 */
column-rule-inset-junction: 0 1em;
column-rule-inset-junction: -5px -25%;
column-rule-inset-junction: overlap-join 10px;

/* グローバル値 */
column-rule-inset-junction: inherit;
column-rule-inset-junction: initial;
column-rule-inset-junction: revert;
column-rule-inset-junction: revert-layer;
column-rule-inset-junction: unset;
```

### 値

このプロパティは、以下のリスト内の値を 1 つまたは 2 つで指定します。

- `overlap-join`
  - : 接合区間が行間罫をまたぐように指定し、その長さは {{cssxref("row-gap")}} の値の半分と、使用されている {{cssxref("row-rule-width")}} の値の半分を足した値となるようにします。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。パーセント値は、接合部にある端点での `row-gap` の幅を基準とします。

## 解説

`column-rule-inset-junction` 一括指定プロパティを使用すると、{{cssxref("column-rule-inset-junction-start")}} および {{cssxref("column-rule-inset-junction-end")}} プロパティを設定し、接合端点がある列間罫の区間の先頭側と末尾側の端点を内側または外側にずらせます。

1 つの値が指定された場合、両方のプロパティがその値に設定されます。2 つの値が指定された場合、`-start` には最初の値が、`-end` には 2 番目の値が設定されます。正の値を指定すると区間が短くなり、負の値や [`overlap-join` キーワード](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#the_overlap-join_value) を指定すると区間が長くなります。デフォルト値は `0` です。

`column-rule-inset-junction` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- 列間罫と行間罫、それぞれの区間の接合端点を内側にずらすには、`column-rule-inset-junction` 一括指定プロパティと {{cssxref("row-rule-inset-junction")}} 一括指定プロパティを、{{cssxref("rule-inset-junction")}} 一括指定プロパティで設定できます。

- 列間罫のキャップ端点と接合端点を内側にずらすには、`column-rule-inset-junction` 一括指定プロパティと {{cssxref("column-rule-inset-cap")}} 一括指定プロパティを、{{cssxref("column-rule-inset")}} 一括指定プロパティで設定できます。

このプロパティの `-cap` および `-row` に相当するプロパティを含むすべての区間端点は、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`column-rule-inset-junction` を設定して、フレックスコンテナー内の接合区間の先頭側と末尾側の端点を内側にずらす方法を示します。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>列間罫の接合端点を内側にずらす</h1>
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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。明るい青色の {{cssxref("rule")}} で行の隙間と列の隙間の両方に罫線を描画し、{{cssxref("column-rule-color")}} で列間罫の色をより濃い `blue` に設定します。また、区間が重なったときに列間罫の区間が行間罫の区間の上に描画されるよう、{{cssxref("rule-overlap")}} を `column-over-row` に設定します。最後に、`column-rule-inset-junction` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: column-over-row;

  column-rule-inset-junction: 16px;
}
```

{{cssxref("flex-direction")}} も `.column` コンテナーで `column` に設定します。これにより、フレックスコンテナーの主軸がページの上下方向になり、アイテムが行ではなく列に沿って配置されます。

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
  @supports not (column-rule-inset-junction: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-junction に対応していません";
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
  containers[0].style.columnRuleInsetJunction = val;
  containers[1].style.columnRuleInsetJunction = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。右側の例では、列間罫が縦に続く 1 つの区間になっており、キャップ端点は 2 つありますが、接合端点はありません。そのため、`column-rule-inset-junction` の値を変更しても、この例には影響しません。

### グリッドレイアウトの場合

この例では、グリッドコンテナーで `column-rule-inset-junction` を使用し、接合区間の先頭側と末尾側の端点に異なる値を指定する方法を示します。

#### HTML

コンテナーとして {{htmlelement("ul")}} 要素を使用し、その子要素である複数の {{htmlelement("li")}} 要素をそれぞれグリッドアイテムにします。

```html live-sample___junctions
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
  <li>15</li>
  <li>16</li>
</ul>
```

```html hidden live-sample___junctions
<p>
  <label
    ><code>-start</code> の値を変更してください。
    <input type="range" min="-40" max="40" value="16" id="start" data-unit="px"
  /></label>
  <output id="og">16px</output>
</p>
<p>
  <label
    ><code>-end</code> の値を変更してください。
    <input type="range" min="-40" max="40" value="0" id="end" data-unit="px"
  /></label>
  <output id="ow">0px</output>
</p>
```

#### CSS

{{cssxref("display")}} プロパティを `grid` に設定して、`<ul>` をグリッドコンテナーにします。{{cssxref("grid-template-columns")}} プロパティでグリッドに 6 つの列を指定します。{{cssxref("list-style-type")}} でマーカーを削除し、{{cssxref("gap")}} 一括指定プロパティで行と列の隙間を `20px` に設定します。{{cssxref("rule")}} 一括指定プロパティで、すべての罫線の色、太さ、線種を設定し、{{cssxref("row-rule-color")}} プロパティで行間罫の色だけを変更します。

{{cssxref("column-rule-break")}} プロパティを使用して、列間罫を交差部ごとに分割します。列間罫を分割しなければ、スタイルを設定する列間罫の接合区間がなくなります。

最後に、`column-rule-inset-junction` プロパティを使用して、各列間罫の接合区間では、先頭側の端点を `16px` 内側にずらし、末尾側の端点はずらさないようにします。

また、6 番目のグリッドアイテムが 3 列にまたがるように設定します。

```css live-sample___junctions
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  column-rule-break: intersection;

  column-rule-inset-junction: 16px 0;
}

li:nth-of-type(8) {
  grid-column-end: span 3;
}
```

残りの CSS は簡潔にするため省略しています。

```css hidden live-sample___junctions
ul {
  border: 1px solid;
  place-items: center;
  width: 95vw;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em 1em;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(8) {
  background-color: transparent;
}

li code {
  display: block;
  margin: 0 auto;
  text-align: left;
  width: 30vw;
}
output {
  font-family: monospace;
}
input {
  accent-color: olive;
}
@layer no-support {
  @supports not (column-rule-inset-junction: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-junction に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden live-sample___junctions
const ul = document.querySelector("ul");
const startSize = document.getElementById("start");
const og = document.getElementById("og");
const endSize = document.getElementById("end");
const ow = document.getElementById("ow");
const cell = document.querySelector("li:nth-of-type(8)");
let text = "";
function update() {
  ul.style.columnRuleInsetJunction =
    text = `${startSize.value}px ${endSize.value}px`;
  cell.innerHTML = `<code>rule-inset-cap: ${text};</code>`;
}

update();

startSize.addEventListener("input", () => {
  og.innerText = `${startSize.value}px`;
  update();
});

endSize.addEventListener("input", () => {
  ow.innerText = `${endSize.value}px`;
  update();
});
```

#### 結果

{{EmbedLiveSample("junctions", "", "400")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
