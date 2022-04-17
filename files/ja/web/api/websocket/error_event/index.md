---
title: 'WebSocket: error イベント'
slug: Web/API/WebSocket/error_event
tags:
  - API
  - Error
  - Event
  - Reference
  - Web
  - WebSocket
  - イベント
translation_of: Web/API/WebSocket/error_event
---
<div>{{APIRef}}</div>

<p><code>error</code> イベントは、 <code>WebSocket</code> のコネクションがエラーによって閉じられた (例えば一部のデータを送信できなかった) ときに発生します。</p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{ domxref("WebSocket.onerror","onerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">// Create WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Listen for possible errors
socket.addEventListener('error', function (event) {
  console.log('WebSocket error: ', event);
});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "web-sockets.html#event-open", "WebSocket open")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WebSocket.error_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebSocket/close_event">WebSocket: close イベント</a></li>
 <li><a href="/ja/docs/Web/API/WebSocket/message_event">WebSocket: message イベント</a></li>
 <li><a href="/ja/docs/Web/API/WebSocket/open_event">WebSocket: open イベント</a></li>
 <li><a href="/ja/docs/WebSockets/Writing_WebSocket_client_applications">WebSocket クライアントアプリケーションを書く</a></li>
</ul>
