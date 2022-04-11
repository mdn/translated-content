---
title: ServiceWorkerRegistration.pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
tags:
  - API
  - Property
  - Push
  - PushManager
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
translation_of: Web/API/ServiceWorkerRegistration/pushManager
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>pushManager</code></strong> プロパティは、プッシュ購読を管理するための {{domxref("PushManager")}} インターフェイスへの参照を返します。 これには、購読申し込み、アクティブな購読の取得、プッシュ許可状況へのアクセスのサポートが含まれます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>pushManager</em> = <em>serviceWorkerRegistration</em>.pushManager;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("PushManager")}} オブジェクト。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">this.onpush = function(event) {
  console.log(event.data);
  // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // アプリケーションサーバが必要としているプッシュ購読の
        // 詳細はここから使用できます。たとえば、XMLHttpRequest を使用して
        // これを送信できます。
      }, function(error) {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバにエラー情報を送信
        // するためにも 役立ちます。
        console.log(error);
      }
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
   <td>{{SpecName('Push API', '#pushmanager-interface', 'PushManager')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ServiceWorkerRegistration.pushManager")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API">Push API</a></li>
</ul>
