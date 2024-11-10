---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Math.cos()`** は静的メソッドで、ラジアンの数値の余弦（コサイン）を返します。

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## 構文

```js-nolint
Math.cos(x)
```

### 引数

- `x`
  - : 余弦を返すラジアンの角度。

### 返値

`x` の余弦で、-1 から 1 まで（両端を含む）です。 `x` が{{jsxref("Infinity")}}、`-Infinity`、または {{jsxref("NaN")}} の場合、 {{jsxref("NaN")}} を返します。

## 解説

`cos()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.cos()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.cos() の使用

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
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
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
