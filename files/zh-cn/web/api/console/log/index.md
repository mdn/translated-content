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

## 浏览器兼容性

{{Compat}}

## 规范

不属于任何公开的规范

## 相关链接

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [NodeJS: Console API](http://nodejs.org/docs/latest/api/console.html#console_console_log_data)
