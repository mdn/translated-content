---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

**`getUTCMilliseconds()`** 方法根據世界時回傳指定日期的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678
```

## 語法

```js-nolint
getUTCMilliseconds()
```

### 返回值

若 `Date` 物件為有效日期，則根據 UTC 時間回傳一個表示毫秒數、介於 0 至 999 之間的整數；若為無效日期，則回傳 {{jsxref ("Number.NaN()")}}。

別與 Unix 時間搞混了。應使用 {{jsxref ("Date.prototype.getTime()")}} 方法取得自 1970/01/01 起經過的毫秒數。

## 範例

### 使用 getUTCMilliseconds()

下列範例指派當前時間的毫秒數至變數 `milliseconds` 。

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
