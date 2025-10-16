---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Date.UTC()`** 靜態方法接受與 {{jsxref("Date")}} 建構子相似的日期和時間元件參數，但將其視為 UTC。它會回傳自 1970 年 1 月 1 日 00:00:00 UTC 以來的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.UTC()")}}

```js interactive-example
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// 預期輸出：「Fri, 02 Feb 1996 03:04:05 GMT」

console.log(utcDate2.toUTCString());
// 預期輸出：「Sun, 31 Dec 1899 00:00:00 GMT」
```

## 語法

```js-nolint
Date.UTC(year)
Date.UTC(year, monthIndex)
Date.UTC(year, monthIndex, day)
Date.UTC(year, monthIndex, day, hours)
Date.UTC(year, monthIndex, day, hours, minutes)
Date.UTC(year, monthIndex, day, hours, minutes, seconds)
Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

### 參數

- `year`
  - : 代表年份的整數值。`0` 到 `99` 之間的值會對應到 `1900` 到 `1999` 年。所有其他值都是實際年份。請參見[範例](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#兩位數年份的解釋)。
- `monthIndex` {{optional_inline}}
  - : 代表月份的整數值，從 `0`（一月）到 `11`（十二月）。預設為 `0`。
- `day` {{optional_inline}}
  - : 代表月份中日期的整數值。預設為 `1`。
- `hours` {{optional_inline}}
  - : 代表一天中小時的整數值，介於 `0` 到 `23` 之間。預設為 `0`。
- `minutes` {{optional_inline}}
  - : 代表時間中分鐘部分的整數值。預設為 `0`。
- `seconds` {{optional_inline}}
  - : 代表時間中秒數部分的整數值。預設為 `0`。
- `milliseconds` {{optional_inline}}
  - : 代表時間中毫秒部分的整數值。預設為 `0`。

### 回傳值

一個數字，代表給定日期的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)。如果日期[無效](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 描述

介於 `0` 和 `99` 之間的年份會被轉換為 20 世紀的年份（`1900 + year`）。例如，`95` 會被轉換為 `1995` 年。

`UTC()` 方法與 {{jsxref("Date/Date", "Date()")}} 建構子有三點不同：

1. `Date.UTC()` 使用世界協調時間而非本地時間。
2. `Date.UTC()` 回傳一個數字的時間值，而不是建立一個 {{jsxref("Date")}} 物件。
3. 當傳入單一數字時，`Date.UTC()` 會將其解釋為年份，而不是時間戳。

如果參數超出預期範圍，`UTC()` 方法會更新其他參數以容納該值。例如，如果 `monthIndex` 使用 `15`，年份將會增加 1（`year + 1`），而月份將使用 `3`。

因為 `UTC()` 是 `Date` 的一個靜態方法，所以你總是使用 `Date.UTC()`，而不是在你建立的 `Date` 物件上作為方法使用。

## 範例

### 使用 Date.UTC()

以下陳述式會建立一個 {{jsxref("Date")}} 物件，其引數會被視為 UTC 而非本地時間：

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Date.UTC() 處理單一引數的行為

當傳入單一引數時，`Date.UTC()` 過去的行為不一致，因為實作僅與 {{jsxref("Date/Date", "Date()")}} 建構子保持行為一致，而後者不會將單一引數解釋為年份數字。現在要求實作將省略的 `monthIndex` 視為 `0`，而不是將其強制轉換為 `NaN`。

```js
Date.UTC(2017); // 1483228800000
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
