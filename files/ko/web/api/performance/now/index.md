---
title: performance.now()
slug: Web/API/Performance/now
---

{{APIRef("High Resolution Timing")}}

The **`performance.now()`** method returns a {{domxref("DOMHighResTimeStamp")}}, measured in milliseconds.

> **경고:** The timestamp is not actually high-resolution. To mitigate security threats such as [Spectre](https://spectreattack.com/), browsers currently round the results to varying degrees. (Firefox started rounding to 1 millisecond in Firefox 60.) Some browsers may also slightly randomize the timestamp. The precision may improve again in future releases; browser developers are still investigating these timing attacks and how best to mitigate them.

{{AvailableInWorkers}}

The returned value represents the time elapsed since the [time origin](/ko/docs/Web/API/DOMHighResTimeStamp#The_time_origin).

Bear in mind the following points:

- In dedicated workers created from a {{domxref("Window")}} context, the value in the worker will be lower than `performance.now()` in the window who spawned that worker. It used to be the same as `t0` of the main context, but this was changed.
- In shared or service workers, the value in the worker might be higher than that of the main context because that window can be created after those workers.

## Syntax

```js
t = performance.now();
```

## Example

```js
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
```

Unlike other timing data available to JavaScript (for example [`Date.now`](/ko/docs/JavaScript/Reference/Global_Objects/Date/now)), the timestamps returned by `performance.now()` are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also unlike `Date.now()`, the values returned by `performance.now()` always increase at a constant rate, independent of the system clock (which might be adjusted manually or skewed by software like NTP). Otherwise, `performance.timing.navigationStart + performance.now()` will be approximately equal to `Date.now()`.

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `performance.now()` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 1ms.

```js
// reduced time precision (1ms) in Firefox 60
performance.now();
// 8781416
// 8781815
// 8782206
// ...


// reduced time precision with `privacy.resistFingerprinting` enabled
performance.now();
// 8865400
// 8866200
// 8866700
// ...
```

In Firefox, you can also enable `privacy.resistFingerprinting` — this changes the precision to 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [When milliseconds are not enough: performance.now()](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now) from HTML5 Rocks.
