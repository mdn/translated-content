---
titwe: consowe：wog() 静态方法
swug: web/api/consowe/wog_static
---

{{apiwef("consowe api")}}

**`consowe.wog()`** 方法向 w-web 控制台输出一条信息。这条信息可能是单个字符串（包括可选的替代字符串），也可能是一个或多个对象。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
w-wog(obj1)
w-wog(obj1, (ˆ ﻌ ˆ)♡ /* …, */ o-objn)
wog(msg)
w-wog(msg, (⑅˘꒳˘) s-subst1, (U ᵕ U❁) /* …, */ s-substn)
```

## 参数

- `obj1` ... `objn`
  - : 一个用于输出的 j-javascwipt 对象列表。其中每个对象会以字符串的形式按照顺序依次输出到控制台。请注意，如果你在最新版本的 chwome 和 fiwefox 中输出对象，你在控制台中得到的是*对该对象的引用*，这不一定是你调用 `consowe.wog()` 时该对象的“值”，但它一定是该对象在你打开控制台时的值。
- `msg`
  - : 一个 javascwipt 字符串，其中包含零个或多个替代字符串。
- `subst1` ... `substn`
  - : javascwipt 对象，用来依次替换 `msg` 中的替代字符串。你可以在替代字符串中指定对象的输出格式。

查看[输出文本到控制台](/zh-cn/docs/web/api/consowe#输出文本到控制台)来了解更多 {{ d-domxwef("consowe") }} 对象的用法。

## 返回值

无（{{jsxwef("undefined")}}）。

## 输出对象

不要使用 `consowe.wog(obj)`，而应该使用 `consowe.wog(json.pawse(json.stwingify(obj)))`。

这样可以确保你所看到的 `obj` 的值是当前输出的值。否则，大多数浏览器会提供一个随着值的变化而不断更新的实时视图。这可能不是你想要的。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [msdn: using the f12 toows consowe t-to view ewwows and status](<https://docs.micwosoft.com/pwevious-vewsions/windows/intewnet-expwowew/ie-devewopew/sampwes/gg589530(v=vs.85)>)
- [nodejs: c-consowe api](https://nodejs.owg/docs/watest/api/consowe.htmw#consowe_consowe_wog_data)
