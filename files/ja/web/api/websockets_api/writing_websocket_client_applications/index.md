---
title: WebSocket クライアントアプリケーションを書く
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 20c3765ca2538a98ffef564c7eb87df43e2cef94
---

{{DefaultAPISidebar("WebSockets API")}}

このガイドでは、 WebSocket ベースの ping アプリケーションの実装手順を追ってみましょう。このアプリケーションでは、クライアントが 1 秒ごとにサーバーに "ping" メッセージを送信し、サーバーは "pong" メッセージで応答します。クライアントは "pong" メッセージを待ち受けしてログ出力し、メッセージをやり取りした回数を追跡します。

これはごく最小限のアプリケーションですが、 WebSocket クライアントの作成に関わる基本的な点を網羅しています。

完全な例は [https://github.com/mdn/dom-examples/tree/main/websockets](https://github.com/mdn/dom-examples/tree/main/websockets) でご覧いただけます。サーバーサイドは [Deno](https://deno.com/) で記述されているため、ローカルでサンプルを実行したい場合は、まず Deno をインストールする必要があります。

## `WebSocket` オブジェクトの生成

WebSocket プロトコルを使用して通信するには、 {{domxref("WebSocket")}} オブジェクトを作成する必要があります。このオブジェクトを作成するとすぐに、指定されたサーバーへの接続を試行し始めます。

```js
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);
```

`WebSocket` コンストラクターは、1つの必須引数として接続先の WebSocket サーバーの URL を取ります。この場合、サーバーをローカルで実行しているため、 localhost アドレスを使用しています。

> [!NOTE]
> この例では、接続に `ws` プロトコルを使用しています。これは例において localhost に接続しているためです。実際のアプリケーションでは、ウェブページは HTTPS を使用して提供されるべきであり、 WebSocket 接続は `wss` プロトコルを使用しましょう。

コンストラクターは別のオプション引数 [`protocols`](/ja/docs/Web/API/WebSocket/WebSocket#protocols) を取ります。これにより、単一のサーバーが複数のサブプロトコルを実装できます。この例ではこの機能を使用していません。

コンストラクターは、接続先がアクセスを許可していない場合に `SecurityError` 例外を発生させます。
これは安全ではない接続を利用しようとしたときに発生することがあります（ほとんどの{{Glossary("user agent", "ユーザーエージェント")}}は、同じ機器か、可能であれば同じネットワークでない限り、すべての WebSocket 接続に安全なリンクを要求します）。

## `open` イベントの待ち受け

`WebSocket` インスタンスを作成すると、サーバーへの接続確立プロセスが始まります。接続が確立されると {{domxref("WebSocket.open_event", "open")}} イベントが発生します。これ以降、ソケットはデータを送信できるようになります。

下記のサンプルコードでは、 `open` イベントが発生すると、 {{domxref("Window.setInterval()")}} API を使用して、 1 秒ごとに 1 つの "ping" メッセージをサーバーへ送信し始めます。

```js
websocket.addEventListener("open", () => {
  log("CONNECTED");
  pingInterval = setInterval(() => {
    log(`SENT: ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

## エラーの待ち受け

接続の確立中または確立後にエラーが発生した場合、 {{domxref("WebSocket.error_event", "error")}} イベントが発生します。

エラー発生時、このアプリケーションは何らの特別な処理も行いませんが、ログを出力します。

```js
websocket.addEventListener("error", (e) => {
  log(`ERROR`);
});
```

エラーが発生した場合、接続は閉じられた状態になり、 `close` イベントが発行されます。

## メッセージの送信

接続が確立された後は、 {{domxref("WebSocket.send()", "send()")}} メソッドを使用することができます。

```js
websocket.addEventListener("open", () => {
  log("CONNECTED");
  pingInterval = setInterval(() => {
    log(`SENT: ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

この例ではテキストを送信していますが、バイナリーデータも {{domxref("Blob")}}、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} として送信できます。

一般的な手法として、シリアル化された JavaScript オブジェクトをテキストとして送信するために {{glossary("JSON")}} を使用することができます。例えば、単にテキストメッセージ "ping" を送信する代わりに、クライアントはこれまでに交換されたメッセージ数を記載するシリアル化されたオブジェクトを送信できます。

```js
const message = {
  iteration: counter,
  content: "ping",
};
websocket.send(JSON.stringify(message));
```

`send()` メソッドは非同期です。つまり、データが送信されるのを待たずに呼び出し元に戻るため、内部バッファーにデータを追加した後、送信プロセスを始めます。 {{domxref("WebSocket.bufferedAmount")}} プロパティは、まだ送信されていないバイト数を表します。 WebSockets プロトコルはテキストのエンコードに {{glossary("UTF-8")}} を使用しているため、 `bufferedAmount` はバッファリングされたテキストデータの UTF-8 エンコード方式に基づいて計算されることに注意してください。

## メッセージの受信

サーバーからのメッセージを受信するには、 {{domxref("WebSocket.message_event", "message")}} イベントの待ち受けを行います。

メッセージイベントハンドラーは受信したメッセージをログ出力し、発生したメッセージ交換の回数をカウントアップします。

```js
websocket.addEventListener("message", (e) => {
  log(`RECEIVED: ${e.data}: ${counter}`);
  counter++;
});
```

サーバーはバイナリーデータも送信できます。これは、 {{domxref("WebSocket.binaryType")}} プロパティの値に基づいて、クライアントに対して {{domxref("Blob")}} または {{jsxref("ArrayBuffer")}} として公開します。

メッセージ送信の場合と同様に、サーバーは JSON 文字列を送信することもでき、クライアントはこれをオブジェクトに解釈できます。

```js
websocket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);
  log(`RECEIVED: ${message.iteration}: ${message.content}`);
  counter++;
});
```

## 切断処理

接続が閉じられた場合（クライアントまたはサーバーが接続を閉じたり、エラーが発生したりした場合）、 {{domxref("WebSocket.close_event", "close")}} イベントが発行されます。

アプリケーションは`close`イベントを待ち受けし、それが発行されたときにはインターバルタイマーをクリーンアップします。

```js
websocket.addEventListener("close", () => {
  log("DISCONNECTED");
  clearInterval(pingInterval);
});
```

## bfcache の操作

バック/フォワードキャッシュ（{{glossary("bfcache")}}）は、ユーザーが最近閲覧したページ間のバックおよびフォワードナビゲーションを大幅に高速化することができます。これは、 JavaScript ヒープを含むページの完全なスナップショットを格納することで実現されます。

ブラウザーは、ページが bfcache に追加されるか、またはそこから復元されるかすると、 JavaScript の実行を一時停止し、その後再開します。これは、ページが実行している内容によっては、ブラウザーがそのページに対してバックグラウンドキャッシュを使用することが常に安全であるとは限らないということの意味です。ブラウザーが安全でないと判断した場合、そのページはバックグラウンドキャッシュに追加されず、ユーザーはそれがもたらすパフォーマンス上の利点を得られません。

さまざまなブラウザーでの、ページを bfcache に追加する基準は異なります。 WebSocket 接続を開いていると、ブラウザーがページを bfcache に追加できなくなる可能性があるということです。そのため、ユーザーがページを完了した際には接続を閉じるとよいでしょう。この目的で最適なイベントは {{domxref("Window.pagehide_event", "pagehide")}} イベントです。

これはサンプルアプリで次のようにするのが最適です。

```js
window.addEventListener("pagehide", () => {
  if (websocket) {
    log("CLOSING");
    websocket.close();
    websocket = null;
    window.clearInterval(pingInterval);
  }
});
```

逆に、 {{domxref("Window.pageshow_event", "pageshow")}} イベントを待ち受けすることで、ページが bfcache から復元された際にシームレスに接続が再開することができます。 `pageshow` イベントはページ読み込み時にも発生するため、ページが最初に読み込まれた際に WebSocket 接続を開始するためにも使用することができます。

```js
let websocket = null;

window.addEventListener("pageshow", () => {
  log("OPENING");

  websocket = new WebSocket(wsUri);

  websocket.addEventListener("open", () => {
    log("CONNECTED");
    pingInterval = setInterval(() => {
      log(`SENT: ping: ${counter}`);
      websocket.send("ping");
    }, 1000);
  });

  websocket.addEventListener("close", () => {
    log("DISCONNECTED");
    clearInterval(pingInterval);
  });

  websocket.addEventListener("message", (e) => {
    log(`RECEIVED: ${e.data}: ${counter}`);
    counter++;
  });

  websocket.addEventListener("error", (e) => {
    log(`ERROR: ${e.data}`);
  });
});
```

この例を実行した場合、別のページに移動してからこの例に戻ってみてほしい。 Chrome では、例が接続を再開始し、元のコンテキストを維持していることが確認できるはずです。例えば、交換されたメッセージの数を記憶していることがわかります。

bfcache の互換性と WebSocket API に関する詳細なコンテキストについては、[web.dev の bfcacheに関する記事（英語）](https://web.dev/articles/bfcache#close-open-connections)を参照してください。

対応しているブラウザーでは、[パフォーマンス API の `notRestoredReasons` プロパティ](/ja/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)を使って、ページが bfcache に追加されなかった理由を取得できます。

## セキュリティの考慮事項

混在コンテンツ環境では WebSocket を使用しないでください。つまり、 HTTPS を使用もしくはそうでない方法でもロードされたページから、セキュアでない WebSocket 接続を開くべきではありません。
最近のブラウザーは安全な WebSocket 接続のみを許可し、また安全ではないコンテキストでの使用には対応しなくなってきています。
