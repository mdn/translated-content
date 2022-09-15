---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
---
{{JSRef("Global_Objects", "Date")}} {{Deprecated_header("")}}

getYear() 方法返回指定的本地日期的年份。因为 `getYear` 不返回千禧年 \[full years] ("year 2000 problem")，所以这个方法不再被使用，现在替换为 {{jsxref("Date.getFullYear", "getFullYear")}} .

## Syntax

```plain
dateObj.getYear()
```

### Parameters

None.

### Returns

The `getYear` method returns the year minus 1900; thus:

- For years greater than or equal to 2000, the value returned by `getYear` is 100 or greater. For example, if the year is 2026, `getYear` returns 126.
- For years between and including 1900 and 1999, the value returned by `getYear` is between 0 and 99. For example, if the year is 1976, `getYear` returns 76.
- For years less than 1900, the value returned by `getYear` is less than 0. For example, if the year is 1800, `getYear` returns -100.

To take into account years before and after 2000, you should use {{jsxref("Date.getFullYear", "getFullYear()")}} instead of `getYear` so that the year is specified in full.

## Backward Compatibility

### Behaviour in JavaScript 1.2 and earlier

The `getYear` method returns either a 2-digit or 4-digit year:

- For years between and including 1900 and 1999, the value returned by `getYear` is the year minus 1900. For example, if the year is 1976, the value returned is 76.
- For years less than 1900 or greater than 1999, the value returned by `getYear` is the four-digit year. For example, if the year is 1856, the value returned is 1856. If the year is 2026, the value returned is 2026.

## Examples

### Example: Years between 1900 and 1999

The second statement assigns the value 95 to the variable `year`.

```js
var Xmas = new Date("December 25, 1995 23:15:00");
var year = Xmas.getYear(); // returns 95
```

### Example: Years above 1999

The second statement assigns the value 100 to the variable `year`.

```js
var Xmas = new Date("December 25, 2000 23:15:00");
var year = Xmas.getYear(); // returns 100
```

### Example: Years below 1900

The second statement assigns the value -100 to the variable `year`.

```js
var Xmas = new Date("December 25, 1800 23:15:00");
var year = Xmas.getYear(); // returns -100
```

### Example: Setting and getting a year between 1900 and 1999

The second statement assigns the value 95 to the variable `year`, representing the year 1995.

```js
var Xmas.setYear(95);
var year = Xmas.getYear(); // returns 95
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
