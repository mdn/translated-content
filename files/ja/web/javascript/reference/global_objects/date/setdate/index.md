---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
l10n:
  sourceCommit: e1f571eced916f60ca387ecb562271f6235beb5c
---

{{JSRef}}

**`setDate()`** メソッドは、現在設定されている月から始まる {{jsxref("Date")}} オブジェクトの「日」を設定します。

指定された日時の月日を UTC 時間に基づいて変更するには、代わりに {{jsxref("Date.prototype.setUTCDate()", "setUTCDate()")}} メソッドを使用してください。

{{EmbedInteractiveExample("pages/js/date-setdate.html")}}

## 構文

```js-nolint
setDate(dayValue)
```

### 引数

- `dayValue`
  - : 「日」を表す整数の値です。

### 返値

協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から与えられた日付までの間のミリ秒単位の数値（{{jsxref("Date")}} オブジェクトも適切に変更されます）。

## 解説

`dayValue` がその月の日付の範囲外の値の場合、それに応じて `setDate()` が {{jsxref("Date")}} オブジェクトを更新します。

例えば、 `dayValue` に 0 が指定された場合、日付は前の月の最終日に設定されます。もし `dayValue` に 40 を使用した場合、 {{jsxref("Date")}} オブジェクトに格納された月が 6 月であれば、日は 10 に変更され、月は 7 月に増加します。

もし `dayValue` に負の数が指定された場合、前月の最終日から逆算して日付が設定されます。 -1 を指定すると、前月の最終日の 1 日前に日付が設定されます。

## 例

### setDate() の使用

```js
const theBigDay = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
const theBigDay2 = new Date(theBigDay).setDate(24); // 1962-07-24 (24th of July 1962)
const theBigDay3 = new Date(theBigDay).setDate(32); // 1962-08-01 (1st of August 1962)
const theBigDay4 = new Date(theBigDay).setDate(22); // 1962-07-22 (22nd of July 1962)
const theBigDay5 = new Date(theBigDay).setDate(0); // 1962-06-30 (30th of June 1962)
const theBigDay6 = new Date(theBigDay).setDate(98); // 1962-10-06 (6th of October 1962)
const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.Date()", "Date()")}}
- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
