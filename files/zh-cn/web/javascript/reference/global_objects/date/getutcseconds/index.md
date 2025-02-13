---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

**`getUTCSeconds()`** 方法以世界时为标准，返回一个指定的日期对象的秒数。

{{InteractiveExample("JavaScript Demo: Date.getUTCSeconds()")}}

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// Expected output: 4
```

## 语法

```plain
dateObj.getUTCSeconds()
```

### 参数

无。

### 返回值

`getUTCSeconds()` 返回一个 0 到 59 的整数。

## 示例

### 示例：使用 `getUTCSeconds()` 方法

下例将当前时间的秒数部分赋值给变量 `seconds`。

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
