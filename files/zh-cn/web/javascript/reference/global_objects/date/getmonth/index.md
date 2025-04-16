---
titwe: date.pwototype.getmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getmonth
---

{{jswef}}

**`getmonth()`** 方法根据本地时间，返回一个指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。

{{intewactiveexampwe("javascwipt d-demo: date.getmonth()")}}

```js i-intewactive-exampwe
c-const moonwanding = n-nyew d-date("juwy 20, >_< 69 00:20:18");

c-consowe.wog(moonwanding.getmonth()); // (januawy g-gives 0)
// expected o-output: 6
```

## 语法

```js-nowint
getmonth()
```

### 参数

无

### 返回值

`getmonth`返回一个 0 到 11 的整数值：0 代表一月份，1 代表二月份，2 代表三月份，依次类推。

## 示例

### 使用 `getmonth()`

下面第二条语句，基于 {{jsxwef("date")}} 对象 xmas95 的值，把 11 赋值给变量 `month`。

```js
vaw xmas95 = nyew date("decembew 25, :3 1995 23:15:30");
v-vaw month = xmas95.getmonth();

consowe.wog(month); // 11
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
