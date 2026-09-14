---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`WebTransport`** は{{domxref("WebTransport API", "ウェブトランスポート API", "", "nocode")}} のインターフェイスで、ユーザーエージェントが HTTP/3 サーバーに接続し、単方向または双方向で信頼性のあるトランスポートおよび信頼性のないトランスポートを開始し、接続が必要できなくなった時点で接続を閉じるための機能を提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("WebTransport.WebTransport", "WebTransport()")}}
  - : 新しい `WebTransport` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

- {{domxref("WebTransport.closed", "closed")}} {{ReadOnlyInline}}
  - : トランスポートが閉じられたときに解決するプロミスを返します。
- {{domxref("WebTransport.datagrams", "datagrams")}} {{ReadOnlyInline}}
  - : データグラムの送受信に使用できる {{domxref("WebTransportDatagramDuplexStream")}} インスタンスを返します。
- {{domxref("WebTransport.congestionControl", "congestionControl")}} {{ReadOnlyInline}}
  - : データ送信時に、高スループットと低レイテンシーのどちらを推奨するかを示す文字列を返します。
- {{domxref("WebTransport.incomingBidirectionalStreams", "incomingBidirectionalStreams")}} {{ReadOnlyInline}}
  - : サーバーによって開かれた 1 つ以上の双方向ストリームを表します。{{domxref("WebTransportBidirectionalStream")}} オブジェクトの {{domxref("ReadableStream")}} を返します。それぞれのオブジェクトを使用して、サーバーからデータを読み込んだり、サーバーにデータを書き戻したりすることができます。
- {{domxref("WebTransport.incomingUnidirectionalStreams", "incomingUnidirectionalStreams")}} {{ReadOnlyInline}}
  - : サーバーによって開かれた 1 つ以上の単方向ストリームを表します。{{domxref("WebTransportReceiveStream")}} オブジェクトの {{domxref("ReadableStream")}} を返します。それぞれのオブジェクトを使用して、サーバーからデータを読み取ることができます。
- {{domxref("WebTransport.ready", "ready")}} {{ReadOnlyInline}}
  - : トランスポートが使用可能になった時点で解決するプロミスを返します。
- {{domxref("WebTransport.reliability", "reliability")}} {{ReadOnlyInline}}
  - : 接続が信頼性のあるトランスポートにのみ対応しているか、それとも信頼性のないトランスポート（UDP など）にも対応しているかを示す文字列を返します。

## インスタンスメソッド

- {{domxref("WebTransport.close", "close()")}}
  - : 進行中のウェブトランスポートセッションが閉じられます。
- {{domxref("WebTransport.createBidirectionalStream", "createBidirectionalStream()")}}
  - : サーバーとの間でデータの読み書きを行うために使用できる双方向ストリーム ({{domxref("WebTransportBidirectionalStream")}}) を非同期で開きます。
- {{domxref("WebTransport.createUnidirectionalStream", "createUnidirectionalStream()")}}
  - : サーバーへの書き込みに使用できる単方向ストリーム ({{domxref("WritableStream")}}) を非同期で開きます。
- {{domxref("WebTransport.getStats", "getStats()")}}
  - : 非同期で、HTTP/3 接続の統計情報を含むオブジェクトで履行される {{jsxref("Promise")}} を返します。

## 例

下記のサンプルコードは、{{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターに URL を渡すことで、HTTP/3 サーバーに接続する方法を示しています。
なお、プロトコルは HTTPS である必要があり、ポート番号は明示的に指定する必要があります。
{{domxref("WebTransport.ready")}} プロミスが履行されたら、接続を使用することができ0ます。

```js
async function initTransport(url) {
  // トランスポートコネクションを初期化
  const transport = new WebTransport(url);

  // ready が履行されるとコネクションが利用できる
  await transport.ready;
  return transport;
}
```

接続の終了には、{{domxref("WebTransport.closed")}} プロミスが履行されるのを待つことで応答できます。
`WebTransport` 操作によって返されるエラーは {{domxref("WebTransportError")}} 型であり、標準の {{domxref("DOMException")}} セットに加えて追加のデータが含まれています。

下記の `closeTransport()` メソッドは、その実装例を示しています。
`try...catch` ブロック内で `await` を使用し、`closed` プロミスが履行されるか拒否されるかを待ち、その後、接続が意図的に閉じられたのか、それともエラーによるものだったのかを報告します。

```js-nolint
async function closeTransport(transport) {
  // コネクションが閉じるのに応答
  try {
    await transport.closed;
    console.log(`HTTP/3 による ${url} へのコネクションは正常に閉じられました。`);
  } catch (error) {
    console.error(`HTTP/3 による ${url} へのコネクションは ${error} で閉じられました。`);
  }
}
```

上記の非同期関数については、下記に示すように、自分自身で別の非同期関数内で呼び出すことができます。

```js
// transport を使用
async function useTransport(url) {
  const transport = await initTransport(url);

  // transport オブジェクトを使用してデータを送受信
  // …

  // 終了したら、トランスポートを閉じる
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

他のコード例については、各プロパティおよびメソッドのページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
