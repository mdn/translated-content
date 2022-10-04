---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---

{{JSRef}}

**`setUTCMilliseconds()`** メソッドは、協定世界時に基づき、指定された日時の「ミリ秒」を設定します。

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## 構文

```
dateObj.setUTCMilliseconds(millisecondsValue)
```

### 引数

- `millisecondsValue`
  - : 「ミリ秒」を表す 0 から 999 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

指定した値が期待される日付の範囲外の場合、それに応じて `setUTCMilliseconds()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`millisecondsValue` に 1100 を指定した場合、{{jsxref("Date")}} オブジェクトに格納された秒の数値に 1 が加算され、ミリ秒に 100 が使用されます。

## 例

### setUTCMilliseconds() の使用

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## 仕様書

| 仕様書                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setUTCMilliseconds")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
