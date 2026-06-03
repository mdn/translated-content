---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`setFullYear()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、時、分、秒、ミリ秒を変更します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// 予想される結果: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// メモ: 時間帯は変化します

event.setHours(20, 21, 22);

console.log(event);
// 予想される結果: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
```

## 構文

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 引数

- `hoursValue`
  - : 「時」を表す 0 から 23 までの間の整数値です。
- `minutesValue` {{optional_inline}}
  - : 「分」を表す 0 から 59 までの間の整数値です。
- `secondsValue` {{optional_inline}}
  - : 「秒」を表す 0 から 59 までの間の整数値です。 `secondsValue` 引数を指定した場合は、 `minutesValue` も指定しなければなりません。
- `msValue`
  - : ミリ秒を表す 0 から 999 までの間の整数値です。999 よりも大きな値が指定された場合は、日時は追加のミリ秒数だけ増加します。`msValue` 引数を指定した場合、 `minutesValue` と `secondsValue` も指定しなければなりません。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`minutesValue`, `secondsValue` および `msValue` 引数を指定しなかった場合、{{jsxref("Date/getMinutes", "getMinutes()")}}、{{jsxref("Date/getSeconds", "getSeconds()")}}、{{jsxref("Date/getMilliseconds", "getMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setHours()` が他の引数と {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsValue` に 100 を指定した場合、分に 1 加算 (`minutesValue + 1`) され、秒が 40 になります。

## 例

### setHours() の使用

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
