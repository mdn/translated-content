---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

{{JSRef}}

**`setTime()`** メソッドは、{{jsxref("Date")}} オブジェクトを協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からの経過時間をミリ秒単位で表す時刻に設定します。

{{EmbedInteractiveExample("pages/js/date-settime.html")}}

## 構文

```
dateObj.setTime(timeValue)
```

### 引数

- `timeValue`
  - : 協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からの経過時間をミリ秒単位で表す整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値 (更新された日時は、引数の値になります)。

## 解説

`setTime()` メソッドは、日付と時刻を別の {{jsxref("Date")}} オブジェクトに代入するのに役立ちます。

## 例

### setTime() の使用

```js
var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.settime', 'Date.prototype.setTime')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setTime")}}

## 関連情報

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
