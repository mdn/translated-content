---
title: "`row-rule-inset-junction` プロパティ"
short-title: row-rule-inset-junction
slug: Web/CSS/Reference/Properties/row-rule-inset-junction
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`row-rule-inset-junction`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、[接合端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#接合端点を理解する)である行間罫の区間の左右の端点をずらせます。つまり、罫線区間が交差する隙間の接合部にある端点をずらします。

{{InteractiveExample("CSS デモ: row-rule-inset-junction")}}

```css interactive-example-choice
row-rule-inset-junction: 0;
```

```css interactive-example-choice
row-rule-inset-junction: 10px;
```

```css interactive-example-choice
row-rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
row-rule-inset-junction: overlap-join;
```

```css interactive-example-choice
row-rule-inset-junction: overlap-join 10px;
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
  row-rule-color: magenta;
  row-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: row-over-column;
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

- {{cssxref("row-rule-inset-junction-end")}}
- {{cssxref("row-rule-inset-junction-start")}}

## 構文

```css
/* キーワード */
row-rule-inset-junction: overlap-join;

/* <length-percentage> 値 */
row-rule-inset-junction: 0;
row-rule-inset-junction: 1em;
row-rule-inset-junction: -5px;
row-rule-inset-junction: -25%;

/* 2 つの値 */
row-rule-inset-junction: 0 1em;
row-rule-inset-junction: -5px -25%;
row-rule-inset-junction: overlap-join 10px;

/* グローバル値 */
row-rule-inset-junction: inherit;
row-rule-inset-junction: initial;
row-rule-inset-junction: revert;
row-rule-inset-junction: revert-layer;
row-rule-inset-junction: unset;
```

### 値

このプロパティは、以下のリストの値で 1 つまたは 2 つ指定します。

- `overlap-join`
  - : 接合区間が列間罫を越えて伸びるように指定します。値は {{cssxref("column-gap")}} の値の半分と、使用される {{cssxref("column-rule-width")}} の値の半分を足した値に解決されます。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。パーセント値は、接合部にある端点での `column-gap` の値を基準とします。

## 解説

`row-rule-inset-junction` 一括指定プロパティを使用すると、{{cssxref("row-rule-inset-junction-start")}} および {{cssxref("row-rule-inset-junction-end")}} プロパティを設定できます。これにより、行間罫の区間の左右（右から左へ記述する言語では左右が逆）にある接合区間端点の先頭側と末尾側を、内側または外側にずらせます。

値を 1 つ指定すると、両方のプロパティにその値が設定されます。値を 2 つ指定すると、`-start` には最初の値が、`-end` には 2 つ目の値が設定されます。正の値は区間を短く（内側に）し、負の値と[`overlap-join` キーワード](/ja/docs/Web/CSS/Reference/Properties/row-rule-inset-junction-end#the_overlap-join_value)は区間を長く（外側に）します。デフォルト値は `0` です。

`row-rule-inset-junction` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- 行間罫と列間罫の区間の接合端点を両方とも内側にずらすには、`row-rule-inset-junction` 一括指定プロパティと {{cssxref("column-rule-inset-junction")}} 一括指定プロパティを、{{cssxref("rule-inset-junction")}} 一括指定プロパティで設定できます。

- 行間罫のキャップ区間と接合区間の端点を両方とも内側にずらすには、`row-rule-inset-junction` 一括指定プロパティと {{cssxref("row-rule-inset-cap")}} 一括指定プロパティを、{{cssxref("row-rule-inset")}} 一括指定プロパティで設定できます。

このプロパティの `-cap` および `-column` に相当するプロパティを含むすべての区間端点は、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`row-rule-inset-junction` を設定して、フレックスコンテナー内の接合区間の端点を内側にずらす方法を示します。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>行間罫の接合端点のインセット</h1>
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
    >インセットの大きさを変更してみてください。
    <input type="range" min="-40" max="16" value="16" id="inset"
  /></label>
  <output id="o">16px</output>
</p>
```

#### CSS

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。明るい青色の {{cssxref("rule")}} で列の隙間と行の隙間の両方に罫線を描画し、{{cssxref("row-rule-color")}} で行間罫の色をより濃い `blue` に設定します。また、区間が重なったときに行間罫の区間が列間罫の区間の上に描画されるよう、{{cssxref("rule-overlap")}} プロパティを `row-over-column` に設定します。最後に、`row-rule-inset-junction` を `16px` に設定し、先頭側と末尾側に同じ値を指定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;
  rule-overlap: row-over-column;

  row-rule-inset-junction: 16px;
}
```

`.column` コンテナーでは {{cssxref("flex-direction")}} も `column` に設定し、フレックスコンテナーの主軸をページの縦方向にして、アイテムが行ではなく列に沿って配置されるようにします。

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
  @supports not (row-rule-inset-junction: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-junction に対応していません";
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
  containers[0].style.rowRuleInsetJunction = val;
  containers[1].style.rowRuleInsetJunction = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。このプロパティは、複数の区間に分割された行間罫にのみ影響します。行間罫がコンテナー全体にまたがる単一の区間である場合、その区間には 2 つのキャップ端点があり、接合端点はありません。そのため、`row-rule-inset-junction` の値を変更しても影響を受けません。

### グリッドレイアウトの場合

この例では、グリッドコンテナーで `row-rule-inset-junction` を使用し、行間罫の接合区間端点の先頭側と末尾側に異なる値を指定して内側にずらす方法を示します。

#### HTML

コンテナーとして {{htmlelement("ul")}} 要素を使用し、その子要素として複数の {{htmlelement("li")}} 要素を含めます。これらの子要素は、それぞれグリッドアイテムになります。

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
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
</ul>
```

```html hidden live-sample___junctions
<p>
  <label
    ><code>-start</code> の値を変更してみてください。
    <input type="range" min="-40" max="40" value="16" id="start" data-unit="px"
  /></label>
  <output id="og">16px</output>
</p>
<p>
  <label
    ><code>-end</code> の値を変更してみてください。
    <input type="range" min="-40" max="40" value="0" id="end" data-unit="px"
  /></label>
  <output id="ow">0px</output>
</p>
```

#### CSS

{{cssxref("display")}} プロパティを `grid` に設定して、`<ul>` をグリッドコンテナーにします。{{cssxref("grid-template-columns")}} プロパティで、グリッドに 6 つの列を指定します。{{cssxref("list-style-type")}} でリストのマーカーを取り除き、{{cssxref("gap")}} 一括指定プロパティで行と列の隙間を `20px` にします。{{cssxref("rule")}} 一括指定プロパティで罫線の色、太さ、線種を設定し、{{cssxref("column-rule-color")}} プロパティで列間罫の色だけを変更します。

{{cssxref("row-rule-break")}} プロパティを使用して、行間罫をすべての交差部で分割します。行間罫を分割しなければ、スタイルを設定する行間罫の接合区間はありません。

最後に、`row-rule-inset-junction` プロパティを使用して、各行間罫の接合区間の先頭側を `16px` 内側にずらし、末尾側はずらさないようにします。

6 番目のグリッドアイテムは 3 列にまたがるように設定します。

```css live-sample___junctions live-sample___percents
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  column-rule-color: palegoldenrod;
  row-rule-break: intersection;

  row-rule-inset-junction: 16px 0;
}

li:nth-of-type(8) {
  grid-column-end: span 3;
}
```

残りの CSS は簡潔にするため省略しています。

```css hidden live-sample___junctions live-sample___percents
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
  @supports not (row-rule-inset-junction: 16px) {
    body::before {
      content: "このブラウザーは row-rule-inset-junction に対応していません";
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
  ul.style.rowRuleInsetJunction =
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

{{EmbedLiveSample("junctions", "", "500")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-inset-junction")}} 一括指定
- {{cssxref("row-rule-inset-cap")}} 一括指定
- {{cssxref("row-rule-inset")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
