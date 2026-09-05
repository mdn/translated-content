---
title: CSS `row-rule-break` プロパティ
short-title: row-rule-break
slug: Web/CSS/Reference/Properties/row-rule-break
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{SeeCompatTable}}

**`row-rule-break`** は [CSS](/ja/docs/Web/CSS) のプロパティで、行間罫が列のギャップ（隙間）と交差する箇所で、その行間罫を区間に分割する動作を設定します。

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-break: none;
```

```css interactive-example-choice
row-rule-break: normal;
```

```css interactive-example-choice
row-rule-break: intersection;
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
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-rule: solid thick orange;
  column-rule: solid thick lavender;
  gap: 15px;
}
#example-element i {
  padding: 5px;
}
```

## 構文

```css
/* キーワード */
row-rule-break: none;
row-rule-break: normal;
row-rule-break: intersection;

/* グローバル値 */
row-rule-break: inherit;
row-rule-break: initial;
row-rule-break: revert;
row-rule-break: revert-layer;
row-rule-break: unset;
```

### 値

このプロパティは、以下のリストにある単一のキーワードで指定します。

- `none`
  - : 行間罫が列のギャップと交差する場合でも、行間罫が途切れることはありません。つまり、連続した行間罫が、コンテナーの高さ全体にわたって、端から端まで描画されます。
- `normal`
  - : グリッドコンテナーおよびフレックスコンテナーでは、`none` と同様に動作します。段組みでは、`none` と同様に動作します。これがデフォルト値です。
- `intersection`
  - : 行間罫は、列のギャップと交差するたびに途切れます。行間罫の区間は、コンテナーとギャップの端で始まったり終わったりします。

## 解説

`row-rule-break` プロパティは、行間罫が列のギャップを横切る際に、その線を複数の区間に分割するかどうかを指定します。

行間罫は、行のギャップに 1 つ以上の区間として描画されます。この区間は、別個の行にある隣接するグリッドアイテムの間、フレックスレイアウトにおいて {{cssxref("flex-direction")}} に応じてフレックスアイテムまたはフレックス行の間、段組みレイアウトにおいて {{cssxref("column-height")}} で複数の段の行が生成している場合の段の行の間に現れます。

`row-rule-break` プロパティは、区切りが発生するかどうかのみを決定します。デフォルトでは、それぞれの区間がギャップの端（またはコンテナーの端）で始まったり終わったりするため、行間罫の区間の切れ目（または空間）は、列のギャップの幅と同じになります。ギャップが `0` の場合、この区切りは表示されないことがあります。両端の位置は、{{cssxref("row-rule-inset")}} プロパティで制御できます。

`row-rule-break` が `none` に設定されている場合、切れ目は発生せずに行間罫は連続し、`row-rule-inset` の値は、コンテナーの端にある行間罫の左右の端にのみ影響します。切れ目がある場合、`row-rule-inset` プロパティは、各行間罫の区間の開始点と終了点に影響します。

`row-rule-break` プロパティは、{{cssxref("column-rule-break")}} プロパティと同様に、{{cssxref("rule-break")}} 一括指定を使用して設定できます。

行間罫がデフォルトで単一の連続した区間で構成されるか、列のギャップと交差する際に区切られる複数の区間で構成されるかは、コンテナーの種類によって異なります。

### グリッドコンテナー

グリッドコンテナーでは、デフォルトで、行間罫の区間は、目に見える「十字」の交差部分を通って連続します。`row-rule-break: intersection` を設定すると、本来なら交差するはずの区間が、列のギャップごとに強制的に区切られるようになります。

```html hidden
<h1>グリッドでのデフォルトの罫線分割</h1>
<div class="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<p>
  <label
    ><input type="checkbox" />
    <code>row-rule-break: intersection</code></label
  > を設定
</p>
```

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

:has(:checked) .grid {
  row-rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

デフォルトで、行間罫は途切れません。チェックボックスをオンにすると、`row-rule-break` が `intersection` に設定され、本来は連続するる線がすべての「交差」箇所で途切れるようになります。デフォルトでは、区間の間隔は {{cssxref("column-gap")}} の幅に設定されており、この場合では `20px` に設定されています。

### フレックスコンテナー

フレックスボックスでは、横書きにおいて `flex-direction` が `row` または `row-reverse` の場合、行間罫が連続し、列の区間は行のギャップの端で始まったり終わったりします。`flex-direction` が `column` または `column-reverse` の場合、列間罫が連続し、行の区間は列のギャップの端で始まったり終わったりします。

```html hidden
<h1>フレックスボックスでのデフォルトの罫線分割</h1>
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
<p>
  <label
    ><input type="checkbox" />
    <code>row-rule-break: intersection</code></label
  > を設定
</p>
```

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

:has(:checked) .flexbox {
  row-rule-break: intersection;
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
.flexbox {
  display: flex;
  flex-flow: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}
.column {
  flex-flow: column balance;
  gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
```

{{EmbedLiveSample("Flex containers", "", "300")}}

横書きモードにおいて、`row` または `row-reverse` に設定された場合、行間罫はデフォルトで連続しますが、`column` または `column-reverse` に設定された場合は、それぞれの列の隙間で行間罫が途切れます。`row-rule-break` を `intersection` に設定しても、その影響は `row` および `row-reverse` のシナリオにおける行間罫に限定されます。

### 段組みコンテナー

段組みコンテナーでは、デフォルトの `normal` の挙動は `none` と同じになります。

```html hidden
<h1>段組みでのデフォルトの罫線分割</h1>
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
  <li>Yes. Some are blue.</li>
  <li>And some are blue.</li>
  <li>Some are old.</li>
  <li>And some are new.</li>
  <li>Some are sad.</li>
  <li>And some are glad.</li>
  <li>And some are very, very bad.</li>
  <li>Why are they</li>
  <li>Sad and glad and bad?</li>
  <li>I do not know.</li>
  <li>Go ask your dad.</li>
</ol>
<fieldset>
  <legend><code>row-rule-break:</code> の設定</legend>
  <label
    ><input type="radio" name="break" value="none" /> <code>none</code></label
  >
  <label
    ><input type="radio" name="break" value="normal" checked />
    <code>normal</code></label
  >
  <label
    ><input type="radio" name="break" value="intersection" />
    <code>intersection</code></label
  >
</fieldset>
```

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
ol {
  columns: 3 / 4em;
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  row-rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  row-rule-break: intersection;
}
:has([value="none"]:checked) ol {
  row-rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

`intersection` を選択すると、行間罫は列のギャップに到達するたびに区間に分割され、それぞれの区間はギャップの端で始まったり終わったりします。開始位置と終了位置は、`row-rule-inset` プロパティで変更可能です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`row-rule-break` プロパティを使用して、グリッドコンテナー内で罫線をそれぞれの区間に分割するので、行間罫は列のギャップの間に作成されます。`column-gap` プロパティを変更すると、区間のサイズが変わります。

#### HTML

50 件のアイテムからなるリストと、。列のギャップの幅を変更するためのスライダーを作成します。簡潔にするため、HTML の大部分は省略しています。

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>49</li>
  <li>50</li>
</ul>
```

```html hidden live-sample___basic
<p>
  <label
    >列間の幅を変更しましょう。
    <input type="range" min="0" max="32" value="16" id="gap"
  /></label>
  <output id="o"></output>
</p>
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
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
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  <li>32</li>
  <li>33</li>
  <li>34</li>
  <li>35</li>
  <li>36</li>
  <li>37</li>
  <li>38</li>
  <li>39</li>
  <li>40</li>
  <li>41</li>
  <li>42</li>
  <li>43</li>
  <li>44</li>
  <li>45</li>
  <li>46</li>
  <li>47</li>
  <li>48</li>
  <li>49</li>
  <li>50</li>
</ul>
```

#### CSS

順序なしリストを 8 列のコンテナーとして定義し、{{cssxref("grid-template-columns")}} プロパティで列と行を作成し、{{cssxref("list-style-type")}} を `none` に設定して箇条書き記号を除去します。{{cssxref("gap")}} を `20px` に指定して、列間と行間に `20px` の実線の行間罫と列間罫を引く余地を確保します。最後に、行間罫がすべての交点で区間に区切られるように設定します。

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;

  row-rule-break: intersection;
}
```

簡潔にするため、残りの CSS は省略しています。

```css hidden live-sample___basic
ol {
  place-items: center;
  width: 95vw;
}
li {
  text-align: center;
  font-family: sans-serif;
  line-height: 50px;
}
```

```js hidden live-sample___basic
const gap = document.getElementById("gap");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

gap.addEventListener("input", () => {
  output.innerText = ul.style.columnGap = `${gap.value}px`;
});
```

#### 結果

{{EmbedLiveSample("Basic", "", "600")}}

列のギャップを広くすると、行の区間のギャップが広がる様子に注目してください。列のギャップを `0px` にすると、行の装飾が連続しているように表示されますが、実際はそうではありません。区間のギャップが `0px` になると目に見えないかもしれませんが、区間はその間隔の位置で始まり、終わっているため、`row-rule-inset` プロパティで設定されたオフセットは引き続き適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} 一括指定
- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
