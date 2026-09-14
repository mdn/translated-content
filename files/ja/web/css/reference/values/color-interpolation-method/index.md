---
title: CSS `<color-interpolation-method>` データ型
short-title: <color-interpolation-method>
slug: Web/CSS/Reference/Values/color-interpolation-method
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

**`<color-interpolation-method>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、 {{CSSXref("&lt;color&gt;")}} 値間の補間に使用する色空間を表します。これを使用すると、 {{CSSXref("color_value/color-mix", "color-mix()")}} や {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} のような色関連の関数記法における既定の補間色空間を上書きすることができます。

`<color>` 値を補間する場合、補間色空間は Oklab がデフォルトです。

## 構文

`<color-interpolation-method>` は、補間に矩形色空間を使用するか、極座標色空間とオプションの色相補間を使用するかを指定します。

```plain
in <rectangular-color-space>
// または
in <polar-color-space>[ <hue-interpolation method>]
```

### 値

- `<rectangular-color-space>`
  - : `srgb`、`srgb-linear`、`display-p3`、`a98-rgb`、`prophoto-rgb`、`rec2020`、`lab`、`oklab`、`xyz`、`xyz-d50`、`xyz-d65` のいずれかのキーワードです。

- `<polar-color-space>`
  - : `hsl`、`hwb`、`lch`、`oklch` のいずれかです。

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}
  - : 色相補間のアルゴリズム。デフォルト値は `shorter hue` です。

- `<custom-color-space>`
  - : [`<dashed-ident>`](/ja/docs/Web/CSS/Reference/Values/dashed-ident#using_with_color-profile) で、カスタム [@color プロファイル](/ja/docs/Web/CSS/Reference/At-rules/@color-profile)を参照します。

### 形式文法

{{CSSSyntax}}

## 例

### グラデーションを使用する補間色空間の比較

次の例は、 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} にさまざまな補間色空間を使用した場合の効果を示しています。

#### HTML

```html
<div>sRGB:</div>
<div class="gradient srgb"></div>
<div>Oklab:</div>
<div class="gradient oklab"></div>
<div>Oklch (with <code>longer hue</code>):</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### 結果

{{EmbedLiveSample("comparing_interpolation_color_spaces_using_gradients", "100%", 250)}}

### 反復グラデーションでの色の補間

次の例は、反復グラデーションの色を補間処理する際に、色空間を指定する方法を示しています。
3 つのボックスには、[`repeating-conic-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient)、 [`repeating-linear-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient)、[`repeating-radial-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient) の各関数を使用した、異なる種類の反復グラデーションを表示します。
最初のボックスでは、Lab 色空間を使用して 2 つの色値の間を補間処理します。
2 つ目と 3 つ目のボックスでは OkLCh を使用しており、さらに色相値間の補間処理を指定するための {{cssxref("hue-interpolation-method")}} も指定しています。

#### HTML

```html
<div class="gradient conic">conic</div>
<div class="gradient linear">linear</div>
<div class="gradient radial">radial</div>
```

#### CSS

それぞれのグラデーションで同じ 2 色を使用し、グラデーションにおける色の補間処理に対して、{{cssxref("hue-interpolation-method")}} と{{glossary("color space", "色空間")}}が及ぼす異なる効果を示しました。

```css hidden
.gradient {
  height: 200px;
  width: 200px;
  display: inline-block;
  font-family: monospace;
  margin: 10px;
  font-size: 16px;
}
```

```css
.conic {
  background-image: repeating-conic-gradient(
    in lab,
    burlywood,
    blueviolet 120deg
  );
}

.linear {
  background-image: repeating-linear-gradient(
    in oklch,
    burlywood,
    blueviolet 75px
  );
}

.radial {
  background-image: repeating-radial-gradient(
    in oklch longer hue,
    blueviolet 50px,
    burlywood 100px
  );
}
```

#### 結果

{{EmbedLiveSample("hue_interpolation_in_repeating_gradients", "100%", 250)}}

1 つ目のボックスと 2 つ目のボックスを比較すると、異なる色空間における 2 つの色間の補間処理の違いがわかります。
2 つ目と 3 つ目のボックスを比較すると、{{cssxref("hue-interpolation-method")}} の違いが示されています。線形グラデーションでは短い方（デフォルト）が使用され、放射グラデーションでは長い方が使用されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}}, {{cssxref("gradient")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
