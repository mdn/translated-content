---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef}}

**`getUTCDay()`** メソッドは、協定世界時に基づき、指定された日時の「曜日」を返します。0 は日曜日を表します。

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## 構文

```
dateObj.getUTCDay()
```

### 返値

協定世界時に基づき、与えられた日付の「曜日」に相当する整数値。0 は日曜日、1 は月曜日、2 は火曜日を表します。

## 例

### getUTCDay() の使用

次の例は、現在日時の「曜日」部を変数 `weekday` に代入します。

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCDay")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
