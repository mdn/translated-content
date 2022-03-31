---
title: MessageChannel()
slug: Web/API/MessageChannel/MessageChannel
tags:
  - API
  - Channel messaging
  - Constructor
  - MessageChannel
  - Reference
translation_of: Web/API/MessageChannel/MessageChannel
---
<p>{{APIRef("HTML DOM")}}</p>

<p>{{domxref("MessageChannel")}} インターフェースの <code>MessageChannel()</code> コンストラクタは、2 つの新しい {{domxref("MessagePort")}} オブジェクトを持つ新しい {{domxref("MessageChannel")}} オブジェクトを返します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var channel = new MessageChannel();</pre>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>新たに作成された {{domxref("MessageChannel")}} オブジェクト。</p>

<h2 id="Example" name="Example">例</h2>

<p>次のコードブロックでは、{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} コンストラクタを使用して作成された新しいチャンネルを知ることができます。{{HTMLElement("iframe")}} が読み込まれると、{{domxref("MessagePort.postMessage")}} にメッセージを添えて {{domxref("MessageChannel.port2")}} を {{HTMLElement("iframe")}} へ渡します。すると、<code>handleMessage</code> ハンドラが {{HTMLElement("iframe")}} から返送されたメッセージに ({{domxref("MessagePort.onmessage")}} を使用して) 返答し、これを段落に挿入します。</p>

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
}
</pre>

<p>完全に動作する例は、Github 上の <a class="external external-icon" href="https://github.com/mdn/channel-messaging-basic-demo">channel messaging basic demo</a> を参照してください (<a class="external external-icon" href="http://mdn.github.io/channel-messaging-basic-demo/">実際のデモも実行できます</a>)。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-messagechannel','MessageChannel()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 Web Messaging")}} との差異なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 Web Messaging', '#dom-messagechannel','MessageChannel()')}}</td>
   <td>{{Spec2('HTML5 Web Messaging')}}</td>
   <td>仕様の W3C バージョン。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの実装状況</h2>

<p>{{Compat("api.MessageChannel.MessageChannel")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Using channel messaging</a></li>
</ul>
