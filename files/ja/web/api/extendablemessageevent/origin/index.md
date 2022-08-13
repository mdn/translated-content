---
title: ExtendableMessageEvent.origin
slug: Web/API/ExtendableMessageEvent/origin
tags:
  - API
  - ExtendableMessageEvent
  - Property
  - Reference
  - Service Workers
  - origin
translation_of: Web/API/ExtendableMessageEvent/origin
---
<p>{{APIRef("Service Workers API")}}</p>

<p>{{domxref("ExtendableMessageEvent")}} インターフェイスの <strong><code>origin</code></strong> 読み取り専用プロパティは、メッセージを送信した {{domxref("Client")}} のオリジンを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <em>myOrigin</em> = <em>extendableMessageEvent</em>.origin;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次のコードをサービスワーカー内で使用して、{{domxref("PushMessageData")}} を介して受信したデータを<a href="/ja/docs/Web/API/Channel_Messaging_API">チャンネルメッセージ</a>を介してメインコンテキストに送信することにより、プッシュメッセージに応答する場合、<code>onmessage</code> のイベントオブジェクトは <code>ExtendableMessageEvent</code> になります。</p>

<pre class="brush: js notranslate">var port;

self.addEventListener('push', function(e) {
  var obj = e.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

self.onmessage = function(e) {
  console.log(e.origin);
  port = e.ports[0];
}
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-extendablemessageevent-origin', 'ExtendableMessageEvent.origin')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ExtendableMessageEvent.origin")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging</a></li>
</ul>
