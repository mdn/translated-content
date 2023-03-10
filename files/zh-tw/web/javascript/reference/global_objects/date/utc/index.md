---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef}}

**`Date.UTC()`** 方法接受與建構子相同長度的參數，將參數視為通用時間（UTC）來計算回傳由 1970-01-01 00:00:00 UTC 所經過的毫秒數。

## 格式

```plain
Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
```

### 參數

- `year`
  - : 1900 年後的年份。
- `month`
  - : 月份，介於 0 到 11 之間。
- `day`
  - : 選用。月份中的日期，介於 1 到 31 之間。
- `hour`
  - : 選用。小時，介於 0 到 23 之間。
- `minute`
  - : 選用。分鐘數，介於 0 到 59 之間。
- `second`
  - : 選用。秒數，介於 0 到 59 之間。
- `millisecond`
  - : 選用。毫秒數 0 到 999 之間。

### 回傳值

得到傳入這個 {{jsxref("Date")}} 方法的參數所代表時間，與 1970-01-01 00:00:00 UTC 相差的毫秒數。

## 描述

`UTC()` 取得以逗號分隔的時間參數，回傳 1970-01-01 00:00:00 UTC 與該時間相差的毫秒數。

你應該指定完成的年份資料，例如： 1998。如果一個 0 到 99 的年份被指定，這個方法會將它轉換為 20 世紀的年份（變為 19xx 年），例如你傳入 95 ，則會被當作 1995 年被指定。

這個 `UTC()` 方法與 {{jsxref("Date")}} 建構子有兩個地方不同。

- `Date.UTC()` 使用 UTC 時區而不是當地時區。
- `Date.UTC()` 回傳一個數值而不是 {{jsxref("Date")}} 物件。

當你指定參數超出預期的範圍， UTC( ) 方法會去調整其它的參數使之成立。比如如果你指定月份為 15 ，年份將被加 1 ，以 3 作為傳入的月份。

因為 UTC( ) 是 {{jsxref("Date")}} 的一個靜態方法，只能使用 `Date.UTC()` 的方式呼叫，而不能由建立出來的 {{jsxref("Date")}} 物件去執行它。

## 範例

### 使用 `Date.UTC()`

以下利用它來將指定的時間以 UTC 而非本地時間的方式來建立 {{jsxref("Date")}} 物件：

```js
var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關資源

- {{jsxref("Date.parse()")}}
