---
title: 'WebSocket: close イベント'
slug: Web/API/WebSocket/close_event
tags:
  - Reference
  - Web
  - WebSocket
  - close
  - events
  - イベント
translation_of: Web/API/WebSocket/close_event
---
<div>{{APIRef}}</div>

<p><code>close</code> イベントは、 <code>WebSocket</code> のコネクションが閉じられたときに発生します。</p>

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
   <td>{{ domxref("WebSocket.onclose","onclose")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>コネクションが閉じられる時が分かれば、 UI を更新させたり、閉じたコネクションについてのデータを保存したりすることができます。以下の例では <code>exampleSocket</code> と呼ばれる変数が開かれた <code>WebSocket</code> を参照しており、このハンドラーが、ソケットが閉じられた場面を扱います。</p>

<pre class="brush: js">exampleSocket.addEventListener('close', (event) =&gt; {
  console.log('The connection has been closed successfully.');
)};</pre>

<p>同じことを、イベントハンドラープロパティを用いて行うこともできます。</p>

<pre class="brush: js">exampleSocket.onclose = function (event) {
  console.log('The connection has been closed successfully.');
};</pre>

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
   <td>{{SpecName("HTML WHATWG", "web-sockets.html#event-close", "WebSocket close")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WebSocket.close_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebSocket/error_event">WebSocket: error イベント</a></li>
 <li><a href="/ja/docs/Web/API/WebSocket/message_event">WebSocket: message イベント</a></li>
 <li><a href="/ja/docs/Web/API/WebSocket/open_event">WebSocket: open イベント</a></li>
 <li><a href="/ja/docs/WebSockets/Writing_WebSocket_client_applications">WebSocket クライアントアプリケーションを書く</a></li>
</ul>
