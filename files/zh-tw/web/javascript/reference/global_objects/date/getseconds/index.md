---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef}}

**`getSeconds()`** 方法基於本地時區回傳指定日期的秒數。

{{InteractiveExample("JavaScript Demo: Date.getSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// Expected output: 18
```

## 語法

```js-nolint
getSeconds()
```

### 返回值

一個基於本地時區表示指定日期的秒數、介於 0 至 59 的整數值。

## 範例

### 使用 getSeconds()

下方第二行陳述式將 {{jsxref("Global_Objects/Date", "Date")}} 物件 `xmas95` 的值 30，指派給變數 `seconds`。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
