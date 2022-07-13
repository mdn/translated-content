---
title: Notification.body
slug: Web/API/Notification/body
tags:
  - API
  - BODY
  - DOM
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - プロパティ
  - 通知
translation_of: Web/API/Notification/body
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p><strong><code>body</code></strong> は {{domxref("Notification")}} インターフェイスの読取専用プロパティで、 {{domxref("Notification.Notification","Notification()")}} コンストラクターの <code>body</code> オプションで指定された通知の本文文字列を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>body</var> = <var>Notification</var>.body;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMString")}} です。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle, options);

  console.log(n.body);
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-notification-body','body')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification.body")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
</ul>
