---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setUTCFullYear()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の年を設定します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// 予想される結果: 1976

console.log(event.toUTCString());
// 予想される結果: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// 予想される結果: "Wed, 01 Jan 1975 02:15:30 GMT"
```

## 構文

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

### 引数

- `yearValue`
  - : 「年」の数字を指定する整数値。例えば、1995。
- `monthValue` {{optional_inline}}
  - : 1 月から 12 月を表す 0 から 11 までの間の整数値。
- `dateValue` {{optional_inline}}
  - : 「日」を表す 1 から 31 までの間の整数値。`dateValue` 引数を指定した場合、`monthValue` も指定しなければなりません。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`monthValue` 引数と `dateValue` 引数を指定しない場合、{{jsxref("Date/getUTCMonth", "getUTCMonth()")}} メソッドと {{jsxref("Date/getUTCDate", "getUTCDate()")}} メソッドから返される値が使われます。

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
