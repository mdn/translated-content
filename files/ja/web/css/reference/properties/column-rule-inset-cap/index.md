---
title: "`column-rule-inset-cap` プロパティ"
short-title: column-rule-inset-cap
slug: Web/CSS/Reference/Properties/column-rule-inset-cap
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

**`column-rule-inset-cap`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、コンテナーの先頭の端および末尾の端にある列罫線の区間の[キャップ端点](#キャップ端点を理解する)、および他の行や列の区間と交差しない区間の端点をずらすことができます。

{{InteractiveExample("CSS Demo: column-rule-inset-cap")}}

```css interactive-example-choice
column-rule-inset-cap: -20px;
```

```css interactive-example-choice
column-rule-inset-cap: 0;
```

```css interactive-example-choice
column-rule-inset-cap: 1em;
```

```css interactive-example-choice
column-rule-inset-cap: 100%;
```

```css interactive-example-choice
column-rule-inset-cap: overlap-join;
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
  rule: solid thick rebeccapurple;
  column-rule-color: magenta;
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

- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}

## 構文

```css
/* キーワード */
column-rule-inset-cap: overlap-join;

/* <length-percentage> 値 */
column-rule-inset-cap: 0;
column-rule-inset-cap: 1em;
column-rule-inset-cap: -5px;
column-rule-inset-cap: -25%;

/* 2 つの値 */
column-rule-inset-cap: overlap-join 1em;
column-rule-inset-cap: -5px -25%;

/* グローバル値 */
column-rule-inset-cap: inherit;
column-rule-inset-cap: initial;
column-rule-inset-cap: revert;
column-rule-inset-cap: revert-layer;
column-rule-inset-cap: unset;
```

### 値

このプロパティは、以下のリスト内の 1 つまたは 2 つの値で指定します。

- `overlap-join`
  - : `0` に解決します。
- {{cssxref("length-percentage")}}
  - : インセットの大きさを指定します。[パーセント値](#パーセント値を理解する)は、交差する隙間の幅を基準としています。この幅は、隙間の結合点にある区間の端点では `row-gap` の幅となり、コンテナーの端にある端点では `0` となります。

## 解説

`column-rule-inset-cap` 一括指定プロパティを使用すると、{{cssxref("column-rule-inset-cap-end")}} および {{cssxref("column-rule-inset-cap-start")}} プロパティを設定でき、単一の宣言でキャップ区間の端点の先頭の端と末尾の端の両方にインセットまたはアウトセットを適用することができます。

1 つの値が指定された場合、両方のプロパティがその値に設定されます。2 つの値が指定された場合、`-start` には最初の値が、`-end` には 2 番目の値が設定されます。デフォルト値は `0` であり、キャップ端点の場合、これは `overlap-join` と同じ意味になります。正の値を指定すると区間のサイズが縮小（インセット）され、負の値を指定するとサイズが拡大（アウトセット）されます。

列罫線は、列の隙間の中に 1 つまたは複数の線分としてつけられ、これらの線分は以下の間に配置されます。

- CSS グリッドレイアウトにおける隣接する列。
- フレックスボックスレイアウトにおけるフレックスアイテムまたはフレックス行（`flex-direction` の設定次第）。
- 段組みレイアウトにおける段。

列罫線が複数の行にまたがるか、複数の区間に分割されるかは、{{cssxref("column-rule-break")}} プロパティによって定義され、列罫線の各区間の間の内側の区切り幅は {{cssxref("row-gap")}} のサイズとなります。

`column-rule-inset-cap` の長さの値は、指定された値だけ区間を内側に配置します。負の長さの値を指定すると外側に配置され、端のキャップ区間がコンテナーの上端および下端からはみ出すことになります。端のキャップ区間に対するパーセント値は `0` を基準としているため、効果はありません。

内部の区間では、[パーセント値](#パーセント値を理解する)は {{cssxref("row-gap")}} のサイズに関連しています。`-50%` を設定すると、区間は隙間の中央まで伸び、`-100%` を設定すると、区間は隙間全体に広がります。

`column-rule-inset-cap` プロパティは、いくつかの[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を構成するプロパティです。

- すべての列区間の端を内側にずらすには、`column-rule-inset-cap` プロパティと {{cssxref("column-rule-inset-junction")}} プロパティを、{{cssxref("column-rule-inset")}} 一括指定プロパティを使って設定することができます。

- すべての行および列のキャップ端点を内側にずらすには、`column-rule-inset-cap` プロパティと {{cssxref("row-rule-inset-cap")}} プロパティを、{{cssxref("rule-inset-cap")}} 一括指定プロパティを使用して設定できます。

すべての区間の端点は、このプロパティの `-junction` および `row-` の同等のものを含め、{{cssxref("rule-inset")}} 一括指定を使用して設定できます。

### キャップ端点を理解する

「キャップ区間の端点」とは、結合区間以外の端点を指します。これには、コンテナーのコンテンツの端にある端点に加え、他の行または列の区間が存在しない隙間結合部の端点も含まれます。

`column-rule-inset-cap` プロパティを使用すると、コンテナーの上端および下端にある列区間の上端、下端、あるいはその両端を縮小または延長したり、他の区間が存在しない内部の接合部における区間の端部を調整したりすることができます。

列のキャップ区間は、{{cssxref("rule-visibility-items")}} プロパティの影響を受けます。このプロパティは、行間罫および列間罫の区間が、空白領域に隣接する隙間に描画されるかどうかを定義します。この値を `auto` から `between` または `around` に変更すると、内部に追加のキャップ区間を作成することが可能です。

次のデモでは、最上段の列区間の始点と最下段の列区間の終点が、それぞれキャップ端点で始まったり終わったりしています。`column-rule-inset-cap: 16px` が設定されているため、すべての列区間のキャップ端点は `16px` 内側に配置されます。内側の位置を示す `<length>` の値を変更して、どの区間がキャップ端点で始まったり終わったりしているかをより明確に確認してください。

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
    <code>rule-visibility-items</code> 値
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
  column-rule-inset-cap: 16px;

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
  @supports not (column-rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-cap に対応していません";
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
  column-rule-inset-cap: 100%;
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
    ul.style.columnRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
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

インセットを変更してみてください。`0px` に設定すると、列間罫の両端がコンテナーの上端および下端に配置されます。これがデフォルトの設定です。`-32px` に設定すると、区間が `32px` だけ外側にオフセットされ、罫線はコンテナーの端から `32px` 外側に描画されます。列間罫はボックスモデルに影響を与えないため、これらの罫線はコンテナーやその他のコンテンツのレイアウトに影響を及ぼしません。

`rule-visibility-items` の値として `around` を選択してみてください。この値を設定すると、隣接する 2 つの領域のうちどちらかにでもアイテムが 存在する 場合、隙間の区間に罫線が描画されます。最上部の区間の先頭の端点は、引き続きキャップ端点となります。二重線スタイルの列間罫の最下部の区間は、`rule-visibility-items` プロパティが `around` に設定された場合に現れますが、キャップ端点で終わりません。そうではなく、最後の 2 つの列間罫の最下部の区間は、接合部、すなわち行間罫の区間が内部の隙間が存在する箇所で終わります。したがって、`column-rule-inset-cap` プロパティは、これらの区間の端点には影響しません。

`rule-visibility-items` の値として `between` を選択してみてください。この値では、隣接する両方の領域にアイテムが存在する場合にのみ、隙間の区間に罫線が描画されます。この例では、最下行の罫線は 3 列目の隙間で終わり、最後の行の区間は `9` から `16` の間となっています。二重線として表示されている 3 列目の罫線の下端は、内部の隙間で終わっています。行罫線の区間が存在するため、列罫線の区間はキャップ区間の端点で終わらないので、`column-rule-inset-cap` プロパティの影響を受けません。しかし、最後の 2 つの列罫線は、他の罫線の区間が存在しない内部の隙間で終わっているため、これらの列罫線の区間はキャップ区間の端点となり、したがって `column-rule-inset-cap` プロパティの影響を受けます。

### パーセント値を理解する

パーセント値の基準となる値は、端点の位置によって異なります。内部端点のパーセント値は、キャップ端点が接する隙間の幅を基準とするため、一般的には {{cssxref("row-gap")}} に、{{cssxref("align-content")}} の値によって追加された余白を加えた値を基準とします。コンテナー端にある端点でのパーセント値は `0` を基準とします。例えば、`column-rule-inset-cap: 50%` は、内部のキャップ端点では隙間の接合部のサイズの半分となり、コンテナー端では `0` となります。

この例は正しく動作しています。`rule-visibility-items` が `normal` に設定されている場合、各列のキャップの端点はコンテナーの上端または下端に接しているため、設定されたパーセント値はすべて `0` を基準とします。

{{EmbedLiveSample("percents", "", "300")}}

`rule-visibility-items` の値として `around` を選択してみてください。最初の 3 つの列はコンテナの端で終了するため、パーセント値を指定しても `0` として処理されます。二重線のある最後の 2 つの列間罫は、行間罫の区間が存在する内部の隙間で終了するため、これらの列区間はキャップ区間の端点にはなりません。

`rule-visibility-items` の値として `between` を選択してください。明るい線と暗い線がある最初の 2 つの列間罫は、コンテナーの端で終了するため、インセットは `0` になります。二重線のある 3 つ目の列間罫は、行間罫のセグメントが存在する内部の隙間で終了するため、この列間罫の区間はキャップ区間の終点にはなりません。実線で表される最後の 2 つの列間罫は、それ以外の罫線の区間が存在しない内部の隙間で終了するため、パーセント値によるオフセットは {{cssxref("row-gap")}} のサイズ（この場合は `20px`）を基準としています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、フレックスコンテナー内で列間罫のキャップ区間の端点を内側に配置するように、`column-rule-inset-cap` を設定する方法を示しています。

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

{{cssxref("display")}} プロパティを使用して、`.flexbox` 要素をフレックスコンテナーに変換します。{{cssxref("flex-wrap")}} と {{cssxref("flex-line-count")}} を使用して、アイテムを 3 つのフレックス行に均等に配置します。`lightblue` の {{cssxref("rule")}} を定義して行と列の隙間を塗りつぶし、その後 {{cssxref("column-rule-color")}} を上書きして、より濃い `blue` の列の隙間装飾を設定します。最後に、`column-rule-inset-cap` を `16px` に設定します。

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap: 16px;
}
```

また、{{cssxref("flex-direction")}} を `.column` コンテナーに設定して、フレックスコンテナーの主軸を変更し、アイテムを行ではなく列ごとに配置するようにしています。

```css
.column {
  flex-direction: column;
}
```

簡潔にするため、残りのCSSは省略しています。

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
  @supports not (column-rule-inset-cap: 16px) {
    body::before {
      content: "このブラウザーは column-rule-inset-cap に対応していません";
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
  containers[0].style.columnRuleInsetCap = val;
  containers[1].style.columnRuleInsetCap = val;
  output.innerText = val;
});
```

#### 結果

{{EmbedLiveSample("Basic usage", "", "330")}}

インセットの大きさを変更してください。列の区間が、その区間の端（他の列や行の区間と交差していない端）でのみ伸長することに注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset")}} 一括指定
- {{cssxref("row-rule-inset-cap")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
