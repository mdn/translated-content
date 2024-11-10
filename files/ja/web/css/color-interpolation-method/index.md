---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{CSSRef}}

**`<color-interpolation-method>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{CSSXref("&lt;color&gt;")}} 値間の補間に使用する色空間を表します。これを使用すると、 {{CSSXref("color_value/color-mix", "color-mix()")}} や {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} のような色関連の関数記法における既定の補間色空間を上書きすることができます。

`<color>` 値を補間する場合、補間色空間は Oklab が既定値です。

## 構文

`<color-interpolation-method>` は、補間に矩形色空間を使用するか、極座標色空間とオプションの色相補間を使用するかを指定します。

```plain
in <rectangular-color-space>
// または
in <polar-color-space>[ <hue-interpolation method>]
```

### 値

- `<rectangular-color-space>`

  - : `srgb`、`srgb-linear`、`lab`、`oklab`、`xyz`、`xyz-d50`、`xyz-d65` のいずれかのキーワードです。

- `<polar-color-space>`

  - : `hsl`、`hwb`、`lch`、`oklch` のいずれかです。

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : 色相補間のアルゴリズム。既定値は `shorter hue` です。

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

```css hidden
/* Fallback styles */
.srgb {
  background-image: linear-gradient(
    to right,
    rgb(0% 0% 100%),
    rgb(20% 0% 80%),
    rgb(40% 0% 60%),
    rgb(60% 0% 40%),
    rgb(80% 0% 20%),
    rgb(100% 0% 0%)
  );
}
.oklab {
  background-image: linear-gradient(
    to right,
    oklab(45.2% -0.032 -0.312),
    oklab(48.7% 0.019 -0.224),
    oklab(52.2% 0.07 -0.137),
    oklab(55.8% 0.122 -0.049),
    oklab(59.3% 0.173 0.038),
    oklab(62.8% 0.225 0.126)
  );
}
.oklch-longer {
  background-image: linear-gradient(
    to right,
    oklch(45.2% 0.313 264),
    oklch(46.8% 0.308 243),
    oklch(48.4% 0.303 221),
    oklch(50% 0.298 200),
    oklch(51.6% 0.293 179),
    oklch(53.2% 0.288 157),
    oklch(54.8% 0.283 136),
    oklch(56.4% 0.278 115),
    oklch(58% 0.273 93),
    oklch(59.6% 0.268 72),
    oklch(61.2% 0.263 51),
    oklch(62.8% 0.258 29)
  );
}
```

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
