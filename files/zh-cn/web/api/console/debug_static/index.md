---
title: console：debug() 静态方法
slug: Web/API/console/debug_static
---

{{APIRef("Console API")}}

**`console.debug()`** 方法将一条消息输出到 web 控制台，消息的日志级别为“debug”。只有在控制台配置为显示调试输出时，才会向用户显示该消息。在大多数情况下，日志级别在控制台 UI 中进行配置。该日志级别可能对应于 **`Debug`** 或 **`Verbose`** 日志级别。

{{AvailableInWorkers}}

## 语法

```js-nolint
debug(obj1)
debug(obj1, /* …, */ objN)
debug(msg)
debug(msg, subst1, /* …, */ substN)
```

### 参数

- `obj1` … `objN`
  - : 要输出的 JavaScript 对象列表。按传参的顺序把对象输出到控制台。
- `msg`
  - : 包含零个或多个替换字符串的 JavaScript 字符串，这些替换字符串会按照连续的顺序用 `subst1` 到 `substN` 进行替换。
- `subst1` … `substN`
  - : JavaScript 对象，用来依次替换 `msg` 中的替代字符串。你可以在替代字符串中指定对象的输出格式。查看[使用字符串替换](/zh-CN/docs/Web/API/console#使用字符串替换)了解替换字符串如何工作。

有关详细信息，请参阅 {{domxref("console")}} 对象文档中的[输出文本到控制台](/zh-CN/docs/Web/API/console#输出文本到控制台)。

### 返回值

无 ({{jsxref("undefined")}})。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
