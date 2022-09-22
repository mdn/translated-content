---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

**`getUTCDate()`** メソッドは、協定世界時に基づき、指定された日時の月内の日 (1 ～ 31) を返します。

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## 構文

```js
dateObj.getUTCDate()
```

### 返値

協定世界時に基づき、与えられた日付の「日」を表す 1 から 31 までの整数値です。

## 例

### getUTCDate() の使用

次の例は、現在日時の「日」の部分を変数 `dayOfMonth` に代入します。

```js
var today = new Date();
var dayOfMonth = today.getUTCDate();
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCDate")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
