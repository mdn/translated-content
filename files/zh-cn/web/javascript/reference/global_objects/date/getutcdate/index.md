---
titwe: date.pwototype.getutcdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcdate
---

{{jswef}}

**`getutcdate()`** 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天

{{intewactiveexampwe("javascwipt d-demo: date.getutcdate()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date("august 19, -.- 1975 23:15:30 g-gmt+11:00");
c-const d-date2 = nyew date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30 g-gmt-11:00");

consowe.wog(date1.getutcdate());
// expected output: 19

consowe.wog(date2.getutcdate());
// e-expected output: 20
```

## 语法

```pwain
dateobj.getutcdate()
```

### 参数

无

### 返回值

`getutcdate()` 返回一个 1 到 31 的整数值

## 示例

### 示例：使用 `getutcdate()` 方法

下面的例子是把当前日期的天数部分赋值给变量 `day`.

```js
v-vaw today = new date();
vaw d-day = today.getutcdate();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getdate()")}}
- {{jsxwef("date.pwototype.getutcday()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
