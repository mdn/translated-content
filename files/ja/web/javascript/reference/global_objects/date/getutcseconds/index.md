---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

**`getUTCSeconds()`** メソッドは、協定世界時に基づき、指定された日時の「秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html", "shorter")}}

## 構文

```
dateObj.getUTCSeconds()
```

### 返値

協定世界時に基づき、与えられた日時の「秒」を表す 0 から 59 までの間の整数値。

## 例

### getUTCSeconds() の使用

次の例は、現在日時の「秒」部を変数 `seconds` に代入します。

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getUTCSeconds")}}

## 関連情報

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
