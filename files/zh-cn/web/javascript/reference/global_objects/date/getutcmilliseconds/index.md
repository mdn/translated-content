---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

**`getUTCMilliseconds()`** 方法以世界时为标准，返回一个指定的日期对象的毫秒数。

{{InteractiveExample("JavaScript Demo: Date.getUTCMilliseconds()")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678
```

## 语法

```plain
dateObj.getUTCMilliseconds()
```

### 参数

无。

### 返回值

`getUTCMilliseconds()` 返回一个 0 到 999 的整数。

## 示例

### 示例：使用 `getUTCMilliseconds()` 方法

下例将当前时间的毫秒部分赋值给变量 `milliseconds`。

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
