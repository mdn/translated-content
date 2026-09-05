---
title: CSS `rule-break` プロパティ
short-title: rule-break
slug: Web/CSS/Reference/Properties/rule-break
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

**`rule-break`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、行と列のギャップ（隙間）が交差する箇所で、列間罫や行間罫を区間に分割する動作を設定し、{{cssxref("column-rule-break")}} および {{cssxref("row-rule-break")}} を同じ値に設定します。

{{InteractiveExample("CSS デモ: rule")}}

```css interactive-example-choice
rule-break: none;
```

```css interactive-example-choice
rule-break: normal;
```

```css interactive-example-choice
rule-break: intersection;
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
  column-rule: solid thick purple;
  gap: 10px;
}
#example-element i {
  padding: 5px;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("column-rule-break")}}
- {{cssxref("row-rule-break")}}

## 構文

```css
/* キーワード */
rule-break: none;
rule-break: normal;
rule-break: intersection;

/* グローバル値 */
rule-break: inherit;
rule-break: initial;
rule-break: revert;
rule-break: revert-layer;
rule-break: unset;
```

### 値

このプロパティは、以下のリストにある単一のキーワードで指定します。

- `none`
  - : 行と列の線が交差する箇所には切れ目がなく、それぞれのギャップ（隙間）の端から端まで、単一の装飾が施されます。
- `normal`
  - : フレックスコンテナーおよびグリッドコンテナーでは、`none` と同様に動作します。段組みでは、`column-rule-break` は `intersection` と同じ挙動を示し、`row-rule-break` は `none` と同じ挙動を示します。これがデフォルト値です。
- `intersection`
  - : 罫線はギャップと交差するたびに途切れます。罫線の区間は、コンテナーとギャップの端で始まったり終わったりします。

## 解説

`rule-break` プロパティは、線がギャップ（隙間）を横切る際に、線を区間に分割する動作を設定するために使用されています。

ギャップの装飾は、1 つまたは複数のギャップ装飾区間としてギャップの内部に描画され、これらの区間は任意の 2 つの隣接するアイテムの間に生成されます。コンテナーの種類によっては、デフォルトで、これらの区間がギャップの端で終了する場合もあれば、列および行の罫線によってコンテナーの高さおよび幅全体に拡張される場合もあります。

罫線に区切りがある場合、デフォルトで、区間は区切りの端から始まり、その端で終わります。区切りのサイズが `0` の場合、区切りは表示されないことがあります。`rule-break` プロパティは、区切りが発生するかどうかを決定します。それぞれの区間の末端にある区切りのサイズは、`rule-inset` プロパティで制御できます。区切りがなく、線が連続している場合、`rule-inset` プロパティはコンテナーの先頭と末尾の罫線にのみ影響します。区切りがある場合、`rule-inset` プロパティは罫線の各区間の先頭と末尾に影響します。

罫線がデフォルトで単一の連続した区間で構成されるか、あるいはギャップと交差する際に区切られる複数の区間で構成されるかは、コンテナーの種類によって異なります。

### グリッドコンテナー

グリッドコンテナーでは、デフォルトで、罫線の区間は、目に見える「交差」箇所を通過し続けます。`rule-break: intersection` を設定すると、本来なら交差するはずの箇所で区間が強制的に区切られるようになります。

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
    ><input type="checkbox" /><code>rule-break: intersection</code></label
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
  rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid red;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

チェックボックスをオンにすると、`rule-break` が `intersection` に設定され、連続する線がすべての「交差」箇所で途切れるようになります。

### フレックスコンテナー

フレックスボックスでは、`flex-direction` が `row` または `row-reverse` の場合、行の区間が連続し、列の区間は行のギャップの端で始まり、その端で終わります。`flex-direction` が `column` または `column-reverse` の場合、列の罫線が連続し、行の区間は列のギャップの端で始まり、その端で終わります。

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
    ><input type="checkbox" /><code>rule-break: intersection</code></label
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
  rule-break: intersection;
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
  rule: 5px solid red;
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

`flex-direction`の設定に応じて、列間罫や行間罫がデフォルトで連続している点に注目してください。`rule-break`を`intersection`に設定すると、それらの連続した罫線は交差するたびに途切れます。

### 段組みコンテナー

段組みコンテナーでは、デフォルトの `normal` 動作は、行間罫と列間罫で異なります。列間罫の区間は、行のギャップと交差した時点で始まったり終わったりし、`column-rule-break: intersection` として動作します。一方、行ルールは、列のギャップと交差しても途切れず、`row-rule-break: none` として動作します。

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
  <li>Yes. Some are red.</li>
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
  <legend><code>rule-break:</code> の設定</legend>
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
  rule: 5px solid red;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  rule-break: intersection;
}
:has([value="none"]:checked) ol {
  rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

それぞれの値のラジオボタンをチェックして、その値の効果を確認してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`rule-break` プロパティを使用して、グリッドコンテナー内のそれぞれの罫線の区間を分割し、罫線同士が交差しないようにしています。

#### HTML

50 個のアイテムからなるリストを作成します。簡潔にするため、HTML の大部分は省略しています。

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
<ul>
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

順序なしリストを 8 列のコンテナーとして定義し、{{cssxref("grid-template-columns")}} プロパティで列と行を作成し、{{cssxref("list-style-type")}} を `none` に設定して箇条書き記号を除去します。{{cssxref("gap")}} を `20px` に指定して、行間と列間に `20px` の実線の行間罫と列間罫を引く余地を確保します。最後に、罫線の区間が交差するのではなく、区切られるように設定します。

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-break: intersection;
}
```

簡潔にするため、残りの CSS は省略しています。

```css hidden live-sample___basic
ol {
  place-items: center;
}
li {
  text-align: center;
  aspect-ratio: 1;
  font-family: sans-serif;
  line-height: 50px;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "640")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("rule-inset")}} 一括指定
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
