---
title: PushSubscription.toJSON()
slug: Web/API/PushSubscription/toJSON
tags:
  - API
  - Experimental
  - Method
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - toJSON
translation_of: Web/API/PushSubscription/toJSON
---
<p>{{SeeCompatTable}}{{APIRef("Push API")}}</p>

<p>{{domxref("PushSubscription")}} インターフェースの <code>toJSON()</code> メソッドは、スタンダードなシリアライザーです：これは、便利なショートカットを提供するサブスクリプションプロパティの JSON 表記を返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">​mySubscription = subscription.toJSON()</pre>

<h3 id="パラメーター">パラメーター</h3>

<p>なし。</p>

<h3 id="戻り値">戻り値</h3>

<p>JSON オブジェクト。現在、<code>endpoint</code> メンバーとしてサブスクリプションエンドポイントのみを含みます。</p>

<h2 id="例">例</h2>

<pre class="brush: js">navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    var mySubscription = subscription.toJSON();
    // サブスクリプションの詳細を使用して何かを実行する。
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
   <td>{{SpecName('Push API','#pushsubscription-interface','PushSubscription (see serializer listed in the WebIDL)')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushSubscription.toJSON")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>
