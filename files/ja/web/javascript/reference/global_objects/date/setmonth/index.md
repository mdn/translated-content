---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---

{{JSRef}}

**`setMonth()`** メソッドは、現在設定されている年に基づき、指定された日付の「月」を設定します。

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## 構文

```
dateObj.setMonth(monthValue[, dayValue])
```

### JavaScript 1.3 より前のバージョン

```
dateObj.setMonth(monthValue)
```

### 引数

- `monthValue`
  - : 0 から始まる整数値で、年の始まりからの月のオフセットを表します。そのため、0 は 1 月を表し、 11 は 12 月を表し、 12 は次の年の 1 月を表します。
- `dayValue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`dayValue` 引数を指定しなかった場合、{{jsxref("Date.prototype.getDate()", "getDate()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setMonth()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthValue` に 15 を指定した場合、年に 1 が加算され、月が 3 になります。

このメソッドの動作は、ある特定の月の日にちに影響を与えます。概念上は、その月の日数を、引数として与えた新しい月の初日に加え、新しい日付を返します。例えば、現在の値が 2016 年 8 月 31 日である場合、1 を引数として setMonth を呼び出すと 2016 年 3 月 2 日が返ってきます。これは、2016 年の 2 月が 29 日間しかないからです。

## 例

### setMonth() の使用

```js
var theBigDay = new Date();
theBigDay.setMonth(6);

//Watch out for end of month transitions
var endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setMonth")}}

## 関連情報

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
