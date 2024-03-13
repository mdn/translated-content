---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: d71f07e831c84f37c25e920571471d2ea032b63c
---

{{CSSRef}}

**`color()`** 関数記法により、他のほとんどの色関数が暗黙に処理する sRGB 色空間ではなく、特定の指定した色空間で色を指定することができます。

特定の色空間に対応しているかどうかは、CSS メディア特性の [`color-gamut`](/ja/docs/Web/CSS/@media/color-gamut) で検出することができます。

## 構文

```css
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);
```

### 値

関数記法: `color(colorspace c1 c2 c3[ / A])`

- `colorspace`

  - : {{CSSXref("&lt;ident&gt;")}} で、定義済みの色空間（`srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, `xyz-d65`）のうちの 1 つを記述します。

- `c1`, `c2`, `c3`

  - : 0 と 1 の間の数値 ({{CSSXref("number")}})、{{CSSXref("percentage")}}、キーワード `none` のいずれかで、その色空間における成分値を指定します。

- `A` {{optional_inline}}

  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` で、 `1` は `100%` （完全に不透明）に対応します。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/color_value#色成分の欠落)を参照してください。

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

{{EmbedLiveSample("using_predefined_colorspaces_with_color")}}

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

{{EmbedLiveSample("using_the_xyz_colorspace_with_color")}}

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
    background-color: color(display-p3 0 0 1);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 0 0 1);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 0 0 1);
  }
}
```

#### 結果

{{EmbedLiveSample("using_color-gamut_media_queries_with_color")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>` データ型](/ja/docs/Web/CSS/color_value): すべての色記法の一覧
- [`color-gamut`](/ja/docs/Web/CSS/@media/color-gamut) メディア特性
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
