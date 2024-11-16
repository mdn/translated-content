---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: dc90e6a09235136e0e5113e1fab2c11053e467d7
---

{{JSRef}}

**`Math.abs()`** は静的メソッドで、数値の絶対値を返します。

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

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

### Math.abs() の動作

空のオブジェクト、複数のメンバーを持つ配列、数値でない文字列、 {{jsxref("undefined")}}、 空の変数を渡すと、 {{jsxref("NaN")}} を返します。 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を渡すと空文字列を返し、空の配列は 0 を返します。

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
