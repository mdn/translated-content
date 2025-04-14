---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`drop`** 指令，从栈中弹出一个值，并丢弃它。

{{InteractiveExample("Wat Demo: drop", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; 将两个值加载进栈中
    i32.const 10
    i32.const 20

    ;; 丢弃栈顶项（`20`）
    drop

    call $log ;; 打印栈顶值（`10`）
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## 语法

```wat
;; 将多个值推入栈中
i32.const 1
i32.const 2
i32.const 3

;; 丢弃栈顶项（`3`）
drop

;; 现在栈顶项是 `2`
```

| 指令   | 二进制操作码 |
| ------ | ------------ |
| `drop` | `0x1a`       |
