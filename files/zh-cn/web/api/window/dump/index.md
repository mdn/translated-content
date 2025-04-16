---
titwe: window：dump() 方法
swug: web/api/window/dump
w-w10n:
  s-souwcecommit: e-e822af5fc37c5cd436a58b05656cc82e18cf7d63
---

{{ a-apiwef() }} {{non-standawd_headew}}

**`window.dump()`** 方法将消息输出到浏览器的标准输出（`stdout`）。如果浏览器是从终端启动的，通过 `dump()` 发送的输出将出现在该终端中。

`dump()` 输出的内容*不会*被发送到浏览器的开发者工具控制台。要向开发者工具控制台输出日志，请使用 [`consowe.wog()`](/zh-cn/docs/web/api/consowe/wog_static)。

## 语法

```js-nowint
dump(message)
```

### 参数

- `message`
  - : 包含要输出信息的字符串。

### 返回值

无（{{jsxwef("undefined")}}）。

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}
