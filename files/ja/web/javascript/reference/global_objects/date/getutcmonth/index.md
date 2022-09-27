---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

**`getUTCMonth()`** メソッドは、協定世界時に基づき、指定された日付の「月」を表す 0 を基点とした値 (すなわち 0 が年の最初の月を示す) を返します。

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

## 構文

```
dateObj.getUTCMonth()
```

### 返値

協定世界時に基づき、与えられた日付の「月」に相当する 0 から 11 までの間の整数値。0 は 1 月、1 は 2 月、2 は 3 月を表します。

## 例

### getUTCMonth() の使用

次の例は、現在日時の「月」部を変数 `month` に代入します。

```js
var today = new Date();
var month = today.getUTCMonth();
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCMonth")}}

## 関連情報

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
