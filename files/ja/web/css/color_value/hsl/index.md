---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}

**`hsl()`** 関数表記は、 {{glossary("RGB", "sRGB")}} 色を _色相_、_彩度_、_明度_ の成分によって表現します。オプションの _アルファ_ 成分は、その色の透明度を表します。

> **メモ:** レガシーの `hsla()` 構文は `hsl()` のエイリアスです。同じ引数を受け付け、同じようにふるまいます。

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

`hsl()` による _補色_ の定義は、{{glossary("color wheel", "色相環")}}の同じ直径に配置されるため、単一の式で計算することができます。ある色の色相環上の角度を `θ` とすれば、その補色の色相環上の角度は `180deg - θ` となります。

## 構文

```css
hsl(120deg 75% 25%)
hsl(120deg 75% 25% / 0.6)
```

この関数は、すべての値がコンマで区切られたレガシーな構文も受け付けます。

### 値

関数表記: `hsl(H S L[ / A])`

- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;angle&gt;")}} またはキーワード `none` であり、色相環上の角度を表します。この型の詳細は {{CSSXref("&lt;hue&gt;")}} のリファレンスを参照してください。
- `S`
  - : {{cssxref("&lt;percentage&gt;")}} またはキーワード `none` であり、彩度を表します。`100%` は色の濃さが最大で、`0%` は完全に色がありません（グレー）。
- `L`
  - : {{cssxref("&lt;percentage&gt;")}} またはキーワード `none` であり、輝度を表します。`100%` は白で、`0%` は黒で、`50%` は「通常」です。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` であり、数値 `1` が `100%` (完全に不透明) を意味します。

> **メモ:** `none` の効果は、[Missing color components](/ja/docs/Web/CSS/color_value#missing_color_components) を参照してください。

### 形式的な構文

{{csssyntax}}

## 例

### hsl() を conic-gradient() と組み合わせて使う

`hsl()` 関数と [`conic-gradient()`](/ja/docs/Web/CSS/gradient/conic-gradient) はどちらも角度を扱うので、相性がよいものです。

```html hidden
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
  );
  clip-path: circle(closest-side);
}
```

#### 結果

{{EmbedLiveSample("using_hsl_with_conic-gradient", "100%", 140)}}

### レガシー構文: コンマ区切りの値

歴史上の理由から、`hsl()` 関数はすべての値がコンマにより区切られた形式を受け付けます。

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

### レガシー構文: hsla()

レガシーな `hsla()` 構文は `hsl()` のエイリアスです。

#### HTML

```html
<div class="hsl"></div>
<div class="hsla"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.hsl {
  background-color: hsl(0 100% 50% / 50%);
}

div.hsla {
  background-color: hsla(0, 100%, 50%, 50%);
}
```

#### 結果

{{EmbedLiveSample("legacy_syntax_hsla", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`hsla()`](/ja/docs/Web/CSS/color_value/hsla) 関数、この関数の古い別名。
- {{cssxref("&lt;color&gt;")}} 型、あらゆる色を表す。
- [HSL Color Picker](https://hslpicker.com/)
