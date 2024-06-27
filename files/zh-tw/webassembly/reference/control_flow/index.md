---
title: WebAssembly 控制流相關指令
slug: WebAssembly/Reference/Control_flow
---

{{WebAssemblySidebar}}

WebAssembly 控制流相關指令。

- [`block`](/zh-TW/docs/WebAssembly/Reference/Control_flow/block)
  - : 建立一個區塊標籤，事後可以用 [`br`](/zh-TW/docs/WebAssembly/Reference/Control_flow/br) 讓程式跳出該區塊標籤。
- [`br`](/zh-TW/docs/WebAssembly/Reference/Control_flow/br)
  - : 讓程式跳躍至某一 loop 或是 block。
- [`call`](/en-US/docs/WebAssembly/Reference/Control_flow/call)
  - : 執行某一函數。
- [`drop`](/zh-TW/docs/WebAssembly/Reference/Control_flow/Drop)
  - : 從記憶堆疊中移除一個值。
- [`end`](/zh-TW/docs/WebAssembly/Reference/Control_flow/end)
  - : 結束 `block` 、 `loop` 、 `if` 或是 `else`區塊。
- [`if...else`](/zh-TW/docs/WebAssembly/Reference/Control_flow/if...else)
  - : 如果記憶體堆疊中的最後一個值為 true (1)，就會執行陳述式裡的程式。
- [`loop`](/en-US/docs/WebAssembly/Reference/Control_flow/loop)
  - : 建立一個迴圈區塊，事後可以用 [`br`](/zh-TW/docs/WebAssembly/Reference/Control_flow/br) 讓程式跳出該區塊標籤。
- [`nop`](/zh-TW/docs/WebAssembly/Reference/Control_flow/nop)
  - : 不會執行任何動作。
- [`return`](/zh-TW/docs/WebAssembly/Reference/Control_flow/return)
  - : 處理函數的回傳。
- [`select`](/en-US/docs/WebAssembly/Reference/Control_flow/Select)
  - : Selects one of its first two operands based on a boolean condition.
- [`unreachable`](/zh-TW/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : 表示程式不應該執行到此段。