---
title: PushSubscription.unsubscribe()
slug: Web/API/PushSubscription/unsubscribe
tags:
  - API
  - Experimental
  - Method
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - unsubscribe
translation_of: Web/API/PushSubscription/unsubscribe
---
<p>{{SeeCompatTable}}{{APIRef("Push API")}}</p>

<p>{{domxref("PushSubscription")}} インターフェースの <code>unsubscribe()</code> メソッドは、現在のサブスクリプションが成功裏に登録解除されたときに {{domxref("Boolean")}} で解決される{{domxref("Promise")}} を返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">​PushSubscription.unsubscribe().then(function(Boolean) { ... });</pre>

<h3 id="パラメーター">パラメーター</h3>

<p>なし。</p>

<h3 id="戻り値">戻り値</h3>

<p>現在のサブスクリプションが成功裏に登録解除されたときに {{domxref("Boolean")}} で解決される{{domxref("Promise")}}。</p>

<h2 id="例">例</h2>

<pre class="brush: js">navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      // 登録解除が成功
    }).catch(function(e) {
      // 登録解除が失敗
    })
  })
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
   <td>{{SpecName('Push API','#widl-PushSubscription-unsubscribe-Promise-boolean','unsubscribe()')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushSubscription.unsubscribe")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
 <li>{{domxref("PushManager.getSubscription")}}</li>
</ul>
