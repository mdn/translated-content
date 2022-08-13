---
title: サービスワーカーで PWA をオフラインで動作させる
slug: Web/Progressive_web_apps/Offline_Service_workers
tags:
  - Offline
  - PWAs
  - Progressive web apps
  - Service Workers
  - js13kGames
  - progressive
translation_of: Web/Progressive_web_apps/Offline_Service_workers
---
<div>{{PreviousMenuNext("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps")}}</div>

<p class="summary"><span class="seoSummary">js13kPWA の構造と、基本シェルが起動し実行させる様子を見てきたので、サービスワーカーを使用したオフライン機能の実装方法を見てみましょう。 この記事では、 <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA の例</a> (<a href="https://github.com/mdn/pwa-examples/tree/master/js13kpwa">ソースコードはこちら</a>) で使用されている実現方法を見てみましょう。 どのようにオフライン機能を追加するのかを学習します。</span></p>

<h2 id="Service_workers_explained" name="Service_workers_explained">サービスワーカーの説明</h2>

<p>サービスワーカー（Service Workers）は、ブラウザーとネットワーク間の仮想プロキシです。 これらはついにフロントエンド開発者が長年にわたって苦労してきた問題を修正します — 最も注目に値するのは、ウェブサイトのアセットを適切にキャッシュし、ユーザーのデバイスがオフラインのときにそれらを利用できるようにする方法です。</p>

<p>これらは、ページのメインの JavaScript コードとは別のスレッドで実行され、DOM 構造にアクセスすることはできません。 これは、従来のウェブプログラミングとは異なるアプローチを取り入れています — API はノンブロッキングで、異なるコンテキスト間で通信を送受信できます。 あなたはサービスワーカーに取り組むべき何かを与え、約束（<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>）ベースのアプローチを使用して準備ができているときはいつでも結果を受け取ることができます。</p>

<p>通知の処理、別のスレッドでの大量の計算など、オフライン機能を提供するだけではありません。 サービスワーカーは、ネットワーク要求を制御したり、それらを変更したり、キャッシュから取得したカスタム応答を提供したり、応答を完全に合成したりできるので、非常に強力です。</p>

<h3 id="Security" name="Security">セキュリティ</h3>

<p>サービスワーカーは非常に強力であるため、安全なコンテキスト（HTTPS を意味する）でしか実行できません。 コードを本番環境に移行する前に最初に試してみたい場合は、いつでも localhost でテストするか GitHub Pages を設定することができます。 どちらも HTTPS をサポートしています。</p>

<h2 id="Offline_First" name="Offline_First">オフライン優先</h2>

<p>「オフライン優先」または「キャッシュ優先」のパターンは、コンテンツをユーザーに提供するための最も一般的な戦略です。 リソースがキャッシュされてオフラインで利用可能な場合は、サーバーからダウンロードする前に最初にそれを返します。 まだキャッシュに入っていない場合は、ダウンロードして将来の使用に備えてキャッシュします。</p>

<h2 id="Progressive_in_PWA" name="Progressive_in_PWA">PWA における「プログレッシブ」</h2>

<p>プログレッシブエンハンスメントとして適切に実装されている場合、サービスワーカーは、オフラインサポートを提供することで API をサポートする最新のブラウザーを使用しているユーザーにメリットをもたらすことができますが、従来のブラウザを使用しているユーザーにとっては何もだめになりません。</p>

<h2 id="Service_workers_in_the_js13kPWA_app" name="Service_workers_in_the_js13kPWA_app">js13kPWA アプリのサービスワーカー</h2>

<p>十分な理論 — いくつかのソースコードを見てみましょう！</p>

<h3 id="Registering_the_Service_Worker" name="Registering_the_Service_Worker">サービスワーカーの登録</h3>

<p>app.js ファイルで、新しいサービスワーカーを登録するコードを見ることから始めます。</p>

<p><strong>注</strong> : ここでは <a href="http://es6-features.org/">es6</a> の<strong>アロー関数</strong>の構文をサービスワーカーの実装に使用しています。</p>

<pre class="brush: js notranslate">if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./pwa-examples/js13kpwa/sw.js');
};</pre>

<p><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> をブラウザーがサポートしている場合は、{{domxref("ServiceWorkerContainer.register()")}} メソッドを使用してサイトに対して登録します。 その内容は <code>sw.js</code> ファイルにあり、登録が成功した後に実行できます。 これが <code>app.js</code> ファイルの中にある唯一のサービスワーカーのコードで、それ以外のサービスワーカー固有のものはすべて <code>sw.js</code> ファイル自体にあります。</p>

<h3 id="Lifecycle_of_a_Service_Worker" name="Lifecycle_of_a_Service_Worker">サービスワーカーのライフサイクル</h3>

<p>登録が完了すると、<code>sw.js</code> ファイルが自動的にダウンロードされてからインストールされ、最後にアクティブになります。</p>

<h4 id="Installation" name="Installation">インストール</h4>

<p>API を使用すると、関心のある重要なイベントのイベントリスナーを追加できます — 最初のものは <code>install</code> イベントです。</p>

<pre class="brush: js notranslate">self.addEventListener('install', (e) =&gt; {
    console.log('[Service Worker] Install');
});</pre>

<p><code>install</code> リスナーで、キャッシュを初期化し、オフラインで使用するためにファイルをキャッシュに追加することができます。 js13kPWA アプリはまさにそれを行います。</p>

<p>まず、キャッシュ名を格納するための変数が作成され、アプリシェル（app shell）のファイルが1つの配列にリストされます。</p>

<pre class="brush: js notranslate">var cacheName = 'js13kPWA-v1';
var appShellFiles = [
  '/pwa-examples/js13kpwa/',
  '/pwa-examples/js13kpwa/index.html',
  '/pwa-examples/js13kpwa/app.js',
  '/pwa-examples/js13kpwa/style.css',
  '/pwa-examples/js13kpwa/fonts/graduate.eot',
  '/pwa-examples/js13kpwa/fonts/graduate.ttf',
  '/pwa-examples/js13kpwa/fonts/graduate.woff',
  '/pwa-examples/js13kpwa/favicon.ico',
  '/pwa-examples/js13kpwa/img/js13kgames.png',
  '/pwa-examples/js13kpwa/img/bg.png',
  '/pwa-examples/js13kpwa/icons/icon-32.png',
  '/pwa-examples/js13kpwa/icons/icon-64.png',
  '/pwa-examples/js13kpwa/icons/icon-96.png',
  '/pwa-examples/js13kpwa/icons/icon-128.png',
  '/pwa-examples/js13kpwa/icons/icon-168.png',
  '/pwa-examples/js13kpwa/icons/icon-192.png',
  '/pwa-examples/js13kpwa/icons/icon-256.png',
  '/pwa-examples/js13kpwa/icons/icon-512.png'
];</pre>

<p>次に、<code>data/games.js</code> ファイルからのコンテンツとともにロードされる画像へのリンクが2番目の配列に生成されます。 その後、両方の配列は {{jsxref("Array.prototype.concat()")}} 関数を使ってマージされます。</p>

<pre class="brush: js notranslate">var gamesImages = [];
for(var i=0; i&lt;games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);</pre>

<p>それから、<code>install</code> イベント自体を管理できます。</p>

<pre class="brush: js notranslate">self.addEventListener('install', (e) =&gt; {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) =&gt; {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});</pre>

<p>ここで説明が必要なことが2つあります — {{domxref("ExtendableEvent.waitUntil")}} が行うことと、{{domxref("Cache","caches")}} オブジェクトとは何か。</p>

<p>サービスワーカーは、<code>waitUntil</code> 内のコードが実行されるまでインストールされません。 それは約束（promise）を返します — インストールにはしばらく時間がかかるかもしれないので完了するまで待つこのアプローチが必要です。</p>

<p><code>caches</code> は特定のサービスワーカーの範囲内でデータの保存を可能にする特別な {{domxref("CacheStorage")}} オブジェクトです — <a href="/ja/docs/Web/API/Web_Storage_API">ウェブストレージ</a>は同期的であるため、ウェブストレージへの保存は機能しません。 サービスワーカーでは、代わりに Cache API を使用します。</p>

<p>ここでは、指定した名前でキャッシュを開き、アプリが使用するすべてのファイルをキャッシュに追加するので、次回のロード時に利用可能になります（要求 URL で識別されます）。</p>

<h4 id="Activation" name="Activation">アクティベーション</h4>

<p><code>activate</code> イベントもあり、これは <code>install</code> と同じ方法で使用されます。 このイベントは通常、不要になったファイルを削除し、一般的にアプリの後にクリーンアップするために使用されます。 私たちのアプリでそれをする必要はないので、それをスキップします。</p>

<h3 id="Responding_to_fetches" name="Responding_to_fetches">フェッチへの応答</h3>

<p>また、自由に使える <code>fetch</code> イベントもあり、これは HTTP 要求がアプリから発するたびに発生します。 これは要求を傍受してカスタム応答でそれらに応答することを可能にするので非常に便利です。 これは簡単な使用例です。</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', (e) =&gt; {
    console.log('[Service Worker] Fetched resource '+e.request.url);
});</pre>

<p>応答は望むものなら何でも構いません — 要求されたファイル、そのキャッシュされたコピー、または特定のことを実行する JavaScript コードの一部 — 可能性は無限大です。</p>

<p>このサンプルアプリでは、リソースが実際にキャッシュ内にある限り、ネットワークではなくキャッシュからコンテンツを提供します。 アプリがオンラインかオフラインかに関係なく、これを行います。 ファイルがキャッシュにない場合、アプリはそれを提供する前にまずそこに追加します。</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', (e) =&gt; {
  e.respondWith(
    caches.match(e.request).then((r) =&gt; {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) =&gt; {
                return caches.open(cacheName).then((cache) =&gt; {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});</pre>

<p>ここでは、キャッシュ内のリソースを見つけ、存在する場合は応答を返そうとする関数を使用して、<code>fetch</code> イベントに応答します。 存在しない場合は、別のフェッチ要求を使用してネットワークからそれをフェッチし、次に応答がキャッシュに格納されるので、次に要求されたときに応答が使用可能になります。</p>

<p>{{domxref("FetchEvent.respondWith")}} メソッドが制御を引き継ぎます — これは、アプリとネットワークの間のプロキシサーバーとして機能する部分です。 これにより、すべての要求に対して、必要な応答を返すことができます — サービスワーカーによって準備され、キャッシュから取得され、必要に応じて変更された。</p>

<p>それでおしまい！ 私たちのアプリはインストール時にそのリソースをキャッシュしてキャッシュからのフェッチでそれらを提供しているので、ユーザーがオフラインであっても機能します。 追加されるたびに新しいコンテンツもキャッシュします。</p>

<h2 id="Updates" name="Updates">更新</h2>

<p>まだカバーしておくべき1つのポイントがあります — 新しいアセットを含むアプリの新しいバージョンが利用可能になったときにどのようにサービスワーカーをアップグレードするのでしょうか？ これには、キャッシュ名のバージョン番号が重要です。</p>

<pre class="brush: js notranslate">var cacheName = 'js13kPWA-v1';</pre>

<p>これが v2 に更新されるとき、新しいキャッシュに（新しいファイルを含む）すべてのファイルを追加することができます。</p>

<pre class="brush: js notranslate">contentToCache.push('/pwa-examples/js13kpwa/icons/icon-32.png');

// ...

self.addEventListener('install', (e) =&gt; {
  e.waitUntil(
    caches.open('js13kPWA-v2').then((cache) =&gt; {
      return cache.addAll(contentToCache);
    })
  );
});</pre>

<p>新しいサービスワーカーがバックグラウンドでインストールされ、前のバージョン（v1）はそれを使用するページがなくなるまで正しく動作します — 新しいサービスワーカーがアクティブになり、古いページからページの管理を引き継ぎます。</p>

<h2 id="Clearing_the_cache" name="Clearing_the_cache">キャッシュのクリア</h2>

<p>スキップした <code>activate</code> イベントを覚えていますか？ これは、不要になった古いキャッシュを消去するために使用できます。</p>

<pre class="brush: js notranslate">self.addEventListener('activate', (e) =&gt; {
  e.waitUntil(
    caches.keys().then((keyList) =&gt; {
          return Promise.all(keyList.map((key) =&gt; {
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});</pre>

<p>これにより、必要なファイルだけがキャッシュに保存されるので、ゴミが残ることはありません — <a href="/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria">ブラウザーで利用可能なキャッシュスペースは限られている</a>ので、後で自分でクリーンアップすることをお勧めします。</p>

<h2 id="Other_use_cases" name="Other_use_cases">その他のユースケース</h2>

<p>サービスワーカーが提供する機能は、キャッシュからファイルを提供することだけではありません。 大量の計算が必要な場合は、メインスレッドからそれらをオフロードしてワーカーで実行し、使用可能になったらすぐに結果を受け取ることができます。 パフォーマンス面では、今は必要ではないが近い将来にある可能性があるリソースをプリフェッチすることができるため、実際にそれらのリソースが必要な場合はアプリの速度が速くなります。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>この記事では、PWA をサービスワーカーとオフラインで連携させる方法について簡単に説明しました。 <a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> の背後にある概念と、それをより詳細に使用する方法についてもっと知りたい場合は、さらに詳しい資料をチェックしてください。</p>

<p><a href="/ja/docs/Web/API/Push_API">プッシュ通知</a>を処理するときにもサービスワーカーを使用します — これについては後の記事で説明します。</p>

<p>{{PreviousMenuNext("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps")}}</p>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}</div>
