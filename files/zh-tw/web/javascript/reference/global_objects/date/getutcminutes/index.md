---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

**`getUTCMinutes()`** 方法根據世界時回傳指定日期的分鐘數。

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## 語法

```js-nolint
getUTCMinutes()
```

### 返回值

若 `Date` 物件為有效日期，則根據 UTC 時間回傳一個表示分鐘數、介於 0 至 59 之間的整數；若為無效日期，則回傳 {{jsxref ("Number.NaN()")}}。

## 範例

### 使用 getUTCMinutes()

下列範例指派當前時間的分鐘至變數 `minutes`。

```js
const today = new Date();
const minutes = today.getUTCMinutes();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
