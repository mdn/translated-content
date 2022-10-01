---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
---

{{JSRef}}

**`setHours()`** メソッドは、地方時に基づき、指定された日付の「時」を設定し、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された {{jsxref("Date")}} インスタンスが表す時刻までの間のミリ秒単位の数値を返します。

{{EmbedInteractiveExample("pages/js/date-sethours.html")}}

## 構文

```
dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

### JavaScript 1.3 以前

```
dateObj.setHours(hoursValue)
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
var theBigDay = new Date();
theBigDay.setHours(7);
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setHours")}}

## 関連情報

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
