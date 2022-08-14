---
title: CacheStorage.delete()
slug: Web/API/CacheStorage/delete
tags:
  - API
  - CacheStorage
  - Experimental
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - delete
translation_of: Web/API/CacheStorage/delete
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("CacheStorage")}} インターフェイスの <strong><code>delete()</code></strong> メソッドは、<code>cacheName</code> に一致する {{domxref("Cache")}} オブジェクトを見つけ、見つかった場合は {{domxref("Cache")}} オブジェクトを削除し、<code>true</code> に解決される {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} オブジェクトが見つからない場合、<code>false</code> に解決されます。</span></p>

<p>グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して <code>CacheStorage</code> にアクセスできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">caches.delete(<em>cacheName</em>).then(function(<em>boolean</em>) {
  // キャッシュが削除されました
});
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>cacheName</code></dt>
 <dd>削除するキャッシュの名前。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("Cache")}} オブジェクトが見つかって削除された場合は <code>true</code>、そうでない場合は <code>false</code> に解決される {{jsxref("Promise")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードスニペットでは、<code>activate</code> イベントを待機してから、新しいサービスワーカーがアクティブになる前に、古い未使用のキャッシュをクリアする {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ブロックを実行します。 ここに、保持したいキャッシュ名の配列（<code>cachesToKeep</code>）があります。 {{domxref("CacheStorage.keys")}} を使用して {{domxref("CacheStorage")}} オブジェクトのキャッシュのキーを返し、各キーをチェックしてその配列内にあるかどうかを確認します。 ない場合は、<code>delete()</code> を使用して削除します。</p>

<pre class="brush: js">this.addEventListener('activate', function(event) {
  var cachesToKeep = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cachesToKeep.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
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
   <td>{{SpecName('Service Workers', '#cache-storage-delete', 'CacheStorage: delete')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.CacheStorage.delete")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.caches")}}</li>
</ul>
