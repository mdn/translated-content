---
title: end
slug: WebAssembly/Reference/Control_flow/end
---

{{WebAssemblySidebar}}

**`end`** 用來結束 `block`、`loop`、`if` 或是 `else`。

我們其他 S-表達式範例都不是一定要加上 `end`，所以你在那些範例中不會看到它。然而，因為瀏覽器的開發工具裡會將 `end` 標示出來，所以知道它對你還是有幫助的。

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

## 語法

```wasm
i32.const 0
if
  ;; do something
end
```

| 指令  | 二進制運算碼 |
| ----- | ------------ |
| `end` | `0x0b`       |
