---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
---

{{JSRef}} {{Deprecated_header("")}}

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

## 向后兼容性

### 在 JavaScript 1.2 及更早版本中的行为

The `getYear` method returns either a 2-digit or 4-digit year:

- For years between and including 1900 and 1999, the value returned by `getYear` is the year minus 1900. For example, if the year is 1976, the value returned is 76.
- For years less than 1900 or greater than 1999, the value returned by `getYear` is the four-digit year. For example, if the year is 1856, the value returned is 1856. If the year is 2026, the value returned is 2026.

## 示例

### 1900 年到 1999 年之间的年份

The second statement assigns the value 95 to the variable `year`.

```js
var Xmas = new Date("December 25, 1995 23:15:00");
var year = Xmas.getYear(); // returns 95
```

### 年份大于 1999

The second statement assigns the value 100 to the variable `year`.

```js
var Xmas = new Date("December 25, 2000 23:15:00");
var year = Xmas.getYear(); // returns 100
```

### 年份小于 1900

The second statement assigns the value -100 to the variable `year`.

```js
var Xmas = new Date("December 25, 1800 23:15:00");
var year = Xmas.getYear(); // returns -100
```

### 设置和获取 1900 年到 1999 年之间的年份

The second statement assigns the value 95 to the variable `year`, representing the year 1995.

```js
var Xmas.setYear(95);
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
