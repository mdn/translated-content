---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

**`valueOf()`** 方法回傳 {{jsxref("Date")}} 物件的原始值。

{{InteractiveExample("JavaScript Demo: Date.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000
```

## 語法

```js-nolint
valueOf()
```

### 返回值

從 1970 年 1 月 1 日 00:00:00 UTC 至給定日期之間的毫秒數，若為無效日期則回傳 {{jsxref("NaN")}} 。

## 描述

`valueOf()` 方法以數字型別回傳一 {{jsxref("Date")}} 物件的原始值，亦即自 1970 年 1 月 1 日 00:00:00 UTC 起所經過的毫秒數。

此方法在功能上相當於 {{jsxref("Date.prototype.getTime()")}} 。

通常此方法由 JavaScript 內部呼叫，而非明確寫在程式碼中。

## 範例

### 使用 valueOf()

```js
const x = new Date(56, 6, 17);
const myVar = x.valueOf(); // 指派 -424713600000 至 myVar
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
