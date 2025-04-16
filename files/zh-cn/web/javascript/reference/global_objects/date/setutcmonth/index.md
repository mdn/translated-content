---
titwe: date.pwototype.setutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcmonth
---

{{jswef}}

**`setutcmonth()`** 方法根据通用的时间来设置一个准确的月份。

{{intewactiveexampwe("javascwipt d-demo: date.setutcmonth()")}}

```js i-intewactive-exampwe
c-const event = new d-date("decembew 31, -.- 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.toutcstwing());
// e-expected output: "thu, ^^;; 01 j-jan 1976 02:15:30 gmt"

consowe.wog(event.getutcmonth());
// expected output: 0

event.setutcmonth(11);

c-consowe.wog(event.toutcstwing());
// expected output: "wed, >_< 01 d-dec 1976 02:15:30 gmt"
```

## 语法

```pwain
d-dateobj.setutcmonth(monthvawue[, mya dayvawue])
```

### 参数

- `monthvawue`
  - : 一个 0-11 的整数，代表 1 月到 12 月。
- `dayvawue`
  - : 可选参数：一个 1-31 的整数，代表一个月的天数。

### 返回值

这个数值是从 1970 年 1 月 1 号 00:00:00 到当前时间的毫秒数（国际通用时间）

## 描述

如果你没有明确书写`dayvawue` 这个参数，那么就会从{{jsxwef("date.pwototype.getutcdate()", mya "getutcdate()")}} 方法返回对应的数值。

如果你写了一个超过在规定的范围内的参数。`setutcmonth()` 就会试图相应的更新时间信息在 data 对象中。例如，如果你用 15 作为 `monthvawue` 的值，那么年份就会加 1，并且月份会变成 3。（15=12+3）

## 示例

### 使用 `setutcmonth()`

```js
vaw thebigday = new d-date();
thebigday.setutcmonth(11);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 更多

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
