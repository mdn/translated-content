---
title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
original_slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: f0737728c3b26504f1d2d759b8daf88a2ed496af
---

**`oklab()`** 関数記法は、指定された色を、人間の目による色の知覚方法を模倣しようとする Oklab 色空間で表現する。この `oklab()` は Oklab 色空間上の同次座標系、 a 軸と b 軸で動作します。極座標系、彩度、色相が必要な場合は、 {{cssxref("color_value/oklch", "oklch()")}} を使用してください。

Oklab は知覚的色空間で、次のような場合に使用されます。

- 画像の明度を変えずに、グレースケールに変換する。
- ユーザーが感じる色相や明度を維持したまま、色の彩度を変更することができる。
- 色の滑らかで均一なグラデーションを作成する。例えば、 {{HTMLElement("canvas")}} 要素で手動で補間した場合。

`oklab()` 関数は、Oklab 色空間から、RGB よりも広い、広色域や P3 色を含む任意の色を表現することができます。

## 構文

```css
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);
```

### 値

関数記法: `oklab(L a b[ / A])`

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `1` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲、またはキーワード `none` であり、 CIE の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `100` は `100%` （白）に対応します。
- `a`
  - : {{CSSXref("&lt;number&gt;")}} で `-0.4` ～ `0.4` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 Oklab 色空間における `a` 軸上の距離（緑と赤の色合い）を指定します。
- `b`
  - : {{CSSXref("&lt;number&gt;")}} で `-0.4` ～ `0.4` の範囲、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲、またはキーワード `none` であり、 Oklab 色空間における `b` 軸上の距離（青と黄の色合い）を指定します。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 明るさと色の軸を oklab() で調整

次の例は、 `oklab()` 関数の明度、 a 軸、 b 軸の値を変化させたときの効果を示しています。

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>
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
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.7 -0.3 -0.4);
}

[data-color="red"] {
  background-color: oklab(100% 0.4 0.4);
}
[data-color="red-a"] {
  background-color: oklab(100% 0.2 0.4);
}

[data-color="green"] {
  background-color: oklab(100% -100% 0.4);
}
[data-color="green-b"] {
  background-color: oklab(100% -100% 0.6);
}
```

#### 結果

{{EmbedLiveSample("Adjusting_the_lightness_and_axes", "100%", 155)}}

### 透明度を oklab() で調整

次の例は `oklab()` 関数記法の `A`（アルファ）値を変化させたときの効果を示しています。
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
  background-color: oklab(0.628 0.225 0.126);
}
[data-color="red-alpha"] {
  background-color: oklab(0.628 0.225 0.126 / 0.4);
}
```

#### 結果

{{EmbedLiveSample("Adjusting_opacity_with_oklab", "100%", 155)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>` データ型](/ja/docs/Web/CSS/Reference/Values/color_value): すべての色記法の一覧
- {{cssxref("color_value/oklch",'oklch()')}} は `oklab()` と同じ色空間を使用しますが、極座標系を使用します
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [OKLAB color wheel](https://observablehq.com/@shan/oklab-color-wheel) (observablehq.com)
