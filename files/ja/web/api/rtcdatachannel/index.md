---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("WebRTC")}}

**`RTCDataChannel`** インターフェイスは、2 つのピア間で双方向に任意のデータを転送するためのネットワークチャンネルを表現します。すべてのデータチャンネルは {{DOMxRef("RTCPeerConnection")}} に関連付けられており、それぞれのピアコネクションは理論上、最大 65,534 個のデータチャンネルを持つことができます（実際の上限はブラウザーごとに異なります）。

データチャンネルを作成してリモートのピアに参加するかを問い合わせるには、{{DOMxRef("RTCPeerConnection")}} の {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}} メソッドを呼び出します。データ交換に招かれているピアは {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} イベント ({{DOMxRef("RTCDataChannelEvent")}} 型) を受け取って、コネクションにデータチャンネルが追加されたことを知ります。

`RTCDataChannel` は{{glossary("Transferable objects","移譲可能オブジェクト")}}です。

{{InheritanceDiagram}}

## インスタンスプロパティ

_{{DOMxRef("EventTarget")}} からプロパティを継承しています。_

- {{DOMxRef("RTCDataChannel.binaryType", "binaryType")}}
  - : 文字列で、 `RTCDataChannel` で受信したバイナリーデータを表現するために使用されるオブジェクトの種類を指定します。
    値は {{DOMxRef("WebSocket.binaryType")}} プロパティで許可されているものと同じです。
    {{DOMxRef("Blob")}} オブジェクトを使用する場合は `blob`、 {{jsxref("ArrayBuffer")}} オブジェクトを使用する場合は `arraybuffer` を指定します。
    既定値は `blob` です。
- {{DOMxRef("RTCDataChannel.bufferedAmount", "bufferedAmount")}} {{ReadOnlyInline}}
  - : データチャンネルで送信するために現在キューイングされているデータのバイト数を返します。
- {{DOMxRef("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}
  - : バッファリングされた送信データのうち、 "low" とみなされるバイト数を指定します。
    既定値は 0 です。
- {{DOMxRef("RTCDataChannel.id", "id")}} {{ReadOnlyInline}}
  - : `RTCDataChannel` を一意に識別するための ID 番号（0 から 65,534 の間）を返します。
- {{DOMxRef("RTCDataChannel.label", "label")}} {{ReadOnlyInline}}
  - : 文字列で、データチャンネルを記述している名前を返します。
    このラベルは一意である必要はありません。
- {{DOMxRef("RTCDataChannel.maxPacketLifeTime", "maxPacketLifeTime")}} {{ReadOnlyInline}}
  - : データチャンネルが作成されたときに設定された、ブラウザーがメッセージの送信を試みるのにかかる許容時間 （ミリ秒単位）、または `null` を返します。
- {{DOMxRef("RTCDataChannel.maxRetransmits", "maxRetransmits")}} {{ReadOnlyInline}}
  - : データチャンネルが作成されたときに設定された、ブラウザーがあきらめる前にメッセージを再送信しようとする最大回数、または最大回数がないことを示す `null` を返します。
- {{DOMxRef("RTCDataChannel.negotiated", "negotiated")}} {{ReadOnlyInline}}
  - : `RTCDataChannel` の接続が、ウェブアプリケーションによって交渉されたのか (`true`) あるいは WebRTC レイヤーによって交渉されたのか (`false`) を示します。
    既定値は `false` です。
- {{DOMxRef("RTCDataChannel.ordered", "ordered")}} {{ReadOnlyInline}}
  - : データチャンネルのメッセージが順番通りに配送されることを保証するかどうかを示します。
    既定値は `true` で、データチャンネルが実際に順序どおりに配送されることを示します。
- {{DOMxRef("RTCDataChannel.protocol", "protocol")}} {{ReadOnlyInline}}
  - : 使用されているサブプロトコルの名前を格納した文字列を返します。
    データチャンネルの作成時にプロトコルが指定されなかった場合、このプロパティの値は空文字列 (`""`) となります。
- {{DOMxRef("RTCDataChannel.readyState", "readyState")}} {{ReadOnlyInline}}
  - : データチャンネルの基盤となるデータ接続の状態を示す文字列を返します。
    `connecting`, `open`, `closing`, `closed` の値のいずれかを持つ可能性があります。

### 古いプロパティ

- {{DOMxRef("RTCDataChannel.reliable", "reliable")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : データチャンネルが _reliable_ であるかどうかを示します。

## インスタンスメソッド

_{{DOMxRef("EventTarget")}} からもメソッドを継承しています。_

- {{DOMxRef("RTCDataChannel.close", "close()")}}
  - : {{domxref("RTCDataChannel")}} を閉じました。
    どちらのピアもこのメソッドを呼び出してチャンネルの閉鎖を開始することが許可されています。
- {{DOMxRef("RTCDataChannel.send", "send()")}}
  - : データチャンネルを経由してリモートピアーにデータを送信します。

### イベント

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : 送信データバッファー内のデータバイト数が {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} で指定する値以下になると送信されます。
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : 基盤となるデータトランスポートが閉じられたときに送信されます。
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : 基盤となるデータトランスポートが閉じ始めようとするときに送られます。
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : データチャンネルにエラーが発生したときに送信されます。
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : リモートピアからメッセージを受信したときに送信されます。
    メッセージのコンテンツは、イベントの {{domxref("MessageEvent.data", "data")}} プロパティで得ることができます。
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : データチャンネルが最初に開かれたとき、または既存のデータチャンネルの基盤となる接続が再び開かれたときに送信されます。

## データ形式

基礎となるデータ形式は、 IEEE の仕様書 [SDP Offer/Answer Procedures for SCTP over DTLS Transport(RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) によって定義されています。現在の形式では、そのプロトコルを `"UDP/DTLS/SCTP"` (SCTP を運ぶ DTLS を運ぶ UDP) または `"TCP/DTLS/SCTP"` (SCTP を運ぶ DTLS を運ぶ TCP) のいずれかに指定する。古いブラウザーでは `"DTLS/SCTP"` のみを指定することができます。

## 例

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
