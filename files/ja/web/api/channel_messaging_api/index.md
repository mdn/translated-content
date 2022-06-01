---
title: チャンネルメッセージング API
slug: Web/API/Channel_Messaging_API
tags:
  - API
  - チャンネルメッセージング
  - HTML API
  - 概要
  - リファレンス
translation_of: Web/API/Channel_Messaging_API
---
{{DefaultAPISidebar("Channel Messaging API")}}

**チャンネルメッセージング API** (Channel Messaging API) を使用すると、同じ文書に添付された異なる閲覧コンテキストで実行される 2 つの別々のスクリプト（2 つの IFrame、メイン文書と IFrame、{{domxref("SharedWorker")}} を介した 2 つの文書、 2 つのワーカーなど）で直接通信し、両端にポートを持つ双方向チャンネル（またはパイプ）を介して相互にメッセージをやり取りできます。

{{AvailableInWorkers}}

## チャンネルメッセージングの概念と使用方法

メッセージチャンネルは {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} コンストラクターを使用して作成します。 作成すると、チャンネルの 2 つのポートは {{domxref("MessageChannel.port1")}} プロパティおよび {{domxref("MessageChannel.port2")}} プロパティを介してアクセスできます（どちらのプロパティも {{domxref("MessagePort")}} オブジェクトを返します）。 チャンネルを作成したアプリは `port1` を使用し、ポートの反対側のアプリは `port2` を使用します — `port2` にメッセージを送信し、{{domxref("window.postMessage")}} を使用して 2 つの引数（送信するメッセージと所有権を移管するオブジェクト、この場合はポート自体）でポートを他の閲覧コンテキストに移管します。

これらの転送可能オブジェクトが転送されると、それまで属していたコンテキストでは使えなくなります。ポートは、送信された後、元のコンテキストでは使用することができなくなります。

もう一方の閲覧コンテキストは、 {{domxref("MessagePort.message_event", "onmessage")}} を使用してメッセージを待ち受けし、イベントの `data` 属性を使用してメッセージの内容を取得することができます。 {{domxref("MessagePort.postMessage")}} を使用して元の文書にメッセージを送り返すことで応答できます。

チャンネルへのメッセージ送信を停止したい場合は、{{domxref("MessagePort.close")}} を呼び出してポートを閉じることができます。

この API の使用方法の詳細については、[チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)を参照してください。

## チャンネルメッセージングのインターフェイス

- {{domxref("MessageChannel")}}
  - : メッセージを送信するための新しいメッセージチャンネルを作成します。
- {{domxref("MessagePort")}}
  - : メッセージチャンネルのポートを制御して、一方のポートからメッセージを送信し、もう一方のポートで到着するのを待ち受けします。
- {{domxref("PortCollection")}}
  - : `MessagePort` の配列。 同時に複数のポートにメッセージをブロードキャストできるようにするための実験的な解決策。

## 例

- Github で[チャンネルメッセージングの基本的なデモ](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic)（[ライブで実行](https://mdn.github.io/dom-examples/channel-messaging-basic/)）を公開しました。 これはページと埋め込まれた {{htmlelement("iframe")}} の間の本当に簡単な単一メッセージ転送を示します。
- また、メインページと IFrame の間で複数のメッセージを送信することができる、もう少し複雑な設定を示す[マルチメッセージデモ](https://github.com/mdn/dom-examples/tree/master/channel-messaging-multimessage)（[ライブで実行](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)）を見ることもできます。

### 仕様書

{{Specifications("api.MessageChannel")}}

## ブラウザーの互換性

### `MessageChannel`

{{Compat("api.MessageChannel", 0)}}

### `MessagePort`

{{Compat("api.MessagePort", 0)}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API)
- [ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API)
