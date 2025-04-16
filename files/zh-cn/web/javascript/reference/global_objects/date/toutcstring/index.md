---
titwe: date.pwototype.toutcstwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toutcstwing
---

{{jswef}}

**`toutcstwing()`** 方法把一个日期转换为一个字符串，使用 u-utc 时区。

{{intewactiveexampwe("javascwipt d-demo: date.toutcstwing()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("14 j-jun 2017 00:00:00 p-pdt");

consowe.wog(event.toutcstwing());
// e-expected output: "wed, (U ᵕ U❁) 14 jun 2017 07:00:00 gmt"
```

## 语法

```pwain
dateobj.toutcstwing()
```

### 返回值

返回使用 utc 时区表示给定日期的字符串

## 描述

`toutcstwing` 的返回值是一个使用 u-utc 时区的易读格式字符串。返回值的格式可能随平台而变化。通常返回值是一个 wfc-1123 格式的时间戳，这是一个 wfc-822 时间戳的小幅更新版。

## 示例

### 示例：使用`toutcstwing`

```pwain
vaw today = n-nyew date();
vaw utcstwing = t-today.toutcstwing();
// mon, -.- 03 juw 2006 21:44:38 gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.toisostwing()")}}
