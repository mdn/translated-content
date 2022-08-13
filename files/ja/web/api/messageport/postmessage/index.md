---
title: MessagePort.postMessage()
slug: Web/API/MessagePort/postMessage
tags:
  - API
  - Channel messagging
  - MessagePort
  - Reference
  - postMessage
translation_of: Web/API/MessagePort/postMessage
---
<p>{{APIRef("HTML DOM")}}</p>

<p>{{domxref("MessagePort")}} インターフェイスの <code><strong>postMessage()</strong></code> メソッドは、ポートからのメッセージを送信します。任意で、オブジェクトの所有権を他のブラウザコンテキストへ転送します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">port.postMessage(message [,transfer]);</pre>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>無効。</p>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt>message</dt>
 <dd>チャンネル経由で送信するメッセージ。これは基本データタイプになります。複数のデータアイテムを配列として送信できます。</dd>
 <dt>[, transfer]</dt>
 <dd>(任意) 転送されるオブジェクト。これらのオブジェクトの所有権は、受信側のブラウザコンテキストへ転送されるため、送信側のブラウザコンテキストでは使用できなくなります。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>次のコードブロックでは、{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} コンストラクタで新しいチャンネルを作成しています。IFrame が読み込まれた時、{{domxref("window.postMessage")}} メソッドによってメッセージと {{domxref("MessageChannel.port2")}} が IFrame へ渡されます。すると、<code>handleMessage</code> が <code>onmessage</code> によって IFrame から返されたメッセージに応答し、そのメッセージを段落に出力します。ここで、{{domxref("MessageChannel.port1")}} は、メッセージが到着したときに確認するための待機状態にあります。</p>

<pre class="brush: js">var channel = new MessageChannel();
var para = document.querySelector('p');

var ifr = document.querySelector('iframe');
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}   </pre>

<p>完全に動作する例は、Github 上の <a class="external external-icon" href="https://github.com/mdn/channel-messaging-basic-demo">チャンネルメッセージ送信の基本デモ</a> を見てください (<a class="external external-icon" href="http://mdn.github.io/channel-messaging-basic-demo/">実際の動作も確認できます</a>)。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-messageport-postmessage','postMessage()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 Web Messaging")}} との差異なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 Web Messaging', '#dom-messageport-postmessage','postMessage()')}}</td>
   <td>{{Spec2('HTML5 Web Messaging')}}</td>
   <td>仕様の W3C バージョン。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの実装状況</h2>

<p>{{Compat("api.MessagePort.postMessage")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Using channel messaging</a></li>
</ul>
