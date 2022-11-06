---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
---

{{JSRef}}

**`Math.max()`** 関数は、入力引数として与えられた 0 個以上の数値のうち最大の数を返します。

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## 構文

```
Math.max([value1[, value2[, ...]]])
```

### 引数

- `value1, value2, ...`
  - : 数値です。

### 返値

与えられた数のうちの最大の値です。何れかの引数が `NaN` であったり、数値に変換することができなかった場合は {{jsxref("NaN")}} を返します。

## 解説

`Math` はコンストラクターではないので、 `max()` は `Math` の静的メソッドです (常に `Math` インスタンスのメソッドとしてではなく、 `Math.min()` として使用してください)。

\-{{jsxref("Infinity")}} は他のすべての数値よりも小さいため初期の比較対象となっており、そのため引数が与えられなかった場合は -{{jsxref("Infinity")}} が返されます。

何れかの引数が `NaN` であったり、数値に変換することができなかった場合、結果は {{jsxref("NaN")}} になります。

## 例

### Math.max() の使用

```js
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

### 配列の最大値の取得

{{jsxref("Array.prototype.reduce", "Array.reduce()")}} を使用して、数値の配列の中にある最大値の要素を、それぞれの値を比較して探し出すことができます。

```js
var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
```

次の関数では {{jsxref("Function.prototype.apply()")}} を使用して配列の最大値を取得します。 `getMaxOfArray([1, 2, 3])` は `Math.max(1, 2, 3)` と同等ですが、 `getMaxOfArray()` はプログラム的に構築された配列に使用することができます。これは比較的要素が少ない配列に対して使用してください。

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

新しい[スプレッド演算子](/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator)で、 `apply` によって配列の最大値を得る方法をより短く書くことができます。

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

しかし、スプレッド構文の (`...`) と `apply` のどちらも、配列に膨大な要素があった場合は、配列の要素を関数の引数として渡そうとするため、失敗したり、誤った結果を返したりすることがあります。詳しくは [apply をビルトイン関数と共に利用する](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Using_apply_and_built-in_functions)を参照してください。 `reduce` の方法はこの問題が発生しません。

## 仕様書

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-math.max', 'Math.max')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.max")}}

## 関連情報

- {{jsxref("Math.min()")}}
