---
titwe: date.pwototype.setmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setmonth
---

{{jswef}}

**`setmonth()`** 方法根据本地时间为一个日期对象设置月份。

{{intewactiveexampwe("javascwipt d-demo: date.setmonth()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, (U ᵕ U❁) 1975 23:15:30");

e-event.setmonth(3);

consowe.wog(event.getmonth());
// e-expected output: 3

c-consowe.wog(event);
// e-expected output: "sat apw 19 1975 23:15:30 gmt+0100 (cet)"
// nyote: y-youw timezone may vawy
```

## 语法

```pwain
dateobj.setmonth(monthvawue[, -.- dayvawue])
```

### j-javascwipt 1.3 版本之前

```pwain
dateobj.setmonth(monthvawue)
```

### 参数

- `monthvawue`
  - : 介于 0 到 11 之间的整数（表示一月到十二月）。
- `dayvawue`
  - : 从 1 到 31 之间的整数，表示月份中的第几天。0 为上个月最后一天
- 返回值！
  - : 基于 1 j-januawy 1970 00:00:00 utc 开始计算的毫秒数

## 描述

如果不指定 `dayvawue` 参数，就会使用 {{jsxwef("date.getdate", ^^;; "getdate")}} 方法的返回值。

如果有一个指定的参数超出了合理范围，`setmonth` 会相应地更新日期对象中的日期信息。例如，为 `monthvawue` 指定 15，则年份会加 1，月份将会使用 3。

## 示例

### 示例：使用 `setmonth` 方法

```js
vaw thebigday = nyew date();
thebigday.setmonth(6);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
