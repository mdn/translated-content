---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
---

{{JSRef}}

**`Math.expm1()`** 関数は `ex - 1` (`x` は引数、 {{jsxref("Math.E", "e", "", 1)}} は自然対数の底) を返します。

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## 構文

```
Math.expm1(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`ex - 1` (`e` は{{jsxref("Math.E", "オイラー数", "", 1)}}、 `x` は引数) を表す数値です。

## 解説

`expm1()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.expm1()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.expm1() の使用

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
```

## ポリフィル

これは {{jsxref("Math.exp()")}} 関数の助けを借りてエミュレートすることができます。

```js
Math.expm1 =
  Math.expm1 ||
  function (x) {
    return Math.exp(x) - 1;
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.expm1")}}

## 関連情報

- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
