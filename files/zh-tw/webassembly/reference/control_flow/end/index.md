---
title: end
slug: WebAssembly/Reference/Control_flow/end
---

{{WebAssemblySidebar}}

**`end`** 用來結束 `block`、`loop`、`if` 或是 `else`。

我們其他 S-表達式範例都不是一定要加上 `end`，所以你在那些範例中不會看到它。然而，因為瀏覽器的開發工具裡會將 `end` 標示出來，所以知道它對你還是有幫助的。

{{InteractiveExample("Wat Demo: end", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; change to positive number if you want to run the if block
    if
      i32.const 1
      call $log ;; should log '1'
    end
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

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
