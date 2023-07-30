---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
---

{{JSRef}}

创建一个 JavaScript `Date` 实例，该实例呈现时间中的某个时刻。`Date` 对象则基于 [Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

## 语法

```plain
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

> **备注：** 创建一个新`Date`对象的唯一方法是通过{{jsxref("Operators/new", "new")}} 操作符，例如：`let now = new Date();`
> 若将它作为常规函数调用（即不加 {{jsxref("Operators/new", "new")}} 操作符），将返回一个字符串，而非 `Date` 对象。

### 参数

`Date()`构造函数有四种基本形式

#### 没有参数

如果没有提供参数，那么新创建的 Date 对象表示实例化时刻的日期和时间。

#### Unix 时间戳

- `value`
  - : 一个 Unix 时间戳（[Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)），它是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix epoch）以来的毫秒数，忽略了闰秒。请注意大多数 Unix 时间戳功能仅精确到最接近的秒。
- 时间戳字符串 `dateString`

  - : 表示日期的字符串值。该字符串应该能被 {{jsxref("Date.parse()")}} 正确方法识别（即符合 [IETF-compliant RFC 2822 timestamps](http://tools.ietf.org/html/rfc2822#page-14) 或 [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)）。

    > **备注：** 由于浏览器之间的差异与不一致性，强烈不推荐使用`Date`构造函数来解析日期字符串 (或使用与其等价的`Date.parse`)。对 RFC 2822 格式的日期仅有约定俗成的支持。对 ISO 8601 格式的支持中，仅有日期的串 (例如 "1970-01-01") 会被处理为 UTC 而不是本地时间，与其他格式的串的处理不同。

#### 分别提供日期与时间的每一个成员

当至少提供了年份与月份时，这一形式的 `Date()` 返回的 `Date` 对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对日期为`1`，其他为`0`）。

- `year`
  - : 表示年份的整数值。0 到 99 会被映射至 1900 年至 1999 年，其他值代表实际年份。参见 [示例](#例子：将两位数年份映射为_1900_-_1999_年)。
- `monthIndex`
  - : 表示月份的整数值，从 0（1 月）到 11（12 月）。
- date{{optional_inline}}
  - : 表示一个月中的第几天的整数值，从 1 开始。默认值为 1。
- `hours` {{optional_inline}}
  - : 表示一天中的小时数的整数值 (24 小时制)。默认值为 0（午夜）。
- `minutes` {{optional_inline}}
  - : 表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为 0。
- `seconds` {{optional_inline}}
  - : 表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为 0。
- `milliseconds` {{optional_inline}}
  - : 表示一个完整时间的毫秒部分的整数值。默认值为 0。

## 使用注释

> **备注：** 参数`monthIndex` 是从“0”开始计算的，这就意味着一月份为“0”，十二月份为“11”。

> **备注：** 当 Date 作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 new Date(2013, 13, 1) 等于 new Date(2014, 1, 1)，它们都表示日期 2014-02-01（注意月份是从 0 开始的）。其他数值也是类似，new Date(2013, 2, 1, 0, 70) 等于 new Date(2013, 2, 1, 1, 10)，都表示同一个时间：`2013-03-01T01:10:00`。

> **备注：** 当 Date 作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 `new Date({{jsxref("Date.UTC()", "Date.UTC(...)")}})` 和相同参数。

## 简介

- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- JavaScript 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。`Date` 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- `Date` 对象为跨平台提供了统一的行为。时间属性可以在不同的系统中表示相同的时刻，而如果使用了本地时间对象，则反映当地的时间。
- `Date` 对象支持多个处理 UTC 时间的方法，也相应地提供了应对当地时间的方法。UTC，也就是我们所说的格林威治时间，指的是 time 中的世界时间标准。而当地时间则是指执行 JavaScript 的客户端电脑所设置的时间。
- 以一个函数的形式来调用 `Date` 对象（即不使用 {{jsxref("Operators/new", "new")}} 操作符）会返回一个代表当前日期和时间的字符串。

## 属性

- {{jsxref("Date.prototype")}}
  - : 允许为 `Date` 对象添加属性。
- `Date.length`
  - : `Date.length` 的值是 7。这是该构造函数可接受的参数个数。

## 方法

- {{jsxref("Date.now()")}}
  - : 返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数。
- {{jsxref("Date.parse()")}}

  - : 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。

    > **备注：** 由于浏览器差异和不一致，强烈建议不要使用`Date.parse`解析字符串。

- {{jsxref("Date.UTC()")}}
  - : 接受和构造函数最长形式的参数相同的参数（从 2 到 7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。

## JavaScript `Date` 实例

所有的 `Date` 实例都继承自 {{jsxref("Date.prototype")}}。修改 `Date` 构造函数的原型对象会影响到所有的 `Date` 实例。

### 实例属性

- `Date.prototype.constructor`
  - : 返回创建了实例的构造函数，默认是 {{jsxref("Date")}} 构造函数。

### 实例方法

- {{jsxref("Date.prototype.getDate()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象为一个月中的哪一日（`1`-`31`）。
- {{jsxref("Date.prototype.getDay()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象是在一周中的第几天（`0`-`6`），0 表示星期天。
- {{jsxref("Date.prototype.getFullYear()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的完整年份（四位数年份）。
- {{jsxref("Date.prototype.getHours()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的小时（`0`–`23`）。
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的毫秒数（`0`–`999`）。
- {{jsxref("Date.prototype.getMinutes()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的分钟数（`0`–`59`）。
- {{jsxref("Date.prototype.getMonth()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的月份（`0`–`11`），0 表示一年中的第一月。
- {{jsxref("Date.prototype.getSeconds()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的秒数（`0`–`59`）。
- {{jsxref("Date.prototype.getTime()")}}
  - : 返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该 {{jsxref("Date")}} 对象所代表时间的毫秒数。（更早的时间会用负数表示）
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象为一个月中的哪一日（`1`-`31`）。
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象是在一周中的第几天（`0`-`6`），0 表示星期天。
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象的完整年份（四位数年份）。
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象的小时（`0`–`23`）。
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象的毫秒数（`0`–`999`）。
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象的分钟数（`0`–`59`）。
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象的月份（`0`–`11`），0 表示一年中的第一月。
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxref("Date")}} 对象的秒数（`0`–`59`）。
- {{jsxref("Date.prototype.getYear()")}}
  - : 根据本地时间，返回一个指定的 {{jsxref("Date")}} 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 {{jsxref("Date.getFullYear", "getFullYear")}} 。
- {{jsxref("Date.prototype.setDate()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象在所属月份中的天数。
- {{jsxref("Date.prototype.setFullYear()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的完整年份（四位数年份）。
- {{jsxref("Date.prototype.setHours()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的小时数。
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的豪秒数。
- {{jsxref("Date.prototype.setMinutes()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的分钟数。
- {{jsxref("Date.prototype.setMonth()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的月份。
- {{jsxref("Date.prototype.setSeconds()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的秒数。
- {{jsxref("Date.prototype.setTime()")}}
  - : 用一个从 1970-1-1 00:00:00 UTC 计时的毫秒数来为一个 {{jsxref("Date")}} 对象设置时间。用负数来设置更早的时间。
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象在所属月份中的天数。
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象的完整年份（四位数年份）。
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象的小时数。
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象的豪秒数。
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象的分钟数。
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象的月份。
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : 以协调世界时为标准，设置一个 {{jsxref("Date")}} 对象的秒数。
- {{jsxref("Date.prototype.setYear()")}}
  - : 根据本地时间，设置一个 {{jsxref("Date")}} 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 {{jsxref("Date.setFullYear", "setFullYear")}} 。
- {{jsxref("Date.prototype.toDateString()")}}
  - : 以美式英语和人类易读的表述形式返回一个 {{jsxref("Date")}} 对象日期部分的字符串。
- {{jsxref("Date.prototype.toISOString()")}}
  - : 将指定 {{jsxref("Date")}} 对象转换成 ISO 格式表述的字符串并返回。
- {{jsxref("Date.prototype.toJSON()")}}
  - : 返回指定 {{jsxref("Date")}} 对象调用 {{jsxref("Date.prototype.toISOString()", "toISOString()")}} 方法的返回值。在 {{jsxref("JSON.stringify()")}} 中使用。
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : 返回一个表述指定 {{jsxref("Date")}} 对象的日期部分字符串。该字符串格式因不同语言而不同。
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : 返回一个表述指定 {{jsxref("Date")}} 对象的字符串。该字符串格式因不同语言而不同。
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : 返回一个表述指定 {{jsxref("Date")}} 对象时间部分的的字符串。该字符串格式因不同语言而不同。
- {{jsxref("Date.prototype.toString()")}}
  - : 返回一个字符串，表示该 {{jsxref("Date")}} 对象。覆盖了 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("Date.prototype.toTimeString()")}}
  - : 以人类易读形式返回一个 {{jsxref("Date")}} 对象时间部分的字符串，该字符串以美式英语格式化。
- {{jsxref("Date.prototype.toUTCString()")}}
  - : 使用 UTC 时区，把一个 {{jsxref("Date")}} 对象转换为一个字符串。
- {{jsxref("Date.prototype.valueOf()")}}
  - : 返回一个 {{jsxref("Date")}} 对象的原始值。覆盖了 {{jsxref("Object.prototype.valueOf()")}} 方法。

## 示例

### 创建一个日期对象的几种方法

下例展示了用来创建一个日期对象的多种方法。

> **备注：** 由于浏览器差异和不一致性，强烈建议不要使用`Date`构造函数（和`Date.parse`，它们是等效的）解析日期字符串。

```js
var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```

### 将两位数年份映射为 1900 - 1999 年

为了创建和获取 0 到 99 之间的年份，应使用 {{jsxref("Date.prototype.setFullYear()")}} 和 {{jsxref("Date.prototype.getFullYear()")}} 方法。

```js
var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// 已弃用的方法，同样将 98 映射为 1998
date.setYear(98); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98); // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
```

### 计算经过的时间

下例展示了如何以毫秒精度计算两个日期对象的时间差：

由于不同日期、月份、年份长度的不同（日期长度不同来自夏令时的切换），使用大于秒、分钟、小时的单位表示经过的时间会遇到很多问题，在使用前需要经过详尽的调研。

```js
// 使用 Date 对象
var start = Date.now();

// 调用一个消耗一定时间的方法：
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 以毫秒计的运行时长
```

```js
// 使用内建的创建方法
var start = new Date();

// 调用一个消耗一定时间的方法：
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 运行时间的毫秒值
```

```js
// to test a function and get back its return
function printElapsedTime(fTest) {
  var nStartTime = Date.now(),
    vReturn = fTest(),
    nEndTime = Date.now();
  alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
  return vReturn;
}
yourFunctionReturn = printElapsedTime(yourFunction);
```

> **备注：** 在支持 {{domxref("window.performance", "Web Performance API")}} 的高精细度（high-resolution）时间功能的浏览器中，{{domxref("Performance.now()")}} 提供的所经过的时间比 {{jsxref("Date.now()")}} 更加可靠、精确。

### 获取自 Unix 起始时间以来经过的秒数

```js
var seconds = Math.floor(Date.now() / 1000);
```

注意此处需要返回一个整数（仅做除法得到的不是整数），并且需要返回实际已经经过的秒数（所以这里使用了{{jsxref("Math.floor()")}}而不是{{jsxref("Math.round()")}}).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
