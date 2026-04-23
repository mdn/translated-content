---
title: br：Wasm 文本指令
short-title: br
slug: WebAssembly/Reference/Control_flow/br
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`br`** 语句跳转到循环（loop）标签、块（block）标签或 if 标签。

`br` 有两个变体，`br_if` 按条件进行跳转，`br_table` 则基于参数的值跳转到不同的块。

{{InteractiveExample("Wat 演示：br", "tabbed-taller")}}

```wat interactive-example
(module
  ;; 导入浏览器 console 对象，你需要将其从 JavaScript 传入
  (import "console" "log" (func $log (param i32)))

  ;; 创建一个全局变量并初始化为 0
  (global $i (mut i32) (i32.const 0))

  (func
    (loop $my_loop

      ;; 给 $i 加 1
      global.get $i
      i32.const 1
      i32.add
      global.set $i

      ;; 打印当前的 $1 值
      global.get $i
      call $log

      ;; 如果 $1 小于 10，则跳转到循环标签
      global.get $i
      i32.const 10
      i32.lt_s
      br_if $my_loop

    )
  )

  (start 1) ;; 自动运行第一个函数
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## 语法

```wat
;; 对循环打标签，使其可以被跳转
(loop $my_loop

  ;; 跳转到该循环。
  ;; 大多数时候，你会想要将下面的指令放在 if 语句中，仅在符合条件时跳转，
  ;; 否则，会进入无限循环。
  br $my_loop

)
```

| 指令       | 二进制操作码 |
| ---------- | ------------ |
| `br`       | `0x0c`       |
| `br_if`    | `0x0d`       |
| `br_table` | `0x0e`       |
