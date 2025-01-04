---
title: sqrt()
slug: Web/CSS/sqrt
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}

**`sqrt()`** [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/CSS_Functions) は指数関数で、数値の[平方根](https://ja.wikipedia.org/wiki/%E5%B9%B3%E6%96%B9%E6%A0%B9)を返します。

`sqrt(x)` は `pow(x, 0.5)` と同等です。

## 構文

```css
/* <number> 値 */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### 引数

`sqrt(x)` 関数は、1 つの引数を受け取ります。

- `x`
  - : 0 以上の、 {{cssxref("&lt;number&gt;")}} に解決される計算式です。

### 返値

`x` の平方根を {{cssxref("&lt;number&gt;")}} として返します。

- `x` が `+∞` の場合、 `+∞` を返します。
- `x` が `0⁻` の場合、 `0⁻` を返します。
- `x` が `0` より小さい場合、 `NaN` を返します。

## 形式文法

{{CSSSyntax}}

## 例

### 平方根をもとにしたサイズの拡大

この例では、`sqrt()` 関数を使用してサイズを計算します。

#### HTML

```html
<div class="boxes">
  <div class="box">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

ここではサイズを定義するために、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties) を利用しています。はじめに最初のサイズ (`--size-0`) を宣言し、これを使用して他のサイズを計算します。

- `--size-1` は、`--size-0` の値 (50px) に 4 の平方根 (2) を掛けて、100px になります。
- `--size-2` は、`--size-0` の値 (50px) に 9 の平方根 (3) を掛けて、150px になります。
- `--size-3` は、`--size-0` の値 (50px) に 16 の平方根 (4) を掛けて、200px になります。

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * sqrt(4)); /* 100px */
  --size-2: calc(var(--size-0) * sqrt(9)); /* 150px */
  --size-3: calc(var(--size-0) * sqrt(16)); /* 200px */
}
```

```css hidden
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: var(--size-0);
  height: var(--size-0);
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

計算したサイズは、各セレクターの `width` と `height` の値として使用されます。

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### 結果

{{EmbedLiveSample('Scale sizes based on square root', '100%', '220px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("pow")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
