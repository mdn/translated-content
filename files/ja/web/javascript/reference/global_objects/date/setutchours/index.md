---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setUTCHours()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、この日時の時、分、秒、ミリ秒を変更します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setUTCHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// 予想される結果: "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event.getUTCHours());
// 予想される結果: 2

event.setUTCHours(23);

console.log(event.toUTCString());
// 予想される結果: "Wed, 20 Aug 1975 23:15:30 GMT"
```

## 構文

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 引数

- `hoursValue`
  - : 「時」を表す 0 から 23 までの間の整数値。
- `minutesValue` {{optional_inline}}
  - : 「分」を表す 0 から 59 までの間の整数値。
- `secondsValue` {{optional_inline}}
  - : 「秒」を表す 0 から 59 までの間の整数値。`secondsValue` 引数を指定した場合、`minutesValue` も指定しなければなりません。
- `msValue` {{optional_inline}}
  - : ミリ秒を表す 0 から 999 までの間の整数値。`msValue` 引数を指定した場合、`minutesValue` と `secondsValue` も指定しなければなりません。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`minutesValue`, `secondsValue` および `msValue` 引数を指定しない場合、{{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}} と {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}}、{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setUTCHours()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。
例えば、`secondsValue` に 100 を指定した場合、分に 1 が加算 (`minutesValue + 1`) され、秒が 40 になります。

## 例

### setUTCHours() の使用

```js
const theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
