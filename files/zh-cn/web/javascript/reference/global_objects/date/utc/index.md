---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---
{{JSRef("Global_Objects", "Date")}}

**`Date.UTC()`** 方法接受的参数同日期构造函数接受最多参数时一样，返回从 1970-1-1 00:00:00 UTC 到指定日期的的毫秒数。

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## 语法

```plain
Date.UTC(year,month[,date[,hrs[,min[,sec{{mediawiki.external(',<em>ms</em>')}}]]]])
```

## 参数

- `year`
  - : 1900 年后的某一年份。
- `month`
  - : 0 到 11 之间的一个整数，表示月份。
- `date`
  - : 1 到 31 之间的一个整数，表示某月当中的第几天。
- `hrs`
  - : 0 到 23 之间的一个整数，表示小时。
- `min`
  - : 0 到 59 之间的一个整数，表示分钟。
- `sec`
  - : 0 到 59 之间的一个整数，表示秒。
- `ms`
  - : 0 到 999 之间的一个整数，表示毫秒。

## 描述

`UTC` 方法接受以逗号隔开的日期参数，返回 1970-1-1 00:00:00 UTC 到指定的日期之间的毫秒数。

你应该指定一个完整格式的年份，如 1998。如果年份被指定为 0 到 99 之间，则该方法会将年份转换为 20 世纪的一个年份（即 1900 + year），例如，指定为 95， 则年份为 1995。

`UTC` 方法与 `Date` 有两点不同：

- `Date.UTC` 方法使用协调世界时代替本地时间。
- `Date.UTC` 方法返回一个时间数值，而不是一个日期对象。

如果有一个指定的参数超出其合理范围，则 UTC 方法会通过更新其他参数直到该参数在合理范围内。例如，为月份指定 15，则年份将会加 1，然后月份将会使用 3。

由于 `UTC` 是 `Date`（日期对象）的一个静态方法，所以应该在 `Date` 上直接调用，就像 `Date.UTC()`，而不要把它作为创建的日期对象的方法。

## 例子

### 例子：使用 `Date.UTC`

下面的语句使用 UTC 时间代替本地时间创建了一个日期对象。

```js
var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.parse()")}}
