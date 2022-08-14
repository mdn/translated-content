---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
translation_of: Web/API/PerformanceEntry
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p><span class="seoSummary"><strong><code>PerformanceEntry</code></strong> 객체는 <em>performance timeline</em> 상의 단일 성능 수치를 캡슐화 합니다. <em>performance entry</em>는 응용프로그램의 특정 지점에서 performance <em>{{domxref("PerformanceMark","mark")}}</em>나 <em>{{domxref("PerformanceMeasure","measure")}}</em>를 생성함으로써 (예를 들면 {{domxref("Performance.mark","mark()")}}를 호출하는 방법으로) 직접적으로 만들어질 수 있습니다. 또는 (이미지와 같은) 리소스를 로딩하는 등의 간접적인 방법으로 생성되기도 합니다.</span></p>

<p><code>PerformanceEntry</code> 인스턴스는 항상 다음 서브타입들 중 하나를 따릅니다:</p>

<ul>
 <li>{{domxref("PerformanceMark")}}</li>
 <li>{{domxref("PerformanceMeasure")}}</li>
 <li>{{domxref("PerformanceFrameTiming")}}</li>
 <li>{{domxref("PerformanceNavigationTiming")}}</li>
 <li>{{domxref("PerformanceResourceTiming")}}</li>
 <li>{{domxref("PerformancePaintTiming")}}</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("PerformanceEntry.name")}} {{readonlyInline}}</dt>
 <dd>A value that further specifies the value returned by the {{domxref("PerformanceEntry.entryType")}} property. The value of both depends on the subtype. See property page for valid values.</dd>
 <dt>{{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}</dt>
 <dd>A {{domxref("DOMString")}} representing the type of performance metric such as, for example, "<code>mark</code>". See property page for valid values.</dd>
 <dt>{{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}</dt>
 <dd>A {{domxref("DOMHighResTimeStamp")}} representing the starting time for the performance metric.</dd>
 <dt>{{domxref("PerformanceEntry.duration")}} {{readonlyInline}}</dt>
 <dd>A {{domxref("DOMHighResTimeStamp")}} representing the time value of the duration of the performance event.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}</dt>
 <dd>Returns a JSON representation of the <code>PerformanceEntry</code> object.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>The following example checks all <code>PerformanceEntry</code> properties to see if the browser supports them and if so, write their values to the console.</p>

<pre class="brush: js">function print_PerformanceEntries() {
  // Use getEntries() to get a list of all performance entries
  var p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  var properties = ["name",
                    "entryType",
                    "startTime",
                    "duration"];

  for (var i=0; i &lt; properties.length; i++) {
    // Check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " is NOT supported");
    }
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.PerformanceEntry")}}</p>
