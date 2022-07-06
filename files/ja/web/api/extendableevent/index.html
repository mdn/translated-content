---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
tags:
  - API
  - ExtendableEvent
  - Interface
  - Offline
  - Reference
  - Service Workers
  - ServiceWorker
  - Workers
translation_of: Web/API/ExtendableEvent
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary"><strong><code>ExtendableEvent</code></strong> インターフェイスは、サービスワーカーのライフサイクルの一部として、グローバルスコープでディスパッチされた <code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/install">install</a></code> イベントと <code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/activate">activate</a></code> イベントの存続期間を延長します。 これにより、データベーススキーマがアップグレードされて古いキャッシュエントリが削除されるまで、機能イベント（{{domxref("FetchEvent")}} など）が送出されなくなります。</span></p>

<p>{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} が <code>ExtendableEvent</code> ハンドラーの外で呼び出された場合、ブラウザーは <code>InvalidStateError</code> をスローする必要があります。 また、複数の呼び出しが積み重なり、その結果の Promise が存続期間延長 Promise（<a href="https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises">extend lifetime promises</a>）のリストに追加されることにも注意してください。</p>

<div class="note">
<p><strong>注</strong>: 上記の段落で説明した振る舞いは、Firefox 43 で修正されました（{{bug(1180274)}} を参照）。</p>
</div>

<p>このインターフェイスは、{{domxref("Event")}} インターフェイスを継承しています。</p>

<p>{{InheritanceDiagram(700, 60, 20)}}</p>

<div class="note">
<p><strong>注</strong>: このインターフェイスは、グローバルスコープが {{domxref("ServiceWorkerGlobalScope")}} の場合にのみ使用できます。 {{domxref("Window")}} または別の種類のワーカーのスコープの場合は使用できません。</p>
</div>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("ExtendableEvent.ExtendableEvent()", "ExtendableEvent()")}}</dt>
 <dd>新しい <code>ExtendableEvent</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>特定のプロパティを実装していませんが、親である {{domxref("Event")}} からプロパティを継承しています。</em></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親である {{domxref("Event")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}</dt>
 <dd>
 <p>イベントの存続期間を延長します。 これは、インストール中（{{domxref("ServiceWorkerRegistration.installing", "installing")}}）のワーカーの <code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/install">install</a></code> {{event("Event_handlers", "event handler")}} と、アクティブ（{{domxref("ServiceWorkerRegistration.active", "active")}}）ワーカーの <code><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/activate">activate</a></code> {{event("Event_handlers", "event handler")}} で呼び出されることを目的としています。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js">サービスワーカーのプリフェッチの例</a>からのものです（<a href="https://googlechrome.github.io/samples/service-worker/prefetch/">プリフェッチの例をライブで</a>見る）。 コードは {{domxref("ServiceWorkerGlobalScope.oninstall")}} で {{domxref("ExtendableEvent.waitUntil()")}} を呼び出し、インストール中（{{domxref("ServiceWorkerRegistration.installing")}}）のワーカーがインストール済み（installed）として扱われるのを、渡された Promise が正常に解決されるまで遅らせます。 Promise は、すべてのリソースがフェッチされてキャッシュされたとき、または例外が発生したときに解決します。</p>

<p>コードスニペットは、サービスワーカーが使用するキャッシュのバージョン管理のベストプラクティスも示しています。 この例ではキャッシュは1つしかありませんが、同じアプローチを複数のキャッシュに使用できます。 キャッシュの一括指定識別子を特定のバージョン管理されたキャッシュ名にマップします。</p>

<div class="note">
<p><strong>注</strong>: Chrome では、ログ文は、chrome://serviceworker-internals を介してアクセスされる関連サービスワーカーの "Inspect" インターフェイスを介して表示されます。</p>
</div>

<pre class="brush: js">var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
  var urlsToPrefetch = [
    './static/pre_fetched.txt',
    './static/pre_fetched.html',
    'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif'
  ];

  console.log('install イベントの処理。 プリフェッチするリソース:', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch']).then(function(cache) {
      return cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, {mode: 'no-cors'});
      })).then(function() {
        console.log('すべてのリソースをフェッチし、キャッシュしました。');
      });
    }).catch(function(error) {
      console.error('プリフェッチに失敗:', error);
    })
  );
});</pre>

<div class="note"><strong>重要</strong>: リソースをフェッチするとき、リソースが {{glossary("CORS")}} をサポートしていないサーバーから提供される可能性がある場合は、<code>{mode: 'no-cors'}</code> を使用することが非常に重要です。 この例では、<a href="http://www.chromium.org">www.chromium.org</a> は CORS をサポートしていません。</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#extendableevent', 'ExtendableEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ExtendableEvent")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
