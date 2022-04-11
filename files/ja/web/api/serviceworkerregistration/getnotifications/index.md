---
title: ServiceWorkerRegistration.getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
tags:
  - API
  - Experimental
  - Method
  - Notification
  - Notifications
  - Reference
  - Service Worker
  - Service Workers
  - Service worker API
  - ServiceWorker
  - ServiceWorkerRegistration
  - getNotifications
translation_of: Web/API/ServiceWorkerRegistration/getNotifications
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <code>getNotifications()</code> メソッドは、現在のサービスワーカー登録を介して現在のオリジンから作成された順序で通知のリストを返します。 オリジンには、アクティブではあるがスコープが異なるサービスワーカー登録が多数あります。 同じオリジンの1つのサービスワーカーによって作成された通知は、同じオリジンの他のアクティブなサービスワーカーでは利用できません。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>s​erviceWorkerRegistration</em>.getNotifications(<em>options</em>)
.then(function(<em>notificationsList</em>) { ... });</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>options {{optional_inline}}</dt>
 <dd>返される通知をフィルタするオプションを含むオブジェクト。 使用可能なオプションは次のとおりです。
 <ul>
  <li><code>tag</code>: 通知タグを表す {{domxref("DOMString")}}。 指定した場合、このタグを持つ通知のみが返されます。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("Notification")}} オブジェクトのリストに解決される {{jsxref("Promise")}}。<br>
  </p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">navigator.serviceWorker.register('sw.js');

var options = { tag : 'user_alerts' };

navigator.serviceWorker.ready.then(function(registration) {
  registration.getNotifications(options).then(function(notifications) {
    // notifications で何かをします
  })
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
   <td>{{SpecName('Web Notifications', '#dom-serviceworkerregistration-getnotifications', 'ServiceWorkerRegistration.getNotifications()')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.getNotifications")}}</p>
