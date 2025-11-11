---
title: サービスワーカー API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

サービスワーカーは、基本的にウェブアプリケーション、ブラウザー、そして（もし繋がっていれば）ネットワークの間に介在するプロキシーサーバーのように振る舞います。これは、よりよいオフラインの操作性を可能にするように意図されており、ネットワークのリクエストに介在してネットワークの使用可否の状況に基づいて適切な対応を取ったり、サーバー上にある資産を更新したりします。また、プッシュ通知やバックグラウンド同期の API 群へのアクセスもできるようになります。

## サービスワーカーの概念と使い方

サービスワーカーは、あるオリジンとパスに対して登録されたイベント駆動型の[ワーカー](/ja/docs/Web/API/Worker)です。 JavaScript ファイルの形を取り、ナビゲーションやリソースへのリクエストを横取りや改変したり細かい粒度でリソースをキャッシュすることで関連付けられたウェブページやサイトを制御し、それぞれの状況（もっとも顕著な例は、ネットワークが利用できないとき）にアプリがどのように振る舞うかを完全に制御することができます。

サービスワーカーはワーカーのコンテキストで実行されます。従って、DOM へアクセスすることができず、アプリを実行する主要な JavaScript とは異なるスレッドで実行されるため、他のタスクをブロックすることはありません。完全に非同期で設計されています。そのため、同期型の [XHR](/ja/docs/Web/API/XMLHttpRequest) や[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)のような API をサービスワーカーで使用することはできません。

サービスワーカーの JavaScript モジュールは動的にインポートできず、[`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import#ブラウザーの互換性) はサービスワーカーのグローバルスコープで呼び出されると例外を発生します。
[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 文を使用した静的インポートは許可されています。

サービスワーカーはセキュリティ上の理由から、 HTTPS 通信でのみ動作します。最も重要なことは、HTTP 接続は{{Glossary("MitM", "中間者")}}攻撃による悪意のあるコード注入の影響を受けやすく、こうした強力な API へのアクセスを許可されると、その攻撃はより悪いものになる可能性があるということです。Firefox では[プライベートブラウジングモード](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)でサービスワーカー API を利用することはできません。

> [!NOTE]
> Firefox では、テストのためにサービスワーカーを HTTP (安全ではない) 上で実行することができます。これは、 **HTTP によるサービスワーカーを有効化 (ツールボックスを開いたとき)** オプションを Firefox Devtools 設定メニューでチェックするだけです。

> [!NOTE]
> サービスワーカーは [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/) のような、この分野における以前の試みより勝っています。以前のものは、あなたがしようとしていることを想定していなかったり、想定が正しくなかったときに壊れたりしていたのに対して、サービスワーカーはあなたがすべてを細かく制御することができるためです。

> [!NOTE]
> サービスワーカーは[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を頻繁に使用して、レスポンスが来るのを待ってから、成功または失敗のアクションで応答します。プロミスのアーキテクチャはこの領域に対して理想的なものです。

### 登録

サービスワーカーは最初に {{DOMxRef("ServiceWorkerContainer.register()")}} メソッドを使って登録されます。成功したら、サービスワーカーがクライアントにダウンロードされ、ユーザーがアクセスした URL のオリジン内全体、または指定したそのサブセット内に対してインストールと有効化（下記参照）が試みられます。

### ダウンロードとインストールと有効化

この段階で、サービスワーカーは以下のライフサイクルで実行されます。

1. ダウンロード
2. インストール
3. 有効化

ユーザーが最初にサービスワーカーが制御するサイトやページにアクセスすると、サービスワーカーが直ちにダウンロードされます。

その後、次の場面で更新されます。

- スコープ内のページへの移動が発生したとき
- サービスワーカーでイベントが発生し、かつ過去 24 時間以内にダウンロードが行われていない場合

ダウンロードしたファイルが新しいと分かった場合、既存のサービスワーカーとバイト単位に比較して異なっていた場合や、そのページやサイトで最初のサービスワーカーが見つかった場合は、インストールが試みられます。

サービスワーカーが初めて有効化されるときであれば、インストールが試みられ、インストールに成功した後で、有効化されます。

利用できる既存のサービスワーカーがあった場合は、新しいバージョンがバックグラウンドでインストールされますが、まだ有効化 (activate) されません。この時点のものを*待機中 (waiting) のワーカー*と呼びます。まだ使用している古いサービスワーカーが読み込んでいるページがなくなった時のみ、有効化されます。ページが読み込まれなくなったらすぐに、新しいサービスワーカーが有効化されます（*アクティブワーカー*になります）。 {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} を使用するとすぐに有効化することができ、 {{DOMxRef("Clients.claim()")}} を使用してアクティブワーカーが既存のページの管理を始めることができます。

{{domxref("ServiceWorkerGlobalScope/install_event", "install")}} を受け取ることもできます。イベントが発行されたときの標準的なアクションは、使用するためにサービスワーカーを準備すること、例えば組込みストレージ API を使用してキャッシュを構築したり、アプリがオフラインの時に使用したい資産をその中に配置したりすることです。

{{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} イベントもあります。このイベントが発行された時点は、古いキャッシュや、前のバージョンのサービスワーカーに関するその他のものを整理するのによいタイミングです。

サービスワーカーは {{DOMxRef("FetchEvent")}} イベントを使用してリクエストに応答することができます。{{DOMxRef("FetchEvent.respondWith()")}} メソッドを使用して、これらのリクエストに対するレスポンスを何でも思うように変更できます。

> [!NOTE]
> `install`/`activate` イベントは完了するまでに時間がかかる可能性があるため、サービスワーカーの仕様書では {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} メソッドを提供しています。 `install` または `activate` イベント内でプロミスを指定してこのメソッドを呼び出すと、プロミスが正常に解決されるまで、 `fetch` や `push` などの関数イベントはサービスワーカーに配信されません。

最初の基本的な例をどのように構築するかについての完全なチュートリアルは、[サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)を読んでください。

### 静的ルーティングを使用して、リソースの取得方法を制御

サービスワーカーは、不要なパフォーマンスコストが発生する可能性があります。しばらくぶりにページが初めて読み込まれる場合、ブラウザーはサービスワーカーが起動して実行されるのを待たなければ、どのコンテンツを読み込むべきか、また、キャッシュまたはネットワークのどちらから取得すべきかを判断できません。

特定のコンテンツがどこから取得されるべきか事前に分かっている場合は、サービスワーカーを完全にバイパスして、リソースを即座に取得することができます。{{domxref("InstallEvent.addRoutes()")}} メソッドは、この使用事例やその他の実装にも使用できます。

## その他の使用例

サービスワーカーは次のような用途も想定しています。

- バックグラウンドのデータ同期。
- 他のオリジンからのリソースのリクエストに対する応答。
- 位置情報やジャイロスコープのような計算コストの高いデータの更新を集中的に受信して、複数のページがデータの一部を利用できるようにすること。
- CoffeeScript, less, CJS/AMD モジュールなどの開発用途で、クライアント側のコンパイルや依存性管理。
- バックグラウンドサービスのフック。
- 特定の URL パターンに基づくテンプレートカスタマイズ。
- パフォーマンスの向上、例えば、ユーザーが次に必要とする可能性が高いリソース（例えば、フォトアルバムの次の数枚の写真）を事前に取得するなど。
- API のモックアップ。

近い将来、サービスワーカーはネイティブアプリで実現できることに近い、その他いくつもの便利なことを、ウェブプラットフォーム上でも実現する事ができるようになるでしょう。興味深いことに、次のような他の仕様書でも、サービスワーカーのコンテキストを利用できるようになってきています。

- [バックグラウンド同期](https://github.com/WICG/background-sync): ユーザーがサイトにいないときにもサービスワーカーを起動し、キャッシュを更新したりすることができます。
- [プッシュメッセージへの応答](/ja/docs/Web/API/Push_API): 新しいコンテンツが利用可能になった旨を伝えるためにユーザーにメッセージを送るためにサービスワーカーを起動します。
- 特定の日付・時刻に対する反応
- 特定の地理的範囲へ入った事を検知する

## インターフェイス

- {{DOMxRef("Cache")}}
  - : {{DOMxRef("ServiceWorker")}} のライフライクルの一部としてキャッシュされる、{{DOMxRef("Request")}} / {{DOMxRef("Response")}} オブジェクトのペアのためのストレージです。
- {{DOMxRef("CacheStorage")}}
  - : {{DOMxRef("Cache")}} オブジェクトのストレージです。これは {{DOMxRef("ServiceWorker")}} がアクセスできるすべての名前付きキャッシュのへの目録を提供し、文字列の名前から対応する {{DOMxRef("Cache")}} へのマップを保持します。
- {{DOMxRef("Client")}}
  - : サービスワーカークライアントのスコープを表します。サービスワーカークライアントは、閲覧コンテキスト内の文書または {{DOMxRef("SharedWorker")}} であり、アクティブワーカーによって制御されています。
- {{DOMxRef("Clients")}}
  - : {{DOMxRef("Client")}} オブジェクトのリストのためのコンテナーであり、現在のオリジンにある有効化されたサービスワーカークライアントにアクセスする主な方法です。
- {{DOMxRef("ExtendableEvent")}}
  - : {{DOMxRef("ServiceWorkerGlobalScope")}} で配信される `install` イベントや `activate` イベントのライフタイムを延ばします。これは、データベーススキーマの更新や使われなくなったキャッシュエントリーの削除などが終わるまで機能的イベント (Functional events) が {{DOMxRef("ServiceWorker")}} に配信されないことを保証します。
- {{DOMxRef("ExtendableMessageEvent")}}
  - : サービスワーカーで発生する {{domxref("ServiceWorkerGlobalScope/message_event", "message")}} イベントのイベントオブジェクト（別のコンテキストから {{DOMxRef("ServiceWorkerGlobalScope")}} でチャンネルメッセージを受信した時）の有効期限を延長します。
- {{DOMxRef("FetchEvent")}}
  - : ハンドラー {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} に渡される引数、 `FetchEvent` は {{DOMxRef("ServiceWorkerGlobalScope")}} で配信される読み取りアクションを表現しています。これは、リクエストと結果のレスポンスに関する情報を含み、{{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}} メソッドを提供して、制御されたページに任意のレスポンスを返すことができます。
- {{DOMxRef("InstallEvent")}}
  - : {{DOMxRef("ServiceWorkerGlobalScope.install_event", "oninstall")}} ハンドラーに渡される引数で、 `InstallEvent` インターフェイスは {{DOMxRef("ServiceWorker")}} の {{DOMxRef("ServiceWorkerGlobalScope")}} に配信されるインストールアクションを表現します。 {{DOMxRef("ExtendableEvent")}} の子として、{{DOMxRef("FetchEvent")}} のような機能イベントがインストール中に配信されないことを保証しています。
- {{DOMxRef("NavigationPreloadManager")}}
  - : サービスワーカーによるリソースの先読みを管理するためのメソッドを提供します。
- {{DOMxRef("ServiceWorker")}}
  - : サービスワーカーを表します。複数の閲覧コンテキスト（例：ページ、ワーカーなど）を同じ `ServiceWorker` オブジェクトに関連付けることができます。
- {{DOMxRef("ServiceWorkerContainer")}}
  - : サービスワーカーの登録、登録解除、更新、サービスワーカーとその登録の状態へのアクセスなどの機能を含む、ネットワークエコシステムの全体ユニットとしてのサービスワーカーを表すオブジェクトを提供します。
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : サービスワーカーのグローバル実行コンテキストを表します。
- {{DOMxRef("ServiceWorkerRegistration")}}
  - : サービスワーカーの登録を表します。
- {{DOMxRef("WindowClient")}}
  - : アクティブなワーカーによって制御される閲覧コンテキスト内の文書であるサービスワーカークライアントのスコープを表します。これは特別な種類の {{DOMxRef("Client")}} オブジェクトで、いくつかの追加メソッドとプロパティが利用可能です。

### 他のインターフェイスへの拡張

- {{DOMxRef("Window.caches")}} and {{domxref("WorkerGlobalScope.caches")}}
  - : 現在のkンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトです。
- {{DOMxRef("Navigator.serviceWorker")}} および {{DOMxRef("WorkerNavigator.serviceWorker")}}
  - : {{DOMxRef("ServiceWorkerContainer")}} オブジェクトを返します。このオブジェクトは、[関連付けられた文書](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)の {{DOMxRef("ServiceWorker")}} オブジェクトの登録、削除、アップグレード、通信へのアクセスを提供します。

## 仕様書

{{Specifications}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle) (英語)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (英語)
- サービスワーカー APIに関連する Web API:
  - {{domxref("Background Fetch API", "バックグラウンドフェッチ API", "", "nocode")}}
  - {{domxref("Background Synchronization API", "バックグラウンド同期 API", "", "nocode")}}
  - {{domxref("Content Index API", "コンテンツインデックス API", "", "nocode")}}
  - {{domxref("Cookie Store API", "クッキーストア API", "", "nocode")}}
  - {{domxref("Notifications API", "通知 API", "", "nocode")}}
  - {{domxref("Payment Handler API", "決済ハンドラー API", "", "nocode")}}
  - {{domxref("Push API", "プッシュ API", "", "nocode")}}
  - {{domxref("Web Periodic Background Synchronization API", "ウェブ定期バックグラウンド同意 API", "", "nocode")}}
