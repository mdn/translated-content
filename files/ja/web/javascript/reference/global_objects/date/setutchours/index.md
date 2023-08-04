---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`setUTCHours()`** メソッドは、協定世界時に基づき、指定された日付の「時」を設定し、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された {{jsxref("Date")}} インスタンスが表す時刻までの間のミリ秒単位の数値を返します。

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

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
- `minutesValue`
  - : 任意。「分」を表す 0 から 59 までの間の整数値。
- `secondsValue`
  - : 任意。「秒」を表す 0 から 59 までの間の整数値。`secondsValue` 引数を指定した場合、`minutesValue` も指定しなければなりません。
- `msValue`
  - : 任意。ミリ秒を表す 0 から 999 までの間の整数値。`msValue` 引数を指定した場合、`minutesValue` と `secondsValue` も指定しなければなりません。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`minutesValue`, `secondsValue` および `msValue` 引数を指定しない場合、{{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}} と {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}、{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setUTCHours()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsValue` に 100 を指定した場合、分に 1 が加算 (`minutesValue + 1`) され、秒が 40 になります。

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
