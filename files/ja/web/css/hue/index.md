---
title: <hue>
slug: Web/CSS/hue
l10n:
  sourceCommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{CSSRef}}

**`<hue>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、色の色相角を表します。
これは、色相を 1 つの値として受け入れる色関数、具体的には [`hsl()`](/ja/docs/Web/CSS/color_value/hsl)、 [`hwb()`](/ja/docs/Web/CSS/color_value/hwb)、[`lch()`](/ja/docs/Web/CSS/color_value/lch)、[`oklch()`](/ja/docs/Web/CSS/color_value/oklch) 関数記法で使用されます。

![sRGB 色相環](color_wheel.svg)

上の色相環は [sRGB](https://ja.wikipedia.org/wiki/SRGB) 色空間におけるすべての角度の色相を表示させています。具体的な例では、赤は `0deg`、黄は `60deg`、ライムは `120deg`、シアンは `180deg`、青は `240deg`、マゼンタは `300deg` です。

> [!NOTE]
> 具体的な色相に対応する角度は色空間によって異なります。例えば、 sRGB の緑の色相角は、 sRGB 色空間では `120deg` ですが、 CIELAB 色空間では `134.39deg` です。

以下の表は、 sRGB （{{CSSXref("color_value/hsl", "hsl()")}} および {{CSSXref("color_value/hwb", "hwb()")}}）、 CIELAB （{{CSSXref("color_value/lch", "lch()")}} で用いる）、 Oklab （{{CSSXref("color_value/oklch", "oklch()")}}）の色空間での主な色を示します。

<table>
  <colgroup>
    <col />
    <col span="6" width="15%" />
  </colgroup>
  <thead>
    <tr>
      <th></th>
      <th scope="col">0°</th>
      <th scope="col">60°</th>
      <th scope="col">120°</th>
      <th scope="col">180°</th>
      <th scope="col">240°</th>
      <th scope="col">300°</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">sRGB</th>
      <td
        style="background: hsl(0 100% 50%);"
        title="hsl(0 100% 50%)"></td>
      <td
        style="background: hsl(60 100% 50%);"
        title="hsl(60 100% 50%)"></td>
      <td
        style="background: hsl(120 100% 50%);"
        title="hsl(120 100% 50%)"></td>
      <td
        style="background: hsl(180 100% 50%);"
        title="hsl(180 100% 50%)"></td>
      <td
        style="background: hsl(240 100% 50%);"
        title="hsl(240 100% 50%)"></td>
      <td
        style="background: hsl(300 100% 50%);"
        title="hsl(300 100% 50%)"></td>
    </tr>
    <tr>
      <th scope="row">CIELAB</th>
      <td
        style="background: lch(50% 50% 0);"
        title="lch(50% 50% 0)"></td>
      <td
        style="background: lch(65% 55% 60);"
        title="lch(65% 55% 60)"></td>
      <td
        style="background: lch(90% 65% 120);"
        title="lch(90% 65% 120)"></td>
      <td
        style="background: lch(90% 35% 180);"
        title="lch(90% 35% 180)"></td>
      <td
        style="background: lch(75% 25% 240);"
        title="lch(75% 25% 240)"></td>
      <td
        style="background: lch(40% 70% 300);"
        title="lch(40% 70% 300)"></td>
    </tr>
    <tr>
      <th scope="row">Oklab</th>
      <td
        style="background: oklch(65% 65% 0);"
        title="oklch(65% 65% 0)"></td>
      <td
        style="background: oklch(75% 40% 60);"
        title="oklch(75% 40% 60)"></td>
      <td
        style="background: oklch(90% 50% 120);"
        title="oklch(90% 50% 120)"></td>
      <td
        style="background: oklch(90% 35% 180);"
        title="oklch(90% 35% 180)"></td>
      <td
        style="background: oklch(70% 40% 240);"
        title="oklch(70% 40% 240)"></td>
      <td
        style="background: oklch(55% 70% 300);"
        title="oklch(55% 70% 300)"></td>
    </tr>
  </tbody>
</table>

## 構文

`<hue>` は `<angle>` または `<number>` のどちらかになります。

### 値

- {{CSSXref("&lt;angle&gt;")}}
  - : `deg`、`grad`、`rad`、`turn` をそれぞれ使用して、度、グラジアン、ラジアン、回転で表される角度。
- `<number>`
  - : 色相角の度数を表す実数。

`<angle>` は周期的なので、 `<hue>` は範囲 `[0deg, 360deg)` に正規化されます。 `480deg` は `120deg` と同じ、 `-120deg` は `240deg` と同じ、 `-1turn` は `1turn` と同じ、といった具合に暗黙のうちに折り返されます。

### 補間

`<hue>` 値は {{CSSXref("&lt;angle&gt;")}} 値として補間され、既定では [`shorter`](/ja/docs/Web/CSS/hue-interpolation-method#values) となります。色関連の CSS 関数の中には、{{CSSXref("&lt;hue-interpolation-method&gt;")}} 成分によってこれを上書きできるものもあります。

### 形式文法

{{csssyntax}}

## 例

### スライダーを使用して色の色相を変更

以下の例は、 [`hsl()`](/ja/docs/Web/CSS/color_value/hsl) 関数記法の `hue` 値を色に変更したときの効果を示しています。

#### HTML

```html
<input type="range" min="0" max="360" value="0" id="hue-slider" />
<p>色相: <span id="hue-value">0deg</span></p>
<div id="box"></div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
}
p {
  font-family: sans-serif;
}
span {
  font-family: monospace;
  background: rgb(0 0 0 / 0.1);
  padding: 3px;
}
#hue-slider {
  width: 90%;
}
```

```css
#box {
  background-color: hsl(0 100% 50%);
}
```

#### JavaScript

```js
const hue = document.querySelector("#hue-slider");
const box = document.querySelector("#box");
hue.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${hue.value} 100% 50%)`;
  document.querySelector("#hue-value").textContent = `${hue.value}deg`;
});
```

#### 結果

{{EmbedLiveSample("changing_the_hue_of_a_color_using_a_slider", "100%", "200")}}

### さまざまな色空間における赤の色相の近似値

次の例は、異なる色空間で同じような赤色を示しています。
`lch()` と `oklch()` 関数の値は読みやすいように丸めてあります。

#### HTML

```html
<div data-color="hsl-red">hsl()</div>
<div data-color="hwb-red">hwb()</div>
<div data-color="lch-red">lch()</div>
<div data-color="oklch-red">oklch()</div>
```

#### CSS

```css
[data-color="hsl-red"] {
  /* hsl(<hue> <saturation> <lightness>) */
  background-color: hsl(0 100% 50%);
}
[data-color="hwb-red"] {
  /* hwb(<hue> <whiteness> <blackness>) */
  background-color: hwb(0 0% 0%);
}
[data-color="lch-red"] {
  /* lch(<lightness> <chroma> <hue>) */
  background-color: lch(50 150 40);
}
[data-color="oklch-red"] {
  /* oklch(<lightness> <chroma> <hue>) */
  background-color: oklch(0.6 0.4 20);
}
```

```css hidden
div {
  font-family: monospace;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
  display: inline-block;
}
```

#### 結果

{{EmbedLiveSample("approximating_red_hues_in_different_color_spaces", "100%", "150")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>`](/ja/docs/Web/CSS/color_value)
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
