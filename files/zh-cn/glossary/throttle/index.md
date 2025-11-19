---
title: 节流
slug: Glossary/Throttle
l10n:
  sourceCommit: 7b393063694605c366ff4721a5db1cb1b43a5185
---

**节流**（Throttling）最初指通过障碍物减缓流体流速。在编程中，它指的是减慢某个过程的速率，使某项操作只能以一定的频率执行。

节流与{{glossary("debounce", "防抖")}}非常相似。关键区别在于：当操作持续被触发时，节流确保操作仍以最大速率执行，而防抖则会一直等待，直到操作停止一段时间后才执行。

节流的典型用例是与另一个持续更新的状态同步。例如，函数 `onScrolled` 监听 [`scroll`](/zh-CN/docs/Web/API/Document/scroll_event) 事件。`scroll` 事件可能每滚动一个像素就触发一次，因此该函数会在极短的间隔内被频繁调用。如果 `onScrolled` 计算量大，前续调用可能会阻塞后续调用或阻塞其他操作，导致明显的{{glossary("jank", "卡顿")}}。此时可以对 `onScrolled` 进行节流，使其最多每 10 毫秒只能执行一次：

1. 第一次调用 `onScrolled` 被称为*前沿*（leading edge）。
2. 之后每次调用 `onScrolled`，如果距离第一次调用不足 10 毫秒，则属于同一“批次”。
3. 距离第一次调用满 10 毫秒后，称为*后沿*（trailing edge）。

通常而言 `onScrolled` 只会在前沿执行一次，但有时也可能在后沿或前后沿都执行，具体取决于实际需求。如果前后沿都执行，节流通常还会确保下一个前沿调用距离上一个后沿调用至少间隔 10 毫秒。

通过节流，`onScrolled` 的效果依然会持续更新和应用——例如根据文档滚动位置移动另一个 DOM 元素时，该元素依然会随着页面滚动而持续移动，但不会被过于频繁地执行。

{{glossary("Network throttling", "网络限速")}}指通过限制单位时间内可传输的数据量来模拟较慢的网络连接。*节流计时器*指的是降低计时器精度，使得连续读取计时器（如 {{jsxref("Date.now()")}}）时，其值只会以最大速率变化。这两者都是节流概念的具体应用。

## 参见

- 相关术语：
  - {{Glossary("Debounce", "防抖")}}
  - {{Glossary("Rate limit", "速率限制"}}
- CSS-Tricks 上的[通过示例解释防抖与节流](https://css-tricks.com/debouncing-throttling-explained-examples/)（2016 年 4 月 6 日）
