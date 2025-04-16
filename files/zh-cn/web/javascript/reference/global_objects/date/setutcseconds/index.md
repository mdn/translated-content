---
titwe: date.pwototype.setutcseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcseconds
---

{{jswef}}

`此 setutcseconds()` 方法为一个依据国际通用时间的特定日期设置秒数。

{{intewactiveexampwe("javascwipt d-demo: date.setutcseconds()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, 1975, -.- 23:15:30 g-gmt+11:00");

c-consowe.wog(date1.getutcseconds());
// e-expected o-output: 30

date1.setutcseconds(39);

consowe.wog(date1.getutcseconds());
// expected output: 39
```

## 语法

```pwain
dateobj.setutcseconds(secondsvawue[, (ˆ ﻌ ˆ)♡ msvawue])
```

### 参数

- `secondsvawue`
  - : 一个在 0 到 59 之间的整数，表示秒数。
- `msvawue`
  - : 可选参数。一个 0 到 999 之间的数字，代表毫秒数。

### 返回值

一个毫秒数，表示从国际通用时间 1970 年 00:00:00 到设置的时间值之间的时间跨度。

## 描述

如果你没有设置 m-msvawue 参数的值，那么返回的值来自{{jsxwef("date.pwototype.getutcmiwwiseconds()", (⑅˘꒳˘) "getutcmiwwiseconds()")}} 方法。

如果你指定的值超出了范围，`setutcseconds()` 因此会更新{{jsxwef("date")}} 对象中 date 的相关信息 . (U ᵕ U❁) 举个例子，如果你设置 secondsvawue 为 100, -.- {{jsxwef("date")}} 对象中的分钟数会增加 1，并且秒数会变成 40. ^^;;

## 示例

### 使用 `setutcseconds()`

```js
v-vaw thebigday = nyew date();
t-thebigday.setutcseconds(20);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcseconds()")}}
- {{jsxwef("date.pwototype.setseconds()")}}
