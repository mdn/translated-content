---
title: if...else：Wasm 文本指令
short-title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`if`** 语句在栈顶项为真（非零）时执行一条语句。当条件为假（0）时，执行另一条语句。

{{InteractiveExample("Wat 演示：if...else", "tabbed-taller")}}

```wat interactive-example
(module
  ;; 导入浏览器 console 对象，你需要将其从 JavaScript 传入
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; 如果你想运行 if 块，将 0 修改为正数（真）
    (if
      (then
        i32.const 1
        call $log ;; 应该打印‘1’
      )
      (else
        i32.const 0
        call $log ;; 应该打印‘0’
      )
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
i32.const 0
(if
  (then
    ;; 做点什么
  )
  (else
    ;; 做点其他的
  )
)
```

要想在栈上保留返回值，添加 `result` 语句。

```wat
i32.const 0
(if (result i32)
  (then
    ;; 做点什么
    (i32.const 1)
  )
  (else
    ;; 做点其他的
    (i32.const 2)
  )
)
(drop)
```

| 指令   | 二进制操作码 |
| ------ | ------------ |
| `if`   | `0x04`       |
| `else` | `0x05`       |
