---
title: 混入
slug: Glossary/Mixin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

_混入_（mixin）是一个{{Glossary("class", "类")}}（WebAPI 规范中的术语为接口），其中部分或全部的{{Glossary("method", "方法")}}与{{Glossary("property", "属性")}}尚未实现，需要另一个{{Glossary("class", "类")}}或者{{Glossary("interface", "接口")}}来提供这些缺失的实现。

新的类或者接口包括混入的以及自身定义的属性和方法。所有方法和属性的使用方法在混入或实现混入的接口/类中保持一致。

混入的优点在于：可用于简化多个接口需要包含相同的方法与属性的 API 的设计。

例如，`WindowOrWorkerGlobalScope` 混入用于提供需要在 {{domxref("Window")}} 与 {{domxref("WorkerGlobalScope")}} 接口上都可用的方法和属性。该混入由这两个接口实现。

## 参见

- 维基百科上的[混入](https://zh.wikipedia.org/wiki/Mixin)
