---
title: Cache.addAll()
slug: Web/API/Cache/addAll
tags:
  - API
  - Cache
  - addAll
  - サービスワーカー
  - サービスワーカー API
translation_of: Web/API/Cache/addAll
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("Cache")}} インターフェイスの <strong><code>addAll()</code></strong> メソッドは、URL の配列を受け取り、取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。取得の間に作成されたリクエストオブジェクトは、格納されるレスポンス操作のキーになります。</span></p>

<div class="note">
<p><strong>メモ</strong>: <code>addAll()</code> は、リクエストと一致する、以前にキャッシュに格納されたキーと値のペアをどれでも上書きしますが、（結果としての <code>put()</code> 操作が）同一の <code>addAll()</code> メソッドによって先に格納されたキャッシュエントリーを上書きしようとすると失敗します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>cache</em>.addAll(<em>requests</em>[]).then(function() {
  // リクエストはすでに cahce に追加されている。
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt>requests</dt>
 <dd>キャッシュにフェッチして追加したい URL の文字列の配列です。 URL の代わりに {{domxref("Request")}} オブジェクトを指定できます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> で解決する {{jsxref("Promise")}}。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"><strong>例外</strong></th>
   <th scope="col"><strong>発生条件</strong></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TypeError</code></td>
   <td>
    <p>URL スキームが <code>http</code> や <code>https</code> ではありません。</p>

    <p>レスポンスステータスが200番台（つまり、成功レスポンス）ではありません。これはリクエストが成功を返さない場合や、リクエストがオリジン間の CORS ではないリクエスト (<em>cross-origin no-cors</em> request) の場合も発生します (この場合、ステータスが常に 0 で報告されます)。</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードブロックは、{{domxref("InstallEvent")}} が発火するのを待ってから、アプリのインストールプロセスを処理するために、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行します。この処理は、新しいキャッシュを作成するための {{domxref("CacheStorage.open")}} の呼び出しと、一連の資産を追加するための <code>addAll()</code> の使用で構成されています。</p>

<pre class="brush: js">this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
</pre>

<h2 id="Specifications" name="Specifications">仕様策定状況</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-cache-addall', 'Cache: addAll')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>
<p>{{Compat("api.Cache.addAll")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">サービスワーカーの使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WorkerGlobalScope.caches")}}</li>
</ul>
