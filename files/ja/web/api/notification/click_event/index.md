---
title: Notification.onclick
slug: Web/API/Notification/click_event
tags:
  - API
  - DOM
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - onclick
  - プロパティ
  - 通知
translation_of: Web/API/Notification/onclick
original_slug: Web/API/Notification/onclick
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p><strong><code>onclick</code></strong> は {{domxref("Notification")}} インターフェイスのプロパティで、 {{domxref("Element/click_event", "click")}} イベントを受信するイベントリスナーを指定します。これらのイベントはユーザーが表示されている {{domxref("Notification")}} をクリックしたときに発生します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>Notification</var>.onclick = function(event) { ... };
</pre>

<p>既定の動作は、この通知に関連した<a href="https://html.spec.whatwg.org/multipage/browsers.html#browsing-context">閲覧コンテキスト</a>へフォーカスを移動することです。この動作をさせたくない場合は、イベントオブジェクトの {{domxref("Event/preventDefault", "preventDefault()")}} を呼び出してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、 <code>onclick</code> ハンドラーを使用して、通知がクリックされたときにウェブページを新しいタブで開くようにしています (<code>_blank</code> を含めて指定することで指定)。</p>

<pre class="brush: js notranslate">notification.onclick = function(event) {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open('http://www.mozilla.org', '_blank');
}</pre>

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
   <td>{{SpecName('Web Notifications','#dom-notification-onclick','onclick')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification.onclick")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Notification")}}</li>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
</ul>
