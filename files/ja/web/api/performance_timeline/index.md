---
title: パフォーマンスタイムライン API
slug: Web/API/Performance_Timeline
l10n:
  sourceCommit: 66c9543af6a0cf1baf89d5b0c972ee7dd08663b0
---

{{DefaultAPISidebar("Performance API")}}

**パフォーマンスタイムライン** API は、 {{domxref("Performance")}} インターフェイスへの拡張を定義して、アプリケーション内のクライアントサイドの待ち時間の測定をサポートします。この拡張機能は、特定のフィルター基準に基づいて{{domxref("PerformanceEntry","パフォーマンス項目指標", '', 'true')}}を取得するためのインターフェイスを提供します。この規格には、特定のパフォーマンスイベントがブラウザーの _パフォーマンスタイムライン_ に追加されたときに通知される _[パフォーマンスオブザーバー](#パフォーマンスオブザーバー)_ コールバックをアプリケーションで定義できるインターフェイスも含まれます。

このドキュメントは規格のインターフェイスの概要を提供します。インターフェイスの詳細については、リファレンスページおよび[パフォーマンスタイムラインの使用](/ja/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)を参照してください。

{{AvailableInWorkers}}

## パフォーマンス拡張

パフォーマンスタイムライン API は、{{domxref("Performance")}} インターフェイスを、指定されたフィルター基準に応じて一連の{{domxref("PerformanceEntry","パフォーマンスレコード（メトリック）", "", 1)}}を取得するためのさまざまなメカニズムを提供する 3 つのメソッドで拡張します。メソッドは以下のとおりです。

- {{domxref("Performance.getEntries","getEntries()")}}
  - : 記録されたすべての{{domxref("PerformanceEntry","パフォーマンス項目","",1)}}を返します。オプションとして、指定した{{domxref("PerformanceEntry.name","名前","",1)}}、{{domxref("PerformanceEntry.entryType","パフォーマンス種別","",1)}}、（HTML要素などの） {{domxref("PerformanceResourceTiming/initiatorType","initiatorType")}} に基づく項目を返します。
- {{domxref("Performance.getEntriesByName","getEntriesByName()")}}
  - : 記録された{{domxref("PerformanceEntry","パフォーマンス項目","",1)}}を、指定された{{domxref("PerformanceEntry.name","名前","",1)}}とオプションで{{domxref("PerformanceEntry.entryType","パフォーマンス種別","",1)}}に基づいて返します。
- {{domxref("Performance.getEntriesByType","getEntriesByType()")}}
  - : 記録された{{domxref("PerformanceEntry","パフォーマンス項目","",1)}}を、指定された{{domxref("PerformanceEntry.entryType","パフォーマンス種別","",1)}}に基づいて返します。

## PerformanceEntry インターフェイス

{{domxref("PerformanceEntry")}} インターフェイスは、単一の _パフォーマンス項目_、つまり、 _パフォーマンスタイムライン_ の単一のデータポイントまたはメトリックをカプセル化します。このインターフェイスは以下の 4 つのプロパティを持ち、これらのプロパティは他のインターフェイス（{{domxref("PerformanceMark")}} など）により（追加の制約を伴って）拡張されます。

- {{domxref("PerformanceEntry.name","name")}}
  - : 指標が作成されたときのパフォーマンス項目の名前です。
- {{domxref("PerformanceEntry.entryType","entryType")}}
  - : パフォーマンス指標の種類です（例えば、 "`mark`"）。
- {{domxref("PerformanceEntry.startTime","startTime")}}
  - : {{domxref("DOMHighResTimeStamp","高精度タイムスタンプ","",1)}}で、このパフォーマンス項目の開始時刻を表します。
- {{domxref("PerformanceEntry.duration","duration")}}
  - : {{domxref("DOMHighResTimeStamp","高精度タイムスタンプ", '', 'true')}}で、このパフォーマンスイベントの長さの時間値を表します。（一部のパフォーマンス{{domxref("PerformanceEntry.entryType","項目種別", '', 'true')}}は _duration_ の概念がなく、そのような種別ではこの値は `'0'` に設定されます。）

このインターフェイスには、 {{domxref("PerformanceEntry")}} オブジェクトのシリアライズを返す {{domxref("PerformanceEntry.toJSON","toJSON()")}} メソッドが含まれています。シリアライズは、パフォーマンス項目の {{domxref("PerformanceEntry.entryType","type")}} に特有のものです。

## パフォーマンスオブザーバー

パフォーマンスオブザーバーのインターフェイスは、アプリケーションが特定のパフォーマンスイベントの種類のオブザーバーを登録することを可能にし、それらのイベントの種類の 1 つが記録されると、オブザーバーが作成されたときに指定されたオブザーバーのコールバック関数によって、アプリケーションにイベントの通知が行われます。

オブザーバー（コールバック）が呼び出されたとき、コールバックの引数には、監視されている{{domxref("PerformanceEntry","パフォーマンス項目","",1)}}のみを含む _{{domxref("PerformanceObserverEntryList","パフォーマンスオブザーバー項目リスト","",1)}}_ が記載されています。つまり、オブザーバーの {{domxref("PerformanceObserver.observe","observe()")}} メソッドが呼び出されたときに指定されたイベントタイプの項目のみがリストに含まれます。この{{domxref("PerformanceObserverEntryList","パフォーマンスオブザーバー項目リスト","",1)}}のインターフェイスは、 {{domxref("Performance")}} インターフェイスと同じ 3 つの `getEntries*()` メソッドを保有しています。しかし、これらのメソッドには異なる形があることに注意してください。{{domxref("PerformanceObserverEntryList","パフォーマンスオブザーバー項目リスト","",1)}}のバージョンは、オブザーバーコールバック内で監視されたパフォーマンス項目を取得するために使用されます。

{{domxref("PerformanceObserver","PerformanceObserver")}} インターフェイスの {{domxref("PerformanceObserver.observe","observe()")}} メソッド（監視する {{domxref("PerformanceEntry.entryType","項目の種類","",1)}}を登録するために使用します）の他に、 {{domxref("PerformanceObserver")}} インターフェイスには {{domxref("PerformanceObserver.disconnect","disconnect()")}} メソッドがあり、オブザーバーがこれ以上イベントを受信しないようにします。

## 仕様書

{{Specifications}}

## 関連情報

- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/)
