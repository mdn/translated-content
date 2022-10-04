---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
---

{{JSRef}} {{deprecated_header}}

**`setYear()`** メソッドは、地方時に基づき、指定された日付の「年」を設定します。 `setYear()` は完全な桁数の値を設定しないため (いわゆる 2000 年問題)、使用されなくなり、{{jsxref("Date.prototype.setFullYear", "setFullYear()")}} メソッドに置き換えられました。

## 構文

```
dateObj.setYear(yearValue)
```

### 引数

- `yearValue`
  - : 整数値。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`yearValue` が 0 から 99 までの値の場合、`dateObj` の「年」には `1900 + yearValue` が設定されます。そうでない場合、`dateObj` の「年」には `yearValue` が設定されます。

## 例

### setYear() の使用

最初の 2 行は「年」を 1996 に設定します。3 行目は、「年」を 2000 に設定します。

```js
var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.setyear', 'Date.prototype.setYear')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setYear")}}

## 関連情報

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
