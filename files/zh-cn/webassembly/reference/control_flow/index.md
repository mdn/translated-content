---
title: WebAssembly 控制流指令
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: 46853a1dd8f08bd65f177f1f073cb2aa9bb1dd55
---

WebAssembly 控制流指令。

- [`block`](/zh-CN/docs/WebAssembly/Reference/Control_flow/block)
  - : Creates a label that can later be branched out of with a [`br`](/zh-CN/docs/WebAssembly/Reference/Control_flow/br).
- [`br`](/zh-CN/docs/WebAssembly/Reference/Control_flow/br)
  - : Branches to a loop or block.
- [`call`](/zh-CN/docs/WebAssembly/Reference/Control_flow/call)
  - : 调用一个函数。
- [`drop`](/zh-CN/docs/WebAssembly/Reference/Control_flow/Drop)
  - : 从栈中弹出一个值，并抛弃它。
- [`end`](/zh-CN/docs/WebAssembly/Reference/Control_flow/end)
  - : 可以用于终止 `block`、`loop`、`if` 或 `else`。
- [`if...else`](/zh-CN/docs/WebAssembly/Reference/Control_flow/if...else)
  - : 如果栈上的最后一项为真（非零），则执行一条语句。
- [`loop`](/zh-CN/docs/WebAssembly/Reference/Control_flow/loop)
  - : Creates a label that can later be branched to with a [`br`](/zh-CN/docs/WebAssembly/Reference/Control_flow/br).
- [`nop`](/zh-CN/docs/WebAssembly/Reference/Control_flow/nop)
  - : 什么也不做。
- [`return`](/zh-CN/docs/WebAssembly/Reference/Control_flow/return)
  - : 从函数返回。
- [`select`](/zh-CN/docs/WebAssembly/Reference/Control_flow/Select)
  - : Selects one of its first two operands based on a boolean condition.
- [`unreachable`](/zh-CN/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : 表示不可到达的代码点。
