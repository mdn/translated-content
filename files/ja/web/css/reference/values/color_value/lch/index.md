---
title: lch()
slug: Web/CSS/Reference/Values/color_value/lch
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`lch()`** 関数記法は、指定された色を明度、彩度、色相で表す LCH {{glossary("color space", "色空間")}}で表現します。これは [CIELab 色空間](/ja/docs/Glossary/Color_space#cielab_色空間)の {{cssxref("color_value/lab","lab()")}} と同じ `L` 軸を使用しますが、極座標系の `C` （彩度）と `H` （色相）を使用します。

## 構文

```css
/* 絶対的な値 */
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);

/* 相対値 */
lch(from green l c h / 0.5)
lch(from #123456 calc(l + 10) c h)
lch(from hsl(180 100% 50%) calc(l - 10) c h)
lch(from var(--color-value) l c h / calc(alpha - 0.1))
```

### 値

以下は、絶対色と[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の両方に対して使用できる値の説明です。

> [!NOTE]
> 通常、CSS でパーセント値を数値で表す場合、`100%` は数値 `1` に等しくなります。
> `lch()` の場合は例外です。ここでは `L` 値は `100%` が数値 `100` と等しく、`C` 値は数値 `150` と等しくなります。

#### 絶対的な値の構文

```plain
lch(L C H[ / A])
```

引数は以下の通りです。

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `100` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲か、またはキーワード `none` です（`0%` と等価）。数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。この値は色の明るさを [CIELab 色空間](/ja/docs/Glossary/Color_space#cielab_色空間)で指定します。

    > [!NOTE]
    > `lch()` の `L` は知覚明度 (perceived lightness) を指し、これは私たちの目で視覚的に知覚する「明るさ」を意味します。これは他の色と比較した明度を表す `hsl()` の `L` とは異なります。

- `C`
  - : {{CSSXref("&lt;number&gt;")}} か、{{CSSXref("&lt;percentage&gt;")}} か、またはキーワード値 `none`（この場合は `0%` と等価）です。これは彩度の指標です（おおよそ「色の量」を表します）。その有効な最小値は `0%` または `0` で、最大値は理論的には無制限です（しかし実際には `230` を超えることはありません）。`100%` は `150` に対応します。

- `H`
  - : {{CSSXref("&lt;number&gt;")}} か、{{cssxref("angle")}} か、またはキーワード値 `none`（`0deg` と等価）であり、色の色相角 ({{cssxref("hue")}}) を表します。

    > [!NOTE]
    > 特定の色相に対応する角度は、sRGB（{{CSSXref("color_value/hsl", "hsl()")}} および {{CSSXref("color_value/hwb", "hwb()")}} で使用）、CIELAB（`lch()` で使用）、Oklab（{{CSSXref("color_value/oklch", "oklch()")}} で使用）の色空間によって異なります。詳細と例については、下記の [LCH の色相](#lch_の色相)の例と {{cssxref("hue")}} リファレンスページを参照してください。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは 100% です。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

#### 相対値の構文

```plain
lch(from <color> L C H[ / A])
```

引数は以下の通りです。

- `from <color>`
  - : 相対色を定義する場合は、キーワード `from` が常に含まれ、次に**起点色**を表す {{cssxref("&lt;color&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxref("&lt;color&gt;")}} 構文を使用できます。

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `100` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲か、またはキーワード `none` です（`0%` と等価）。数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。この値は色の明るさを CIELab 色空間で指定します。

- `C`
  - : {{CSSXref("&lt;number&gt;")}} か、{{CSSXref("&lt;percentage&gt;")}} か、またはキーワード値 `none`（この場合は `0%` と等価）です。これは出力色の彩度値を表します（おおよそ「色の量」を表します）。その有効な最小値は `0%` または `0` で、最大値は理論的には無制限です（しかし実際には `230` を超えることはありません）。`100%` は `150` に対応します。

- `H`
  - : {{CSSXref("&lt;number&gt;")}} か、{{cssxref("angle")}} か、またはキーワード値 `none`（`0deg` と等価）であり、出力色の色相角 ({{cssxref("hue")}}) を表します。下記の [hue の例](#結果_3)を参照してください。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは起点色のアルファチャネルです。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

#### 相対色出力チャネル成分の定義

`lch()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価の Lch 色に変換します（すでにそのように指定されていない場合）。色は 3 つの異なる色チャネル値 - `l`（明度）、`c`（彩度）、`h`（色相）- およびアルファチャネル値 (`alpha`) として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます。

- `l` チャネルは `0` 以上 `100` 以下の `<number>` に解決します。
- `c` チャネルは `0` 以上 `150` 以下の `<number>` に解決します。
- `h` チャネルは `0` 以上 `360` 以下の `<number>` に解決します。
- `alpha` チャネルは `0` 以上 `1` 以下の `<number>` に解決します。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対的な `lch()` 構文について学ぶための出発点として含まれています。

まず、`hsl(0 100% 50%)`（`red` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `l`、`c`、`h` チャネル値（`54.29`、`106.854`、`40.856`）を出力チャネル値として使用します。

```css
lch(from hsl(0 100% 50%) l c h)
```

この関数の出力色は `lch(54.29 106.854 40.856)` です。

次の関数は、出力色のチャネル値に絶対的な値を使用しているので、起点色に基づかないまったく異なる色を出力します。

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

上記の場合、出力色は `lch(29.6871 66.83 327.109)` です。

次の関数は、起点色に基づいて相対色を作成します。

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

この例では、次のことが行われます。

- `hsl()` の起点色を同等の `lch()` 色に変換します（`lch(54.29 106.854 40.856)`）。
- 出力色の `H` チャネル値を、起点色の `lch()` 相当値の `H` チャネル値、すなわち `40.856` に設定します。
- 出力色の `L` および `C` チャネル値を、起点色の `lch()` 相当値の `L` および `C` チャネル値、すなわちそれぞれ `70` と `150` に設定します。

最終的な出力色は `lch(70 150 40.856)` となります。

> [!NOTE]
> 前述したように、出力色が起点色と異なる色モデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルに変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* 計算された出力色: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* 計算された出力色: lch(54.29 106.854 40.856 / 0.5) */
```

次の例では、`hsl()` の起点色は再び `lch()` 相当色である `lch(54.29 106.854 40.856)` に変換されます。{{cssxref("calc")}} の計算が `L`、`a`、`b`、`A` の各値に適用され、結果として出力色は `lch(74.29 86.8541 0.856018 / 0.9)` となります。

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> 起点色のチャネルは `<number>` 値に解決されるため、通常チャネルが `<percentage>`、`<angle>`、または他の値型を受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<percentage>` を `<number>` に加えることはできません。

### 形式文法

{{CSSSyntax}}

## 例

### 色の明るさを調整

次の例は、関数記法 `lch()` の `L`（明度）の値を変化させたときの効果を示しています。

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
  background-color: lch(10% 100 240);
}
[data-color="blue"] {
  background-color: lch(50% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(90% 100 240);
}

[data-color="red-dark"] {
  background-color: lch(10% 130 20);
}
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-light"] {
  background-color: lch(90% 130 20);
}

[data-color="green-dark"] {
  background-color: lch(10% 132 130);
}
[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-light"] {
  background-color: lch(90% 132 130);
}
```

#### 結果

{{EmbedLiveSample("Adjusting the brightness of a color", "", "200")}}

### 彩度による色の濃淡調整

次の例は、`lch()` 関数記法の `C`（彩度）値を変化させた効果を示しており、`C` 値が完全な彩度からほぼ灰色まで減少するにつれて、色の強度が低下していく様子が確認できます。

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

最初の起点色である青、赤、緑に対して、彩度を段階的に小さく宣言します。最高値 `150`（`100%` に相当）の完全な彩度から始まり、`3`（`2%` に相当）まで低下させます。この値ではすべての色がほぼ灰色になります。

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
  background-color: lch(50% 150 240);
}
[data-color="blue-chroma1"] {
  background-color: lch(50% 105 240);
}
[data-color="blue-chroma2"] {
  background-color: lch(50% 54 240);
}
[data-color="blue-chroma3"] {
  background-color: lch(50% 3 240);
}

[data-color="red"] {
  background-color: lch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: lch(50% 70% 20deg);
}
[data-color="red-chroma2"] {
  background-color: lch(50% 36% 20deg);
}
[data-color="red-chroma3"] {
  background-color: lch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: lch(50% 150 130);
}
[data-color="green-chroma1"] {
  background-color: lch(50% 105 130);
}
[data-color="green-chroma2"] {
  background-color: lch(50% 54 130);
}
[data-color="green-chroma3"] {
  background-color: lch(50% 3 130);
}
```

#### 結果

{{EmbedLiveSample("Adjusting color intensity via chroma", '', '200')}}

もし `3` と `2%` の代わりに `0` を使用し、同じ明度値を適用していたら、すべての色が同じ濃淡のグレーになっていたでしょう。この例では、それらはほぼグレーです。

### LCH の色相

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
  background-color: lch(50% 150 0deg);
}
[data-color="20"] {
  background-color: lch(50% 150 20deg);
}
[data-color="40"] {
  background-color: lch(50% 150 40deg);
}
[data-color="60"] {
  background-color: lch(50% 150 60deg);
}
```

以下同様です。

```css hidden
[data-color="80"] {
  background-color: lch(50% 150 80deg);
}
[data-color="100"] {
  background-color: lch(50% 150 100deg);
}
[data-color="120"] {
  background-color: lch(50% 150 120deg);
}
[data-color="140"] {
  background-color: lch(50% 150 140deg);
}
[data-color="160"] {
  background-color: lch(50% 150 160deg);
}
[data-color="180"] {
  background-color: lch(50% 150 180deg);
}
[data-color="200"] {
  background-color: lch(50% 150 200deg);
}
[data-color="220"] {
  background-color: lch(50% 150 220deg);
}
[data-color="240"] {
  background-color: lch(50% 150 240deg);
}
[data-color="260"] {
  background-color: lch(50% 150 260deg);
}
[data-color="280"] {
  background-color: lch(50% 150 280deg);
}
[data-color="300"] {
  background-color: lch(50% 150 300deg);
}
[data-color="320"] {
  background-color: lch(50% 150 320deg);
}
[data-color="340"] {
  background-color: lch(50% 150 340deg);
}
[data-color="360"] {
  background-color: lch(50% 150 360deg);
}
```

#### 結果

{{EmbedLiveSample("hues in lch")}}

`lch()` の色相角は、{{CSSXref("color_value/hsl", "hsl()")}} のものとは異なります。詳しくは {{cssxref("hue")}} を参照してください。`hsl()` では、sRGB 色の `0deg` は赤を表します。しかし、CIELab 色空間では、`0deg` はマゼンタに対応し、赤はおよそ `41deg` です。

### 透明度を lch() で調整

次の例は `lch()` 関数記法の `A`（アルファ）値を変化させたときの効果を示しています。
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
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

#### 結果

{{EmbedLiveSample("adjusting_opacity_with_lch")}}

### lch() による相対色の使用

この例では、3 つの {{htmlelement("div")}} 要素を異なる背景色でスタイル設定し、`lch()` カラー関数を使用して相対色で色の明るさを変更する方法を示しています。中央の `<div>` には元の `--base-color` のままであり、左と右の `<div>` には元の `--base-color` をそれぞれ明るく、暗くした値が与えられます。

これらの変化させた値は相対色を用いて定義されます。`--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) が `lch()` 関数に渡され、出力される色は `calc()` 関数を通じて明度のチャンネルが変更され、意図した効果が得られます。明るい色は明度チャンネルに 15% が追加され、暗い色は明度チャンネルから 15% が減算されます。

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
  background-color: lch(from var(--base-color) calc(l + 15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 15) c h);
}
```

#### 結果

The output is as follows:

{{ EmbedLiveSample("Using relative colors with lch()", "100%", "200") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/Web/CSS/Reference/Values/color_value)
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- {{cssxref("hue")}} データ型
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) - Lea Verou (2020)
