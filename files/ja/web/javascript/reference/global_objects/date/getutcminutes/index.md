---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

**`getUTCMinutes()`** メソッドは、協定世界時に基づき、指定された日時の「分」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## 構文

```
dateObj.getUTCMinutes()
```

### 返値

協定世界時に基づき、与えられた日時の「分」を表す 0 から 59 までの間の整数値。

## 例

### getUTCMinutes() の使用

次の例は、現在時刻の「分」部を変数 `minutes` に代入します。

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCMinutes")}}

## 関連情報

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
