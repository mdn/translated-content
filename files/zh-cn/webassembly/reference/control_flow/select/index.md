---
title: select：Wasm 文本指令
short-title: select
slug: WebAssembly/Reference/Control_flow/select
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

**`select`** 指令，基于它的第三个操作数是否为 0 选择它的前两个操作数中的一个。与其他语言中的三元运算符（例如，`false ? 10 : 20`）有些相似，但不会[短路](https://zh.wikipedia.org/wiki/短路求值)。指令后面可能直接跟着值类型：`select (result T)`。`select (result T)` 使用的是不同的二进制操作码，它除了允许 WebAssembly MVP（`i32`、`i64`、`f32`、`f64`）所引入的类型外，还允许其他的类型，例如，允许在两个 `externref` 值之间进行选择。

{{InteractiveExample("Wat 演示：select", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "select_simple") (result i32)
    ;; 将两个值加载到栈上
    i32.const 10
    i32.const 20

    ;; 将 0 修改为 `1`（真），以得到第一个值（`10`）
    i32.const 0
    select
  )
  (func (export "select_externref") (param $value externref) (param $condition i32) (result externref)
    ;; 下面的是“select t”，显式类型的变体
    ref.null extern
    local.get $value
    local.get $condition
    select (result externref)
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { select_simple, select_externref } = result.instance.exports;

  console.log(select_simple());
  // 期望输出：20

  // 如果第二个参数为 0，则返回第一个参数（其可能是任意的 JS 值）
  const map = new Map();
  console.log(select_externref(map, 0));
  // 期望输出：[object Map]
  console.log(select_externref(map, -1));
  // 期望输出：null
});
```

## 语法

```wat
;; 将两个值推入栈中
i32.const 10
i32.const 20

;; 将 0 修改为 `1`（真），以得到第一个值（`10`）
i32.const 0
select
```

```plain
f32.const nan
f32.const -54.1

;; 将 0 修改为 `1`（真），以得到第一个值（`nan`）
i32.const 0
select (result f32)
```

| 指令       | 二进制操作码 |
| ---------- | ------------ |
| `select`   | `0x1b`       |
| `select t` | `0x1c`       |
