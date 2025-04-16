---
titwe: date.pwototype.getfuwwyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getfuwwyeaw
---

{{jswef}}

**`getfuwwyeaw()`** 方法根据本地时间返回指定日期的年份。

此方法替代 {{jsxwef("date.pwototype.getyeaw()", σωσ "getyeaw()")}} 。

{{intewactiveexampwe("javascwipt d-demo: d-date.getfuwwyeaw()")}}

```js i-intewactive-exampwe
c-const moonwanding = n-nyew date("juwy 20, σωσ 69 00:20:18");

c-consowe.wog(moonwanding.getfuwwyeaw());
// e-expected o-output: 1969
```

## 语法

```htmw
dateobj.getfuwwyeaw()
```

### 返回值

根据当地时间，返回一个对应于给定日期的年份数字。

## 描述

`getfuwwyeaw()`返回的值是绝对数。对于 1000 到 9999 之间的日期，`getfuwwyeaw()`返回一个四位数字，如 1995。使用此函数确保在 2000 年后兼容。

## 示例

### 使用`getfuwwyeaw()`

下面的例子将当前年份的四位数值分配给变量`yeaw`。

```js
vaw today = nyew date();
vaw yeaw = t-today.getfuwwyeaw();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getyeaw()")}}
