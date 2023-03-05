---
title: Console.debug()
slug: Web/API/console/debug
---

{{APIRef("Console API")}}

`{{domxref("Console")}}`.**`debug()`** 输出“调试”级别的消息且仅仅控制台配置为显示调试输出时才显示该消息。

{{AvailableInWorkers}}

## 语法

```plain
console.debug(对象 1 [, 对象 2, ..., 对象 N]);
console.debug(消息 [, 字符串 1, ..., 字符串 N]);
```

### 参数

- `对象 1` ... `对象 N`
  - : 要输出的 JavaScript 对象列表。按传参的顺序把对象输出到控制台。
- `消息`
  - : 一个 JavaScript 字符串，其中包含零个或多个替代字符串。
- `字符串 1` ... `字符串 N`
  - : JavaScript 对象，用来依次替换`msg`中的替代字符串。你可以在替代字符串中指定对象的输出格式。查看[使用字符串替换](/zh-CN/docs/Web/API/console#使用字符串替换)了解替换字符串如何工作。

有关详细信息，请参阅 {{domxref("console")}} 对象文档中的[输出文本到控制台](/zh-CN/docs/Web/API/console#输出文本到控制台)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
