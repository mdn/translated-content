---
title: ServiceWorkerRegistration.update()
slug: Web/API/ServiceWorkerRegistration/update
tags:
  - API
  - Method
  - Reference
  - Service Worker
  - ServiceWorkerRegistration
  - Update
translation_of: Web/API/ServiceWorkerRegistration/update
---
<div>{{APIRef("Service Workers API")}}</div>

<p>{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>update()</code></strong> メソッドは、サービスワーカーの更新を試みます。 ワーカーのスクリプト URL をフェッチし、新しいワーカーが現在のワーカーとバイト単位で同一でない場合は、新しいワーカーをインストールします。 前回のフェッチが24時間以上前に行われた場合、ワーカーのフェッチはブラウザーキャッシュをバイパスします。</p>

<div class="note">
<p><strong>注</strong>: この機能は <a href="/ja/docs/Web/API/Web_Workers_API">Web Worker</a> で使用できます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>serviceWorkerRegistration</em>.update();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("ServiceWorkerRegistration")}} オブジェクトで解決する {{jsxref("Promise")}}。</p>

<h2 id="Example" name="Example">例</h2>

<p>次の簡単な例では、サービスワーカーの例を登録し、次にイベントハンドラーをボタンに追加して、必要に応じてサービスワーカーを明示的に更新できるようにします。</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: 'sw-test'}).then(function(registration) {
    // 登録しました
    console.log('登録に成功しました。');
    button.onclick = function() {
      registration.update();
    }
  }).catch(function(error) {
    // 登録に失敗しました
    console.log('登録に失敗しました:' + error);
  });
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-registration-update', 'ServiceWorkerRegistration.update()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.update")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
