---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

**`getMinutes()`** メソッドは、地方時に基づき、指定された日時の「分」を返します。

{{EmbedInteractiveExample("pages/js/date-getminutes.html","shorter")}}

## 構文

```
dateObj.getMinutes()
```

### 返値

地方時に基づき、与えた日時の「分」を表す 0 から 59 までの間の整数値。

## 例

### getMinutes() の使用

以下の 2 行目の文は、{{jsxref("Global_Objects/Date", "Date")}} オブジェクト `Xmas95` の値に基づき、変数 `minutes` に 15 という値を代入します。

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getMinutes")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
