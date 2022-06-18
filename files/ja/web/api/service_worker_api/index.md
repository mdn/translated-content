---
title: サービスワーカー API
slug: Web/API/Service_Worker_API
tags:
  - API
  - ランディング
  - オフライン
  - 概要
  - リファレンス
  - サービスワーカー
  - ワーカー
translation_of: Web/API/Service_Worker_API
---
{{ServiceWorkerSidebar}}

サービスワーカーは、基本的にウェブアプリケーション、ブラウザー、そして（もし繋がっていれば）ネットワークの間に介在するプロキシサーバーのように振る舞います。これは、よりよいオフラインの操作性を可能にするように意図されており、ネットワークのリクエストに介在してネットワークの使用可否の状況に基づいて適切な対応を取ったり、サーバー上にある資産を更新したりします。また、プッシュ通知やバックグラウンド同期の API 群へのアクセスもできるようになります。

## サービスワーカーの概念と使い方

サービスワーカーは、あるオリジンとパスに対して登録されたイベント駆動型の[ワーカー](/ja/docs/Web/API/Worker)です。 JavaScript ファイルの形を取り、ナビゲーションやリソースへのリクエストを横取りや改変したり細かい粒度でリソースをキャッシュすることで関連付けられたウェブページやサイトを制御し、それぞれの状況（もっとも顕著な例は、ネットワークが利用できないとき）にアプリがどのように振る舞うかを完全に制御することができます。

サービスワーカーはワーカーのコンテキストで実行されます。従って、DOM へアクセスすることができず、アプリを実行する主要な JavaScript とは異なるスレッドで実行されるため、他のタスクをブロックすることはありません。完全に非同期で設計されています。そのため、同期型の [XHR](/ja/docs/Web/API/XMLHttpRequest) や[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)のような API をサービスワーカーで使用することはできません。

サービスワーカーはセキュリティ上の理由から、 HTTPS 通信でのみ動作します。ネットワークリクエストが改変されると、中間者攻撃を受けるので、人間に広く開かれているのは本当にまずいことです。 Firefox では[プライベートブラウジングモード](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)でサービスワーカー API を利用することはできません。

> **Note:** Firefox では、テストのためにサービスワーカーを HTTP (安全ではない) 上で実行することができます。これは、 **HTTP による サービスワーカー を有効化 (ツールボックスを開いたとき)** オプションを Firefox Devtools 設定メニューでチェックするだけです。

> **Note:** サービスワーカーは [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag) のような、この分野における以前の試みより勝っています。以前のものは、あなたがしようとしていることを想定していなかったり、想定が正しくなかったときに壊れたりしていたのに対して、サービスワーカーはあなたがすべてを細かく制御することができるためです。

> **Note:** サービスワーカーは[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を頻繁に使用して、レスポンスが来るのを待ってから、成功または失敗のアクションで応答します。プロミスのアーキテクチャはこの領域に対して理想的なものです。

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

利用できる既存のサービスワーカーがあった場合は、新しいバージョンがバックグラウンドでインストールされますが、まだ有効化 (activate) されません。この時点のものを*待機中の (waiting) ワーカー*と呼びます。まだ使用している古いサービスワーカーが読み込んでいるページがなくなった時のみ、有効化されます。ページが読み込まれなくなったらすぐに、新しいサービスワーカーが有効化されます（*アクティブワーカー*になります）。 {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} を使用するとすぐに有効化することができ、 {{DOMxRef("Clients.claim()")}} を使用してアクティブワーカーが既存のページの管理を始めることができます。

{{domxref("ServiceWorkerGlobalScope/install_event", "install")}} を受け取ることもできます。イベントが発行されたときの標準的なアクションは、使用するためにサービスワーカーを準備すること、例えば組込みストレージ API を使用してキャッシュを構築したり、アプリがオフラインの時に使用したい資産をその中に配置したりすることです。

{{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} イベントもあります。このイベントが発行された時点は、古いキャッシュや、前のバージョンのサービスワーカーに関するその他のものを整理するのによいタイミングです。

サービスワーカーは {{DOMxRef("FetchEvent")}} イベントを使用してリクエストに応答することができます。{{DOMxRef("FetchEvent.respondWith()")}} メソッドを使用して、これらのリクエストに対するレスポンスを何でも思うように変更できます。

> **Note:** `install`/`activate` イベントは完了するまでに時間がかかる可能性があるため、サービスワーカーの仕様書では {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} メソッドを提供しており、これが `install` または `activate` を呼び出すと、プロミスを渡します。プロミスが正常に解決されるまで、関数イベントはサービスワーカーに配信されません。

最初の基本的な例をどのように構築するかについての完全なチュートリアルは、[サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)を読んでください。

## その他の使用例

サービスワーカーは次のような用途も想定しています。

- バックグラウンドのデータ同期
- 他のオリジンからのリソースのリクエストに対する応答
- 位置情報やジャイロスコープのような計算コストの高いデータの更新を集中的に受信して、複数のページがデータの一部を利用できるようにすること
- CoffeeScript, less, CJS/AMD モジュールなどの開発用途で、クライアント側のコンパイルや依存性管理
- バックグラウンドサービスのフック
- 特定の URL パターンに基づくテンプレートカスタマイズ
- パフォーマンスの改善、例えばユーザーが近く必要とするであろう、写真アルバムの次の数枚の写真などの先読み

近い将来、サービスワーカーはネイティブアプリで実現できることに近い、その他いくつもの便利なことを、ウェブプラットフォーム上でも実現する事ができるようになるでしょう。興味深いことに、次のような他の仕様書でも、サービスワーカーのコンテキストを利用できるようになってきています。

- [バックグラウンド同期](https://github.com/slightlyoff/BackgroundSync): ユーザーがサイトにいないときにもサービスワーカーを起動し、キャッシュを更新したりすることができます。
- [プッシュメッセージへの応答](/ja/docs/Web/API/Push_API): 新しいコンテンツが利用可能になった旨を伝えるためにユーザーにメッセージを送るためにサービスワーカーを起動します。
- 特定の日付・時刻に対する反応
- 特定の地理的範囲へ入った事を検知する

## インターフェイス

- {{DOMxRef("Cache")}} {{Experimental_Inline}}
  - : {{DOMxRef("ServiceWorker")}} のライフライクルの一部としてキャッシュされる、{{DOMxRef("Request")}} / {{DOMxRef("Response")}} オブジェクトのペアのためのストレージです。
- {{DOMxRef("CacheStorage")}} {{Experimental_Inline}}
  - : {{DOMxRef("Cache")}} オブジェクトのストレージです。これは {{DOMxRef("ServiceWorker")}} がアクセスできるすべての名前付きキャッシュのへの目録を提供し、文字列の名前から対応する {{DOMxRef("Cache")}} へのマップを保持します。
- {{DOMxRef("Client")}} {{Experimental_Inline}}
  - : サービスワーカークライアントのスコープを表します。サービスワーカークライアントは、ブラウザーコンテキスト内の文書または {{DOMxRef("SharedWorker")}} であり、アクティブワーカーによって制御されています。
- {{DOMxRef("Clients")}} {{Experimental_Inline}}
  - : {{DOMxRef("Client")}} オブジェクトのリストのためのコンテナーであり、現在のオリジンにある有効化されたサービスワーカークライアントにアクセスする主な方法です。
- {{DOMxRef("ExtendableEvent")}} {{Experimental_Inline}}
  - : {{DOMxRef("ServiceWorkerGlobalScope")}} で配信される `install` イベントや `activate` イベントのライフタイムを延ばします。これは、データベーススキーマの更新や使われなくなったキャッシュエントリーの削除などが終わるまで機能的イベント (Functional events) が {{DOMxRef("ServiceWorker")}} に配信されないことを保証します。
- {{DOMxRef("ExtendableMessageEvent")}} {{Experimental_Inline}}
  - : サービスワーカーで発生する {{domxref("ServiceWorkerGlobalScope/message_event", "message")}} イベントのイベントオブジェクト（別のコンテキストから {{DOMxRef("ServiceWorkerGlobalScope")}} でチャンネルメッセージを受信した時）の有効期限を延長します。
- {{DOMxRef("FetchEvent")}} {{Experimental_Inline}}
  - : ハンドラー {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} に渡される引数、 `FetchEvent` は {{DOMxRef("ServiceWorkerGlobalScope")}} で配信される読み取りアクションを表現しています。これは、リクエストと結果のレスポンスに関する情報を含み、{{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}} メソッドを提供して、制御されたページに任意のレスポンスを返すことができます。
- {{DOMxRef("InstallEvent")}} {{Experimental_Inline}}
  - : {{DOMxRef("ServiceWorkerGlobalScope.install_event", "oninstall")}} ハンドラーに渡される引数で、 `InstallEvent` インターフェースは {{DOMxRef("ServiceWorker")}} の {{DOMxRef("ServiceWorkerGlobalScope")}} に配信されるインストールアクションを表現します。 {{DOMxRef("ExtendableEvent")}} の子として、{{DOMxRef("FetchEvent")}} のような機能イベントがインストール中に配信されないことを保証しています。
- {{DOMxRef("NavigationPreloadManager")}} {{Experimental_Inline}}
  - : サービスワーカーによるリソースの先読みを管理するためのメソッドを提供します。
- {{DOMxRef("Navigator.serviceWorker")}}
  - :  {{DOMxRef("ServiceWorker")}} オブジェクトを返します。これにより、[関連ドキュメント](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)に対する登録、削除、アップグレード、通信へのアクセスを提供します。
- {{DOMxRef("NotificationEvent")}} {{Experimental_Inline}}
  - : {{DOMxRef("ServiceWorkerGlobalScope.notificationclick_event", "onnotificationclick")}} ハンドラーに渡される引数で、`NotificationEvent` インターフェースは {{DOMxRef("ServiceWorker")}} で通知クリックイベントを表現します。
- {{DOMxRef("ServiceWorker")}} {{Experimental_Inline}}
  - : サービスワーカーを表します。複数の閲覧コンテキスト（例：ページ、ワーカーなど）を同じ `ServiceWorker` オブジェクトに関連付けることができます。
- {{DOMxRef("ServiceWorkerContainer")}} {{Experimental_Inline}}
  - : サービスワーカーの登録、登録解除、更新、サービスワーカーとその登録の状態へのアクセスなどの機能を含む、ネットワークエコシステムの全体ユニットとしてのサービスワーカーを表すオブジェクトを提供します。
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : サービスワーカーのグローバル実行コンテキストを表します。
- {{DOMxRef("MessageEvent")}}
  - : {{DOMxRef("ServiceWorkerGlobalScope")}} に送られるメッセージを表します。
- {{DOMxRef("ServiceWorkerRegistration")}} {{Experimental_Inline}}
  - : サービスワーカーの登録を表します。
- {{DOMxRef("SyncEvent")}} {{Non-standard_Inline}}
  - : SyncEvent インターフェイスはサービスワーカーの {{DOMxRef("ServiceWorkerGlobalScope")}} で配信された同期アクションを表します。
- {{DOMxRef("SyncManager")}} {{Non-standard_Inline}}
  - : 同期登録を登録、およびリストするためのインターフェイスを提供します。
- {{DOMxRef("WindowClient")}} {{Experimental_Inline}}
  - : アクティブなワーカーによって制御されるブラウザーコンテキスト内の文書であるサービスワーカークライアントのスコープを表します。


## 仕様書

| 仕様書                                           |
| ------------------------------------------------------- |
| [サービスワーカー](https://w3c.github.io/ServiceWorker/) |

## 関連情報

- [ServiceWorker Cookbook](https://github.com/mozilla/serviceworker-cookbook) (英語)
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
