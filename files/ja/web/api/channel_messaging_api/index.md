---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
tags:
  - API
  - Channel messaging
  - HTML API
  - Overview
  - Reference
translation_of: Web/API/Channel_Messaging_API
---
<p>{{DefaultAPISidebar("Channel Messaging API")}}</p>

<p class="summary"><span class="seoSummary"><strong>Channel Messaging API</strong>（チャンネルメッセージング API）を使用すると、同じドキュメントに添付された異なる閲覧コンテキストで実行される2つの別々のスクリプト（2つの IFrame、メインドキュメントと IFrame、{{domxref("SharedWorker")}} を介した2つのドキュメント、2つのワーカーなど）で直接通信し、両端にポートを持つ双方向チャンネル（またはパイプ）を介して相互にメッセージをやり取りできます。</span></p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Channel_messaging_concepts_and_usage" name="Channel_messaging_concepts_and_usage">Channel Messaging の概念と使用方法</h2>

<p>メッセージチャンネルは {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクタを使用して作成します。 作成すると、チャンネルの2つのポートは {{domxref("MessageChannel.port1")}} プロパティおよび {{domxref("MessageChannel.port2")}} プロパティを介してアクセスできます（どちらのプロパティも {{domxref("MessagePort")}} オブジェクトを返します）。 チャンネルを作成したアプリは <code>port1</code> を使用し、ポートの反対側のアプリは <code>port2</code> を使用します — <code>port2</code> にメッセージを送信し、{{domxref("window.postMessage")}} を使用して2つの引数（送信するメッセージと所有権を移管するオブジェクト、この場合はポート自体）でポートを他の閲覧コンテキストに移管します。</p>

<p>これらの移管可能なオブジェクトを移管すると、それらは以前のコンテキスト — 以前にそれらが属していたもの — では「撤回され（neutered）」ます。 例えば、ポートを送信すると、元のコンテキストでは使用できなくなります。</p>

<p>もう一方の閲覧コンテキストは、{{domxref("MessagePort.onmessage")}} を使用してメッセージをリッスンし、イベントの <code>data</code> 属性を使用してメッセージの内容を取得できます。 {{domxref("MessagePort.postMessage")}} を使用して元のドキュメントにメッセージを送り返すことで応答できます。</p>

<p>チャンネルへのメッセージ送信を停止したい場合は、{{domxref("MessagePort.close")}} を呼び出してポートを閉じることができます。</p>

<p>この API の使用方法の詳細については、<a href="/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Channel Messaging の使用</a>を参照してください。</p>

<h2 id="Channel_messaging_interfaces" name="Channel_messaging_interfaces">Channel Messaging のインターフェイス</h2>

<dl>
 <dt>{{domxref("MessageChannel")}}</dt>
 <dd>メッセージを送信するための新しいメッセージチャンネルを作成します。</dd>
 <dt>{{domxref("MessagePort")}}</dt>
 <dd>メッセージチャンネルのポートを制御して、一方のポートからメッセージを送信し、もう一方のポートで到着するのをリッスンします。</dd>
 <dt>{{domxref("PortCollection")}}</dt>
 <dd><code>MessagePort</code> の配列。 同時に複数のポートにメッセージをブロードキャストできるようにするための実験的な解決策。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<ul>
 <li>Github で<a href="https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic">チャンネルメッセージングの基本的なデモ</a>（<a href="http://mdn.github.io/dom-examples/channel-messaging-basic/">ライブで実行</a>）を公開しました。 これはページと埋め込まれた {{htmlelement("iframe")}} の間の本当に簡単な単一メッセージ転送を示します。</li>
 <li>また、メインページと IFrame の間で複数のメッセージを送信することができる、もう少し複雑な設定を示す<a href="https://github.com/mdn/dom-examples/tree/master/channel-messaging-multimessage">マルチメッセージデモ</a>（<a href="http://mdn.github.io/dom-examples/channel-messaging-multimessage/">ライブで実行</a>）を見ることもできます。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'web-messaging.html#channel-messaging', 'Channel messaging')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<h3 id="MessageChannel" name="MessageChannel"><code>MessageChannel</code></h3>

<div>


<p>{{Compat("api.MessageChannel", 0)}}</p>

<h3 id="MessagePort" name="MessagePort"><code>MessagePort</code></h3>

<div>
<p>{{Compat("api.MessagePort", 0)}}</p>
</div>
</div>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging">Channel Messaging の使用</a></li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API">Web Workers API</a></li>
 <li><a href="/ja/docs/Web/API/Broadcast_Channel_API">Broadcast Channel API</a></li>
</ul>
