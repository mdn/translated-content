---
title: CSS 数学関数の使用
slug: Web/CSS/Guides/Values_and_units/Using_math_functions
original_slug: Web/CSS/CSS_values_and_units/Using_CSS_math_functions
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

**CSS 数学関数**を使用すると、要素の `height`, `animation-duration`, `font-size` などのプロパティ値を数式として書くことができます。

計算を使用しなくても、多くの場合は、組み込みの [CSS 単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)、たとえば `rem`、`vw`、`%` などを HTML 要素にスタイル設定すれば、特定の使い勝手を実現することができます。

しかし、要素のスタイル設定を単一の値と単位を使用して表現することで制限を感じることがあるかもしれません。例えば、次の例を考えてみましょう。

1. コンテンツ領域の高さを「ビューポートの高さからナビゲーションバーの高さを引いたもの」に設定したいと考えている場合。
2. 2 つの要素の幅を足し合わせて、 3 つ目の要素の幅を定義したい場合。
3. テキストのフォントサイズ (`font-size`) が一定のサイズを超えて伸長しないようにしたい。

これらのすべての場合において、望ましい結果を得るためには計算に頼る必要があります。一つの解決策は、 JavaScript で定義された数学関数を使用して、スクリプトで計算された結果に基づいて要素のスタイルを動的に設定することです。

上記で記載した例を含め、多くの場合、 **CSS に直接組み込まれた数学関数を使用することができます**。 この解決策は、 JavaScript を使用するよりも実装が簡単で、ブラウザーでの実行も高速になることが多いです。

全部で、開発者はこのスタイルシートで [24 種類近くの CSS 数学関数](/ja/docs/Web/CSS/Reference/Values/Functions#数学関数)の組み合わせを使用することができます。このガイドでは、より一般的に使用されている 4 つの例を挙げ、さらに高度なものを紹介します。

## `calc()`: 基本的な算術演算

上記 3 つの例のうち最初の 2 つは、加算または減算の演算結果に合わせた要素のスタイルを設定したいというものです。これはまさに、 {{CSSxRef("calc", "calc()")}} を使用する用途の 1 つです。

**`calc()`** 関数を使用すると、**加算、減算、乗算、除算**を使用して CSS プロパティ値を指定することができます。 `%` と `px` など、異なる単位が存在する 2 つの CSS 値を組み合わせる際によく使用されます。

数学関数 `calc()` は、引数として数式を取り、その式の結果を返します。次のようにします。

```css
property: calc(式);
```

### `calc()` の例

下記の Play アイコンをクリックすると、 `calc()` の例を code playground で確認し、自分で試してみることができます。

```html hidden
<div class="calc1">
  <code>width: calc(10px + 100px);</code>
</div>
<div class="calc2">
  <code>width: calc(2em * 5);</code>
</div>
<div class="calc3">
  <code>width: calc(100% - 32px);</code>
</div>
<div class="calc4">
  <code>width: calc(var(--predefined-width) - calc(16px * 2));</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: red;
  color: white;
  height: 48px;
}

.calc1 > code {
  /* 結果の幅: `110px` */
  width: calc(10px + 100px);
}

.calc2 > code {
  /* 結果の幅: `10em` */
  width: calc(2em * 5);
}

.calc3 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  width: calc(100% - 32px);
}

.calc4 > code {
  --predefined-width: 100%;
  /* 結果の幅: コンテナーの幅によって異なる */
  width: calc(var(--predefined-width) - calc(16px * 2));
}
```

{{EmbedLiveSample('calc_Example', '100%', 212) }}

## `min()`: 集合から最小値を探す

CSS プロパティの値が特定の数値を超えないようにしたい場合もあります。例えば、コンテンツを含むコンテナーの幅を「画面の横幅」と「500 ピクセル」のうち小さい方の数値にしたい場合などです。このような場合、 CSS の数学関数である {{CSSxRef("min", "min()")}} を使用することができます。

数学関数 `min()` は、カンマで区切られた値のセットを引数として取り、それらの値のうち最小のものを返します。

```css
property: min(<1 つ目の値>, <2 つ目の値>, <3 つ目の値>, ...);
```

この関数は、 `%` と `px` のように、異なる単位が存在する 2 つの CSS 値を比較するためによく使用します。

### `min()` の例

下記の Play アイコンをクリックすると、 `min()` の例を code playground で確認し、自分で試してみることができます。

```html hidden
<div class="min1">
  <code>width: min(9999px, 50%);</code>
</div>
<div class="min2">
  <code>width: min(9999px, 100%);</code>
</div>
<div class="min3">
  <code>width: min(120px, 150px, 90%);</code>
</div>
<div class="min4">
  <code>width: min(80px, 90%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: darkblue;
  color: white;
  height: 48px;
}

.min1 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `50%` になります。 */
  width: min(9999px, 50%);
}

.min2 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `100%` になります。 */
  width: min(9999px, 100%);
}

.min3 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `120px` になります。 */
  width: min(120px, 150px, 90%);
}

.min4 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `80px` になります。 */
  width: min(80px, 90%);
}
```

{{EmbedLiveSample('min_Example', '100%', 212) }}

## `max()`: 集合から最大値を探す

`min()` と同様に、 CSS プロパティの値が特定の数値を下回らないようにしたい場合もあります。例えば、コンテンツのコンテナーの幅を「画面の幅一杯」と「500 ピクセル」のうち大きい方にする場合などです。そのような場合には、 CSS の数学関数である {{CSSxRef("max", "max()")}} を使用することができます。

数学関数 `max()` は、カンマで区切られた値のセットを引数として取り、それらの値のうち最大のものを返します。

```css
property: max(<1 つ目の値>, <2 つ目の値>, <3 つ目の値>, ...);
```

この関数は、`%` と `px` のように、異なる単位が存在する 2 つの CSS 値を比較するためによく使用されます。

`min()` と `max()` の例の類似点と相違点に注目してください。

### `max()` の例

下記の Play アイコンをクリックすると、 `max()` の例を code playground で確認し、自分で試してみることができます。

```html hidden
<div class="max1">
  <code>width: max(50px, 50%);</code>
</div>
<div class="max2">
  <code>width: max(50px, 100%);</code>
</div>
<div class="max3">
  <code>width: max(20px, 50px, 90%);</code>
</div>
<div class="max4">
  <code>width: max(80px, 80%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkmagenta;
  color: white;
  height: 48px;
}

.max1 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `50%` になります。 */
  width: max(50px, 50%);
}

.max2 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `100%` になります。 */
  width: max(50px, 100%);
}

.max3 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `90%` になります。 */
  width: max(20px, 50px, 90%);
}

.max4 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `80%` になります。 */
  width: max(80px, 80%);
}
```

{{EmbedLiveSample('max_Example', '100%', 212) }}

## `clamp()`: 値を 2 つの値の間に制約する

`min()` と `max()` の関数を結合するために、 {{CSSxRef("clamp", "clamp()")}} を使用することができます。 `clamp()` は数学関数で、最小値、クランプされる値、最大値を引数として取ります。

```css
property: clamp(<最小値>, <クランプされる値>, <最大値>);
```

- クランプされる値が渡された最小値よりも小さい場合、関数は最小値を返します。
- クランプされる値が渡された最大値よりも大きい場合、関数は最大値を返します。
- クランプされる値が渡された最小値と最大値の間にある場合、関数はクランプされる元の値を返します。

この関数は、`%` と `px` のように、異なる単位が存在する 2 つの CSS 値を比較するためによく使用されます。

### `clamp()` の例

下記の Play アイコンをクリックすると、 `clamp()` の例を code playground で確認し、自分で試してみることができます。

```html hidden
<div class="clamp1">
  <code>width: clamp(10%, 1px, 90%);</code>
</div>
<div class="clamp2">
  <code>width: clamp(10%, 9999px, 90%);</code>
</div>
<div class="clamp3">
  <code>width: clamp(125px, 1px, 250px);</code>
</div>
<div class="clamp4">
  <code>width: clamp(25px, 9999px, 150px);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkgreen;
  color: white;
  height: 48px;
}

.clamp1 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `20%` になります。 */
  width: clamp(20%, 1px, 80%);
}

.clamp2 > code {
  /* 結果の幅: コンテナーの幅によって異なる */
  /* このページでは、おそらくコンテナーの幅の `90%` になります。 */
  width: clamp(10%, 9999px, 90%);
}

.clamp3 > code {
  /* 結果の幅: `125px` */
  width: clamp(125px, 1px, 250px);
}

.clamp4 > code {
  /* 結果の幅: `150px` */
  width: clamp(25px, 9999px, 150px);
}
```

{{EmbedLiveSample('clamp_Example', '100%', 212) }}

## 高度な CSS 数学関数

DOM 要素のレイアウトやスタイル設定を行う際には、多くの場合は 4 つの基本的な数学関数である {{CSSxRef("calc", "calc()")}}、{{CSSxRef("min", "min()")}}、{{CSSxRef("max", "max()")}}、{{CSSxRef("clamp", "clamp()")}} で十分です。しかし、数学の学習素材や 3D の視覚化、 CSS アニメーションなど高度な用途では、次の関数を使う事も考えられます。

- [段階値関数](/ja/docs/Web/CSS/Reference/Values/Functions#段階値関数)
  - {{CSSxRef("round", "round()")}}: **指定した丸め方法で**値を計算する
  - {{CSSxRef("mod", "mod()")}}: 除算の**剰余**を**除数と同じ符号**で計算する
  - {{CSSxRef("rem", "rem()")}}: 除算の**剰余**を**被除数と同じ符号**で計算する
- [三角関数](/ja/docs/Web/CSS/Reference/Values/Functions#三角関数)
  - {{CSSxRef("sin", "sin()")}}: 数値の**正弦**（サイン） を計算する
  - {{CSSxRef("cos", "cos()")}}: 数値の**余弦**（コサイン）を計算する
  - {{CSSxRef("tan", "tan()")}}: 数値の**正接**（タンジェント）を計算する
  - {{CSSxRef("asin", "asin()")}}: 数値の**逆正弦**（アークサイン）を計算する
  - {{CSSxRef("acos", "acos()")}}: 数値の**逆余弦**（アークコサイン）を計算する
  - {{CSSxRef("atan", "atan()")}}: 数値の**逆正接**（アークタンジェント）を計算する
  - {{CSSxRef("atan2", "atan2()")}}: 指定された 2 つの数値の**逆正接**（アークタンジェント）を計算する
- [指数関数](/ja/docs/Web/CSS/Reference/Values/Functions#指数関数)
  - {{CSSxRef("pow", "pow()")}}: ある数値と他の数値の**べき乗**を計算する
  - {{CSSxRef("sqrt", "sqrt()")}}: ある数値の**平方根**を計算する
  - {{CSSxRef("hypot", "hypot()")}}: 指定された数値群の**二乗の合計の平方根**を計算する
  - {{CSSxRef("log", "log()")}}: ある数値の**対数**を（既定の底として `e` を使用して）計算する
  - {{CSSxRef("exp", "exp()")}}: ある数値の **`e` のべき乗**を計算する
- [符号関数](/ja/docs/Web/CSS/Reference/Values/Functions#符号関連関数)
  - {{CSSxRef("abs", "abs()")}}: ある数値の**絶対値**を計算する
  - {{CSSxRef("sign", "sign()")}}: ある数値の**符号（正、負、ゼロ）** を計算する

## 終わりに

- CSS の数学関数を使用すると、 JavaScript コードを一切書くことなく、レスポンシブなユーザーインターフェイスを作成することができます。
- CSS のレイアウトブレークポイントを定義する際に、 CSS の数学関数を [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)の代わりに使用できる場合があります。
- 2023 年、 Interop Project のメンバーが[「CSS 数学関数」を改善の重点分野として採択](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions)しました。これは、ブラウザーベンダーが協力し、 CSS の数学関数がブラウザーや端末を問わず同じように動作するように保証する作業を行うということです。
