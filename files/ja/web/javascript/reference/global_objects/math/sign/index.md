---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
---

{{JSRef}}

**`Math.sign()`** 関数は、引数として渡された数値の符号が**正**か**負**かを表す +/- 1 を返します。 `Math.sign()` に渡された数が 0 であれば、 +/- 0 を返します。なお、数値が正である場合、明示的な (+) は返され**ません**。

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## 構文

```
Math.sign(x)
```

### 引数

- `x`
  - : 数値です。引数が `number` ではない場合は、暗黙に変換されます。

### 返値

与えられた引数の符号を表す数値です。

- 引数が正の値の場合は、 `1` を返します。
- 引数が負の値の場合は、 `-1` を返します。
- 引数が正のゼロの場合は、 `0` を返します。
- 引数が負のゼロの場合は、 `-0` を返します。
- それ以外は {{jsxref("NaN")}} を返します。

## 解説

`sign()` は `Math` の静的メソッドなので、常に `Math.sign()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

## ポリフィル

```js
if (!Math.sign) {
  Math.sign = function (x) {
    // If x is NaN, the result is NaN.
    // If x is -0, the result is -0.
    // If x is +0, the result is +0.
    // If x is negative and not -0, the result is -1.
    // If x is positive and not +0, the result is +1.
    return (x > 0) - (x < 0) || +x;
    // A more aesthetic pseudo-representation:
    //
    // ( (x > 0) ? 1 : 0 )  // if x is positive, then positive one
    //          +           // else (because you can't be both - and +)
    // ( (x < 0) ? -1 : 0 ) // if x is negative, then negative one
    //         ||           // if x is 0, -0, or NaN, or not a number,
    //         +x           // then the result will be x, (or) if x is
    //                      // not a number, then x converts to number
  };
}
```

上記のポリフィルでは `(x > 0)` と `(x < 0)` の数値を互いに減算することで、真偽値から数値型へ強制的に型変換されるため、追加の型強制は必要ありません。

## 例

### Math.sign() の使用

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.sign")}}

## 関連情報

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
