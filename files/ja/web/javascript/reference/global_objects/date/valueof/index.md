---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

**`valueOf()`** メソッドは、{{jsxref("Date")}} オブジェクトのプリミティブ値を返します。

{{EmbedInteractiveExample("pages/js/date-valueof.html")}}

## 構文

```
dateObj.valueOf()
```

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から指定された日時までの間のミリ秒単位の数値。

## 解説

`valueOf()` メソッドは、{{jsxref("Date")}} オブジェクトのプリミティブ値を数値型で返します。これは、1970 年 1 月 1 日 00:00:00 (UTC) からのミリ秒単位の数値です。

このメソッドは、{{jsxref("Date.prototype.getTime()")}} メソッドと機能的に同等です。

このメソッドは、JavaScript によって内部的に呼ばれ、コード内で明示的に呼ばれることはありません。

## 例

### valueOf() の使用

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf();      // myVar に -424713600000 を代入
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.valueOf")}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
