---
title: Channel Messaging の使用
slug: Web/API/Channel_Messaging_API/Using_channel_messaging
tags:
  - API
  - Channel messaging
  - HTML5
  - MessageChannel
  - MessagePort
  - Tutorial
translation_of: Web/API/Channel_Messaging_API/Using_channel_messaging
---
<p>{{DefaultAPISidebar("Channel Messaging API")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a>（チャンネルメッセージング API）を使用すると、同じドキュメントに添付された異なる閲覧コンテキストで実行される2つの別々のスクリプト（2つの IFrame、メインドキュメントと IFrame、{{domxref("SharedWorker")}} を介した2つのドキュメントなど）で直接通信し、両端にポートを持つ双方向チャンネル（またはパイプ）を介して相互にメッセージをやり取りできます。</span></p>

<p>この記事では、このテクノロジーを使用するための基本を探ります。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Use_cases" name="Use_cases">ユースケース</h2>

<p>チャンネルメッセージングは​​、ゲーム、アドレス帳、または音楽を個人用に選択したオーディオプレーヤーなど、IFrame を介して他のサイトの機能をメインインターフェイスに埋め込むソーシャルサイトがある場合に主に役立ちます。 これらが独立したユニットとして機能する場合は問題ありませんが、メインサイトと IFrame、または異なる IFrame との間のやり取りが必要な場合は困難になります。 例えば、メインサイトからアドレス帳に連絡先を追加したり、メインプロファイルにゲームのハイスコアを追加したり、オーディオプレーヤーからゲームに新しい BGM の選択肢を追加したりする場合はどうすればよいのでしょうか。 ウェブが使用するセキュリティモデルのため、このようなことは従来のウェブテクノロジーを使用したのでは、それほど簡単ではありません。 オリジンがお互いを信頼しているかどうか、そしてメッセージをどのように渡すのかについて考えなければなりません。</p>

<p>一方、メッセージチャンネルは、異なる閲覧コンテキスト間でデータを受け渡すことを可能にする安全なチャンネルを提供することができます。</p>

<div class="note">
<p><strong>注</strong>: 詳細情報とアイデアについては、仕様の<a href="https://html.spec.whatwg.org/multipage/comms.html#ports-as-the-basis-of-an-object-capability-model-on-the-web">ウェブ上のオブジェクト機能モデルの基礎としてのポート</a>（英語）のセクションが役に立つでしょう。</p>
</div>

<h2 id="Simple_examples" name="Simple_examples">簡単な例</h2>

<p>はじめに、Github でいくつかのデモを公開しました。 最初に、ページと埋め込まれた {{htmlelement("iframe")}} の間の非常に単純な単一メッセージ転送を示す、<a href="https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic">チャンネルメッセージングの基本的なデモ</a>をチェックしてください（<a href="https://mdn.github.io/dom-examples/channel-messaging-basic/">それをライブでも実行してください</a>）。</p>

<p>次に、メインページと IFrame の間で複数のメッセージを送信できる、もう少し複雑な設定を示す、<a href="https://github.com/mdn/dom-examples/tree/master/channel-messaging-multimessage">マルチメッセージデモ</a>を見てください（<a href="https://mdn.github.io/dom-examples/channel-messaging-multimessage/">これをライブで実行</a>）。</p>

<p>ここでは、マルチメッセージデモに焦点を当てます。 それは次のような感じです。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/10075/channel-messaging-demo.png" style="display: block; height: 744px; margin: 0px auto; width: 690px;"></p>

<h2 id="Creating_the_channel" name="Creating_the_channel">チャンネルを作成する</h2>

<p>デモのメインページには、{{htmlelement("iframe")}} に送信するメッセージを入力するためのテキスト入力を含む単純なフォームがあります。 また、{{htmlelement("iframe")}} から返される確認メッセージを表示するために後で使用する段落もあります。</p>

<pre class="brush: js">var input = document.getElementById('message-input');
var output = document.getElementById('message-output');
var button = document.querySelector('button');
var iframe = document.querySelector('iframe');

var channel = new MessageChannel();
var port1 = channel.port1;

// Wait for the iframe to load
// iframe が読み込まれるのを待ちます
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for button clicks
  // ボタンのクリックをリッスンする
  button.addEventListener('click', onClick);

  // Listen for messages on port1
  // port1 でメッセージをリッスンする
  port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  // port2 を iframe に移管する
  iframe.contentWindow.postMessage('init', '*', [channel.port2]);
}

// Post a message on port1 when the button is clicked
// ボタンがクリックされたときに port1 にメッセージを投稿する
function onClick(e) {
  e.preventDefault();
  port1.postMessage(input.value);
}

// Handle messages received on port1
// port1 で受信したメッセージを処理する
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = '';
}</pre>

<p>まず {{domxref( "MessageChannel.MessageChannel","MessageChannel()")}} コンストラクタを使用して新しいメッセージチャンネルを作成します。</p>

<p>IFrame が読み込まれたら、ボタン用の <code>onclick</code> ハンドラと {{domxref("MessageChannel.port1")}} 用の <code>onmessage</code> ハンドラを登録します。 最後に、{{domxref("window.postMessage")}} メソッドを使って {{domxref("MessageChannel.port2")}} を IFrame に移管します。</p>

<p><code>iframe.contentWindow.postMessage</code> 行の機能をもう少し詳しく調べてみましょう。 これは次の3つの引数を取ります。</p>

<ol>
 <li>送信するメッセージ。 この初期ポート移管では、このメッセージは空の文字列になる可能性がありますが、この例では <code>'init'</code> に設定しています。</li>
 <li>メッセージの送信先のオリジン。 <code>*</code> は「任意のオリジン」を意味します。</li>
 <li>所有権を受信側の閲覧コンテキストに移管するオブジェクト。 この場合、{{domxref("MessageChannel.port2")}} を IFrame に移管しているので、メインページとの通信に使用できます。</li>
</ol>

<p>ボタンをクリックすると、フォームを通常のように送信せず、テキスト入力に入力された値は {{domxref("MessageChannel")}} を介して IFrame に送信します。</p>

<h2 id="Receiving_the_port_and_message_in_the_IFrame" name="Receiving_the_port_and_message_in_the_IFrame">IFrame でポートとメッセージを受信する</h2>

<p>IFrame では、次の JavaScript があります。</p>

<pre class="brush: js">var list = document.querySelector('ul');
var port2;

// Listen for the intial port transfer message
// 初期ポート移管メッセージをリッスンする
window.addEventListener('message', initPort);

// Setup the transfered port
// 移管されたポートを設定する
function initPort(e) {
  port2 = e.ports[0];
  port2.onmessage = onMessage;
}

// Handle messages received on port2
// port2 で受信したメッセージを処理する
function onMessage(e) {
  var listItem = document.createElement('li');
  listItem.textContent = e.data;
  list.appendChild(listItem);
  port2.postMessage('Message received by IFrame: "' + e.data + '"');
}
</pre>

<p>初期メッセージを {{domxref("window.postMessage")}} メソッドを介してメインページから受信すると、<code>initPort</code> 関数が実行されます。 これは移管されたポートを保存し、メッセージが {{domxref("MessageChannel")}} を通過するたびに呼び出される <code>onmessage</code> ハンドラを登録します。</p>

<p>メインページからメッセージを受信したら、リスト項目を作成し、それを順序なしリストに挿入し、リスト項目の {{domxref("Node.textContent","textContent")}} をイベントの <code>data</code> 属性と同じ値に設定します（これは実際のメッセージを含みます）。</p>

<p>次に、最初に IFrame に移管された {{domxref("MessageChannel.port2")}} で {{domxref("MessagePort.postMessage")}} を呼び出して、確認メッセージをメッセージチャンネル経由でメインページに投稿します。</p>

<h2 id="Receiving_the_confirmation_in_the_main_page" name="Receiving_the_confirmation_in_the_main_page">メインページで確認を受信する</h2>

<p>メインページに戻って、<code>onmessage</code> ハンドラ関数を見ましょう。</p>

<pre class="brush: js">// Handle messages received on port1
// port1 で受信したメッセージを処理する
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = '';
}</pre>

<p>元のメッセージが正常に受信されたことを確認するメッセージが IFrame から返されると、これは単に確認を段落に出力し、テキスト入力を空にして次のメッセージの送信の準備をします。</p>

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
 <li><a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a></li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API">Web Workers API</a></li>
 <li><a href="/ja/docs/Web/API/Broadcast_Channel_API">Broadcast Channel API</a></li>
</ul>
