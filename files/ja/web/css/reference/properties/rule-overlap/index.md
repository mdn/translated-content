---
title: "`rule-overlap` プロパティ"
short-title: rule-overlap
slug: Web/CSS/Reference/Properties/rule-overlap
l10n:
  sourceCommit: 0cc2d00775016fc61ae0ac1256d65ed1b56a193a
---

{{SeeCompatTable}}

**`rule-overlap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、列間罫と行間罫が交差するときにどちらの罫線を上に描画するかを指定します。

{{InteractiveExample("CSS デモ: rule-overlap")}}

```css interactive-example-choice
rule-overlap: row-over-column;
```

```css interactive-example-choice
rule-overlap: column-over-row;
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
}
#example-element i {
  padding: 5px;
}
```

## 構文

```css
/* キーワード */
rule-overlap: row-over-column;
rule-overlap: column-over-row;

/* グローバル値 */
rule-overlap: inherit;
rule-overlap: initial;
rule-overlap: revert;
rule-overlap: revert-layer;
rule-overlap: unset;
```

### 値

このプロパティは、以下のリストからキーワードを 1 つ指定します。

- `row-over-column`
  - : 行間罫を列間罫より上に描画します。これがデフォルト値です。
- `column-over-row`
  - : 列間罫を行間罫より上に描画します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、`rule-overlap` プロパティを使用して、列間罫を行間罫より上に描画します。

#### HTML

75 個の項目からなるリストを作成します。簡潔にするため、HTML の大部分は省略しています。

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic
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
<p>
  <label
    ><input type="checkbox" />
    <code>rule-overlap: row-over-column;</code> に設定</label
  >
</p>
```

#### CSS

{{cssxref("grid-template-columns")}} プロパティを使用して、順序なしリストを 10 列のグリッドコンテナーとして定義します。{{cssxref("list-style-type")}} を空文字列に設定して、リストのマーカーを取り除きます。列間罫と行間罫の幅 `20px` の実線を収められるよう、{{cssxref("gap")}} を `20px` に設定します。最後に、`rule-overlap` プロパティを使用して、列間罫を行間罫より上に描画します。

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: "";
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-overlap: column-over-row;
}
```

簡潔にするため、残りの CSS は省略しています。

```css hidden live-sample___basic
:has(:checked) ul {
  rule-overlap: row-over-column;
}
li {
  text-align: center;
  aspect-ratio: 1;
  line-height: 1.5em;
}
@layer no-support {
  @supports not (rule-overlap: row-over-column) {
    body::before {
      content: "このブラウザーは rule-overlap に対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "625")}}

チェックボックスを選択して、`rule-overlap` プロパティの値を切り替えてみてください。

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
- {{cssxref("rule-visibility-items")}}
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
