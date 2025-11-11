---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCFullYear()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「年」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// 予想される結果: 1975

console.log(date2.getUTCFullYear());
// 予想される結果: 1976
```

## 構文

```js-nolint
getUTCFullYear()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時に基づく年を表す整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

{{jsxref("Date/getYear", "getYear()")}} とは異なり、 `getUTCFullYear()` が返す値は絶対数値です。1000 年から 9999 年の日付の場合、 `getFullYear()` は 4 桁の数値（例えば 1995）を返します。 2000 年以降の年に対応していることを確認するには、この関数を使用してください。

## 例

### getUTCFullYear() の使用

次の例は、現在の年を表す 4 桁の値を変数 `year` に代入します。

```js
const today = new Date();
const year = today.getUTCFullYear();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
