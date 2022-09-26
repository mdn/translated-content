---
title: IdleDeadline
slug: Web/API/IdleDeadline
---

{{APIRef("Background Tasks")}}

`IdleDeadline` interface 在 {{domxref("Window.requestIdleCallback()")}}被调用的时候做为一个`IdleDeadline` interface 类型的参数传递给 requestIdleCallback 方法的回调函数。它提供了一个方法，可以让你判断用户代理 (浏览器) 还剩余多少闲置时间可以用来执行耗时任务{{domxref("..timeRemaining", "timeRemaining()")}},{{domxref("IdleDeadline.didTimeout", "didTimeout")}}, didTimeout 属性用来判断当前的回调函数是否被执行因为回调函数存在过期时间 (requestIdleCallback 的第二个参数用来指定执行超时时间，即回调函数在规定的时间内是否被执行，如果没有执行 didTimeout 属性将为 ture，如果任务是急需完成的此时应该忽略剩余时间逻辑上强制执行回调函数)。

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
