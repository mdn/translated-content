---
title: 防抖
slug: Glossary/Debounce
l10n:
  sourceCommit: 986f2096b273c6cc6827380426ea106410f67d54
---

{{GlossarySidebar}}

在程序设计中，**防抖**指的是在特定时间间隔内忽略发生得过于接近的操作，将它们合并为一次调用。

防抖与{{glossary("throttle", "节流")}}非常相似。关键区别在于节流会对持续操作进行限制，而防抖则会等待调用停止一段特定时间后，将多次重复调用合并为一次。

防抖的典型用例是响应用户输入。当用户正在输入时不应执行其他操作，从而避免让界面变得卡顿。当用户暂停输入时，我们就可以开始处理输入（如过滤结果、给出建议等）。如果函数 `search` 进行 10 毫秒的防抖，意味着：

1. 第一次调用 `search` 被称为*前沿*（leading edge）。
2. 之后每次调用 `search`，如果距离上一次调用不足 10 毫秒，则属于同一“批次”。
3. 距离最后一次调用 `search` 超过 10 毫秒且没有新的调用时，称为*后沿*（trailing edge）。

通常，`search` 只会在后沿执行一次，尽管有时也可能在前沿或两者都执行，具体取决于实际需求。如果在两者都执行，防抖实现通常还会确保下一次前沿调用距离上一次后沿调用至少间隔 10 毫秒。

## 参见

- 相关术语：
  - {{Glossary("Throttle", "节流")}}
  - {{Glossary("Rate limit", "速率限制")}}
- CSS-Tricks 上的[通过示例解释防抖与节流](https://css-tricks.com/debouncing-throttling-explained-examples/)（2016 年 4 月 6 日）
