---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

**`color()`** 関数記法により、他のほとんどの色関数が暗黙に処理する sRGB {{glossary("color space", "色空間")}}ではなく、特定の指定した色空間で色を指定することができます。

特定の色空間に対応しているかどうかは、CSS メディア特性の [`color-gamut`](/ja/docs/Web/CSS/@media/color-gamut) で検出することができます。

## 構文

```css
/* 絶対的な値 */
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* 相対的な値 */
color(from green srgb r g b / 0.5)
color(from #0000FF xyz calc(x + 0.75) y calc(z - 0.35))
```

### 値

以下は、絶対色と[相対色](/ja/docs/Web/CSS/CSS_colors/Relative_colors)の両方で許容される値の説明です。

#### 絶対色の値の構文

```text
color(colorspace c1 c2 c3[ / A])
```

引数は次の通りです。

- `colorspace`

  - : {{CSSXref("&lt;ident&gt;")}} で、定義済みの色空間（`srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`）のうちの 1 つを記述します。

- `c1`, `c2`, `c3`

  - : それぞれの値は {{CSSXref("number")}}、{{CSSXref("percentage")}}、またはキーワード `none`（この場合は `0` に相当）として書くことができます。これらの値は色空間の部品値を表します。 `<number>` 値を使用する場合、一般的には `0` から `1` が色空間の境界を表します。その範囲外の値も許されますが、指定された色空間の {{glossary("gamut")}} から外れます。パーセント値を使用する場合、`100%` は `1` を表し、`0%` は `0` を表します。

- `A` {{optional_inline}}

  - : 色のアルファチャンネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%` （完全に透明）、 `1` は `100%` （完全に不透明）に対応します。さらに、キーワード `none` を使用することで、アルファチャンネルを指定しません。 `A` チャンネルの値が明示的に指定されない場合、既定値として 100% が指定されます。含める場合、値の前にはスラッシュ (`/`) が付きます。

> **メモ:** `none`の効果についての詳細情報は、[色成分の欠落](/ja/docs/Web/CSS/color_value#missing_color_components)を参照してください。

#### 相対色の値の構文

```text
color(from <color> colorspace c1 c2 c3[ / A])
```

引数は次の通りです。

- `from <color>`
  - : 相対色を定義する際には常にキーワード `from` を含み、それに**元の色**を表す {{cssxref("&lt;color&gt;")}} 値が続きます。これは相対色の元となる色です。元の色は、他の相対色を含め、有効な {{cssxref("&lt;color&gt;")}} 構文であれば何でも構いません。
- `colorspace`
  - : 出力する{{glossary("color space", "色空間")}}を示す {{CSSXref("&lt;ident&gt;")}} で、ふつうは定義済みの色空間（`srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`）のうちの 1 つを記述します。
- `c1`, `c2`, `c3`
  - : それぞれの値は {{CSSXref("number")}}、{{CSSXref("percentage")}}、またはキーワード `none`（この場合は `0` に相当）として書くことができます。これらの値は色空間の部品値を表します。 `<number>` 値を使用する場合、一般的には `0` から `1` が色空間の境界を表します。その範囲外の値も許されますが、指定された色空間の {{glossary("gamut")}} から外れます。パーセント値を使用する場合、`100%` は `1` を表し、`0%` は `0` を表します。
- `A` {{optional_inline}}
  - : 色のアルファチャンネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%` （完全に透明）、 `1` は `100%` （完全に不透明）に対応します。さらに、キーワード `none` を使用することで、アルファチャンネルを指定しません。 `A` チャンネルの値が明示的に指定されない場合、既定値として 100% が指定されます。含める場合、値の前にはスラッシュ (`/`) が付きます。

#### 相対色の出力チャンネル成分の定義

`color()` 関数内で相対色構文を使用すると、ブラウザーは元の色を指定した色空間内の同等の色に変換します（まだ指定されていない場合）。色は 3 つのカラーチャンネル値とアルファチャンネル値 (`alpha`) を定義します。これらのチャンネル値は、出力色チャンネル値を定義するときに使用する関数内部で利用できるようになります：

- 元の色の 3 つの色チャンネルの値は `<number>` に解決されます。定義済みの色空間の場合、どちらを指定するかによって、これらの値は以下のいずれかになります。

  - `r`, `g`, `b`: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020` における RGB ベースの色空間のための色チャンネル値
  - `x`, `y`, `z`: `xyz`, `xyz-d50`, `xyz-d65` における CIE XYZ ベースの色空間のための色チャンネル値

    > [!NOTE]
    > これらの値は通常 `0` と `1` の間ですが、上で説明したように、これらの範囲外であってもかまいません。

    > [!NOTE]
    > XYZ ベースの色空間を指定した `color()` 関数の内部で `r`, `g`, `b` 値を参照したり、RGB ベースの色空間を指定した `color()` 関数の内部で `x`, `y`, `z` 値を参照したり、他にも文字を参照したりすることは無効です。関数内で利用できる元の色チャンネルの値は、指定する色空間の型と一致しなければなりません。

- `alpha`: `0` から `1` までの `<number>` で表される色の透過率。

相対色を定義する場合、出力色の様々なチャンネルはいくつかの異なる方法で表現できます。下記では、この例を示します。

下記の最初の 2 つの例では、相対色の構文を使用しています。しかし、最初のものは元の色と同じ色を出力し、 2 つ目は元の色にまったく基づかない色を出力しています。これらは実に相対色を作成していません。実際のコードベースでこれらを使用することはまずないでしょうし、代わりに絶対的な色値を使用するでしょう。相対 `color()` 構文を学ぶための出発点として、この例を記載しました。

元の色 `hsl(0 100% 50%)` （`red` と同じ）から始めてみましょう。以下の関数は元の色と同じ色を出力するので、書く人はほとんどいないと思いますが、これは元の色のチャンネル値を出力チャンネル値として使用する方法を示しています。

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

これらの関数の出力色はそれぞれ `color(srgb 1 0 0)` と `color(xyz-d65 0.412426 0.212648 0.0193173)` です。

次の関数は、出力色チャンネルの値に絶対的な値を使用し、元の色に基づかない完全に異なる色を出力します。

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* 計算後の出力色: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* 計算後の出力色: color(xyz-d65 0.75 0.6554 0.1 */
```

以下の関数は、出力色チャンネル値に元の色チャンネル値の2種類（それぞれ `r` と `b`、`x` と `y`）を使用しますが、他の出力チャンネル値（それぞれ `g` と `z` ）には新しい値を使用し、それぞれの用途で元の色に基づいた相対色を作成します。

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* 計算後の出力色: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* 計算後の出力色: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> 上述したように、出力色が元の色と異なる色モデルを用いている場合、元の色は背景の出力色と同じモデルに変換され、互換性のある（つまり同じチャンネルを使用する）方法で表すことができます。例えば {{cssxref("color_value/hsl", "hsl()")}} の色 `hsl(0 100% 50%)` は、上の最初の例では `color(srgb 1 0 0)` に変換され、 2 つ目の例では `color(xyz 0.412426 0.212648 0.5)` に変換されます。

この章でこれまで見てきた例では、アルファチャンネルは元の色にも出力色にも明示的に指定されていませんでした。出力色のアルファチャンネルを指定しない場合、既定値として元の色のアルファチャンネルと同じ値が指定されます。元の色のアルファチャンネルを指定しない場合（相対色でない場合）、既定値は `1` です。したがって、上記の例では、原点と出力のアルファチャンネルの値は `1` となります。

原点と出力アルファチャンネルの値を指定する例を見ていきましょう。最初のものは出力アルファチャンネル値を原点アルファチャンネル値と同じに指定していますが、2つ目は原点アルファチャンネル値とは無関係に別の出力アルファチャンネル値を指定しています。

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* 計算後の出力色: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* 計算後の出力色: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

次の例は、 {{cssxref("calc")}} 関数を使用して、元の色チャンネル値に相対的な出力色の新しいチャンネル値を計算しています。

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* 計算後の出力色: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* 計算後の出力色: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> 元の色チャンネルの値は `<number>` 値に解決されるため、通常チャンネルが `<percentage>`、`<angle>` などの値を受け入れるような用途であっても、計算で使用する際には値を追加する必要があります。例えば `<percentage>` を `<number>` に加えても動作しません。

### 形式文法

{{csssyntax}}

## 例

### 定義済みの色空間で color() を使用

次の例は、 `color()` 関数の明度、 a 軸、 b 軸の値を変化させたときの効果を示しています。

#### HTML

```html
<div data-color="red-a98-rgb"></div>
<div data-color="red-prophoto-rgb"></div>
<div data-color="green-srgb-linear"></div>
<div data-color="green-display-p3"></div>
<div data-color="blue-rec2020"></div>
<div data-color="blue-srgb"></div>
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
```

```css
[data-color="red-a98-rgb"] {
  background-color: color(a98-rgb 1 0 0);
}
[data-color="red-prophoto-rgb"] {
  background-color: color(prophoto-rgb 1 0 0);
}
[data-color="green-srgb-linear"] {
  background-color: color(srgb-linear 0 1 0);
}
[data-color="green-display-p3"] {
  background-color: color(display-p3 0 1 0);
}
[data-color="blue-rec2020"] {
  background-color: color(rec2020 0 0 1);
}
[data-color="blue-srgb"] {
  background-color: color(srgb 0 0 1);
}
```

#### 結果

{{EmbedLiveSample("using_predefined_color_spaces_with_color")}}

### xyz 色空間で color() を使用

次の例は `xyz` 色空間を使用して色を指定する方法を示しています。

#### HTML

```html
<div data-color="red"></div>
<div data-color="green"></div>
<div data-color="blue"></div>
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
```

```css
[data-color="red"] {
  background-color: color(xyz 45 20 0);
}

[data-color="green"] {
  background-color: color(xyz-d50 0.3 80 0.3);
}

[data-color="blue"] {
  background-color: color(xyz-d65 5 0 50);
}
```

#### 結果

{{EmbedLiveSample("using_the_xyz_color_space_with_color")}}

### color-gamut メディアクエリーで color() を使用

この例では、[`color-gamut`](/ja/docs/Web/CSS/@media/color-gamut) メディアクエリーを使用して、具体的な色空間への対応を検出し、その色空間を使用して色を指定する方法を示します。

#### HTML

```html
<div></div>
<div></div>
<div></div>
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
```

```css
@media (color-gamut: p3) {
  div {
    background-color: color(display-p3 1 0 0);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 1 0 0);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 1 0 0);
  }
}
```

#### 結果

{{EmbedLiveSample("using_color-gamut_media_queries_with_color")}}

### color() で相対色を使用

この例では、 3 つの {{htmlelement("div")}} 要素を異なる背景色でスタイル設定しています。中央の要素には変更されていない `--base-color` が指定され、左と右の要素には `--base-color` を明るくしたものと暗くしたものが指定されています。

これらのバリエーションは相対色を使用して定義します。 `--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/--*) が `color()` 関数に渡され、出力される色には `g` と `b` のチャンネルが `calc()` 関数を使用して希望の効果を得るために変更されます。明るくされた色はこれらのチャンネルに 15% 追加され、暗くされた色はこれらのチャンネルから 15% 減算されます。

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
  background-color: color(
    from var(--base-color) display-p3 r calc(g + 0.15) calc(b + 0.15)
  );
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: color(
    from var(--base-color) display-p3 r calc(g - 0.15) calc(b - 0.15)
  );
}

/* @supports を使用して、計算で r g b 値をパーセント値（単位付き）で
   指定することを要求される古い構文の対応を追加します。
   これは Safari 16.4 以降で必要です。 */
@supports (color: color(from red display-p3 r g calc(b + 30%))) {
  #one {
    background-color: color(
      from var(--base-color) display-p3 r calc(g + 15%) calc(b + 15%)
    );
  }

  #three {
    background-color: color(
      from var(--base-color) display-p3 r calc(g - 15%) calc(b - 15%)
    );
  }
}
```

#### 結果

出力は次の通りです。

{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>` データ型](/ja/docs/Web/CSS/color_value): すべての色記法の一覧
- [相対色の使用](/ja/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB カラーピッカーおよび変換ツール](/ja/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS 色](/ja/docs/Web/CSS/CSS_colors)モジュール
- [`color-gamut`](/ja/docs/Web/CSS/@media/color-gamut) メディア特性
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
