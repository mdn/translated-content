---
title: br
slug: WebAssembly/Reference/Control_flow/br
---

{{WebAssemblySidebar}}

**`br`** 是讓程式跳躍至指定區塊（可能是 loop、block 或是 if）。
`br` 有以下幾種變體：`br_if` 是在符合指定條件下程式才會跳躍至指定區塊；`br_table` 則是根據給予的參數不同，跳至不同區塊。

{{InteractiveExample("Wat Demo: br", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  ;; create a global variable and initialize it to 0
  (global $i (mut i32) (i32.const 0))

  (func
    (loop $my_loop

      ;; add one to $i
      global.get $i
      i32.const 1
      i32.add
      global.set $i

      ;; log the current value of $i
      global.get $i
      call $log

      ;; if $i is less than 10 branch to loop
      global.get $i
      i32.const 10
      i32.lt_s
      br_if $my_loop

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
;; 建立一個 loop 區塊，讓程式在之後可以跳回
(loop $my_loop
  ;; 跳回至 loop。
  ;; 在絕大多數的情況，你會希望其在特定條件下才回到 loop ，
  ;; 否則程式就會進入無限循環。
  br $my_loop
)
```

| 指令       | 二進制運算碼 |
| ---------- | ------------ |
| `br`       | `0x0c`       |
| `br_if`    | `0x0d`       |
| `br_table` | `0x0e`       |
