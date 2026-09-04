---
title: unreachable：Wasm 文本指令
short-title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`unreachable`** 用于表示不可到达的代码点。`unreachable` 是无条件的陷阱：要是执行到 `unreachable`，该指令会触发陷阱。

{{InteractiveExample("Wat 演示：unreachable", "tabbed-shorter")}}

```wat interactive-example
(module
  (func (export "throw")
    unreachable
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  result.instance.exports.throw();
  // 期望输出：RuntimeError: unreachable
});
```

## 语法

```wat
unreachable
```

| 指令          | 二进制操作码 |
| ------------- | ------------ |
| `unreachable` | `0x00`       |
