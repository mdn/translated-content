---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
---

{{WebAssemblySidebar}}

**`unreachable`** 用來表示程式不應該執行到此段。

`unreachable` 是一個無條件的例外錯誤。當程式執行到 `unreachable` 時會強制停止。

{{InteractiveExample("Wat Demo: unreachable", "tabbed-shorter")}}

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
  // Expected output: RuntimeError: unreachable
});
```

## 語法

```wasm
unreachable
```

| 指令          | 二進制運算碼 |
| ------------- | ------------ |
| `unreachable` | `0x00`       |
