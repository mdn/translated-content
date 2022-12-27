---
title: window.requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`window.requestIdleCallback()`** method queues a function to be called during a browser's idle periods. This enables developers to perform background and low priority work on the main event loop, without impacting latency-critical events such as animation and input response. Functions are generally called in first-in-first-out order; however, callbacks which have a `timeout` specified may be called out-of-order if necessary in order to run them before the timeout elapses.

> **備註：** You can call `requestIdleCallback()` within an idle callback function to schedule another callback to take place no sooner than the next pass through the event loop.

## Syntax

```plain
var handle = window.requestIdleCallback(callback[, options])
```

### Return value

An ID which can be used to cancel the callback by passing it into the {{domxref("window.cancelIdleCallback()")}} method.

### Parameters

- `callback`
  - : A reference to a function that should be called in the near future, when the event loop is idle. The callback function is passed a {{domxref("IdleDeadline")}} object describing the amount of time available and whether or not the callback has been run because the timeout period expired.
- `options` {{optional_inline}}
  - : Contains optional configuration parameters. Currently only one property is defined: `timeout`: If `timeout` is specified and has a positive value, and the callback has not already been called by the time timeout milliseconds have passed, the timeout will be called during the next idle period, even if doing so risks causing a negative performance impact.

## Example

See our [complete example](/zh-TW/docs/Web/API/Background_Tasks_API#Example) in the article [Cooperative Scheduling of Background Tasks API](/zh-TW/docs/Web/API/Background_Tasks_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
