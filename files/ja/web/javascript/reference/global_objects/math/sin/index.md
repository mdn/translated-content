---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef}}

**`Math.sin()`** 関数は、引数として与えた数の正弦 (サイン) を返します。

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## 構文

```
Math.sin(x)
```

### 引数

- `x`
  - : 数値 (ラジアンで指定)。

### 返値

指定された数値の正弦 (サイン) です。

## 解説

`Math.sin()` メソッドはラジアンで指定された角度の正弦 (サイン) を表す -1 から 1 までの範囲の数値を表します。

`sin()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.sin()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.sin() の使用

```js
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.sin")}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
