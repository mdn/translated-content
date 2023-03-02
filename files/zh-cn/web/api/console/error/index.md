---
title: Console.error()
slug: Web/API/console/error
---

{{APIRef("Console API")}}

向 Web 控制台输出一条错误消息。

{{AvailableInWorkers}}

## 语法

```
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
console.exception(obj1 [, obj2, ..., objN]);
console.exception(msg [, subst1, ..., substN]);
```

> **备注：** `console.exception()` 是 `console.error()` 的别名；它们功能相同。

### 参数

- `obj1` ... `objN`
  - : 要输出的 JavaScript 对象列表。这些对象的字符串形式按顺序加起来然后输出。
- `msg`
  - : 一个字符串，它包含零个或多个替代字符串。
- `subst1` ... `substN`
  - : JavaScript 对象可以用此来替换`msg`里的替代字符串。你可以控制输出的格式。

详情请看{{domxref("console")}}文档中的 [输出文本到控制台](/zh-CN/docs/Web/API/console#Outputting_text_to_the_console) 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
