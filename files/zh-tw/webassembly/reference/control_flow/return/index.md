---
title: return
slug: WebAssembly/Reference/Control_flow/return
---

{{WebAssemblySidebar}}

**`return`** 用來處理函數的回傳。

- 如果記憶體堆疊中沒有記錄任何東西，函數不會回傳任何東西，或是回傳 void。
- 如果記憶體堆疊中的值的類型、數量與函數指定的相同，則回傳該值。
- 如果記憶體堆疊中有多個與函數指定類型相同值，則回傳最後 N 個值，其餘捨棄。

{{EmbedInteractiveExample("pages/wat/return.html", "tabbed-taller")}}

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
