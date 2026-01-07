---
title: <color>
slug: Web/CSS/Reference/Values/color_value
original_slug: Web/CSS/color_value
l10n:
  sourceCommit: 2e65771838405cdbee68bd38fb27a2ce0b1832d9
---

**`<color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、一つの色を表します。
`<color>` は[アルファチャネル](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)の*透過値*を含むことがあり、この色を背景とどれだけ[混合](https://www.w3.org/TR/compositing-1/#simplealphacompositing)するかを示すこともできます。

> [!NOTE]
> `<color>` の色は詳細に定義されていますが、出力機器によって（時には著しく）違って見えるかもしれません。出力機器の大半は色補正がされておらず、ブラウザーによっては出力機器の[色プロファイル](https://ja.wikipedia.org/wiki/ICC%E3%83%97%E3%83%AD%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)に対応していないからです。

## 構文

```css
/* 名前付きの色 */
rebeccapurple
aliceblue

/* RGB 16 進値 */
#f09
#ff0099

/* RGB (Red, Green, Blue) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Hue, Saturation, Lightness) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Hue, Whiteness, Blackness) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB (Lightness, A-axis, B-axis) */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Lightness, Chroma, Hue) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Lightness, A-axis, B-axis) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch (Lightness, Chroma, Hue) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* 相対的な CSS 色 */
/* HSL 色相の変更 */
hsl(from red 240deg s l)
/* HWB アルファチャネルの変更 */
hwb(from green h w b / 0.5)
/* LCH 輝度の変更 */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```

`<color>` は以下の何れかの方法で定義することができます。

- キーワード: {{CSSXref("&lt;named-color&gt;")}} （`blue` や `pink` など）、{{CSSXref("&lt;system-color&gt;")}}、[`currentcolor`](#currentcolor_キーワード)
- 16 進記法: {{CSSXref("&lt;hex-color&gt;")}} （`#ff0000` など）
- `<color-function>` として、{{glossary("color space", "色空間")}}の引数を関数記法を使用して:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) 色空間: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, {{CSSXref("color_value/rgb", "rgb()")}}
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) 色空間: {{CSSXref("color_value/lab", "lab()")}}, {{CSSXref("color_value/lch", "lch()")}}
  - [Oklab](https://bottosson.github.io/posts/oklab/) 色空間: {{CSSXref("color_value/oklab", "oklab()")}}, {{CSSXref("color_value/oklch", "oklch()")}}
  - その他の色空間: {{CSSXref("color_value/color", "color()")}}
- [相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の構文を用いると、既存の色に基づく新しい色を出力することができます。上記の色関数はいずれも、**原色**の前に `from` キーワードが先行し、その後に新しい**出力色**のためのチャンネル値の定義を続けることができます。
- 2 色の混合: {{CSSXref("color_value/color-mix", "color-mix()")}}
- 2 つの色の指定。 1 つ目の色は明るいカラースキームに、 2 つ目は暗いカラースキームに使用: {{CSSXref("color_value/light-dark", "light-dark()")}}

### currentcolor キーワード

`currentcolor` キーワードは、要素の {{Cssxref("color")}} プロパティの値を表します。これで `color` の値をプロパティが既定で受け取らなくても利用することができます。

`currentcolor` が `color` プロパティの値として使用された場合、 `color` プロパティが継承した値が使用されます。

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  この文字列の色は青です。
  <div style="background: currentcolor; height:9px;"></div>
  このブロックは青い境界線で囲まれています。
</div>
```

{{EmbedLiveSample("currentcolor_keyword", "100%", 80)}}

### 色成分の欠落

CSS 色関数の各成分（古いカンマ区切り文字を使用するものを除く）は、キーワード `none` を指定することで、欠落成分として指定することができます。

[色補間における欠落成分](#成分が欠落した補間)を明示的に指定することは、一部の色成分は{{glossary("interpolation", "補間")}}したいが他の色成分は補間したくないという用途に有益です。ほかはすべて、欠落した成分は適切な単位で値がゼロになります（`0`、`0%`、`0deg` など）。例えば、次の例は補間以外で使用しても等価な色です。

```css
/* これらは等価 */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* これらは等価 */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## 補間

色の補間は[グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient)、[トランジション](/ja/docs/Web/CSS/Guides/Transitions/Using)、[アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)で発生します。

`<color>` 値を補完する場合、まずは色が指定された色空間へ変換され、その[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)のそれぞれの成分が直線状に補間され、補間の速度はトランジションやアニメーションでは[イージング関数](/ja/docs/Web/CSS/Reference/Values/easing-function)で定められます。
補間色空間の既定値は Oklab ですが、一部の色関連の関数記法では {{CSSXref("&lt;color-interpolation-method&gt;")}} で上書きできます。

### 成分が欠落した補間

#### 同じ色空間での色の補間

補間色空間内に正確に収まる色を補間するときは、一方の色から欠落している部品は、他の色から持っ ている同じ成分の値に置き換えられます。
例えば、 次の 2 つの表現は等価です。

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> 両方の色から成分が欠落している場合、この成分は補間後に欠落します。

#### 異なる色空間からの色の補間: 類似成分

補間される色が補間色空間にない場合は、以下の表に記述されているように、同じカテゴリーの**類似成分**に基づいて、その欠落した成分が変換後の色に変換されます。

| カテゴリー | 類似成分 |
| ---------- | -------- |
| 赤         | `R`, `X` |
| 緑         | `G`, `Y` |
| 青         | `B`, `Z` |
| 明度       | `L`      |
| 彩度       | `C`, `S` |
| 色相       | `H`      |
| a          | `a`      |
| b          | `b`      |

例

- `color(xyz 0.2 0.1 0.6)` における `X` (`0.2`) は `rgb(50% 70% 30%)` における `R` (`50%`) の類似です。
- `hsl(0deg 100% 80%)` における `H` (`0deg`) は `oklch(80% 0.1 140)` における `H` (`140`) の類似です。

補間色空間として Oklch を使用し、下記の 2 色を例とします。

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

前処理の手順は次の通りです。

1. 両方の色で欠けている成分をゼロ値で置き換えます。

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. 両方の色を補間色空間に変換します。

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. 変換された色の成分が、対応する元の色の欠落した成分と類似している場合は、欠落した成分としてリセットします。

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. 欠落している部品は、他の変換された色の同じ部品で置き換えます。

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## アクセシビリティの考慮

色を見分けることが難しい人がいます。 [WCAG 2.2](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) 勧告では、色を特定のメッセージ、動作、結果を伝える唯一の手段として使用することを避けるよう強く勧告しています。詳しくは[色と色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)をご覧ください。

## 形式文法

{{csssyntax}}

## 例

### 色の値のテスター

この例では、 `<div>` とテキスト入力を用意しています。入力欄に有効な色を入力すると、 `<div>` にその色が採用され、色の値をテストすることができます。

#### HTML

```html
<div></div>
<hr />
<label for="color">有効な色の値を入力してください:</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "Invalid color value";
  }
});
```

#### 結果

{{EmbedLiveSample("color_value_tester", "100%", 300)}}

### 彩度最高の色

この例では、 sRGB 色空間で彩度が最高の sRGB 色を表示させています。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### 結果

{{EmbedLiveSample("fully_saturated_srgb_colors", "100%", 200)}}

### さまざまな明度の赤

この例では、 sRGB 色空間で様々な明度の赤を表示しています。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### 結果

{{EmbedLiveSample("reds_of_different_shades", "100%", 150)}}

### 様々な彩度の赤

この例では、 sRGB 色空間でさまざまな彩度の赤を表示させています。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### 結果

{{EmbedLiveSample("reds_of_different_saturations", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("opacity")}} プロパティは要素レベルで色の透明度を定義できます。
- {{CSSXref("&lt;hue&gt;")}} データ型は色を色相関で表します。
- このデータ型を使用するよく使われるプロパティ: {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}}
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
- [New functions, gradients, and hues in CSS colors (Level 4)](/en-US/blog/css-color-module-level-4/) (MDN blog, 2023)
