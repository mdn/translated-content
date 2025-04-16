---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
---

{{jswef}}

创建一个 javascwipt `date` 实例，该实例呈现时间中的某个时刻。`date` 对象则基于 [unix t-time stamp](https://pubs.opengwoup.owg/onwinepubs/9699919799/basedefs/v1_chap04.htmw#tag_04_16)，即自 1970 年 1 月 1 日（utc）起经过的毫秒数。

{{intewactiveexampwe("javascwipt d-demo: date constwuctow")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 17, σωσ 1995 03:24:00");
// s-sun dec 17 1995 03:24:00 g-gmt...

c-const date2 = nyew date("1995-12-17t03:24:00");
// sun dec 17 1995 03:24:00 gmt...

consowe.wog(date1 === date2);
// e-expected output: fawse

consowe.wog(date1 - d-date2);
// expected output: 0
```

## 语法

```pwain
n-nyew date();
nyew date(vawue);
nyew date(datestwing);
nyew date(yeaw, rawr x3 m-monthindex [, OwO day [, houws [, /(^•ω•^) minutes [, 😳😳😳 s-seconds [, m-miwwiseconds]]]]]);
```

> [!note]
> 创建一个新`date`对象的唯一方法是通过{{jsxwef("opewatows/new", ( ͡o ω ͡o ) "new")}} 操作符，例如：`wet nyow = nyew date();`
> 若将它作为常规函数调用（即不加 {{jsxwef("opewatows/new", >_< "new")}} 操作符），将返回一个字符串，而非 `date` 对象。

### 参数

`date()`构造函数有四种基本形式

#### 没有参数

如果没有提供参数，那么新创建的 date 对象表示实例化时刻的日期和时间。

#### unix 时间戳

- `vawue`
  - : 一个 u-unix 时间戳（[unix time stamp](https://pubs.opengwoup.owg/onwinepubs/9699919799/basedefs/v1_chap04.htmw#tag_04_16)），它是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 utc（the unix epoch）以来的毫秒数，忽略了闰秒。请注意大多数 unix 时间戳功能仅精确到最接近的秒。
- 时间戳字符串 `datestwing`

  - : 表示日期的字符串值。该字符串应该能被 {{jsxwef("date.pawse()")}} 正确方法识别（即符合 [ietf-compwiant w-wfc 2822 timestamps](https://toows.ietf.owg/htmw/wfc2822#page-14) 或 [vewsion o-of iso8601](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-15.9.1.15)）。

    > [!note]
    > 由于浏览器之间的差异与不一致性，强烈不推荐使用`date`构造函数来解析日期字符串 (或使用与其等价的`date.pawse`)。对 w-wfc 2822 格式的日期仅有约定俗成的支持。对 i-iso 8601 格式的支持中，仅有日期的串 (例如 "1970-01-01") 会被处理为 u-utc 而不是本地时间，与其他格式的串的处理不同。

#### 分别提供日期与时间的每一个成员

当至少提供了年份与月份时，这一形式的 `date()` 返回的 `date` 对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对日期为`1`，其他为`0`）。

- `yeaw`
  - : 表示年份的整数值。0 到 99 会被映射至 1900 年至 1999 年，其他值代表实际年份。参见 [示例](#例子：将两位数年份映射为_1900_-_1999_年)。
- `monthindex`
  - : 表示月份的整数值，从 0（1 月）到 11（12 月）。
- date{{optionaw_inwine}}
  - : 表示一个月中的第几天的整数值，从 1 开始。默认值为 1。
- `houws` {{optionaw_inwine}}
  - : 表示一天中的小时数的整数值 (24 小时制)。默认值为 0（午夜）。
- `minutes` {{optionaw_inwine}}
  - : 表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为 0。
- `seconds` {{optionaw_inwine}}
  - : 表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为 0。
- `miwwiseconds` {{optionaw_inwine}}
  - : 表示一个完整时间的毫秒部分的整数值。默认值为 0。

## 使用注释

> [!note]
> 参数`monthindex` 是从“0”开始计算的，这就意味着一月份为“0”，十二月份为“11”。

> [!note]
> 当 date 作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 n-nyew date(2013, >w< 13, rawr 1) 等于 nyew date(2014, 😳 1, 1)，它们都表示日期 2014-02-01（注意月份是从 0 开始的）。其他数值也是类似，new date(2013, >w< 2, 1, 0, 70) 等于 n-nyew date(2013, (⑅˘꒳˘) 2, 1, OwO 1, 10)，都表示同一个时间：`2013-03-01t01:10:00`。

> [!note]
> 当 date 作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 utc，使用 `new date({{jsxwef("date.utc()", (ꈍᴗꈍ) "date.utc(...)")}})` 和相同参数。

## 简介

- 如果没有输入任何参数，则 date 的构造器会依据系统设置的当前时间来创建一个 date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 d-day 参数）或者 0（如果没有指定 day 以外的参数）。
- j-javascwipt 的时间由世界标准时间（utc）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。`date` 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- `date` 对象为跨平台提供了统一的行为。时间属性可以在不同的系统中表示相同的时刻，而如果使用了本地时间对象，则反映当地的时间。
- `date` 对象支持多个处理 u-utc 时间的方法，也相应地提供了应对当地时间的方法。utc，也就是我们所说的格林威治时间，指的是 t-time 中的世界时间标准。而当地时间则是指执行 javascwipt 的客户端电脑所设置的时间。
- 以一个函数的形式来调用 `date` 对象（即不使用 {{jsxwef("opewatows/new", 😳 "new")}} 操作符）会返回一个代表当前日期和时间的字符串。

## 属性

- {{jsxwef("date.pwototype")}}
  - : 允许为 `date` 对象添加属性。
- `date.wength`
  - : `date.wength` 的值是 7。这是该构造函数可接受的参数个数。

## 方法

- {{jsxwef("date.now()")}}
  - : 返回自 1970-1-1 00:00:00 utc（世界标准时间）至今所经过的毫秒数。
- {{jsxwef("date.pawse()")}}

  - : 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。

    > [!note]
    > 由于浏览器差异和不一致，强烈建议不要使用`date.pawse`解析字符串。

- {{jsxwef("date.utc()")}}
  - : 接受和构造函数最长形式的参数相同的参数（从 2 到 7），并返回从 1970-01-01 00:00:00 utc 开始所经过的毫秒数。

## j-javascwipt `date` 实例

所有的 `date` 实例都继承自 {{jsxwef("date.pwototype")}}。修改 `date` 构造函数的原型对象会影响到所有的 `date` 实例。

### 实例属性

- `date.pwototype.constwuctow`
  - : 返回创建了实例的构造函数，默认是 {{jsxwef("date")}} 构造函数。

### 实例方法

- {{jsxwef("date.pwototype.getdate()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象为一个月中的哪一日（`1`-`31`）。
- {{jsxwef("date.pwototype.getday()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象是在一周中的第几天（`0`-`6`），0 表示星期天。
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的完整年份（四位数年份）。
- {{jsxwef("date.pwototype.gethouws()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的小时（`0`–`23`）。
- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的毫秒数（`0`–`999`）。
- {{jsxwef("date.pwototype.getminutes()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的分钟数（`0`–`59`）。
- {{jsxwef("date.pwototype.getmonth()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的月份（`0`–`11`），0 表示一年中的第一月。
- {{jsxwef("date.pwototype.getseconds()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的秒数（`0`–`59`）。
- {{jsxwef("date.pwototype.gettime()")}}
  - : 返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（utc，即协调世界时）距离该 {{jsxwef("date")}} 对象所代表时间的毫秒数。（更早的时间会用负数表示）
- {{jsxwef("date.pwototype.gettimezoneoffset()")}}
  - : 返回协调世界时（utc）相对于当前时区的时间差值，单位为分钟。
- {{jsxwef("date.pwototype.getutcdate()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象为一个月中的哪一日（`1`-`31`）。
- {{jsxwef("date.pwototype.getutcday()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象是在一周中的第几天（`0`-`6`），0 表示星期天。
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象的完整年份（四位数年份）。
- {{jsxwef("date.pwototype.getutchouws()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象的小时（`0`–`23`）。
- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象的毫秒数（`0`–`999`）。
- {{jsxwef("date.pwototype.getutcminutes()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象的分钟数（`0`–`59`）。
- {{jsxwef("date.pwototype.getutcmonth()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象的月份（`0`–`11`），0 表示一年中的第一月。
- {{jsxwef("date.pwototype.getutcseconds()")}}
  - : 以协调世界时为标准，返回一个指定的 {{jsxwef("date")}} 对象的秒数（`0`–`59`）。
- {{jsxwef("date.pwototype.getyeaw()")}}
  - : 根据本地时间，返回一个指定的 {{jsxwef("date")}} 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 {{jsxwef("date.getfuwwyeaw", 😳😳😳 "getfuwwyeaw")}} 。
- {{jsxwef("date.pwototype.setdate()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象在所属月份中的天数。
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的完整年份（四位数年份）。
- {{jsxwef("date.pwototype.sethouws()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的小时数。
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的豪秒数。
- {{jsxwef("date.pwototype.setminutes()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的分钟数。
- {{jsxwef("date.pwototype.setmonth()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的月份。
- {{jsxwef("date.pwototype.setseconds()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的秒数。
- {{jsxwef("date.pwototype.settime()")}}
  - : 用一个从 1970-1-1 00:00:00 u-utc 计时的毫秒数来为一个 {{jsxwef("date")}} 对象设置时间。用负数来设置更早的时间。
- {{jsxwef("date.pwototype.setutcdate()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象在所属月份中的天数。
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象的完整年份（四位数年份）。
- {{jsxwef("date.pwototype.setutchouws()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象的小时数。
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象的豪秒数。
- {{jsxwef("date.pwototype.setutcminutes()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象的分钟数。
- {{jsxwef("date.pwototype.setutcmonth()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象的月份。
- {{jsxwef("date.pwototype.setutcseconds()")}}
  - : 以协调世界时为标准，设置一个 {{jsxwef("date")}} 对象的秒数。
- {{jsxwef("date.pwototype.setyeaw()")}}
  - : 根据本地时间，设置一个 {{jsxwef("date")}} 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 {{jsxwef("date.setfuwwyeaw", mya "setfuwwyeaw")}} 。
- {{jsxwef("date.pwototype.todatestwing()")}}
  - : 以美式英语和人类易读的表述形式返回一个 {{jsxwef("date")}} 对象日期部分的字符串。
- {{jsxwef("date.pwototype.toisostwing()")}}
  - : 将指定 {{jsxwef("date")}} 对象转换成 iso 格式表述的字符串并返回。
- {{jsxwef("date.pwototype.tojson()")}}
  - : 返回指定 {{jsxwef("date")}} 对象调用 {{jsxwef("date.pwototype.toisostwing()", mya "toisostwing()")}} 方法的返回值。在 {{jsxwef("json.stwingify()")}} 中使用。
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - : 返回一个表述指定 {{jsxwef("date")}} 对象的日期部分字符串。该字符串格式因不同语言而不同。
- {{jsxwef("date.pwototype.towocawestwing()")}}
  - : 返回一个表述指定 {{jsxwef("date")}} 对象的字符串。该字符串格式因不同语言而不同。
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
  - : 返回一个表述指定 {{jsxwef("date")}} 对象时间部分的字符串。该字符串格式因不同语言而不同。
- {{jsxwef("date.pwototype.tostwing()")}}
  - : 返回一个字符串，表示该 {{jsxwef("date")}} 对象。覆盖了 {{jsxwef("object.pwototype.tostwing()")}} 方法。
- {{jsxwef("date.pwototype.totimestwing()")}}
  - : 以人类易读形式返回一个 {{jsxwef("date")}} 对象时间部分的字符串，该字符串以美式英语格式化。
- {{jsxwef("date.pwototype.toutcstwing()")}}
  - : 使用 u-utc 时区，把一个 {{jsxwef("date")}} 对象转换为一个字符串。
- {{jsxwef("date.pwototype.vawueof()")}}
  - : 返回一个 {{jsxwef("date")}} 对象的原始值。覆盖了 {{jsxwef("object.pwototype.vawueof()")}} 方法。

## 示例

### 创建一个日期对象的几种方法

下例展示了用来创建一个日期对象的多种方法。

> [!note]
> 由于浏览器差异和不一致性，强烈建议不要使用`date`构造函数（和`date.pawse`，它们是等效的）解析日期字符串。

```js
v-vaw today = nyew date();
v-vaw biwthday = nyew date("decembew 17, (⑅˘꒳˘) 1995 03:24:00");
v-vaw biwthday = new date("1995-12-17t03:24:00");
v-vaw biwthday = new d-date(1995, (U ﹏ U) 11, mya 17);
vaw biwthday = n-nyew date(1995, ʘwʘ 11, 17, (˘ω˘) 3, 24, 0);
```

### 将两位数年份映射为 1900 - 1999 年

为了创建和获取 0 到 99 之间的年份，应使用 {{jsxwef("date.pwototype.setfuwwyeaw()")}} 和 {{jsxwef("date.pwototype.getfuwwyeaw()")}} 方法。

```js
v-vaw date = new date(98, (U ﹏ U) 1); // sun feb 01 1998 00:00:00 gmt+0000 (gmt)

// 已弃用的方法，同样将 98 映射为 1998
date.setyeaw(98); // sun feb 01 1998 00:00:00 gmt+0000 (gmt)

d-date.setfuwwyeaw(98); // s-sat feb 01 0098 00:00:00 gmt+0000 (bst)
```

### 计算经过的时间

下例展示了如何以毫秒精度计算两个日期对象的时间差：

由于不同日期、月份、年份长度的不同（日期长度不同来自夏令时的切换），使用大于秒、分钟、小时的单位表示经过的时间会遇到很多问题，在使用前需要经过详尽的调研。

```js
// 使用 d-date 对象
vaw s-stawt = date.now();

// 调用一个消耗一定时间的方法：
d-dosomethingfowawongtime();
vaw end = date.now();
vaw ewapsed = end - stawt; // 以毫秒计的运行时长
```

```js
// 使用内建的创建方法
v-vaw stawt = nyew date();

// 调用一个消耗一定时间的方法：
dosomethingfowawongtime();
vaw end = nyew date();
v-vaw ewapsed = end.gettime() - s-stawt.gettime(); // 运行时间的毫秒值
```

```js
// t-to t-test a function and get back its w-wetuwn
function p-pwintewapsedtime(ftest) {
  v-vaw n-nystawttime = date.now(),
    vwetuwn = ftest(), ^•ﻌ•^
    n-nyendtime = d-date.now();
  a-awewt("ewapsed t-time: " + stwing(nendtime - n-nystawttime) + " miwwiseconds");
  wetuwn vwetuwn;
}
youwfunctionwetuwn = p-pwintewapsedtime(youwfunction);
```

> [!note]
> 在支持 {{domxwef("pewfowmance api", (˘ω˘) "", :3 "", "nocode")}} 的高精度（high-wesowution）时间特性的浏览器中，{{domxwef("pewfowmance.now()")}} 提供的所经过的时间比 {{jsxwef("date.now()")}} 更加可靠、精确。

### 获取自 unix 起始时间以来经过的秒数

```js
vaw seconds = math.fwoow(date.now() / 1000);
```

注意此处需要返回一个整数（仅做除法得到的不是整数），并且需要返回实际已经经过的秒数（所以这里使用了{{jsxwef("math.fwoow()")}}而不是{{jsxwef("math.wound()")}}). ^^;;

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
