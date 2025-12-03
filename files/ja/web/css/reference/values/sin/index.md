---
title: sin()
slug: Web/CSS/Reference/Values/sin
original_slug: Web/CSS/sin
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**`sin()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、数値の正弦を返す三角関数です。値は `-1` から `1` までの範囲になります。この関数には単一の計算が含まれており、引数の結果をラジアンとして解釈して、{{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;angle&gt;")}} のいずれかに解決する必要があります。つまり、`sin(45deg)`、`sin(0.125turn)`、`sin(3.14159 / 4)` はすべて、ほぼ `0.707` という同じ値を表します。

{{InteractiveExample("CSS デモ: sin()")}}

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
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* 単一の <number> 値 */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* その他の値 */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### 引数

`sin(angle)` 関数は、引数として 1 つの値のみを受け入れます。

- `angle`
  - : {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;angle&gt;")}} に解決される計算式。単位のない数値を指定すると、 {{cssxref("&lt;angle&gt;")}} を表すラジアン数として解釈されます。

### 返値

`angle` の正弦は、常に `−1` から `1` までの数値を返します。

- `angle` が `infinity`、`-infinity`、または `NaN` の場合、結果は `NaN` です。
- `angle` が `0⁻` の場合、結果は `0⁻` です。

## 形式文法

{{CSSSyntax}}

## 例

### ボックスサイズの変更

この例では、 `sin(30deg)` は `0.5` を返し、ボックスの幅は `50px`、高さは `50px` になります。

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### アニメーションの時間を制御

もう 1 つの用途は、 {{cssxref("animation-duration")}} を制御し、正弦波の値に基づいて再生時間を縮小することです。この場合、アニメーションの再生時間は `1s` になります。

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
