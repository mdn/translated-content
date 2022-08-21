---
title: PushManager
slug: Web/API/PushManager
tags:
  - API
  - Experimental
  - Interface
  - Push
  - Push API
  - Reference
  - Service Workers
translation_of: Web/API/PushManager
---
<p>{{SeeCompatTable}}{{ApiRef("Push API")}}</p>

<p><a href="/ja/docs/Web/API/Push_API">Push API</a> の <code>PushManager</code> インターフェースは、3rd パーティーのサーバーからの通知だけではなく、プッシュ通知へのリクエスト URL を取得するための方法を提供します。</p>

<p>このインターフェースは、{{domxref("ServiceWorkerRegistration.pushManager")}} プロパティを経由してアクセスできます。</p>

<div class="note">
<p><strong>ノート</strong>：このインターフェースは、廃止された {{domxref("PushRegistrationManager")}}で以前に提案されていた機能をリプレースしています。</p>
</div>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("PushManager.supportedContentEncodings")}}</dt>
 <dd>プッシュメッセージのペイロードの暗号化でサポートされているコンテンツエンコーディングの配列を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("PushManager.getSubscription()")}}</dt>
 <dd>既存のプッシュサブスクリプションを受け取ります。これは既存のプッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} を解決する {{jsxref("Promise")}} を返します。既存のプッシュサブスクリプションが存在しない場合、<code>null</code> 値で解決されます。</dd>
 <dt>{{domxref("PushManager.permissionState()")}}</dt>
 <dd>現在の {{domxref("PushSubscription")}} の許可状況で解決される {{jsxref("Promise")}} を返します。許可状況は <code>'granted'</code>、<code>'denied'</code>、<code>'prompt' </code>のいずれかです。</dd>
 <dt>{{domxref("PushManager.subscribe()")}}</dt>
 <dd>プッシュサービスを提供します。プッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。現在の service worker に既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。</dd>
</dl>

<h3 id="Deprecated_methods" name="Deprecated_methods">非推奨のメソッド</h3>

<dl>
 <dt>{{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}</dt>
 <dd>リクエストしている Web アプリの<code>PushPermissionStatus</code> で解決される {{jsxref("Promise")}} を返します。この値は <code>granted</code>、<code>denied</code>、<code>default</code> のいずれかです。{{domxref("PushManager.permissionState()")}} で置き換えられました。</dd>
 <dt>{{domxref("PushManager.register()")}} {{deprecated_inline}}</dt>
 <dd>プッシュサービスを提供します。 {{domxref("PushManager.subscribe()")}} で置き換えられました。</dd>
 <dt>{{domxref("PushManager.registrations()")}} {{deprecated_inline}}</dt>
 <dd>既存のプッシュサブスクリプションを受け取ります。{{domxref("PushManager.getSubscription()")}} で置き換えられました。</dd>
 <dt>{{domxref("PushManager.unregister()")}} {{deprecated_inline}}</dt>
 <dd>指定のサブスクリプションエンドポイントを解除して削除します。API のアップデートで、サブスクリプションは、{{domxref("PushSubscription.unsubscribe()")}} メソッドを呼び出して解除することになりました。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

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
        // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
        // それを送信したり、通知を表示したりできます。
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
   <td>{{SpecName('Push API','#pushmanager-interface','PushManager')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>
<p>{{Compat("api.PushManager")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API">Push API</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
