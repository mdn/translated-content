---
title: Element：beforescriptexecute 事件
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("DOM")}}{{Non-standard_header}}

> [!WARNING]
> 此事件曾是规范早期版本中的提案。请勿依赖它。

**`beforescriptexecute`** 事件在脚本即将执行时触发。取消该事件可阻止脚本执行。

这是 Gecko（Firefox）特有的专有事件。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("beforescriptexecute", (event) => { })

onbeforescriptexecute = (event) => { }
```

## 事件类型

通用的 {{domxref("Event")}}。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [`afterscriptexecute`](/zh-CN/docs/Web/API/Element/afterscriptexecute_event) 事件
