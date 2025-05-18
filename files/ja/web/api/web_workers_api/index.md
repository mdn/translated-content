---
title: ウェブワーカー API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Workers API")}}

**ウェブワーカー** (Web Worker) とは、ウェブアプリケーションにおけるスクリプトの処理をメインとは別のスレッドに移し、バックグラウンドでの実行を可能にする仕組みのことです。時間のかかる処理を別のスレッドに移すことが出来るため、 UI を担当するメインスレッドの処理を中断・遅延させずに実行できるという利点があります。

## 概念と使い方

ワーカーオブジェクトはコンストラクター（{{DOMxRef("Worker.Worker", "Worker()")}} など）を用いて生成され、名前を持つ JavaScript ファイルを実行します。このファイルにはワーカースレッドで実行されるコードが書かれています。

ワーカースレッドの中では、 [JavaScript](/ja/docs/Web/JavaScript) の標準の一連の関数（{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("Object")}}、{{jsxref("JSON")}}、など）に加え、任意のコードのほとんどを実行することができます。いくつかの例外があります。例えば、ワーカー内から直接 DOM を操作することはできません。また、 {{domxref("Window")}} オブジェクトの既定のメソッドやプロパティには使用できないものがあります。実行できるコードについては、[対応している関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#ワーカーのコンテキストと関数)や[対応している Web API](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#ワーカーで使用できる_api)を参照してください。

ワーカーとメインスレッドとの間では、メッセージのシステムを通してデータがやり取りされます。両者は `postMessage()` メソッドを使ってメッセージを送信したり、受け取ったメッセージには `onmessage` イベントハンドラーで返信したりします（メッセージは{{domxref("Worker/message_event", "メッセージ")}}イベントの `data` 属性に格納されます）。なお、データは共有されるのではなく複製されます。

ワーカーが親ページと同じ{{glossary("origin", "オリジン")}}内でホスティングされるのであれば、新しいワーカーをいくつも起動することができます。

また、ワーカーは {{domxref("WorkerGlobalScope/fetch", "fetch()")}} または {{domxref("XMLHttpRequest")}} API を使用してネットワークリクエストを作成することができます（ただし、 `XMLHttpRequest` の {{domxref("XMLHttpRequest.responseXML", "responseXML")}} 属性が常に `null` になることに注意してください）。

### ワーカーの種類

ワーカーにはいくつもの種類があります。

- {{domxref("Worker", "専用ワーカー", "", "nocode")}} (dedicated worker) は、単一のスクリプトで利用されるワーカーです。このコンテキストは {{DOMxRef("DedicatedWorkerGlobalScope")}} オブジェクトで表現されます。
- {{domxref("SharedWorker", "共有ワーカー", "", "nocode")}} (shared worker) は、ワーカーと同じドメイン内にある限り、異なるウィンドウや iframe などで動作する複数のスクリプトで利用できるワーカーです。専用ワーカーよりも少し複雑で、スクリプトはアクティブなポートを介して通信する必要があります。
- {{domxref("Service Worker API", "サービスワーカー", "", "nocode")}} (service worker) は、基本的に複数のウェブアプリケーション間やブラウザー、（利用可能なら）ネットワークの間でプロキシーサーバーとして動くものです。他にも、効果的なオフライン操作を実現したり、ネットワークリクエストを遮断してネットワークが利用できるかどうかで適切なアクションを取ったり、サーバーにある資産を更新したりすることなどを目的としています。また、プッシュ通知やバックグラウンド同期APIへのアクセスも可能になる予定です。

### ワーカーコンテキスト

{{domxref("Window")}} はワーカーから直接利用できませんが、同じメソッドの多くは共有されるミックスイン (`WindowOrWorkerGlobalScope`) で定義され、各自の {{domxref("WorkerGlobalScope")}} から派生したコンテキストを通じてワーカーが利用できるようにします。

- {{domxref("DedicatedWorkerGlobalScope")}} （専用ワーカー向け）
- {{domxref("SharedWorkerGlobalScope")}} （共有ワーカー向け）
- {{domxref("ServiceWorkerGlobalScope")}} （[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)向け）

## インターフェイス

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
- {{domxref("Service Worker API", "サービスワーカー API", "", "nocode")}}
