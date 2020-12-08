---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
tags:
  - API
  - ExtendableMessageEvent
  - Interface
  - Reference
  - Service Workers
translation_of: Web/API/ExtendableMessageEvent
---
<div>{{APIRef("Service Workers API")}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> の <strong><code>ExtendableMessageEvent</code></strong> インターフェイスは、（別のコンテキストからのメッセージを {{domxref("ServiceWorkerGlobalScope")}} で受信した時に）サービスワーカーで発生する {{event("message_(ServiceWorker)","message")}} イベントのイベントオブジェクトを表し、このようなイベントの存続期間を延長します。</span></p>

<p>このインターフェイスは、{{domxref("ExtendableEvent")}} インターフェイスを継承しています。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("ExtendableMessageEvent.ExtendableMessageEvent","ExtendableMessageEvent()")}}</dt>
 <dd>新しい <code>ExtendableMessageEvent</code> オブジェクトのインスタンスを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親の {{domxref("ExtendableEvent")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("ExtendableMessageEvent.data")}} {{readonlyinline}}</dt>
 <dd>イベントのデータを返します。 任意のデータ型を使用できます。</dd>
 <dt>{{domxref("ExtendableMessageEvent.origin")}} {{readonlyinline}}</dt>
 <dd>メッセージを送信した {{domxref("Client")}} のオリジンを返します。</dd>
 <dt>{{domxref("ExtendableMessageEvent.lastEventId")}} {{readonlyinline}}</dt>
 <dd>サーバー送信イベント（<a href="/ja/docs/Web/API/Server-sent_events/Using_server-sent_events">server-sent events</a>）で、イベントソースの最後のイベント ID を表します。 これは空の文字列です。</dd>
 <dt>{{domxref("ExtendableMessageEvent.source")}} {{readonlyinline}}</dt>
 <dd>メッセージを送信した {{domxref("Client")}} オブジェクトへの参照を返します。</dd>
 <dt>{{domxref("ExtendableMessageEvent.ports")}} {{readonlyinline}}</dt>
 <dd>関連するメッセージチャンネルのポートを表す {{domxref("MessagePort")}} オブジェクトを含む配列を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親の {{domxref("ExtendableEvent")}} からメソッドを継承します。</em></p>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、ページが {{domxref("ServiceWorkerRegistration.active")}} を介して {{domxref("ServiceWorker")}} オブジェクトへのハンドルを取得し、その <code>postMessage()</code> 関数を呼び出します。</p>

<pre class="brush: js notranslate">// 制御されているページ内
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.addEventListener('message', event =&gt; {
    // event は MessageEvent オブジェクトです
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then( registration =&gt; {
    registration.active.postMessage("Hi service worker");
  });

}</pre>

<p>次のように、サービスワーカーは、<code>message</code> イベントをリッスンしてメッセージを受信できます。</p>

<pre class="brush: js notranslate">// サービスワーカー内
addEventListener('message', event =&gt; {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
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
   <td>{{SpecName('Service Workers', '#extendablemessageevent', 'ExtendableMessageEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ExtendableMessageEvent")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging</a></li>
</ul>
