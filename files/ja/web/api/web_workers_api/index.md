---
title: Web Workers API
slug: Web/API/Web_Workers_API
tags:
  - API
  - DOM
  - Web Workers
  - Workers
translation_of: Web/API/Web_Workers_API
---
{{DefaultAPISidebar("Web Workers API")}}

**Web Worker** とは、ウェブアプリケーションにおけるスクリプトの処理をメインとは別のスレッドに移し、バックグラウンドでの実行を可能にする仕組みのことです。時間のかかる処理を別のスレッドに移すことが出来るため、 UI を担当するメインスレッドの処理を中断・遅延させずに実行できるという利点があります。

## Web Worker の概念と使い方

{{DOMxRef("Worker")}} オブジェクトは {{DOMxRef("Worker.Worker", "Worker()")}} などのコンストラクターで生成されるオブジェクトで、名前を持つ JavaScript ファイルを実行します。 Worker のスレッドで実行されるコードはこのファイルに書かれており、今いる {{DOMxRef("window")}} とは別のグローバルなコンテキストの中で Worker がコードを実行します。Dedicated Worker (専用ワーカー) の場合、そのコンテキストは {{DOMxRef("DedicatedWorkerGlobalScope")}} オブジェクトで表現されます (通常の Worker は単一のスクリプトで使用されますが、 Worker を共有する際は {{DOMxRef("SharedWorkerGlobalScope")}} を使用します)。

Worker のスレッドではあらゆるコードを実行できますが、いくつか例外があります。例えば、 Worker から DOM を直接操作することは出来ません。また、 {{DOMxRef("window")}} にデフォルトで用意されているメソッドやプロパティには Worker から使用できないものもあります。しかし、 [WebSockets](/ja/docs/Web/API/WebSockets_API) や [IndexedDB](/ja/docs/Web/API/IndexedDB_API) のようなデータストレージに加え、 Firefox OS における [Data Store API](/ja/docs/Web/API/Data_Store_API) など、 `window` に含まれていても使用できるものは数多くあります。詳しくは [Worker から使用できる関数とクラス](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) を参照してください。

Worker とメインスレッドとの間では、メッセージのシステムを通してデータがやり取りされます。両者は `postMessage()` メソッドを使ってメッセージを送信し、受け取ったメッセージには `onmessage` イベントハンドラーで返信します (メッセージは {{Event("Message")}} イベントの `data` 属性に格納されます)。なお、送信したデータは受取先でコピーされます (共有ではありません)。

メインスレッドのページと同じオリジンであれば、 Web Workers は新しい Worker をいくつでも生成できます。また、 Worker はネットワーク I/O において [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) を使用しますが、 `XMLHttpRequest` における `responseXML` と `channel` 属性は必ず `null` を返す点で通常と異なります。

Dedicated Worker の他にも、 Worker の種類には以下のようなものがあります。

- Shared Worker (共有ワーカー) は、 iframe などの異なる window で実行されている複数のスクリプトから利用できる Worker です。それらのスクリプトと Worker は同じドメイン内にある必要があります。スクリプトどうしがアクティブなポートで通信しなければならないので、 Dedicated Worker よりも少し複雑です。詳しくは {{DOMxRef("SharedWorker")}} を参照してください。
- [ServiceWorker](/ja/docs/Web/API/ServiceWorker_API) は、複数のウェブアプリケーション間やブラウザ、 (利用可能なら) ネットワークとの間でプロキシサーバーとして動くものです。他の Worker とは異なり、 Service Worker はオフラインでのユーザーエクスペリエンスを実現するために設計されています。ネットワークへのリクエストに割り込み、オンライン・オフラインそれぞれの場合に適した結果をユーザに返します。また、サーバ上のリソースの更新も担います。 Service Worker を使うことで、プッシュ通知やバックグラウンド同期の API も利用可能になります。
- Chrome Worker は Firefox 上でのみ使える Worker です。アドオンの開発時、拡張機能で Web Workers を使いたいとき、または Worker の中で [js-ctypes](/ja/js-ctypes) を使いたいときに用いることが出来ます。詳しくは {{DOMxRef("ChromeWorker")}} を参照してください。
- [Audio Worker](/ja/docs/Web/API/Web_Audio_API#Audio_Workers) は、音声処理を Worker のコンテキスト内でスクリプトで直接実行する能力を提供します。

> **Note:** **メモ**: [Web Worker の仕様](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2)にあるように、Worker のエラーイベントはバブルするべきではありません (see {{bug(1188141)}}。これは Firefox 42 で実装されました。

## Web Worker インターフェイス

- {{DOMxRef("AbstractWorker")}}
  - : {{DOMxRef("Worker")}} や {{DOMxRef("SharedWorker")}} など、すべての Worker に共通な抽象オブジェクトです。
- {{DOMxRef("Worker")}}
  - : 実行している Worker のスレッドを表します。実行している Worker のコードへメッセージを送る際に用います。
- {{DOMxRef("WorkerLocation")}}
  - : {{DOMxRef("Worker")}} で実行されるスクリプトの絶対位置を定義します。
- {{DOMxRef("SharedWorker")}}
  - : 複数のウィンドウ、 iframe、ワーカーなどいくつかの{{glossary("browsing context", "閲覧コンテキスト")}}から「アクセス可能な」具体的な種類の Worker を表します。
- {{DOMxRef("WorkerGlobalScope")}}
  - : {{DOMxRef("Window")}} のように通常のウェブコンテンツと同じ動作をする Worker の一般的なスコープを表します。これと異なる種類の Worker は、このインタフェースに独自の機能をいくつか加えたスコープを持ちます。
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
  - : Dedicated Worker のスコープを表します。 {{DOMxRef("WorkerGlobalScope")}} を継承しており、独自の機能がいくつか加えられています。
- {{DOMxRef("SharedWorkerGlobalScope")}}
  - : Shared Worker のスコープを表します。 {{DOMxRef("WorkerGlobalScope")}} を継承しており、独自の機能がいくつか加えられています。
- {{DOMxRef("WorkerNavigator")}}
  - : ユーザエージェント (クライアント) に関する識別名と状態を表します。

## 例

簡単なデモと基本的な使い方は以下を参照してください。

- [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).
- [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)).

このデモの動く仕組みを詳しく知りたい場合は [Web Worker を使用する](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)を参照してください。

## 仕様

| 仕様書                                                                                   | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "workers.html#workers", "Web Workers")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## あわせて参照

- [Web Worker を使用する](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Worker インターフェイス](/ja/docs/Web/API/Worker)
- [SharedWorker インターフェイス](/ja/docs/Web/API/SharedWorker)
- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [Web Workers が使用できる関数とクラス](/ja/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Web Worker を使用する](/ja/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples)
- [ChromeWorker](/ja/docs/Web/API/ChromeWorker): Worker の特権/クロームコードでの使用
