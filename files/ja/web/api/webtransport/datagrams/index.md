---
title: "WebTransport: datagrams プロパティ"
short-title: datagrams
slug: Web/API/WebTransport/datagrams
l10n:
  sourceCommit: 6520bd72ab19f400d537db7a53514f08a589301b
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`datagrams`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、信頼性のないデータ転送であるデータグラムの送受信に使用できる {{domxref("WebTransportDatagramDuplexStream")}} インスタンスを返します。

「信頼性がない」とは、データの転送が保証されず、特定の順序で到着することも保証されないという意味です。状況によっては問題なく、非常に高速にデータを届けられます。たとえば、各メッセージが直前に到着したメッセージに取って代わるため順序が重要でない、ゲームの状態の定期更新を送信する場合などです。

## 値

{{domxref("WebTransportDatagramDuplexStream")}} オブジェクトです。

## 例

### 送信データグラムを書き込む

このコードでは、対応している場合に {{domxref("WebTransportDatagramDuplexStream.createWritable", "createWritable()")}} メソッドを使用して、トランスポートへのデータ書き込みに使う {{domxref("WebTransportDatagramsWritable")}} インスタンスを取得します。
対応していない場合は、代わりに {{domxref("WebTransportDatagramDuplexStream/writable", "writable")}} プロパティ {{deprecated_inline}} {{non-standard_inline}} を使用します。このプロパティは {{domxref("WritableStream")}} オブジェクトを返し、ライターを使ってサーバーに送信するデータを書き込めます。

```js
const writableStream =
  typeof transport.datagrams.createWritable === "function"
    ? transport.datagrams.createWritable()
    : transport.datagrams.writable; // 非推奨、標準外。

const writer = writableStream.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
await writer.ready;
writer.write(data1);
await writer.ready;
writer.write(data2);
```

### 受信データグラムを読み取る

{{domxref("WebTransportDatagramDuplexStream.readable")}} プロパティは、サーバーからデータを受信するために使用できる {{domxref("ReadableStream")}} オブジェクトを返します。

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
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

代わりに、指定したバッファーにデータグラムを読み込むには、[`datagramsReadableType`](/ja/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype) オプションに `bytes` を設定してトランスポートを構築し、{{domxref("ReadableStreamBYOBReader")}} を使ってストリームを読み取ります。
`WebTransport()` コンストラクターの記事にある[BYOB リーダーでデータグラムを読み取る例](/ja/docs/Web/API/WebTransport/WebTransport#byob_リーダーでデータグラムを読み取る)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)<sup>(英語)</sup>
