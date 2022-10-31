---
title: console.log
slug: Web/API/Console/log
---

{{ ApiRef() }}

## 概述

向 Web 控制台输出一条消息。

## 语法

```plain
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
console.log('String: %s, Int: %d,Float: %f, Object: %o', str, ints, floats, obj)
console.log(`temp 的值为：${temp}`)
```

## 参数

- `obj1` ... `objN`
  - : 一个用于输出的 JavaScript 对象列表。其中每个对象会以字符串的形式按照顺序依次输出到控制台。
- `msg`
  - : 一个 JavaScript 字符串，其中包含零个或多个替代字符串。
- `subst1` ... `substN`
  - : JavaScript 对象，用来依次替换`msg`中的替代字符串。你可以在替代字符串中指定对象的输出格式。

查看[向控制台输出文本](/zh-CN/docs/Web/API/Console#Outputting_text_to_the_console)来了解更多{{ domxref("console") }}对象的用法。

## 返回值

None ({{jsxref("undefined")}})。

## 输出对象

不要使用`console.log(obj)`，而是使用`console.log(JSON.parse(JSON.stringify(obj)))`。

这样可以确保你所看到的`obj`的值是当前输出的值。否则，许多浏览器会提供一个随着值的变化而不断更新的实时视图。这可能不是你想要的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [MSDN: Using the F12 Tools Console to View Errors and Status](<https://docs.microsoft.com/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
