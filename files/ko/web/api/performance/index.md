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
<div>{{APIRef("High Resolution Time")}}</div>

<p>The <strong><code>Performance</code></strong> interface represents timing-related performance information for the given page.</p>

<p>An object of this type can be obtained by calling the {{domxref("Window.performance")}} read-only attribute.</p>

<div class="note">
<p><strong><em>Note</em>: </strong>This interface and its members are available in <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a>, except where indicated below. Note that some available parts of the interface are not yet documented (see the <a href="http://www.w3.org/TR/performance-timeline/#sec-window.performance-attribute">Performance Timeline</a> and <a href="http://www.w3.org/TR/user-timing/#extensions-performance-interface">User Timing</a> specs for more details.) Also note that performance markers and measures are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.</p>
</div>

<h2 id="Properties">Properties</h2>

<p><em>The <code>Performance</code> interface doesn't inherit any properties.</em></p>

<dl>
 <dt>{{domxref("Performance.navigation")}} {{readonlyInline}}</dt>
 <dd>Is a {{domxref("PerformanceNavigation")}} object representing the type of navigation that occurs in the given browsing context, like the amount of redirections needed to fetch the resource. Not available in workers.</dd>
 <dt>{{domxref("Performance.onframetimingbufferfull")}}</dt>
 <dd>TBD</dd>
 <dt>{{domxref("Performance.onresourcetimingbufferfull")}}</dt>
 <dd>Is an {{domxref("EventTarget")}} which is a callback that will be called when the {{event("resourcetimingbufferfull")}} event is fired.</dd>
 <dt>{{domxref("Performance.timing")}} {{readonlyInline}}</dt>
 <dd>Is a {{domxref("PerformanceTiming")}} object containing latency-related performance information. Not available in workers.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em><em>The <code>Performance</code> interface doesn't inherit any </em>method</em>.</p>

<dl>
 <dt>{{domxref("Performance.clearFrameTimings()")}}</dt>
 <dd>TBD</dd>
 <dt>{{domxref("Performance.clearMarks()")}}</dt>
 <dd>Removes the given <em>mark</em> from the browser's performance entry buffer.</dd>
 <dt>{{domxref("Performance.clearMeasures()")}}</dt>
 <dd>Removes the given <em>measure</em> from the browser's performance entry buffer.</dd>
 <dt>{{domxref("Performance.clearResourceTimings()")}}</dt>
 <dd>Removes all {{domxref("PerformanceEntry","performance entries")}} with a {{domxref("PerformanceEntry.entryType","entryType")}} of "<code>resource</code>" from the browser's performance data buffer.</dd>
 <dt>{{domxref("Performance.getEntries()")}}</dt>
 <dd>Returns a list of {{domxref("PerformanceEntry")}} objects based on the given <em>filter</em>.</dd>
 <dt>{{domxref("Performance.getEntriesByName()")}}</dt>
 <dd>Returns a list of {{domxref("PerformanceEntry")}} objects based on the given <em>name</em> and <em>entry type</em>.</dd>
 <dt>{{domxref("Performance.getEntriesByType()")}}</dt>
 <dd>Returns a list of {{domxref("PerformanceEntry")}} objects of the given <em>entry type</em>.</dd>
 <dt>{{domxref("Performance.mark()")}}</dt>
 <dd>Creates a {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's <em>performance entry buffer</em> with the given name.</dd>
 <dt>{{domxref("Performance.measure()")}}</dt>
 <dd>Creates a named {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's performance entry buffer between two specified marks (known as the <em>start mark</em> and <em>end mark</em>, respectively).</dd>
 <dt>{{domxref("Performance.now()")}}</dt>
 <dd>Returns a {{domxref("DOMHighResTimeStamp")}} representing the amount of milliseconds elapsed since a reference instant.</dd>
 <dt>{{domxref("Performance.setFrameTimingBufferSize()")}}</dt>
 <dd>TBD</dd>
 <dt>{{domxref("Performance.setResourceTimingBufferSize()")}}</dt>
 <dd>Sets the browser's resource timing buffer size to the specified number of "<code>resource</code>" {{domxref("PerformanceEntry.entryType","type")}} {{domxref("PerformanceEntry","performance entry")}} objects.</dd>
 <dt>{{domxref("Performance.toJSON()")}}</dt>
 <dd>Is a jsonizer returning a json object representing the <code>Performance</code> object.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Performance")}}</p>

</div>
</div>
