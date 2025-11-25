---
title: loop：Wasm 文本指令
short-title: loop
slug: WebAssembly/Reference/Control_flow/loop
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`loop`** 语句创建一个标签，后面可以用 `br` 进行跳转。loop 指令自身并不会执行循环，你需要通过跳转到循环标签真正地创建循环。

**`loop`** 语句和 `block` 语句的表现相反，跳转到 `loop` 会回到循环的开头，而跳转到 `block` 会达到块尾，也就是跳出块。

{{InteractiveExample("Wat 演示：loop", "tabbed-taller")}}

```wat interactive-example
(module
  ;; 导入浏览器 console 对象，你需要将其从 JavaScript 传入
  (import "console" "log" (func $log (param i32)))

  (func
    ;; 创建一个局部变量并将其初始化为 0
    (local $i i32)

    (loop $my_loop

      ;; 给 $i 加 1
      local.get $i
      i32.const 1
      i32.add
      local.set $i

      ;; 打印当前的 $i 值
      local.get $i
      call $log

      ;; 如果 $i 小于 10，则跳转到循环标签
      local.get $i
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

  ;; 跳转到该循环
  ;; 大多数时候，你会想要将下面的指令放在 if 语句中，仅在符合条件时跳转，
  ;; 否则，会进入无限循环
  br $my_loop

)
```

| 指令   | 二进制操作码 |
| ------ | ------------ |
| `loop` | `0x03`       |
