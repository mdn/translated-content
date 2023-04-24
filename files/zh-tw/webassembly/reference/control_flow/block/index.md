---
title: block
slug: WebAssembly/Reference/Control_flow/block
---

{{WebAssemblySidebar}}

**`block`** 用來創建一個區塊標籤，事後可以用 `br` 讓程式跳出該區塊標籤。

**`loop`** 和 `block` 相似卻相反，在 `loop` 中，在一輪循環結束或是使用 `br` 跳出時，程式會回到循環的開頭；而 `block` 則是會結束該區塊標籤的執行，跳到下一段程式碼。

{{EmbedInteractiveExample("pages/wat/block.html", "tabbed-taller")}}

## 語法

```wasm
;; label the block so that it can be branched to.
(block $my_block
  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block
  ;; this will never be reached, since the br jumped out of the block already.
  unreachable
)
```

| 指令    | 二進制運算碼 |
| ------- | ------------ |
| `block` | `0x02`       |
