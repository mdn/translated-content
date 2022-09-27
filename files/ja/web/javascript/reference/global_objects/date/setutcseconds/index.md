---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

**`setUTCSeconds()`** メソッドは、協定世界時に基づき、指定された日時の「秒」を設定します。

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## 構文

```
dateObj.setUTCSeconds(secondsValue[, msValue])
```

### 引数

- `secondsValue`
  - : 「秒」を表す 0 から 59 までの間の整数値。
- `msValue`
  - : 任意。ミリ秒を表す 0 から 999 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`msValue` 引数を指定しない場合、{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setUTCSeconds()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsValue` に 100 を指定した場合、分に 1 加算され、秒が 40 になります。

## 例

### setUTCSeconds() の使用

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setUTCSeconds")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
