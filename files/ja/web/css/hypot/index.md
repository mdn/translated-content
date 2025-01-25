---
title: hypot()
slug: Web/CSS/hypot
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

**`hypot()`** [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/CSS_Functions) は、各引数の 2 乗の合計値の[平方根](https://ja.wikipedia.org/wiki/%E5%B9%B3%E6%96%B9%E6%A0%B9)を返す指数関数です。

{{CSSxRef("pow")}} と {{CSSxRef("sqrt")}} は単位のない数値のみを扱いますが、`hypot()` は単位を持つ値を受け入れます。ただし、すべての値は同じ[型](/ja/docs/Web/CSS/CSS_Types)である必要があります。

## 構文

```css
/* <number> 値 */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### 引数

`hypot(x [, ...]#)` 関数は、1 つ以上のカンマ区切りの計算式を引数として受け取ります。

- `x`, `x2`, ..., `xN`
  - : {{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;dimension&gt;")}}、または {{CSSxRef("&lt;percentage&gt;")}} に解決される計算式です。

### 返値

{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;dimension&gt;")}}、または {{CSSxRef("&lt;percentage&gt;")}} (入力に基づく) を返します。これは、各引数の 2 乗の合計値の平方根です。

- いずれかの入力が `infinite` の場合、`+∞` を返します。
- 引数が 1 つの場合、その絶対値を返します。`hypot(2em)` と `hypot(-2em)` はどちらも `2em` に解決されます。

## 形式文法

{{CSSSyntax}}

## 例

### hypot 関数をもとにしたサイズ

この例では、`hypot()` 関数を使用してサイズを計算します。

#### HTML

```html
<div class="boxes">
  <div class="box">100px</div>
  <div class="box one">100px</div>
  <div class="box two">141.42px</div>
  <div class="box three">250px</div>
</div>
```

#### CSS

ここではサイズを定義するために、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties) を利用しています。はじめに最初のサイズ (`--size-0`) を宣言し、これを使用して他のサイズを計算します。

- `--size-1` は、`--size-0` (100px) の斜辺の長さとして計算されます。値は 2 乗され、他に値がないためその平方根が返され、結果は 100px になります。
- `--size-2` は、2 つの `--size-0` (100px) の斜辺の長さとして計算されます。値は 2 乗され (100px \* 100px = 10000px<sup>2</sup>)、それに再び `--size-0` の 2 乗が加算され (10000px<sup>2</sup> + 10000px<sup>2</sup> = 20000px<sup>2</sup>)、その合計値の平方根 (√(20000px<sup>2</sup>)) が返され、結果は 141.42px になります。
- `--size-3` は、`--size-0` \* 1.5 (150px) と `--size-0` \* 2 (200px) を用いて計算されます。これらの 2 乗の和の平方根が結果となります。それぞれの値は 2 乗され (22500px<sup>2</sup> と 40000px<sup>2</sup>)、それらが加算され (62500px<sup>2</sup>)、合計値の平方根 (√(62500px<sup>2</sup>)) が 250px になります。

```css
:root {
  --size-0: 100px;
  --size-1: hypot(var(--size-0)); /*  100px */
  --size-2: hypot(var(--size-0), var(--size-0)); /*  141.42px */
  --size-3: hypot(
    calc(var(--size-0) * 1.5),
    calc(var(--size-0) * 2)
  ); /*  250px */
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

{{EmbedLiveSample('Sizes based on hypot function', '100%', '270px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
