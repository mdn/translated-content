---
title: WebAssembly 控制流指令
slug: WebAssembly/Reference/Control_flow
l10n:
  sourceCommit: 70653a2f5e8969901bad84504a6b36ecdcdd4e51
---

WebAssembly 控制流指令。

- [`block`](/zh-CN/docs/WebAssembly/Reference/Control_flow/block)
  - : 创建一个后面可以用 [`br`](/zh-CN/docs/WebAssembly/Reference/Control_flow/br) 跳出的标签。
- [`br`](/zh-CN/docs/WebAssembly/Reference/Control_flow/br)
  - : 跳转到循环（loop）标签、块（block）标签或 if 标签。
- [`call`](/zh-CN/docs/WebAssembly/Reference/Control_flow/call)
  - : 调用一个函数。
- [`drop`](/zh-CN/docs/WebAssembly/Reference/Control_flow/drop)
  - : 从栈中弹出一个值，并丢弃它。
- [`end`](/zh-CN/docs/WebAssembly/Reference/Control_flow/end)
  - : 可以用于终止 `block`、`loop`、`if` 或 `else`。
- [`if...else`](/zh-CN/docs/WebAssembly/Reference/Control_flow/if...else)
  - : 如果栈上的最后一项为真（非零），则执行一条语句。
- [`loop`](/zh-CN/docs/WebAssembly/Reference/Control_flow/loop)
  - : 创建一个后面可以用 [`br`](/zh-CN/docs/WebAssembly/Reference/Control_flow/br) 跳转到的标签。
- [`nop`](/zh-CN/docs/WebAssembly/Reference/Control_flow/nop)
  - : 什么也不做。
- [`return`](/zh-CN/docs/WebAssembly/Reference/Control_flow/return)
  - : 从函数返回。
- [`select`](/zh-CN/docs/WebAssembly/Reference/Control_flow/select)
  - : 基于布尔条件选择它的头两个操作数的其中之一。
- [`unreachable`](/zh-CN/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : 表示不可到达的代码点。
