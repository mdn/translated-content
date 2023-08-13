---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
---

{{WebAssemblySidebar}}

**`drop`** 會取出記憶體堆疊的第一個值並將之清除。

{{EmbedInteractiveExample("pages/wat/drop.html", "tabbed-taller")}}

## Syntax

```wasm
;; 在記憶體堆疊中加入多個值
i32.const 1
i32.const 2
i32.const 3
;; 清除記憶體堆疊中第一個值（也就是最後加入的值）—— `3`
drop
;; 堆疊中第一個值變成 `2`
```

| 指令   | 二進制運算碼 |
| ------ | ------------ |
| `drop` | `0x1a`       |
