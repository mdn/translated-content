---
title: Number.isFinite()
short-title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.isFinite()`** は静的メソッドで、渡された値が有限数であるかどうかを判断します。すなわち、指定された値が数値型であり、その数値が正の無限大 ({{jsxref("Infinity")}})、負の無限大 (`Infinity`)、非数 ({{jsxref("NaN")}}) のどれでもないことをチェックします。

{{InteractiveExample("JavaScript デモ: Number.isFinite()")}}

```js interactive-example
console.log(Number.isFinite(1 / 0));
// 予想される結果: false

console.log(Number.isFinite(10 / 5));
// 予想される結果: true

console.log(Number.isFinite(0 / 0));
// 予想される結果: false
```

## 構文

```js-nolint
Number.isFinite(value)
```

### 引数

- `value`
  - : 有限数かどうかテストされる値。

### 返値

与えられた値が有限数かどうかを示す論理値です。

## 例

### isFinite() の使用

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Number.isFinite() とグローバルの isFinite() との違い

グローバルの {{jsxref("isFinite()")}} 関数と比較すると、このメソッドは最初に引数を数値に変換しません。すなわち、数値型の値で、それが有限数でもある場合のみ `true` を返し、非数については常に `false` を返すということです。

```js
isFinite("0"); // true; coerced to number 0
Number.isFinite("0"); // false
isFinite(null); // true; coerced to number 0
Number.isFinite(null); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number.isFinite` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims による `Number.isFinite` のポリフィル](https://www.npmjs.com/package/number.isfinite)
- {{jsxref("Number")}}
- {{jsxref("isFinite()")}}
