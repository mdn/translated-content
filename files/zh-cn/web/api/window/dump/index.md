---
title: Window：dump() 方法
slug: Web/API/Window/dump
l10n:
  sourceCommit: e822af5fc37c5cd436a58b05656cc82e18cf7d63
---

{{ ApiRef() }} {{Non-standard_header}}

**`Window.dump()`** 方法将消息输出到浏览器的标准输出（`stdout`）。如果浏览器是从终端启动的，通过 `dump()` 发送的输出将出现在该终端中。

`dump()` 输出的内容*不会*被发送到浏览器的开发者工具控制台。要向开发者工具控制台输出日志，请使用 [`console.log()`](/zh-CN/docs/Web/API/console/log_static)。

## 语法

```js-nolint
dump(message)
```

### 参数

- `message`
  - : 包含要输出信息的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
