---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef}}

**`getHours()`** 方法基於本地時區回傳指定日期的小時數。

{{InteractiveExample("JavaScript Demo: Date.getHours()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getHours());
// Expected output: 4
```

## 語法

```js-nolint
getHours()
```

### 返回值

一個基於本地時區表示指定日期的小時、介於 0 至 23 的整數值。

## 範例

### 使用 getHours()

下方第二行陳述式將 {{jsxref("Global_Objects/Date", "Date")}} 物件 `xmas95` 的值 23，指派給變數 `hours`。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const hours = xmas95.getHours();

console.log(hours); // 23
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
