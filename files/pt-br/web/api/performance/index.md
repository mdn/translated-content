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

> **Nota:**This interface and its members are available in [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API), except where indicated below. Note that some available parts of the interface are not yet documented (see the [Performance Timeline](http://www.w3.org/TR/performance-timeline/#sec-window.performance-attribute) and [User Timing](http://www.w3.org/TR/user-timing/#extensions-performance-interface) specs for more details.) Also note that performance markers and measures are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.

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

_The `Performance` interface doesn't inherit any method_.

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

| Specification                                                                                                                                                        | Status                                                   | Comment                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Highres Time Level 2', '#the-performance-interface', 'toJSON()')}}                                                             | {{Spec2('Highres Time Level 2')}}             | Defines `toJson()` method.                                                                                                  |
| {{SpecName('Highres Time', '#the-performance-interface', 'Performance')}}                                                                     | {{Spec2('Highres Time')}}                         | Defines `now()` method.                                                                                                     |
| {{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance')}}                                                     | {{Spec2('Navigation Timing')}}                 | Defines `timing` and `navigation` properties.                                                                               |
| {{SpecName('Performance Timeline Level 2', '#extensions-to-the-performance-interface', 'Performance extensions')}}             | {{Spec2('Performance Timeline Level 2')}} | Changes `getEntries()` interface.                                                                                           |
| {{SpecName('Performance Timeline', '#sec-window.performance-attribute', 'Performance extensions')}}                                 | {{Spec2('Performance Timeline')}}             | Defines `getEntries()`, `getEntriesByType()` and `getEntriesByName()` methods.                                              |
| {{SpecName('Resource Timing', '#extensions-performance-interface', 'Performance extensions')}}                                         | {{Spec2('Resource Timing')}}                     | Defines `clearResourceTimings()` and `setResourceTimingBufferSize()` methods and the `onresourcetimingbufferfull` property. |
| {{SpecName('User Timing Level 2', '#extensions-performance-interface', 'Performance extensions')}}                                 | {{Spec2('User Timing Level 2')}}             | Clarifies `mark()`, `clearMark()`, `measure()` and `clearMeasure()` methods.                                                |
| {{SpecName('User Timing', '#extensions-performance-interface', 'Performance extensions')}}                                             | {{Spec2('User Timing')}}                         | Defines `mark()`, `clearMark()`, `measure()` and `clearMeasure()` methods.                                                  |
| {{SpecName('Frame Timing', '#extensions-performance-interface','Performance extensions')}} | {{Spec2('User Timing')}}                         | Defines `clearFrameTimings()`, `setFrameTimingBufferSize()`, and `onframetimingbufferfull` methods.                         |

## Compatibilidade com navegadores

{{Compat("api.Performance")}}
