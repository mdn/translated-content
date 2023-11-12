---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
---

{{WebAssemblySidebar}}

**`if`** 用來處理條件式。如果在記憶體堆疊中的最後一個值為 true (1)，就會執行陳述式裡的程式；如果為 false (0)，則執行其他陳述式。

{{EmbedInteractiveExample("pages/wat/if...else.html", "tabbed-taller")}}

## 語法

```wasm
i32.const 0
(if
  (then
    ;; do something
  )
  (else
    ;; do something else
  )
)
```

| 指令   | 二進制運算碼 |
| ------ | ------------ |
| `if`   | `0x04`       |
| `else` | `0x05`       |
