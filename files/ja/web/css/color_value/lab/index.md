---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 8cb896db41ef17577941067991a2a805d7f661e4
---

{{CSSRef}}

**`lab()`** 関数記法は、指定された色を CIE L\*a\*b\* 色空間で表現する。 Lab は人間が見ることのできる色の範囲をすべて表します。

## 構文

```css
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);
```

### 値

- 関数記法: `lab(L a b[ / A])`

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `100` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 CIE の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。
- `a`
  - : {{CSSXref("&lt;number&gt;")}} で `-125` ～ `125` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 CIELAB 色空間における `a` 軸上の距離（緑と赤の色合い）を指定します。
- `b`
  - : {{CSSXref("&lt;number&gt;")}} で `-125` ～ `125` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 CIELAB 色空間における `b` 軸上の距離（青と黄の色合い）を指定します。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!NOTE]
> 通常、 CSS でパーセント値が数値と等価である場合、 `100%` が数値 `1` と等しくなります。
> この場合は特別で、 `100%` は `L` 値では `100`、 `a` 値と `b` 値では `125` となります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明るさと色の軸を lab() で調整

次の例は、 `lab()` 関数の明度、 a 軸、 b 軸の値を変化させたときの効果を示しています。

#### HTML

```html
<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>

<div data-color="blue"></div>
<div data-color="blue-light"></div>
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
  background-color: lab(100 125 125);
}
[data-color="red-a"] {
  background-color: lab(100 110 125);
}

[data-color="green"] {
  background-color: lab(75% -120 125);
}
[data-color="green-b"] {
  background-color: lab(75% -120 10);
}

[data-color="blue"] {
  background-color: lab(0 -120 -120);
}
[data-color="blue-light"] {
  background-color: lab(70 -120 -120);
}
```

#### 結果

{{EmbedLiveSample("Adjusting_lightness_and_color_axes_with_lab")}}

### 透明度を lab() で調整

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
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lab(100 125 125);
}
[data-color="red-alpha"] {
  background-color: lab(100 125 125 / 0.4);
}
```

#### 結果

{{EmbedLiveSample('Adjusting_opacity_with_lab')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>` データ型](/ja/docs/Web/CSS/color_value): すべての色記法の一覧
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): `lab()` および {{cssxref("color_value/lch",'lch()')}} 色を含む
