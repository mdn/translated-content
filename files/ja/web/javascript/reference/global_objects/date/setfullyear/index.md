---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---

{{JSRef}}

**`setFullYear()`** メソッドは、地方時に基づき、指定された日付の「年」を設定します。新しいタイムスタンプを返します。

{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}

## 構文

```
dateObj.setFullYear(yearValue[, monthValue[, dateValue]])
```

### 引数

- `yearValue`
  - : 「年」の数字を指定する整数値。例えば、1995。
- `monthValue`
  - : 任意。1 月から 12 月を表す 0 から 11 までの間の整数値。
- `dateValue`
  - : 「日」を表す 1 から 31 までの間の整数値。`dateValue` 引数を指定した場合、`monthValue` も指定しなければなりません。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日付までの間のミリ秒単位の数値。

## 解説

`monthValue` 引数と `dateValue` 引数を指定しない場合、{{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} メソッドと {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setFullYear()` が他の引数と {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthValue` に 15 を指定した場合、年に 1 が加算 (`yearValue + 1`) され、月が 3 になります。

## 例

### setFullYear() の使用

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setfullyear', 'Date.prototype.setFullYear')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setFullYear")}}

## 関連情報

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
