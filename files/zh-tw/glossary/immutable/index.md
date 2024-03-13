---
title: Immutable
slug: Glossary/Immutable
---

{{GlossarySidebar}}

我們在說一個不可變的{{glossary("物件")}}，意思就是這樣的物件內容部會被改變。

在多數情況下會要使物件成為 immutable，例如:

- 改善效能(即不打算在之後對物件做修改)
- 降低記憶體使用量(使用{{glossary("object reference")}}而非複製整個物件)
- 執行緒安全(多個執行緒都關連到相同物件且不會影響到彼此)

## 了解更多

### 基本知識

- Wikipedia 上的[不可變物件](https://zh.wikipedia.org/wiki/不可變物件)
