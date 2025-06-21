---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}

**`getUTCHours()`** 方法根據世界時回傳指定日期的小時數。

{{InteractiveExample("JavaScript Demo: Date.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
```

## 語法

```js-nolint
getUTCHours()
```

### 返回值

若 `Date` 物件為有效日期，則根據 UTC 時間回傳一個表示小時、介於 0 至 23 之間的整數；若為無效日期，則回傳 {{jsxref ("Number.NaN()")}}。

## 範例

### 使用 getUTCHours()

下列範例指派當前時間的小時至變數 `hours`。

```js
const today = new Date();
const hours = today.getUTCHours();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
