---
title: CSS `rule-width` プロパティ
short-title: rule-width
slug: Web/CSS/Reference/Properties/rule-width
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

**`rule-width`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、複数行のグリッド、フレックス、段組みレイアウトで、アイテム間の溝に引かれるすべての線の太さを設定し、列間罫と行間罫の太さを同じ値に設定します。

{{InteractiveExample("CSS デモ: rule-width")}}

```css interactive-example-choice
rule-width: thin;
```

```css interactive-example-choice
rule-width: thin, thick;
```

```css interactive-example-choice
rule-width: 1px, 10px;
```

```css interactive-example-choice
rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
rule-width: thick, repeat(auto, 1px, 2px), thick;
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
  rule: solid magenta;
}
#example-element i {
  padding: 5px;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}

## 構文

```css
/* キーワード値 */
rule-width: thin;
rule-width: medium;
rule-width: thick;
rule-width: thin, medium, thick;
rule-width: thick, repeat(5, thin), thick;
rule-width: thick, repeat(auto, thin, medium), thick;

/* 長さの値 */
rule-width: 1px;
rule-width: 5px;
rule-width: 1px, 3px, 5px;
rule-width: 5px, repeat(auto, 1px), 10px, 15px;
rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* グローバル値 */
rule-width: inherit;
rule-width: initial;
rule-width: revert;
rule-width: revert-layer;
rule-width: unset;
```

### 値

`rule-width` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値は次の通りです。

- `<line-width>`
  - : {{cssxref("&lt;line-width&gt;")}}: `thin`、`medium`、`thick` の 3 つのキーワードのいずれか、または正の {{cssxref("length")}} で、線の太さを表します。デフォルト値は `medium` です。

- `<repeat-line-width>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の {{cssxref("&lt;line-width&gt;")}} 値を指定します。この整数値は、`<line-width>` の値が繰り返される回数を指定します。

- `<auto-repeat-line-width>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<line-width>` 値を指定したものです。指定された `<line-width>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために必要な回数だけ繰り返されます。

## 解説

`rule-width` 一括指定プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーで行や列の間に描画される罫線の太さを定義します。

この値は、カンマ区切りの成分のリストからなり、`<line-width>`、`<repeat-line-width>`、`<auto-repeat-line-width>` といった型を指定することができます。

`rule-width` プロパティは、{{cssxref("rule-color")}} および {{cssxref("rule-style")}} プロパティとともに、一括指定の {{cssxref("rule")}} 一括指定でも設定できます。

プロパティの値が 1 つの `<line-width>` のみで構成されている場合、すべての行間罫や列間罫がその太さになります。次のように宣言すると、すべての罫線が `2px` になります。

```css
rule-width: 3px;
```

複数の `<line-width>` 値が宣言されている場合は、罫線に指定された順序で適用されます。罫線の数が `<line-width>` の値の数より多い場合、すべての罫線に太さが割り当てられるまで、太さのリストが繰り返し適用されます。例えば、次のように宣言すると、水平方向・垂直方向共に奇数番目の罫線は `thin`、偶数番目の罫線は `1em` になります。

```css
rule-width: thin, 1em;
```

### 反復される罫線の太さ

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;line-width&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ値を繰り返すことなく、値を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
rule-width: 1rem, thick, thin, thick, thin, thick, thin;
rule-width: 1rem, repeat(3, thick, thin);
```

`<line-width>` として、`<line-width>` に解決されるカスタムプロパティを含む、任意の値を使用することができます。`repeat()` を使用すると、特に複雑な長さの計算を行う場合、値の記述が簡単になります。これにより、列・行・段の数に関係なく、単一の関数だけで繰り返しパターンを記述できるようになります。

### 自動反復される罫線の太さ

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<line-width>` のリストの値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
rule-width: thin, repeat(auto, medium), thin;
```

この場合、最初と最後の列間罫と行間罫は常に `thin` となり、それ以外のすべての罫線は `medium` になります。列や行が 2 つまたは 3 つしかない場合は、`medium` サイズの罫線は現れません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない列間罫・行間罫の太さを設定する「自動リピーター」を作成し、リストが繰り返されるのを防ぎます。`rule-width` の値内で指定することができる、`repeat(auto, <width>)` は 1 つだけです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、グリッドコンテナー内のアイテムの列と行の間に描画される線の太さを単一に定義します。

#### HTML

75 アイテムのリストを作成します。簡潔にするため、HTML の大部分は非表示にしています。

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
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

順序なしリストを、10 列のグリッドコンテナーとして定義します。{{cssxref("gap")}} を `5px` に指定して、`3px` の赤い破線の罫線が収まるように、アイテム間に十分な余地を確保します。

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-color: red;
  rule-width: 3px;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-width: medium) {
    body::before {
      content: "このブラウザーは rule-width プロパティに対応していません";
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

### 反復する値

この例では、太さのリストに含まれる値の数が列間罫・行間罫よりも少ない場合、値が繰り返される様子を示しています。

前の例と同じ HTML と CSS を使用し、`rule-width` としてカンマ区切りの 3 つの太さを指定します。

```css live-sample___repeat
ul {
  rule-width: thin, 6px, 12px;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

このグリッドコンテナーには 8 行 10 列があるため、各方向にそれぞれ 7 つと 9 つの溝があり、3 つの `<line-width>` 値の並びが両方向で繰り返されます。

### `repeat()` 関数の使用

この例では、`repeat()` 関数を `rule-width` プロパティの値内で使用する方法、およびこの関数が値の宣言を縮小するのに役立つことを示しています。

前回の例と同じ HTML と CSS を使用します。さらに、2 つのカスタムプロパティを宣言し、`rule-width` の値内の `repeat()` 関数で使用します。`repeat()` 関数は、2 つの `<line-width>` 値からなるリストを 3 回繰り返すように設定します。

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", "600")}}

`repeat()` 関数は 2 つの太さの値を 4 回繰り返して、10 個の太さの値からなるリストを作成します。列と行の溝の数が太さの合計数より少ないため、リストの最後の 2 つの値は破棄されます。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <line-width>)` を使用することで、すべての列間罫・行間罫を `1px` に設定し、最初と最後のみを `5px` に設定します。

```css live-sample___auto
ul {
  rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", "600")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-width: thin, thick) {
    body::before {
      content: "このプロパティは rule-width プロパティに対応していません";
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
- {{cssxref("rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
