---
title: パフォーマンスタイムライン
slug: Web/API/Performance_Timeline
---

{{DefaultAPISidebar("Performance Timeline API")}}

**パフォーマンスタイムライン** API は、{{domxref("Performance")}} インターフェイスへの拡張を定義して、アプリケーション内のクライアントサイドの待ち時間の測定をサポートします。 拡張機能は、特定のフィルタ基準に基づいて{{domxref("PerformanceEntry","performance entry metrics", '', 'true')}} を取得するためのインターフェイスを提供します。この規格には、特定のパフォーマンスイベントがブラウザのパフォーマンスタイムラインに追加されたときに通知される _[performance observer](#performance_observers)_ コールバックをアプリケーションで定義できるインターフェイスも含まれます。

このドキュメントは規格のインターフェイスの概要を提供します。インターフェイスの詳細については、リファレンスページおよび[パフォーマンスタイムラインの使用](/ja/Web/API/Performance_Timeline/Using_Performance_Timeline)を参照してください。

## Performance 拡張

パフォーマンスタイムライン API は、{{domxref("Performance")}} インターフェイスを、指定されたフィルター基準に応じて一連の {{domxref("PerformanceEntry","パフォーマンスレコード (メトリック)")}} を取得するためのさまざまなメカニズムを提供する 3 つのメソッドで拡張します。メソッドは以下のとおりです。

- {{domxref("Performance.getEntries","getEntries()")}}
  - : Returns all recorded {{domxref("PerformanceEntry","performance entries")}} or, optionally, the entries based on the specified {{domxref("PerformanceEntry.name","name")}}, {{domxref("PerformanceEntry.entryType","performance type")}} and/or the {{domxref("PerformanceEntry.initiatorType","initiatorType")}} (such as an HTML element).
- {{domxref("Performance.getEntriesByName","getEntriesByName()")}}
  - : Returns the recorded {{domxref("PerformanceEntry","performance entries")}} based on the specified {{domxref("PerformanceEntry.name","name")}} and optionally the {{domxref("PerformanceEntry.entryType","performance type")}}.
- {{domxref("Performance.getEntriesByType","getEntriesByType()")}}
  - : Returns the recorded {{domxref("PerformanceEntry","performance entries")}} based on the specified {{domxref("PerformanceEntry.entryType","performance type")}}.

## PerformanceEntry インターフェイス

The {{domxref("PerformanceEntry")}} interface encapsulates a single _performance entry_ — that is, a single data point or metric in the _performance timeline_. This interface has the following four properties, and these properties are extended (with additional constraints) by other interfaces (such as {{domxref("PerformanceMark")}}):

- {{domxref("PerformanceEntry.name","name")}}
  - : The name of the performance entry when the metric was created.
- {{domxref("PerformanceEntry.entryType","entryType")}}
  - : The type of performance metric (for example, "`mark`").
- {{domxref("PerformanceEntry.startTime","startTime")}}
  - : A {{domxref("DOMHighResTimeStamp","high resolution timestamp")}} representing the starting time for the performance entry.
- {{domxref("PerformanceEntry.duration","duration")}}
  - : A {{domxref("DOMHighResTimeStamp","high resolution timestamp", '', 'true')}} representing the time value of the duration of the performance event. (Some performance {{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} have no concept of _duration_ and this value is set to `'0'` for such types.)

This interface includes a {{domxref("PerformanceEntry.toJSON","toJSON()")}} method that returns the serialization of the {{domxref("PerformanceEntry")}} object. The serialization is specific to the performance entry's {{domxref("PerformanceEntry.entryType","type")}}.

## Performance オブザーバー

{{SeeCompatTable}}

The _performance observer_ interfaces allow an application to register an _observer_ for specific performance event types, and when one of those event types is recorded, the application is _notified_ of the event via the observer's callback function that was specified when the observer was created.

When the observer (callback) is invoked, the callback's parameters include a _{{domxref("PerformanceObserverEntryList","performance observer entry list")}}_ that contains only _observed_ {{domxref("PerformanceEntry","performance entries")}}. That is, the list contains entries only for the event types that were specified when the observer's {{domxref("PerformanceObserver.observe","observe()")}} method was invoked. The {{domxref("PerformanceObserverEntryList","performance observer entry list")}} interface has the same three `getEntries*()` methods as the {{domxref("Performance")}} interface. However, note there is one key difference with these methods; the {{domxref("PerformanceObserverEntryList","performance observer entry list")}} versions are used to retrieve _observed_ performance entries within the observer callback.

Besides the {{domxref("PerformanceObserver","PerformanceObserver's")}} interface's {{domxref("PerformanceObserver.observe","observe()")}} method (which is used to register the {{domxref("PerformanceEntry.entryType","entry types")}} to _observe_), the {{domxref("PerformanceObserver")}} interface also has a {{domxref("PerformanceObserver.disconnect","disconnect()")}} method that stops an observer from receiving further events.

> **メモ:** Performance observers were added to the `Level 2` version of the standard and were not widely implemented.

## 実装状況

A summary of the interfaces' implementation status is provided below, including a link to more detailed information.

- Performance interface extensions: As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/Web/API/Performance#Browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers and have less support on mobile devices.
- PerformanceEntry: As shown in the {{domxref("PerformanceEntry")}} interface's [Browser Compatibility](/Web/API/PerformanceEntry#Browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers and have less support on mobile devices.
- Performance Observers {{experimental_inline}}: As shown in the {{domxref("PerformanceObserver")}} interface's [Browser Compatibility](/Web/API/PerformanceObserver#Browser_compatibility) table, this interface has no shipping implementations.

To test your browser's support for these interfaces, run the [`perf-api-support`](http://mdn.github.io/web-performance/perf-api-support.html) application.

## あわせて参照

- [A Primer for Web Performance Timing APIs](http://siusin.github.io/perf-timing-primer/)
