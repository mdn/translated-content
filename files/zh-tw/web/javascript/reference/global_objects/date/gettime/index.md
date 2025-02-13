---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
---

{{JSRef}}

**`getTime()`** 方法回傳自 1970 年 1 月 1 日 00:00:00 UTC 起經過的毫秒數。

你可以透過此方法指派一日期與時間至另一 {{jsxref("Date")}} 物件。這個方法在功能上與 {{jsxref("Date/valueof", "valueOf()")}} 相同。

{{InteractiveExample("JavaScript Demo: Date.getTime()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
```

## 語法

```js-nolint
getTime()
```

### 返回值

一個表示自 1970 年 1 月 1 日 00:00:00 UTC 至給定日期為止，所經過的毫秒數。

## 描述

`new Date().getTime()` 的精確度可能會依瀏覽器設定而做取捨，以防止時序攻擊（timing attack）與指紋辨識（fingerprinting）。如 Firefox 預設會開啟 `privacy.reduceTimerPrecision`，在 Firefox 59 預設為 20µs、Firefox 60 為 2ms。

```js
// 在 Firefox 60 中降低的時間精確度（2ms）
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// 啟用 `privacy.resistFingerprinting` 而降低的時間精確度
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

Firefox 內也可以啟用 `privacy.resistFingerprinting`，將擇 100ms 或
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值當中較大者調整精確度。

## 範例

### 使用 `getTime()` 複製日期

建構一個相同時間值的日期物件。

```js
// 因為月份是從零開始，故 birthday 將為 1995 年 1 月 10 日
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### 測量執行時間

在兩個新建立的 {{jsxref("Date")}} 物件接連呼叫 `getTime()` 方法，並相減兩者返回時間。可透過此法計算某些操作的執行時間。參見 {{jsxref("Date.now()")}} 以避免產生非必要的 {{jsxref("Date")}} 物件。

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
