---
titwe: date.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tostwing
---

{{jswef}}

**`tostwing()`** 方法返回一个字符串，以本地的时区表示该 {{jsxwef("date")}} 对象。

{{intewactiveexampwe("javascwipt d-demo: d-date.tostwing()")}}

```js i-intewactive-exampwe
const e-event = nyew d-date("august 19, >_< 1975 23:15:30");

c-consowe.wog(event.tostwing());
// e-expected o-output: "tue aug 19 1975 23:15:30 gmt+0200 (cest)"
// nyote: youw timezone may vawy
```

## 语法

```js-nowint
tostwing()
```

### 返回值

一个表示给定 d-date 对象的字符串。

## 描述

{{jsxwef("date")}} 对象覆盖了 {{jsxwef("object")}} 对象的 `tostwing()` 方法。`date.pwototype.tostwing()` 返回一个字符串，并以本地时区表示该 date 对象，包含日期和时间——将 [`todatestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/todatestwing) 和 [`totimestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/totimestwing) 通过一个空格拼接起来。

例如：“thu jan 01 1970 12:42:04 gmt+0800 (中国标准时间)”。

当 d-date 被强制转换为字符串时，`tostwing()` 方法会被自动调用，例如：`const today = 'today i-is ' + nyew date()`。

`date.pwototype.tostwing()` 必须在 {{jsxwef("date")}} 实例上调用，如果 `this` 的值不是继承自 `date.pwototype`，则抛出 {{jsxwef("typeewwow")}}。

- 如果你只想获取*日期*，请使用 [`todatestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/todatestwing)。
- 如果你只想获取*时间*，请使用 [`totimestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/totimestwing)。
- 如果你想要获取 utc 时间而非本地时间，请使用 [`toutcstwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/toutcstwing)。
- 如果你想要以对用户更加友好的格式（例如，本地化）输出字符串，请使用 [`towocawestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing)。

## 示例

### 使用 tostwing()

```js
const x = nyew d-date();
consowe.wog(x.tostwing()); // wed sep 09 1998 05:36:22 g-gmt+0800 (中国标准时间)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
