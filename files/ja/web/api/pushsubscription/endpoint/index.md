---
title: PushSubscription.endpoint
slug: Web/API/PushSubscription/endpoint
tags:
  - API
  - Experimental
  - Property
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - endPoint
translation_of: Web/API/PushSubscription/endpoint
---
<p>{{SeeCompatTable}}{{APIRef("Push API")}}</p>

<p>{{domxref("PushSubscription")}} インターフェースの <code><strong>endpoint</strong></code> 読み取り専用プロパティは、プッシュサブスクリプションに関連するエンドポイントを含む {{domxref("USVString")}} を返します。</p>

<p>エンドポイントは、 プッシュサービスに加入している特定の Service Worker にプッシュメッセージを送信するために使用するプッシュサーバーへのカスタム URL エンドポイントの形式をとります。このため、他者がこれをハイジャックしてプッシュ機能を乱用しないように、エンドポイントを秘匿する方が良いです。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">var <em>myEnd</em> = <em>pushSubscription</em>.endpoint;</pre>

<h3 id="値">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="例">例</h2>

<pre class="brush: js">navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
    console.log(subscription.endpoint);

      // この時点で、サブスクリプションエンドポイントをサーバーに送信し、
      // 保存した後、 後でプッシュメッセージを送信するために使用します。
  })
})
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API','#widl-PushSubscription-endpoint','endPoint')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushSubscription.endpoint")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
 <li><a href="http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web">Push Notifications on the Open Web</a>, Matt Gaunt</li>
</ul>
