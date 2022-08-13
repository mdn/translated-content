---
title: EventSource
slug: Web/API/EventSource
tags:
  - API
  - Communications
  - EventSource
  - Interface
  - Reference
  - Server-sent event
  - messaging
  - インターフェイス
translation_of: Web/API/EventSource
---
<div>{{APIRef("Server Sent Events")}}</div>

<p><span class="seoSummary"><strong><code>EventSource</code></strong> インターフェイスは、 <a href="/ja/docs/Web/API/Server-sent_events">Server-sent event</a> のウェブコンテンツのインターフェイスです。 <code>EventSource</code> インターフェイスは、 <a href="/ja/docs/Web/HTTP">HTTP</a> サーバーとの間で永続的なコネクションを開き、<a href="/ja/docs/Web/API/Document_Object_Model/Events">イベント</a>を <code>text/event-stream</code> の形式で受け取ります。</span>コネクションは {{domxref("EventSource.close()")}} を呼び出して閉じられるまで開いたままになります。</p>

<p>いったんコネクションが開かれると、サーバーから入って来るメッセージは {{event("message")}} イベントの形でコードに配信されます。</p>

<p><a href="/ja/docs/Web/API/WebSockets_API">WebSocket</a> とは異なり、 Server-sent event は単一方向です。つまり、データメッセージはサーバーからクライアント (たとえばユーザーのウェブブラウザー) に向けて、一方向に配信されます。これは、メッセージの形でクライアントからサーバーにデータを送る必要がない場合には良い選択です。例えば、 <code>EventSource</code> はソーシャルメディアの状況アップデートやニュースフィードのようなものを扱ったり、<a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage">クライアント側ストレージ</a> (<a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> や <a href="/ja/docs/Web/API/Web_Storage_API">web storage</a> など) の仕組みにデータを配信したりするアプローチに有用です。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("EventSource.EventSource", "EventSource()")}}</dt>
 <dd>指定された URL と、オプション資格情報モードから Server-sent event の受信を扱うために、新しい <code>EventSource</code> を生成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは、親である {{domxref("EventTarget")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("EventSource.readyState")}} {{readonlyinline}}</dt>
 <dd>接続の状態を表す数値です。許容値は <code>CONNECTING</code> (<code>0</code>)、<code>OPEN</code> (<code>1</code>)、<code>CLOSED</code> (<code>2</code>) です。</dd>
 <dt>{{domxref("EventSource.url")}} {{readonlyinline}}</dt>
 <dd>ソースの URL を表す {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("EventSource.withCredentials")}} {{readonlyinline}}</dt>
 <dd>{{domxref("Boolean")}} で、 <code>EventSource</code> オブジェクトがオリジン間 (<a href="/ja/docs/Web/HTTP/CORS">CORS</a>) 資格情報を設定してインスタンス化されたか (<code>true</code>)、設定されずにインスタンス化されたか (<code>false</code>、既定値) を示します。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラー</h3>

<dl>
 <dt>{{domxref("EventSource.onerror")}}</dt>
 <dd>エラーが発生して、<code>EventSource</code> オブジェクトで {{domxref("EventSource/error_event", "error")}} イベントが発生したときに呼び出される {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("EventSource.onmessage")}}</dt>
 <dd>{{domxref("EventSource/message_event", "message")}} イベントを受け取ったとき、すなわち発信元からメッセージが到着したときに呼び出される {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("EventSource.onopen")}}</dt>
 <dd>{{domxref("EventSource/open_event", "open")}} イベントを受け取ったとき、すなわち接続を開始したときに呼び出される {{event("Event_handlers", "event handler")}} です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスは、親である {{domxref("EventTarget")}} からメソッドを継承します。</em></p>

<dl>
 <dt>{{domxref("EventSource.close()")}}</dt>
 <dd>接続を切断して、 <code>readyState</code> 属性を <code>CLOSED</code> に設定します。すでに切断されている場合は何も行いません。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{domxref("EventSource/error_event", "error")}}</dt>
 <dd>イベントソースへのコネクションを開くことに失敗したときに発生します。</dd>
 <dt>{{domxref("EventSource/message_event", "message")}}</dt>
 <dd>イベントソースからデータを受信したときに発生します。</dd>
 <dt>{{domxref("EventSource/open_event", "open")}}</dt>
 <dd>イベントソースへのコネクションが開かれたときに発生します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>この基本的な例では、 <code>EventSource</code> を生成してサーバーからイベントを受け取ります。 <code>sse.php</code> という名前のページがイベントを生成する責任を負います。</p>

<pre class="brush: js">var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}</pre>

<p>受信されたそれぞれのイベントは、 <code>EventSource</code> オブジェクトの <code>onmessage</code> イベントハンドラーを実行させます。ここでは、新しい {{HTMLElement("li")}} 要素を生成してその中にメッセージのデータを書き込み、この要素を文書の中にある既存のリスト要素に追加します。</p>

<div class="note">
<p><strong>メモ</strong>: この例の全容が GitHub にあります。<a href="https://github.com/mdn/dom-examples/tree/master/server-sent-events">Simple SSE demo using PHP</a> をご覧ください。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "comms.html#the-eventsource-interface", "EventSource")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<ul>
</ul>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>
<p>{{Compat("api.EventSource")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Server-sent_events">Server-sent event</a></li>
 <li><a href="/ja/docs/Web/API/Server-sent_events/Using_server-sent_events">Server-sent event の使用</a></li>
</ul>
