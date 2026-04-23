---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

**`getYear()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「年」を返します。`getYear()` は完全な桁数の値を返さないため（いわゆる「2000 年問題」）、使用されなくなり、{{jsxref("Date/getFullYear", "getFullYear()")}} メソッドに置き換えられました。

## 構文

```js-nolint
getYear()
```

### 引数

なし。

### 返値

指定された日時の、地方時に基づく「年」から 1900 を引いた整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

- 2000 年以降の年について、`getYear()` が返す値は 100 以上です。例えば、 2026 年の場合、`getYear()` は 126 を返します。
- 1900 年から 1999 年について、`getYear()` が返す値は 0 から 99 の間です。例えば、 1976 年の場合、`getYear()` は 76 を返します。
- 1900 年以前の年について、`getYear()` が返す値は 0 未満です。例えば、 1800 年の場合、`getYear()` は -100 を返します。

このメソッドは、基本的に {{jsxref("Date/getFullYear", "getFullYear()")}} から 1900 を引いた値を返します。代わりに `getFullYear()` を使用してください。そうすることで、年が完全な形で指定されます。

## 例

### 1900 年から 1999 年の間の年

2 行目の文は、変数 `year` に 95 を代入します。

```js
const xmas = new Date("1995-12-25");
const year = xmas.getYear(); // 95 を返す
```

### 1999 年より後の年

2 行目の文は、変数 `year` に 100 を代入します。

```js
const xmas = new Date("2000-12-25");
const year = xmas.getYear(); // 100 を返す
```

### 1900 年より前の年

2 行目の文は、変数 `year` に -100 を代入します。

```js
const xmas = new Date("1800-12-25");
const year = xmas.getYear(); // -100 を返す
```

### 1900 年から 1999 年の間の年の設定または取得

3 行目の文は、変数 `year` に 1995 年を表す 95 を代入します。

```js
const xmas = new Date("2015-12-25");
xmas.setYear(95);
const year = xmas.getYear(); // 95 を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Date.prototype.getYear` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-date)
- [es-shims の `Date.prototype.getYear` のポリフィル](https://www.npmjs.com/package/date.prototype.getyear)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
