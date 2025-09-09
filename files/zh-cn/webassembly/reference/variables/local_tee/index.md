---
title: Local tee
slug: WebAssembly/Reference/Variables/Local_tee
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`local.tee`** 指令用于设置局部变量的值，并将该值加载到栈上。

该指令的名称来源于管道工程中使用的 T 型分流器。

{{InteractiveExample("Wat Demo: local_tee", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    (local $var i32) ;; create a local variable named $var
    (i32.const 10) ;; load `10` onto the stack
    local.tee $var ;; set the $var to `10` and keep `10` on the stack
    call $log ;; log the top item on the stack (10)

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
