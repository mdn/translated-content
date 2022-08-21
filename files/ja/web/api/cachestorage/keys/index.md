---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
tags:
  - API
  - CacheStorage
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - keys
translation_of: Web/API/CacheStorage/keys
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("CacheStorage")}} インターフェイスの <strong><code>keys()</code></strong> メソッドは、{{domxref("CacheStorage")}} オブジェクトによって追跡されるすべての名前付き {{domxref("Cache")}} オブジェクトに対応する文字列をそれが作成された順番で含む配列で解決する {{jsxref("Promise")}} を返します。 このメソッドを使用して、すべての {{domxref("Cache")}} オブジェクトのリストを反復処理します。</span></p>

<p>グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して <code>CacheStorage</code> にアクセスできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">caches.keys().then(function(<em>keyList</em>) {
  // keyList で何かをする
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("CacheStorage")}} オブジェクト内の {{domxref("Cache")}} 名の配列で解決する {{jsxref("Promise")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットでは、{{domxref("ServiceWorkerGlobalScope.onactivate", "activate")}} イベントを待機してから、新しいサービスワーカーがアクティブ化される前に、古い未使用のキャッシュをクリアする {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ブロックを実行します。 ここに、保持したいキャッシュの名前を含むホワイトリスト（<code>cacheWhitelist</code>）があります。 <code>keys()</code> を使用して {{domxref("CacheStorage")}} オブジェクトのキャッシュのキーを返し、各キーをチェックしてホワイトリストにあるかどうかを確認します。 ない場合は、{{domxref("CacheStorage.delete()")}} を使用して削除します。</p>

<pre class="brush: js">this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      });
    })
  );
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-cachestorage-keys', 'CacheStorage: keys')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.CacheStorage.keys")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.caches")}}</li>
</ul>
