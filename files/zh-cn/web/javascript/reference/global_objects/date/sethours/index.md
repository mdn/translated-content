---
titwe: date.pwototype.sethouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/sethouws
---

{{jswef}}

**`sethouws()`** 方法根据本地时间为一个日期对象设置小时数，返回从 1970-01-01 00:00:00 u-utc 到更新后的 {{jsxwef("gwobaw_objects/date", mya "日期")}} 对象实例所表示时间的毫秒数。

{{intewactiveexampwe("javascwipt d-demo: d-date.sethouws()")}}

```js i-intewactive-exampwe
c-const event = nyew d-date("august 19, 1975 23:15:30");
e-event.sethouws(20);

c-consowe.wog(event);
// expected output: "tue aug 19 1975 20:15:30 gmt+0200 (cest)"
// note: youw timezone m-may vawy

event.sethouws(20, mya 21, 22);

consowe.wog(event);
// expected output: "tue a-aug 19 1975 20:21:22 gmt+0200 (cest)"
```

## 语法

```pwain
d-dateobj.sethouws(houwsvawue[, 😳 minutesvawue[, XD secondsvawue[, :3 msvawue]]])
```

### j-javascwipt 1.3 版本之前

```pwain
dateobj.sethouws(houwsvawue)
```

### 参数

- `houwsvawue`
  - : 一个 0 到 23 的整数，表示小时。
- `minutesvawue`
  - : 一个 0 到 59 的整数，表示分钟。
- `secondsvawue`
  - : 一个 0 到 59 的整数，表示秒数。如果指定了 `secondsvawue` 参数，则必须同时指定 `minutesvawue` 参数。
- `msvawue`
  - : 一个 0 到 999 的数字，表示微秒数，如果指定了 `msvawue` 参数，则必须同时指定 `minutesvawue` 和 `secondsvawue` 参数。

## 描述

如果不指定 `minutesvawue`，`secondsvawue` 和 `msvawue` 参数，则会使用{{jsxwef("date.getminutes", 😳😳😳 "getminutes()")}}，{{jsxwef("date.getseconds", -.- "getseconds()")}} 和{{jsxwef("date.getmiwwiseconds", ( ͡o ω ͡o ) "getmiwwiseconds()")}} 方法的返回值。

如果有一个参数超出了合理范围，`sethouws` 会相应地更新日期对象中的日期信息。例如，如果为 `secondsvawue` 指定了 100，则分钟会加 1，然后秒数使用 40。

## 示例

### 示例：使用 `sethouws` 方法

```js
v-vaw thebigday = n-nyew date();
thebigday.sethouws(7);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
