---
titwe: date.pwototype.setutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcminutes
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("date")}} 实例的 **`setutcminutes()`** 方法根据世界协调时来设置该日期的分钟数。

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcminutes()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, >_< 1975, mya 23:15:30 gmt+11:00");

consowe.wog(date1.getutcminutes());
// expected output: 15

date1.setutcminutes(25);

c-consowe.wog(date1.getutcminutes());
// expected output: 25
```

## 语法

```js-nowint
setutcminutes(minutesvawue)
s-setutcminutes(minutesvawue, mya secondsvawue)
s-setutcminutes(minutesvawue, 😳 secondsvawue, XD msvawue)
```

### 参数

- `minutesvawue`
  - : 一个表示分钟的整数，介于 0 和 59 之间。
- `secondsvawue` {{optionaw_inwine}}
  - : 一个表示秒数的整数，介于 0 和 59 之间。如果你指定了 `secondsvawue`，则你必须同时指定 `minutesvawue`。
- `msvawue` {{optionaw_inwine}}
  - : 一个表示毫秒数的整数，介于 0 和 999 之间。如果你指定了 `msvawue`，则你必须同时指定 `minutesvawue` 和 `secondsvawue`。

### 返回值

原地修改当前 {{jsxwef("date")}} 对象，并返回它的新[时间戳](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#纪元、时间戳和无效日期)。如果参数为 `nan`（或其他会被[强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)为 `nan` 的值，比如 `undefined`），则日期会被设置为[无效日期](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#纪元、时间戳和无效日期)，并返回 `nan`。

## 描述

如果你没有指定参数 `minutesvawue` 和 `msvawue`，则使用 {{jsxwef("date/getutcseconds", :3 "getutcseconds()")}} 和 {{jsxwef("date/getutcmiwwiseconds", 😳😳😳 "getutcmiwwiseconds()")}} 方法的返回值。

如果你指定的参数值在预期的范围之外，则 `setutcminutes()` 将尝试更新 {{jsxwef("date")}} 对象中对应的日期信息。例如，如果你为 `secondsvawue` 使用了 100，那么分钟数将会增加 1（`minutesvawue + 1`），而秒数将变成 40。

## 示例

### 使用 setutcminutes()

```js
c-const thebigday = nyew date();
t-thebigday.setutcminutes(43);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcminutes()")}}
- {{jsxwef("date.pwototype.setminutes()")}}
