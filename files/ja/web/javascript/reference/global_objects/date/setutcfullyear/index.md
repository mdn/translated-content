---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setUTCFullYear()`** メソッドは、協定世界時に基づき、指定された日付の年を設定します。

{{InteractiveExample("JavaScript Demo: Date.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
```

## 構文

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dayValue)
```

### 引数

- `yearValue`
  - : 「年」の数字を指定する整数値。例えば、1995。
- `monthValue`
  - : 任意。1 月から 12 月を表す 0 から 11 までの間の整数値。
- `dayValue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。`dayValue` 引数を指定した場合、`monthValue` も指定しなければなりません。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`monthValue` 引数と `dayValue` 引数を指定しない場合、{{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} メソッドと {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setUTCFullYear()` が他の引数と {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthValue` に 15 を指定した場合、年に 1 が加算 (`yearValue + 1`) され、月が 3 になります。

## 例

### setUTCFullYear() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
