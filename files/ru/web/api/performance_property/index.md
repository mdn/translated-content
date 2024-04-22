---
title: Window.performance
slug: Web/API/performance_property
---

{{APIREf}}

The Web Performance API allows web pages access to certain functions for measuring the performance of web pages and web applications, including the [Navigation Timing](/ru/docs/Navigation_timing) API and high-resolution time data.

## Methods

- {{domxref("Performance.mark()", "performance.mark()")}}
  - : Maps a {{domxref("DOMHighResTimeStamp")}} to a specified name representing the amount of milliseconds elapsed since a reference instant.
- {{domxref("Performance.now()", "performance.now()")}}
  - : Возвращает {{domxref("DOMHighResTimeStamp")}} представляющий количество миллисекунд прошедшее с момента отсчёта.
- `measure()`
  - : This method stores the [`DOMHighResTimeStamp`](http://www.w3.org/TR/hr-time/#domhighrestimestamp) duration between two marks along with the associated name (a "measure").
- **`getEntriesByType()`**
  - : …
- **`getEntriesByType()`**
  - : …
- **`getEntriesByName()`**
  - : …
- `clearMarks()`

  - : If the markName argument is not specified, this method removes all marks and their associated DOMHighResTimeStamp time values.

    If the markName argument is specified, this method removes all DOMHighResTimeStamp time values for the given mark name.

    If the markName argument is specified but the specified markName does not exist, this method will do nothing.

## Properties

- {{domxref("Performance.timing", "performance.timing")}}
  - : Is a {{domxref("PerformanceTiming")}} object containing latency-related performance information.
- {{domxref("Performance.navigation", "performance.navigation")}}
  - : Is a {{domxref("PerformanceNavigation")}} object representing the type of navigation that occurs in the given browsing context, like the amount of redirections needed to fetch the resource.
- [performance.memory](https://docs.webplatform.org/wiki/apis/timing/properties/memory)
  - : A non-standard extension added in Chrome.
