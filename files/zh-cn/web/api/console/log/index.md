---
title: console.log
slug: Web/API/console/log
---

{{APIRef("Console API")}}

**`console.log()`** 方法向 Web 控制台输出一条信息。这条信息可能是单个字符串（包括可选的替代字符串），也可能是一个或多个对象。

{{AvailableInWorkers}}

## 语法

```js-nolint
log(obj1)
log(obj1, /* …, */ objN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

## 参数

- `obj1` ... `objN`
  - : 一个用于输出的 JavaScript 对象列表。其中每个对象会以字符串的形式按照顺序依次输出到控制台。请注意，如果你在最新版本的 Chrome 和 Firefox 中输出对象，你在控制台中得到的是*对该对象的引用*，这不一定是你调用 `console.log()` 时该对象的“值”，但它一定是该对象在你打开控制台时的值。
- `msg`
  - : 一个 JavaScript 字符串，其中包含零个或多个替代字符串。
- `subst1` ... `substN`
  - : JavaScript 对象，用来依次替换 `msg` 中的替代字符串。你可以在替代字符串中指定对象的输出格式。

查看[输出文本到控制台](/zh-CN/docs/Web/API/console#输出文本到控制台)来了解更多 {{ domxref("console") }} 对象的用法。

## 返回值

无（{{jsxref("undefined")}}）。

## 输出对象

不要使用 `console.log(obj)`，而应该使用 `console.log(JSON.parse(JSON.stringify(obj)))`。

这样可以确保你所看到的 `obj` 的值是当前输出的值。否则，大多数浏览器会提供一个随着值的变化而不断更新的实时视图。这可能不是你想要的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [MSDN: Using the F12 Tools Console to View Errors and Status](<https://docs.microsoft.com/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
