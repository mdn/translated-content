---
title: requestIdleCallback
slug: Web/API/Window/requestIdleCallback
---

{{APIRef("HTML DOM")}}

**`window.requestIdleCallback()`** 方法插入一个函数，这个函数将在浏览器空闲时期被调用。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间`timeout`，则有可能为了在超时前执行函数而打乱执行顺序。

你可以在空闲回调函数中调用 **`requestIdleCallback()`**，以便在下一次通过事件循环之前调度另一个回调。

> **备注：** 强烈建议使用`timeout`选项进行必要的工作，否则可能会在触发回调之前经过几秒钟。

## 语法

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### 参数

- `callback`
  - : 一个在事件循环空闲时即将被调用的函数的引用。函数会接收到一个名为 {{domxref("IdleDeadline")}} 的参数，这个参数可以获取当前空闲时间以及回调是否在超时时间前已经执行的状态。
- `options` {{optional_inline}}

  - : 包括可选的配置参数。具有如下属性：

    - `timeout`：如果指定了 timeout，并且有一个正值，而回调在 timeout 毫秒过后还没有被调用，那么回调任务将放入事件循环中排队，即使这样做有可能对性能产生负面影响。

### 返回值

一个 ID，可以把它传入 {{domxref("Window.cancelIdleCallback()")}} 方法来结束回调。

## 示例

请阅读我们这篇[后台任务 API 的协同调度](/zh-CN/docs/Web/API/Background_Tasks_API)文章中的[完整示例](/zh-CN/docs/Web/API/Background_Tasks_API#示例)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
