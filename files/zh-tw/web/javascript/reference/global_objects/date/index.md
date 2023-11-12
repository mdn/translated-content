---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
---

{{JSRef}}

建立一個 JavaScript **`Date`** 物件來指向某一個時間點。Date 物件是基於世界標準時間（UTC） 1970 年 1 月 1 日開始的毫秒數值來儲存時間。

## 語法

```plain
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

> **備註：** JavaScript `Date` 物件只能由以 Date 作為建構子來產生，如果把 Date 作為一般的函數來呼叫（省略掉 {{jsxref("Operators/new", "new")}} 運算子）將會得到一個字串而非 Date 物件；與其它 JavaScript 物件不同，它並沒有物件實體語法（例如：以中刮號 \[ ] 表示陣列的宣告方式）。

### 參數

> **備註：** 當傳入超過一個參數到 Date 建構子，若參數值超過它的合理範圍（例如：傳數值 13 到月份，或傳數值 70 給分鐘），相鄰的參數值將會被調整。例如： `new Date(2013, 13, 1)` 將等同於 `new Date(2014, 1, 1)` 都會建立代表 `2014-02-01` 的物件（注意月份值由 0 開始）。同樣的， `new Date(2013, 2, 1, 0, 70)` 與 `new Date(2013, 2, 1, 1, 10)` 一樣會建立代表 `2013-03-01T01:10:00` 的 Date 物件。

> **備註：** 當傳入超過一個參數到 Date 建構子，所指定的參數值會視為本地時間。如果希望指定的值為世界標準時間（UTC），則應使用 `new Date({{jsxref("Date.UTC()", "Date.UTC(...)")}})` 語法，傳入一樣格式的參數。

- `value`
  - : 自世界標準時間（UTC） 1970 年 1 月 1 日 00:00:00 開始的毫秒整數（Integer）值（Unix 紀元；但要注意到大多 Unix 時間戳記是以秒而非毫秒為單位）。
- `dateString`

  - : 表示時間日期的字串。這個字串應該要能被 {{jsxref("Date.parse()")}} 方法解析（符合 [IETF-compliant RFC 2822 timestamps](http://tools.ietf.org/html/rfc2822#page-14) 及 [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) 格式要求).

    > **備註：** 由於各家瀏覽器有所不同且具有差異性，因此非常不鼓勵使用 Date 建構子（或 `Date.parse` 方法，它們是同等的）來解析時間日期字串。

- `year`
  - : 表示年份的整數。當數值落在 0 到 99 之間，表示 1900 到 1999 之間的年份。參考[下面的範例](#兩位數的年份對應到_1900_-_1999).
- `month`
  - : 表示月份的整數。由 0 開始（一月）到 11 （十二月）。
- `day`
  - : 選用。表示月份中第幾天的整數值。
- `hour`
  - : 選用。表示小時數的整數值。
- `minute`
  - : 選用。表示分鐘數的整數值。
- `second`
  - : 選用。表示秒數的整數值。
- `millisecond`
  - : 選用。表示毫秒數的整數值。

## 描述

- 如果沒有傳入任務參數到建構子，會依系統設定建立出代表當下時間的 Date 物件。
- 如果傳入至少兩個參數，缺少日期的話會設為 1，其它參數則會被設定為 0。
- JavaScript 的 date 基於世界標準時間（UTC）1970 年 1 月 1 日午夜的毫秒數。一天有 86,400,000 毫秒。JavaScript `Date` 物件可表示的範圍由世界標準時間（UTC） 1970 年 1 月 1 日為基準的 -100,000,000 天到 100,000,000 天。
- JavaScript `Date` 物件提供跨平台一致的行為。這個時間數值可以在系統之間傳遞表示相同的時間，如果建立本地的時間物件，其表現將會與本地習慣相對應。
- JavaScript `Date` 物件提供了若干 UTC (通用的) 以及本地時間方法。UTC，也被稱為格林威治標準時間（GMT）被指定作為世界時間的標準。本地時間指的是被設定在執行 JavaScript 電腦上的時間。
- 以函數方式呼叫 `Date` （也就是省略 {{jsxref("Operators/new", "new")}} 建構子）將會回傳一個表示當下時間日期的字串。

## 屬性

- {{jsxref("Date.prototype")}}
  - : 允許填加屬於到 JavaScript `Date` 物件。
- `Date.length`
  - : `Date.length` 的值為 7。這是建構子能夠處理的參數數量。

## 方法

- {{jsxref("Date.now()")}}
  - : 回傳對應於當下時間的數值 - 1970/01/01 00:00:00 (UTC) 到當下的毫秒數。
- {{jsxref("Date.parse()")}}

  - : 解析字串所表示的時間，回傳由 1970/01/01 00:00:00 (UTC) 到該時間的毫秒數值。

    > **備註：** 由於瀏覽器之間的不同與差異，強烈不建議使用 `Date.parse` 。

- {{jsxref("Date.UTC()")}}
  - : 需要傳入與建構子相同的參數數目（即 2 到 7 個），會得到由 1970-01-01 00:00:00 UTC 到該日期時間的毫秒數。（輸入的參數會視為世界標準時間，而非本地時間）

## JavaScript `Date` 物件實體

所有 `Date` 物件實體繼承自 {{jsxref("Date.prototype")}} 。這個 Date 建構子的 prototype 物件可以被修改以影響所有 Date 物件實體。

### Date.prototype 方法

- {{jsxref("Date.now()")}}
  - : 回傳對應於當下時間的數值 - 1970/01/01 00:00:00 (UTC) 到當下的毫秒數。
- {{jsxref("Date.parse()")}}

  - : 解析字串所表示的時間，回傳由 1970/01/01 00:00:00 (UTC) 到該時間的毫秒數值。

    > **備註：** 由於瀏覽器之間的不同與差異，強烈不建議使用 `Date.parse` 。

- {{jsxref("Date.UTC()")}}
  - : 需要傳入與建構子相同的參數數目（即 2 到 7 個），會得到由 1970-01-01 00:00:00 UTC 到該日期時間的毫秒數。（輸入的參數會視為世界標準時間，而非本地時間）

## 範例

### 幾種建立 Date 物件的方式

接下來的幾個範例，展示幾種建立 Date 物件的方式：

> **備註：** 由於瀏覽器之間的不同與差異，強烈不建議使用解析字串的方式建立 Date 物件。

```js
var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```

### 兩位數的年份對應到 1900 - 1999

為了建立及取得西元 0 到 99 的日期，應該使用 {{jsxref("Date.prototype.setFullYear()")}} 以及 {{jsxref("Date.prototype.getFullYear()")}} 方法。

```js
var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// 過時的方法，98 在這裡對應到 1998 年
date.setYear(98); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98); // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
```

### 計算執行時間

下面的例子展示如何使用兩個 Date 物件來求得執行程式所花費毫秒數。

由於日（在夏令時轉換時）、月及年的長度並非固定，如果表示經過時間採用時、分、秒以外的單位，需要對這些差異作深入的研究，以處理可能發生的問題。

```js
// 使用 Date 物件
var start = Date.now();

// 要計算執行時間的程式放在這裡
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 執行程式經過的毫秒數
```

```js
// 使用內建方法
var start = new Date();

// 要計算執行時間的程式放在這裡
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 執行程式經過的毫秒數
```

```js
// 測試一個函數執行時間，並返回其回傳值
function printElapsedTime(fTest) {
  var nStartTime = Date.now(),
    vReturn = fTest(),
    nEndTime = Date.now();

  console.log(
    "Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds",
  );
  return vReturn;
}

yourFunctionReturn = printElapsedTime(yourFunction);
```

> **備註：** 在瀏覽器支援 {{domxref("window.performance", "Web Performance API", "", 1)}} 高精度特性下， {{domxref("Performance.now()")}} 可以提供比 {{jsxref("Date.now()")}} 更可靠、精確的執行時間測試結果。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

\[1] 一些瀏覽器在解析日期時間會發生問題： [3/14/2012 blog from danvk Comparing FF/IE/Chrome on Parsing Date Strings](http://dygraphs.com/date-formats.html)

\[2] [ISO8601 Date Format is not supported](<https://msdn.microsoft.com/en-us//library/ie/ff743760(v=vs.94).aspx>) in Internet Explorer 8, and other version can have [issues when parsing dates](http://dygraphs.com/date-formats.html)
