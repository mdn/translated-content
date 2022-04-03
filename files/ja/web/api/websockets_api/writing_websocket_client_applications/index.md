---
title: WebSocket クライアントアプリケーションの記述
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
tags:
  - Client
  - Example
  - Guide
  - Networking
  - Web Sockets API
  - WebSocket
  - WebSocket API
  - WebSockets
  - ガイド
  - ネットワーク
  - 例
translation_of: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---
<div>{{APIRef("Websockets API")}}</div>

<p>WebSocket クライアントアプリケーションは <a href="/ja/docs/Web/API/Websockets_API">WebSocket API</a> を使用して、 WebSocket プロトコルを経由して <a href="/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers">WebSocket サーバー</a>と通信します。</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
<p><strong>メモ:</strong> この記事のサンプルスニペットは WebSocket チャットクライアント/サーバーサンプルから取得したものです。 <a href="https://github.com/mdn/samples-server/tree/master/s/websocket-chat">コードを見て</a>から、<a href="https://mdn-samples.mozilla.org/s/websocket-chat">自分で例を試してみてください</a>。</p>
</div>

<h2 id="Creating_a_WebSocket_object" name="Creating_a_WebSocket_object">WebSocket オブジェクトの作成</h2>

<p>WebSocket プロトコルを使用して通信するには、 {{domxref("WebSocket")}} オブジェクトを作成する必要があります。これにより自動的にサーバーへの接続が開かれます。</p>

<p>WebSocket のコンストラクターは、必須1つ、任意1つの引数を受け取ります。</p>

<pre class="syntaxbox"><em>webSocket</em> = new WebSocket(<em>url</em>, <em>protocols</em>);
</pre>

<dl>
 <dt><code>url</code></dt>
 <dd>接続先 URL。これは、 WebSocket サーバーが応答する URL である必要があります。これは URL スキームに <code>wss://</code> を使用するべきですが、ソフトウェアによってはローカル接続用に安全ではない <code>ws://</code> を使用することを許可していることがあります。</dd>
 <dt><code>protocols</code> {{ optional_inline() }}</dt>
 <dd>単一のプロトコル文字列または一連のプロトコル文字列。これらの文字列はサブプロトコルを示すのに使用されるため、単一のサーバーで複数の WebSocket サブプロトコルを実装できます (たとえば、特定の <code>protocol</code> に応じて1つのサーバーで異なるタイプのインタラクションを処理できるようにする)。プロトコル文字列を指定しない場合、空文字列であると仮定されます。</dd>
</dl>

<p>コンストラクターは、接続先がアクセスを許可していない場合に <code>SecurityError</code> 例外を発生させます。これは安全ではない接続を利用しようとしたときに発生することがあります (ほとんどの{{Glossary("user agent", "ユーザーエージェント")}}は、同じ機器か、可能であれば同じネットワークでない限り、すべての WebSocket 接続に安全なリンクを要求します。</p>

<h3 id="Connection_errors" name="Connection_errors">接続エラー</h3>

<p>接続中にエラーが発生した場合、最初に <code>error</code> という名前の単純なイベントが {{domxref("WebSocket")}} オブジェクトに送信され (その結果、その {{domxref("WebSocket.onerror", "onerror")}} ハンドラーが呼び出されます)、次に {{domxref("CloseEvent")}} が <code>WebSocket</code> オブジェクトに送信され ({{domxref("WebSocket.onclose", "onclose")}} ハンドラーが呼び出されます) 接続の終了の理由を示します。</p>

<p>ブラウザーはコンソールにも、 <a class="external" href="http://tools.ietf.org/html/rfc6455#section-7.4" title="RFC 6455 Section 7.4">RFC 6455 の 7.4 節</a> で定義されている {{domxref("CloseEvent")}} 経由の終了コードと同時に、もっと説明的なエラーメッセージを出力することもあります。</p>

<h3 id="Examples" name="Examples">例</h3>

<p>この簡単な例では新しい WebSocket を作成し、 <code><span class="nowiki">wss://www.example.com/socketserver</span></code> のサーバーに接続します。この例では、ソケットの要求で "protocolOne" のカスタムプロトコルが指定されていますが、省略することもできます。</p>

<pre class="brush: js">var exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");
</pre>

<p>返されると、 {{domxref("WebSocket.readyState", "exampleSocket.readyState")}} は <code>CONNECTING</code> です。 <code>readyState</code> は接続がデータを転送する準備ができたら <code>OPEN</code>になります。</p>

<p>接続を開き、サポートしているプロトコルについて柔軟に対応したい場合は、プロトコルの配列を指定できます。</p>

<pre class="brush: js">var exampleSocket = new WebSocket("wss://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);
</pre>

<p>接続が確立されると (つまり <code>readyState</code> が <code>OPEN</code>)、 {{domxref("WebSocket.protocol", "exampleSocket.protocol")}} は、サーバーが選択したプロトコルを通知します。</p>

<p>WebSocket を確立するには、<a href="/ja/docs/Web/HTTP/Protocol_upgrade_mechanism">HTTP アップグレードメカニズム</a>が必要です。したがって、 HTTP サーバーを <code><span class="nowiki">ws://www.example.com</span></code> または <code><span class="nowiki">wss://www.example.com</span></code> としてアドレス指定すると、プロトコルのアップグレード要求が暗黙的に行われます。</p>

<h2 id="Sending_data_to_the_server" name="Sending_data_to_the_server">サーバーにデータを送信する</h2>

<p>接続を開くと、サーバーにデータを送信することができます。 これを行うには、送信するメッセージごとに <code>WebSocket</code> オブジェクトの {{domxref("WebSocket.send", "send()")}} メソッドを呼び出します。</p>

<pre class="brush: js">exampleSocket.send("Here's some text that the server is urgently awaiting!");
</pre>

<p>データを文字列、 {{ domxref("Blob") }}、 {{jsxref("ArrayBuffer")}} のいずれかとして送信することができます。</p>

<p>接続の確立は非同期であり、失敗しやすいため、 <code>send()</code> メソッドの呼び出しが WebSocket オブジェクトの作成直後に成功するという保証はありません。データの送信を試みるのは、少なくともいったん接続が確立してからでなければならないので、作業を行うための {{domxref("WebSocket.onopen", "onopen")}} イベントハンドラーを定義してその中で行います。</p>

<pre class="brush: js">exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
</pre>

<h3 id="Using_JSON_to_transmit_objects" name="Using_JSON_to_transmit_objects">JSON を使用したオブジェクトの送信</h3>

<p>サーバーに複雑なデータを合理的に送信するのに手軽な方法の一つとして、 {{glossary("JSON")}} を使用する方法があります。たとえば、チャットプログラムがサーバーとやり取りするのに、 JSON でカプセル化されたデータのパケットを使用して実装されたプロトコルを使用することができます。</p>

<pre class="brush: js">// Send text to all users through the server
function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
</pre>

<h2 id="Receiving_messages_from_the_server" name="Receiving_messages_from_the_server">サーバーからのメッセージの受信</h2>

<p>WebSockets はイベント駆動型 API です。メッセージを受信すると、 <code>message</code> イベント <code>WebSocket</code> オブジェクトに送信されます。これを処理するには、 <code>message</code> イベントのイベントリスナーを追加するか、 {{domxref("WebSocket.onmessage", "onmessage")}} イベントハンドラーを使用するかします。受信データの待ち受けを開始するには、次のようにします。</p>

<pre class="brush: js">exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
</pre>

<h3 id="Receiving_and_interpreting_JSON_objects" name="Receiving_and_interpreting_JSON_objects">JSON オブジェクトの受信と解釈</h3>

<p>まず{{ anch("Using JSON to transmit objects", "JSON を使用したオブジェクトの送信") }}で述べられているチャットクライアントアプリケーションを考えてみましょう。クライアントが受信するデータパケットの種類は次のとおりです。</p>

<ul>
 <li>ログインハンドシェイク</li>
 <li>メッセージテキスト</li>
 <li>ユーザーリストの更新</li>
</ul>

<p>これらの受信メッセージを解釈するコードは、次のようになります。</p>

<pre class="brush: js">exampleSocket.onmessage = function(event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch(msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = "&lt;b&gt;User &lt;em&gt;" + msg.name + "&lt;/em&gt; signed in at " + timeStr + "&lt;/b&gt;&lt;br&gt;";
      break;
    case "message":
      text = "(" + timeStr + ") &lt;b&gt;" + msg.name + "&lt;/b&gt;: " + msg.text + "&lt;br&gt;";
      break;
    case "rejectusername":
      text = "&lt;b&gt;Your username has been set to &lt;em&gt;" + msg.name + "&lt;/em&gt; because the name you chose is in use.&lt;/b&gt;&lt;br&gt;"
      break;
    case "userlist":
      var ul = "";
      for (i=0; i &lt; msg.users.length; i++) {
        ul += msg.users[i] + "&lt;br&gt;";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
</pre>

<p>ここで {{jsxref("JSON.parse()")}} を使用して JSON オブジェクトを元のオブジェクトに変換し、その内容を調べて処理します。</p>

<h3 id="Text_data_format" name="Text_data_format">テキストデータ形式</h3>

<p>WebSocket 接続を介して受信されるテキストは、 UTF-8 形式です。</p>

<h2 id="Closing_the_connection" name="Closing_the_connection">接続を閉じる</h2>

<p>WebSocket 接続の使用を終了したら、 WebSocket のメソッド {{domxref("WebSocket.close", "close()")}} を呼び出します。</p>

<pre class="brush: js">exampleSocket.close();
</pre>

<p>接続を閉じようとする前に、ソケットの {{domxref("WebSocket.bufferedAmount", "bufferedAmount")}} 属性を確認して、データがネットワーク上でまだ送信されていないかどうかを判断すると有用かもしれません。この値が 0 ではない場合、まだ待ち状態のデータがあるので、接続を閉じる前に待ったほうが良いかもしれません。</p>

<h2 id="Security_considerations" name="Security_considerations">セキュリティの考慮事項</h2>

<p>混合コンテンツ環境では WebSocket を使用しないでください。つまり、 HTTPS を使用もしくはそうでない方法でもロードされたページから、セキュアでない WebSocket 接続を開くべきではありません。最近のブラウザーは安全な WebSocket 接続のみを許可し、また安全ではないコンテキストでの使用には対応しなくなってきています。</p>
