---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
---

{{JSRef}}

**`setDate()`** メソッドは、現在設定されている月から始まる {{jsxref("Date")}} オブジェクトの「日」を設定します。

{{EmbedInteractiveExample("pages/js/date-setdate.html")}}

## 構文

```
dateObj.setDate(dayValue)
```

### 引数

- `dayValue`
  - : 「日」を表す整数の値です。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から与えられた日付までの間のミリ秒単位の数値 ({{jsxref("Date")}} オブジェクトも適切に変更されます)。

## 解説

`dayValue` がその月の日付の範囲外の値の場合、それに応じて `setDate()` が {{jsxref("Date")}} オブジェクトを更新します。

例えば、`dayValue` に 0 を与えた場合、日付は前月の最終日に設定されます。

`dayValue` に負の数を指定すると、前月の最終日から逆算して日付が設定されます。 -1 の場合、日付は前月の最終日の 1 日前に設定されます。

## 例

### setDate() の使用

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07 (7th of July 1962)
theBigDay.setDate(24);  // 1962-07-24 (24th of July 1962)
theBigDay.setDate(32);  // 1962-08-01 (1st of August 1962)
theBigDay.setDate(22);  // 1962-08-22 (22th of August 1962)
theBigDay.setDate(0);   // 1962-07-31 (31th of July 1962)
theBigDay.setDate(98);  // 1962-10-06 (6th of October 1962)
theBigDay.setDate(-50); // 1962-08-11 (11th of August 1962)
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.setdate', 'Date.prototype.setDate')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.setDate")}}

## 関連情報

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
