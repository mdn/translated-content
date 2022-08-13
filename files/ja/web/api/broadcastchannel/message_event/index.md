---
title: 'BroadcastChannel: message イベント'
slug: Web/API/BroadcastChannel/message_event
tags:
  - Communication
  - Event
  - EventSource
  - Reference
  - events
  - message
  - messaging
translation_of: Web/API/BroadcastChannel/message_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>message</code> イベントは、メッセージがそのチャネルに到着したときに {{domxref('BroadcastChannel')}} オブジェクトに対して発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <td>バブリング</td>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("MessageEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td>{{domxref("BroadcastChannel.onmessage","onmessage")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">実例</h3>

<p>この例では、ユーザーがボタンをクリックしたときに {{htmlelement("textarea")}} の内容を放送する "Sender" の {{htmlelement("iframe")}} と、放送メッセージを受信し、その結果を {{htmlelement("div")}} 要素に書き込む2つの "Receiver" の <code>&lt;iframe&gt;</code> があります。</p>

<h4 id="Sender" name="Sender">Sender</h4>

<div class="hidden">
<pre class="brush: html">&lt;h1&gt;Sender&lt;/h1&gt;
&lt;label for="message"&gt;Type a message to broadcast:&lt;/label&gt;&lt;br/&gt;
&lt;textarea id="message" name="message" rows="1" cols="40"&gt;Hello&lt;/textarea&gt;
&lt;button id="broadcast-message" type="button"&gt;Broadcast message&lt;/button&gt;</pre>

<pre class="brush: css">body {
     border: 1px solid black;
     padding: .5rem;
     height: 150px;
     font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}

textarea {
    padding: .2rem;
}

label, br {
    margin: .5rem 0;
}

button {
    vertical-align: top;
    height: 1.5rem;
}</pre>
</div>

<pre class="brush: js">const channel = new BroadcastChannel('example-channel');
const messageControl = document.querySelector('#message');
const broadcastMessageButton = document.querySelector('#broadcast-message');

broadcastMessageButton.addEventListener('click', () =&gt; {
    channel.postMessage(messageControl.value);
})
</pre>

<h4 id="Receiver_1" name="Receiver_1">Receiver 1</h4>

<div class="hidden">
<pre class="brush: html">&lt;h1&gt;Receiver 1&lt;/h1&gt;
&lt;div id="received"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans",
    sans-serif; margin-bottom: 1rem;
}
</pre>
</div>

<pre class="brush: js">const channel = new BroadcastChannel('example-channel');
channel.addEventListener('message', (event) =&gt; {
  received.textContent = event.data;
});</pre>

<h4 id="Receiver_2" name="Receiver_2">Receiver 2</h4>

<div class="hidden">
<pre class="brush: html">&lt;h1&gt;Receiver 2&lt;/h1&gt;
&lt;div id="received"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}
</pre>
</div>

<pre class="brush: js">const channel = new BroadcastChannel('example-channel');
channel.addEventListener('message', (event) =&gt; {
  received.textContent = event.data;
});</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Sender', '100%', '170px','' ,'' , 'dummy') }}</p>

<p>{{ EmbedLiveSample('Receiver_1', '100%', '150px','' ,'' , 'dummy') }}</p>

<p>{{ EmbedLiveSample('Receiver_2', '100%', '150px','' ,'' , 'dummy') }}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'indices.html#event-message')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.BroadcastChannel.message_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("BroadcastChannel.messageerror_event","messageerror")}}。</li>
</ul>
