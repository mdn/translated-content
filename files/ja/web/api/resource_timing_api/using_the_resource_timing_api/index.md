---
title: リソースタイミング API の使用
slug: Web/API/Resource_Timing_API/Using_the_Resource_Timing_API
l10n:
  sourceCommit: 66c9543af6a0cf1baf89d5b0c972ee7dd08663b0
---

{{DefaultAPISidebar("Performance API")}}

**リソースタイミング API** は、アプリケーションのリソースの読み込みに関する詳細なネットワークタイミングデータを取得して分析する方法を提供します。アプリケーションはタイミングメトリックを使用して、たとえば、{{domxref("XMLHttpRequest")}}、{{SVGElement("SVG","SVG")}} 要素、画像、スクリプトなど特定のリソースを取得するのにかかる時間を判断できます。

このインターフェイスのプロパティは、リダイレクトの開始と終了時刻、フェッチの開始、DNS 検索の開始と終了時刻、レスポンスの開始と終了時刻など、ネットワークイベントの {{domxref("DOMHighResTimeStamp", "high-resolution timestamps")}} で _リソース読み込みタイムライン_ を作成します。このインターフェイスには他にも、取得されたリソースのサイズや、取得を開始したリソースの _type_ に関するデータを提供するプロパティも記載されています。

この文書では、リソースタイミングインターフェイスの使用方法を示します。例を含むインターフェイスの詳細については、それぞれのインターフェイスのリファレンスページと[関連情報](#関連情報)セクションのリファレンスを参照してください。

この例のライブ版は [GitHub](https://mdn.github.io/dom-examples/performance-apis/Using_the_Resource_Timing_API.html) で利用でき、[ソースコード](https://github.com/mdn/dom-examples/blob/main/performance-apis/Using_the_Resource_Timing_API.html)も同様です。プルリクエストや[バグレポート](https://github.com/mdn/dom-examples/issues)も歓迎します。

## リソース読み込みフェーズ

アプリケーションは、リダイレクト、 DNS ルックアップ、 TCP 接続設定など、リソース読み込みのさまざまなフェーズでタイムスタンプを取得することができます。これらのフェーズとそのプロパティ名を図 1 に示します。

![リソース時刻のグラフ](resourcetiming-timestamps.jpg)
図 1. リソースタイミングプロパティ リソースタイミングプロパティ

アプリケーション開発者は、このプロパティ値を使用して、各フェーズにかかる時刻の長さを計算し、その情報を性能問題の診断に役立てることができます。

## タイミングリソース読み込みフェーズ

次の例は、リソースのタイミングプロパティを使用して、リダイレクト ({{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}} と {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}})、DNS ルックアップ ({{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} と {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}})、TCP ハンドシェイク ({{domxref('PerformanceResourceTiming.connectStart','connectStart')}} と {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}})、そしてレスポンス ({{domxref('PerformanceResourceTiming.responseStart','responseStart')}} と {{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}) にかかる時間の長さを計算する例を示しています。この例では、読み込み開始フェーズとリクエスト開始フェーズの開始 (それぞれ {{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}} と {{domxref("PerformanceResourceTiming.requestStart","requestStart")}}) からレスポンスが終わるまでの時間 ({{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}) も算出しています。このタイミングデータは、リソース読み込みフェーズの詳細なプロファイルを提供するので、このデータを使用して、パフォーマンスのボトルネックを特定するのに役立ちます。

```js
function calculate_load_times() {
  // Check performance support
  if (performance === undefined) {
    console.log("= Calculate Load Times: performance NOT supported");
    return;
  }

  // Get a list of "resource" performance entries
  const resources = performance.getEntriesByType("resource");
  if (resources === undefined || resources.length <= 0) {
    console.log("= Calculate Load Times: there are NO `resource` performance records");
    return;
  }

  console.log("= Calculate Load Times");
  resources.forEach((resource, i) => {
    console.log(`== Resource[${i}] - ${resource.name}`);
    // Redirect time
    let t = resource.redirectEnd - resource.redirectStart;
    console.log(`… Redirect time = ${t}`);

    // DNS time
    t = resource.domainLookupEnd - resource.domainLookupStart;
    console.log(`… DNS lookup time = ${t}`);

    // TCP handshake time
    t = resource.connectEnd - resource.connectStart;
    console.log(`… TCP time = ${t}`);

    // Secure connection time
    t = (resource.secureConnectionStart > 0) ? (resource.connectEnd - resource.secureConnectionStart) : "0";
    console.log(`… Secure connection time = ${t}`);

    // Response time
    t = resource.responseEnd - resource.responseStart;
    console.log(`… Response time = ${t}`);

    // Fetch until response end
    t = (resource.fetchStart > 0) ? (resource.responseEnd - resource.fetchStart) : "0";
    console.log(`… Fetch until response end time = ${t}`);

    // Request start until response end
    t = (resource.requestStart > 0) ? (resource.responseEnd - resource.requestStart) : "0";
    console.log(`… Request start until response end time = ${t}`);

    // Start until response end
    t = (resource.startTime > 0) ? (resource.responseEnd - resource.startTime) : "0";
    console.log(`… Start until response end time = ${t}`);
  });
}
```

## リソースサイズの測定

アプリケーションのリソースのサイズは、アプリケーションのパフォーマンスに影響を与える可能性があるため、リソースのサイズに関する正確なデータを取得することは（特に非ホスト型リソースの場合）重要である場合があります。 {{domxref("PerformanceResourceTiming")}} インターフェイスには、リソースのサイズデータを取得するために使用できるプロパティが 3 つあります。 {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} プロパティは、レスポンスヘッダーフィールドとレスポンスペイロード本体を記載した、取り出したリソースのサイズ（オクテット単位）を返すもので、レスポンスヘッダーフィールドは、レスポンスペイロード本体に含まれます。 {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} プロパティは、フェッチ（HTTP またはキャッシュ）から受け取った、適用されたコンテンツコーディングを削除する**前**の _ペイロード本体_ のサイズ（オクテット数）を返します。 {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} は、_メッセージ本体_ のフェッチ (HTTP またはキャッシュ) から受け取ったサイズ (オクテット数) を、適用されているすべての content-coding を除去した**後**で返します。

次の例は、これら 3 つのプロパティの使い方を示しています。

```js
function display_size_data(){
  // Check for support of the PerformanceResourceTiming.*size properties and print their values
  // if supported.
  if (performance === undefined) {
    console.log("= Display Size Data: performance NOT supported");
    return;
  }

  const entries = performance.getEntriesByType("resource");
  if (entries === undefined) {
    console.log("= Display Size Data: performance.getEntriesByType() is NOT supported");
    return;
  }

  // For each "resource", display its *Size property values
  console.log("= Display Size Data");
  entries.forEach((entry, i) => {
    console.log(`== Resource[${i}] - ${entry.name}`);
    if ("decodedBodySize" in entry) {
      console.log(`… decodedBodySize[${i}] = ${entry.decodedBodySize}`);
    } else {
      console.log(`… decodedBodySize[${i}] = NOT supported`);
    }

    if ("encodedBodySize" in entry) {
      console.log(`… encodedBodySize[${i}] = ${entry.encodedBodySize}`);
    } else {
      console.log(`… encodedBodySize[${i}] = NOT supported`);
    }

    if ("transferSize" in entry) {
      console.log(`… transferSize[${i}] = ${entry.transferSize}`);
    } else {
      console.log(`… transferSize[${i}] = NOT supported`);
    }
  });
}
```

## リソースバッファーの管理

ブラウザーは、リソースタイミングバッファ内で少なくとも 150 のリソースタイミングパフォーマンス項目をサポートする必要がありますが、アプリケーションによっては、その制限を超えるリソースを使用することがあります。開発者がバッファーサイズを管理しやすくするために、リソースタイミングは {{domxref("Performance")}} インターフェイスを拡張する 2 つのメソッドを定義します。{{domxref("Performance.clearResourceTimings","clearResourceTimings()")}} メソッドは、ブラウザーのリソースパフォーマンス項目バッファからすべての "リソース" 型のパフォーマンス項目を削除します。 {{domxref("Performance.setResourceTimingBufferSize","setResourceTimingBufferSize()")}} メソッドは、リソースパフォーマンス項目のバッファサイズを、指定された数のリソースに設定します{{domxref("PerformanceEntry","performance entries")}}。

次の例は、これら 2 つの方法の使用方法を示しています。

```js
function clear_resource_timings() {
  if (performance === undefined) {
    console.log("= performance.clearResourceTimings(): performance NOT supported");
    return;
  }
  // Check if Performance.clearResourceTiming() is supported
  console.log ("= Print performance.clearResourceTimings()");
  const supported = typeof performance.clearResourceTimings === "function";
  if (supported) {
    console.log("… Performance.clearResourceTimings() = supported");
    performance.clearResourceTimings();
  } else {
    console.log("… Performance.clearResourceTiming() = NOT supported");
    return;
  }
  // getEntries should now return zero
  const p = performance.getEntriesByType("resource");
  if (p.length === 0) {
    console.log("… Performance data buffer cleared");
  } else {
    console.log(`… Performance data buffer NOT cleared (still have '${p.length}' items`);
  }
}

function set_resource_timing_buffer_size(n) {
  if (performance === undefined) {
    console.log("= performance.setResourceTimingBufferSize(): performance NOT supported");
    return;
  }
  // Check if Performance.setResourceTimingBufferSize() is supported
  console.log ("= performance.setResourceTimingBufferSize()");
  const supported = typeof performance.setResourceTimingBufferSize === "function";
  if (supported) {
    console.log("… Performance.setResourceTimingBufferSize() = supported");
    performance.setResourceTimingBufferSize(n);
  } else {
    console.log("… Performance.setResourceTimingBufferSize() = NOT supported");
  }
}
```

{{domxref("Performance.resourcetimingbufferfull_event","resourcetimingbufferfull")}} イベントは、ブラウザーのリソースパフォーマンス項目バッファーが一杯になったときに、 {{domxref("Performance")}} オブジェクトに発行されます。以下のコード例では、 `init()` 関数内に {{domxref("Performance.resourcetimingbufferfull_event","onresourcetimingbufferfull")}} イベントハンドラーを設定しています。

```js
function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  set_resource_timing_buffer_size(200);
}

function init() {
  // load some image to trigger "resource" fetch events
  const image1 = new Image();
  image1.src = "https://developer.mozilla.org/static/img/opengraph-logo.png";
  const image2 = new Image();
  image2.src = "http://mozorg.cdn.mozilla.net/media/img/firefox/firefox-256.e2c1fc556816.jpg"

  // Set a callback if the resource buffer becomes filled
  performance.onresourcetimingbufferfull = buffer_full;
}
```

## CORS への対応

{{Glossary("CORS")}} が有効な場合、サーバーのアクセスポリシーでこれらの値の共有が許可されていなければ、タイミングプロパティの値の多くはゼロとして返されます。このため、リソースを指定されたサーバーは、 HTTP の {{httpheader("Timing-Allow-Origin")}} レスポンスヘッダーに、そのリソースを指定した値を送信することが必要である。 HTTP レスポンスヘッダーには、制限されたタイムスタンプ値を取得することが許可されている元を指定する値を指定します。

> **メモ:** ウェブページ自身のドメイン以外のドメインからリソースを読み込む際に、既定では 0 として返されるプロパティは、 `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart`, `responseStart` です。

## 関連情報

- [Firefox パフォーマンスツール](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Resource Timing Standard](https://w3c.github.io/resource-timing/); W3C Editor's Draft
- [Resource Timing practical tips](https://www.stevesouders.com/blog/2014/08/21/resource-timing-practical-tips/); Steve Souders; 2014 August 21
- [Measuring network performance with Resource Timing API](https://developers.googleblog.com/2013/12/measuring-network-performance-with.html); Ilya Grigorik; 2013 December 11
