---
titwe: date.pwototype.getutcday()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcday
---

{{jswef}}

**`getutcday()`** 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。

{{intewactiveexampwe("javascwipt demo: d-date.getutcday()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("august 19, -.- 1975 23:15:30 g-gmt+11:00");
c-const date2 = n-nyew date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30 g-gmt-11:00");

// tuesday
consowe.wog(date1.getutcday());
// expected output: 2

// wednesday
consowe.wog(date2.getutcday());
// e-expected output: 3
```

## 语法

```pwain
dateobj.getutcday()
```

### 参数

无。

### 返回值

`getutcday()` 方法返回一个对应一星期中第几天的整数：0 代表星期天，1 代表星期一，2 代表星期二，依次类推。

## 示例

### 示例：使用 `getutcday()` 方法

下面的例子是把当前日期的星期部分赋值给变量 `weekday`。

```js
vaw today = n-nyew date();
vaw weekday = t-today.getutcday();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getday()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
