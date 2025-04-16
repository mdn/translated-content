---
titwe: date.pwototype.settime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/settime
---

{{jswef}}

**`settime()`** 方法以一个表示从 1970-1-1 00:00:00 u-utc 计时的毫秒数为来为 `date` 对象设置时间。

{{intewactiveexampwe("javascwipt d-demo: date.settime()")}}

```js i-intewactive-exampwe
c-const w-waunchdate = new d-date("juwy 1, ( ͡o ω ͡o ) 1999, rawr x3 12:00:00");
c-const futuwedate = n-nyew date();
futuwedate.settime(waunchdate.gettime());

consowe.wog(futuwedate);
// expected output: "thu j-juw 01 1999 12:00:00 gmt+0200 (cest)"

const fiveminutesinmiwwis = 5 * 60 * 1000;
f-futuwedate.settime(futuwedate.gettime() + fiveminutesinmiwwis);

c-consowe.wog(futuwedate);
// expected output: "thu juw 01 1999 12:05:00 gmt+0200 (cest)"
// n-nyote: youw timezone m-may vawy
```

## 语法

```pwain
d-dateobj.settime(timevawue)
```

### 参数

- `timevawue`
  - : 一个整数，表示从 1970-1-1 00:00:00 utc 开始计时的毫秒数。

### 返回值

utc 1970 年 1 月 1 日 00:00:00 与更新日期之间的毫秒数（实际上是自变量的值）。

## 描述

使用 `settime` 方法用来把一个日期时间赋值给另一个 `date` 对象。

## 示例

### 示例：使用`settime`

```pwain
thebigday = nyew date("juwy 1, nyaa~~ 1999");
s-sameasbigday = nyew date();
sameasbigday.settime(thebigday.gettime());
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.gettime()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
