---
title: サービスワーカー API
slug: Web/API/Service_Worker_API
tags:
  - API
  - Reference
  - Service Workers
  - オフライン
  - サービスワーカー
  - 概要
translation_of: Web/API/Service_Worker_API
---
<div>{{ServiceWorkerSidebar}}</div>

<p class="summary">Service Worker は、基本的にウェブアプリケーション、ブラウザー、そして（もし繋がっていれば）ネットワークの間に介在するプロキシサーバーのように振る舞います。これは、よりよいオフライン体験を可能にするように意図されており、ネットワークのリクエストに介在してネットワークの使用可否の状況に基づいて適切な対応を取ったり、サーバー上にあるアセットを更新したりします。また、プッシュ通知やバックグラウンド同期の API 群へのアクセスもできるようになります。</p>

<h2 id="Service_worker_concepts_and_usage" name="Service_worker_concepts_and_usage">Service Worker の概念と使い方</h2>

<p>Service Worker は、あるオリジンとパスに対して登録されたイベント駆動型の <a href="/ja/docs/Web/API/Worker">worker</a> です。JavaScript ファイルの形を取り、ナビゲーションやリソースへのリクエストを横取りや改変したり細かい粒度でリソースをキャッシュすることで関連付けられたウェブページやサイトを制御し、それぞれの状況（もっとも顕著な例は、ネットワークが利用できないとき）にアプリがどのように振舞うかを完全に制御することができます。</p>

<p>Service Worker は worker のコンテキストで実行されます。従って、DOM へアクセスすることができず、アプリを実行する主要な JavaScript とは異なるスレッドで実行されるため、他のタスクをブロックすることはありません。完全に非同期で設計されています。そのため、同期型の <a href="/ja/docs/Web/API/XMLHttpRequest">XHR</a> や <a href="/ja/docs/Web/Guide/API/DOM/Storage">localStorage</a> のような API を Service Worker で利用することはできません。</p>

<p>Service worker はセキュリティ上の理由から、HTTPS 通信でのみ動作します。ネットワークリクエストが改変されると、中間者攻撃を受けるので、人間に広く開かれているのは本当にまずいことです。Firefox では<a href="https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history">プライベートブラウジングモード</a>で Service Worker API を利用することはできません。</p>

<div class="note">
<p><strong>メモ</strong>: Service Worker は <a href="http://alistapart.com/article/application-cache-is-a-douchebag">AppCache</a> のような、この分野における以前の試みより勝っています。以前のものは、あなたがしようとしていることを想定していなかったり、想定が正しくなかったときに壊れたりしていたのに対して、Service Worker はあなたがすべてを細かく制御することができるためです。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: Service Worker は <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">promise</a> を頻繁に使用して、応答が来るのを待ってから、成功または失敗のアクションで応答します。promise のアーキテクチャはこの領域に対して理想的なものです。</p>
</div>

<h3 id="Registration" name="Registration">登録</h3>

<p>Service Worker は最初に {{DOMxRef("ServiceWorkerContainer.register()")}} メソッドを使って登録されます。成功したら、Service Worker がクライアントにダウンロードされ、ユーザーがアクセスした URL のオリジン内全体、または指定したそのサブセット内に対してインストールと有効化（下記参照）が試みられます。</p>

<h3 id="Download_install_and_activate" name="Download_install_and_activate">ダウンロードとインストールと有効化</h3>

<p>この段階で、Service Worker は以下のライフサイクルで実行されます。</p>

<ol>
 <li>ダウンロード</li>
 <li>インストール</li>
 <li>有効化</li>
</ol>

<p>ユーザーが最初に Service Worker が制御するサイトやページにアクセスすると、Service Worker が直ちにダウンロードされます。</p>

<p>その後、次の場面で更新されます。</p>

<ul>
 <li>スコープ内のページへの移動が発生したとき</li>
 <li>Service Worker でイベントが発生し、かつ過去24時間以内にダウンロードが行われていない場合</li>
</ul>

<p>ダウンロードしたファイルが新しいと分かった場合、既存の Service Worker とバイト単位に比較して異なっていた場合や、そのページやサイトで最初の Service Worker が見つかった場合は、インストールが試みられます。</p>

<p>Service Worker が初めて有効化されるときであれば、インストールが試みられ、インストールに成功した後で、有効化されます。</p>

<p>利用できる既存の Service Worker があった場合は、新しいバージョンがバックグラウンドでインストールされますが、まだ有効化 (activate) されません。この時点のものを<em>待機中の (waiting) ワーカー</em>と呼びます。まだ使用している古い Service Worker が読み込んでいるページがなくなった時のみ、有効化されます。ページが読み込まれなくなったらすぐに、新しい Service Worker が有効化されます（<em>アクティブワーカー</em>になります）。{{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} を使用するとすぐに有効化することができ、{{DOMxRef("Clients.claim()")}} を使用してアクティブワーカーが既存のページの管理を始めることができます。</p>

<p>{{DOMxRef("InstallEvent")}} を受け取ることもできます。イベントが発火したときの標準的なアクションは、使用するために Service Worker を準備すること、例えば組込みストレージ API を使用してキャッシュを構築したり、アプリがオフラインの時に使用したい資産をその中に配置したりすることです。</p>

<p><code>activate</code> イベントもあります。このイベントが発火した時点は、古いキャッシュや、前のバージョンの Service Worker に関するその他のものを整理するのによいタイミングです。</p>

<p>Service Worker は {{DOMxRef("FetchEvent")}} イベントを使用してリクエストに応答することができます。{{DOMxRef("event.respondWith") }} メソッドを使用して、これらのリクエストに対するレスポンスを何でも思うように変更できます。</p>

<div class="note">
<p><strong>メモ</strong>: <code>oninstall</code>/<code>onactivate</code> は完了するまでに時間がかかる可能性があるため、Service Worker の仕様書では <code>waitUntil</code> メソッドを提供しており、これが <code>oninstall</code> 又は <code>onactivate</code> を呼び出すと、promise を渡します。promise が正常に解決されるまで、関数イベントは Service Worker に配信されません。</p>
</div>

<p>最初の基本的な例をどのように構築するかについての完全なチュートリアルは、<a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service Worker の使用</a>を読んでください。</p>

<h2 id="Other_use_case_ideas" name="Other_use_case_ideas">その他の使用例</h2>

<p>Service Worker は次のようなことにも利用されることを想定しています。</p>

<ul>
 <li>バックグラウンドのデータ同期</li>
 <li>他のオリジンからのリソースのリクエストに対する応答</li>
 <li>位置情報やジャイロスコープのような計算コストの高いデータの更新を集中的に受信して、複数のページがデータの一部を利用できるようにすること</li>
 <li>CoffeeScript, less, CJS/AMD モジュールなどの開発用途で、クライアント側のコンパイルや依存性管理</li>
 <li>バックグラウンドサービスのフック</li>
 <li>特定の URL パターンに基づくテンプレートカスタマイズ</li>
 <li>パフォーマンスの改善、例えばユーザーが近く必要とするであろう、写真アルバムの次の数枚の写真などの先読み</li>
</ul>

<p>近い将来、Service Worker はネイティブアプリで実現できることに近い、その他いくつもの便利なことを、ウェブプラットフォーム上でも実現する事ができるようになるでしょう。興味深いことに、次のような他の仕様書でも、Service Worker のコンテキストを利用できるようになってきています。</p>

<ul>
 <li><a href="https://github.com/slightlyoff/BackgroundSync">バックグラウンド同期</a>: ユーザーがサイトにいないときにも Service Worker を起動し、キャッシュを更新したりすることができます。</li>
 <li><a href="/ja/docs/Web/API/Push_API">プッシュメッセージへの応答</a>: 新しいコンテンツが利用可能になった旨を伝えるためにユーザーにメッセージを送るために Service Worker を起動します。</li>
 <li>特定の日付・時刻に対する反応</li>
 <li>特定の地理的範囲へ入った事を検知する</li>
</ul>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{DOMxRef("Cache")}} {{Experimental_Inline}}</dt>
 <dd>{{DOMxRef("ServiceWorker")}} のライフライクルの一部としてキャッシュされる、{{DOMxRef("Request")}} / {{DOMxRef("Response")}} オブジェクトのペアのためのストレージです。</dd>
 <dt>{{DOMxRef("CacheStorage")}} {{Experimental_Inline}}</dt>
 <dd>{{DOMxRef("Cache")}} オブジェクトのストレージです。これは{{DOMxRef("ServiceWorker")}} がアクセスできるすべての名前付きキャッシュのへの目録を提供し、文字列の名前から対応する {{DOMxRef("Cache")}} へのマップを保持します。</dd>
 <dt>{{DOMxRef("Client")}} {{Experimental_Inline}}</dt>
 <dd>Service Worker クライアントを表します。Service Worker クライアントは、有効化された Service Worker によってブラウザーコントロールされた、コンテキストにおけるドキュメントか {{DOMxRef("SharedWorker")}} です。</dd>
 <dt>{{DOMxRef("Clients")}} {{Experimental_Inline}}</dt>
 <dd>{{DOMxRef("Client")}} オブジェクトのリストのためのコンテナであり、現在のオリジンにある有効化された Service Worker クライアントにアクセスする主な方法です。</dd>
 <dt>{{DOMxRef("ExtendableEvent")}} {{Experimental_Inline}}</dt>
 <dd>{{DOMxRef("ServiceWorkerGlobalScope")}} でディスパッチされる <code>install</code> イベントや <code>activate</code> イベントのライフタイムを伸ばします。これは、データベーススキーマの更新や使われなくなったキャッシュエントリの削除などが終わるまで機能的イベント (Functional events) が {{DOMxRef("ServiceWorker")}} にディスパッチされないことを保証します。</dd>
 <dt>{{DOMxRef("ExtendableMessageEvent")}} {{Experimental_Inline}}</dt>
 <dd>Service Workerで発生する{{domxref("ServiceWorkerGlobalScope/message_event")}}イベントのイベントオブジェクト(別のコンテキストから{{DOMxRef("ServiceWorkerGlobalScope")}}でチャンネルメッセージを受信した時)の有効期限を延長します。</dd>
 <dt>{{DOMxRef("FetchEvent")}} {{Experimental_Inline}}</dt>
 <dd>The parameter passed into the {{DOMxRef("ServiceWorkerGlobalScope.onfetch")}} handler, <code>FetchEvent</code> represents a fetch action that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a {{DOMxRef("ServiceWorker")}}. It contains information about the request and resulting response, and provides the {{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}} method, which allows us to provide an arbitrary response back to the controlled page.</dd>
 <dt>{{DOMxRef("InstallEvent")}} {{Experimental_Inline}}</dt>
 <dd>The parameter passed into the {{DOMxRef("ServiceWorkerGlobalScope.oninstall", "oninstall")}} handler, the <code>InstallEvent</code> interface represents an install action that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a {{DOMxRef("ServiceWorker")}}. As a child of {{DOMxRef("ExtendableEvent")}}, it ensures that functional events such as {{DOMxRef("FetchEvent")}} are not dispatched during installation.</dd>
 <dt>{{DOMxRef("NavigationPreloadManager")}} {{Experimental_Inline}}</dt>
 <dd>service worker によるリソースのプリロードを管理するためのメソッドを提供します。</dd>
 <dt>{{DOMxRef("Navigator.serviceWorker")}}</dt>
 <dd>Returns a {{DOMxRef("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{DOMxRef("ServiceWorker")}} objects for the <a href="https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window">associated document</a>.</dd>
 <dt>{{DOMxRef("NotificationEvent")}} {{Experimental_Inline}}</dt>
 <dd>The parameter passed into the {{DOMxRef("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} handler, the <code>NotificationEvent</code> interface represents a notification click event that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a {{DOMxRef("ServiceWorker")}}.</dd>
 <dt>{{DOMxRef("ServiceWorker")}} {{Experimental_Inline}}</dt>
 <dd>Represents a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same <code>ServiceWorker</code> object.</dd>
 <dt>{{DOMxRef("ServiceWorkerContainer")}} {{Experimental_Inline}}</dt>
 <dd>Provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister, and update service workers, and access the state of service workers and their registrations.</dd>
 <dt>{{DOMxRef("ServiceWorkerGlobalScope")}}</dt>
 <dd>service worker のグローバル実行コンテキストを表します。</dd>
 <dt>{{DOMxRef("ServiceWorkerMessageEvent")}} {{Deprecated_Inline}}</dt>
 <dd>Represents a message sent to a {{DOMxRef("ServiceWorkerGlobalScope")}}. <strong>Note that this interface is deprecated in modern browsers. Service worker messages will now use the {{DOMxRef("MessageEvent")}} interface, for consistency with other web messaging features.</strong></dd>
 <dt>{{DOMxRef("ServiceWorkerRegistration")}} {{Experimental_Inline}}</dt>
 <dd>Service Worker の登録を表します。</dd>
 <dt>{{DOMxRef("ServiceWorkerState")}} {{Experimental_Inline}}</dt>
 <dd><a href="/ja/docs/Web/API/ServiceWorker" title="ServiceWorker インターフェイス of the ServiceWorker API provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object."><code>ServiceWorker</code></a> の状態に関連付けられています。</dd>
 <dt>{{DOMxRef("SyncEvent")}} {{Non-standard_Inline}}</dt>
 <dd>
 <p>SyncEventインターフェイスはService Workerの{{DOMxRef("ServiceWorkerGlobalScope")}}でディスパッチされた同期アクションを表します。</p>
 </dd>
 <dt>{{DOMxRef("SyncManager")}} {{Non-standard_Inline}}</dt>
 <dd>同期登録を登録、およびリストする為のインターフェイスを提供します。</dd>
 <dt>{{DOMxRef("WindowClient")}} {{Experimental_Inline}}</dt>
 <dd>アクティブなワーカーによって制御されるブラウザコンテキスト内のドキュメントである<span lang="ja">Service Workerクライアントのスコープを表します。</span></dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Service Workers")}}</td>
   <td>{{Spec2("Service Workers")}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://serviceworke.rs">ServiceWorker Cookbook</a></li>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service Worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">Service workers basic code example</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker ready?</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></li>
 <li><a href="/ja/docs/Web/Guide/Performance/Using_web_workers">Web worker の使用</a></li>
 <li><a href="https://www.fastly.com/blog/best-practices-for-using-the-vary-header">Best Practices for using the VARY header</a></li>
</ul>
