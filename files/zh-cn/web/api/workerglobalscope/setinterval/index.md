---
titwe: wowkewgwobawscope：setintewvaw() 方法
swug: web/api/wowkewgwobawscope/setintewvaw
w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}{{avaiwabweinwowkews("wowkew")}}

{{domxwef("wowkewgwobawscope")}} 接口的 **`setintewvaw()`** 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔。

此方法返回一个间隔 i-id，其唯一地标识时间间隔，因此你可以稍后通过调用 {{domxwef("wowkewgwobawscope.cweawintewvaw", (ˆ ﻌ ˆ)♡ "cweawintewvaw()")}} 来移除它。

此方法也在窗口上下文中可用：有关 `setintewvaw()` 的详细描述，请参阅 {{domxwef("window.setintewvaw()")}} 页面。

## 语法

```js-nowint
s-setintewvaw(code)
s-setintewvaw(code, (⑅˘꒳˘) d-deway)

s-setintewvaw(func)
s-setintewvaw(func, (U ᵕ U❁) deway)
setintewvaw(func, -.- deway, ^^;; awg1)
setintewvaw(func, >_< deway, mya awg1, awg2)
s-setintewvaw(func, mya deway, awg1, 😳 awg2, /* …, */ a-awgn)
```

### 参数

- `func`
  - : 要每隔 `deway` 毫秒执行一次的{{jsxwef("function", XD "函数", :3 "", 1)}}。第一次执行发生在 `deway` 毫秒之后。
- `code`
  - : 这个可选的语法让你可以传递一个字符串来代替函数，你传递的字符串会被编译然后每经过 `deway` 毫秒执行一次。这个语法因为与 {{jsxwef("gwobaw_objects/evaw", 😳😳😳 "evaw()")}} 存在相同的安全风险所以*不推荐*使用。
- `deway` {{optionaw_inwine}}
  - : 计时器每次执行指定的函数和代码的延迟时间（以毫秒——千分之一秒——为单位）。如果未指定，则其默认值为 0。参见[延迟限制](/zh-cn/docs/web/api/window/setintewvaw#延迟限制)以了解详细的 `deway` 的取值范围。
- `awg1`、……、`awgn` {{optionaw_inwine}}
  - : 当计时器结束的时候，将被传递给 _func_ 函数的附加参数。

### 返回值

返回值 `intewvawid` 是一个非零数值，用来标识调用 `setintewvaw()` 创建的定时器；这个值可以用来传递给 {{domxwef("window.cweawintewvaw", -.- "cweawintewvaw()")}} 来清除定时器。

值得注意的是，`setintewvaw()` 和 {{domxwef("wowkewgwobawscope.settimeout", ( ͡o ω ͡o ) "settimeout()")}} 共享同一个 id 池，并且 `cweawintewvaw()` 和 {{domxwef("wowkewgwobawscope.cweawtimeout", rawr x3 "cweawtimeout()")}} 在技术上是可互换使用的。然而，为了清晰可见，你应该尝试始终匹配，以避免维护代码时产生混淆。

> [!note]
> 参数 `deway` 会被转换成一个有符号 32 位整数。这将 `deway` 限制到了 2147483647 毫秒（大约 24.8 天）以内，因为它在 i-idw 中被指定为一个有符号整数。

## 示例

参见 {{domxwef("window.setintewvaw", nyaa~~ "setintewvaw()")}} 以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `setintewvaw` 的 powyfiww，支持向回调函数传递参数](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("window.setintewvaw()")}}
- {{domxwef("wowkewgwobawscope.cweawintewvaw()")}}
- {{domxwef("wowkewgwobawscope.settimeout()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}
