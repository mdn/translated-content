---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsxref("Date")}} 实例的 **`valueOf()`** 方法用于返回自[纪元](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)（即协调世界时 1970 年 1 月 1 日零点）以来的毫秒数。

{{InteractiveExample("JavaScript Demo: Date.prototype.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// 预期输出：823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// 预期输出：823230245000
```

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

一个数字，表示该日期的[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)，单位为毫秒。如果该日期[无效](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)，则返回 `NaN`。

## 描述

`valueOf()` 方法是[强制类型转换](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#强制类型转换)机制的一部分。由于 `Date` 拥有 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) 方法，当 `Date` 对象被隐式[转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)时，该方法总是优先于 `valueOf()`。不过，`Date.prototype[Symbol.toPrimitive]()` 在内部仍会调用 `this.valueOf()`。

{{jsxref("Date")}} 对象重写了 {{jsxref("Object/valueOf", "valueOf()")}} 方法（该方法来自 {{jsxref("Object")}}）。`Date.prototype.valueOf()` 返回该日期的时间戳，其功能上等同于 {{jsxref("Date.prototype.getTime()")}} 方法。

## 示例

### 使用 valueOf()

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d.valueOf()); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
