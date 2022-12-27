---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}

**`getUTCHours()`** メソッドは、協定世界時に基づき、指定された日時の「時」を返します。

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## 構文

```
dateObj.getUTCHours()
```

### 返値

協定世界時に基づき、与えられた日時の「時」を表す 0 から 23 までの間の整数値。

## 例

### getUTCHours() の使用

次の例は、現在時刻の「時」部を変数 `hours` に代入します。

```js
var today = new Date();
var hours = today.getUTCHours();
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCHours")}}

## 関連情報

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
