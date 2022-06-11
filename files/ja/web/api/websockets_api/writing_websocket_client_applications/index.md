---
title: WebSocket クライアントアプリケーションの記述
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
tags:
  - Client
  - Example
  - ガイド
  - ネットワーク
  - ウェブソケット API
  - WebSocket
  - WebSocket API
  - WebSockets
translation_of: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---
{{APIRef("Websockets API")}}

WebSocket クライアントアプリケーションは [WebSocket API](/ja/docs/Web/API/WebSockets_API) を使用して、 WebSocket プロトコルを経由して [WebSocket サーバー](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)と通信します。

{{AvailableInWorkers}}

> **Note:** この記事のサンプルスニペットは WebSocket チャットクライアント/サーバーサンプルから取得したものです。[コードはこちらからご覧ください](https://github.com/mdn/samples-server/tree/master/s/websocket-chat)。

## WebSocket オブジェクトの作成

WebSocket プロトコルを使用して通信するには、 {{domxref("WebSocket")}} オブジェクトを作成する必要があります。これにより自動的にサーバーへの接続が開かれます。

WebSocket のコンストラクターは、必須 1 つ、任意 1 つの引数を受け取ります。

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : 接続先 URL。これは、 WebSocket サーバーが応答する URL である必要があります。これは URL スキームに `wss://` を使用するべきですが、ソフトウェアによってはローカル接続用に安全ではない `ws://` を使用することを許可していることがあります。
- `protocols` {{ optional_inline() }}
  - : 単一のプロトコル文字列または一連のプロトコル文字列。これらの文字列はサブプロトコルを示すのに使用されるため、単一のサーバーで複数の WebSocket サブプロトコルを実装できます（たとえば、特定の `protocol` に応じて 1 つのサーバーで異なる種類の対話を処理できるようにする）。プロトコル文字列を指定しない場合、空文字列であると仮定されます。

コンストラクターは、接続先がアクセスを許可していない場合に `SecurityError` 例外を発生させます。これは安全ではない接続を利用しようとしたときに発生することがあります（ほとんどの{{Glossary("user agent", "ユーザーエージェント")}}は、同じ機器か、可能であれば同じネットワークでない限り、すべての WebSocket 接続に安全なリンクを要求します）。

### 接続エラー

接続中にエラーが発生した場合、最初に `error` という名前の単純なイベントが {{domxref("WebSocket")}} オブジェクトに送信され（その結果、その {{domxref("WebSocket.onerror", "onerror")}} ハンドラーが呼び出されます）、次に {{domxref("CloseEvent")}} が `WebSocket` オブジェクトに送信され（{{domxref("WebSocket.onclose", "onclose")}} ハンドラーが呼び出されます）接続の終了の理由を示します。

ブラウザーは {{domxref("CloseEvent")}} 経由で、コンソールにも [RFC 6455 第 7.4 節]で定義されている終了コードと同時に、もっと説明的なエラーメッセージを出力するができます。

### 例

この簡単な例では新しい WebSocket を作成し、 `wss://www.example.com/socketserver` のサーバーに接続します。この例では、ソケットのリクエストで "protocolOne" のカスタムプロトコルが指定されていますが、省略することもできます。

```js
var exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");
```

返されると、 {{domxref("WebSocket.readyState", "exampleSocket.readyState")}} は `CONNECTING` です。 `readyState` は接続がデータを転送する準備ができたら `OPEN`になります。

接続を開き、サポートしているプロトコルについて柔軟に対応したい場合は、プロトコルの配列を指定することができます。

```js
var exampleSocket = new WebSocket("wss://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);
```

接続が確立されると（つまり `readyState` が `OPEN`）、 {{domxref("WebSocket.protocol", "exampleSocket.protocol")}} は、サーバーが選択したプロトコルを通知します。

WebSocket を確立するには、 [HTTP アップグレードメカニズム](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism)が必要です。したがって、 HTTP サーバーを `ws://www.example.com` または `wss://www.example.com` としてアドレス指定すると、プロトコルのアップグレードのためのリクエストが暗黙的に行われます。

## サーバーへのデータの送信

接続を開くと、サーバーにデータを送信することができます。 これを行うには、送信するメッセージごとに `WebSocket` オブジェクトの {{domxref("WebSocket.send", "send()")}} メソッドを呼び出します。

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

データは文字列、 {{ domxref("Blob") }}、 {{jsxref("ArrayBuffer")}} のいずれかで送信することができます。

接続の確立は非同期であり、失敗しやすいため、 `send()` メソッドの呼び出しが WebSocket オブジェクトの作成直後に成功するという保証はありません。データの送信を試みるのは、少なくともいったん接続が確立してからでなければならないので、作業を行うための {{domxref("WebSocket.onopen", "onopen")}} イベントハンドラーを定義してその中で行います。

```js
exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### JSON を使用したオブジェクトの送信

サーバーに複雑なデータを合理的に送信するのに手軽な方法の一つとして、 {{glossary("JSON")}} を使用する方法があります。たとえば、チャットプログラムがサーバーとやり取りするのに、 JSON でカプセル化されたデータのパケットを使用して実装されたプロトコルを使用することができます。

```js
// Send text to all users through the server
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
```

## サーバーからのメッセージの受信

WebSockets はイベント駆動型 API です。メッセージを受信すると、 `message` イベント `WebSocket` オブジェクトに送信されます。これを処理するには、 `message` イベントのイベントリスナーを追加するか、 {{domxref("WebSocket.onmessage", "onmessage")}} イベントハンドラーを使用するかします。受信データの待ち受けを開始するには、次のようにします。

```js
exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
```

### JSON オブジェクトの受信と解釈

まず[JSON を使用したオブジェクトの送信](#json_を使用したオブジェクトの送信)で述べられているチャットクライアントアプリケーションを考えてみましょう。クライアントが受信するデータパケットの種類は次のとおりです。

- ログインハンドシェイク
- メッセージテキスト
- ユーザーリストの更新

これらの受信メッセージを解釈するコードは、次のようになります。

```js
exampleSocket.onmessage = function(event) {
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
      text = "<b>User <em>" + msg.name + "</em> signed in at " + timeStr + "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text = "<b>Your username has been set to <em>" + msg.name + "</em> because the name you chose is in use.</b><br>"
      break;
    case "userlist":
      var ul = "";
      for (i=0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

ここで {{jsxref("JSON.parse()")}} を使用して JSON オブジェクトを元のオブジェクトに変換し、その内容を調べて処理します。

### テキストデータ形式

WebSocket 接続を介して受信されるテキストは、 UTF-8 形式です。

## 接続を閉じる

WebSocket 接続の使用を終了したら、 WebSocket のメソッド {{domxref("WebSocket.close", "close()")}} を呼び出します。

```js
exampleSocket.close();
```

接続を閉じようとする前に、ソケットの {{domxref("WebSocket.bufferedAmount", "bufferedAmount")}} 属性を確認して、データがネットワーク上でまだ送信されていないかどうかを判断すると有用かもしれません。この値が 0 ではない場合、まだ待ち状態のデータがあるので、接続を閉じる前に待ったほうが良いかもしれません。

## セキュリティの考慮事項

混合コンテンツ環境では WebSocket を使用しないでください。つまり、 HTTPS を使用もしくはそうでない方法でもロードされたページから、セキュアでない WebSocket 接続を開くべきではありません。最近のブラウザーは安全な WebSocket 接続のみを許可し、また安全ではないコンテキストでの使用には対応しなくなってきています。
