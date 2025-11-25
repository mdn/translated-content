---
title: return：Wasm 文本指令
short-title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`return`** 指从函数返回。

- 如果栈上已经没有值，会返回空。
- 如果栈上的值的数量和函数的类型签名指定的数量一样，会返回这些值。
- 如果栈上的值的数量超过函数的返回类型指定的数量，那么会返回位于最上面的 N 个值，并丢弃剩余的值。

{{InteractiveExample("Wat 演示：return", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "get_90") (result i32)
    ;; 将 10 加载到栈上
    i32.const 10
    ;; 将 90 加载到栈上
    i32.const 90
    ;; 返回第二个值（90），第一个值被丢弃
    return
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { get_90 } = result.instance.exports;
  console.log(get_90());
  // 期望输出：90
});
```

## 语法

```wat
f32.const 4.3
return
```

```wat
i32.const 7
f32.const 4.3
return
```

| 指令     | 二进制操作码 |
| -------- | ------------ |
| `return` | `0x0f`       |
