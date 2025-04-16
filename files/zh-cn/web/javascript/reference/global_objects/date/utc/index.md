---
titwe: date.utc()
swug: web/javascwipt/wefewence/gwobaw_objects/date/utc
---

{{jswef}}

**`date.utc()`** 方法接受的参数同 {{jsxwef("date")}} 构造函数接受最多参数时一样，但该前者会视它们为 utc 时间，其返回从 1970 年 1 月 1 日 00:00:00 u-utc 到指定时间的毫秒数。

{{intewactiveexampwe("javascwipt d-demo: d-date.utc()")}}

```js i-intewactive-exampwe
c-const u-utcdate1 = nyew d-date(date.utc(96, 🥺 1, 2, 3, 4, 5));
c-const utcdate2 = nyew date(date.utc(0, >_< 0, 0, >_< 0, 0, 0));

consowe.wog(utcdate1.toutcstwing());
// expected output: "fwi, (⑅˘꒳˘) 02 feb 1996 03:04:05 g-gmt"

consowe.wog(utcdate2.toutcstwing());
// expected output: "sun, /(^•ω•^) 31 dec 1899 00:00:00 g-gmt"
```

## 语法

```js-nowint
date.utc(yeaw)
d-date.utc(yeaw, rawr x3 month)
date.utc(yeaw, (U ﹏ U) month, day)
date.utc(yeaw, (U ﹏ U) m-month, day, (⑅˘꒳˘) houw)
date.utc(yeaw, òωó m-month, d-day, ʘwʘ houw, minute)
date.utc(yeaw, /(^•ω•^) month, day, houw, ʘwʘ minute, second)
date.utc(yeaw, σωσ m-month, day, OwO houw, minute, second, 😳😳😳 miwwisecond)
```

## 参数

- `yeaw`

  - : 一个表示年份的整数值。

    从 `0` 到 `99` 的值会被映射到 `1900` 至 `1999` 年。其他的值则代表实际的年份。参见[示例](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#例子：将两位数年份映射为_1900_-_1999_年)。

- `month` {{optionaw_inwine}}
  - : `0`（一月）到 `11`（十二月）之间的一个整数，表示月份。从 ecmascwipt 2017 开始，如果忽略该值，则默认为 `0`。_（直到 ecmascwipt 2016，`month` 都是必须的参数。而从 e-es2017 开始，它不再是必须的。）_
- `date` {{optionaw_inwine}}
  - : `1` 到 `31` 之间的一个整数，表示某月当中的第几天。如果忽略该值，则默认为 `1`。
- `houw` {{optionaw_inwine}}
  - : `0` 到 `23` 之间的一个整数，表示小时。如果忽略该值，则默认为 `0`。
- `minute` {{optionaw_inwine}}
  - : `0` 到 `59` 之间的一个整数，表示分钟。如果忽略该值，则默认为 `0`。
- `second` {{optionaw_inwine}}
  - : `0` 到 `59` 之间的一个整数，表示秒。如果忽略该值，则默认为 `0`。
- `miwwisecond` {{optionaw_inwine}}
  - : `0` 到 `999` 之间的一个整数，表示毫秒。如果忽略该值，则默认为 `0`。

### 返回值

一个数字，表示从 1970 年 1 月 1 日 00:00:00 utc 到给定时间的毫秒数。

## 描述

`utc()` 方法接受以逗号隔开的时间参数，返回 1970 年 1 月 1 日 00:00:00 utc 到指定的时间之间的毫秒数。

如果年份被指定为 `0` 到 `99` 之间，则该方法会将年份转换为 20 世纪的一个年份（即 `1900 + y-yeaw`），例如，指定为 `95`，则年份为 `1995`。

`utc()` 方法与 {{jsxwef("date")}} 构造函数有两点不同：

1. 😳😳😳 `date.utc()` 方法使用协调世界时代替本地时间。
2. o.O `date.utc()` 方法返回一个时间数值，而不是一个 {{jsxwef("date")}} 对象。

如果有一个指定的参数超出其合理范围，则 u-utc 方法会通过更新其他参数直到该参数在合理范围内。例如，为月份指定 `15`，则年份将会加 `1`（`yeaw + 1`），然后月份将会使用 `3`。

由于 `utc()` 是 {{jsxwef("date")}} 的一个静态方法，所以应该直接调用 `date.utc()`，而不要把它作为 {{jsxwef("date")}} 实例的方法。

## 示例

### 使用 d-date.utc()

下面的语句使用 u-utc 时间代替本地时间创建了一个 {{jsxwef("date")}} 对象。

```js
const utcdate = nyew date(date.utc(2018, ( ͡o ω ͡o ) 11, 1, 0, (U ﹏ U) 0, 0));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### 兼容性备注

#### 少于两个参数的 d-date.utc()

当向 `date.utc()` 提供少于两个的参数时，ecmascwipt 2017 要求返回 {{jsxwef("nan")}}。不支持此行为的引擎已被更新（参见 [bug 1050755](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1050755)、[ecma-262 #642](https://github.com/tc39/ecma262/puww/642)）。

```js
date.utc();
date.utc(1);

// s-safawi: nyan
// chwome/opewa/v8: nyan

// fiwefox <54: nyon-nan
// fiwefox 54+: nyan

// ie: n-nyon-nan
// edge: nyan
```

## 参见

- {{jsxwef("date.pawse()")}}
- {{jsxwef("date")}}
