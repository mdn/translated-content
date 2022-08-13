---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
tags:
  - API
  - Broadcast Channel API
  - Experimental
  - HTML API
  - Interface
  - Reference
translation_of: Web/API/BroadcastChannel
---
<p>{{APIRef("Broadcast Channel API")}}</p>

<p><span class="seoSummary"><strong><code>BroadcastChannel</code></strong> インターフェイスは、特定の{{glossary("origin","オリジン")}}の{{glossary("browsing context","閲覧コンテキスト")}}が購読できる名前付きチャネルを表します。 それは、同じオリジンの異なるドキュメント間（異なるウィンドウ、タブ、フレーム、iframe）の通信を可能にします。 メッセージは、チャンネルをリッスンしているすべての <code>BroadcastChannel</code> オブジェクトで発生する {{event("message")}} イベントを介して放送されます。</span></p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt>{{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}</dt>
 <dd>名前付きチャンネルにリンクするオブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは、その親である {{domxref("EventTarget")}} からもプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("BroadcastChannel.name")}}</dt>
 <dd>チャネルの名前である {{domxref("DOMString")}} を返します。</dd>
 <dt>
 <h3 id="Event_handlers" name="Event_handlers">イベントハンドラ</h3>
 </dt>
 <dt>{{domxref("BroadcastChannel.onmessage")}}</dt>
 <dd>このオブジェクトで {{event("message")}} イベントが発生したときに実行する関数を指定する {{event("Event_handlers", "event handler")}} プロパティ。</dd>
 <dt>{{domxref("BroadcastChannel.onmessageerror")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} は、{{domxref("MessageError")}} 型の {{domxref("MessageEvent")}} が発生したとき、つまり逆シリアル化できないメッセージを受け取ったときに呼び出されます。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスは、その親である {{domxref("EventTarget")}} からもメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("BroadcastChannel.postMessage()")}}</dt>
 <dd>同じチャンネルをリッスンしている各 BroadcastChannel オブジェクトに、任意の種類のオブジェクトのメッセージを送信します。</dd>
 <dt>{{domxref("BroadcastChannel.close()")}}</dt>
 <dd>チャネルオブジェクトを閉じます。 これは、新しいメッセージを取得しないことを示し、最終的にガベージコレクションされることを許可します。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{domxref("BroadcastChannel.message_event","message")}}</dt>
 <dd>メッセージがチャネルに到着したときに発生します。<br>
 {{domxref("BroadcastChannel.onmessage","onmessage")}} プロパティからも利用できます。</dd>
 <dt>{{domxref("BroadcastChannel.messageerror_event","messageerror")}}</dt>
 <dd>逆シリアル化できないメッセージが到着したときに発生します。<br>
 {{domxref("BroadcastChannel.onmessageerror","onmessageerror")}} プロパティからも利用できます。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "comms.html#broadcastchannel", "BroadcastChannel")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.BroadcastChannel")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>ブラウザコンテキスト間でやり取りするもう1つの、よりヘビー級の方法: {{domxref("ServiceWorker")}}.</li>
 <li><a href="/ja/docs/Web/API/Broadcast_Channel_API">Broadcast Channel API の概要</a></li>
</ul>
