---
title: Drop
slug: WebAssembly/Reference/Control_flow/drop
---

{{WebAssemblySidebar}}

**`drop`** 會取出記憶體堆疊的第一個值並將之清除。

{{InteractiveExample("Wat Demo: drop", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two values onto the stack
    i32.const 10
    i32.const 20

    ;; drop the top item from the stack (`20`)
    drop

    call $log ;; log the top value on the stack (`10`)
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wasm
;; 在記憶體堆疊中加入多個值
i32.const 1
i32.const 2
i32.const 3
;; 清除記憶體堆疊中第一個值（也就是最後加入的值）—— `3`
drop
;; 堆疊中第一個值變成 `2`
```

| 指令   | 二進制運算碼 |
| ------ | ------------ |
| `drop` | `0x1a`       |
