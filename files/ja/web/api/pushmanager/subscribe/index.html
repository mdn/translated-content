---
title: PushManager.subscribe()
slug: Web/API/PushManager/subscribe
tags:
  - API
  - Experimental
  - Method
  - PushManager
  - Reference
  - Web API
  - subscribe
translation_of: Web/API/PushManager/subscribe
---
<p>{{SeeCompatTable}}{{ApiRef("Push API")}}</p>

<p>{{domxref("PushManager")}} インターフェースの <strong><code>subscribe()</code></strong> メソッドは、プッシュサービスを提供します。</p>

<p>これは、プッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。現在の service worker に既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">​PushManager.subscribe(<em>options</em>).then(function(<em>pushSubscription</em>) { ... } );</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>オプションの設定パラメータを含むオブジェクト。次のプロパティを設定できる：
 <ul>
  <li><code>userVisibleOnly</code>: 返されたプッシュサブスクリプションの効果がユーザーに表示するメッセージにだけ使われるかを示す boolean 値。</li>
  <li><code>applicationServerKey</code>: プッシュサーバーがアプリケーションサーバーを認証するために使用する <a href="https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9ADSA">楕円曲線 DSA</a> P-256 公開鍵を含む、Base64 でエンコードされた {{domxref("DOMString")}} または {{domxref("ArrayBuffer")}}。指定した場合は、アプリケーションサーバーから発するすべてのメッセージで <a href="https://tools.ietf.org/html/rfc8292">VAPID</a> 認証スキームを使用しなければならず、また対応する秘密鍵で署名した JWT を含めなければなりません。この鍵は、データを暗号化するために使用する ECDH 鍵と<em><strong>同じではありません</strong></em>。詳しくは "<a href="https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/">Using VAPID with WebPush</a>" をご覧ください。</li>
 </ul>

 <div class="note">
 <p><em><strong>注記:</strong> この引数は Chrome など、一部のブラウザーで必須です。</em></p>
 </div>
 </dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("PushSubscription")}} オブジェクトを解決する {{jsxref("Promise")}} 。</p>

<h2 id="例">例</h2>

<pre class="brush: js">this.onpush = function(event) {
  console.log(event.data);
  // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
}

navigator.serviceWorker.register('serviceworker.js');

// Use serviceWorker.ready to ensure that you can subscribe for push
navigator.serviceWorker.ready.then(
  function(serviceWorkerRegistration) {
    var options = {
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    };
    serviceWorkerRegistration.pushManager.subscribe(options).then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // アプリケーションサーバが必要としているプッシュサブスクリプションの
        // 詳細はここから使用できます。たとえば、XMLHttpRequest を使用して
        // これを送信できます。
      }, function(error) {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバにエラー情報を送信
        //  するためにも 役立ちます。
        console.log(error);
      }
    );
  });</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API', '#widl-PushManager-subscribe-Promise-PushSubscription--PushSubscriptionOptions-options', 'subscribe()')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<div>


<p>{{Compat("api.PushManager.subscribe")}}</p>
</div>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>
