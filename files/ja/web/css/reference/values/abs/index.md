---
title: abs()
slug: Web/CSS/Reference/Values/abs
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`abs()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、引数の絶対値を同じ型で返します。

## 構文

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### 引数

`abs(x)` 関数は、引数を 1 つだけ受け取ります。

- `<calc-sum>`
  - : {{cssxref("number")}}、{{cssxref("dimension")}}、{{cssxref("percentage")}}、{{cssxref("calc-keyword")}} に解決する式または計算です。

### 返値

`<calc-sum>` の絶対値を返します。

- もし `<calc-sum>` の数値が正または `0⁺` であれば、`<calc-sum>` を返します。
- そうでない場合は、`-1 * <calc-sum>` を返します。

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

CSS の `abs()` 関数に対応していないブラウザーでは、CSS の {{CSSxRef("max")}} 関数を使用することで同じ結果を得られます。

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
