---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
---

{{JSRef}}

**`Math.exp()`** 関数は `ex` (`x` は引数、 `e` は{{jsxref("Math.E", "オイラー数 (ネイピア定数とも)", "", 1)}}、自然対数の底) を返します。

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## 構文

```
Math.exp(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`ex` (`e` は{{jsxref("Math.E", "オイラー数", "", 1)}}、 `x` は引数) を表す数値です。

## 解説

`exp()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.exp()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.exp() の使用

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.exp")}}

## 関連情報

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
