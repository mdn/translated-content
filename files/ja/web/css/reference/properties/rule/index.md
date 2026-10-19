---
title: CSS `rule` プロパティ
short-title: rule
slug: Web/CSS/Reference/Properties/rule
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

**`rule`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、複数行のグリッド、フレックス、段組みレイアウトで、行と列の間に引かれる線の太さ、スタイル、色を設定し、列間罫と行間罫の両方を同じ値に設定します。

{{InteractiveExample("CSS デモ: rule")}}

```css interactive-example-choice
rule: solid;
```

```css interactive-example-choice
rule: dotted medium blue;
```

```css interactive-example-choice
rule:
  dotted medium blue,
  repeat(3, dotted red 2px, double orange 5px);
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px, dotted blue 5px),
  dashed medium magenta;
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px),
  outset goldenrod 5px;
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
  rule: solid thick;
}
#example-element i {
  padding: 5px;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("rule-color")}}
- {{cssxref("rule-style")}}
- {{cssxref("rule-width")}}

## 構文

```css
/* 単一の値 */
rule: dotted;
rule: solid 8px;
rule: solid blue;
rule: thick inset blue;

/* 複数の値 */
rule: groove, dashed, solid;
rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px),
  inset 3px yellow;

/* グローバル値 */
rule: inherit;
rule: initial;
rule: revert;
rule: revert-layer;
rule: unset;
```

### 値

`rule` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値は次の通りです。

- `<gap-rule>`
  - : 以下の値のうち、1 つ、2 つ、3 つを、順序を問わず指定します。
    - `<'line-width'>`
      - : {{cssxref("&lt;line-width&gt;")}}: 正の {{cssxref("&lt;length&gt;")}} または、`thin`、`medium`、`thick` の 3 つのキーワードのいずれか。デフォルト値は `medium` です。{{cssxref("rule-width")}} を参照してください。
    - `<'line-style'>`
      - : {{cssxref("&lt;line-style&gt;")}}: `none`、`hidden`、`dotted`、`dashed`、`solid`、`double`、`groove`、`ridge`、`inset`、`outset` のいずれか。デフォルト値は `none` です。{{cssxref("rule-style")}} を参照してください。
    - `<'color'>`
      - : 線の色を表します {{cssxref("&lt;color&gt;")}} の値。デフォルト値は `currentcolor` です。{{cssxref("rule-color")}} を参照してください。

- `<gap-repeat-rule>`
  - : {{cssxref("repeat()")}} 関数。第一引数として `1` 以上の {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の `<gap-rule>` 値を指定します。`<integer>` は、`<gap-rule>` 値のリストを何回繰り返すかを指定します。

- `<gap-auto-repeat-rule>`
  - : {{cssxref("repeat()")}} 関数。第一引数として `auto` を、その後の引数として 1 つ以上の `<gap-rule>` 値を指定します。指定された `<gap-rule>` 値のリストは、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`rule` プロパティは、2 つ以上の行や列のある[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、 [フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)コンテナーにおいて、行や列の間に描画される罫線のスタイルを定義します。

`rule` は、{{cssxref("rule-color")}}、{{cssxref("rule-style")}}、{{cssxref("rule-width")}} の一括指定です。これにより、{{cssxref("row-rule")}} および {{cssxref("column-rule")}} 一括指定プロパティが同じ値に設定されます。

プロパティの値は、カンマ区切りの成分のリストであり、`<gap-rule>`、`<gap-repeat-rule>`、`<gap-auto-repeat-rule>` の型を指定することができます。それぞれの `<gap-rule>` は、1 つ以上の罫線ラインの幅、色、およびスタイルを定義します。

プロパティの値が 1 つの `<gap-rule>` だけで構成されている場合、すべての行間罫と列間罫はそのスタイル、色、太さになります。次のように宣言すると、すべての行間罫と列間罫が `dashed red 3px` になります。

```css
rule: dashed red 3px;
```

複数の `<gap-rule>` が宣言されている場合、それらは指定された順序で罫線に適用されます。行や列の間の溝が `<gap-rule>` の値よりも多い場合、値のリストはすべての行間罫・列間罫に隙間の線が設定されるまで、繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線はすべて `dashed red 3px` になり、偶数番目の罫線はすべて `dotted blue 5px` になります。これは両方向とも同様です。

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### 繰り返す線のスタイル

`repeat()` 関数は、第一引数として `1` 以上の整数を指定することで、後続の引数として渡された有効な CSS [`<gap-rule>`](#gap-rule) 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ CSS を複数回繰り返すことなく、同じ `<gap-rule>` を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

これにより、7 つの罫線からなるリストが生成されます。`rule` 値のスタイルリストに含まれるスタイルの数が、行と列の間の隙間の数を超える場合、超過分のスタイル値は無視されます。これが適用されるコンテナーの行と列の数がそれぞれ 3 つある場合、最初の隙間の罫線は `solid red 5px`、2 つ目のは `outset blue 10px` となり、これは両方向に対して適用されます。

スタイルの数よりも溝の数が多い場合、スタイルのリストは繰り返し適用されます。コンテナーの行と列の数が 8、15、22、29 である場合、このスタイルの並びは、それぞれその方向に 1 回、2 回、3 回、4 回繰り返し適用され、最後の罫線は `inset green 1px` となります。

### 自動的に繰り返す線のスタイル

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された [`<gap-rule>`](#gap-rule) の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

この場合、最初と最後の行や列の罫線は `solid red 5px` となり、それ以外には `dotted green 1px` と `dashed blue 1px` が交互に適用されます。コンテナーの行と列の数が 3、6、11、16、21 のどれであっても、最初と最後の溝の間には常に太い赤の実線が引かれます（{{cssxref("rule-visibility-items")}} によって線が描画されない場合を除く）。その他のすべての行間罫、列間罫、段間罫は、細い緑の点線または青の破線になります。行や列の数が 2 つまたは 3 つしかない場合は、点線や破線は引かれません。

`repeat()` 関数内の `auto` キーワードは、リストの他の部分から値を受け取らない行と列のルールに値を自動的に埋め込む「自動リピーター」を作成し、リストのループを防止します。`rule` の値内で指定することができる、`repeat(auto, <gap-rule>)` は 1 つだけです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、グリッドアイテム間の隙間に描画される線に対して、単一のルールを定義します。

#### HTML

75 個のリストアイテムからなるリストを作成します。簡潔にするため、HTML の大部分は非表示にしています。

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

順序なしリストを 10 列のコンテナーとして定義し、{{cssxref("grid-template-columns")}} プロパティを使用して列と行を生成し、{{cssxref("list-style-type")}} を `none` に設定して箇条書きのマークを除去します。`{{cssxref("gap")}}` を `5px` に指定し、`dashed 3px magenta` の罫線が収まるよう、列と行の間に十分な余地を確保します。

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;

  rule: dashed 3px magenta;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "600")}}

### 複数の gap-rule とデフォルト値

この例では、カンマ区切りの複数の値を使用する方法を示しています。また、幅、色、スタイルのデフォルト値が、それぞれ `medium`、`currentcolor`、`none` であることも示しています。

前回の例と同じ HTML および CSS を使用し、カンマ区切りで 4 つの `<gap-rule>` 値を `rule` の値として指定します。まず最初の `<gap-rule>` では `<line-width>` を省略し、2 つ目では `<color>` を省略し、3 つ目では `<line-style>` を省略し、4 つ目にはこれら 3 つの要素をすべて指定します。

```css live-sample___repeat
ul {
  rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

実線の幅は `3px`、点線はテキストと同じ色です。また、幅 `5px` の青い線はありません。これは、3 つ目となる `<gap-rule>` のスタイルがデフォルトで `none` になっているため、線が描画されないからです。罫線スタイルの数が溝の数より少ないため、すべての罫線にスタイルが適用されるまで、罫線のリストが繰り返し適用されます。

### `repeat()` 関数の使用

この例では、`rule` プロパティの値内で `repeat()` 関数を使用する方法を示しています。前回の例と同じ HTML と CSS を使用し、`rule` の値を、3 つの成分（2 つの `<gap-rule>` 値と、2 つの `<gap-rule>` 値のリストを 3 回繰り返すように設定する `<gap-repeat-rule>`）をカンマで区切ったリストで上書きしています。

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "600")}}

グリッドは 10 列× 8 行で構成されているため、列の溝は 9 つ、行の溝は 7 つあります。 `repeat()` 関数は 2 つのスタイル値を 3 回繰り返し、8 つのスタイル値からなるリストを作成します。行の溝の数が値の数より少ないため、行方向では最後の値は使用されません。一方、列の溝の数が値の数より多いため、列方向ではリストが繰り返されます。

### `repeat()` の中での `auto` の使用

この例では、`repeat()` 関数内で、整数の代わりに `auto` 引数を使用する方法を示しています。

`repeat(auto, <gap-rule>)` を使用することで、すべての行および列の罫線を `1px dotted`（色は現在の色がデフォルト）に設定します。ただし、最初と最後の罫線については、`3px solid red` に設定します。

```css live-sample___auto
ul {
  rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "600")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule: thin, thick) {
    body::before {
      content: "このブラウザーは rule プロパティに対応していません。";
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
- {{cssxref("rule-style")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("row-rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
