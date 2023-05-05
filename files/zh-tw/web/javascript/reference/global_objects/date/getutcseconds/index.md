---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

**`getUTCSeconds()`** 方法根據世界時回傳指定日期的秒數。

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html", "shorter")}}

## 語法

```js-nolint
getUTCSeconds()
```

### 返回值

若 `Date` 物件為有效日期，則根據 UTC 時間回傳一個表示秒數、介於 0 至 59 之間的整數；若為無效日期，則回傳 {{jsxref ("Number.NaN()")}}。

## 範例

### 使用 getUTCSeconds()

下列範例指派當前時間的秒數至變數 `seconds`。

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
