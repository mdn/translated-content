---
title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`hwb()`** 関数記法は、指定された色を色相、白色度、黒色度による {{glossary("RGB", "sRGB")}} 色によって表現します。オプションのアルファ成分は、その色の透明度を表します。

{{InteractiveExample("CSS デモ: hwb()")}}

```css interactive-example-choice
background: hwb(12 50% 0%);
```

```css interactive-example-choice
background: hwb(50deg 30% 40%);
```

```css interactive-example-choice
background: hwb(0.5turn 10% 0% / 0.5);
```

```css interactive-example-choice
background: hwb(0 100% 0% / 50%);
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
/* 絶対的な値 */
hwb(194 0% 0%)
hwb(194 0% 0% / .5)

/* 相対値 */
hwb(from green h w b / 0.5)
hwb(from #123456 h calc(w + 30) b)
hwb(from lch(40% 70 240deg) h w calc(b - 30))
```

## 解説

これは [`sRGB` 色空間](/ja/docs/Glossary/Color_space#srgb)における色関数で、 {{cssxref("hue")}} の角度値、白色度、黒色度、およびオプションで色の透過率を表すアルファ値によって定義されます。

特定の色相に対応する角度は、sRGB（{{CSSXref("color_value/hsl", "hsl()")}} および `hwb()` で使用）、CIELAB（{{CSSXref("color_value/lch", "lch()")}} で使用）、Oklab（{{CSSXref("color_value/oklch", "oklch()")}} で使用）の色空間によって異なります。`hwb()` は `hsl()` と同じ色空間にあるため、同じ色相角を持ちます。詳細と例については {{cssxref("hue")}} リファレンスページを参照するか、[カラーピッカー](/ja/docs/Web/CSS/Guides/Colors#色の実演)で色相を変更して動作を確認してください。

`hwb()` の色は、その白色度 (`W`) と黒色度 (`B`) の値がどちらも `0` のときに完全に飽和します。任意の色相値 `H` に対して、`hwb(H 0% 0%)` は `hsl(H 100% 50%)` と同じ色になります。白色度の値を大きくすると色が明るくなります。黒色度の値を大きくすると色が暗くなります。

黒色度と白色度の両方が 0 より大きい場合、色はくすんで灰色に近づきます。追加される白色度と黒色度の量が合計で 100% 以上、言い換えれば `W + B >= 100%` の場合、カラー関数はグレーの色合いを定義します。両値の合計が 100% を超える場合 (`W + B > 100%`)、グレー色の白色度と黒色度の値はそれぞれ `W / (W + B)` および `B / (W + B)` として正規化されます。

### 値

下記は、絶対色と[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の両方に対してすることができる値の説明です。

#### 絶対的な値の構文

```plain
hwb(H W B[ / A])
```

引数は以下の通りです。

- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{cssxref("angle")}} またはキーワード `none` であり、色相角を表します。この型の詳細は {{cssxref("hue")}} のリファレンスを参照してください。

- `W`
  - : {{CSSXref("&lt;percentage&gt;")}} で混合する色の白色度を表すか、キーワード `none` です（この場合は `0%` と同等です）。`0%` は白さを全く表しません。`100%` は `B` が `0` の場合に完全な白さを表し、それ以外の場合は `W` と `B` の両方の値が正規化されます。

- `B`
  - : {{CSSXref("&lt;percentage&gt;")}} で混合する色の黒色度を表すか、キーワード `none` です（この場合は `0%` と同等です）。`0%` は黒さを全く表しません。`100%` は `W` が `0` の場合に完全な黒さを表し、それ以外の場合は `W` と `B` の両方の値が正規化されます。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは 100% です。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

> [!NOTE]
> 絶対的な `hwb()` 色は、{{CSSXref("color_value/rgb", "rgb()")}} 値にシリアル化されます。シリアル化時に、赤、緑、青の各要素の値が丸められることがあります。

#### 相対値の構文

```plain
hwb(from <color> H W B[ / A])
```

引数は以下の通りです。

- `from <color>`
  - : 相対色を定義する場合は、キーワード `from` が常に含まれ、次に**起点色**を表す {{cssxref("&lt;color&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxref("&lt;color&gt;")}} 構文を使用できます。
- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{cssxref("angle")}}、またはキーワード `none`（この場合は `0deg` と同等）で、出力色の {{cssxref("hue")}} 角を表します。

- `W`
  - : {{CSSXref("&lt;percentage&gt;")}} で混合する色の白色度を表すか、キーワード `none` です（この場合は `0%` と同等です）。`0%` は白さを全く表しません。`100%` は `B` が `0` の場合に完全な白さを表し、それ以外の場合は `W` と `B` の両方の値が正規化されます。

- `B`
  - : {{CSSXref("&lt;percentage&gt;")}} で混合する色の黒色度を表すか、キーワード `none` です（この場合は `0%` と同等です）。`0%` は黒さを全く表しません。`100%` は `W` が `0` の場合に完全な黒さを表し、それ以外の場合は `W` と `B` の両方の値が正規化されます。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは起点色のアルファチャネルです。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> 完全な可視スペクトルを表現するために、相対的な `hwb()` 色関数の出力は `color(srgb)` にシリアライズされます。つまり、{{DOMxRef("HTMLElement.style")}} プロパティまたは {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} メソッドを介して出力色をクエリーすると、出力色が [`color(srgb ...)`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 値として返されます。

### 相対色出力チャネル成分の定義

`hwb()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価の HWB 色に変換します（すでにそのように指定されていない場合）。色は 3 つの異なる色チャネル値 - `h`（色相）、`w`（白色度）、`b`（黒色度）- およびアルファチャネル値 (`alpha`) として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます。

- `h` チャネルは `0` 以上 `360` 以下の `<number>` に解決します。
- `w` と `b` チャネルはそれぞれ `0` 以上 `100` 以下の `<number>` に解決します。
- `alpha` チャネルは `0` 以上 `1` 以下の `<number>` に解決します。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対的な `hwb()` 構文について学ぶための出発点として含まれています。

まず、`hsl(0 100% 50%)`（`hwb(0 0% 0%)` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `h`、`w`、`b` チャネル値（`0`、`0%`、`0%`）を出力チャネル値として使用します。

```css
hwb(from hsl(0 100% 50%) h w b)
```

この関数の出力は、`hwb(0 0% 0%)` と同等の sRGB `color()`、すなわち `color(srgb 1 0 0)` です。

次の関数は、出力色のチャネル値に絶対的な値を使用しているので、起点色に基づかないまったく異なる色を出力します。

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

上記の場合、出力色は `hwb(240 52% 12%)` と同等の sRGB `color()`、すなわち `color(srgb 0.52 0.52 0.88)` です。

次の関数は、起点色に基づいて相対色を作成します。

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

この例では、次のことが行われます。

- 起点色（`hsl(0 100% 50%)`）を同等の `hwb()` に変換します（`hwb(0 0% 0%)`）。
- 出力色の `H` および `B` チャネル値を、起点色の `hwb()` 相当値の `H` および `B` チャネル値、すなわちそれぞれ `0` および `0%` に設定します。
- 出力色の `W` チャネル値を、起点色の `hwb()` 相当値の `W` チャネル値、すなわち `30%` に設定します。

最終的な出力色は `hwbl(0 30% 60%)`、すなわち sRGB 色空間の `color(srgb 1 0.3 0.3)` に相当します。

> [!NOTE]
> 前述したように、出力色が起点色と異なる色モデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルまたは空間に変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* 計算された出力色: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* 計算された出力色: color(srgb 1 0 0 / 0.5) */
```

次の例では、`hsl()` の起点色は再び `hwb()` 表現 - `hwb(0 0% 0%)` に変換されます。`H`、`W`、`B`、および `A` 値に {{cssxref("calc")}} 計算が適用されます。最終的な出力色は `hwb(120 25% 10% / 0.9)`、すなわち sRGB 色空間の `color(srgb 0.25 0.9 0.25 / 0.9)` と同等です。

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> 起点色のチャネルは `<number>` 値に解決されるため、通常チャネルが `<percentage>`、`<angle>`、または他の値型を受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<percentage>` を `<number>` に加えることはできません。

### 形式文法

{{csssyntax}}

## 例

### hwb() による相対色の使用

この例では、3 つの {{htmlelement("div")}} 要素を異なる背景色でスタイル設定します。中央のものには変更されていない `--base-color` が与えられ、左と右のものにはもとの `--base-color` をそれぞれ明るく、暗くした値が与えられます。

これらの変化させた値は相対色を用いて定義されます。`--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) が `hwb()` 関数に渡され、出力される色は `calc()` 関数を通じて白と黒のチャンネルが変更され、意図した効果が得られます。明るい色は白チャンネルに 30% が追加され、暗い色は黒チャンネルに 30% が追加されます。

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

/* 仕様書によれば、w と b の値は 0 から 100 の間の数値に解決されるべきです
   ただし、Chrome 121 以降ではこれらが誤って0から1の間の数値に解決されるため、
   現在 w + 30 ではなく w + 0.3 のような計算が使用されています。 */

#one {
  background-color: hwb(from var(--base-color) h calc(w + 0.3) b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hwb(from var(--base-color) h w calc(b + 0.3));
}

/* @supports を使用して、w および b の計算において % 単位を指定する必要がある古い構文への対応を追加します。これは Safari 16.4 以降で必要です。 */
@supports (color: hwb(from red h w calc(b + 30%))) {
  #one {
    background-color: hwb(from var(--base-color) h calc(w + 30%) b);
  }

  #three {
    background-color: hwb(from var(--base-color) h w calc(b + 30%));
  }
}
```

#### 結果

出力結果は次の通りです。

{{ EmbedLiveSample("Using relative colors with hwb()", "100%", "200") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}}: すべての色記法の一覧
- [色形式変換ツール](/ja/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- {{cssxref("hue")}}: 色の色相角を表すデータ型
