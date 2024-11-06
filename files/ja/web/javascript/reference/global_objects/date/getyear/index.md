---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}} {{deprecated_header}}

**`getYear()`** メソッドは、地方時に基づき、指定された日付の「年」を返します。`getYear()` は完全な桁数の値を返さないため（いわゆる「2000 年問題」）、使用されなくなり、{{jsxref("Date.prototype.getFullYear", "getFullYear()")}} メソッドに置き換えられました。

## 構文

```js-nolint
getYear()
```

### 返値

地方時に基づき、与えられた日付の「年」を表す数値から 1900 を引いたものを返します。

## 解説

- 2000 年以降の年について、`getYear()` が返す値は 100 以上です。例えば、 2026 年の場合、`getYear()` は 126 を返します。
- 1900 年から 1999 年について、`getYear()` が返す値は 0 から 99 の間です。例えば、 1976 年の場合、`getYear()` は 76 を返します。
- 1900 年以前の年について、`getYear()` が返す値は 0 未満です。例えば、 1800 年の場合、`getYear()` は -100 を返します。

2000 年以前と以降に対処するため、`getYear()` の代わりに、完全な桁数の値を返す {{jsxref("Date.prototype.getFullYear", "getFullYear()")}} を使用してください。

## 後方互換性

### JavaScript 1.2 以前の動作

`getYear()` メソッドは、2 桁または 4 桁の年を返します。

- 1900 年から 1999 年の間の場合、`getYear()` が返す値は、year - 1900 です。例えば 1976 年の場合、戻り値は 76 です。
- 1900 年より前または 1999 年より後の場合、`getYear()` が返す値は 4 桁の年です。例えば、1856 年の場合、戻り値は 1856 です。2026 年の場合、戻り値は 2026 です。

## 例

### 1900 年から 1999 年の間の年

2 行目の文は、変数 `year` に 95 を代入します。

```js
const xmas = new Date("December 25, 1995 23:15:00");
const year = xmas.getYear(); // 95 を返す
```

### 1999 年より後の年

2 行目の文は、変数 `year` に 100 を代入します。

```js
const xmas = new Date("December 25, 2000 23:15:00");
const year = xmas.getYear(); // 100 を返す
```

### 1900 年より前の年

2 行目の文は、変数 `year` に -100 を代入します。

```js
const xmas = new Date("December 25, 1800 23:15:00");
const year = xmas.getYear(); // -100 を返す
```

### 1900 年から 1999 年の間の年の設定または取得

3 行目の文は、変数 `year` に 1995 年を表す 95 を代入します。

```js
const xmas = new Date("December 25, 2015 23:15:00");
xmas.setYear(95);
const year = xmas.getYear(); // 95 を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Date.prototype.getYear` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
