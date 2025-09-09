---
title: return
slug: WebAssembly/Reference/Control_flow/return
---

{{WebAssemblySidebar}}

**`return`** 用來處理函數的回傳。

- 如果記憶體堆疊中沒有記錄任何東西，函數不會回傳任何東西，或是回傳 void。
- 如果記憶體堆疊中的值的類型、數量與函數指定的相同，則回傳該值。
- 如果記憶體堆疊中有多個與函數指定類型相同值，則回傳最後 N 個值，其餘捨棄。

{{InteractiveExample("Wat Demo: return", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "get_90") (result i32)
    ;; load 10 onto the stack
    i32.const 10
    ;; load 90 onto the stack
    i32.const 90
    ;; return the second value (90); the first is discarded
    return
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { get_90 } = result.instance.exports;
  console.log(get_90());
  // Expected output: 90
});
```

## 語法

```wasm
f32.const 4.3
return
```

```wasm
i32.const 7
f32.const 4.3
return
```

| 指令     | 二進制運算碼 |
| -------- | ------------ |
| `return` | `0x0f`       |
