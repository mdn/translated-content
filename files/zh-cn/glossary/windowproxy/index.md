---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**`WindowProxy`** 对象是 [`Window`](/zh-CN/docs/Web/API/Window) 对象的包装器。`WindowProxy` 对象存在于每个[浏览上下文](/zh-CN/docs/Glossary/Browsing_context)中。对 `WindowProxy` 对象执行的所有操作也将应用于它当前包装的底层 `Window` 对象。因此，和 `WindowProxy` 对象直接交互几乎与直接和 `Window` 对象交互相同。当浏览上下文被导航时，其 `WindowProxy` 包装的 `Window` 对象会发生变化。

## 参见

- HTML 规范：[WindowProxy 小节](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow 问题：[WindowProxy 与 Window 对象？](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
