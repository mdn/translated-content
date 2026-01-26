---
title: Math.floor()
short-title: floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.floor()`** は静的メソッドで、与えられた数値以下の最大の整数を返します。

{{InteractiveExample("JavaScript デモ: Math.floor()")}}

```js interactive-example
console.log(Math.floor(5.95));
// 予想される結果: 5

console.log(Math.floor(5.05));
// 予想される結果: 5

console.log(Math.floor(5));
// 予想される結果: 5

console.log(Math.floor(-5.05));
// 予想される結果: -6
```

## 構文

```js-nolint
Math.floor(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` 以下の最大の整数です。これは [`-Math.ceil(-x)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) と同じ値です。

## 解説

`floor()` は `Math` オブジェクトの静的なメソッドなので、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、`Math.floor()` として使用するようにしてください (`Math` のコンストラクターはありません)。

## 例

### Math.floor() の使用

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### 十進数の丸め

この例では、 `decimalAdjust()` というメソッドを実装します。これは、`Math.floor()`、{{jsxref("Math.ceil()")}}、{{jsxref("Math.round()")}} の拡張メソッドです。
`Math` の 3 つの関数は常に数値を小数点以下の桁数に調整しますが、 `decimalAdjust` は `exp` 引数を受け入れ、数値を調整する小数点以下の桁数を指定します。例えば、 `-1` は小数点以下 1 桁（"× 10<sup>-1</sup>" のように）を意味します。さらに、`round`、`floor`、`ceil` のいずれかの調整方法を `type` 引数により選択できます。

これは、数値に 10 の累乗を乗算し、その結果を最も近い整数に丸め、さらに 10 の累乗で割ることで行います。より精度を維持するために、Number の [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) メソッドを利用します。このメソッドは、大きな数値や小さな数値を科学記法（`6.02e23` など）で表します。

```js
/**
 * 数値を指定された桁数に調整します。
 *
 * @param {"round" | "floor" | "ceil"} type 調整する型。
 * @param {number} value 数値。
 * @param {number} exp 指数する（補正の底の10の対数）。
 * @returns {number} 補正値。
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "小数点調整の型は、'round'、'floor'、'ceil' のいずれかである必要があります。",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${Number(newExponent) + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Ceil
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
