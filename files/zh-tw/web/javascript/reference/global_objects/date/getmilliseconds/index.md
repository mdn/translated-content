---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

**`getMilliseconds()`** 方法基於本地時區回傳指定日期的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.getMilliseconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// Expected output: 123
```

## 語法

```js-nolint
getMilliseconds()
```

### 返回值

一個基於本地時區表示指定日期的毫秒數、介於 0 至 999 的整數值。

## 範例

### 使用 getMilliseconds()

下列範例將當前時間的毫秒數指派給變數 `milliseconds`。

```js
const today = new Date();
const milliseconds = today.getMilliseconds();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
