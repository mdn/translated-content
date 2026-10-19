---
title: CSS `rule-style` プロパティ
short-title: rule-style
slug: Web/CSS/Reference/Properties/rule-style
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

**`rule-style`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、複数列のグリッド、フレックス、段組みレイアウトにおいて、列や行の間に描画される線のスタイルを定義し、列間罫と行間罫のスタイルを同じ値に設定します。

{{InteractiveExample("CSS デモ: rule-style")}}

```css interactive-example-choice
rule-style: solid;
```

```css interactive-example-choice
rule-style: dashed, dotted;
```

```css interactive-example-choice
rule-style: repeat(2, inset, dashed, double);
```

```css interactive-example-choice
rule-style: solid, repeat(auto, double), solid;
```

```css interactive-example-choice
rule-style: hidden;
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
  rule: solid rebeccapurple 7px;
  gap: 7px;
}
#example-element i {
  padding: 5px;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}

## 構文

```css
/* 単一の値 */
rule-style: none;
rule-style: hidden;
rule-style: dotted;
rule-style: dashed;
rule-style: solid;
rule-style: double;
rule-style: groove;
rule-style: ridge;
rule-style: inset;
rule-style: outset;

/* 複数の値 */
rule-style: groove, double, dashed;
rule-style: solid, repeat(5, ridge), solid;
rule-style: dotted, repeat(auto, inset, outset), dotted;

/* グローバル値 */
rule-style: inherit;
rule-style: initial;
rule-style: revert;
rule-style: revert-layer;
rule-style: unset;
```

### 値

`rule-style` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値は次の通りです。

- `<line-style>`
  - : {{cssxref("&lt;line-style&gt;")}}: `none`、`hidden`、`dotted`、`dashed`、`solid`、`double`、`groove`、`ridge`、`inset`、`outset` のいずれか。デフォルト値は `none` です。{{cssxref("rule-style")}} を参照してください。

- `<repeat-line-style>`
  - : {{cssxref("repeat()")}} 関数。最初の引数として `1` 以上の {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の {{cssxref("&lt;line-style&gt;")}} 値を指定します。整数で、`<line-style>` 値を何回繰り返すかを指定します。

- `<auto-repeat-line-style>`
  - : {{cssxref("repeat()")}} 関数。最初の引数として `auto` を、その後の引数として 1 つ以上の `<line-style>` 値を指定します。指定された `<line-style>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために必要な回数だけ繰り返されます。

## 解説

`rule-style` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)コンテナーの列や行の隙間が複数ある場合に、その間に描画される列間罫や行間罫の線のスタイルを定義します。

`rule-style` は、{{cssxref("row-rule-style")}} プロパティと {{cssxref("column-rule-style")}} プロパティの両方を同じ値に設定します。
`rule-color` プロパティは、{{cssxref("rule-color")}} および {{cssxref("rule-width")}} プロパティとともに、{{cssxref("rule")}} 一括指定を使用して設定することもできます。

この値はカンマ区切りの成分（`<line-style>`、`<repeat-line-style>`、`<auto-repeat-line-style>` 型）のリストを使用することができます。

プロパティの値に `<line-style>` が 1 つだけ指定されている場合、すべての列間罫と行間罫が、そのスタイルになります。次のように宣言すると、すべての列間罫と行間罫は `double` になります。

```css
rule-style: double;
```

複数の `<line-style>` 値が宣言された場合、それらは指定された順序で罫線に適用されます。罫線の数が `<line-style>` 値の数より多い場合、すべての列間罫及び行間罫にスタイルが適用されるまで、線スタイルのリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線はすべて `double` になり、偶数番目の罫線はすべて `inset` になります。

```css
rule-style: double, inset;
```

### 繰り返す線のスタイル

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、後続の引数として渡された有効な CSS {{cssxref("&lt;line-style&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ値を繰り返し使用することなく、同じスタイルを指定した回数だけ繰り返すことが可能になります。`<line-style>` キーワード値や、有効な `<line-style>` に解決される独自のプロパティを含めることができます。`repeat()` を使用すると、値の記述が容易になり、行と列の数に関係なく、単一の関数を使用して繰り返しパターンを記述できるようになります。以下の宣言は同等です。

```css
rule-style: solid, outset, inset, outset, inset, outset, inset;
rule-style: solid, repeat(3, outset, inset);
```

これにより、7 つのスタイルからなるリストが作成されます。`rule-style` の値に含まれるスタイルリストの数が、列または行間の隙間の数を上回る場合、超過分のスタイル値は無視されます。コンテナーに 3 つの列または行がある場合、最初の溝の罫線は `solid` となり、2 本目の溝は `outset` となります。

溝の方がスタイルより数が多い場合、スタイルのリストが繰り返されます。コンテナーの列数または行数が 8、15、22、29 の場合、このスタイルの並びはそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後の罫線は `inset` となります。

### 線のスタイルの自動繰り返し

`repeat()` 関数では、正の整数の代わりに、最初の引数として `auto` を指定することもできます。最初の引数に `auto` を指定すると、その後の引数として渡された `<line-style>` の値は、プロパティ値のそれ以外の要素によって明示的に指定されていない罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

`repeat()` 関数内で `auto` キーワードを使用すると、リストの他の部分から値を受け取らない列および行の罫線に値を自動的に割り当てる「自動リピーター」を作成し、リストがループするのを防ぎます。`rule-style` 値内では、`repeat(auto, <line-style>)` を 1 つだけ指定することができます。

```css
rule-style: solid, repeat(auto, dotted), solid;
```

この場合、コンテナー内の列や行の数が 8、15、22、29 のいずれかであると、最初と最後のルールは常に `solid` となり、それ以外のすべての罫線は `dotted` となります。列や行が 2 つまたは 3 つしかない場合は、点線の罫線は表示されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、グリッドコンテナー内のアイテムの列と行の間に描画される線に対して、単一の `<line-style>` を定義します。

#### HTML

75 個のリストアイテムからなるリストを作成します。簡潔にするため、HTML の大部分は省略しています。

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
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
  <li>51</li>
  <li>52</li>
  <li>53</li>
  <li>54</li>
  <li>55</li>
  <li>56</li>
  <li>57</li>
  <li>58</li>
  <li>59</li>
  <li>60</li>
  <li>61</li>
  <li>62</li>
  <li>63</li>
  <li>64</li>
  <li>65</li>
  <li>66</li>
  <li>67</li>
  <li>68</li>
  <li>69</li>
  <li>70</li>
  <li>71</li>
  <li>72</li>
  <li>73</li>
  <li>74</li>
  <li>75</li>
</ul>
```

#### CSS

順序なしリストを 10 列のコンテナーとして定義し、{{cssxref("grid-template-columns")}} プロパティを使用して列と行を作成します。{{cssxref("gap")}} を `5px` に設定して、列と行の間に、`thick dashed orange` の罫線が収まる十分な余地を確保し、{{cssxref("list-style-type")}} を `none` に設定して箇条書き記号を除去します。

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-width: thick;
  rule-color: orange;

  rule-style: dashed;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-style: solid) {
    body::before {
      content: "Your browser doesn't support the rule-style property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "600")}}

### 複数の値

この例では、プロパティの値として複数の `<line-style>` 値を指定する方法と、スタイルを設定する溝の数よりも多くの `<line-style>` 値が指定された場合にどうなるかを示しています。

`rule-style` プロパティを、`<line-style>` で指定可能なすべての値をカンマ区切りで列挙したリストに設定します。

```css live-sample___multiple
ul {
  rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### 結果

{{EmbedLiveSample("Multiple", "", "600")}}

行と列の両方で、値の数は溝の数よりも多く、それぞれの場合で最後の値は使用されません。

### 繰り返す値

この例では、スタイルの一覧に含まれる値が、列間罫や行間罫よりも少ない場合、その値がどのように繰り返されるかを示しています。

前回の例と同じ HTML と CSS を使用し、`rule-style` の値として、カンマ区切りで 3 つのスタイルを指定します。

```css live-sample___repeat
ul {
  rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

### `repeat()` 関数の使用

この例では、`rule-style` プロパティの値内で `repeat()` 関数を使用する方法を示しています。HTML と CSS は前回の例と同じものを使用します。ここでは、 `repeat()` 関数で 2 つの `<line-style>` 値のリストを 3 回繰り返すように設定する指定しています。

```css live-sample___func
ul {
  rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "600")}}

この `repeat()` 関数は、2 つのスタイル値を 3 回繰り返して、8 つのスタイル値からなるリストを作成します。列に対してはスタイルが繰り返されますが、行に対してはリストの最後の値は無視されます。

### `repeat()` の中での `auto` の使用

この例では、`repeat()` 関数内で、整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <line-style>)` を使用することで、すべての列間罫と行間罫を `groove` に設定します。ただし、最初と最後の罫線については `solid` に設定します。

```css live-sample___auto
ul {
  rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "600")}}

列間罫が行間罫よりも多いにもかかわらず、`<auto-repeat-line-color>` を設定することで、この対称的な効果を生み出すことができます。

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-style: solid, groove) {
    body::before {
      content: "このブラウザーは rule-style プロパティの複数の値に対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("rule-color")}}
- {{cssxref("rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
