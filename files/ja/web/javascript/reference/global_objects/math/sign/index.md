---
title: Math.sign()
short-title: sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.sign()`** 静的メソッドは 1 または -1 を返し、引数として渡された値の符号を表します。入力値が 0 または -0 ならば、そのまま返します。

{{InteractiveExample("JavaScript デモ: Math.sign()")}}

```js interactive-example
console.log(Math.sign(3));
// 予想される結果: 1

console.log(Math.sign(-3));
// 予想される結果: -1

console.log(Math.sign(0));
// 予想される結果: 0

console.log(Math.sign("-3"));
// 予想される結果: -1
```

## 構文

```js-nolint
Math.sign(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた引数の符号を表す数値です。

- 引数が正の値の場合は、 `1` を返します。
- 引数が負の値の場合は、 `-1` を返します。
- 引数が正のゼロの場合は、 `0` を返します。
- 引数が負のゼロの場合は、 `-0` を返します。
- それ以外は {{jsxref("NaN")}} を返します。

## 解説

`sign()` は `Math` の静的メソッドなので、常に `Math.sign()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

## 例

### Math.sign() の使用

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.sign` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims による `Math.sign` のポリフィル](https://www.npmjs.com/package/math.sign)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
