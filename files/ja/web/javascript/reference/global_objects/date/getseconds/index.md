---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef}}

**`getSeconds()`** メソッドは、地方時に基づき、指定した日時の「秒」を返します。

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## 構文

```
dateObj.getSeconds()
```

### 返値

地方時に基づき、与えた日付の「秒」を表す 0 から 59 までの間の整数値。

## 例

### getSeconds() の使用

以下の 2 行目の文は、{{jsxref("Global_Objects/Date", "Date")}} オブジェクト `Xmas95` の値に基づき、変数 `seconds` に 30 という値を代入します。

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getSeconds")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
