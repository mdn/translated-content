---
title: end：Wasm 文本指令
short-title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`end`** 用于终止 `block`、`loop`、`if` 或 `else`。在其他示例中，我们使用的是不需要 `end` 的 s 表达式，因此你不会在哪些示例中找到它。然而，了解它仍是有用的，因为浏览器的开发者工具是这样显示的。

{{InteractiveExample("Wat 演示：end", "tabbed-taller")}}

```wat interactive-example
(module
  ;; 导入浏览器 console 对象，你需要将其从 JavaScript 传入
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; 如果你想运行 if 块，将 0 修改为正数
    if
      i32.const 1
      call $log ;; 应该打印‘1’
    end
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
if
  ;; 做点什么
end
```

| 指令  | 二进制操作码 |
| ----- | ------------ |
| `end` | `0x0b`       |
