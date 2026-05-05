---
title: ウェブトランスポート API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**ウェブトランスポート API** (WebTransport API) は、{{domxref("WebSockets API", "ウェブソケット", "", "nocode")}}を現代的にに刷新したもので、[HTTP/3 トランスポート](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)を使用してクライアントとサーバー間でデータを転送します。WebTransport は、マルチストリーム単短方向ストリーム、順不同配信に対応しています。これにより、{{domxref("Streams API", "ストリーム", "", "nocode")}}による信頼性の高い転送と、UDP 同様にデータグラムによる信頼性の低い転送をすることができます。

## 概念と使い方

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) は 2018 年から開発が進められています。これは Google の QUIC プロトコル（UDP に基づく）を基盤としており、HTTP や WebSockets の基盤となっている従来の TCP プロトコルに関するいくつかの課題を修正しています。

これには次のようなものがあります。

- **{{glossary("head of line blocking", "行頭ブロッキング")}}**
  - : HTTP/2 では多重化をすることができるため、単一の接続で複数のリソースを同時にストリーミングできます。しかし、1 つのリソースで障害が発生した場合、その接続上のそれ以外にもすべてのリソースは、欠落したパケットが再送信されるまで待機することになります。一方、QUIC では、障害が発生したリソースのみに影響が及びます。
- **より速いパフォーマンス**
  - : QUIC は多くにおいて TCP よりも高性能です。QUIC は、TLS などの他のプロトコルに責任を委ねるのではなく、セキュリティ機能を独自に処理できるため、ラウンドトリップの回数が少なくて済みます。また、ストリーム方式は従来のパケット方式よりも優れた転送効率を提供します。これは、特に高レイテンシーのネットワークにおいて、大きな違いをもたらす可能性があります。
- **ネットワークの移行の改善**
  - : QUIC は、それぞれのリクエストのソースと出力先を管理するために一意の接続 ID を使用し、パケットが確実に配信されるようにしています。この ID は異なるネットワーク間でも維持されるため、例えば Wi-Fi からモバイルネットワークに切り替えても、ダウンロードが中断されることなく続けることができます。一方、HTTP/2 は識別子として IP アドレスを使用するため、ネットワークの切り替え時に問題が生じる可能性があります。
- **信頼性の低い転送**
  - : HTTP/3 は、データグラムによる信頼性の低いデータ転送に対応しています。

WebTransport API は、HTTP/3 を介した双方向通信への低レベルなアクセスを提供し、以上のような利点を活かして、信頼性の高いデータ転送と信頼性の低いデータ転送の両方に対応しています。

### 初期接続

HTTP/3 サーバーへの接続を開くには、その URL を {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターに渡します。なお、プロトコルには HTTPS を使用する必要があるほか、ポート番号を明示的に指定する必要があります。
{{domxref("WebTransport.ready")}} プロミスが履行されれば、その接続を使用できます。

また、{{domxref(「WebTransport.closed」)}} プロミスの解決を待つことで、接続の終了に対応できる点にも注意してください。WebTransport 操作によって返されるエラーは {{domxref("WebTransportError")}} 型であり、標準の {{domxref("DOMException")}} セットに加えて追加のデータを含んでいます。

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // トランスポート接続を初期化
  const transport = new WebTransport(url);

  // ready が履行されれば接続が使用可能
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // 接続が閉じるのに応答
  try {
    await transport.closed;
    console.log(`この ${url} への HTTP/3 接続は正しく閉じられました。`);
  } catch (error) {
    console.error(`この ${url} への HTTP/3 接続は ${error} のため閉じられました。`);
  }
}
```

### データグラムによる信頼性の低い転送

「信頼性が低い」とは、データの送信が保証されないだけでなく、特定の順序で到着することも保証されないことを意味します。状況によってはこれで問題なく、とても高速な配信を提供できます。例えば、それぞれのメッセージが最後に到着したメッセージを上書きし、順序が重要ではないような、定期的なゲーム状態の更新を送信する場合などが挙げられます。

信頼性の低いデータ転送は、{{domxref("WebTransport.datagrams")}} プロパティを使用して処理されます。このプロパティは、サーバーへのデータグラムの送信および受信に必要なすべての情報を含む {{domxref("WebTransportDatagramDuplexStream")}} オブジェクトを返します。

{{domxref("WebTransportDatagramDuplexStream.writable")}} プロパティは、ライターを使用してデータを書き込み、サーバーへ送信できる {{domxref("WritableStream")}} オブジェクトを返します。

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

{{domxref("WebTransportDatagramDuplexStream.readable")}} プロパティは、サーバーからデータを受信するために使用できる {{domxref("ReadableStream")}} オブジェクトを返します。

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

### ストリームによる信頼性の高い転送

「信頼性が高い」とは、データの転送と順序が保証されていることを意味します。これにより、配信速度は遅くなります（とはいえ、WebSockets よりは速いですが）、信頼性と順序が重要な状況（例えばチャットアプリケーションなど）では必要不可欠です。

ストリームを介した信頼性の高い転送を使用する場合、同じトランスポート上の異なるストリーム間の相対的な優先順位を同時に設定することも可能です。

### 単方向通信

ユーザーエージェントから単方向ストリームを開くには、{{domxref("WebTransport.createUnidirectionalStream()")}} メソッドを使用して、{{domxref("WritableStream")}} への参照を取得します。このものを使用して[ライターを取得](/ja/docs/Web/API/WritableStream/getWriter)することで、ストリームへのデータの書き込みやサーバーへの送信をすることができます。

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream();
  const writer = stream.writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);

  try {
    await writer.close();
    console.log("すべてのデータが送信されました。");
  } catch (error) {
    console.error(`エラーが発生しました: ${error}`);
  }
}
```

また、すべてのデータの送信が完了したら、関連付けられた HTTP/3 接続を閉じるために {{domxref("WritableStreamDefaultWriter.close()")}} メソッドが使用されていることに注意してください。

サーバーがクライアントにデータを送信するために単方向ストリームを開いた場合、クライアント側では {{domxref("WebTransport.incomingUnidirectionalStreams")}} プロパティを介してこれにアクセスできます。このプロパティは、{{domxref("WebTransportReceiveStream")}} オブジェクトの {{domxref("ReadableStream")}} を返します。これらは、サーバーから送信された {{jsxref("Uint8Array")}} インスタンスを読み取るために使用することができます。

この場合、まず最初にすべきことは、`WebTransportReceiveStream` を読み込む関数を設定することです。これらのオブジェクトは `ReadableStream` クラスを継承しているため、まったく同じように使用できます。

```js
async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value は Uint8Array
    console.log(value);
  }
}
```

次に、{{domxref(「WebTransport.incomingUnidirectionalStreams」)}} を呼び出し、返される `ReadableStream` 上で利用できるリーダーの参照を取得します。その後、そのリーダーを使用してサーバーからデータを読み込みます。それぞれのチャンクは `WebTransportReceiveStream` であり、先ほど設定した `readFrom()` を使用して読み込みます。

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value は WebTransportReceiveStream のインスタンス
    await readData(value);
  }
}
```

#### 双方向通信

ユーザーエージェントから双方向ストリームを開くには、{{domxref("WebTransport.createBidirectionalStream()")}} メソッドを使用して、{{domxref("WebTransportBidirectionalStream")}} への参照を取得します。
これには `readable` および `writable` プロパティが含まれており、サーバーからの読み取りやサーバーへの書き込みに使用できます。`WebTransportReceiveStream` および `WebTransportSendStream` インスタンスへの参照を返します。

> [!NOTE]
> `WebTransportBidirectionalStream` は {{domxref(「WebTransportDatagramDuplexStream」)}} と似ていますが、そのインターフェイスでは `readable` プロパティと `writable` プロパティが、それぞれ `ReadableStream` と `WritableStream` となっている点が異なります。

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream は WebTransportBidirectionalStream
  // stream.readable は WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable は WebTransportSendStream
  const writable = stream.writable;

  // …
}
```

`WebTransportReceiveStream` からの読み取りがは、次のように行うことができます。

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value は Uint8Array
    console.log(value);
  }
}
```

また、`WebTransportSendStream` への書き込みが同様に可能です。

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

サーバーがクライアントとの間でデータを送受信するために双方向ストリームを開いた場合、これには {{domxref("WebTransport.incomingBidirectionalStreams")}} プロパティを介してアクセスできます。このプロパティは、`WebTransportBidirectionalStream` オブジェクトの {{domxref("ReadableStream")}} を返します。それぞれのオブジェクトは、以上のように {{jsxref("Uint8Array")}} インスタンスの読み書きに使用できます。ただし、単方向の例と同様に、双方向ストリームを読み取るための初期関数が必要となります。

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value は WebTransportBidirectionalStream のインスタンス
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## インターフェイス

- {{domxref("WebTransport")}}
  - : ユーザーエージェントが HTTP/3 サーバーに接続し、単方向または双方向で信頼性のあるトランスポートや信頼性のないトランスポートを開始し、接続が必要できなくなった時点で接続を閉じるための機能を提供します。
- {{domxref("WebTransportBidirectionalStream")}}
  - : サーバーまたはクライアントによって作成され、信頼性の高い転送に使用できる双方向ストリームを表します。受信データの読み取りには {{domxref("ReadableStream")}} へのアクセスを、送信データの書き込みには {{domxref("WritableStream")}} へのアクセスを提供します。
- {{domxref("WebTransportDatagramDuplexStream")}}
  - : クライアントとサーバー間のデータグラムの信頼性の低い転送に使用することができる双方向ストリームを表します。受信データグラムの読み取り用として {{domxref("ReadableStream")}}、送信データグラムの書き込み用として {{domxref("WritableStream")}}へのアクセスを提供し、ストリームに関連するさまざまな設定や統計情報も指定されます。
- {{domxref("WebTransportError")}}
  - : ウェブトランスポート API に関連するエラーを表します。このエラーは、サーバーエラー、ネットワーク接続の問題、またはクライアント側による中止操作（例えば、{{domxref("WritableStream.abort()")}} の呼び出しによるものなど）によって発生する可能性があります。
- {{domxref("WebTransportReceiveStream")}}
  - : 受信側のウェブトランスポートの単方向または双方向の {{domxref("WebTransport")}} ストリームに対して、ストリーミング機能を提供します。
- {{domxref("WebTransportSendStream")}}
  - : 送信側のウェブトランスポートの単方向または双方向の {{domxref("WebTransport")}} ストリームに対して、ストリーミング機能を提供します。

## 例

完全な例は、次を参照してください。

- [WebTransport over HTTP/3 client](https://webtransport.day/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "ウェブソケット API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
