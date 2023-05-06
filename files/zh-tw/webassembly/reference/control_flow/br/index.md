---
title: br
slug: WebAssembly/Reference/Control_flow/br
---

{{WebAssemblySidebar}}

**`br`** 是讓程式跳躍至指定區塊（可能是 loop、block 或是 if）。
`br` 有以下幾種變體：`br_if` 是在符合指定條件下程式才會跳躍至指定區塊；`br_table` 則是根據給予的參數不同，跳至不同區塊。

{{EmbedInteractiveExample("pages/wat/br.html", "tabbed-taller")}}

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
