---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
---

{{WebAssemblySidebar}}

**`if`** 用來處理條件式。如果在記憶體堆疊中的最後一個值為 true (1)，就會執行陳述式裡的程式；如果為 false (0)，則執行其他陳述式。

{{InteractiveExample("Wat Demo: if...else", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; change to positive number (true) if you want to run the if block
    (if
      (then
        i32.const 1
        call $log ;; should log '1'
      )
      (else
        i32.const 0
        call $log ;; should log '0'
      )
    )
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
