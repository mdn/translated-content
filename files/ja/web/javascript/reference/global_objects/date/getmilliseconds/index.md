---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

**`getMilliseconds()`** メソッドは、ローカル時間に基づき、指定された日時の「ミリ秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html","shorter")}}

## 構文

```
dateObj.getMilliseconds()
```

### 返値

ローカル時間に基づき、指定された日時の「ミリ秒」を表す 0 から 999 までの間の数値。

## 例

### getMilliseconds() の使用

次の例は、現在時刻のミリ秒部を変数 `milliseconds` に代入します。

```js
var today = new Date();
var milliseconds = today.getMilliseconds();
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getMilliseconds")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
