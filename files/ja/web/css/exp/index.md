---
title: exp()
slug: Web/CSS/exp
---

{{CSSRef}}

**`exp()`** [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/CSS_Functions)は指数関数で、引数として数値を取り、その数値で数学定数 `e` を累乗した値を返します。

数学定数 [e](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>) は自然対数の底で、約 `2.718281828459045` です。

`exp(number)` 関数は計算を含み、{{CSSxRef("pow", "pow(e, number)")}} と同じ値を返します。

## 構文

```css
/* <number> 値 */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * exp(0)); /* 100px * 1 = 100px */
width: calc(100px * exp(1)); /* 100px * 2.718281828459045 = 217px */
```

### 引数

`exp(number)` 関数は、1 つの値のみを引数で受け取ります。

- `number`
  - : {{CSSxRef("number")}} に解決される計算式で、`e` を累乗する値を表します。

### 返値

返値は非負の {{CSSxRef("number")}} で、e<sup>number</sup>、つまり e を `number` 乗した値になります。

- `number` が `-Infinity` の場合、結果は `0` になります。
- `number` が `0` の場合、結果は `1` になります。
- `number` が `1` の場合、結果は `e`（すなわち `2.718281828459045`）になります。
- `number` が `Infinity` の場合、結果は `Infinity` になります。

### 形式文法

{{CSSSyntax}}

## 例

### 要素を回転させる

`exp()` 関数は {{CSSxRef("number")}} を返すため、要素の回転（{{CSSxRef("transform-function/rotate", "rotate")}}）に使用できます。

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
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
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(calc(1turn * exp(-1))); // 0.3678794411714423turn
}
div.box-2 {
  transform: rotate(calc(1turn * exp(-0.75))); // 0.4723665527410147turn
}
div.box-3 {
  transform: rotate(calc(1turn * exp(-0.5))); // 0.6065306597126334turn
}
div.box-4 {
  transform: rotate(calc(1turn * exp(-0.25))); // 0.7788007830714049turn
}
div.box-5 {
  transform: rotate(calc(1turn * exp(0))); // 1turn
}
```

#### 結果

{{EmbedLiveSample('Rotate elements', '100%', '200px')}}

### 固定比率で見出しを拡大する

`exp()` 関数は、ページ上のすべてのフォントサイズを固定比率で関連付ける CSS モジュラースケールのような戦略に役立ちます。

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * exp(1.25)); // 3.4903429574618414rem
}
h2 {
  font-size: calc(1rem * exp(1)); // 2.718281828459045rem
}
h3 {
  font-size: calc(1rem * exp(0.75)); // 2.117000016612675rem
}
h4 {
  font-size: calc(1rem * exp(0.5)); // 1.6487212707001282rem
}
h5 {
  font-size: calc(1rem * exp(0.25)); // 1.2840254166877414rem
}
h6 {
  font-size: calc(1rem * exp(0)); // 1rem
}
```

#### 結果

{{EmbedLiveSample('Scale headings by fixed ratio', '100%', '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}
