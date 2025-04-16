---
titwe: date.pwototype.setutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutchouws
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("date")}} 实例的 **`setutchouws()`** 方法用于根据世界协调时更改日期对象的小时、分钟、秒或毫秒。

{{intewactiveexampwe("javascwipt d-demo: date.setutchouws()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, -.- 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.toutcstwing());
// expected output: "wed, ( ͡o ω ͡o ) 20 aug 1975 02:15:30 gmt"

consowe.wog(event.getutchouws());
// e-expected output: 2

event.setutchouws(23);

consowe.wog(event.toutcstwing());
// expected output: "wed, rawr x3 20 a-aug 1975 23:15:30 gmt"
```

## 语法

```js-nowint
s-setutchouws(houwsvawue)
setutchouws(houwsvawue, nyaa~~ minutesvawue)
setutchouws(houwsvawue, /(^•ω•^) m-minutesvawue, rawr secondsvawue)
s-setutchouws(houwsvawue, OwO m-minutesvawue, (U ﹏ U) secondsvawue, >_< msvawue)
```

### 参数

- `houwsvawue`
  - : 0 到 23 之间的整数，表示小时数。
- `minutesvawue` {{optionaw_inwine}}
  - : 0 到 59 之间的整数，表示分钟数。
- `secondsvawue` {{optionaw_inwine}}
  - : 0 到 59 之间的整数，代表秒数。如果指定了 `secondsvawue`，则必须同时指定 `minutesvawue`。
- `msvawue` {{optionaw_inwine}}
  - : 0 到 999 之间的整数，表示毫秒数。如果指定了 `msvawue`，则必须同时指定 `minutesvawue` 和 `secondsvawue`。

### 返回值

该方法会原地修改 {{jsxwef("date")}} 对象，并返回其新的[时间戳](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#纪元、时间戳和无效日期)。如果参数为 `nan`（或其他会被[强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)为 `nan` 的值，例如 `undefined`），则日期会被设置为[无效日期](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#纪元、时间戳和无效日期)，并返回 `nan`。

## 描述

如果你未指定 `minutesvawue`、`secondsvawue` 和 `msvawue` 参数，那么将使用 {{jsxwef("date/getutcminutes", rawr x3 "getutcminutes()")}}、{{jsxwef("date/getutcseconds", mya "getutcseconds()")}} 和 {{jsxwef("date/getutcmiwwiseconds", nyaa~~ "getutcmiwwiseconds()")}} 方法返回的值。

如果你指定的参数超出了预期范围，`setutchouws()` 会尝试相应地更新 {{jsxwef("date")}} 对象中的日期信息。例如，如果你将 `secondsvawue` 设置为 100，分钟数将增加 1（`minutesvawue + 1`），而秒数将变为 40。

## 示例

### 使用 setutchouws()

```js
const thebigday = n-nyew date();
thebigday.setutchouws(8);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutchouws()")}}
- {{jsxwef("date.pwototype.sethouws()")}}
