---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.isInteger()`** は静的メソッドで、渡された値が整数かどうかを判定します。

{{InteractiveExample("JavaScript Demo: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```

## 構文

```js-nolint
Number.isInteger(value)
```

### 引数

- `value`
  - : 整数かどうかを判定される値です。

### 返値

論理値で、渡された値が整数であれば `true` です。それ以外の場合は `false` です。

## 解説

指定された値が整数の場合は `true` を返し、そうでない場合は `false` を返します。{{jsxref("NaN")}} もしくは {{jsxref("Infinity")}} の場合も `false` を返します。このメソッドは整数として表すことができる浮動小数点数も `true` を返します。値が数値でない場合は常に `false` を返します。

数値リテラルの中には、ECMAScript の浮動小数点数エンコーディング (IEEE-754) の精度制限により、整数でないように見えても実は整数を表しているものがあることに注意してください。例えば、`5.0000000000000001` は `5` と `1e-16` だけ異なりますが、これは小さすぎて表しきれません。（参考までに、[`Number.EPSILON`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) は、1 と 1 より大きい次の表現可能な浮動小数点数の間の距離を格納しており、それはおよそ `2.22e-16` です）。したがって、`5.0000000000000001` は `5` と同じエンコーディングで表されますので、`Number.isInteger(5.000000000001)` は `true` を返すことになります。

同様の意味で、[`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) の大きさ前後の数値は精度を失い、整数でなくても `Number.isInteger` が `true`を返すようになる。（実際の閾値は、10 進数を表すのに何ビット必要かによって変わります。例えば、 `Number.isInteger(450000000000.1)` は `true` ですが、 `Number.isInteger(450000000000.5)` は `false` です。）

## 例

### isInteger の使用

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true（精度が落ちるため）
Number.isInteger(4500000000000000.1); // true（精度が落ちるため）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.isInteger` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- このメソッドが所属している {{jsxref("Number")}} オブジェクト。
