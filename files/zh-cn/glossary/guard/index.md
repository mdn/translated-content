---
title: Guard
slug: Glossary/Guard
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Guard 是 {{domxref("Headers")}} 对象的新特性 (在 {{domxref("Fetch_API", "Fetch 规范", "", 1)}}中定义），限制像 {{domxref("Headers.set","set()")}} 和 {{domxref("Headers.append","append()")}} 这样的可以修改标头内容的方法。例如，`immutable` guard 意味着标头不能被改变。阅读 [Fetch 基本概念：guard](/zh-CN/docs/Web/API/Fetch_API/Basic_concepts#guard)，以了解更多信息。
