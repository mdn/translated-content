---
title: Performance API
slug: Web/API/Performance_API
tags:
  - NeedsContent
  - Web パフォーマンス
  - ガイド
  - パフォーマンス
  - 概要
translation_of: Web/API/Performance_API
---
{{DefaultAPISidebar("High Resolution Time")}}

**High Resolution Time** 規格は、アプリケーション内でクライアント側の待ち時間測定をサポートする {{domxref("Performance")}} インターフェイスを定義しています。{{domxref("Performance")}} インターフェイスは 1000 分の 1 ミリ秒の精度であるため、高解像度と見なされます (ハードウェアまたはソフトウェアの制約を受けます)。これらのインターフェイスは、フレームレートの計算 (アニメーションでは潜在的に重要) やベンチマーク (リソースのロード時間など) を含む、さまざまな使用例をサポートしています。

Since a platform's *system clock* is subject to various *skews* (such as NTP adjustments), the interfaces support a *monotonic clock* i.e. a clock that is always increasing. As such, the `Performance` API defines a {{domxref("DOMHighResTimeStamp")}} type rather than using the {{jsxref("Date.now","Date.now()")}} interface.

## DOMHighResTimeStamp

The {{domxref("DOMHighResTimeStamp")}} type, as its name implies, represents a high resolution point in time. This type is a `double` and is used by the performance interfaces. The value could be a discrete point in time or the difference in time between two discrete points in time.

The unit of *DOMHighResTimeStamp* is milliseconds and should be accurate to 5 µs (microseconds). However, If the browser is unable to provide a time value accurate to 5 microseconds (because, for example, due to hardware or software constraints), the browser can represent a the value as a time in milliseconds accurate to a millisecond.

## メソッド

The `{{domxref("Performance")}}` interface has two methods. The {{domxref("Performance.now","now()")}} method returns a {{domxref("DOMHighResTimeStamp")}} whose value that depends on the {{domxref("PerformanceTiming.navigationStart","navigation start")}} and scope. If the scope is a window, the value is the time the browser context was created and if the scope is a {{domxref("Worker","worker")}}, the value is the time the worker was created.

The {{domxref("Performance.toJSON","toJSON()")}} method returns a serialization of the {{domxref("Performance")}} object, for those attributes that can be serialized.

## プロパティ

The `{{domxref("Performance")}}` interface has two properties. The {{domxref("Performance.timing","timing")}} property returns a {{domxref("PerformanceTiming")}} object containing latency-related performance information such as the start of navigation time, start and end times for redirects, start and end times for responses, etc.

The `{{domxref("Performance.navigation","navigation")}}` property returns a {{domxref("PerformanceNavigation")}} object representing the type of navigation that occurs in the given browsing context, such as the page was navigated to from history, the page was navigated to by following a link, etc.

## インターフェイス

<dl>
 <dt>{{domxref('Performance')}}</dt>
 <dd>Provides methods and properties containing timing-related performance information for the given page.</dd>
 <dt>{{domxref('PerformanceEntry')}}</dt>
 <dd>Provides methods and properties the encapsulate a single performance metric that is part of the performance timeline.</dd>
 <dt>{{domxref('PerformanceFrameTiming')}}</dt>
 <dd>Provides methods and properties containing frame timing data about the browser's event loop.</dd>
 <dt>{{domxref('PerformanceMark')}}</dt>
 <dd>An abstract interface for <a href="/ja/docs/Web/API/PerformanceEntry" title="The PerformanceEntry object encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).">`performance entries`</a> with an <a href="/ja/docs/Web/API/PerformanceEntry/entryType" title="The entryType property returns the performance entry's type. The valid entryType values are:">`entry type`</a> of "`mark`". Entries of this type are created by calling <a href="/ja/docs/Web/API/Performance/mark" title="The mark() method creates a timestamp in the browser's performance entry buffer with the given name. The application defined timestamp can be retrieved by one of the Performance interface's getEntries*() methods (getEntries(), getEntriesByName() or getEntriesByType()).">`performance.mark()`</a> to add a named <a href="/ja/docs/Web/API/DOMHighResTimeStamp" title="The DOMHighResTimeStamp type is a double and is used to store a time value. The value could be a discrete point in time or the difference in time between two discrete points in time. The unit is milliseconds and should be accurate to 5 µs (microseconds). However, if the browser is unable to provide a time value accurate to 5 microseconds (due, for example, to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond.">`DOMHighResTimeStamp`</a> (the mark) to the browser's performance timeline.</dd>
 <dt>{{domxref('PerformanceMeasure')}}</dt>
 <dd>An abstract interface for <a href="/ja/docs/Web/API/PerformanceEntry" title="The PerformanceEntry object encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).">`performance entries`</a> with an <a href="/ja/docs/Web/API/PerformanceEntry/entryType" title="The entryType property returns the performance entry's type. The valid entryType values are:">`entry type`</a> of "`measure`". Entries of this type are created by calling <a href="/ja/docs/Web/API/Performance/measure" title="The measure() method creates a named timestamp in the browser's performance entry buffer between two specified marks (known as the start mark and end mark, respectively). The named timestamp is referred to as a measure.">`performance.measure()`</a> to add a named<a href="/ja/docs/Web/API/DOMHighResTimeStamp" title="The DOMHighResTimeStamp type is a double and is used to store a time value. The value could be a discrete point in time or the difference in time between two discrete points in time. The unit is milliseconds and should be accurate to 5 µs (microseconds). However, if the browser is unable to provide a time value accurate to 5 microseconds (due, for example, to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond.">`DOMHighResTimeStamp`</a> (the measure) between two marks to the browser's performance timeline.</dd>
 <dt>{{domxref('PerformanceNavigationTiming')}}</dt>
 <dd>Provides methods and properties to store and retrieve <a href="/ja/docs/Web/API/DOMHighResTimeStamp" title="The DOMHighResTimeStamp type is a double and is used to store a time value. The value could be a discrete point in time or the difference in time between two discrete points in time. The unit is milliseconds and should be accurate to 5 µs (microseconds). However, if the browser is unable to provide a time value accurate to 5 microseconds (due, for example, to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond.">`high resolution timestamps`</a> or metrics regarding the browser's document navigation events. </dd>
 <dt>{{domxref('PerformanceObserver')}}</dt>
 <dd>Provides methods and properties used to observe performance measurement events and be notified of new <a href="/ja/docs/Web/API/PerformanceEntry" title="The PerformanceEntry object encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).">performance entries</a> as they are recorded in the browser's performance timeline.</dd>
 <dt>{{domxref('PerformanceResourceTiming')}}</dt>
 <dd>Provides methods and properties for retrieving and analyzing detailed network timing data regarding the loading of an application's resources.</dd>
</dl>

## 仕様

|仕様書|ステータス|コメント|
|--|--|--|
|{{SpecName('Highres Time')}}|{{Spec2('Highres Time')}}|Initial definition.|
|{{SpecName('Highres Time Level 2')}}|{{Spec2('Highres Time Level 2')}}|Adds `performance` attribute on `Window` and `WorkerGlobalScope`.|
|{{SpecName('Highres Time Level 3')}}|{{Spec2('Highres Time Level 3')}}|Add `timeOrigin` property to `Performance` interface.|
|{{SpecName('Frame Timing')}}|{{Spec2('Frame Timing')}}|Adds `PerformanceFrameTiming` interface.|
|{{SpecName('Navigation Timing')}}|{{Spec2('Navigation Timing')}}|Adds the `PerformanceTiming` and `PerformanceNavigation` interfaces. Adds `timing` and `navigation` properties to the `Performance` interface.|
|{{SpecName('Navigation Timing Level 2')}}|{{Spec2('Navigation Timing Level 2')}}|Adds the `PerformanceNavigationTiming` interface. Obsolete's the the `PerformanceTiming` interface, the `PerformanceNavigation` interface, as well as the `timing` and `navigation` properties to the `Performance` interface.|
|{{SpecName('Performance Timeline')}}|{{Spec2('Performance Timeline')}}|Adds the `PerformanceEntry` interface, the `PerformanceEntryList` type, as well as the `getEntries()`, `getEntriesByType()`, and `getEntriesByName()` methods on the `Performance` interface.|
|{{SpecName('Performance Timeline Level 2')}}|{{Spec2('Performance Timeline Level 2')}}|Adds serializer to the `PerformanceEntry` interface as well as adding the `PerformanceObserver` interface and callback|
|{{SpecName('Resource Timing')}}|{{Spec2('Resource Timing')}}|Adds the `PerformanceResourceTiming` interface. Adds the `clearResourceTimings()` method, the `setResourceTimingBufferSize()` method, and the `onresourcetimingbufferfull` event handler to the `Performance` interface. Also adds the `Timing-Allow-Origin` response header.|
|{{SpecName('Resource Timing 2')}}|{{Spec2('Resource Timing 2')}}|Adds the `nextHopProtocol`, `workerStart`, `transferSize`, `encodedBodySize`, and `decodedBodySize` properties to the `PerformanceResourceTiming` interface.|
|{{SpecName('Resource Timing 3')}}|{{Spec2('Resource Timing 3')}}||
|{{SpecName('User Timing')}}|{{Spec2('User Timing')}}|Adds `mark()`, `clearMarks()`, `measure()` and `clearMeasures()` methods to the `Performance` interface. Adds the `PerformanceMark` and `PeformanceMeasure` interfaces.|
|{{SpecName('User Timing Level 2')}}|{{Spec2('User Timing Level 2')}}||

## 実装状況

As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/Web/API/Performance#Browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers.

To test your browser's support for the {{domxref("Performance")}} interface, run the `[perf-api-support](http://mdn.github.io/web-performance/perf-api-support.html)` application.

## あわせて参照

- [A Primer for Web Performance Timing APIs](https://w3c.github.io/perf-timing-primer/)
