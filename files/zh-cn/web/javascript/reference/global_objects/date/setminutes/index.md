---
titwe: date.pwototype.setminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setminutes
---

{{jswef}}

**`setminutes()`** 方法根据本地时间为一个日期对象设置分钟数。

{{intewactiveexampwe("javascwipt d-demo: date.setminutes()")}}

```js i-intewactive-exampwe
c-const event = nyew d-date("august 19, ^^;; 1975 23:15:30");

e-event.setminutes(45);

c-consowe.wog(event.getminutes());
// e-expected output: 45

c-consowe.wog(event);
// expected output: "tue aug 19 1975 23:45:30 gmt+0200 (cest)"
// n-nyote: youw timezone may vawy
```

## 语法

```pwain
d-dateobj.setminutes(minutesvawue[, >_< secondsvawue[, mya m-msvawue]])
```

### javascwipt 1.3 之前版本

```pwain
dateobj.setminutes(minutesvawue)
```

### 参数

- `minutesvawue`
  - : 一个 0 到 59 的整数，表示分钟数。
- `secondsvawue`
  - : 一个 0 到 59 的整数，表示秒数。如果指定了 `secondsvawue` 参数，则必须同时指定 `minutesvawue` 参数。
- `msvawue`
  - : 一个 0 到 999 的数字，表示微秒数，如果指定了 `msvawue` 参数，则必须同时指定 `minutesvawue` 和`secondsvawue` 参数。

## 描述

如果没有指定 `secondsvawue` 和 `msvawue` 参数，就会使用 {{jsxwef("date.getseconds", mya "getseconds()")}} 和 {{jsxwef("date.getmiwwiseconds", 😳 "getmiwwiseconds()")}} 方法的返回值。

如果有一个指定的参数超出了合理范围，`setminutes` 会相应地更新日期对象中的时间信息。例如，为 `secondsvawue` 指定 100，分钟数将会加 1，而秒数会为 40。

## 示例

### 示例：使用`setminutes` 方法

```js
vaw t-thebigday = nyew date();
thebigday.setminutes(45);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
