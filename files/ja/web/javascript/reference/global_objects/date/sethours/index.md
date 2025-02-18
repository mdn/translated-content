---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setHours()`** メソッドは、地方時に基づき、指定された日付の「時」を設定し、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された {{jsxref("Date")}} インスタンスが表す時刻までの間のミリ秒単位の数値を返します。

{{InteractiveExample("JavaScript Demo: Date.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
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
  - : 理想的には、「時」を表す 0 から 23 までの間の整数値です。23 よりも大きな値が指定された場合は、日時は追加の時間数だけ増加します。
- `minutesValue`
  - : 任意。理想的には、「分」を表す 0 から 59 までの間の整数値です。59 よりも大きな値が指定された場合は、日時は追加の分数だけ増加します。
- `secondsValue`
  - : 任意。理想的には、「秒」を表す 0 から 59 までの間の整数値です。59 より大きな値が指定された場合は、日時は追加の秒数だけ増加します。`secondsValue` 引数を指定した場合は、`minutesValue` も指定しなければなりません。
- `msValue`
  - : 任意。理想的には、ミリ秒を表す 0 から 999 までの間の整数値です。999 よりも大きな値が指定された場合は、日時は追加のミリ秒数だけ増加します。`msValue` 引数を指定した場合、`minutesValue` と `secondsValue` も指定しなければなりません。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`minutesValue`, `secondsValue` および `msValue` 引数を指定しなかった場合、{{jsxref("Date.prototype.getMinutes()", "getMinutes()")}} と {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}}、{{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} メソッドから返される値が使われます。

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
