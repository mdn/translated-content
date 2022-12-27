---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef}}

**`getHours()`** メソッドは、地方時に基づき、指定された日時の「時」を返します。

{{EmbedInteractiveExample("pages/js/date-gethours.html","shorter")}}

## 構文

```
dateObj.getHours()
```

### 返値

地方時に基づき、与えた日時の「時」を表す 0 から 23 の間の整数値。

## 例

### getHours() の使用

以下の 2 行目の文は、 {{jsxref("Global_Objects/Date", "Date")}} オブジェクト `Xmas95` の値に基づき、23 という値を変数 `hours` に代入します。

```js
let Xmas95 = new Date('December 25, 1995 23:15:30');
let hours = Xmas95.getHours();

console.log(hours); // 23
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.getHours")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
