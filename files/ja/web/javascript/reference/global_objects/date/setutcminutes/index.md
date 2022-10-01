---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
---

{{JSRef}}

**`setUTCMinutes()`** メソッドは、協定世界時に基づき、指定された日時の「分」を設定します。

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

## 構文

```
dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])
```

### 引数

- `minutesValue`
  - : 「分」を表す 0 から 59 までの間の整数値。
- `secondsValue`
  - : 任意。「秒」を表す 0 から 59 までの間の整数値。`secondsValue` 引数を指定した場合、`minutesValue` も指定しなければなりません。
- `msValue`
  - : 任意。ミリ秒を表す 0 から 999 までの間の整数値。`msValue` 引数を指定した場合、`minutesValue` と `secondsValue` も指定しなければなりません。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`secondsValue` および `msValue` 引数を指定しない場合、{{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} と {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setUTCMinutes()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsValue` に 100 を指定した場合、分に 1 が加算 (`minutesValue + 1`) され、秒が 40 になります。

## 例

### setUTCMinutes() の使用

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcminutes', 'Date.prototype.setUTCMinutes')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setUTCMinutes")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
