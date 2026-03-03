---
title: hsl()
slug: Web/CSS/Reference/Values/color_value/hsl
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

> [!NOTE]
> `hsla()` 関数記法は `hsl()` の別名です。両者はまったく同じです。`hsl()` を使用することが推奨されています。

**`hsl()`** 関数記法は、{{glossary("RGB", "sRGB")}} {{glossary("color space", "色空間")}}において、色相、彩度、明度の成分によって色を表現します。オプションのアルファ成分は、その色の透明度を表します。

{{InteractiveExample("CSS デモ: hsl()")}}

```css interactive-example-choice
background: hsl(50 80% 40%);
```

```css interactive-example-choice
background: hsl(150deg 30% 60%);
```

```css interactive-example-choice
background: hsl(0.3turn 60% 45% / 0.7);
```

```css interactive-example-choice
background: hsl(0 80% 50% / 25%);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

`hsl()` での補色は、色相の値に 180 度を加算または減算することで定義することができます。これは{{glossary("color wheel", "色相環")}}上の同じ直径に配置されるためです。例えば、ある色の色相角が `10deg` であれば、補色は `190deg` になります。

## 構文

```css
/* 絶対的な値 */
hsl(120deg 75% 25%)
hsl(120 75 25) /* deg と % の単位は省略可 */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* 相対値 */
hsl(from green h s l / 0.5)
hsl(from #123456 h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))

/* 古い 'hsla()' の別名 */
hsla(120deg 75% 25% / 60%)

/* 古い書式 */
hsl(120, 75%, 25%)
hsl(120deg, 75%, 25%, 0.8)
```

> [!NOTE]
> `hsl()`/`hsla()` は、`hsl(120, 75%, 25%)` や `hsla(120deg, 75%, 25%, 0.8)` のように、すべての値をカンマで区切る古い形式でも記述可能です。カンマ区切りの古い構文では `none` 値は使用不可、色相値の `deg` はオプション、彩度と明度の値には `%` 単位が要求されます。

### 値

下記は、絶対色と[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の両方に対してすることができる値の説明です。

#### 絶対的な値の構文

```plain
hsl(H S L[ / A])
```

引数は以下の通りです。

- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{cssxref("angle")}} またはキーワード `none` であり、色相角を表します。この型の詳細は {{cssxref("hue")}} のリファレンスを参照してください。

    > [!NOTE]
    > 特定の色相に対応する角度は、sRGB（`hsl()` および {{CSSXref("color_value/hwb", "hwb()")}} で使用）、CIELAB（{{CSSXref("color_value/lch", "lch()")}} で使用）、Oklab（{{CSSXref("color_value/oklch", "oklch()")}} で使用）の色空間によって異なります。詳細と例については、{{cssxref("hue")}} リファレンスページを参照してください。

- `S`
  - : {{CSSXref("&lt;percentage&gt;")}} またはキーワード `none` であり、彩度を表します。`100%` は色の濃さが最大で、 `0%` は完全に色がありません（グレー）。
- `L`
  - : {{CSSXref("&lt;percentage&gt;")}} またはキーワード `none` であり、輝度を表します。`100%` は白で、`0%` は黒で、`50%` は「通常」です。
- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは 100% です。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

> [!NOTE]
> 絶対的な `hsl()` 色は、{{CSSXref("color_value/rgb", "rgb()")}} 値にシリアル化されます。シリアル化時に、赤、緑、青の各要素の値が丸められることがあります。

#### 相対値の構文

```plain
hsl(from <color> H S L[ / A])
```

引数は以下の通りです。

- `from <color>`
  - : 相対色を定義する場合は、キーワード `from` が常に含まれ、次に**起点色**を表す {{cssxref("&lt;color&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxref("&lt;color&gt;")}} 構文を使用できます。
- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{cssxref("angle")}}、またはキーワード `none`（この場合は `0deg` と同等）で、出力色の {{cssxref("hue")}} 角を表します。
- `S`
  - : {{CSSXref("&lt;percentage&gt;")}}、またはキーワード `none`（この場合は `0%` と同等）です。これは出力色の彩度を表します。ここで `100%` は色の濃さが最大で、`0%` は完全に色がありません（グレー）。
- `L`
  - : {{CSSXref("&lt;percentage&gt;")}}、またはキーワード `none`（この場合は `0%` と同等）です。これは出力色の明度を表します。ここで `100%` は白で、`0%` は黒で、`50%` は「通常」です。
- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは起点色のアルファチャネルです。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> 完全な可視スペクトルを表現するために、相対的な `hsl()` 色関数の出力は `color(srgb)` にシリアライズされます。つまり、{{DOMxRef("HTMLElement.style")}} プロパティまたは {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} メソッドを介して出力色をクエリーすると、出力色が [`color(srgb ...)`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 値として返されます。

#### 相対色出力チャネル成分の定義

`hsl()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価の HSL 色に変換します（すでにそのように指定されていない場合）。色は3つの異なる色チャネル値 - `h`（色相）、`s`（彩度）、`l`（明度）- およびアルファチャネル値 (`alpha`) として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます。

- `h` の値は `0` 以上 `360` 以下の {{cssxref("&lt;number&gt;")}} に解決し、起点色の {{cssxref("hue")}} 角度値を表します。
- `s` と `l` の値はそれぞれ `0` 以上 `100` 以下の `<number>` に解決し、`100` は `100%` と同等です。
- `alpha` 値は `0` 以上 `1` 以下の `<number>` に解決します。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対的な `hsl()` 構文について学ぶための出発点として含まれています。

まず、`rgb(255 0 0)`（`hsl(0 100% 50%)` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `h`、`s`、`l` チャネル値（`0`、`100%`、`50%`）を出力チャネル値として使用します。

```css
hsl(from rgb(255 0 0) h s l)
```

この関数の出力は、`hsl(0 100% 50%)` と同等の sRGB `color()`、すなわち `color(srgb 1 0 0)` です。

次の関数は、出力色のチャネル値に絶対的な値を使用しているので、起点色に基づかないまったく異なる色を出力します。

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

上記の場合、出力色は `hsl(240 60% 70%)` と同等の sRGB `color()`、すなわち `color(srgb 0.52 0.52 0.88)` です。

次の関数は、起点色に基づいて相対色を作成します。

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

この例では、次のことが行われます。

- 起点色（`rgb(255 0 0)`）を同等の `hsl()` に変換します（`hsl(0 100% 50%)`）。
- 出力色の `R` チャネル値を起点色の `hsl()` 相当の `H` チャネル値（`255`）に設定します。
- 出力色の `S` および `L` チャネル値を、起点色に基づかない新しい値、すなわちそれぞれ `30%` および `60%` に設定します。

最終的な出力色は `hsl(0 30% 60%)`、すなわち sRGB 色空間の `color(srgb 0.72 0.48 0.48)` に相当します。

> [!NOTE]
> 前述したように、出力色が起点色と異なる色モデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルに変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* 計算された出力色: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* 計算された出力色: color(srgb 1 0 0 / 0.5) */
```

次の例では、`rgb()` の起点色は再び `hsl()` 表現 - `hsl(0 100% 50% / 0.8)` に変換されます。`H`、`S`、`L`、および `A` 値に {{cssxref("calc")}} 計算が適用されます。最終的な出力色は `hsl(60 80% 30% / 0.7)`、すなわち sRGB 色空間の `color(srgb 0.72 0.72 0.08 / 0.7)` と同等です。

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> 起点色のチャネルは `<number>` 値に解決されるため、通常チャネルが `<percentage>`、`<angle>`、または他の値型を受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<percentage>` を `<number>` に加えることはできません。

### 形式文法

{{CSSSyntax}}

## 例

### hsl() を conic-gradient() と組み合わせて使う

`hsl()` 関数と [`conic-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/conic-gradient) はどちらも角度を扱うので、相性がよいものです。

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### 結果

{{EmbedLiveSample("using_hsl_with_conic-gradient", "100%", 140)}}

### hsl() による相対色の使用

この例では、3 つの {{htmlelement("div")}} 要素を異なる背景色でスタイル設定します。中央のものには変更されていない `--base-color` が与えられ、左と右のものにはもとの `--base-color` をそれぞれ明るく、暗くした値が与えられます。

これらの変化させた値は相対色を使用して定義されます - `--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)は `hsl()` 関数に渡され、出力色は `calc()` 関数を通じて明度チャンネルが変更され、目的の効果を実現します。一方、色相と彩度は変更されません。明るくした色は明度チャンネルに 20% が追加され、暗くした色は明度チャンネルから 20% が差し引かれます。

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
  background-color: hsl(from var(--base-color) h s calc(l + 20));
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hsl(from var(--base-color) h s calc(l - 20));
}

/* @supports を使用して、明度の計算において % 単位を指定する必要がある古い構文への対応を追加します */
@supports (color: hsl(from red h s calc(l - 20%))) {
  #one {
    background-color: hsl(from var(--base-color) h s calc(l + 20%));
  }

  #three {
    background-color: hsl(from var(--base-color) h s calc(l - 20%));
  }
}
```

#### 結果

出力結果は次の通りです。

{{ EmbedLiveSample("Using relative colors with hsl()", "100%", "200") }}

### 古い構文: カンマ区切りの値

歴史的な理由から、`hsl()` 関数はすべての値がカンマにより区切られた形式を受け付けます。

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: hsl(0 100% 50% / 50%);
}

div.comma-separated {
  background-color: hsl(0, 100%, 50%, 50%);
}
```

#### 結果

{{EmbedLiveSample("legacy_syntax_comma-separated_values", "100%", 150)}}

### 古い構文と新しい構文

この例は、`hsla()` 構文が `hsl()` の別名であることを示しています。両者は、現行の構文と古い（カンマ区切り）構文の両方に対応しています。

#### HTML

```html
<div class="modern">HSL</div>
<div class="legacy">HSL</div>
<div class="modernWithAlpha">HSL</div>
<div class="modernHSLA">HSLA</div>
<div class="legacyHSLA">HSLA</div>
```

#### CSS

```css
div {
  width: 100px;
  min-height: 50px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  display: flex;
  gap: 20px;
}
```

```css
div.modern {
  background-color: hsl(90 80% 50%);
}

div.legacy {
  background-color: hsl(90, 80%, 50%);
}

div.modernWithAlpha {
  background-color: hsl(90 80% 50% / 50%);
}

div.modernHSLA {
  background-color: hsla(90 80% 50% / 50%);
}

div.legacyHSLA {
  background-color: hsla(90, 80%, 50%, 0.5);
}
```

#### 結果

{{EmbedLiveSample("legacy_versus_modern_syntax", "100%", 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("hue")}} データ型
- [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) および [`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb) 色関数
- [`color-mix()` における色相の補間](/ja/docs/Web/CSS/Reference/Values/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [すべての色表記の一覧](/ja/docs/Web/CSS/Reference/Values/color_value)
- [色形式変換ツール](/ja/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [Color picker tool](https://colorjs.io/apps/picker/) (Lea Verou)
