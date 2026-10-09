---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
---

**`getYear()`** 方法返回指定的本地日期的年份。因为 `getYear()` 不返回千禧年（"year 2000 problem"），所以这个方法不再被使用，现在替换为 {{jsxref("Date.getFullYear", "getFullYear")}}。

## 语法

```js-nolint
getYear()
```

### 返回值

`getYear` 方法返回一个年份减去 1900 的值；因此：

- 如果年份大于等于 2000，则 `getYear()` 的返回值将大于等于 100。例如，如果年份是 2026，则 `getYear()` 返回 126。
- 如果年份在 1900 到 1999 之间，`getYear()` 的返回值将在 0 到 99 之间。例如，如果年份是 1976，则 `getYear()` 返回 76。
- 如果年份小于 1900，则 `getYear()` 的返回值将小于 0。例如，如果年份是 1800，则 `getYear()` 返回 -100。

如果要同时考虑 2000 年之前和之后的年份，应该使用 {{jsxref("Date.getFullYear", "getFullYear()")}} 而不是 `getYear()`，以便指定完整年份。

## 示例

### 1900 年到 1999 年之间的年份

第二个语句将值 95 赋给变量 `year`。

```js
var Xmas = new Date("December 25, 1995 23:15:00");
var year = Xmas.getYear(); // returns 95
```

### 年份大于 1999

第二个语句将值 100 赋给变量 `year`。

```js
var Xmas = new Date("December 25, 2000 23:15:00");
var year = Xmas.getYear(); // returns 100
```

### 年份小于 1900

第二个语句将值 -100 赋给变量 `year`。

```js
var Xmas = new Date("December 25, 1800 23:15:00");
var year = Xmas.getYear(); // returns -100
```

### 设置和获取 1900 年到 1999 年之间的年份

第三个语句将值 95 赋给变量 `year`，表示 1995 年。

```js
var Xmas = new Date("December 25, 2015 23:15:00");
Xmas.setYear(95);
var year = Xmas.getYear(); // returns 95
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
