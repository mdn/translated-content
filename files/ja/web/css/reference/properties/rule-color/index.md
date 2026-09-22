---
title: CSS `rule-color` プロパティ
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

**`rule-color`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、複数列のグリッド、フレックス、段組みレイアウトにおいて、列や行の間に描画される線の色を定義し、列間罫と行間罫の色を同じ値に設定します。

{{InteractiveExample("CSS デモ: rule-color")}}

```css interactive-example-choice
rule-color: purple;
```

```css interactive-example-choice
rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
rule-color: purple, repeat(auto, red, yellow);
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

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}

## 構文

```css
/* 単一の <color> 値 */
rule-color: purple;
rule-color: rgb(192 56 78);
rule-color: transparent;
rule-color: hsl(0 100% 50% / 60%);

/* 複数の値 */
rule-color: purple, magenta;
rule-color: repeat(3, purple), repeat(3, transparent);
rule-color: repeat(3, purple), repeat(3, yellow, blue);
rule-color: purple, repeat(auto, transparent), purple;
rule-color: purple, repeat(auto, blue, yellow), purple;
rule-color: repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* グローバル値 */
rule-color: inherit;
rule-color: initial;
rule-color: revert;
rule-color: revert-layer;
rule-color: unset;
```

### 値

`rule-color` プロパティは、カンマ区切りの値のリストを受け入れます。指定可能な値は次の通りです。

- `<line-color>`
  - : 線の色を表す {{cssxref("&lt;color&gt;")}} です。

- `<repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数。最初の引数として `1` 以上の {{cssxref("&lt;integer&gt;")}} を、その後の引数として 1 つ以上の `<color>` 値を指定します。`<integer>` は、`<color>` 値を何回繰り返すかを指定します。

- `<auto-repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数。最初の引数として `auto` を、その後の引数として 1 つ以上の `<color>` 値を指定します。指定された `<color>` 値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために必要な回数だけ繰り返されます。

## 解説

`rule-color` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)コンテナーの列や行の隙間が複数ある場合に、その間に描画される線の色を定義します。これは、{{cssxref("row-rule-color")}} プロパティと {{cssxref("column-rule-color")}} プロパティの両方を同じ値に設定する一括指定プロパティです。

この値は、カンマ区切りの一連の成分からなり、`<line-color>`、`<repeat-line-color>`、`<auto-repeat-line-color>` といった型を指定することができます。
`rule-color` プロパティは、{{cssxref("rule-width")}} および {{cssxref("rule-style")}} プロパティとともに、{{cssxref("rule")}} 一括指定を使用して設定できます。

### 線の色

`<line-color>` は、有効な CSS {{cssxref("&lt;color&gt;")}} の値であれば何でも指定できます。プロパティの値が 1 つの `<color>` だけで構成されている場合、すべての罫線がその色になります。例えば、次のように宣言すると、列や行の隙間にある線はすべて青色になります。

```css
rule-color: blue;
```

複数の `<line-color>` 値が宣言された場合、それらは列と行の溝に描画される線に、指定された順序で適用されます。罫線の数が `<line-color>` 値の数より多い場合は、すべての列罫線に色が割り当てられるまで、色のリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線はすべて赤になり、偶数番目の罫線はすべて黄色になります。

```css
rule-color: red, yellow;
```

### 繰り返す線の色

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、後続の引数として渡された有効な CSS {{cssxref("&lt;color&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ CSS を複数回繰り返すことなく、同じ色値を指定した回数だけ繰り返すことが可能になります。以下の宣言は同等です。

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

これにより、7 色の色リストが作成されます。`rule-color` の値に含まれる色リストの色数が、列や行の間の隙間の数を超える場合、超過分の色値は無視されます。色が溝の数より少ない場合は、すべての線に色が関連付けられるまで、値のリストが繰り返し適用されます。例えば、コンテナーが 3 列 18 行の場合、最初の列間の溝にある罫線は青、2 本目は黄色になります。行の罫線についても同様の順序が繰り返され、1 本目、8 本目、15 本目の罫線が青になります。

### 線の色の自動繰り返し

`repeat()` 関数では、正の整数の代わりに、最初の引数として `auto` を指定することもできます。最初の引数に `auto` を指定すると、その後の引数として渡された `<color>` の値は、プロパティ値のそれ以外の要素によって明示的に指定されていない列間罫や行間罫に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
rule-color: blue, repeat(auto, yellow), red;
```

この場合、最初の列間罫や行間罫は青、最後のものは赤、それ以外はすべて黄色になります。どちらの方向にも少なくとも 2 本の罫線が存在する限り、最初の罫線は常に青、最後の罫線は常に赤になります。それ以外の罫線はすべて黄色になりますが、これは、列や行の数が 2 つまたは 3 つしかない場合、黄色の線は表示されないということです。

`repeat()` 関数内の `auto` キーワードは、リストの他の部分から値を受け取らないルール線の色に対して値を自動的に設定する自動リピーターを作成し、リストが循環するのを防ぎます。`rule-color` の値には、最大で 1 つの `repeat(auto, <color>)` を含めることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、グリッドコンテナー内のアイテムの列と行の間に描画される線に対して、単一の `<color>` を定義します。

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

順序なしリストを 10 列のコンテナーとして定義し、{{cssxref("grid-template-columns")}} プロパティを使用して列と行を作成します。{{cssxref("gap")}} を `5px` に設定して、列と行の間に、`3px` の点線の罫線が収まる十分な余地を確保し、{{cssxref("list-style-type")}} を `none` に設定して箇条書き記号を除去します。

項目間に中程度の太さの破線ルールを収めるのに十分な余地を提供するため、{{cssxref("gap")}} を `5px` に指定します。また、`rule-color` を緑色の {{cssxref("hex-color")}} 値である `#22BB22` に設定します。

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-width: medium;

  rule-color: #22bb22;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-color: red) {
    body::before {
      content: "Your browser doesn't support the rule-color property";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "600")}}

### 複数の色値

この例では、複数の色を宣言する方法と、色のリストに含まれる値の数が、列と行の間にあるガターの数よりも少ない場合に、値がどのように繰り返されるかを示しています。

前回の例と同じ HTML と CSS を使用し、`rule-color` の値として、カンマで区切られた 3 つの色を記載します。

```css hidden live-sample___multiple
@layer no-support {
  @supports not (rule-color: red, blue) {
    body::before {
      content: "このブラウザーでは、rule-color プロパティに対する複数の値に対応していません";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

```css live-sample___multiple
ul {
  rule-color: blue, yellow, red;
}
```

#### 結果

{{EmbedLiveSample("Multiple", "", "600")}}

列の溝は 9 本、行の溝は 6 本ありますが、色リストには 3 色しかないので、リストが繰り返し表示され、1 行目、4 行目、7 行目が青になります。

### `repeat()` 関数の使用

この例では、`rule-color` プロパティの値内で `repeat()` 関数を使用する方法と、この関数が複雑な値を扱いにくくしないように役立つことを示しています。

#### CSS

値がいかに複雑になり得るか、そして `repeat()` 関数の有用性を示すために、2つの独自のプロパティを宣言し、それらを4つの {{cssxref(「color-mix()」)}} カラー関数の宣言で使用して、青、赤みがかった色、青緑がかった色、黄色の色を作成します。赤みがかった色と青緑がかった色の `color-mix()` は `repeat()` 関数内にあり、3回繰り返されるように設定されています。
同時に、それぞれのグリッドアイテムの周囲に境界線を追加しました。これにより、列と行の間のガターの中央に線がどのように描かれるかを確認できます。

```css live-sample___repeat
ul {
  --base: yellow;
  --mixin: blue;

  rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(
      3,
      color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin)),
      color-mix(in lch increasing hue, var(--base) 58%, var(--mixin))
    ),
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin));
}
```

#### 結果

{{EmbedLiveSample("repeat", "", "600")}}

このグリッドは 10 列 7 行で構成されており、列間の溝が 9 本、行間の溝が 6 本生成されます。`repeat()` 関数は、その中の含まれる 2 つの混合色を 3 回繰り返すことで、合計 8 色の色リストを作成します。4 色を生成するために多数の CSS コードが必要ですが、少なくとも 8 つの `color-mix()` 関数をすべて記述する必要はなくなりました。列間の溝がリストの色数よりも多いため、列間の溝には色が繰り返し使用されます。一方、行間の溝は色数よりも少ないため、リストの最後の2色は行間の溝には使用されません。

### `repeat()` の中での `auto` の使用

この例では、`repeat()` 関数内で、整数の代わりに `auto` を使用する方法を示しています。

前回の例と同じ HTML と CSS を使用しますが、`rule-color` の値を上書きします。ここでは、`repeat(auto, <color>)` を使用して、最初と最後の線を不透明な `black` に設定する以外は、すべての線をほぼ透明な黒 (`#00000033`) に設定します。

```css live-sample___auto
ul {
  rule-color: black, repeat(auto, #00000033), black;
}
```

#### 結果

{{EmbedLiveSample("auto", "", "600")}}

列間罫が行間罫よりも多いにもかかわらず、`<auto-repeat-line-color>` の値を設定することで、この対称的な効果を生み出すことができます。

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (rule-color: repeat(3, red)) {
    body::before {
      content: "このブラウザーは rule-color プロパティ値の中で使用する `repeat()` 関数に対応していません";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- {{cssxref("rule-width")}}
- {{cssxref("rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
