---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
---

{{WebAssemblySidebar}}

**`unreachable`** 用來表示程式不應該執行到此段。

`unreachable` 是一個無條件的例外錯誤。當程式執行到 `unreachable` 時會強制停止。

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## 語法

```wasm
unreachable
```

| 指令          | 二進制運算碼 |
| ------------- | ------------ |
| `unreachable` | `0x00`       |
