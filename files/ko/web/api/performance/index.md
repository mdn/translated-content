---
title: Performance
slug: Web/API/Performance
tags:
  - API
  - Interface
  - Navigation Timing
  - NeedsTranslation
  - Performance
  - Reference
  - TopicStub
  - Web Performance
translation_of: Web/API/Performance
---
{{APIRef("High Resolution Time")}}

The **`Performance`** interface represents timing-related performance information for the given page.

An object of this type can be obtained by calling the {{domxref("Window.performance")}} read-only attribute.

<div class="note"><p><strong><em>Note</em>: </strong>This interface and its members are available in <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a>, except where indicated below. Note that some available parts of the interface are not yet documented (see the <a href="http://www.w3.org/TR/performance-timeline/#sec-window.performance-attribute">Performance Timeline</a> and <a href="http://www.w3.org/TR/user-timing/#extensions-performance-interface">User Timing</a> specs for more details.) Also note that performance markers and measures are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.</p></div>

## Properties

_The `Performance` interface doesn't inherit any properties._

- {{domxref("Performance.navigation")}} {{readonlyInline}}
  - : Is a {{domxref("PerformanceNavigation")}} object representing the type of navigation that occurs in the given browsing context, like the amount of redirections needed to fetch the resource. Not available in workers.
- {{domxref("Performance.onframetimingbufferfull")}}
  - : TBD
- {{domxref("Performance.onresourcetimingbufferfull")}}
  - : Is an {{domxref("EventTarget")}} which is a callback that will be called when the {{event("resourcetimingbufferfull")}} event is fired.
- {{domxref("Performance.timing")}} {{readonlyInline}}
  - : Is a {{domxref("PerformanceTiming")}} object containing latency-related performance information. Not available in workers.

## Methods

\__The `Performance` interface doesn't inherit any_ method\_.

- {{domxref("Performance.clearFrameTimings()")}}
  - : TBD
- {{domxref("Performance.clearMarks()")}}
  - : Removes the given _mark_ from the browser's performance entry buffer.
- {{domxref("Performance.clearMeasures()")}}
  - : Removes the given _measure_ from the browser's performance entry buffer.
- {{domxref("Performance.clearResourceTimings()")}}
  - : Removes all {{domxref("PerformanceEntry","performance entries")}} with a {{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" from the browser's performance data buffer.
- {{domxref("Performance.getEntries()")}}
  - : Returns a list of {{domxref("PerformanceEntry")}} objects based on the given _filter_.
- {{domxref("Performance.getEntriesByName()")}}
  - : Returns a list of {{domxref("PerformanceEntry")}} objects based on the given _name_ and _entry type_.
- {{domxref("Performance.getEntriesByType()")}}
  - : Returns a list of {{domxref("PerformanceEntry")}} objects of the given _entry type_.
- {{domxref("Performance.mark()")}}
  - : Creates a {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance entry buffer_ with the given name.
- {{domxref("Performance.measure()")}}
  - : Creates a named {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's performance entry buffer between two specified marks (known as the _start mark_ and _end mark_, respectively).
- {{domxref("Performance.now()")}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the amount of milliseconds elapsed since a reference instant.
- {{domxref("Performance.setFrameTimingBufferSize()")}}
  - : TBD
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : Sets the browser's resource timing buffer size to the specified number of "`resource`" {{domxref("PerformanceEntry.entryType","type")}} {{domxref("PerformanceEntry","performance entry")}} objects.
- {{domxref("Performance.toJSON()")}}
  - : Is a jsonizer returning a json object representing the `Performance` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
