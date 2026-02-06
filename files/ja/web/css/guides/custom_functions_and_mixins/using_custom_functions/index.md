---
title: CSS カスタム関数の使用
slug: Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSSカスタム関数を使用すると、引数を受け取り、複雑な論理（CSS の {{cssxref("if()")}} 関数や {{cssxref("@media")}} アットルールなどの機能で定義）を含み、その論理に基づいて値を返す、再利用可能な CSS コードブロックを生成できます。これらは [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)と同様に動作しますが、より柔軟性を提供します。

この記事では、それらの使用方法と実際の事例を紹介します。

## 関数の基本

基本的な CSS カスタム関数の定義は、次のようになります。

```css
@function --half-opacity() {
  result: 0.5;
}
```

`@function` 構文の後、関数の名前を `--half-opacity` と定義します。これは {{cssxref("&lt;dashed-ident>")}} 型でなければなりません。つまり、二重ダッシュで始まり、大文字小文字を区別します。関数名の直後に括弧（`()`）と中括弧（`{}`）のセットが続きます。

> [!NOTE]
> 複数の CSS 関数に同じ名前が指定された場合、より強いカスケードレイヤー ({{cssxref("@layer")}}) 内の関数が優先されます。すべてが同じレイヤーにある場合、ソース順で最後に定義された関数が優先されます。

中括弧の内側は関数の**本体**であり、関数の論理を定義する場所です。ここには複数の宣言を含めることができ、カスタムプロパティ（関数本体内でローカルにスコープされる）、{{cssxref("@media")}} などのアットルール、および [`result`](/ja/docs/Web/CSS/Reference/At-rules/@function#result_2) 記述子が含まれます。`result` 記述子の値が評価され、関数が返す値が決定されます。

ここでは、`result` を値 `0.5` に設定しています。`--half-opacity()` 関数は常に `0.5` を返します。

### なぜ "result" であり "return" ではないのか

`result` 記述子は、機能的に JavaScript 関数の [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文と似ているように聞こえます。しかし、CSS 関数では `return` は使用されません。これは、JavaScript の `return` 文とは異なり、CSS 関数は `result` 宣言に到達した時点で値を返さないためです。

CSS 関数の本体は最初から最後まで評価されます。本体内に複数の `result` 宣言が記載されている場合、ソース順で最後の宣言がそれ以前の宣言を上書きします。

### CSS 関数の呼び出し

CSS 関数は、適切なプロパティ値の代わりに {{cssxref("&lt;dashed-function>")}} 構文を使用して呼び出すことができます。この構文は、関数名に続いて、場合によっては関数に渡す引数を含む括弧で構成されます。例えば、`--half-opacity()` 関数は次のように呼び出せます。

```css
h2 {
  opacity: --half-opacity();
}
```

この関数は常に値 `0.5` を返すため、上記の宣言は `opacity: 0.5` と同等です。これはあまり有用ではありません。カスタムプロパティを使用するか、リテラル値 `0.5` を直接指定した方が良いでしょう。

次に、CSS 関数を使用する方法を見ていきましょう。

## 機能検出の CSS 関数

引数なしの CSS 関数の実用的な用途の一つが、機能検出です。本記事で扱うすべての[例](https://github.com/mdn/dom-examples/tree/main/css-custom-functions)では、次のような `--supports()` 関数を定義しています。

```css
@function --supports() {
  result: none;
}
```

次に「機能対応していません」バナーを定義し、その {{cssxref("display")}} プロパティを `--supports()` に設定することができます。

```html
<p class="support">
  ⚠️ このブラウザーは、今のところ CSS カスタム関数に対応していません。
</p>
```

```css
.support {
  /* ... */
  display: --supports();
}
```

カスタム関数に対応しているブラウザーでは、`display` が `none` に設定され、対応バナーは非表示になります。非対応のブラウザーでは、`display: --supports()` の宣言が無効とみなされ無視されるため、バナーが表示されます。

## 関数の引数の指定

CSS 関数の引数は、関数名の次の括弧内にカンマ区切りでカスタムプロパティとして指定されます。例を示します。

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

この関数は `--transparent` という名前を持ち、`--color` と `--alpha` の2つのカスタムプロパティを引数として取ります。これらは関数本体内でローカルに使用することができます。本体には `result` 記述子が含まれており、[CSS 相対色構文](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を用いて入力された `--color` 値を変換し、入力された `--alpha` 値で指定されたアルファチャンネル値を持つ [`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch) 色を返します。

この関数を呼び出すことで、既存の色の半透明バージョンを任意の場所で生成することが可能です。

例を示します。

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

## データ型の指定

関数の引数と返値に対して、受け入れられるデータ型を指定することができます。これらを指定しない場合、関数はこれらの値について任意の型を受け入れます。

前の関数を変更してデータ型を提供しましょう。

```css
@function --transparent(--color type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

それぞれの引数のデータ型は引数名の後に指定され、`result` のデータ型は `returns` キーワードを前に付けて、開始中括弧の直前で指定されます。データ型の指定には {{cssxref("type()")}} 関数を指定します。

単一のデータ型のみを指定する場合、`type()` 構文を省略し、省略形として型を直接記述できます。

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

これで、この関数は入力引数がそれぞれ {{cssxref("&lt;color&gt;")}} と {{cssxref("&lt;number&gt;")}} であり、かつ `result` が {{cssxref("&lt;color&gt;")}} であった場合のみ有効な値を生成します。そうでない場合、例えば、

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

すると、計算値の時点で値が不正になります（`50%` は `<number>` ではなく `<percentage>` であるため）。その結果、`background-color` は最終的に `transparent` に設定されます。

### 複数の型が許容される指定

複数の受け入れ可能なデータ型を指定するには、区切り文字として `|` 記号を使用します。例を示します。

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

このような場合、完全な `type()` 構文を使用しなければなりません。

この調整により、`--transparent(var(--base-color), 50%)` という関数呼び出しができるようになりました。

## デフォルト値の指定

引数の定義の末尾にコロンを付けて、デフォルト値を指定することも可能です。例を示します。

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

`--alpha` 引数のデフォルト値は `0.8` に指定されました。この値を使用する場合は、関数呼び出し時に第二引数を省略できます。

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> 関数の引数として不正な値が渡され、かつその引数定義でデフォルト値が指定されている場合、不正な値は無視され、代わりにデフォルト値が使用されます。

### 色調整関数の例

`--transparent()`関数の動作は、[color-adjust-functions](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/) の例で確認していただけます（[ソースコード](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions) を参照）。

この例には、`--transparent()` と同様に動作する `--lighter()` および `--darker()` という関数も含まれています。これらはそれぞれ、色のより明るい派生色とより暗い派生色を返します。

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}

@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}

@function --darker(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l - var(--lightness-adjust)) c h);
}
```

このような関数のライブラリーは、単一の色を基にした配色定義にとても有益です。

```css
:root {
  --base-color: #faa6ff;
}

section {
  background-color: --transparent(var(--base-color));
  border: 3px solid --lighter(var(--base-color), 0.1);
  color: --darker(var(--base-color), 0.55);
}
```

## 複雑な論理を組み込む

関数内では {{cssxref("@media")}} アットルールや {{cssxref("if()")}} 関数などの構文を用いて、より複雑なロジックを含めることができます。

[responsive-narrow-wide](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide/) の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide)参照）では、`--narrow-wide()` という関数を提供しています。この関数を使用することで、任意のプロパティに対して 2 つの値オプションを設定することができます。ビューポートが特定のブレークポイント未満の場合は一方の値が設定され、それ以上の場合はもう一方の値が設定されます。

`--narrow-wide()` 関数は、`--narrow` と `--wide` の 2 つの引数を受け入れます。返される `result` は `--wide` プロパティですが、ビューポートの幅が `700px` 未満の場合は `--narrow` が返されます。

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

この関数は、複数のコンテキストでレスポンシブな値オプションを提供するために使用できます。

```css
body {
  display: grid;
  grid-template-columns: repeat(--narrow-wide(1, 3), 1fr);
  gap: --narrow-wide(0, 20px);
  padding: 0 20px;
}

h2 {
  font-size: --narrow-wide(2.5rem, 2rem);
}

p {
  font-size: --narrow-wide(1.4rem, 1rem);
  line-height: 1.5;
}
}
```

### `if()` 関数の使用

`--narrow-wide()` 関数を `if()` 関数を使用して書き換えることもできます。

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## 複雑な構文を一度記述し、その後再利用する

CSS 関数の主な用途は、複雑な構文節を一度定義し、はるかに簡単な関数呼び出しで複数回再利用できるようにすることです。

この例として、[gradient-function](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function/) の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/gradient-function)を参照）があります。この例では `--shippo-pattern()` という関数を実装しています。これは長さや色の引数を受け入れ、複数の {{cssxref("background")}} 背景を備えた複雑な {{cssxref("radial-gradient()")}} 値を返します。

```css
@function --shippo-pattern(--size <length>, --tint <color>) {
  result:
    radial-gradient(closest-side, transparent 98%, rgb(0 0 0 / 0.3) 99%) 0 0 /
      var(--size) var(--size),
    radial-gradient(closest-side, transparent 98%, rgb(0 0 0 / 0.3) 99%)
      calc(var(--size) / 2) calc(var(--size) / 2) / var(--size) var(--size)
      var(--tint);
}
```

この関数を定義したことで、異なる色合いや円のサイズを組み合わせた背景値のバリエーションを作成することが可能になりました。

```css
#one {
  background: --shippo-pattern(100px, #ddeeff);
}

#two {
  background: --shippo-pattern(3.5rem, lime);
}

#three {
  background: --shippo-pattern(10vw, purple);
}
```

## 関連情報

- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)
- [CSS カスタム関数トミックスイン](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins)モジュール
- [Custom CSS Functions in the Browser](https://www.oddbird.net/2025/04/11/custom-functions/) - Miriam Suzanne (2025)
- [CSS @function + CSS if()](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) - Bramus (2025)
- [5 Useful CSS functions using the new @function rule](https://una.im/5-css-functions/) - Una Kravets (2025)
