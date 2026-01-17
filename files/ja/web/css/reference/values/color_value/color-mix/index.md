---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`color-mix()`** 関数記法は 2 つの {{cssxref("&lt;color&gt;")}} 値を採り、指定された色空間の指定された量で混合した結果を返します。

## 構文

```css
/* 極座標色空間 */
color-mix(in hsl, hsl(200 50 80), coral)
color-mix(in hsl, hsl(200 50 80) 20%, coral 80%)

/* 矩形色空間 */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* 補間方法付き */
color-mix(in lch increasing hue, hsl(200deg 50% 80%), coral)
color-mix(in lch longer hue, hsl(200deg 50% 80%) 44%, coral 16%)
```

### 引数

`color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` は以下の引数を受け入れます。

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : 色の混合に使用する補間方法を指定します。`in` キーワードに続いて、{{glossary("color space", "色空間")}}（[形式文法](#形式文法)に掲載されている色空間のいずれか）を指定し、必要に応じて {{CSSXref("&lt;hue-interpolation-method&gt;")}} を指定します。

- {{CSSXref("&lt;color&gt;")}}
  - : 混合する色です。任意の有効な `<color>` 値が指定できます。

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : 対応する、混合する色の割合をパーセント値で指定します。`0%` 以上 `100%` 以下の任意の `<percentage>` 値が指定できます。

### 返値

`<color>` です。指定された `<color-space>` において、指定された量と色相角で色を混合した結果です。

## 解説

`color-mix()` 関数は、任意の種類の 2 つの {{cssxref("&lt;color&gt;")}} 値を、特定の比率で、指定された色空間において、色相補間処理については短い方と長い方のどちらかを使用して混合することを可能にします。ブラウザーは多数の色空間に対応しており、`color-mix()` 関数により、sRGB 色空間に限定されない幅広い色の混合が可能になります。

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

このデモでは、`color-one` と `color-two` の 2 色を選択し、それらを混在させることができます。オプションでそれぞれの色のパーセント値、混在させる色空間、補間処理を設定可能です。ソース色は外側に表示され、混合色は中央に表示されます。色を変更するには、該当する色をクリックし、表示されるカラーピッカーで新しい色を選択します。それぞれの色のパーセント値はスライダーで調整可能です。色空間はドロップダウンメニューから変更できます。

### 色空間の選択

適切な色空間の選択は、望ましい結果を得るために重要です。指定された色を混在させる場合でも、補間処理の用途によって、異なる色空間がより適切となる場合があります。

- 2 つの色の光を物理的に混合した結果を求める場合には、CIE XYZ または srgb-linear 色空間が適切です。これらは光強度に対して線形であるためです。
- 色を知覚的に均等に分布させる必要がある場合（グラデーションなど）、Oklab（および旧式の Lab）色空間が適しています。これらは知覚的に均一になるよう設計されているためです。
- 色混合におけるグレー化を避ける場合、すなわちトランジション全体で彩度を最大化したい場合には、Oklch（および旧式の LCH）色空間が効果的です。
- sRGB は、sRGB を使用する特定の端末やソフトウェアの動作に一致する必要がある場合にのみ使用してください。sRGB 色空間は光強度に対して線形でも知覚的に均一でもなく、混合色が暗くなりすぎたり、灰色がかったりするなど、産出する結果が劣ります。

### 色補間方式

{{CSSXref("&lt;color-interpolation-method&gt;")}} は、色を混合するために使用する補間方式を指定します。これは `in` キーワードと、色を混合する色空間で構成されます。
色空間は、[形式文法](#形式文法)に掲載されている利用できる色空間のいずれかでなければなりません。使用する色空間によっては、必要に応じて混合する際に進む色相の経路をより長い方にするか、より短い方にするかを指定できます。

[`<rectangular-color-space>`](/ja/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space)（矩形色空間）の種類には、[`srgb`](/ja/docs/Glossary/Color_space#srgb), [`srgb-linear`](/ja/docs/Glossary/Color_space#srgb-linear), [`display-p3`](/ja/docs/Glossary/Color_space#display-p3), [`a98-rgb`](/ja/docs/Glossary/Color_space#a98-rgb), [`prophoto-rgb`](/ja/docs/Glossary/Color_space#prophoto-rgb), [`rec2020`](/ja/docs/Glossary/Color_space#rec2020), [`lab`](/ja/docs/Glossary/Color_space#cielab_color_spaces), [`oklab`](/ja/docs/Glossary/Color_space#oklab), [`xyz`](/ja/docs/Glossary/Color_space#xyz_color_spaces), [`xyz-d50`](/ja/docs/Glossary/Color_space#xyz), [`xyz-d65`](/ja/docs/Glossary/Color_space#xyz-d50) があります。

`<polar-color-space>`（極座標色空間）の種類には、[`hsl`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/ja/docs/Web/CSS/Reference/Values/color_value/lch), [`oklch`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch) があります。これらの場合、必要に応じて色空間名の後に {{CSSXref("&lt;hue-interpolation-method&gt;")}} が指定できます。この値はデフォルトで `shorter hue` ですが、`longer hue`、`increasing hue`、`decreasing hue` にも設定可能です。

### 色の割合

2 つの色はそれぞれ、`0%` から `100%` までの `<percentage>` 値が宣言可能で、これは混合させる対応する色の量を指定します。宣言されたパーセント値の合計値が `100%` に等しくない場合、パーセント値は正規化されます。

2 つの色のパーセント値（ここでは `p1` および `p2` とする）は次のように正規化されます。

- `p1` と `p2` の両方が省略された場合は、 `p1 = p2 = 50%` となります。
- `p1` が省略されたら、 `p1 = 100% - p2` となります。
- `p2` が省略されたら、 `p2 = 100% - p1` となります。
- `p1 = p2 = 0%` であれば、関数は無効になります。
- `p1 + p2 ≠ 100%` であれば、 `p1' = p1 / (p1 + p2)` および `p2' = p2 / (p1 + p2)` となり、ここで `p1'` と `p2'` は正規化された値です。
  - `p1 + p2 < 100%` であれば、`p1 + p2` のアルファ乗算値が結果の色に適用されます。これは [`transparent`](/ja/docs/Web/CSS/Reference/Values/named-color#transparent) を、`pt = 100% - p1 - p2` の割合で混合するのと似ています。

## 形式文法

{{CSSSyntax}}

## 例

### 2 つの色の混合

この例は、赤色 `#a71e14` を様々なパーセント値で混合させ、パーセント値を指定しない白色と組み合わせた場合を示しています。`#a71e14` の混合パーセント値が高いほど、出力色は赤みが強くなり、白みが弱くなります。

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

`color-mix()` 関数は、赤の割合を最大 100% まで段階的に追加するために使用されます。6 番目の {{htmlelement("li")}} は、どちらの色に対してもパーセント値を記載していません。

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 3px solid #a71e14;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in oklab, #a71e14 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in oklab, #a71e14 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in oklab, #a71e14 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in oklab, #a71e14 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in oklab, #a71e14 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in oklab, #a71e14, white);
}
```

#### 結果

{{EmbedLiveSample("mixing_two_colors", "100%", 120)}}

`color-mix()` 関数内の両色の合計値は 100% です。開発者が設定した値の合計が 100% に達しない場合でも同様です。この例では、片方の色にのみパーセント値が指定されているため、もう一方の色には暗黙的にパーセント値が割り当てられ、合計が 100% になるよう調整されます。最後の {{htmlelement("li")}} では、どちらの色にもパーセント値が指定されていないため、両方がデフォルトの 50% になります。

### 透過率の追加

この例は、`color-mix()` 関数を使用して、任意の色と [`transparent`](/ja/docs/Web/CSS/Reference/Values/named-color#transparent) を混合させることで、色に透過率を追加する方法を示しています。

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

`color-mix()` 関数は、[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) `--base` （{{cssxref(":root")}} で定義）で宣言された `red` のパーセント値を増加させることで追加するために使用されます。6 番目の {{htmlelement("li")}} 要素にはパーセント値が記載されていないため、作成される色は `--base` 色の半分の透過率になります。透過率を可視化するため、{{htmlelement("ul")}} 要素に縞模様の背景を追加しています。

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
:root {
  --base: red;
}

ul {
  background: repeating-linear-gradient(
    45deg,
    chocolate 0px 2px,
    white 2px 12px
  );
}

li:nth-child(1) {
  background-color: color-mix(in srgb, var(--base) 0%, transparent);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, var(--base) 25%, transparent);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, var(--base) 50%, transparent);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, var(--base) 75%, transparent);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, var(--base) 100%, transparent);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, var(--base), transparent);
}
```

#### 結果

{{EmbedLiveSample("adding transparency", "100%", 120)}}

このように、`color-mix()` 関数を使用することで、既に半透明の色（アルファチャンネル値が 1 未満）であっても、透過性を追加できます。ただし、`color-mix()` を使用して半透明の色を完全に不透明にすることはできません。このためには、[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を CSS の[色関数](/ja/docs/Web/CSS/Guides/Colors#関数)と組み合わせて使用します。相対色は任意の色チャンネルの値を変更でき、色のアルファチャンネル値を増加させて完全に不透明にすることも可能です。

### color-mix() による色相の補間の使用

この例は、`color-mix()` 関数で利用できる色相補間方式を実演します。色相の[補間](/ja/docs/Web/CSS/Reference/Values/color_value#補間)を使用する場合、結果の色相は混合される 2 色の色相値の中間となります。色相環上のどの経路を通るかによって、得られる値は異なります。

詳しくは、{{cssxref("&lt;hue-interpolation-method&gt;")}} を参照してください。

```html hidden
<p>longer</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>shorter</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>increasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>decreasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
```

#### CSS

`shorter hue` 補間方式は色相環上のより短い経路をたどり、`longer hue` 補間方式はより長い経路をたどります。`increasing hue` では経路は値が増加する方向から始まり、`decreasing hue` では値が減少する方向から始まります。2 つの {{cssxref("named-color")}} 値を混合し、色相環上の経路の違いに基づいて変化する一連の `lch()` 中間色を生成します。混合色には `red`、`blue`、`yellow` が含まれ、それぞれの LCH 色相値は約 41 度、301 度、100 度です。

コードの冗長性を抑えるため、色と補間処理の両方に [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)を使用し、それぞれの {{htmlelement("ul")}} で異なる値を設定しました。

```css hidden
body {
  font-family: monospace;
}
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  padding: 10px;
  margin: 0;
}

li {
  padding: 10px;
  flex: 1;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
ul:nth-of-type(1) {
  --distance: longer; /* 色相を 52 度増加 */
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(2) {
  /* 色相を 20 度減少 */
  --distance: shorter;
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(3) {
  /* 色相を　40 度増加 */
  --distance: increasing;
  --base: yellow;
  --mixin: blue;
}
ul:nth-of-type(4) {
  /* 色相を 32 度減少 */
  --distance: decreasing;
  --base: yellow;
  --mixin: blue;
}

li:nth-child(1) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 100%,
    var(--mixin)
  );
}

li:nth-child(2) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 80%,
    var(--mixin)
  );
}

li:nth-child(3) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 60%,
    var(--mixin)
  );
}

li:nth-child(4) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 40%,
    var(--mixin)
  );
}

li:nth-child(5) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 20%,
    var(--mixin)
  );
}

li:nth-child(6) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 0%,
    var(--mixin)
  );
}
```

#### 結果

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 440)}}

`longer hue` を使用すると、色間の増減幅は常に `shorter hue` 使用時と同等かそれ以上になります。値間の長さよりも色相値の変化方向が重要である場合は、`increasing hue` または `decreasing hue` を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS 相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
