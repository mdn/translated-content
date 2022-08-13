---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
tags:
  - API
  - CacheStorage
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - open
translation_of: Web/API/CacheStorage/open
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("CacheStorage")}} インターフェイスの <strong><code>open()</code></strong> メソッドは、<code>cacheName</code> に一致する {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します。</span></p>

<p>グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して <code>CacheStorage</code> にアクセスできます。</p>

<div class="note">
<p><strong>注</strong>: 指定した {{domxref("Cache")}} が存在しない場合、その <code>cacheName</code> で新しいキャッシュを作成し、この新しい {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}} を返します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">caches.open(<em>cacheName</em>).then(function(<em>cache</em>) {
  // cache で何かをする
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>cacheName</dt>
 <dd>開きたいキャッシュの名前。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>要求した {{domxref("Cache")}} オブジェクトに解決される {{jsxref("Promise")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は MDN の <a href="https://github.com/mdn/sw-test/">sw-test の例</a>からのものです（<a href="https://mdn.github.io/sw-test/">sw-test をライブで</a>見る）。 ここでは、{{domxref("InstallEvent")}} が発生するのを待ち、{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} を実行してアプリのインストールプロセスを処理します。 これは、<code>CacheStorage.open()</code> を呼び出して新しいキャッシュを作成し、{{domxref("Cache.addAll()")}} を使用して一連のアセットを追加することで構成されます。</p>

<pre class="brush: js">self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-cachestorage-open', 'CacheStorage: open')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.CacheStorage.open")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.caches")}}</li>
</ul>
