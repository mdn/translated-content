---
title: WebSocketStream でクライアントを書く
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: 7a418e5d057adb45a0c7c4ec3b03baa8c3be18f4
---

{{DefaultAPISidebar("WebSockets API")}}

{{domxref("WebSocketStream")}} API は、{{jsxref("Promise", "プロミス", "", 1)}}ベースのもうひとつの選択肢であり、クライアントサイドの WebSocket 接続の作成と使用にWebSocket を使用します。 `WebSocketStream` は、[ストリーム API](/ja/docs/Web/API/Streams_API) を使用してメッセージの送受信を処理するため、ソケット接続はストリームの[背圧](/ja/docs/Web/API/Streams_API/Concepts#背圧)を自動的に利用することができ（開発者による追加の操作は不要）、アプリケーションのボトルネックを回避するために読み取りまたは書き込みの速度を調整することができます。

この記事では、{{domxref("WebSocketStream")}} API を使用して WebSocket クライアントを作成する方法を説明します。

## 機能検出

`WebSocketStream` API に対応しているかどうかを確認するには、次のようにします。

```js
if ("WebSocketStream" in self) {
  // WebSocketStream に対応
}
```

## WebSocketStream オブジェクトの作成

WebSocket クライアントを作成するには、まず新しい `WebSocketStream` インスタンスを {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}} コンストラクターで作成する必要があります。最もシンプルな形では、WebSocket サーバーの URL を引数として使用します。

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

また、独自のプロトコルや {{domxref("AbortSignal")}} が含まれている `options` オブジェクトを取ることもできます。 `AbortSignal` は、[ハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake)が完了する前（つまり、 {{domxref("WebSocketStream.opened", "opened")}} プロミスが解決する前）に接続試行を中止するために使用できます。これは通常、接続タイムアウトの実装に使用されます。例えば、以下のコードはハンドシェイクが完了するのに 5 秒以上かかる場合、タイムアウトします。

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
});
```

## データの送信と受信

`WebSocketStream` インスタンスには {{domxref("WebSocketStream.opened", "opened")}} プロパティがあります。これは、WebSocket 接続が正常に開かれると、{{domxref("ReadableStream")}} と {{domxref("WritableStream")}} インスタンスを含むオブジェクトで履行されるプロミスを返します。

```js
const { readable, writable } = await wss.opened;
```

これらのオブジェクトに対して {{domxref("ReadableStream.getReader", "getReader()")}} と {{domxref("WritableStream.getWriter", "getWriter()")}} を呼び出すと、それぞれ {{domxref("ReadableStreamDefaultReader")}} および {{domxref("WritableStreamDefaultWriter")}} が返されます。これらは、それぞれソケット接続の読み取りと書き込みに使用できます。

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

ソケットへデータを書き込むには、 {{domxref("WritableStreamDefaultWriter.write()")}} が利用できます。

```js
writer.write("My message");
```

ソケットからデータを読み込むには、ストリームが終了するまで、{{domxref("ReadableStreamDefaultReader.read()")}} を継続的に呼び出すことができます。ストリームが終了すると、`done` が `true` になります。

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

ブラウザーは必要に際して背圧を適用することで、クライアントがデータを受信および送信する速度を自動的に制御します。クライアントが `read()` できる速度よりも速い速度でデータが到着している場合、基盤となるストリーム API がサーバーに背圧をかけます。さらに、`write()` 操作は安全に行える場合にのみ実行されます。

## 接続の切断

接続を閉じるには、 {{domxref("WebSocketStream.close()")}} メソッドを呼び出します。オプションで[終了コード](/ja/docs/Web/API/CloseEvent/code#value)と理由を渡すことができます。

```js
wss.close({
  closeCode: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> 使用するサーバーの設定やステータスコードによっては、サーバーが、終了理由に適した有効なコードを優先して、カスタムコードを無視することがあります。

基盤となる {{domxref("WritableStream")}} または {{domxref("WritableStreamDefaultWriter")}} を閉じることで、接続も閉じられます。

接続の終了を処理するには、 {{domxref("WebSocketStream.closed", "closed")}} プロミスの解決を待機します。

```js
const { closeCode, reason } = await wss.closed;
```

## 完全なサンプルクライアント

`WebSocketStream` の基本的な使い方を示すために、サンプルクライアントを作成しました。記事の一番下に[全リスト](#全リスト)がありますので、以下の説明と合わせてご覧ください。

> [!NOTE]
> この例を動作させるには、サーバーコンポーネントも必要です。[WebSocket サーバーを JavaScript (Deno) で書く](/ja/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)で説明されている Deno サーバーと連携するようにクライアントを書きましたが、互換性のあるサーバーであればどれでも構いません。

デモの HTML は以下の通りです。情報的な [`<h2>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) と {{htmlelement("p")}} 要素、初期状態では無効になっている WebSocket 接続を閉じるための{{htmlelement("button")}}、および出力メッセージを書き込むための {{htmlelement("div")}} があります。

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

次に JavaScript です。まず、出力先の `<div>` と終了タグの `<button>` の参照を取得し、メッセージを `<div>` に挿入するユーティリティ関数を定義します。

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

次に、`WebSocketStream` を検出する `if...else` 構造を作成し、対応していないブラウザーに対して情報メッセージを出力します。

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

補助的なコードパスでは、まず WebSocket サーバーの URL を含む変数を定義し、新しい `WebSocketServer` インスタンスを構築します。

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> 実際のアプリケーションでは、安全な WebSocket (`wss://`) を使用するのが最善の方法です。しかし、このデモではローカルホストに接続しているため、例を動作させるには安全ではない WebSocket プロトコル (`ws://`) を使用する必要があります。

私たちのコードの大部分は `start()` 関数内に含まれており、私たちはこの関数を定義し、すぐに呼び出します。{{domxref("WebSocketStream.opened", "opened")}} のプロミスを待ち、それが履行された後に、接続が成功したことを読み手に知らせるメッセージを書き込みます。そして、{{domxref("ReadableStreamDefaultReader")}} および {{domxref("WritableStreamDefaultWriter")}} のインスタンスを返された `readable` および `writable` から作成します。

次に、`start()` として、サーバーに "ping" メッセージを送信し、"pong" メッセージを受信する関数を作成し、それを呼び出します。関数本体では、`wss.opened` プロミスを待ち、その履行値からリーダーとライターを作成します。ソケットが開いたら、そのことをユーザーに通知し、Close ボタンを有効にします。次に、ソケットに `"ping"` 値を `write()` し、そのことをユーザーに通知します。この時点で、サーバーは `"pong"` メッセージで応答します。応答の `read()` を待ち、ユーザーに通知します。その後、5 秒のタイムアウト後にサーバーに別の `"ping"` を送信します。この動作を繰り返すことで、 `"ping"`/`"pong"` のループが延々と続きます。

```js
async function start() {
  const { readable, writable } = await wss.opened;
  writeToScreen("CONNECTED");
  closeBtn.disabled = false;
  const reader = readable.getReader();
  const writer = writable.getWriter();

  writer.write("ping");
  writeToScreen("SENT: ping");

  while (true) {
    const { value, done } = await reader.read();
    writeToScreen(`RECEIVED: ${value}`);
    if (done) {
      break;
    }

    setTimeout(async () => {
      try {
        await writer.write("ping");
        writeToScreen("SENT: ping");
      } catch (e) {
        writeToScreen(`Error writing to socket: ${e.message}`);
      }
    }, 5000);
  }
}

start();
```

> [!NOTE]
> {{domxref("Window.setTimeout", "setTimeout()")}} 関数は、アプリケーションがストリームを閉じた後に書き込みを行おうとした場合に発生する可能性のあるエラーを処理するために、`write()` 呼び出しを [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックで囲みます。

WebSocket 接続が閉じられた場合、{{domxref("WebSocketStream.closed", "closed")}} プロミスが履行されることで通知されるように、コードと理由をユーザーに通知するプロミススタイルのコードセクションを追加しました。

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

最後に、コードとカスタムの理由を指定して、`close()` メソッドを使用して接続を閉じるイベントリスナーを Close ボタンに追加します。この関数は Close ボタンを無効にもします。接続がすでに閉じられた後は、ユーザーにボタンを押させたくないからです。

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    closeCode: 1000,
    reason: "That's all folks",
  });

  closeBtn.disabled = true;
});
```

### 完全なリスト

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}

if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  const wsURL = "ws://127.0.0.1/";
  const wss = new WebSocketStream(wsURL);

  console.log(wss.url);

  async function start() {
    const { readable, writable, extensions, protocol } = await wss.opened;
    writeToScreen("CONNECTED");
    closeBtn.disabled = false;
    const reader = readable.getReader();
    const writer = writable.getWriter();

    writer.write("ping");
    writeToScreen("SENT: ping");

    while (true) {
      const { value, done } = await reader.read();
      writeToScreen(`RECEIVED: ${value}`);
      if (done) {
        break;
      }

      setTimeout(() => {
        writer.write("ping");
        writeToScreen("SENT: ping");
      }, 5000);
    }
  }

  start();

  wss.closed.then((result) => {
    writeToScreen(
      `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
    );
    console.log("Socket closed", result.closeCode, result.reason);
  });

  closeBtn.addEventListener("click", () => {
    wss.close({
      closeCode: 1000,
      reason: "That's all folks",
    });

    closeBtn.disabled = true;
  });
}
```
