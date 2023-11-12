---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`Number.isFinite()`** は静的メソッドで、渡された値が有限数であるかどうかを判断します。すなわち、指定された値が数値型であり、その数値が正の無限大 ({{jsxref("Infinity")}})、負の無限大 (`Infinity`)、非数 ({{jsxref("NaN")}}) のどれでもないことをチェックします。

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

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

グローバルの {{jsxref("isFinite", "isFinite()")}} 関数と比較すると、このメソッドは最初に引数を数値に変換しません。すなわち、数値型の値で、それが有限数でもある場合のみ `true` を返し、非数については常に `false` を返すということです。

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
- このメソッドが所属している {{jsxref("Number")}} オブジェクト
- グローバル関数 {{jsxref("isFinite")}}
