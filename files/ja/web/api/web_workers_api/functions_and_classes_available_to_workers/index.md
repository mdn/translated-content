---
title: ウェブワーカーが使用できる関数やクラス
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
l10n:
  sourceCommit: 6fefcdd237a377af5c066dc2734c118feadbbef9
---

{{DefaultAPISidebar("Web Workers API") }}

標準的な [JavaScript](/ja/docs/Web/JavaScript) の関数群（{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("Object")}}、{{jsxref("JSON")}} など）に加えて、DOM からワーカーに利用できる様々な関数があります。この記事ではそれらの機能のリストを提供します。

## ワーカーのコンテキストと関数

**ワーカーは、現在のウィンドウとは異なるグローバルコンテキストで実行されます。** {{domxref("Window")}} はワーカーでは直接使用することができませんが、共通のミックスイン (`WindowOrWorkerGlobalScope`) で定義されている同じメソッドの多くが利用でき、 {{domxref("WorkerGlobalScope")}} から派生した以下のようなコンテキストからワーカーが利用できます。

- {{domxref("DedicatedWorkerGlobalScope")}} （専用ワーカー向け）
- {{domxref("SharedWorkerGlobalScope")}} （共有ワーカー向け）
- {{domxref("ServiceWorkerGlobalScope")}} （[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)向け）

すべてのワーカーとメインスレッドで共通の関数には（`WindowOrWorkerGlobalScope` にあるもの）には、 {{domxref("atob", "atob()")}}, {{domxref("btoa", "btoa()")}}, {{domxref("clearInterval", "clearInterval()")}}, {{domxref("clearTimeout()")}}, {{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}, {{domxref("setInterval()")}}, {{domxref("setTimeout()")}} などがあります。

以下の機能は、ワーカーで**のみ**使用することができます。

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} （すべてのワーカー）
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}} （専用ワーカーのみ）

## ワーカーで使用できる API

> [!NOTE]
> 掲載されている API に特定のバージョンのプラットフォームが対応している場合、一般にウェブワーカーで動作するとみなすことができます。

以下の Web API はワーカーで利用することができます。 {{domxref("Broadcast_Channel_API","Broadcast Channel API")}}, {{domxref("Cache", "Cache API")}}, {{domxref("Channel_Messaging_API", "Channel Messaging API")}}, {{domxref("Console API", "Console API")}}, {{domxref("Crypto")}}, {{domxref("CustomEvent")}}, `DOMRequest` と `DOMCursor`, {{domxref("Fetch_API", "Fetch")}}, {{domxref("FileReader")}}, {{domxref("FileReaderSync")}} (only works in workers!), {{domxref("FormData")}}, {{domxref("ImageData")}}, {{domxref("IndexedDB_API", "IndexedDB")}}, [ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API), {{domxref("Notifications_API", "通知", "", 1)}}, {{domxref("Performance")}}, {{domxref("PerformanceEntry")}}, {{domxref("PerformanceMeasure")}}, {{domxref("PerformanceMark")}}, {{domxref("PerformanceObserver")}}, {{domxref("PerformanceResourceTiming")}}, {{jsxref("Promise")}}, [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events), {{domxref("ServiceWorkerRegistration")}}, {{domxref("TextEncoder")}} と {{domxref("TextDecoder")}}, {{ domxref("URL") }}, [WebGL](/ja/docs/Web/API/WebGL_API) と {{domxref("OffscreenCanvas")}}, {{domxref("WebSocket")}}, {{domxref("XMLHttpRequest")}} （ただし `responseXML` および `channel` 属性は常に null）。

ワーカーは他のワーカーを起動することもできるため、 {{domxref("Worker")}}, {{domxref("WorkerGlobalScope")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerNavigator")}} の各 API も利用することができます。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
