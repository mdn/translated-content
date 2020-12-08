---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
tags:
  - API
  - Broadcast Channel API
  - HTML API
  - Overview
  - Reference
translation_of: Web/API/Broadcast_Channel_API
---
<p>{{DefaultAPISidebar("Broadcast Channel API")}}</p>

<p><span class="seoSummary"><strong>Broadcast Channel API</strong>（放送チャンネル API）を使用すると、{{glossary("browsing context", "閲覧コンテキスト")}}（つまり、<em>ウィンドウ</em>、<em>タブ</em>、<em>フレーム</em>、<em>iframe</em>）間で、同じ{{glossary("origin","オリジン")}}（通常は同じサイトのページ）を使用して簡単に通信できます。</span></p>

<p>{{AvailableInWorkers}}</p>

<p>放送チャンネルは、名前が付けられ、特定のオリジンに結びつけられています。</p>

<p>基になるチャンネルをリッスンしている {{domxref("BroadcastChannel")}} オブジェクトを作成することで、投稿されたメッセージを受信できます。 興味深い点は、通信したい iframe やワーカーへの参照を維持する必要がもうないということです。 それらは単に {{domxref("BroadcastChannel")}} を構築することによって特定のチャンネルを「購読する（subscribe）」ことができ、それらすべての間で全二重（双方向）通信を行うことができます。</p>

<p><img alt="Broadcast Channel API の原理" src="https://mdn.mozillademos.org/files/9945/BroadcastChannel.png" style="height: 448px; width: 784px;"></p>

<h2 id="Broadcast_Channel_interface" name="Broadcast_Channel_interface">放送チャンネルのインターフェイス</h2>

<h3 id="Creating_or_joining_a_channel" name="Creating_or_joining_a_channel">チャンネルの作成または参加</h3>

<p><code>BroadcastChannel</code> インターフェイスは非常に単純です。 クライアントは {{domxref("BroadcastChannel")}} オブジェクトを作成することによって特定の放送チャンネルに参加します。 {{domxref("BroadcastChannel.BroadcastChannel","コンストラクタ")}}は、それを識別するために使用する単一のパラメーターである、チャネルの<em>名前</em>を取ります。 放送チャンネルに最初に接続した場合は、基になるリソースが作成されます。</p>

<pre class="brush: js">// 放送チャンネルへの接続
var bc = new BroadcastChannel('test_channel');
</pre>

<h3 id="Sending_a_message" name="Sending_a_message">メッセージの送信</h3>

<p>メッセージを投稿するのは簡単です。 <code>BroadcastChannel</code> オブジェクトの {{domxref("BroadcastChannel.postMessage", "postMessage()")}} メソッドを呼び出すだけで十分です。 このメソッドは任意のオブジェクトを引数として取ります。 非常に単純な例は、次のように {{domxref("DOMString")}} テキストメッセージです。</p>

<pre class="brush: js">// 非常に単純なメッセージの送信例
bc.postMessage('This is a test message.');
</pre>

<p>{{domxref("DOMString")}} だけでなく、あらゆる種類のオブジェクトを送信できます。 API は意味論をメッセージに関連付けないため、どのような種類のメッセージを想定し、それをどう処理するかを知るのは、チャネルの参加者次第です。</p>

<h3 id="Receiving_a_message" name="Receiving_a_message">メッセージの受信</h3>

<p>メッセージが投稿されると、このチャンネルに接続されている各 {{domxref("BroadcastChannel")}} オブジェクトに {{event("message")}} イベントが送出されます。 デフォルトでは何もしませんが、{{domxref("BroadcastChannel.onmessage", "onmessage")}} イベントハンドラを使用して新しい関数を実装できます。</p>

<pre class="brush: js">// イベントをコンソールに記録するだけの
// 単純なイベントハンドラの例
bc.onmessage = function (ev) { console.log(ev); }
</pre>

<h3 id="Disconnecting_a_channel" name="Disconnecting_a_channel">チャンネルの切断</h3>

<p>チャネルを去るには、オブジェクトの {{domxref("BroadcastChannel.close", "close()")}} メソッドを呼び出す必要があります。 これにより、オブジェクトと基になるチャネル間のリンクを切断し、ガベージコレクションをすることができます。</p>

<pre class="brush: js">// チャンネルの切断
bc.close()
</pre>

<h2 id="Conclusion" name="Conclusion">結び</h2>

<p>Broadcast Channel API は非常に単純な API であり、自己完結型のインターフェイスによってコンテキスト間通信が可能です。 ユーザーがアカウントにログインしたときなど、同じサイトオリジン環境内の他のタブでユーザーの操作を検出するために使用できます。 メッセージングプロトコルは定義されておらず、さまざまなコンテキストのさまざまなドキュメントがそれ自体を実装する必要があります。 ネゴシエーションも仕様からの要件もありません。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "comms.html#broadcasting-to-other-browsing-contexts", "The Broadcast Channel API")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.BroadcastChannel")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("BroadcastChannel")}}: これを実装するインターフェイス。</li>
</ul>
