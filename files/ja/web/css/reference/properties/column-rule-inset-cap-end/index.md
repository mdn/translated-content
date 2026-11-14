---
title: "`column-rule-inset-cap-end` プロパティ"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`column-rule-inset-cap-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、コンテナーの末尾にある列間罫の区間の[キャップ端点](#末尾側のキャップを理解する)と、他の罫線区間と交差しないキャップ端点の位置を調整できます。

{{InteractiveExample("CSS デモ: column-rule-inset-cap-end")}}

```css interactive-example-choice
column-rule-inset-cap-end: -20px;
```

```css interactive-example-choice
column-rule-inset-cap-end: 0;
```

```css interactive-example-choice
column-rule-inset-cap-end: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-end: 100%;
```

```css interactive-example-choice
column-rule-inset-cap-end: overlap-join;
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
/* Keyword 値 */
column-rule-inset-cap-end: overlap-join;

/* <length-percentage> 値 */
column-rule-inset-cap-end: 0;
column-rule-inset-cap-end: 1em;
column-rule-inset-cap-end: -5px;
column-rule-inset-cap-end: -25%;

/* グローバル値 */
column-rule-inset-cap-end: inherit;
column-rule-inset-cap-end: initial;
column-rule-inset-cap-end: revert;
column-rule-inset-cap-end: revert-layer;
column-rule-inset-cap-end: unset;
```

### 値

このプロパティは、以下のリスト内の値を単一で指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : 内側にずらす量（インセット）を指定します。パーセント値は、交差する隙間の幅に対する割合です。この幅は、隙間の接合点にある区間の端点では `row-gap` の幅となり、コンテナーの端にある端点では `0` となります。

## 解説

`column-rule-inset-cap-end` プロパティは、列間罫のキャップ区間の末尾側の端点を内側にずらし、区間を短縮または延長できます。デフォルト値は `0` で、これは `overlap-join` と同じです。正の値を指定すると区間のサイズが減少し、負の値を指定すると増加します。

列間罫は、以下のものの間に配置され、列の隙間の中に 1 つまたは複数の区間として引かれます。

- CSS グリッドレイアウトにおける隣接する列。
- フレックスボックスレイアウトにおけるフレックスアイテムまたはフレックス行（`flex-direction` の設定次第）。
- 段組みレイアウトにおける段。

列間罫が複数の行にまたがるか、複数の区間に分割されるかは、{{cssxref("column-rule-break")}} プロパティによって定義され、列間罫の各区間同士の間隔は {{cssxref("row-gap")}} のサイズとなります。

長さの値を指定すると、内部とコンテナーの末尾側のキャップ区間がその値に応じてずれます。正の値では内側に、負の値では外側にずれます。負の値を指定すると、コンテナー末尾側のキャップ区間はコンテナーの末尾を越えて伸びます。

[パーセント値](#パーセント値を理解する)は、内部の区間では、{{cssxref("row-gap")}} のサイズに対する割合です。末尾のキャップ区間の場合、パーセント値は `0` に対する割合になるので、コンテナーの末尾にあるキャップ区間の端点が、パーセント値によってコンテナーの外にはみ出すことはありません。

`column-rule-inset-cap-end` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の構成プロパティです。

- 先頭と末尾のキャップを内側にずらすには、`column-rule-inset-cap-end` プロパティと {{cssxref("column-rule-inset-cap-start")}} プロパティを、{{cssxref("column-rule-inset-cap")}} 一括指定プロパティを使って設定することができます。

- すべての列間罫の区間の末尾側の端点を内側にずらすには、`column-rule-inset-cap-end` プロパティと {{cssxref("column-rule-inset-junction-end")}} プロパティを、{{cssxref("column-rule-inset-end")}} 一括指定プロパティを使って設定することができます。

- すべての行および列のキャップと接合部の端点を内側にずらすには、`column-rule-inset-end` プロパティと {{cssxref("row-rule-inset-end")}} プロパティを、{{cssxref("rule-inset-end")}} 一括指定プロパティを使用して設定できます。

すべての区間の端点は、このプロパティの `-start`、`-junction`、`row-` の同等のものを含め、{{cssxref("rule-inset")}} 一括指定を使用して設定できます。

### 末尾側のキャップを理解する

「キャップ区間の端点」とは、接合区間以外の端点を指します。これには、コンテナーのコンテンツの端にある端点に加え、ほかの列間罫または行間罫の区間が存在しない隙間の接合部の端点も含まれます。

`column-rule-inset-cap-end` プロパティは、列キャップ区間の下端の位置を調整し、区間を短縮または延長することができます。

列のキャップ区間の端点は、接合区間の区切りのみを制御する `column-rule-break` プロパティの設定の影響を受けません。ただし、これらの端点は、空の領域に隣接する隙間に列間罫および行間罫の区間が描画されるかどうかを定義する {{cssxref("rule-visibility-items")}} プロパティの影響を受けます。

列間罫のキャップ区間の端点は、コンテナーの末尾側と、他の列間罫または行間罫の区間がない内部の隙間にのみ現れます。したがって、区間が描画されるかどうか（あるいは、`rule` が可視値に設定されていた場合に描画されるかどうか）によって、どの列区間が末尾のキャップ区間になるかが決まります。

以下のデモでは、列間罫の区間の下端がキャップ端点になっています。`column-rule-inset-cap-end: 16px` を設定すると、各区間のキャップ端点が `16px` 内側にずれます。インセットの `<length>` 値を変更して、どの区間がキャップ端点で終わっているかを確認してください。

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
  <li>15</li>
  <li>16</li>
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
      min="-450"
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
  column-rule-inset-cap-end: 16px;

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
  @supports not (column-rule-inset-cap-end: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-cap-end に対応していません";
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
  column-rule-inset-cap-end: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetCapEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(2, solid), double";
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

{{EmbedLiveSample("caps", "", "300")}}

インセットを変更してみてください。`0px` に設定すると、列間罫の末尾がコンテナーの末尾に配置されます。これがデフォルトの設定です。`-32px` に設定すると、区間の末尾が `32px` だけ外側に調整され、列間罫はコンテナーの端から `32px` 外側に描画されます。列間罫はボックスモデルに影響を与えないため、これらの列間罫はコンテナーやその他のコンテンツのレイアウトに影響を及ぼしません。

`rule-visibility-items` の値として `around` を選択してみてください。この値を設定すると、隣接する 2 つの領域のうちどちらかにでもアイテムが存在する場合、隙間の区間に罫線が描画されます。二重線スタイルの列間罫は、`rule-visibility-items` を `around` にすると表示されますが、キャップ端点では終わりません。最後の 2 本の列間罫は、行間罫の区間がある内部の隙間で終わるため、キャップ区間端点ではありません。したがって、`column-rule-inset-cap-end` プロパティはこれらの端点に影響しません。

`rule-visibility-items` の値として `between` を選択すると、隣接する両方の領域にアイテムが存在する場合にのみ、隙間の区間に罫線が描画されます。2 本目の行方向の溝にある最後の行間罫は、3 本目の列の隙間で終わります。3 本目の列間罫は、行間罫の区間が存在する内部の隙間で終わるため、この列の区間はキャップ区間の終点ではなく、`column-rule-inset-cap-end` プロパティの影響を受けません。しかし、最後の 2 つの列間罫は、他の罫線区間が存在しない内部の隙間で終わっているため、これらの列間罫の区間はキャップ区間の端点となり、したがって `column-rule-inset-cap-end` プロパティの影響を受けます。

### パーセント値を理解する

パーセント値が基準とする長さは、端点の位置によって異なります。内部の端点におけるパーセント値は、キャップ端点での隙間の幅を基準とするため、罫線の隙間に隣接している場合は {{cssxref("row-gap")}} を基準とし、コンテナーの下端の場合は `0` を基準とします。

このデモでは、対象の端点を、暗色と明色で表示される `inset` の線種で示しています。キャップ区間の端点がコンテナーの端にある場合、パーセント値の基準は `0` なので、計算結果は常に `0` になります（そのため、`between` の場合のみ効果があります）。

{{EmbedLiveSample("percents", "", "300")}}

`rule-visibility-items` の値として `around` を選択してみてください。最初の 3 つの列はコンテナーの端で終了するため、パーセント値を指定しても `0` として処理されます。最後の 2 本の列間罫は、行間罫の区間が存在する内部の隙間で終了するため、これらの列区間はキャップ区間の端点にはなりません。

`rule-visibility-items` の値として `between` を選択してください。最初の 2 本の列間罫は、コンテナーの端で終了するため、インセットは `0` になります。3 本目の列間罫は、行間罫の区間が存在する内部の隙間で終了するため、この列間罫の区間はキャップ区間の終点にはなりません。最後の 2 本の列間罫は、他の罫線区間が存在しない内部の隙間で終了するため、パーセント値によるオフセットは {{cssxref("row-gap")}} のサイズ（この場合は `20px`）を基準としています。

`100%` を設定すると、最後の 2 本の列間罫の区間の端が `20px` 内側に配置されます。`-200%` を設定すると、これらの区間は `40px` 外側に配置され、線は `20px` の隙間を通って描画され、`20px` がアイテムの最後の行にはみ出します。負のパーセント値で、その計算結果が最後の行と行間隔の合計高さよりも大きくなる場合、最後の 2 つの列間罫がコンテナーの下端からはみ出します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`column-rule-inset-cap-end` を設定して、フレックスコンテナー内のキャップ区間の末尾側の端点を内側にずらす方法を示しています。

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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーに変換します。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。明るい青の {{cssxref("rule")}} を定義して、行と列の隙間に罫線を描画し、{{cssxref("column-rule-color")}} で列間罫の色をより濃い `blue` に設定します。最後に、`column-rule-inset-cap-end` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap-end: 16px;
}
```

また、{{cssxref("flex-direction")}} を `.column` コンテナーに設定して、フレックスコンテナーの主軸を変更し、アイテムを行ではなく列ごとに配置するようにしています。

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
  @supports not (column-rule-inset-cap-end: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-cap-end に対応していません";
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
  containers[0].style.columnRuleInsetCapEnd = val;
  containers[1].style.columnRuleInsetCapEnd = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-inset")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
