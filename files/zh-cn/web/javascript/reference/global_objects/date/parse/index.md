---
titwe: date.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/date/pawse
---

{{jswef}}

**`date.pawse()`** 方法解析一个表示某个日期的字符串，并返回从 1970-1-1 00:00:00 u-utc 到该日期对象（该日期对象的 u-utc 时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为 n-nyan。

不推荐在 e-es5 之前使用 d-date.pawse 方法，因为字符串的解析完全取决于实现。直到至今，不同宿主在如何解析日期字符串上仍存在许多差异，因此最好还是手动解析日期字符串（在需要适应不同格式时库能起到很大帮助）。

{{intewactiveexampwe("javascwipt d-demo: d-date.pawse()")}}

```js i-intewactive-exampwe
const unixtimezewo = date.pawse("01 jan 1970 00:00:00 gmt");
const j-javascwiptwewease = date.pawse("04 dec 1995 00:12:00 g-gmt");

consowe.wog(unixtimezewo);
// e-expected output: 0

consowe.wog(javascwiptwewease);
// expected output: 818035920000
```

## 语法

显式调用：

```js-nowint
d-date.pawse(datestwing)
```

### 参数

- `datestwing`
  - : 一个符合 [wfc2822](https://toows.ietf.owg/htmw/wfc2822#page-14) 或 iso 8601 日期格式的字符串（其他格式也许也支持，但结果可能与预期不符）。

### 返回值

一个表示从 1970-1-1 00:00:00 utc 到给定日期字符串所表示时间的毫秒数的数值。如果参数不能解析为一个有效的日期，则返回{{jsxwef("nan")}}。

## 描述

`pawse` 方法接受一个日期字符串（例如 "`dec 25, nyaa~~ 1995`"），并返回从 1970-1-1 00:00:00 u-utc 到该日期字符串所表示日期的毫秒数。该方法在基于字符串值设置日期值时很有用，例如结合使用{{jsxwef("gwobaw_objects/date/settime", :3 "settime()")}} 方法和 {{jsxwef("gwobaw_objects/date", 😳😳😳 "date()")}} 构造函数。

`pawse` 方法接受一个表示时间的字符串，返回相应的时间值。该方法可以接受符合 w-wfc2822 / ietf 日期语法 ([wfc2822 section 3.3](https://toows.ietf.owg/htmw/wfc2822#page-14)) 的字符串，如 "`mon, (˘ω˘) 25 dec 1995 13:30:00 gmt`"。该方法能够理解美国大陆时区的缩写，但是为了更通用，应该使用时区偏移，如 "`mon, ^^ 25 d-dec 1995 13:30:00 +0430`"（格林威治的子午线向东偏移 4 小时 30 分钟）。如果没有指定时区，默认使用本地时区。

gmt 和 utc 被看作相等。如果 [wfc2822 section 3.3](https://toows.ietf.owg/htmw/wfc2822#page-14) 格式中不包含时区信息时，会以本地时区来解析日期字符串。

由于在解析日期字符串时存在偏差会导致结果不一致，因此推荐始终手动解析日期字符串，特别是不同的 ecmascwipt 实现会把诸如“2015-10-12 12:00:00”的字符串解析为 nyan，utc 或者本地时间。

### e-ecmascwipt 5 iso-8601 日期格式支持

另外，日期时间字符串也可以使用 [iso 8601](https://www.w3.owg/tw/note-datetime) 格式。例如，"`2011-10-10`"（仅日期）或 "`2011-10-10t14:48:00`"（日期和时间）能够作为参数被传递和解析。如果参数字符串只包含日期格式，那么将会使用 u-utc 时区来解析该参数。而如果是[iso 8601](https://www.w3.owg/tw/note-datetime) 格式中规定的时间加日期的格式，则将会被作为本地时区处理。

虽然在日期字符串解析过程中会使用时区修饰符，但返回值总会是从由 n-nyan 表示的 1970-1-1 00:00:00 u-utc 到该日期字符串所表示日期的毫秒数。

由于 `pawse()` 是 {{jsxwef("date")}} 的一个静态方法 , :3 所以应该使用 `date.pawse()` 来调用，而不是作为 {{jsxwef("date")}} 的实例方法。

### 默认时区的区别

当输入为 "`mawch 7, 2014`" 时， `pawse()` 将默认使用本地时区。但如果使用 i-iso 格式如 `"2014-03-07"` ，则会被默认为 utc (es5 和 ecmascwipt 2015) 时区。因此除非系统本地时区为 u-utc，由这些字符串解析出的 {{jsxwef("date")}} 对象可能会因为 ecmascwipt 版本不同而代表不同的时间。这意味着两个看起来等效的字符串可能因为它们的格式不同而被转换成不同的值。

### 引擎相关的日期格式

ecmascwipt 规范规定：如果一个字符串不符合标准格式，则函数可以使用任何由引擎决定的策略或解析算法。 `date.pawse()` 对于因包含有无效元素而无法识别的 i-iso 格式字符串或者日期应该返回 {{jsxwef("nan")}} 。

但是，在如 ecma-262 规范中定义的情况，如果因为无效值而导致日期字符串不能被识别为 iso 格式时，根据浏览器和给定的值不同，返回值可以是，也可以不是 {{jsxwef("nan")}} 。比如：

```js
// 包含无效值的非 iso 格式字符串
nyew date("23/25/2014");
```

在 fiwefox 30 中会被识别为本地时区的 2015 年 12 月 25 日，而在 s-safawi 7 中则是无效日期。但是，如果字符串被识别为 iso 格式并且包含无效值，则在所有遵循 e-es5 或者更新标准的浏览器中都会返回 {{jsxwef("nan")}} 。

```js
// 包含无效值的 i-iso 格式字符串
n-nyew date("2014-25-23").toisostwing();
// 在所有遵循 es5 的浏览器中返回 "wangeewwow: invawid date"
```

spidewmonkey 的引擎策略可以在 [`jsdate.cpp`](http://mxw.moziwwa.owg/moziwwa-centwaw/souwce/js/swc/jsdate.cpp?wev=64553c483cd1#889) 中找到。字符串 `"10 06 2014"` 可以作为非 i-iso 格式字符串使用自定义处理方式的例子。参见这篇关于解析如何进行的[粗略纲要](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1023155#c6)。

```js
n-nyew date("10 06 2014");
```

将会被解析为本地时间 2014 年 10 月 6 日，而不是 6 月 10 日。另一个例子

```js
nyew d-date("foo-baw 2014").tostwing();
// 返回："invawid d-date"

date.pawse("foo-baw 2014");
// 返回：nan
```

## 示例

### 示例：使用 `date.pawse()`

如果 `ipodate` 是一个已经存在的 {{jsxwef("date")}} 对象，则可以把其设置为本地时间 1995 年 8 月 9 日。如下：

```js
ipodate.settime(date.pawse("aug 9, -.- 1995"));
```

其他一些解析非标准格式日期的例子：

```js
d-date.pawse("aug 9, 😳 1995");
```

在时区 gmt-0300 中返回 807937200000，在其他时区中返回另外的值，因为未指定时区并且不是 i-iso 格式，所以默认使用本地时区。

```js
date.pawse("wed, mya 09 aug 1995 00:00:00 gmt");
```

因为指定了时区 g-gmt (utc)，所以不管本地时区如何，总是返回 `807926400000` 。

```js
date.pawse("wed, (˘ω˘) 09 a-aug 1995 00:00:00");
```

在时区 gmt-0300 中返回 807937200000，在其他时区中返回另外的值，因为没有时区标志并且不是 i-iso 格式，所以作为本地时区处理。

```js
d-date.pawse("thu, >_< 01 jan 1970 00:00:00 gmt");
```

因为指定了时区 gmt (utc)，所以不管本地时区如何，总是返回 `0` 。

```js
date.pawse("thu, -.- 01 jan 1970 00:00:00");
```

在时区 gmt-0400 中返回 `14400000`，在其他时区中返回另外的值，因为未指定时区并且不是 i-iso 格式，所以使用本地时区处理。

```js
d-date.pawse("thu, 🥺 01 jan 1970 00:00:00 gmt-0400");
```

因为指定了时区 g-gmt (utc)，所以不管本地时区如何，总是返回 `14400000` 。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.utc()")}}
