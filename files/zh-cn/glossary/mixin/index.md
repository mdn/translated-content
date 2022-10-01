---
title: 混合
slug: Glossary/Mixin
---

*混合（mixin）*是一个 {{Glossary("class")}} 或者 {{Glossary("interface")}}，其中部分或全部{{Glossary("method", "methods")}}与{{Glossary("property", "properties")}}未实现，需要另一个{{Glossary("class")}}或者{{Glossary("interface")}}来提供这些缺失的实现。新的类或者接口包括*混合所有的*以及自有的属性和方法。所有方法和属性的使用方法在混合或混合的实现中保持一致。

混合的优点在于：可用于简化多个接口需要包含相同的方法何与属性的 API 的设计。

例如，`WindowOrWorkerGlobalScope` 混合用于提供需要在{{domxref("Window")}}与{{domxref("WorkerGlobalScope")}}上都可用的方法和属性。该混合由这两个接口实现。

## 更多

### 基础知识

- 维基百科上的[Mixin](https://en.wikipedia.org/wiki/Mixin)
