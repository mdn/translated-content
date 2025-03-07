---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

**`getMinutes()`** 方法基於本地時區回傳指定日期的分鐘數。

{{InteractiveExample("JavaScript Demo: Date.getMinutes()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// Expected output: 20
```

## 語法

```js-nolint
getMinutes()
```

### 返回值

一個基於本地時區表示指定日期的分鐘數、介於 0 至 59 的整數值。

## 範例

### 使用 getMinutes()

下方第二行陳述式將 {{jsxref("Global_Objects/Date", "Date")}} 物件 `xmas95` 的值 15，指派給變數 `minutes`。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
