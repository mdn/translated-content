---
title: 'ServiceWorkerGlobalScope: pushsubscriptionchange イベント'
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
tags:
  - API
  - Event
  - Push
  - Push API
  - PushSubscriptionChangeEvent
  - Reference
  - Service Workers
  - Service Workers API
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - Subscription
  - events
  - プッシュ通知
translation_of: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
---
<div>{{APIRef("Push API")}}</div>

<p><span class="seoSummary"><strong><code>pushsubscriptionchange</code></strong> イベントは<a href="/ja/docs/Web/API/ServiceWorkerGlobalScope">グローバルスコープ</a>としての {{domxref("ServiceWorker")}} へ送信され、、アプリケーションの制御の外から起動されたプッシュ通知への加入状況が変化したことを示します。</span>これはブラウザーが加入を更新した場合に発生しますが、加入が取り消されたり失われたりしたときにも発生する可能性があります。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("PushSubscriptionChangeEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange", "onpushsubscriptionchange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<p>加入に関する情報をアプリケーションサーバーと共有する方法を示す例では {{domxref("WindowOrWorkerGlobalScope.fetch", "fetch()")}} を使用する傾向がありますが、これは実際の使用には必ずしも最適な選択ではありません。たとえば、アプリがオフラインの場合は機能しないためです。</p>

<p>サービスワーカーとアプリサーバー間で加入情報を同期するのに別の方法を使用することを検討するか、 <code>fetch()</code> を使用するコードが、データ交換の試行が失敗した場合を処理するのに十分堅牢であることを確認してください。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> この仕様書の早期の草稿では、このイベントは {{domxref("PushSubscription")}} が期限切れになった時に送信されるよう定義されていました。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は、サービスワーカーのコンテキストで実行するものであり、 <code>pushsubscriptionchange</code> イベントを待ち受けて、無効になった場合に再加入します。</p>

<pre class="brush: js">self.addEventListener("pushsubscriptionchange", event =&gt; {
  event.waitUntil(swRegistration.pushManager.subscribe(event.oldSubscription.options)
    .then(subscription =&gt; {
      return fetch("register", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          endpoint: subscription.endpoint
        })
      });
    })
  );
}, false);</pre>

<p>加入の有効期限が切れたことを示す <code>pushsubscriptionchange</code> イベントが到着すると、プッシュマネージャーの {{domxref("PushManager.subscribe", "subscribe()")}} メソッドを呼び出して再加入します。返された Promise が解決されると、新しい加入を受け取ります。これは、 {{domxref("WindowOrWorkerGlobalScope.fetch", "fetch()")}} 呼び出しを使用してアプリサーバーに配信され、 {{Glossary("JSON")}} 形式で加入の {{domxref("PushSubscription.endpoint", "endpoint")}} の返信をアプリサーバーに送信します。</p>

<p>{{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange", "onpushsubscriptionchange")}} イベントハンドラープロパティを使用してイベントハンドラーを設定することもできます。</p>

<pre class="brush: js">self.onpushsubscriptionchange = event =&gt; {
  event.waitUntil(swRegistration.pushManager.subscribe(event.oldSubscription.options)
    .then(subscription =&gt; {
      /* ... */
    )
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Push API', '#the-pushsubscriptionchange-event', 'pushsubscriptionchange')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.pushsubscriptionchange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Push API の使用</a></li>
 <li>{{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange", "onpushsubscriptionchange")}} イベントハンドラープロパティ</li>
</ul>
