---
title: 'BroadcastChannel: messageerror イベント'
slug: Web/API/BroadcastChannel/messageerror_event
tags:
  - Event
translation_of: Web/API/BroadcastChannel/messageerror_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>messageerror</code> イベントは、逆シリアル化できないメッセージがチャネルに到着したときに {{domxref('BroadcastChannel')}} オブジェクトに対して発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
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
   <td>{{domxref("BroadcastChannel.onmessageerror","onmessageerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>このコードは <code><a href="/ja/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> を使用してメッセージとエラーをリッスンします。</p>

<pre class="brush: js">const channel = new BroadcastChannel('example-channel');

channel.addEventListener('message', (event) =&gt; {
  received.textContent = event.data;
});

channel.addEventListener('messageerror', (event) =&gt; {
  console.error(event);
});</pre>

<p>上と同じですが、{{domxref("BroadcastChannel.onmessage","onmessage")}} と {{domxref("BroadcastChannel.onmessageerror","onmessageerror")}} のイベントハンドラプロパティを使用します。</p>

<pre class="brush: js">const channel = new BroadcastChannel('example-channel');

channel.onmessage = (event) =&gt; {
  received.textContent = event.data;
};

channel.onmessageerror = (event) =&gt; {
  console.log(event);
};
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'indices.html#event-messageerror')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.BroadcastChannel.messageerror_event")}}</p>

<h2 id='See_also""' name='See_also""'>関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("BroadcastChannel.message_event","message")}}。</li>
</ul>
