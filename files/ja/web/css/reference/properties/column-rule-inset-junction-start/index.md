---
title: "`column-rule-inset-junction-start` プロパティ"
short-title: column-rule-inset-junction-start
slug: Web/CSS/Reference/Properties/column-rule-inset-junction-start
l10n:
  sourceCommit: 068c46001316cf268128ab7a26b33fd5705cde1b
---

{{SeeCompatTable}}

**`column-rule-inset-junction-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[接合端点](#接合端点を理解する)である列間罫の区間の上端をずらせます。つまり、罫線区間が交差する隙間の接合部にある端点をずらせます。

{{InteractiveExample("CSS デモ: column-rule-inset-junction-start")}}

```css interactive-example-choice
column-rule-inset-junction-start: 0;
```

```css interactive-example-choice
column-rule-inset-junction-start: 0.5em;
```

```css interactive-example-choice
column-rule-inset-junction-start: 10px;
```

```css interactive-example-choice
column-rule-inset-junction-start: -100%;
```

```css interactive-example-choice
column-rule-inset-junction-start: overlap-join;
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
  color: #333333;
  padding: 1em;
}
```

## 構文

```css
/* キーワード */
column-rule-inset-junction-start: overlap-join;

/* <length-percentage> 値 */
column-rule-inset-junction-start: 0;
column-rule-inset-junction-start: 1em;
column-rule-inset-junction-start: -5px;
column-rule-inset-junction-start: -25%;

/* グローバル値 */
column-rule-inset-junction-start: inherit;
column-rule-inset-junction-start: initial;
column-rule-inset-junction-start: revert;
column-rule-inset-junction-start: revert-layer;
column-rule-inset-junction-start: unset;
```

### 値

このプロパティは、以下のリスト内の値を単一で指定します。

- `overlap-join`
  - : 接合区間が行間罫をまたいで伸びるよう指定します。その値は {{cssxref("row-gap")}} の値の半分と、使用されている {{cssxref("row-rule-width")}} の値の半分を足した値として解決されます。
- {{cssxref("length-percentage")}}
  - : インセットの大きさを指定します。パーセント値は、接合部にある端点での `row-gap` の幅を基準とします。

## 解説

`column-rule-inset-junction-start` プロパティは、列間罫の区間の上端にある[接合端点](#接合端点を理解する)を内側または外側にずらせます。デフォルト値は `0` です。正の値は区間を短くし、負の値と[`overlap-join` キーワード](#overlap-join_値)は区間を長くします。

列間罫は列の隙間に 1 つ以上の区間として描画されます。区間が描画されるのは、次のような領域の間です。

- CSS グリッドレイアウトの隣接する列。
- `flex-direction` に応じて、フレックスレイアウトの隣接するフレックスアイテムまたはフレックス行。
- 段組みレイアウトの隣接する列。

列間罫が複数の行にまたがるか、複数の区間に分割されるかは {{cssxref("column-rule-break")}} プロパティで定義されます。列間罫の区間の間にある内部の区切りの大きさは {{cssxref("row-gap")}} の値になります。列間罫の各区間の上端が、ほかの列間罫または罫線区間がある隙間の接合部に達する箇所に、接合端点が生じます。

`column-rule-inset-junction-start` プロパティはいくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- 列間罫の区間の上端と下端にある接合端点を内側にずらすには、`column-rule-inset-junction-start` プロパティと {{cssxref("column-rule-inset-junction-end")}} プロパティを {{cssxref("column-rule-inset-junction")}} 一括指定で設定できます。

- 列間罫の区間の上端側にあるすべての端点を内側にずらすには、`column-rule-inset-junction-start` プロパティと {{cssxref("column-rule-inset-cap-start")}} プロパティを {{cssxref("column-rule-inset-start")}} 一括指定で設定できます。

- 区間の上端、下端、左端、右端にある接合端点を内側にずらすには、{{cssxref("column-rule-inset-junction")}} 一括指定と {{cssxref("row-rule-inset-junction")}} 一括指定を {{cssxref("rule-inset-junction")}} 一括指定で設定できます。

このプロパティの `-start`、`-cap`、`row-` に相当するプロパティも含め、すべての区間端点は {{cssxref("rule-inset")}} 一括指定で設定できます。

### 接合端点を理解する

_接合端点_とは、内部の隙間にある区間端点のうち、ほかの罫線区間や列間罫の区間が存在する隙間の交差部に達するものです。`column-rule-inset-junction-start` プロパティは、列間罫の接合区間の上端を内側にずらし、区間を短縮または延長できます。

`column-rule-inset-junction-start` に長さを指定すると、その値の分だけ区間が内側にずれます。負の長さの値を指定すると外側にずれ、接合区間の上端が伸びます。パーセント値は {{cssxref("row-gap")}} の大きさを基準とします。`-50%` を設定すると、行の隙間の幅にかかわらず、接合区間の上端がその上の行の隙間の中ほどまで伸びます。

次のデモでは、下 2 行の列間罫の区間が接合端点から始まっています。`column-rule-inset-junction-start: 16px` を設定すると、これらの区間の上端が `16px` 内側にずれます。インセットの `<length>` 値を変更すると、どの列間罫の区間が接合端点から始まっているかを確認しやすくなります。

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
  <li>15</li>
  <li>16</li>
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
      min="-450"
      max="100"
      value="100"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">100%</output>
</p>
```

```css hidden live-sample___junctions live-sample___percents
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
  column-rule-inset-junction-start: 16px;

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
@layer no-support {
  @supports not (column-rule-inset-junction-start: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-junction-start に対応していません";
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
  column-rule-inset-junction-start: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetJunctionStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else if (visibility.value === "around") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value === "around") {
    ul.style.columnRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("junctions", "", "300")}}

値に `0px` を設定すると、列間罫の先頭が行の先頭、つまり上端に揃い、行の隙間に接します。これがデフォルトです。プロパティの値を変更すると、グリッド中央にある区間の先頭側の端点だけが変わることに注目してください。最初の行の区間は変化しません。これらはキャップ端点であり、`column-rule-inset-junction-start` プロパティの影響を受けません。

`rule-visibility-items` の値として `around` と `between` を選択してみてください。`around` は、隣接する 2 つの領域の少なくとも一方にアイテムがある場合、隙間の区間に罫線を描画します。`between` は、隣接する両方の領域にアイテムがある場合にのみ、隙間の区間に罫線を描画します。ほかの罫線区間がない内部交差部で終わる区間は、_キャップ区間端点_であり、`column-rule-inset-junction-start` プロパティの影響を受けません。

### `overlap-join` 値

`overlap-join` 値は内部区間の先頭側の端点を外側にずらし、交差する行間罫の上端に揃えます。この値は {{cssxref("row-gap")}} の半分（隙間の中央まで伸ばす長さ）と、行間罫の幅の半分を足した値として解決されます。

`column-rule-inset-junction-start` に `overlap-join` キーワード値を設定すると、接合端点を持つ列間罫の区間が行の隙間に上方へ伸び、その隙間に描画された行間罫の上端に接続します。

次のライブサンプルでは、`column-rule-inset-junction-start` に `overlap-join` を設定しています。

```html hidden
<p>
  <label
    ><code>row-gap</code> の値を変更してください。
    <input type="range" min="10" max="40" value="30" id="gap" data-unit="px"
  /></label>
  <output id="og">30px</output>
</p>
<p>
  <label
    ><code>row-rule-width</code> の値を変更してください。
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
  column-rule: 16px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: around;
  column-rule-break: intersection;
  column-rule-inset-junction-start: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
  width: 70vw;
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
  @supports not (column-rule-inset-junction-start: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-junction-start に対応していません";
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
  og.innerText = ul.style.rowGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.rowRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

{{cssxref("row-rule-width")}} と {{cssxref("row-gap")}} の大きさを変更してみてください。隙間や行間罫の大きさにかかわらず、列間罫の区間の上端が常に伸びて、隙間に描画された行間罫の上端に揃うことを確認してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`column-rule-inset-junction-start` を設定して、フレックスコンテナー内の列間罫の接合区間の先頭側の端点を内側にずらす方法を示します。

#### HTML

マークアップには、それぞれ 7 つの子要素を持つ 2 つの {{htmlelement("div")}} 要素があります。2 つのコンテナーの違いは、2 つ目に `column` クラスが追加されていることだけです。

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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーにします。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。行の隙間と列の隙間の両方に罫線を描画するため、明るい青色の {{cssxref("rule")}} を定義し、さらに {{cssxref("column-rule-color")}} を上書きして、列間罫の色を濃い `blue` に設定します。区間が重なったときに列間罫の区間が行間罫の区間の下に描画されるよう、{{cssxref("rule-overlap")}} プロパティを `row-over-column` に設定します。最後に、`column-rule-inset-junction-start` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: row-over-column;

  column-rule-inset-junction-start: 16px;
}
```

`.column` コンテナーの {{cssxref("flex-direction")}} も `column` に設定します。これにより、フレックスコンテナーの主軸がページの上下方向になり、アイテムが行ではなく列に沿って配置されます。

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
  @supports not (column-rule-inset-junction-start: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-junction-start に対応していません";
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
  containers[0].style.columnRuleInsetJunctionStart = val;
  containers[1].style.columnRuleInsetJunctionStart = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。この例では、列間罫はコンテナーの高さ全体にわたる単一の区間であり、この区間には 2 つのキャップ端点があり、接合端点はありません。そのため、`column-rule-inset-junction-start` の値を変更しても影響しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-inset-junction-end")}}
- {{cssxref("column-rule-inset-junction")}} 一括指定
- {{cssxref("column-rule-inset")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
