---
title: tan()
slug: Web/CSS/Reference/Values/tan
original_slug: Web/CSS/tan
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`tan()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、数値の正接を返す三角関数です。値は `−infinity` から `infinity` までの範囲になります。この関数には単一の計算が含まれており、引数の結果をラジアンとして解釈して、{{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;angle&gt;")}} のいずれかに解決する必要があります。

## 構文

```css
/* 単一の <angle> 値 */
width: calc(100px * tan(45deg));
width: calc(100px * tan(0.125turn));
width: calc(100px * tan(0.785398163rad));

/* 単一の <number> 値 */
width: calc(100px * tan(0.5773502));
width: calc(100px * tan(1.732 - 1));

/* その他の値 */
width: calc(100px * tan(pi / 3));
width: calc(100px * tan(e));
```

### 引数

`tan(angle)` 関数は、引数として 1 つの値のみを受け入れます。

- `angle`
  - : {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;angle&gt;")}} に解決される計算式。単位のない数値を指定すると、 {{cssxref("&lt;angle&gt;")}} を表すラジアン数として解釈されます。

### 返値

`angle` の正接は、常に `−∞` から `+∞` までの数値を返します。

- `angle` が `infinity`、`-infinity`、または `NaN` の場合、結果は `NaN` です。
- `angle` が `0⁻` の場合、結果は `0⁻` です。
- `angle` が極限値 (`90deg`、`270deg` など) のいずれかである場合、結果は 明示的に未定義 です。作成者は、これらの入力に対して `tan()` が具体的な値を返すことに頼ってはいけません。

## 形式文法

{{CSSSyntax}}

## 例

### 平行四辺形を描画

`tan()` 関数を使用すると、指定された境界ボックスを持つ平行四辺形を描画することができます。

#### HTML

```html
<div class="parallelogram"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.parallelogram {
  --w: 400;
  --h: 200;
  --angle: 30deg;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));
}
.parallelogram::before {
  content: "";
  position: absolute;
  width: calc(100% - 100% * var(--h) / var(--w) * tan(var(--angle)));
  height: 100%;
  transform-origin: 0 100%;
  transform: skewX(calc(0deg - var(--angle)));
  background-color: red;
}
```

#### 結果

{{EmbedLiveSample('Drawing parallelograms', '100%', '250px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
