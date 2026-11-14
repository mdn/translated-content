---
title: "`rule-inset-junction` プロパティ"
short-title: rule-inset-junction
slug: Web/CSS/Reference/Properties/rule-inset-junction
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`rule-inset-junction`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、列間罫と行間罫の区間の[接合端点](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#接合端点を理解する)を同じ値だけずらせます。

{{InteractiveExample("CSS デモ: rule-inset-junction")}}

```css interactive-example-choice
rule-inset-junction: 0;
```

```css interactive-example-choice
rule-inset-junction: 10px;
```

```css interactive-example-choice
rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
rule-inset-junction: overlap-join;
```

```css interactive-example-choice
rule-inset-junction: overlap-join 10px;
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
  rule-break: intersection;
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

- {{cssxref("column-rule-inset-junction")}}
- {{cssxref("row-rule-inset-junction")}}

## 構文

```css
/* キーワード */
rule-inset-junction: overlap-join;

/* <length-percentage> 値 */
rule-inset-junction: 0;
rule-inset-junction: 1em;
rule-inset-junction: -5px;
rule-inset-junction: -25%;

/* 2 つの値 */
rule-inset-junction: 0 1em;
rule-inset-junction: -5px -25%;
rule-inset-junction: overlap-join 10px;

/* グローバル値 */
rule-inset-junction: inherit;
rule-inset-junction: initial;
rule-inset-junction: revert;
rule-inset-junction: revert-layer;
rule-inset-junction: unset;
```

### 値

このプロパティは、以下のリストの値で 1 つまたは 2 つ指定します。

- `overlap-join`
  - : 接合区間が行間罫を越えて伸びるように指定します。値は {{cssxref("row-gap")}} の値の半分と、使用される {{cssxref("row-rule-width")}} の値の半分を足した値に解決されます。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。パーセント値は、列間罫の区間では `row-gap` の値、行間罫の区間では `column-gap` の値を基準とする接合端点を基準とします。

## 解説

`rule-inset-junction` 一括指定プロパティを使用すると、{{cssxref("row-rule-inset-junction")}} プロパティと {{cssxref("column-rule-inset-junction")}} プロパティを単一の宣言で同じ値に設定し、行間罫と列間罫の接合区間端点をその値だけ内側にずらせます。

値を 1 つ指定すると、両方のプロパティにその値が設定されます。値を 2 つ指定すると、`-start` には最初の値が、`-end` には 2 つ目の値が設定されます。正の値は区間を短く（内側に）し、負の値と[`overlap-join` キーワード](/ja/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#接合端点を理解する)は区間を長く（外側に）します。デフォルト値は `0` です。

キャップ区間端点と接合区間端点の両方を内側にずらすには、`rule-inset-junction` 一括指定プロパティと {{cssxref("rule-inset-cap")}} 一括指定プロパティを、{{cssxref("rule-inset")}} 一括指定プロパティで設定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`rule-inset-junction` を設定して、フレックスコンテナー内の接合区間端点を内側にずらす方法を示します。

#### HTML

このマークアップには、それぞれ 7 つの子要素を含む 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

```html
<h1>列間罫の接合端点のインセット</h1>
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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。{{cssxref("rule")}} を定義し、`rule-inset-junction` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;

  rule-inset-junction: 16px;
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
  @supports not (rule-inset-junction: 16px) {
    body::before {
      content: "このブラウザーは rule-inset-junction に対応していません";
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
  containers[0].style.ruleInsetJunction = val;
  containers[1].style.ruleInsetJunction = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。罫線がコンテナーの一方の端から反対側の端まで続く単一の区間である場合、その区間には 2 つのキャップ端点があり、接合端点はありません。そのため、`rule-inset-junction` の値を変更しても、これらの区間には影響しません。

### グリッドレイアウトの場合

この例では、グリッドコンテナーで `rule-inset-junction` プロパティを使用し、接合区間端点に異なる 2 つの値を指定して内側にずらす方法を示します。

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

`<ul>` をグリッドコンテナーにするため、{{cssxref("display")}} プロパティを `grid` に設定します。{{cssxref("grid-template-columns")}} プロパティで、グリッドに 5 つの列を指定します。{{cssxref("list-style-type")}} プロパティでリストのマーカーを取り除き、{{cssxref("gap")}} 一括指定プロパティで行と列の隙間を `20px` にします。{{cssxref("rule")}} 一括指定プロパティで罫線の色、太さ、線種を設定し、{{cssxref("row-rule-color")}} プロパティで行間罫の色だけを変更します。

{{cssxref("rule-break")}} プロパティを使用して、罫線をすべての交差部で分割します。罫線を分割しなければ、スタイルを設定する接合区間はありません。

最後に、`rule-inset-junction` プロパティを使用して、各列の接合区間の先頭側を `16px` 内側にずらし、末尾側はずらさないようにします。

6 番目のグリッドアイテムは 3 列にまたがるように設定します。

```css live-sample___junctions
ul {
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  rule-break: intersection;

  rule-inset-junction: 16px 0;
}

li:nth-of-type(7) {
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
  @supports not (rule-inset-junction: 16px) {
    body::before {
      content: "このブラウザーは rule-inset-junction に対応していません";
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
const cell = document.querySelector("li:nth-of-type(7)");
let text = "";
function update() {
  ul.style.ruleInsetJunction = text = `${startSize.value}px ${endSize.value}px`;
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

- {{cssxref("rule-inset-cap")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
