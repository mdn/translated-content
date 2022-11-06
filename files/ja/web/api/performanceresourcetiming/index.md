---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
---

{{APIRef("Resource Timing API")}}

**`PerformanceResourceTiming`** インターフェイスは、アプリケーションのリソースのロードに関する詳細なネットワークタイミングデータの取得と分析を可能にします。アプリケーションはタイミングメトリックを使用して、たとえば、{{domxref("XMLHttpRequest")}}、{{SVGElement("SVG","SVG 要素")}}、画像、スクリプトなどの特定のリソースを取得するのにかかる時間を判断できます。

インターフェイスのプロパティは、リダイレクトの開始時刻と終了時刻、フェッチの開始時刻、DNS ルックアップの開始時刻と終了時刻、レスポンスの開始時刻と終了時刻などのネットワークイベントに対する{{domxref("DOMHighResTimeStamp","ハイレゾリューションタイムスタンプ")}}を含むリソースロードタイムラインを作成します。さらに、このインターフェイスは、取得したリソースのサイズや取得を開始したリソースの種類に関するデータを提供する他のプロパティを使用して {{domxref("PerformanceEntry")}} を拡張します。

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## プロパティ

このインターフェイスは、以下のように修飾し制約することによって、リソースパフォーマンスエントリタイプの {{domxref("PerformanceEntry")}} プロパティを拡張します。

- {{domxref("PerformanceEntry.entryType")}}{{readonlyInline}}
  - : `"resource"` を返します。
- {{domxref("PerformanceEntry.name")}}{{readonlyInline}}
  - : Returns the resources URL.
- {{domxref("PerformanceEntry.startTime")}}{{readonlyInline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} for the time a resource fetch started. This value is equivalent to {{domxref("PerformanceEntry.fetchStart")}}.
- {{domxref("PerformanceEntry.duration")}}{{readonlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} and the {{domxref("PerformanceEntry.startTime","startTime")}} properties.

The interface also supports the following properties which are listed in the order in which they are recorded for the fetching of a single resource. An alphabetical listing is shown in the navigation, at left.

- {{domxref('PerformanceResourceTiming.initiatorType')}}{{readonlyInline}}
  - : A {{domxref("DOMString","string")}} representing the _type_ of resource that initiated the performance entry, as specified in {{domxref('PerformanceResourceTiming.initiatorType')}}.
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}}{{readonlyInline}}
  - : A {{domxref("DOMString","string")}} representing the _network protocol_ used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://tools.ietf.org/html/rfc7301).
- {{domxref('PerformanceResourceTiming.workerStart')}}{{readonlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} immediately before dispatching the {{domxref("FetchEvent")}} if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. If the resource is not intercepted by a Service Worker the property will always return 0.
- {{domxref('PerformanceResourceTiming.redirectStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} that represents the start time of the fetch which initiates the redirect.
- {{domxref('PerformanceResourceTiming.redirectEnd')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after receiving the last byte of the response of the last redirect.
- {{domxref('PerformanceResourceTiming.fetchStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to fetch the resource.
- {{domxref('PerformanceResourceTiming.domainLookupStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the domain name lookup for the resource.
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the browser finishes the domain name lookup for the resource.
- {{domxref('PerformanceResourceTiming.connectStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to establish the connection to the server to retrieve the resource.
- {{domxref('PerformanceResourceTiming.connectEnd')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser finishes establishing the connection to the server to retrieve the resource.
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the handshake process to secure the current connection.
- {{domxref('PerformanceResourceTiming.requestStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts requesting the resource from the server.
- {{domxref('PerformanceResourceTiming.responseStart')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first byte of the response from the server.
- {{domxref('PerformanceResourceTiming.responseEnd')}}{{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
- {{domxref('PerformanceResourceTiming.transferSize')}}{{readonlyInline}}
  - : A `number` representing the size (in octets) of the fetched resource. The size includes the response header fields plus the response payload body.
- {{domxref('PerformanceResourceTiming.encodedBodySize')}}{{readonlyInline}}
  - : A `number` representing the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, before removing any applied content-codings.
- {{domxref('PerformanceResourceTiming.decodedBodySize')}}{{readonlyInline}}
  - : A `number` that is the size (in octets) received from the fetch (HTTP or cache) of the _message body_, after removing any applied content-codings.
- {{domxref('PerformanceResourceTiming.serverTiming')}}{{readonlyInline}}
  - : An array of {{domxref("PerformanceServerTiming")}} entries containing server timing metrics.

## メソッド

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : Returns a {{domxref("DOMString")}} that is the JSON representation of the {{domxref("PerformanceResourceTiming")}} object.

## 例

[リソースタイミング API の使用](/ja/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)の例を参照してください。

## 仕様書

| 仕様書                                                                                                                   | ステータス                           | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#performanceresourcetiming', 'PerformanceResourceTiming')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming")}}

## あわせて参照

- [Resource Timing (Overview)](/Web/API/Resource_Timing)
- [Using the Resource Timing API](/ja/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
