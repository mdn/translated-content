---
title: local.tee：Wasm 文本指令
short-title: local.tee
slug: WebAssembly/Reference/Variables/local.tee
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

**`local.tee`** 指令用于设置局部变量的值，并将该值加载到栈上。

该指令的名称来源于管道工程中使用的 T 型分流器。

{{InteractiveExample("Wat 演示：local_tee", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    (local $var i32) ;; 创建本地变量 $var
    (i32.const 10) ;; 将 `10` 加载到栈上
    local.tee $var ;; 将 $var 设置为 `10` 并将 `10` 保留在栈上
    call $log ;; 记录栈顶上的元素（10）

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## 语法

```wasm
;; 将数字 2 加载到栈上
i32.const 2

;; 将数字 2 存储到变量 $val 中，并将其加载到栈上
local.tee $val
```

| 指令        | 二进制操作码 |
| ----------- | ------------ |
| `local.tee` | `0x22`       |
