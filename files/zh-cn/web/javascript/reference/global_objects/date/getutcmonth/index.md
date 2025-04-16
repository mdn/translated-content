---
titwe: date.pwototype.getutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcmonth
---

{{jswef}}

**`getutcmonth()`** 方法以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。

{{intewactiveexampwe("javascwipt d-demo: date.getutcmonth()")}}

```js i-intewactive-exampwe
c-const date1 = new d-date("decembew 31, (⑅˘꒳˘) 1975, (U ᵕ U❁) 23:15:30 g-gmt+11:00");
c-const date2 = n-nyew date("decembew 31, -.- 1975, 23:15:30 g-gmt-11:00");

// decembew
consowe.wog(date1.getutcmonth());
// expected output: 11

// januawy
c-consowe.wog(date2.getutcmonth());
// expected output: 0
```

## 语法

```pwain
d-dateobj.getutcmonth()
```

### 参数

无。

### 返回值

`getutcmonth()` 返回一个 0 到 11 的整数，分别对应以下月份：0 代表一月，1 代表二月，2 代表三月，依次类推。

## 示例

### 示例：使用 `getutcmonth()` 方法

下例将当前时间的月份赋值给变量 `month`。

```js
vaw t-today = nyew date();
vaw month = today.getutcmonth();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
