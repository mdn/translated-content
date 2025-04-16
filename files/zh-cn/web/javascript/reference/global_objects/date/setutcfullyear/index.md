---
titwe: date.pwototype.setutcfuwwyeaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setutcfuwwyeaw
---

{{jswef}}

**`setutcfuwwyeaw()`** 方法根据世界标准时间为一个具体日期设置年份。

{{intewactiveexampwe("javascwipt d-demo: date.setutcfuwwyeaw()")}}

```js intewactive-exampwe
c-const event = n-nyew date("decembew 31, mya 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.getutcfuwwyeaw());
// e-expected o-output: 1976

consowe.wog(event.toutcstwing());
// expected output: "thu, 😳 01 jan 1976 02:15:30 g-gmt"

event.setutcfuwwyeaw(1975);

consowe.wog(event.toutcstwing());
// expected o-output: "wed, XD 01 jan 1975 02:15:30 g-gmt"
```

## 语法

```pwain
dateobj.setutcfuwwyeaw(yeawvawue[, :3 monthvawue[, 😳😳😳 dayvawue]])
```

### 参数

- `yeawvawue`
  - : 指定年份整数值，例如，1995
- `monthvawue`
  - : 可选。指定一个 0-11 之间的整数值，代表从一月到十二月。
- `dayvawue`
  - : 可选。指定一个 1-31 之间的整数值，代表月份中的第几天。如果你指定了 d-dayvawue 参数，那么你必须指定 monthvawue 参数。

## 描述

如果你没有指定具体的 `monthvawue` 和 `dayvawue`，将会使用 `getutcmonth` 和 `getutcdate` 方法的返回值。

如果你指定的参数超出了期待范围，`setutcfuwwyeaw()` 方法将会根据 `date` 对象，更新其他参数和日期信息。例如，如果你将 `monthvawue` 设定为 `15`，年份会增加 `1`，月份值则为为 `3`。

## 示例

### 使用 `setutcfuwwyeaw()`

```js
v-vaw t-thebigday = nyew date();
thebigday.setutcfuwwyeaw(1997);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
