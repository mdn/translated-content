---
title: nop
slug: WebAssembly/Reference/Control_flow/nop
---

{{WebAssemblySidebar}}

**`nop`** 源於 no-operation（沒有任何操作），顧名思義，它不會執行任何動作。

{{InteractiveExample("Wat Demo: nop", "tabbed-shorter")}}

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

## 語法

```wasm
nop
```

| 指令  | 二進制運算碼 |
| ----- | ------------ |
| `nop` | `0x01`       |
