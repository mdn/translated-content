---
title: NotificationEvent.NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
tags:
  - API
  - Constructor
  - Experimental
  - NotificationEvent
  - Notifications
  - Reference
  - Service Workers
  - ServiceWorker
  - コンストラクター
  - 通知
translation_of: Web/API/NotificationEvent/NotificationEvent
---
<p>{{APIRef("Web Notifications")}}</p>

<p><strong><code>NotificationEvent()</code></strong> コンストラクターは、新しい {{domxref("NotificationEvent")}} オブジェクトを生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var myNotificationEvent = new NotificationEvent(type, NotificationEventInit);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>type</code></dt>
 <dd>TBD</dd>
 <dt><code>NotificationEventInit</code> {{optional_inline}}</dt>
 <dd>イベントが配信される通知として使用される {{domxref("Notification")}} オブジェクトを含む辞書オブジェクト。この仕様書の後の草稿では、このパラメータはオプションではありません。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">var n = new Notification('Hello');
var init = { notification: n };
var myNotificationEvent = new NotificationEvent(type, init);
</pre>

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
   <td>{{SpecName('Web Notifications','#dom-notificationevent-notificationevent','NotificationEvent() constructor')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.NotificationEvent.NotificationEvent")}}</p>
