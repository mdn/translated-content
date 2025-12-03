---
title: 相対色の使用
slug: Web/CSS/Guides/Colors/Using_relative_colors
original_slug: Web/CSS/CSS_colors/Relative_colors
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

[CSS 色モジュール](/ja/docs/Web/CSS/Guides/Colors)は、**相対的な色構文**を定義しており、 CSS の {{cssxref("&lt;color&gt;")}} 値を他の色に関連して定義することができます。これは、既存の色の補色（明度、彩度、半透明、反転など）を簡単に作成できる強力な機能であり、より効果的なカラーパレットの作成を可能にします。

この記事では、相対色の構文について説明し、異なるオプションが何であるかを示し、いくつかの例を示して見ていきます。

## 一般的な構文

CSS の相対的な色値は、以下の一般的な構文構造です。

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color() 関数の場合は色空間が含まれる */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

相対色は、絶対色と同じ[色関数](/ja/docs/Web/CSS/Guides/Colors#関数)を使用しますが、異なる引数で作成します。

1. 基本的な色関数（上記で _`color-function()`_ で表したもの）である [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) などを用います。どの関数を使用するかは、作成する相対色（**出力色**）に使用する色モデルによって異なります。
2. 相対色の元の色（上記で _`origin-color`_ で表したもの）は、 `from` キーワードに続けて渡します。これはあらゆる有効な {{cssxref("&lt;color&gt;")}} を指定することができ、 [CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)に入った色値、システムカラー、`currentColor` のほか、別の相対色を使用することもできます。
3. [`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 関数の場合、出力色の _[`colorspace`](/ja/docs/Web/CSS/Reference/Values/color_value/color#colorspace)_（色空間）を指定します。
4. 各チャンネルに個別の出力値を指定します。出力色は、元の色（上記の _`channel1`_、_`channel2`_、_`channel3`_ のプレースホルダーで表したもの）の後に定義します。ここで定義するチャンネルは、相対色に使用する[色関数](/ja/docs/Web/CSS/Guides/Colors#関数)によって異なります。例えば、 [`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) を使用している場合は、色相、彩度、明度の値を定義する必要があります。各チャンネルの値は、新しい値、元の値と同じ値、または元の色チャンネルの値に関連する値とすることができます。
5. オプションとして、出力色のアルファチャンネル値 (`alpha`) をスラッシュ (`/`) の後に定義することができます。アルファチャンネル値 (`alpha`) が明示的に指定されていない場合、アルファチャンネル値は元の色の既定値となります（絶対的な色値の場合の 100% ではありません）。

ブラウザーは、元の色を色関数と互換性のある構文に変換し、それを部分色チャンネル（元の色にアルファチャンネル (`alpha`) がある場合はアルファチャンネルも）に構造化します。これらは、色関数内で適切な名前付きの値として利用できます。 `rgb()` 関数の場合は `r`、`g`、`b` と `alpha`、 `lab()` 関数の場合は `l`、`a`、`b` と `alpha`、 `hwb()` の場合は `h`、`w`、`b` と `alpha` などです。新しい出力チャンネル値を計算するために使用することができます。

相対色の構文を実際に見ていきましょう。下記の CSS は、 2 つの {{htmlelement("div")}} 要素のスタイル設定に使用します。 1 つは背景色を `red` で絶対指定し、もう 1 つは同じ `red` の色値を基に `rgb()` 関数で作成した相対背景色を指定します。

```html hidden live-sample___simple-relative-color
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden live-sample___simple-relative-color
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

```css live-sample___simple-relative-color
#one {
  background-color: red;
}

#two {
  background-color: rgb(from red 200 g b);
}
```

出力結果は次の通りです。

{{ EmbedLiveSample("simple-relative-color", "100%", "200") }}

相対色は [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) 関数を使用し、 `red` を元の色として、それと等価な `rgb()` 色 (`rgb(255 0 0)`) に変換し、新しい色を赤チャンネルの値が `200` で、緑と青のチャンネルの値が元の色と同じである色として定義します（ブラウザーによって関数の内部でで利用できる `g` と `b` の値はどちらも `0` です）。

この結果、 `rgb(200 0 0)` という出力が得られます。これは、少し暗めの赤です。赤チャンネルの値を `255` （または `r` 値のみ）と指定した場合、出力される色は入力値とまったく同じになります。ブラウザーの最終的な出力色（計算値）は、 `rgb(200 0 0)` と等価な sRGB `color()` 値、つまり `color(srgb 0.784314 0 0)` です。

> [!NOTE]
> 前述の通り、相対色を計算する際、ブラウザーが最初に行うことは、指定された元の色（例えばこの例では `red`）を使用する色関数（この場合は `rgb()`）と互換性のある値に変換することです。これは、ブラウザーが元の色から出力色を計算できるようにするためです。使用する色関数に対して相対的に計算が行われる一方で、実際の出力色値は色の色空間によって異なります。
>
> - 古い sRGB の色関数は、可視色の全スペクトルを表現することができません。（[`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl)、[`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb)、[`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb)）の出力色は、これらの制限を避けるために `color(srgb)` にシリアライズされます。 つまり、 {{domxref("HTMLElement.style")}} プロパティまたは {{domxref("CSSStyleDeclaration.getPropertyValue()")}} メソッドを介して出力色値を問い合わせると、出力色が [`color(srgb ...)`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 値として返されるということです。
> - より最近の色関数（`lab()`、`oklab()`、`lch()`、`oklch()`）では、相対的な色出力値は使用する色関数と同じ構文で表現されます。例えば、 [`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab) 色関数を使用している場合、出力色は `lab()` 値となります。

これら 5 行はすべて、等価な出力色を生成します。

```css
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## 構文の柔軟性

この関数で利用できる構造化された元の色チャンネル値と、開発者が設定した出力色チャンネル値の間には、重要な違いがあります。

繰り返しになりますが、相対色が定義されると、出力する色のチャンネル値を定義する際に使用する関数で、元の色のチャンネル値が利用できるようになります。次の例では、 `rgb()` 関数を使用して相対色を定義し、出力チャンネル値として元の色のチャンネル値（`r`、`g`、`b` として利用できる）を使用しています。つまり、出力色は元の色と同じということです。

```css
rgb(from red r g b)
```

しかし、出力値を指定する場合は、元の色チャンネル値をまったく使用する必要はありません。正しい順序（例えば、 `rgb()` の場合は赤、緑、青）で出力チャンネル値を提供する必要がありますが、それらのチャンネルの有効な値であれば、指定された値はどのような値でもかまいません。これにより、相対的な CSS 色に高い柔軟性が与えられます。xxxxx

例えば、もし希望するなら、下記に示すような絶対値を指定し、`red` を `blue` に変換することができます。

```css
rgb(from red 0 0 255)
/* 出力色は rgb(0 0 255)、完全な青に等しい */
```

> [!NOTE]
> 相対的な色指定の構文を使用しているにもかかわらず、元の色と同じ色を出力したり、元の色をまったく使用しない色を出力している場合は、相対的な色を指定していることにはなりません。実際のコードベースでこのようなことを行うことはまずないでしょうし、代わりに絶対的な色値を使用するでしょう。しかし、相対的な色指定の構文を使用して、このようなことが可能であることを説明することは、この構文を学習する上での出発点として有益であると考えました。

指定された値を混合または繰り返すこともできます。次の例では、やや暗い赤色を入力として取り、薄い灰色を出力します。出力色の `r`、`g`、`b` チャンネルはすべて、元の色 `r` チャンネル値に設定されています。

```css
rgb(from rgb(200 0 0) r r r)
/* 出力職は rgb(200 200 200)、薄い灰色に等しい */
```

次の例では、出力色の `r`、`g`、`b` のチャンネル値として元の色のチャンネル値を使用していますが、逆順で使用しています。

```css
rgb(from rgb(200 170 0) b g r)
/* 出力値は rgb(0 170 200) に等しい */
```

## 相対色に対応している色関数

ここまでは、 [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) 関数を使用して定義された相対色のみを見てきました。しかし、相対色は、[`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color)、[`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl)、[`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb)、[`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab)、[`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch)、[`oklab()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklab)、[`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch)、[`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) といった、現代の CSS 色関数を使用して定義することができます。一般的な構文構造は、いずれの場合も同じですが、使用する関数に適した名前付きの元の色値は異なります。

下記に、それぞれの色関数に関連する色構文の例をいくつか探してみてください。それぞれのケースは可能な限り最も単純なもので、出力の色チャンネル値は元の色チャンネル値と正確に照合します。

```css
/* color() にアルファチャンネルがあるものとないもの */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

color(from red xyz-d50 x y z)
color(from red xyz-d50 x y z / alpha)

/* hsl() にアルファチャンネルがあるものとないもの */
hsl(from red h s l)
hsl(from red h s l / alpha)

/* hwb() にアルファチャンネルがあるものとないもの */
hwb(from red h w b)
hwb(from red h w b / alpha)

/* lab() にアルファチャンネルがあるものとないもの */
lab(from red l a b)
lab(from red l a b / alpha)

/* lch() にアルファチャンネルがあるものとないもの */
lch(from red l c h)
lch(from red l c h / alpha)

/* oklab() にアルファチャンネルがあるものとないもの */
oklab(from red l a b)
oklab(from red l a b / alpha)

/* oklch() にアルファチャンネルがあるものとないもの */
oklch(from red l c h)
oklch(from red l c h / alpha)

/* rgb() にアルファチャンネルがあるものとないもの */
rgb(from red r g b)
rgb(from red r g b / alpha)
```

元の色を定義する色システムは、出力色を作成する際に使用する色システムと一致する必要がないことを繰り返し言っておきましょう。繰り返しになりますが、これにより柔軟性が大幅に高まります。通常、元の色が定義されているシステムには関心を持たず、またそのシステムを知らない場合もあります（[カスタムプロパティ値](#カスタムプロパティの使用)を操作するだけの場合もあります）。色を入力し、例えば、 `hsl()` 関数にその色を入れ、明度値を変化させることで、その色の明るいバリエーションを作成したいだけでしょう。

## カスタムプロパティの使用

相対色を作成する際に、元の色と出力される色チャンネル値の定義の両方で、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)で定義された値を使用することができます。 例えば、次の例をご覧ください。

下記の CSS では、 2 つのカスタムプロパティを定義しています。

- `--base-color` には、当社のベースブランド色である `purple` が設定されています。ここでは名前付きカラーキーワードを使用していますが、相対色では元の色として任意のカラー構文を受け入れることができます。
- `--standard-opacity` には、半透明のボックスに適用したい標準的なブランドの透過率値である `0.75` が設定されています。

次に、 2 つの {{htmlelement("div")}} 要素に背景色を設定します。 1 つには絶対色として、ブランド色の紫を指定します。もう 1 つには、ブランド色の紫と同じ相対色を指定し、標準の不透明度値と同じアルファチャンネルを追加するよう変換します。

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: repeating-linear-gradient(
    45deg,
    white,
    white 24px,
    black 25px,
    black 50px
  );
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: purple;
  --standard-opacity: 0.75;
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: hwb(from var(--base-color) h w b / var(--standard-opacity));
}
```

出力結果は次の通りです。

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## 数学関数の使用

出力される色チャンネルの値を計算するには、 CSS の[数学関数](/ja/docs/Web/CSS/Reference/Values/Functions#数学関数)、例えば {{cssxref("calc")}} などを使用することができます。例を見ていきましょう。

次の CSS は、異なる背景色を持つ 3 つの {{htmlelement("div")}} 要素のスタイルを指定しています。中央の要素には変更されていない `--base-color` が指定され、左右の要素には、その `--base-color` の明度を上げたもの、下げたものがそれぞれ指定されています。これらのバリエーションは相対色を使用して定義されています。 `--base-color` は `lch()` 関数に渡され、 `calc()` 関数を使用して、望みの効果を得るために出力色の明度チャンネルを変更しています。明るくする色には明度チャンネルに 20% を加算し、暗くする色には 20% を減算しています。

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

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
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}
```

出力結果は次のようになります。

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## `<number>` 値に解決するチャンネル値

相対色でチャンネル値計算を機能させるには、すべての元の色チャンネル値を適切な {{cssxref("&lt;number&gt;")}} 値に変換します。例えば、上記の `lch()` の例では、元の色の `l` チャンネル値から数値を加算または減算して、新しい明度値を計算しています。もし `calc(l + 20%)` を実行しようとすると、不正な色が生成されます。 `l` は `<number>` であるため、加算する{{cssxref("&lt;percentage&gt;")}} を指定することはできません。

- チャンネル値を元々 `<percentage>` で指定した場合、出力色関数に適した `<number>` に解決されます。
- チャンネル値を元々 {{cssxref("&lt;hue&gt;")}} 角度として指定した場合、 `0` から `360` （両端を含む）の範囲の角度の数値に置き換わります。

元のチャンネル値がどのような仕様になっているかについては、それぞれの[色関数ページ](/ja/docs/Web/CSS/Guides/Colors#関数)を調べてください。

## ブラウザーの対応チェック

ブラウザーが相対色構文に対応しているかどうかを調べるには、 {{cssxref("@supports")}} アットルールを実行します。

例を示します。

```css
@supports (color: hsl(from white h s l)) {
  /* hsl() の相対色構文を使用しても大丈夫 */
}
```

## 例

> [!NOTE]
> 相対色構文の使用例は、それぞれの関数記法型ごとに、[`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color#相対色の値の構文)、[`hsl()`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl#using_relative_colors_with_hsl)、[`hwb()`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb#using_relative_colors_with_hwb)、[`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab#using_relative_colors_with_lab)、[`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch#using_relative_colors_with_lch)、[`oklab()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklab#using_relative_colors_with_oklab)、[`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch#using_relative_colors_with_oklch)、[`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb#相対値構文) の専用ページで探すことができます。

### 色パレットジェネレーター

この例では、ベース色と色のパレットの種別を選ぶことができます。 ブラウザーは、選ばれたベース色に基づいて適切な色のパレットを表示します。 色のパレットの選択肢は次の通りです。

- **補色**: 色相環の反対側に位置する 2 色、または反対の色相が含まれます（色相と色相環の詳細については、 {{cssxref("&lt;hue&gt;")}} データ型を参照してください）。 2 色はそれぞれ、ベース色と、ベース色に色相チャンネルを 180 度加えた色として定義されます。
- **トライアド**: 色相環上の等間隔の 3 色が含まれます。 3 色は、ベース色、ベース色に色相チャンネルを 120 度減じた色、 120 度加えた色として定義されます。
- **テトラッド**: 色相環上の等間隔の 4 色が含まれます。 4 色は、ベース色、ベース色に色相チャンネルを 90 度、 180 度、 270 度加えた色を定義します。
- **単色**: 同じ色相で明度の異なる複数の色が含まれます。例えば、この例では単色のパレットに5色を定義しています。ベース色、およびベース色に明度チャンネルに-20、-10、+10、+20 した色です。

#### HTML

参考として、以下に HTML の全文を掲載します。最も興味深い部分は次の通りです。

- `--base-color` カスタムプロパティは、`container` の ID を持つ {{htmlelement("div")}} 要素にインラインスタイル ([`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style)) として設定されています。JavaScript で簡単に値を更新できるように、この場所に置いています。初期値として `#ff0000` (`red`) を設定し、例を読み込んだ際に、この値に基づく色パレットを表示するようにしています。なお、通常はこの値を {{htmlelement("html")}} 要素に設定すると思いますが、MDN のライブサンプルではレンダリング時に削除されてしまいます。
- ベース色のピッカーは、 [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color) コントロールを使用して作成されます。このコントロールに新しい値が設定されると、 JavaScript で `--base-color` カスタムプロパティにこの値が設定され、新しい色パレットが生成されます。表示される色はすべて、 `--base-color` をベースにした相対色です。
- 一連の [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio) コントロールにより、生成する色パレットの種類を選択することができます。ここで新しい値が選択されると、JavaScript を使用して、選択されたパレットを表す新しいクラスを `container` の `<div>` に設定します。 CSS では、子の `<div>` （`.comp :nth-child(1)` など）を対象とするために子孫セレクターを使用します。これにより、正しい色を適用し、使用されていない `<div>` ノードを非表示にすることができます。
- `container` の `<div>` は、生成されたパレットの色を表示する子の `<div>` を含んでいます。初期クラスとして `comp` が設定されていることに注意してください。これにより、ページが最初に読み込まれた際に補色の配色が表示されるようになります。

```html
<div>
  <h1>色パレットジェネレーター</h1>
  <form>
    <div id="color-picker">
      <label for="color">ベース色を選択:</label>
      <input type="color" id="color" name="color" value="#ff0000" />
    </div>
    <div>
      <fieldset>
        <legend>色パレットの種類を選択:</legend>

        <div>
          <input
            type="radio"
            id="comp"
            name="palette-type"
            value="comp"
            checked />
          <label for="comp">補色</label>
        </div>

        <div>
          <input
            type="radio"
            id="triadic"
            name="palette-type"
            value="triadic" />
          <label for="triadic">トライアド</label>
        </div>

        <div>
          <input
            type="radio"
            id="tetradic"
            name="palette-type"
            value="tetradic" />
          <label for="tetradic">テトラッド</label>
        </div>

        <div>
          <input
            type="radio"
            id="monochrome"
            name="palette-type"
            value="monochrome" />
          <label for="monochrome">単色</label>
        </div>
      </fieldset>
    </div>
  </form>
  <div id="container" class="comp" style="--base-color: #ff0000;">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

#### CSS

下記では、パレットの色を設定する CSS のみを掲載しています。 各ケースにおいて、子セレクターを使用して、選んだパレットのためにそれぞれの子要素の `<div>` に正しい {{cssxref("background-color")}} を適用していることに注意してください。 要素の種類よりも、ソース順における `<div>` の位置指定を重視しています。そのため、 {{cssxref(":nth-child")}} を使用して対象要素を指定しています。

最後のルールでは、[一般兄弟セレクター (`~`)](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) を使用して、それぞれのパレット型で使用されていない `<div>` 要素を対象とし、レンダリングされないように [`display: none`](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) を設定しています。

色自体には、`--base-color`、およびその `--base-color` から派生した相対色が設定されます。 相対色には [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) 関数を使用します。元の色として `--base-color` を渡し、必要に応じて明度または色相チャンネルを調整した出力色を定義します。

```css hidden
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

h1 {
  margin-left: 16px;
}

/* シンプルなフォームのスタイル設定 */

#color-picker {
  margin-left: 16px;
  margin-bottom: 20px;
}

#color-picker label,
legend {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

input[type="color"] {
  width: 200px;
  display: block;
}

fieldset {
  display: flex;
  gap: 20px;
  border: 0;
}

/* パレットコンテナーのスタイル設定 */

#container {
  display: flex;
  width: 100vw;
  height: 250px;
  box-sizing: border-box;
}

#container div {
  flex: 1;
}
```

```css
/* 補色 */
/* ベース色と、ベース色に色相チャンネルを 180 度加えたもの */

.comp :nth-child(1) {
  background-color: var(--base-color);
}

.comp :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

/* @supports を使用して、色相の計算で deg 単位を指定する必要がある古い構文に
   対応するものを追加します。これは Safari 16.4 以降で要求されます。 */
@supports (color: lch(from red l c calc(h + 180deg))) {
  .comp :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* トライアド色 */
/* ベース色と、ベース色に色相チャンネルを 120 度減じたものと加えた色 */

.triadic :nth-child(1) {
  background-color: var(--base-color);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 120));
}

/* @supports を使用して、色相の計算で deg 単位を指定する必要がある古い構文に
   対応するものを追加します。これは Safari 16.4 以降で要求されます。 */
@supports (color: lch(from red l c calc(h + 120deg))) {
  .triadic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h - 120deg));
  }

  .triadic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 120deg));
  }
}

/* テトラッド色 */
/* ベース色と、ベース色に色相チャンネルを 90 度、180 度、270 度加えた色 */

.tetradic :nth-child(1) {
  background-color: var(--base-color);
}

.tetradic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 90));
}

.tetradic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

.tetradic :nth-child(4) {
  background-color: lch(from var(--base-color) l c calc(h + 270));
}

/* @supports を使用して、色相の計算で deg 単位を指定する必要がある古い構文に
   対応するものを追加します。これは Safari 16.4 以降で要求されます。 */
@supports (color: lch(from red l c calc(h + 90deg))) {
  .tetradic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 90deg));
  }

  .tetradic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }

  .tetradic :nth-child(4) {
    background-color: lch(from var(--base-color) l c calc(h + 270deg));
  }
}

/* 単色 */
/* ベース色と、ベース色に明度チャンネルを -20、-10、+10、+20 した色 */

.monochrome :nth-child(1) {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}

.monochrome :nth-child(2) {
  background-color: lch(from var(--base-color) calc(l - 10) c h);
}

.monochrome :nth-child(3) {
  background-color: var(--base-color);
}

.monochrome :nth-child(4) {
  background-color: lch(from var(--base-color) calc(l + 10) c h);
}

.monochrome :nth-child(5) {
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

/* 各パレット型で使用していない色見本を非表示にします。 */
.comp :nth-child(2) ~ div,
.triadic :nth-child(3) ~ div,
.tetradic :nth-child(4) ~ div {
  display: none;
}
```

##### `@supports` のテストについての余談

この CSS の例では {{cssxref("@supports")}} ブロックが使用して、相対色構文の草案仕様に対応しているブラウザーのために、異なる {{cssxref("background-color")}} の値が指定されていることに気づいたでしょう。 Safari の初期の実装では、コンテキストに応じて元の色チャンネル値が {{cssxref("&lt;number&gt;")}} やその他の単位に解決される古い版の仕様に基づいていたために必要になるものです。これは、足し算や引き算を行う際に値に単位が要求される場合があるということであり、混乱が生じます。新しい実装では、元の色チャンネル値は常に同等の {{cssxref("&lt;number&gt;")}} 値に解決されます。つまり、計算は常に単位のない値で行われるということです。

なお、それぞれのケースに対応しているかどうかのテストは、例えば `color: lch(from red l c calc(h + 90deg))` のように、他のブラウザーでのバリエーションとして必要となる実際の値ではなく、シンプルな宣言を使用して行われている点に注目してください。このような複雑な値をテストする際には、テストしたい構文上の違いを含みながらも、可能な限りシンプルな宣言を使用すべきです。

カスタムプロパティを `@supports` テストに記載しても動作しません。カスタムプロパティにどのような値が指定されたかに関わらず、テストは常に正の値として返されます。これは、カスタムプロパティの値が、通常の CSS プロパティの不正な値（または不正な値の一部）として割り当てられた場合にのみ無効になるためです。この問題を回避するために、各テストで `var(--base-color)` を `red` キーワードに置き換えました。

#### JavaScript

JavaScript では、次のことを行います。

- ラジオボタンに [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントリスナーを追加して、いずれかのラジオボタンが選択されたときに `setContainer()` 関数が実行されるようにします。この関数は、 `<div>` の `id="container"` における `class` の値で更新し、選択されたラジオボタンの値を、選ばれたパレットの種類の子 `<div>` に正しい背景色が適用されるようにします。
- 色ピッカーコントロールに [`input`](/ja/docs/Web/API/Element/input_event) イベントリスナーを追加して、新しい色が選択されたときに `setBaseColor()` 関数が実行されるようにします。 この関数は、カスタムプロパティ `--base-color` の値を新しい色に設定します。

```js
const form = document.forms[0];
const radios = form.elements["palette-type"];
const colorPicker = form.elements["color"];
const containerElem = document.getElementById("container");

for (const radio of radios) {
  radio.addEventListener("change", setContainer);
}

colorPicker.addEventListener("input", setBaseColor);

function setContainer(e) {
  const palType = e.target.value;
  console.log("radio changed");
  containerElem.setAttribute("class", palType);
}

function setBaseColor(e) {
  console.log("color changed");
  containerElem.style.setProperty("--base-color", e.target.value);
}
```

#### 結果

出力は次のようになります。これは、 CSS の相対色の力を表示し始めます。複数の色を定義し、単一のカスタムプロパティを調整することでライブで更新されるパレットを生成します。

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### ライブの UI 配色更新ツール

この例は、見出しとテキストを含むカードに、ちょっとした工夫を加えたものがあります。カードの下記にはスライダー ([`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)) コントロールがあります。値が変更されると、JavaScript を使用して、 `--hue` カスタムプロパティ値を新しいスライダー値に設定します。

これにより、 UI 全体の配色が調整されます。

- `--base-color` の値は、相対色で、色相チャンネルを `--hue` の値に設定します。
- 他の色もデザインに使用されていますが、これらは `--base-color` を基準とした相対的な色です。そのため、 `--base-color` が変更されると、それらも変更されます。

#### HTML

例えば、下記に HTML を示します。

- {{htmlelement("main")}} 要素は、残りのコンテンツを格納する外側のラッパーとして機能し、カードとフォームを 1 つの単位として、 `<main>` 要素の中に垂直方向と水平方向の中央揃えで配置することを可能にします。
- この {{htmlelement("section")}} 要素には、カードのコンテンツを定義する [`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) 要素と {{htmlelement("p")}} 要素が設定されています。
- {{htmlelement("form")}} 要素には範囲 ([`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)) コントロールとそのラベル ({{htmlelement("label")}}) があります。

```html
<main>
  <section>
    <h1>A love of colors</h1>
    <p>
      Colors, the vibrant essence of our surroundings, are truly awe-inspiring.
      From the fiery warmth of reds to the calming coolness of blues, they bring
      unparalleled richness to our world. Colors stir emotions, ignite
      creativity, and shape perceptions, acting as a universal language of
      expression. In their brilliance, colors create a visually enchanting
      tapestry that invites admiration and sparks joy.
    </p>
  </section>
  <form>
    <label for="hue-adjust">色相の調整:</label>
    <input
      type="range"
      name="hue-adjust"
      id="hue-adjust"
      value="240"
      min="0"
      max="360" />
  </form>
</main>
```

#### CSS

CSS の `:root` には既定で `--hue` 値が設定されており、相対 [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) 色で配色を定義し、さらに放射グラデーションで本体全体を塗りつぶしています。

相対色は次のようになります。

- `--base-color`: ベース色は元の色である `red` を取り（どんな色でもかまいませんが）、その色相値を `--hue` カスタムプロパティで設定した値に調整します。
- `--bg-color`: 背景色として使用することを意図した、 `--base-color` のかなり明るい色。これは `--base-color` の元の色を取り、その明度値に 40 を加えて作成します。
- `--complementary-color`: `--base-color` から色相環を 180 度回った補色。これは、 `--base-color` の元の色を取り、その色相値に 180 を加えることで作成します。

これで残りの CSS を見て、これらの色が使用されている場所をすべてメモしてください。これには[背景](/ja/docs/Web/CSS/Reference/Properties/background)、[境界線](/ja/docs/Web/CSS/Reference/Properties/border)、[`text-shadow`](/ja/docs/Web/CSS/Reference/Properties/text-shadow)、そしてスライダーの [`accent-color`](/ja/docs/Web/CSS/Reference/Properties/accent-color) まで含まれます。

> [!NOTE]
> 簡潔にするため、相対色の使用に関連する CSS の部分のみを掲載しています。

```css hidden
html {
  font-family: sans-serif;
}

main {
  width: 80vw;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  margin: 0;
  color: black;
  border-radius: 16px 16px 0 0;
  font-size: 3rem;
  letter-spacing: -1px;
}

p {
  line-height: 1.5;
  margin: 0;
  padding: 1.2rem;
}

form {
  width: fit-content;
  display: flex;
  margin: 2rem auto;
  padding: 0.4rem;
}
```

```css
:root {
  /* 既定の色相値 */
  --hue: 240;

  /* 相対色の定義 */
  --base-color: lch(from red l c var(--hue));
  --bg-color: lch(from var(--base-color) calc(l + 40) c h);
  --complementary-color: lch(from var(--base-color) l c calc(h + 180));

  background: radial-gradient(ellipse at center, white 20%, var(--base-color));
}

/* @supports を使用して、 --complementary-color の色相の計算で
   deg 単位を指定する必要がある古い構文に対応するものを追加します。
   これは Safari 16.4 以降で要求されます。 */
@supports (color: lch(from red l c calc(h + 180deg))) {
  body {
    --complementary-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* ボックスのスタイル設定 */

section {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 0.5);
}

h1 {
  background-color: var(--base-color);
  text-shadow:
    1px 1px 1px var(--complementary-color),
    -1px -1px 1px var(--complementary-color),
    0 0 3px var(--complementary-color);
}

/* 範囲スライダーのスタイル設定 */

form {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
}

input {
  accent-color: var(--complementary-color);
}
```

#### JavaScript

JavaScriptでは、スライダーコントロールに [`input`](/ja/docs/Web/API/Element/input_event) イベントリスナーを追加し、新しい値が設定されると `setHue()` 関数が実行されるようにしています。この関数は、CSS で設定した元の既定値を上書きする新しいインライン `--hue` カスタムプロパティ値を `:root` （`<html>` 要素）に設定します。

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### 結果

出力は下記のように表示されます。相対 CSS 色は、 UI 全体の配色を制御するために使用することができます。相対 CSS 色は、 1 つの値を変更するたびにライブで調整することができます。

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## 関連情報

- {{CSSXref("&lt;color&gt;")}} データ型
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [sRGB](https://en.wikipedia.org/wiki/SRGB) (Wikipedia)
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) (Wikipedia)
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) (developer.chrome.com, 2023)
