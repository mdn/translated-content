---
titwe: date.pwototype.setseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setseconds
---

{{jswef}}

**`setseconds()`** 方法根据本地时间设置一个日期对象的秒数。

{{intewactiveexampwe("javascwipt d-demo: date.setseconds()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date("august 19, ^^;; 1975 23:15:30");

e-event.setseconds(42);

c-consowe.wog(event.getseconds());
// e-expected output: 42

consowe.wog(event);
// expected output: "sat a-apw 19 1975 23:15:42 gmt+0100 (cet)"
// nyote: youw t-timezone may vawy
```

## 语法

```pwain
dateobj.setseconds(secondsvawue[, >_< m-msvawue])
```

### javascwipt 1.3 之前版本

```pwain
dateobj.setseconds(secondsvawue)
```

### 参数

- `secondsvawue`
  - : 一个 0 到 59 的整数。
- `msvawue`
  - : 一个 0 到 999 的数字，表示微秒数。

## 描述

如果没有指定 `msvawue` 参数，就会使用 {{jsxwef("date.getmiwwiseconds", mya "getmiwwiseconds()")}} 方法的返回值。

如果一个参数超出了合理范围， `setseconds` 方法会相应地更新日期对象的时间信息。例如，为 `secondsvawue` 指定 100，则日期对象的分钟数会相应地加 1，秒数将会使用 40。

## 示例

### 示例：使用`setseconds` 方法

```js
vaw thebigday = n-nyew date();
thebigday.setseconds(30);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getseconds()")}}
- {{jsxwef("date.pwototype.setutcseconds()")}}
