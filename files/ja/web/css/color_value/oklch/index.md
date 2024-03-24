---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{CSSRef}}

**`oklch()`** 関数記法は、指定された色を Oklch 色空間で表現するものです。これは {{cssxref("color_value/oklab","oklab()")}} と同じ L 軸を持っていますが、極座標系の C （彩度）と H （色相）を使用します。

## 構文

```css
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)
```

### 値

Functional notation: `oklch(L C H[ / A])`

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `1` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 CIE の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `1` は `100%` （白）に対応します。
- `C`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;percentage&gt;")}}、またはキーワード値 `none` であり、ここで `0%` は `0` に、 `100%` は数値 `0.4` に対応します。これは彩度の指標です（おおよそ「色の量」を表します）。その有効な最小値は `0` で、最大値は理論的には無制限です（しかし実際には `0.5` を超えることはありません）。
- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;angle&gt;")}}、またはキーワード値 `none` であり、色相角を表します。この型の詳細は、 {{CSSXref("&lt;hue&gt;")}} のリファレンスにあります。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明度、彩度、色相の調整

次の例は、関数記法 `oklch()` の `L`（明度）、`C`（彩度）、`H`（色相）の値を変化させたときの効果を示しています。

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-chroma"></div>

<div data-color="green"></div>
<div data-color="green-hue"></div>
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
[data-color="blue"] {
  background-color: oklch(60% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red"] {
  background-color: oklch(100% 0.4 30);
}
[data-color="red-chroma"] {
  background-color: oklch(100% 0.3 40);
}

[data-color="green"] {
  background-color: oklch(60% 0.57 161);
}
[data-color="green-hue"] {
  background-color: oklch(60% 0.57 181);
}
```

#### 結果

{{EmbedLiveSample("adjusting_the_lightness_chroma_and_hue_of_a_color")}}

### 色のアルファ値の調整

次の例は `lab()` 関数記法の `A`（アルファ）値を変化させたときの効果を示しています。
`red` と `red-alpha` 要素は `#background-div` 要素に重なり、透明度の効果を示しています。
`A` に `0.4` の値を与えると、色は 40% の不透明度になります。

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
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
#background-div {
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 0.5 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 0.5 20 / 0.4);
}
```

#### 結果

{{EmbedLiveSample("adjusting_the_alpha_value_of_a_color")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/Web/CSS/color_value)
- {{CSSXref("&lt;hue&gt;")}} データ型
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
