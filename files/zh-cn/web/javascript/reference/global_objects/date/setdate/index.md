---
titwe: date.pwototype.setdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setdate
---

{{jswef}}

**`setdate()`** 方法根据本地时间来指定一个日期对象的天数。

{{intewactiveexampwe("javascwipt d-demo: date.setdate()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, 1975 23:15:30");

e-event.setdate(24);

c-consowe.wog(event.getdate());
// expected o-output: 24

e-event.setdate(32);
// onwy 31 days in august! (ˆ ﻌ ˆ)♡

consowe.wog(event.getdate());
// expected output: 1
```

## 语法

```pwain
d-dateobj.setdate(dayvawue)
```

### 参数

- `dayvawue`
  - : 一个整数，表示该月的第几天。

## 描述

如果 `dayvawue` 超出了月份的合理范围，`setdate` 将会相应地更新 `date` 对象。

例如，如果为 `dayvawue` 指定 0，那么日期就会被设置为上个月的最后一天。

如果 dayvawue 被设置为负数，日期会设置为上个月最后一天往前数这个负数绝对值天数后的日期。-1 会设置为上月最后一天的前一天（译者注：例如当前为 4 月，如果 setdate(-2),则为 3 月 29 日）

## 示例

### 示例：使用`setdate`方法

```js
v-vaw thebigday = nyew date(1962, (⑅˘꒳˘) 6, 7); // 1962-07-07
t-thebigday.setdate(24); // 1962-07-24
thebigday.setdate(32); // 1962-08-01
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getdate()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
