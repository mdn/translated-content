---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setUTCMonth()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「月」を設定します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// 予想される結果: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// 予想される結果: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// 予想される結果: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## 構文

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### 引数

- `monthValue`
  - : 1 月から 12 月を表す 0 から 11 までの間の整数値。
- `dateValue` {{optional_inline}}
  - : 「日」を表す 1 から 31 までの間の整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`dayValue` 引数を指定しない場合、{{jsxref("Date/getUTCDate", "getUTCDate()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setUTCMonth()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthValue` に 15 を指定した場合、年に 1 が加算され、月が 3 になります。

## 例

### setUTCMonth() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
