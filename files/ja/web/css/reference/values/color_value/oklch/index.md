---
title: oklch()
slug: Web/CSS/Reference/Values/color_value/oklch
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`oklch()`** 関数記法は、指定された色を Oklch {{glossary("color space", "色空間")}}で表現します。`oklch()` は {{cssxref("color_value/oklab","oklab()")}} の円筒形式であり、同じ `L` 軸を使用しますが、極座標系の `C` （彩度）と `H` （色相）を使用します。

## 構文

```css
/* 絶対的な値 */
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)

/* 相対値 */
oklch(from green l c h / 0.5)
oklch(from #123456 calc(l + 0.1) c h)
oklch(from hsl(180 100% 50%) calc(l - 0.1) c h)
oklch(from var(--color) l c h / calc(alpha - 0.1))
```

### 値

以下は、絶対色と[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の両方に対して使用できる値の説明です。

> [!NOTE]
> 通常、CSS でパーセント値を数値で表す場合、`100%` は数値 `1` に等しくなります。
> `oklch()` のすべての成分値の場合は例外です。ここでは `C` 値の `100%` は数値 `0.4` と等しくなります。

#### 絶対的な値の構文

```plain
oklch(L C H[ / A])
```

引数は以下の通りです。

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `1` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲か、またはキーワード `none` でです（この場合は `0%` と等価です）。この場合、数値 `0` は `0%` （黒）に、数値 `1` は `100%` （白）に対応します。この値は色の知覚的な明度、または「明るさ」を指定します。

    > [!NOTE]
    > `oklch()` の `L` は知覚明度 (perceived lightness) を指し、これは私たちの目で視覚的に知覚する「明るさ」を意味します。これは他の色と比較した明度を表す `hsl()` の `L` とは異なります。

- `C`
  - : {{CSSXref("&lt;number&gt;")}} か、{{CSSXref("&lt;percentage&gt;")}} か、またはキーワード値 `none`（この場合は `0%` と等価）です。これは彩度の指標です（おおよそ「色の量」を表します）。その有効な最小値は `0%` または `0` で、最大値は理論的には無制限です（しかし実際には `0.5` を超えることはありません）。この場合、`0%` は `0` であり、`100%` は数値の `0.4` です。

- `H`
  - : {{CSSXref("&lt;number&gt;")}} か、{{cssxref("angle")}} か、またはキーワード値 `none`（この場合は `0deg` と等価）であり、色の色相角 ({{cssxref("hue")}}) を表します。

    > [!NOTE]
    > 特定の色相に対応する角度は、sRGB（{{CSSXref("color_value/hsl", "hsl()")}} および {{CSSXref("color_value/hwb", "hwb()")}} で使用）、CIELAB（{{CSSXref("color_value/lch", "lch()")}} で使用）、Oklab（`oklch()` で使用）の色空間によって異なります。詳細と例については、下記の [`oklch()` の色相](#oklch_の色相)の例と {{cssxref("hue")}} リファレンスページを参照してください。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは 100% です。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

#### 相対値の構文

```plain
oklch(from <color> L C H[ / A])
```

引数は以下の通りです。

- `from <color>`
  - : 相対色を定義する場合は、キーワード `from` が常に含まれ、次に**起点色**を表す {{cssxref("&lt;color&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxref("&lt;color&gt;")}} 構文を使用できます。

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `1` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価）。これは出力色の明度値を表します。数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。

- `C`
  - : {{CSSXref("&lt;number&gt;")}} か、{{CSSXref("&lt;percentage&gt;")}} か、またはキーワード値 `none`（この場合は `0%` と等価）です。これは出力色の彩度値を表します（おおよそ「色の量」を表します）。その有効な最小値は `0` で、最大値は理論的には無制限です（しかし実際には `0.5` を超えることはありません）。この場合、`0%` は `0` に、`100%` は数値 `0.4` に対応します。

- `H`
  - : {{CSSXref("&lt;number&gt;")}} か、{{cssxref("angle")}} か、またはキーワード値 `none`（この場合は `0deg` と等価）であり、出力色の色相角 ({{cssxref("hue")}}) を表します。下記の[例](#例)の節の中にの以下の[色相値の違いの例](#結果_3)を参照してください。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは起点色のアルファチャネルです。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

#### 相対色出力チャネル成分の定義

`oklch()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価の Oklch 色に変換します（すでにそのように指定されていない場合）。色は 3 つの異なる色チャネル値 - `l`（明度）、`c`（彩度）、`h`（色相）- およびアルファチャネル値 (`alpha`) として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます。

- `l` チャネルは `0` 以上 `1` 以下の `<number>` に解決します。
- `c` チャネルは `0` 以上 `0.4` 以下の `<number>` に解決します。
- `h` チャネルは `0` 以上 `360` 以下の `<number>` に解決します。
- `alpha` チャネルは `0` 以上 `1` 以下の `<number>` に解決します。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対的な `oklch()` 構文について学ぶための出発点として含まれています。

まず、`hsl(0 100% 50%)`（`red` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `l`、`c`、`h` チャネル値（`0.627966`、`0.257704`、`29.2346`）を出力チャネル値として使用します。

```css
oklch(from hsl(0 100% 50%) l c h)
```

この関数の出力色は `oklch(0.627966 0.257704 29.2346)` です。

次の関数は、出力色のチャネル値に絶対的な値を使用しているので、起点色に基づかないまったく異なる色を出力します。

```css
oklch(from hsl(0 100% 50%) 42.1% 0.25 328.363)
```

上記の場合、出力色は `oklch(0.421 0.25 328.363)` です。

次の関数は、起点色に基づいて相対色を作成します。

```css
oklch(from hsl(0 100% 50%) 0.8 0.4 h)
```

この例では、次のことが行われます。

- `hsl()` の起点色を同等の `oklch()` 色に変換します（`oklch(0.627966 0.257704 29.2346)`）。
- 出力色の `H` チャネル値を、起点色の `oklch()` 相当値の `H` チャネル値、すなわち `29.2346` に設定します。
- 出力色の `L` および `C` チャネル値を、起点色の `oklch()` 相当値の `L` および `C` チャネル値、すなわちそれぞれ `0.8` と `0.4` に設定します。

最終的な出力色は `oklch(0.8 0.4 29.2346)` となります。

> [!NOTE]
> 前述したように、出力色が起点色と異なる色モデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルに変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* 計算された出力色: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* 計算された出力色: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

次の例では、`hsl()` の起点色は再び `oklch()` 相当色である `oklch(0.627966 0.257704 29.2346)` に変換されます。{{cssxref("calc")}} の計算が `L`、`a`、`b`、`A` の各値に適用され、結果として出力色は `oklch(0.827966 0.357704 9.23462 / 0.9)` となります。

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> 起点色のチャネルは `<number>` 値に解決されるため、通常チャネルが `<percentage>`、`<angle>`、または他の値型を受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<percentage>` を `<number>` に加えることはできません。

### 形式文法

{{CSSSyntax}}

## 例

### 色の明るさを調整

次の例は、関数記法 `oklch()` の `L`（明度）の値を変化させたときの効果を示しています。

#### HTML

```html
<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>
```

#### CSS

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue-dark"] {
  background-color: oklch(10% 0.4 240);
}
[data-color="blue"] {
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red-dark"] {
  background-color: oklch(10% 0.4 20);
}
[data-color="red"] {
  background-color: oklch(50% 0.4 20);
}
[data-color="red-light"] {
  background-color: oklch(90% 0.4 20);
}

[data-color="green-dark"] {
  background-color: oklch(10% 0.4 130);
}
[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-light"] {
  background-color: oklch(90% 0.4 130);
}
```

#### 結果

{{EmbedLiveSample("Adjusting the brightness of a color", "", "200")}}

### 彩度による色の濃淡調整

次の例は、`oklch()` 関数記法の `C`（彩度）値を変化させた効果を示しており、`C` 値が完全な彩度からほぼ灰色まで減少するにつれて、色の強度が低下していく様子が確認できます。

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-chroma1"></div>
<div data-color="blue-chroma2"></div>
<div data-color="blue-chroma3"></div>

<div data-color="red"></div>
<div data-color="red-chroma1"></div>
<div data-color="red-chroma2"></div>
<div data-color="red-chroma3"></div>

<div data-color="green"></div>
<div data-color="green-chroma1"></div>
<div data-color="green-chroma2"></div>
<div data-color="green-chroma3"></div>
```

#### CSS

最初の起点色である青、赤、緑に対して、彩度を段階的に小さく宣言します。最高値 `0.4`（`100%` に相当）の完全な彩度から始まり、`0.01`（`2%` に相当）まで低下させます。この値ではすべての色がほぼ灰色になります。

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue"] {
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-chroma1"] {
  background-color: oklch(50% 0.2 240);
}
[data-color="blue-chroma2"] {
  background-color: oklch(50% 0.1 240);
}
[data-color="blue-chroma3"] {
  background-color: oklch(50% 0.01 240);
}

[data-color="red"] {
  background-color: oklch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: oklch(50% 50% 20deg);
}
[data-color="red-chroma2"] {
  background-color: oklch(50% 25% 20deg);
}
[data-color="red-chroma3"] {
  background-color: oklch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-chroma1"] {
  background-color: oklch(50% 0.2 130);
}
[data-color="green-chroma2"] {
  background-color: oklch(50% 0.1 130);
}
[data-color="green-chroma3"] {
  background-color: oklch(50% 0.01 130);
}
```

#### 結果

{{EmbedLiveSample("Adjusting color intensity via chroma", '', '200')}}

もし `0.01` と `2%` の代わりに `0` を使用し、同じ明度値を適用していたら、すべての色が同じ濃淡のグレーになっていたでしょう。この例では、それらはほぼグレーです。

### OkLCh の色相

次の例は、`lch()` 関数記法の異なる `H`（色相）値を持つスウォッチを示しています。

#### HTML

```html
<div data-color="0">0deg</div>
<div data-color="20">20deg</div>
<div data-color="40">40deg</div>
<div data-color="60">60deg</div>
```

以下同様です。

```html hidden
<div data-color="80">80deg</div>
<div data-color="100">100deg</div>
<div data-color="120">120deg</div>
<div data-color="140">140deg</div>
<div data-color="160">160deg</div>
<div data-color="180">180deg</div>
<div data-color="200">200deg</div>
<div data-color="220">220deg</div>
<div data-color="240">240deg</div>
<div data-color="260">260deg</div>
<div data-color="280">280deg</div>
<div data-color="300">300deg</div>
<div data-color="320">320deg</div>
<div data-color="340">340deg</div>
<div data-color="360">360deg</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
div {
  flex: 0 0 4em;
  text-align: center;
  line-height: 4em;
  display: inline-block;
  border: 1px solid black;
  color: white;
  font-family: monospace;
}
```

```css
[data-color="0"] {
  background-color: oklch(50% 0.4 0deg);
}
[data-color="20"] {
  background-color: oklch(50% 0.4 20deg);
}
[data-color="40"] {
  background-color: oklch(50% 0.4 40deg);
}
[data-color="60"] {
  background-color: oklch(50% 0.4 60deg);
}
```

以下同様です。

```css hidden
[data-color="80"] {
  background-color: oklch(50% 0.4 80deg);
}
[data-color="100"] {
  background-color: oklch(50% 0.4 100deg);
}
[data-color="120"] {
  background-color: oklch(50% 0.4 120deg);
}
[data-color="140"] {
  background-color: oklch(50% 0.4 140deg);
}
[data-color="160"] {
  background-color: oklch(50% 0.4 160deg);
}
[data-color="180"] {
  background-color: oklch(50% 0.4 180deg);
}
[data-color="200"] {
  background-color: oklch(50% 0.4 200deg);
}
[data-color="220"] {
  background-color: oklch(50% 0.4 220deg);
}
[data-color="240"] {
  background-color: oklch(50% 0.4 240deg);
}
[data-color="260"] {
  background-color: oklch(50% 0.4 260deg);
}
[data-color="280"] {
  background-color: oklch(50% 0.4 280deg);
}
[data-color="300"] {
  background-color: oklch(50% 0.4 300deg);
}
[data-color="320"] {
  background-color: oklch(50% 0.4 320deg);
}
[data-color="340"] {
  background-color: oklch(50% 0.4 340deg);
}
[data-color="360"] {
  background-color: oklch(50% 0.4 360deg);
}
```

#### 結果

{{EmbedLiveSample("hues in oklch")}}

`oklch()` の色相角は、{{CSSXref("color_value/hsl", "hsl()")}} のものとは異なります。詳しくは {{cssxref("hue")}} を参照してください。`hsl()` では、sRGB 色の `0deg` は赤を表します。しかし、CIELab 色空間では、`0deg` はマゼンタに対応し、赤はおよそ `41deg` です。

### 色のアルファ値の調整

次の例は `oklch()` 色関数の `A`（アルファ）値を変化させたときの効果を示しています。
`red` と `red-alpha` 要素は `#background-div` 要素に重なり、透明度の効果を示しています。
`A` に `0.4` の値を与えると、色は 40% の不透明度になります。

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 0.5 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 0.5 20 / 0.4);
}
```

#### 結果

{{EmbedLiveSample("adjusting_the_alpha_value_of_a_color")}}

### oklch() による相対色の使用

この例では、3 つの {{htmlelement("div")}} 要素に異なる背景色でスタイル設定します。中央のものは `--base-color` を変更せずに与え、左と右のものには元の `--base-color` をそれぞれ明るく、暗くした値が与えられます。

これらの変化させた値は相対色を用いて定義されます。`--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) が `oklch()` 関数に渡され、出力される色は `calc()` 関数を通じて明度のチャンネルが変更され、意図した効果が得られます。明るい色は明度チャンネルに `0.15` (15%) が追加され、暗い色は明度チャンネルから `0.15` (15%) が減算されます。

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
}

#one {
  background-color: oklch(from var(--base-color) calc(l + 0.15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklch(from var(--base-color) calc(l - 0.15) c h);
}
```

#### 結果

出力結果は次の通りです。

{{ EmbedLiveSample("Using relative colors with oklch()", "100%", "200") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/Web/CSS/Reference/Values/color_value)
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- {{cssxref("hue")}} データ型
- {{cssxref("color_value/lch","lch()")}} および {{cssxref("color_value/oklab","oklab()")}} 色関数
- [Interactive post on OkLCh color space](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) (2020)
