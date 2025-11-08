---
title: cos()
slug: Web/CSS/Reference/Values/cos
original_slug: Web/CSS/cos
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

**`cos()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、数値の余弦を返す三角関数です。値は `-1` から `1` までの範囲になります。この関数には単一の計算が含まれており、引数の結果をラジアンとして解釈して、{{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;angle&gt;")}} のいずれかに解決する必要があります。つまり、`cos(45deg)`、`cos(0.125turn)`、`cos(3.14159 / 4)` はすべて、ほぼ `0.707` という同じ値を表します。

{{InteractiveExample("CSS デモ: cos()")}}

```css interactive-example-choice
transform: translateX(calc(cos(0deg) * 140px))
  translateY(calc(sin(0deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(90deg) * 140px))
  translateY(calc(sin(90deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(135deg) * 140px))
  translateY(calc(sin(135deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(180deg) * 140px))
  translateY(calc(sin(180deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(-45deg) * 140px))
  translateY(calc(sin(-45deg) * -140px));
```

```html interactive-example
<div class="circle">
  <span class="dot" id="example-element"></span>
</div>
```

```css interactive-example
:root {
  --radius: 140px;
  --dot-size: 10px;
}
.circle {
  display: grid;
  place-content: center;
  margin: 0 auto;
  width: calc(var(--radius) * 2);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666666;
  background-image:
    radial-gradient(black var(--dot-size), transparent var(--dot-size)),
    linear-gradient(135deg, blue, deepskyblue, lightgreen, lavender, honeydew);
}
.dot {
  display: block;
  width: var(--dot-size);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666666;
  background-color: #ff6666;
  transform: translateX(calc(cos(0deg) * var(--radius)))
    translateY(calc(sin(0deg) * var(--radius) * -1));
}
```

## 構文

```css
/* 単一の <angle> 値 */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* 単一の <number> 値 */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* その他の値 */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));
```

### 引数

`cos(angle)` 関数は、引数として 1 つの値のみを受け入れます。

- `angle`
  - : {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;angle&gt;")}} に解決される計算式。単位のない数値を指定すると、 {{cssxref("&lt;angle&gt;")}} を表すラジアン数として解釈されます。

### 返値

`angle` の余弦は、常に `−1` から `1` までの数値を返します。

- `angle` が `infinity`、`-infinity`、または `NaN` の場合、結果は `NaN` です。

## 形式文法

{{CSSSyntax}}

## 例

### 回転させたボックスのサイズを維持する

`cos()` 関数を使用すると、回転させたボックスのサイズを維持することができます。

要素を {{cssxref("transform-function/rotate", "rotate()")}} を使用して回転させると、その要素は元のサイズを超えてしまいます。これを修正するには、 `cos()` を使用して要素のサイズを更新します。

例えば、`100px`/`100px` の正方形を `45deg` 回転させると、作成されるひし形は元の正方形よりも幅が広く、高くなります。元正方形に割り当てられたボックスにひし形を縮小するには、 `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px` という式を使用してひし形を変倍する必要があります。また、位置を修正するために、 {{cssxref("transform-origin")}} を調整し、 {{cssxref("transform-function/translate", "translate()")}} を追加する必要があります。

#### HTML

```html
<div class="original-square"></div>
<div class="rotated-diamond"></div>
<div class="rotated-scaled-diamond"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.original-square {
  width: 100px;
  height: 100px;
  background-color: blue;
}
div.rotated-diamond {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
}
div.rotated-scaled-diamond {
  width: calc(100px * cos(45deg));
  height: calc(100px * cos(45deg));
  margin: calc(100px / 4 * cos(45deg));
  transform: rotate(45deg);
  transform-origin: center;
  background-color: green;
}
```

#### 結果

{{EmbedLiveSample('Keep the size of a rotated box', '100%', '200px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sin")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
