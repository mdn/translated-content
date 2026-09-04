---
title: Math.abs()
short-title: abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.abs()`** は静的メソッドで、数値の絶対値を返します。

{{InteractiveExample("JavaScript デモ: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// 予想される結果: 2

console.log(difference(5, 3));
// 予想される結果: 2

console.log(difference(1.23456, 7.89012));
// 予想される結果: 6.6555599999999995
```

## 構文

```js-nolint
Math.abs(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の絶対値です。`x` が負または `-0` の場合は、その反対の数である `-x` （非負の値）を返します。それ以外の場合、`x` 自体を返します。したがって、返値は常に正の値または `0` となります。

## 解説

`abs()` は `Math` オブジェクトの静的メソッドなので、 `Math` オブジェクトを生成してメソッドとして使用するのではなく、常に `Math.abs()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.abs() の使用

```js
Math.abs(-Infinity); // 無限大
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // 無限大
```

### 引数の変換

`Math.abs()` は[引数を数値に変換します](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。変換できない値は {{jsxref("NaN")}} となり、`Math.abs()` も {{jsxref("NaN")}} を返します。

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
