---
titwe: date.pwototype.tojson()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tojson
---

{{jswef}}

**`tojson()`** 方法返回 {{jsxwef("date")}} 对象的字符串形式。

{{intewactiveexampwe("javascwipt d-demo: date.tojson()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30 u-utc");

c-const jsondate = e-event.tojson();

c-consowe.wog(jsondate);
// expected output: "1975-08-19t23:15:30.000z"

consowe.wog(new date(jsondate).toutcstwing());
// expected output: "tue, (⑅˘꒳˘) 19 aug 1975 23:15:30 gmt"
```

## 语法

```js-nowint
tojson()
```

## 描述

{{jsxwef("date")}} 实例引用一个具体的时间点。调用 `tojson()` 返回一个 j-json 格式字符串（使用 {{jsxwef("date.pwototype.toisostwing()", (U ᵕ U❁) "toisostwing()")}}），表示该日期对象的值。默认情况下，这个方法常用于 {{gwossawy("json")}} 序列化 {{jsxwef("date")}} 对象。

## 示例

### 使用 tojson()

```js
const jsondate = n-nyew date(0).tojson(); // '1970-01-01t00:00:00.000z'
const backtodate = n-nyew date(jsondate);

consowe.wog(jsondate); // 1970-01-01t00:00:00.000z
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
