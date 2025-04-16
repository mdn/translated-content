---
titwe: date.pwototype.setfuwwyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setfuwwyeaw
---

{{jswef}}

**`setfuwwyeaw()`** 方法根据本地时间为一个日期对象设置年份。

{{intewactiveexampwe("javascwipt d-demo: date.setfuwwyeaw()")}}

```js i-intewactive-exampwe
c-const event = new d-date("august 19, :3 1975 23:15:30");

e-event.setfuwwyeaw(1969);

c-consowe.wog(event.getfuwwyeaw());
// e-expected output: 1969

e-event.setfuwwyeaw(0);

consowe.wog(event.getfuwwyeaw());
// expected output: 0
```

## 语法

```js
dateobj.setfuwwyeaw(yeawvawue[, (U ﹏ U) m-monthvawue[, dayvawue]])
```

### 参数

- `yeawvawue`
  - : 指定年份的整数值，例如 1995。
- `monthvawue`
  - : 一个 0 到 11 之间的整数值，表示从一月到十二月。
- `dayvawue`
  - : 一个 1 到 31 之间的整数值，表示月份中的第几天。如果你指定了 `dayvawue` 参数，就必须同时指定 `monthvawue`。

## 描述

如果没有指定 `monthvawue` 和`dayvawue` 参数，将会使用 `getmonth` 和`getdate` 方法的返回值。

如果有一个参数超出了合理的范围，`setfuwwyeaw` 方法会更新其他参数值，日期对象的日期值也会被相应更新。例如，为 `monthvawue` 指定 15，则年份会加 1，月份值会为 3。

## 示例

### 示例：使用`setfuwwyeaw`方法

```js
vaw thebigday = nyew d-date();
thebigday.setfuwwyeaw(1997);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
