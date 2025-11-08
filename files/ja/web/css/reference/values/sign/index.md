---
title: sign()
slug: Web/CSS/Reference/Values/sign
original_slug: Web/CSS/sign
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`sign()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 1 つの計算式を指定し、引数の数値が負の場合は `-1`、 引数の数値が正の値の場合は `+1`、引数の数値が 0⁺ の場合は `0⁺`、引数の数値が 0⁻ の場合は `0⁻` を返します。

> [!NOTE]
> {{CSSxRef("abs")}} は引数の絶対値を返しますが、 `sign()` は引数の符号を返します。

## 構文

```css
/* プロパティ: sign( 式 ) */
top: sign(20vh - 100px);
```

### 引数

`sign(x)` 関数は、引数として 1 つの値のみを取ります。

- `x`
  - : 数値に解決される計算式。

### 返値

`A` の符号を表す数値です。

- `x` が正の数であれば、 `1` を返します。
- `x` が負の数であれば、 `-1` を返します。
- `x` が正のゼロであれば、 `0` を返します。
- `x` が負のゼロであれば、 `-0` を返します。
- それ以外の場合は `NaN` を返します。

## 形式文法

{{CSSSyntax}}

## 例

### 背景画像の位置

例えば、 {{cssxref("background-position")}} では、背景画像が背景領域よりも大きい場合、正のパーセント値は負の長さに、負のパーセント値は正の長さに変換されます。したがって、 `sign(10%)` は、パーセント値の変換方法に応じて `1` または `-1` を返すことになります。（長さが 0 の場合、`0` を返すこともあります。）

```css
div {
  background-position: sign(10%);
}
```

### 位置指定方向

もう 1 つの用途は、要素の {{cssxref("position")}} を制御することです。値は正または負のいずれかです。

```css
div {
  position: absolute;
  top: calc(100px * sign(var(--value)));
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("abs")}}
