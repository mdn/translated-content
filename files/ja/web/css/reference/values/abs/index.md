---
title: abs()
slug: Web/CSS/Reference/Values/abs
original_slug: Web/CSS/abs
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`abs()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、引数の絶対値を同じ型で返します。

## 構文

```css
/* プロパティ: abs(式) */
width: abs(20% - 100px);
```

### 引数

`abs(x)` 関数は、1つの引数を受け取ります。

- `x`
  - : 数値に解決される計算式です。

### 返値

`x` の絶対値を返します。

- もし `x` の数値が正または `0⁺` であれば、`x` を返します。
- そうでない場合は、`-1 * x` を返します。

## 形式文法

{{CSSSyntax}}

## 例

### 正の変数

`abs()` 関数を使用すると、値が常に正となることを保証できます。次の例では、`--font-size` という CSS カスタムプロパティが {{CSSxRef("font-size")}} の値として使用されています。このカスタムプロパティを `abs()` で囲むと、負の値が正に変換されます。

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### グラデーション方向の角度を制御する

`abs()` 関数を使用して、グラデーションの方向を制御することもできます。次の例では、角度が -45 度の場合、グラデーションは赤から青に変化します。`abs()` を使用して正の値にすると、グラデーションの変化は青から赤になります。

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### 後方互換性のための代替手段

CSS の `abs()` 関数に対応していない古いブラウザーでは、次のように CSS {{CSSxRef("max")}} 関数を使用することで同じ結果を得られます。

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

{{CSSxRef("max")}} 関数により、 `var(--lh)` と `-1 * var(--lh)` のうち大きい値が返されます。 `--lh` が正であれ負であれ、返される値は常に正であり、これは絶対値となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sign")}}
