---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
original_slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: c754ecfaf2d24aa9e130efde70c743f03421db40
---

**`color-mix()`** 関数記法は 2 つの {{cssxref("&lt;color&gt;")}} 値を採り、指定された色空間の指定された量で混合した結果を返します。

## 構文

```css
color-mix(in lch, plum, pink);
color-mix(in lch, plum 40%, pink);
color-mix(in srgb, #34c9eb 20%, white);
color-mix(in hsl longer hue, hsl(120 100% 50%) 20%, white);
```

### 値

- 関数記法: `color-mix(method, color1[ p1], color2[ p2])`

- `method`
  - : {{CSSXref("&lt;color-interpolation-method&gt;")}} で、色補間に使用する色空間を指定します。

- `color1`, `color2`
  - : 混合する {{CSSXref("&lt;color&gt;")}} 値です。

- `p1`, `p2` {{optional_inline}}
  - : {{CSSXref("&lt;percentage&gt;")}} 値で `0%` から `100%` までであり、混合する各色の量を指定します。これらは以下のように正規化されます。
    - `p1` と `p2` の両方が省略された場合は、 `p1 = p2 = 50%` となります。
    - `p1` が省略されたら、 `p1 = 100% - p2` となります。
    - `p2` が省略されたら、 `p2 = 100% - p1` となります。
    - `p1 = p2 = 0%` であれば、関数は無効になります。
    - `p1 + p2 ≠ 100%` であれば、 `p1' = p1 / (p1 + p2)` および `p2' = p2 / (p1 + p2)` となり、ここで `p1'` と `p2'` は正規化された値です。

### 形式文法

{{csssyntax}}

## 例

### 2 つの色の混合

対応しているブラウザーでは、`#34c9eb`の混合率が高いほど、アイテムの青色が多くなり、白色が少なくなります。指定された値がない場合、パーセントの既定値は 50% です。

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid #34c9eb;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, #34c9eb 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, #34c9eb 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, #34c9eb, white);
}
```

#### 結果

{{EmbedLiveSample("mixing_two_colors", "100%", 150)}}

### color-mix() による色相の補間の使用

短い色相補間を用いる場合、得られる色相角は、カラーホイールを最短ルートで回ったときの入力角の中間になります。
より長い色相補間のメソッドを使用すると、カラーホイールの長いルートを取ったときの中点となる色相角が得られます。
詳しい情報は {{cssxref("&lt;hue-interpolation-method&gt;")}} を参照してください。

```html
<div class="color-one">色 1</div>
<div class="color-two">色 2</div>
<div class="shorter">短い混色</div>
<div class="longer">長い混色</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  border: 1px solid;
  font: bold 150% monospace;
  height: 100px;
  margin: 10px 5%;
  width: 30%;
}
```

```css
.color-one {
  background-color: hsl(10 100% 50%);
}
.color-two {
  background-color: hsl(60 100% 50%);
}
.shorter {
  background-color: color-mix(
    in hsl shorter hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
.longer {
  background-color: color-mix(
    in hsl longer hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
```

#### 結果

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
