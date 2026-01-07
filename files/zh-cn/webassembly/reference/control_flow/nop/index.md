---
title: nop：Wasm 文本指令
short-title: nop
slug: WebAssembly/Reference/Control_flow/nop
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`nop`** 代表没有操作（no-operation）。就是字面意思什么也不做。

{{InteractiveExample("Wat 演示：nop", "tabbed-shorter")}}

```wat interactive-example
(module
  (func (export "do_nothing")
    nop
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  result.instance.exports.do_nothing();
});
```

## 语法

```wat
nop
```

| 指令  | 二进制操作码 |
| ----- | ------------ |
| `nop` | `0x01`       |
