---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Math.sin()`** 静的メソッドは、ラジアンの数値の正弦 (サイン) を返します。

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## 構文

```js-nolint
Math.sin(x)
```

### 引数

- `x`
  - : ラジアンで角度を表す数値です。

### 返値

`x` の正弦（サイン）で、 -1 と 1 の両端を含む範囲です。 `x` が {{jsxref("Infinity")}} であった場合は `-Infinity` となり、 {{jsxref("NaN")}} であった場合は {{jsxref("NaN")}} を返します。

## 解説

`sin()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.sin()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.sin() の使用

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
