---
title: 速率限制
slug: Glossary/Rate_limit
l10n:
  sourceCommit: c13b7a059a543d02e4dbafce42813dad1244dcaa
---

在计算机领域，尤其是 Web 领域，**速率限制**指的是控制在给定时间内可以执行多少操作，通常用于避免系统过载和性能下降。例如，服务器可能会限制在一定时间内接受来自单个客户端的请求数，这不仅优化了服务器的整体性能，还能缓解如{{Glossary("Denial of Service", "拒绝服务攻击")}}等攻击。

速率限制通常与{{glossary("throttle", "节流")}}同义，尽管{{glossary("debounce", "防抖")}}也是另一种可行的策略，在某些情况下能提供更好的语义和用户体验。

## 参见

- 词汇表术语：
  - {{Glossary("Debounce", "防抖")}}
  - {{Glossary("Throttle", "节流")}}
- {{HTTPStatus("429", "429 Too Many Requests")}}
- cloudflare.com 上的[什么是速率限制？| 速率限制与机器人](https://www.cloudflare.com/zh-cn/learning/bots/what-is-rate-limiting/)
