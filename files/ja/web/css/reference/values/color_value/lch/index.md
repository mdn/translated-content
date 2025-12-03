---
title: lch()
slug: Web/CSS/Reference/Values/color_value/lch
original_slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

**`lch()`** 関数記法は、指定された色を LCH 色空間で表現するものです。これは {{cssxref("color_value/lab","lab()")}} と同じ L 軸を持っていますが、極座標系の C （彩度）と H （色相）を使用します。

## 構文

```css
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);
```

### 値

- 関数記法: `lch(L C H [/ A])`

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `100` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 CIE の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。
- `C`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;percentage&gt;")}}、またはキーワード値 `none` であり、ここで `0%` は `0` に、 `100%` は数値 `150` に対応します。これは彩度の指標です（おおよそ「色の量」を表します）。その有効な最小値は `0` で、最大値は理論的には無制限です（しかし実際には `230` を超えることはありません）。
- `H`
  - : {{CSSXref("&lt;number&gt;")}}、{{CSSXref("&lt;angle&gt;")}}、またはキーワード値 `none` であり、色相角を表します。この型の詳細は、 {{CSSXref("&lt;hue&gt;")}} のリファレンスにあります。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!NOTE]
> 通常、 CSS でパーセント値が数値と等価である場合、 `100%` が数値 `1` と等しくなります。
> この場合は特別で、 `100%` は `L` 値では `100`、 `C` 値では `150` となります。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明度、彩度、色相を lch() で調整

次の例は、関数記法 `lch()` の `L`（明度）、`C`（彩度）、`H`（色相）の値を変化させたときの効果を示しています。

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
  background-color: lch(0% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(100% 100 240);
}

[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-chroma"] {
  background-color: lch(100% 30 20);
}

[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-hue"] {
  background-color: lch(50% 132 180);
}
```

#### 結果

{{EmbedLiveSample("adjusting_lightness_chroma_and_hue_with_lch")}}

### 透明度を lch() で調整

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
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

#### 結果

{{EmbedLiveSample("adjusting_opacity_with_lch")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [すべての色記法の一覧](/ja/docs/Web/CSS/Reference/Values/color_value)
- {{CSSXref("&lt;hue&gt;")}} データ型
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
