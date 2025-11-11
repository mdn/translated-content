---
title: WebSocket サーバーを JavaScript (Deno) で書く
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("WebSockets API")}}

この例では、 Deno を使用して WebSocket API サーバーを作成する方法を、付随するウェブページと共に示します。

Deno は JavaScript ランタイムで、 TypeScript のコンパイルとオンザフライでのキャッシュに対応しています。 Deno はフォーマッター、リンター、テストランナーなどを持ち、また多くのウェブ API も実装しています。ウェブ標準に準拠するために、 Deno 固有の API はすべて `Deno` 名前空間の下に実装されています。

[Deno のウェブサイト](https://deno.com/)では、 Deno のインストール方法を提供しています。

執筆時点での Deno のバージョンは `1.36` です。

## コード

コードはサーバー用とクライアント用の 2 つのファイルに格納します。

### サーバー

`main.js` ファイルを作成します。このファイルにはクライアントに HTML を提供する単純な HTTP サーバーのコードを格納します。

```js
Deno.serve({
  port: 80,
  async handler(request) {
    if (request.headers.get("upgrade") !== "websocket") {
      // If the request is a normal HTTP request,
      // we serve the client HTML file.
      const file = await Deno.open("./index.html", { read: true });
      return new Response(file.readable);
    }
    // If the request is a websocket upgrade,
    // we need to use the Deno.upgradeWebSocket helper
    const { socket, response } = Deno.upgradeWebSocket(request);

    socket.onopen = () => {
      console.log("CONNECTED");
    };
    socket.onmessage = (event) => {
      console.log(`RECEIVED: ${event.data}`);
      socket.send("pong");
    };
    socket.onclose = () => console.log("DISCONNECTED");
    socket.onerror = (error) => console.error("ERROR:", error);

    return response;
  },
});
```

`Deno.upgradeWebSocket()` は接続をウェブソケット接続にアップグレードします。これは[プロトコルアップグレードメカニズム](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)で詳しく説明されています。

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) は、 `Deno.listen()` と `Deno.serveHttp()` を基盤に使用し、 HTTP サーバーを簡単に設定するための上位インターフェイスです。これがなければ、コードは次のように見ていくことになります。

```js
for await (const conn of Deno.listen({ port: 80 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### クライアント

`index.html` ファイルを作成します。これは、接続が確立された後、 5 秒ごとにサーバーに ping を送信するスクリプトを呼び出します。また、次のマークアップが含まれている必要があります：

```html
<h2>WebSocket Test</h2>
<p>Sends a ping every five seconds</p>
<div id="output"></div>
```

```js
const wsUri = "ws://127.0.0.1/";
const output = document.querySelector("#output");
const websocket = new WebSocket(wsUri);
let pingInterval;

function writeToScreen(message) {
  output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
}

function sendMessage(message) {
  writeToScreen(`SENT: ${message}`);
  websocket.send(message);
}

websocket.onopen = (e) => {
  writeToScreen("CONNECTED");
  sendMessage("ping");
  pingInterval = setInterval(() => {
    sendMessage("ping");
  }, 5000);
};

websocket.onclose = (e) => {
  writeToScreen("DISCONNECTED");
  clearInterval(pingInterval);
};

websocket.onmessage = (e) => {
  writeToScreen(`RECEIVED: ${e.data}`);
};

websocket.onerror = (e) => {
  writeToScreen(`ERROR: ${e.data}`);
};
```

## コードの実行

これら 2 つのファイルを用いて、 Deno を使用してアプリを実行します。

```sh
deno run --allow-net=0.0.0.0:80 --allow-read=./index.html main.js
```

Deno では、ホストマシン上でアクセスするための明示的な権限を要求します。

- `--allow-net=0.0.0.0:80` はアプリが localhost を 80 番ポートで使用することを許可します。
- `--allow-read=./index.html` はクライアントが HTML ファイルにアクセスできるようにします。

## 関連情報

- [WebSocket サーバーを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
