---
title: ウェブワーカー API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 6fefcdd237a377af5c066dc2734c118feadbbef9
---

{{DefaultAPISidebar("Web Workers API")}}

**ウェブワーカー** (Web Worker) とは、ウェブアプリケーションにおけるスクリプトの処理をメインとは別のスレッドに移し、バックグラウンドでの実行を可能にする仕組みのことです。時間のかかる処理を別のスレッドに移すことが出来るため、 UI を担当するメインスレッドの処理を中断・遅延させずに実行できるという利点があります。

## ウェブワーカーの概念と使い方

ワーカーオブジェクトはコンストラクター（{{DOMxRef("Worker.Worker", "Worker()")}} など）を用いて生成され、名前を持つ JavaScript ファイルを実行します。このファイルにはワーカースレッドで実行されるコードが書かれています。

ワーカースレッドの中では、 [JavaScript](/ja/docs/Web/JavaScript) の標準の一連の関数（[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`Object`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)、[`JSON`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON)、など）に加え、任意のコードのほとんどを実行することができます。いくつかの例外があります。例えば、ワーカー内から直接 DOM を操作することはできません。また、 [`window`](/ja/docs/Web/API/Window) オブジェクトの既定のメソッドやプロパティには使用できないものがあります。実行できるコードについては、以下の[ワーカーグローバルコンテキストと関数](#ワーカーグローバルコンテキストと関数)や[利用可能な Web API](#利用可能な_web_api) を参照してください。

ワーカーとメインスレッドとの間では、メッセージのシステムを通してデータがやり取りされます。両者は `postMessage()` メソッドを使ってメッセージを送信したり、受け取ったメッセージには `onmessage` イベントハンドラーで返信したりします（メッセージは{{domxref("Worker/message_event", "メッセージ")}}イベントの `data` 属性に格納されます）。なお、データは共有されるのではなく複製されます。

ワーカーが親ページと同じ{{glossary("origin", "オリジン")}}内でホスティングされるのであれば、新しいワーカーをいくつも起動することができます。また、ワーカーはネットワーク I/O において [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) を使用しますが、 `XMLHttpRequest` における `responseXML` および `channel` 属性は必ず `null` を返す点が通常と異なります。

### ワーカーの種類

ワーカーにはいくつもの種類があります。

- 専用ワーカー (dedicated worker) は、単一のスクリプトで利用されるワーカーです。このコンテキストは {{DOMxRef("DedicatedWorkerGlobalScope")}} オブジェクトで表現されます。
- {{DOMxRef("SharedWorker","共有ワーカー", "", 1)}} (shared worker) は、ワーカーと同じドメイン内にある限り、異なるウィンドウや iframe などで動作する複数のスクリプトで利用できるワーカーです。専用ワーカーよりも少し複雑で、スクリプトはアクティブなポートを介して通信する必要があります。
- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)は、基本的に複数のウェブアプリケーション間やブラウザー、（利用可能なら）ネットワークの間でプロキシーサーバーとして動くものです。他にも、効果的なオフライン操作を実現したり、ネットワークリクエストを遮断してネットワークが利用できるかどうかで適切なアクションを取ったり、サーバーにある資産を更新したりすることなどを目的としています。また、プッシュ通知やバックグラウンド同期APIへのアクセスも可能になる予定です。

> **メモ:** [Web workers 仕様書](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2)によれば、ワーカーのエラーイベントはバブリングすべきではありません（[Firefox バグ 1188141](https://bugzil.la/1188141) を参照。これは Firefox 42 で実装されました）。

### ワーカーグローバルコンテキストと関数

ワーカーは現在の {{DOMxRef("window")}} とは異なるグローバルなコンテキストで実行されます。 {{domxref("Window")}} はワーカーから直接利用できませんが、同じメソッドの多くは共有されるミックスイン (`WindowOrWorkerGlobalScope`) で定義され、各自の {{domxref("WorkerGlobalScope")}} から派生したコンテキストを通じてワーカーが利用できるようにします。

- {{domxref("DedicatedWorkerGlobalScope")}} （専用ワーカー向け）
- {{domxref("SharedWorkerGlobalScope")}} （共有ワーカー向け）
- {{domxref("ServiceWorkerGlobalScope")}} （[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)向け）

すべてのワーカーとメインスレッドで共通の関数（`WindowOrWorkerGlobalScope` からのもの）には、{{domxref("atob", "atob()")}}、{{domxref("btoa", "btoa()")}}、{{domxref("clearInterval", "clearInterval()")}}、{{domxref("clearTimeout()")}}、{{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}、{{domxref("setInterval()")}}、{{domxref("setTimeout()")}} などがあります。

以下の関数はワーカーでのみ利用することができます。

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} （すべてのワーカー）
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}} （専用ワーカーのみ）

### 利用可能な Web API

> [!NOTE]
> 掲載されている API が特定のバージョンのプラットフォームで対応している場合、一般的にウェブワーカーでも利用可能とみなされます。また、 <https://worker-playground.glitch.me/> を使用して特定のオブジェクト/関数の 対応をテストすることもできます。

ワーカーで利用可能な Web APIは、{{domxref("Barcode_Detection_API","バーコード検出 API", "", 1)}}、{{domxref("Broadcast_Channel_API","放送チャンネル API", "", 1)}}、{{domxref("Cache", "キャッシュ API", "", 1)}}、{{domxref("Channel_Messaging_API", "チャンネルメッセージ API", "", 1)}}、{{domxref("Console API", "コンソール API", "", 1)}}, [ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) ({{domxref("Crypto")}})、{{domxref("CustomEvent")}}、{{domxref("Encoding_API", "エンコーディング API", "", 1)}} ({{domxref("TextEncoder")}}、{{domxref("TextDecoder")}}、など）、{{domxref("Fetch_API", "フェッチ API", "", 1)}}、{{domxref("FileReader")}}、{{domxref("FileReaderSync")}} （ワーカーでのみ動作）、{{domxref("FormData")}}、{{domxref("ImageData")}}、{{domxref("IndexedDB_API", "IndexedDB")}}, [ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API), {{domxref("Notifications_API", "通知 API", "", 1)}}、{{domxref("Performance_API","パフォーマンス API", "", 1)}} （{{domxref("Performance")}}、{{domxref("PerformanceEntry")}}、{{domxref("PerformanceMeasure")}}、{{domxref("PerformanceMark")}}、{{domxref("PerformanceObserver")}}、{{domxref("PerformanceResourceTiming")}}、など)、{{jsxref("Promise")}}、[サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)、{{domxref("ServiceWorkerRegistration")}}、{{ domxref("URL_API","URL API", "", 1) }} （{{ domxref("URL")}} など)、[WebGL](/ja/docs/Web/API/WebGL_API) （{{domxref("OffscreenCanvas")}} による）、{{domxref("WebSocket")}}、{{domxref("XMLHttpRequest")}} です。

ワーカーは他のワーカーを起動することができ、そのために {{domxref("Worker")}}、{{domxref("WorkerGlobalScope")}}、{{domxref("WorkerLocation")}}、{{domxref("WorkerNavigator")}} も利用可能です。

## ウェブワーカーのインターフェイス

- {{DOMxRef("Worker")}}
  - : 実行しているワーカーのスレッドを表します。実行しているワーカーのコードへメッセージを送る際に用います。
- {{DOMxRef("WorkerLocation")}}
  - : {{domxref("Worker")}} で実行されるスクリプトの絶対位置を定義します。
- {{DOMxRef("SharedWorker")}}
  - : 複数の{{glossary("browsing context", "閲覧コンテキスト")}}（すなわちウィンドウ、タブ、iframe）や他のワーカーからアクセス可能な特定の種類のワーカーを表します。
- {{DOMxRef("WorkerGlobalScope")}}
  - : あらゆるワーカーの一般的なスコープを表します（通常のウェブコンテンツに対して {{DOMxRef("Window")}} が行うのと同じ役割をします）。それぞれの種類のワーカーには、このインターフェイスを継承し、より具体的な機能を追加したスコープオブジェクトがあります。
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
  - : 専用ワーカーのスコープを表します。 {{DOMxRef("WorkerGlobalScope")}} を継承しており、独自の機能がいくつか加えられています。
- {{DOMxRef("SharedWorkerGlobalScope")}}
  - : 共有ワーカーのスコープを表します。 {{DOMxRef("WorkerGlobalScope")}} を継承しており、独自の機能がいくつか加えられています。
- {{DOMxRef("WorkerNavigator")}}
  - : ユーザーエージェント（クライアント）に関する識別名と状態を表します。

## 例

簡単なデモと基本的な使い方は以下を参照してください。

- [基本的な専用ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker)（[専用ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）
- [基本的な共有ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[共有ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）
- [OffscreenCanvas ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker)（[OffscreenCanvas ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)）

これらのデモの動く仕組みを詳しく知りたい場合は。[ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)を参照してください。

## 仕様書

{{Specifications}}

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}} インターフェイス
- {{domxref("SharedWorker")}} インターフェイス
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
