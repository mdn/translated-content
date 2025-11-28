---
title: hsl()
slug: Web/CSS/Reference/Values/color_value/hsl
original_slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

**`hsl()`** 関数記法は、 {{glossary("RGB", "sRGB")}} 色を _色相_、_彩度_、_明度_ の成分によって表現します。オプションの _アルファ_ 成分は、その色の透明度を表します。

> [!NOTE]
> 古い `hsla()` 構文は `hsl()` の別名です。同じ引数を受け付け、同じように動作します。

{{InteractiveExample("CSS デモ: hsl()")}}

```css interactive-example-choice
background: hsl(50 80% 40%);
```

```css interactive-example-choice
background: hsl(150deg 30% 60%);
```

```css interactive-example-choice
background: hsl(0.3turn 60% 45% / 0.7);
```

```css interactive-example-choice
background: hsl(0 80% 50% / 25%);
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

`hsl()` による _補色_ の定義は、{{glossary("color wheel", "色相環")}}の同じ直径に配置されるため、単一の式で計算することができます。ある色の色相角を `θ` とすれば、その補色の色相角は `180deg - θ` となります。

## 構文

```css
hsl(120deg 75% 25%)
hsl(120deg 75% 25% / 0.6)
```

この関数は、すべての値がカンマで区切られた古い構文も受け付けます。

### 値

関数表記: `hsl(H S L[ / A])`

- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;angle&gt;")}} またはキーワード `none` であり、色相角を表します。この型の詳細は {{CSSXref("&lt;hue&gt;")}} のリファレンスを参照してください。
- `S`
  - : {{CSSXref("&lt;percentage&gt;")}} またはキーワード `none` であり、彩度を表します。`100%` は色の濃さが最大で、 `0%` は完全に色がありません（グレー）。
- `L`
  - : {{CSSXref("&lt;percentage&gt;")}} またはキーワード `none` であり、輝度を表します。`100%` は白で、`0%` は黒で、`50%` は「通常」です。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` であり、数値 `1` が `100%` (完全に不透明) を意味します。

> [!NOTE]
> この関数記法は sRGB 値にシリアライズされ、赤、緑、青の成分の値はシリアライズの際に丸められる可能性があります。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### hsl() を conic-gradient() と組み合わせて使う

`hsl()` 関数と [`conic-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/conic-gradient) はどちらも角度を扱うので、相性がよいものです。

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### 結果

{{EmbedLiveSample("using_hsl_with_conic-gradient", "100%", 140)}}

### 古い構文: カンマ区切りの値

歴史的な理由から、`hsl()` 関数はすべての値がカンマにより区切られた形式を受け付けます。

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

### 古い構文: hsla()

古い `hsla()` 構文は `hsl()` の別名です。

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

- [すべての色記法の一覧](/ja/docs/Web/CSS/Reference/Properties/color)
- {{CSSXref("&lt;hue&gt;")}} データ型
- [色選択ツール](/ja/docs/Web/CSS/Guides/Colors/Color_format_converter) (MDN)
- [Color picker](https://colorjs.io/apps/picker/) (Lea Verou)
