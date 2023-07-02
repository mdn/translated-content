---
title: IdleDeadline
slug: Web/API/IdleDeadline
---

{{APIRef("Background Tasks")}}

`IdleDeadline` 接口在 {{domxref("Window.requestIdleCallback()")}} 被调用时创建的空闲回调的输入参数的数据类型。它提供了一个 {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 方法，可以让你判断用户代理（浏览器）还剩余多少闲置时间可以用来执行耗时任务；以及 {{domxref("IdleDeadline.didTimeout", "didTimeout")}} 属性，用来判断当前的回调函数是否因超时而被执行。

学习更多的 request callbacks 工作原理请参考[Collaborative Scheduling of Background Tasks](/zh-CN/docs/Web/API/Background_Tasks_API).

## Properties

- {{domxref("IdleDeadline.didTimeout")}} {{ReadOnlyInline}}
  - : 一个 Boolean 类型当它的值为 true 的时候说明 callback 正在被执行 (并且上一次执行回调函数执行的时候由于时间超时回调函数得不到执行)，因为在执行 requestIdleCallback 回调的时候指定了超时时间并且时间已经超时。

## Methods

- {{domxref("IdleDeadline.timeRemaining()")}}
  - : 返回一个时间{{domxref("DOMHighResTimeStamp")}}, 并且是浮点类型的数值，它用来表示当前闲置周期的预估剩余毫秒数。如果 idle period 已经结束，则它的值是 0。你的回调函数 (传给 requestIdleCallback 的函数) 可以重复的访问这个属性用来判断当前线程的闲置时间是否可以在结束前执行更多的任务。

## Example

实例[complete example](/zh-CN/docs/Web/API/Background_Tasks_API#Example) （在 [Cooperative Scheduling of Background Tasks API](/zh-CN/docs/Web/API/Background_Tasks_API).文章内）

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cooperative Scheduling of Background Tasks API](/zh-CN/docs/Web/API/Background_Tasks_API)
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
