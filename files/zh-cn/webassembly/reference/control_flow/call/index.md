---
title: call：Wasm 文本指令
short-title: call
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`call`** 调用一个函数，`return_call` 则是其尾调用版本。`call_indirect` 调用一个表中的一个函数，`return_call_indirect` 则是其尾调用版本。

## 示例

使用 `call` 调用从 JavaScript 中导入的 `greet` 函数：

{{InteractiveExample("Wat 演示：call", "tabbed-standard")}}

```wat interactive-example
(module
  ;; 从环境中导入 `greet` 函数
  (import "env" "greet" (func $greet))

  (func
    ;; 调用导入的 `greet` 函数
    call $greet
  )

  ;; 当模块启动时，自动运行第一个函数
  (start 1)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), {
  env: {
    greet: function () {
      console.log("你好");
      // 期望输出：“你好”
    },
  },
});
```

使用 `return_call` 计算一个数的阶乘，并打印导出的 `fac` 函数的调用结果：

{{InteractiveExample("Wat 演示：return_call", "tabbed-standard")}}

```wat interactive-example
(module
  ;; 计算一个数的阶乘
  (func $fac (export "fac") (param $x i64) (result i64)
    ;; 用参数 $x 和 1 调用 `fac-aux` 函数
    (return_call $fac-aux (local.get $x) (i64.const 1))
  )

  ;; 计算阶乘
  (func $fac-aux (param $x i64) (param $r i64) (result i64)
    ;; 如果 $x 等于零，则返回聚集的结果 $r
    (if (result i64) (i64.eqz (local.get $x))
      (then (return (local.get $r)))
      (else
        ;; 否则，用 $x-1 和 $x*$r 递归调用 `fac-aux`
        (return_call $fac-aux
          (i64.sub (local.get $x) (i64.const 1))
          (i64.mul (local.get $x) (local.get $r))
        )
      )
    )
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
const { instance } = await WebAssembly.instantiateStreaming(fetch(url));
const result = instance.exports.fac(5n);

console.log(result);
// 期望输出：120n
```

## 语法

```wat
call $greet
```

| 指令                   | 二进制操作码 |
| ---------------------- | ------------ |
| `call`                 | `0x10`       |
| `call_indirect`        | `0x11`       |
| `return_call`          | `0x12`       |
| `return_call_indirect` | `0x13`       |

## 参见

- [尾调用扩展提案概览](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 对 WebAssembly 尾调用的支持](https://v8.dev/blog/wasm-tail-call)
