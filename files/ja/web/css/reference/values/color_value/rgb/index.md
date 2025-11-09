---
title: rgb()
slug: Web/CSS/Reference/Values/color_value/rgb
original_slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

**`rgb()`** 関数記法は、赤、緑、青の成分によって色を表現します。オプションのアルファ成分は、色の透明度を表します。

{{InteractiveExample("CSS デモ: rgb()")}}

```css interactive-example-choice
background: rgb(31 120 50);
```

```css interactive-example-choice
background: rgb(30% 20% 50%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 80%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 0.2);
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

## 構文

```css
/* 絶対値 */
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* 相対値 */
rgb(from green r g b / 0.5)
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))
```

sRGB 色を表現するために、`rgba()` 関数も使用できます。これは `rgb()` と同じパラメーターを受け入れるエイリアスです。

> [!NOTE]
> `rgb()` / `rgba()` は、`rgb(255, 0, 0)` のように、値がカンマで区切られたレガシー構文でも記述できます。カンマ区切りのレガシー構文では、数値とパーセント値の型を混合することは無効であり（すなわち `R`, `G`, `B` 値は数値かパーセンテージのいずれかでなければなりません）、また、`none` も許可されません。

### 値

以下は、絶対値および [相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors) の両方に対して許可される値の説明です。

#### 絶対値構文

```text
rgb(R G B[ / A])
```

パラメーターは以下の通りです：

- `R`, `G`, `B`
  - : 各値は {{CSSXref("&lt;number&gt;")}} で `0` から `255` の間、{{CSSXref("&lt;percentage&gt;")}} で `0%` から `100%` の間、またはキーワード `none`（この場合は `0%` と同等）として表されます。これらの値はそれぞれ赤、緑、青のチャネルを表します。
- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは `100%` です。`A` チャネル値を含める場合は、値の前にスラッシュ（`/`）が付きます。

> [!NOTE]
> `none` の効果については [色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落) を参照してください。

#### 相対値構文

```text
rgb(from <color> R G B[ / A])
```

パラメーターは以下の通りです：

- `from <color>`
  - : 相対色を定義する場合は、キーワード `from` が常に含まれ、次に**起点色**を表す {{cssxref("&lt;color&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxref("&lt;color&gt;")}} 構文を使用できます。
- `R`, `G`, `B`
  - : 各値は {{CSSXref("&lt;number&gt;")}} で `0` から `255` の間、{{CSSXref("&lt;percentage&gt;")}} で `0%` から `100%` の間、またはキーワード `none`（この場合は `0%` と同等）として表されます。これらの値はそれぞれ赤、緑、青のチャネルを表します。
- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは `100%` です。`A` チャネル値を含める場合は、値の前にスラッシュ（`/`）が付きます。

> [!NOTE]
> `rgba()` エイリアスも相対色の出力や起点色の指定に使用できます。`rgba()` を使用して相対色を出力する場合、カンマのないモダン構文を使用する必要があります。

> [!NOTE]
> 完全な可視スペクトルを表現するために、相対 `rgb()` 色関数の出力は `color(srgb)` にシリアライズされます。つまり、{{DOMxRef("HTMLElement.style")}} プロパティまたは {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} メソッドを介して出力色をクエリーすると、出力色が [`color(srgb ...)`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 値として返されます。

#### 相対色出力チャネル成分の定義

`rgb()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価のRGB色に変換します（すでにそのように指定されていない場合）。色は3つの異なる色チャネル値 - `r`（赤）、`g`（緑）、`b`（青）- およびアルファチャネル値（`alpha`）として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます：

- `r`, `g` および `b` の値はそれぞれ `0` から `255` の `<number>` に解決されます。
- `alpha` チャネルは `0` から `1` の `<number>` に解決されます。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対 `rgb()` 構文について学ぶための出発点として含まれています。

まず、`hsl(0 100% 50%)`（`rgb(255 0 0)` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `r`、`g`、`b` チャネル値（`255`、`0`、`0`）を出力チャネル値として使用します：

```css
rgb(from hsl(0 100% 50%) r g b)
```

この関数の出力は、`rgb(255 0 0)` の sRGB `color()` に相当します：`color(srgb 1 0 0)`。

次の関数は、出力色のチャネル値に絶対値を使用し、起点色に基づかないまったく異なる色を出力します：

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

上記の場合、出力色は `rgb(132 132 224)` の sRGB `color()` に相当します：`color(srgb 0.517647 0.517647 0.878431)`。

次の関数は、起点色に基づいて相対色を作成します：

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

この例では、次のことが行われます：

- 起点色（`hsl(0 100% 50%)`）を同等の `rgb()` に変換します（`rgb(255 0 0)`）。
- 出力色の `R` チャネル値を起点色の `rgb()` 相当の `R` チャネル値（`255`）に設定します。
- 出力色の `G` および `B` チャネル値を、起点色に基づかない新しい値に設定します：それぞれ `80` および `80`。

最終的な出力色は、sRGB 色空間の `rgb(255 80 80)` に相当します：`color(srgb 1 0.313726 0.313726)`。

> [!NOTE]
> 前述したように、出力色が起点色と異なるカラーモデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルまたは空間に変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* 計算された出力色: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* 計算された出力色: color(srgb 1 0 0 / 0.5) */
```

次の例では、`hsl()` 起点色は再び `rgb()` 表現 - `rgb(255 0 0)`に変換されます。`R`、`G`、`B`、および `A` 値に {{cssxref("calc")}} 計算が適用されます。計算後の R、G、B および A の値はそれぞれ `127.5`、`25`、`175`、および `0.9` になります。最終的な出力色は、sRGB 色空間の `rgb(127.5 25 175 / 0.9)` に相当します：`color(srgb 0.5 0.0980392 0.686275 / 0.9)`。

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> 起点色のチャネルは `<number>` 値に解決されるため、通常チャネルが `<percentage>`、`<angle>`、または他の値タイプを受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<percentage>` を `<number>` に加えることはできません。

### 形式文法

{{csssyntax}}

## 例

### 基本構文

この例では、ストライプ模様の背景の上に、異なる背景色を持つ 3 つの {{htmlelement("div")}} 要素を表示しています。

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

背景色は `rgb()` 関数を使用して設定されています。3 つの色は同じです。3 番目は半透明であり、アルファチャンネルの透明性をよりよく示すため、{{htmlelement("body")}} 上に {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} を含めています。

```css hidden
div {
  display: flex;
  gap: 20px;
  height: 50px;
  flex: 1;
}
body {
  height: calc(100vh - 20px);
}
```

```css
body {
  background: repeating-linear-gradient(-45deg, #eee 0 2px, #fff 2px 6px);
  padding: 10px;
}

#integer {
  background-color: rgb(189 85 218);
}

#percent {
  background-color: rgb(74% 33% 85%);
}

#alpha {
  background-color: rgb(189 85 218 / 0.25);
}
```

#### 結果

{{ EmbedLiveSample("Basic syntax", "100%", "75") }}

### rgb() を使用した相対色

この例では、3 つの {{htmlelement("div")}} 要素を異なる背景色でスタイルします。左側のものには変更されていない `--base-color` が与えられ、中央と右のものにはそれぞれ赤チャネルをさらに減らし、青チャネルをさらに増やした、もとの `--base-color` のバリアントが与えられます。

これらのバリアントは相対色を使用して定義されます - `--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)は `rgb()` 関数に渡され、赤と青の出力色のチャネルは `calc()` 関数によって目的の効果を達成するために変更され、緑のチャネルは変更されません。

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
  /* rgb(255 165 0) に等しい */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76.5 は 255 の 30% */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 は 255 の 60% */
}

/* 計算で r g b 値をパーセンテージ (単位付き) として指定する必要がある古い構文をサポートするために @supports を使用します。これは Safari 16.4 以降で必要です */
@supports (color: rgb(from red r g calc(b + 30%))) {
  #two {
    background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
  }

  #three {
    background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
  }
}
```

#### 結果

{{ EmbedLiveSample("Using relative colors with rgb()", "100%", "200") }}

### 古い構文: カンマで区切った値

歴史的な理由から、`rgb()` 関数はすべての値をカンマで使用する区切り文字による形式を受け入れます。

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
  background-color: rgb(255 0 0 / 0.5);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### 結果

{{EmbedLiveSample('Legacy syntax: comma-separated values', '100%', '150px')}}

### rgba() 構文

`rgba()` の構文は `rgb()` のエイリアスです。

#### HTML

```html
<div class="rgb"></div>
<div class="rgba"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.rgb {
  background-color: rgb(255 0 0 / 0.5);
}

div.rgba {
  background-color: rgba(255 0 0 / 0.5);
}
```

#### 結果

{{EmbedLiveSample('syntax: rgba()', '100%', '150px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}} データ型: すべての色記法の一覧
- [色選択ツール](/ja/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)
