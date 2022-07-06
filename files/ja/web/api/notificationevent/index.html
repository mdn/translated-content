---
title: NotificationEvent
slug: Web/API/NotificationEvent
tags:
  - API
  - Interface
  - NotificationEvent
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/NotificationEvent
---
<p>{{APIRef("Web Notifications")}}</p>

<p>{{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} ハンドラーに渡される引数である <code>NotificationEvent</code> インターフェイスは、 {{domxref("ServiceWorker")}} の {{domxref("ServiceWorkerGlobalScope")}} で配信される通知クリックイベントを表します。</p>

<p>このインターフェイスは {{domxref("ExtendableEvent")}} インターフェイスを継承しています。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}</dt>
 <dd>新しい <code>NotificationEvent</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>祖先である {{domxref("Event")}} からプロパティを継承しています。</em></p>

<dl>
 <dt>{{domxref("NotificationEvent.notification")}} {{readonlyInline}}</dt>
 <dd>イベントを発生させるためにクリックされた通知を表す {{domxref("Notification")}} オブジェクトを返します。</dd>
 <dt>{{domxref("NotificationEvent.action")}} {{readonlyinline}}</dt>
 <dd>ユーザーがクリックした通知ボタンの文字列 ID を返します。ユーザーがアクションボタン以外の場所で通知をクリックした場合、または通知にボタンがない場合、この値は空の文字列を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親の {{domxref("ExtendableEvent")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}</dt>
 <dd>
 <p>イベントの存続期間を延長します。作業が進行中であることをブラウザーに伝えます。</p>
 </dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // これは、現在のページが既に開いているかどうかを確認し、
  // そうならばフォーカスします
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
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
   <td>{{SpecName('Web Notifications','#notificationevent','NotificationEvent')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard.</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注</strong>: このインターフェイスは <a href="/ja/docs/Web/API/Notifications_API">Notifications API</a> で定義されていますが、{{domxref("ServiceWorkerGlobalScope")}} を介してアクセスします。</p>
</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.NotificationEvent")}}</p>
