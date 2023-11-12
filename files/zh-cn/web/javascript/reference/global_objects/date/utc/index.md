---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef}}

**`Date.UTC()`** 方法接受的参数同 {{jsxref("Date")}} 构造函数接受最多参数时一样，但该前者会视它们为 UTC 时间，其返回从 1970 年 1 月 1 日 00:00:00 UTC 到指定时间的毫秒数。

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## 语法

```js-nolint
Date.UTC(year)
Date.UTC(year, month)
Date.UTC(year, month, day)
Date.UTC(year, month, day, hour)
Date.UTC(year, month, day, hour, minute)
Date.UTC(year, month, day, hour, minute, second)
Date.UTC(year, month, day, hour, minute, second, millisecond)
```

## 参数

- `year`

  - : 一个表示年份的整数值。

    从 `0` 到 `99` 的值会被映射到 `1900` 至 `1999` 年。其他的值则代表实际的年份。参见[示例](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#例子：将两位数年份映射为_1900_-_1999_年)。

- `month` {{optional_inline}}
  - : `0`（一月）到 `11`（十二月）之间的一个整数，表示月份。从 ECMAScript 2017 开始，如果忽略该值，则默认为 `0`。_（直到 ECMAScript 2016，`month` 都是必须的参数。而从 ES2017 开始，它不再是必须的。）_
- `date` {{optional_inline}}
  - : `1` 到 `31` 之间的一个整数，表示某月当中的第几天。如果忽略该值，则默认为 `1`。
- `hour` {{optional_inline}}
  - : `0` 到 `23` 之间的一个整数，表示小时。如果忽略该值，则默认为 `0`。
- `minute` {{optional_inline}}
  - : `0` 到 `59` 之间的一个整数，表示分钟。如果忽略该值，则默认为 `0`。
- `second` {{optional_inline}}
  - : `0` 到 `59` 之间的一个整数，表示秒。如果忽略该值，则默认为 `0`。
- `millisecond` {{optional_inline}}
  - : `0` 到 `999` 之间的一个整数，表示毫秒。如果忽略该值，则默认为 `0`。

### 返回值

一个数字，表示从 1970 年 1 月 1 日 00:00:00 UTC 到给定时间的毫秒数。

## 描述

`UTC()` 方法接受以逗号隔开的时间参数，返回 1970 年 1 月 1 日 00:00:00 UTC 到指定的时间之间的毫秒数。

如果年份被指定为 `0` 到 `99` 之间，则该方法会将年份转换为 20 世纪的一个年份（即 `1900 + year`），例如，指定为 `95`，则年份为 `1995`。

`UTC()` 方法与 {{jsxref("Date")}} 构造函数有两点不同：

1. `Date.UTC()` 方法使用协调世界时代替本地时间。
2. `Date.UTC()` 方法返回一个时间数值，而不是一个 {{jsxref("Date")}} 对象。

如果有一个指定的参数超出其合理范围，则 UTC 方法会通过更新其他参数直到该参数在合理范围内。例如，为月份指定 `15`，则年份将会加 `1`（`year + 1`），然后月份将会使用 `3`。

由于 `UTC()` 是 {{jsxref("Date")}} 的一个静态方法，所以应该直接调用 `Date.UTC()`，而不要把它作为 {{jsxref("Date")}} 实例的方法。

## 示例

### 使用 Date.UTC()

下面的语句使用 UTC 时间代替本地时间创建了一个 {{jsxref("Date")}} 对象。

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性备注

#### 少于两个参数的 Date.UTC()

当向 `Date.UTC()` 提供少于两个的参数时，ECMAScript 2017 要求返回 {{jsxref("NaN")}}。不支持此行为的引擎已被更新（参见 [bug 1050755](https://bugzilla.mozilla.org/show_bug.cgi?id=1050755)、[ecma-262 #642](https://github.com/tc39/ecma262/pull/642)）。

```js
Date.UTC();
Date.UTC(1);

// Safari: NaN
// Chrome/Opera/V8: NaN

// Firefox <54: non-NaN
// Firefox 54+: NaN

// IE: non-NaN
// Edge: NaN
```

## 参见

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
