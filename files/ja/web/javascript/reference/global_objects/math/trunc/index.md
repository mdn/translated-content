---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
---

{{JSRef}}

**`Math.trunc()`** 関数は、引数として与えた数の小数部の桁を取り除くことによって整数部を返します。

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## 構文

```
Math.trunc(x)
```

### 引数

- `x`
  - : 数値。

### 返値

The integer part of the given number.

## 解説

他の 3 つの `Math` メソッド、 {{jsxref("Math.floor()")}}、 {{jsxref("Math.ceil()")}}、 {{jsxref("Math.round()")}} とは異なり、 `Math.trunc()` の動作は非常にシンプルで分かりやすいです。引数が正の数または負の数であるかに関わらず、ただ小数点とそれ以降にある数字を*切り捨て*ます。

このメソッドに渡された引数は暗黙のうちに数値型に変換されることに注意して下さい。

`trunc()` は `Math` オブジェクトの静的なメソッドなので、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、`Math.trunc()` として使用してください (`Math` オブジェクトにはコンストラクタがありません)。

## ポリフィル

```js
if (!Math.trunc) {
  Math.trunc = function (v) {
    v = +v;
    if (!isFinite(v)) return v;

    return v - (v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);

    // returns:
    //  0        ->  0
    // -0        -> -0
    //  0.2      ->  0
    // -0.2      -> -0
    //  0.7      ->  0
    // -0.7      -> -0
    //  Infinity ->  Infinity
    // -Infinity -> -Infinity
    //  NaN      ->  NaN
    //  null     ->  0
  };
}
```

または

```js
if (!Math.trunc) {
  Math.trunc = function (v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  };
}
```

## 例

### Math.trunc() の使用

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.trunc")}}

## 関連情報

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
