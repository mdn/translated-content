---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
---

{{APIRef("Broadcast Channel API")}}

**`BroadcastChannel`** インターフェイスは、特定の{{glossary("origin","オリジン")}}の{{glossary("browsing context","閲覧コンテキスト")}}が購読できる名前付きチャネルを表します。 それは、同じオリジンの異なるドキュメント間（異なるウィンドウ、タブ、フレーム、iframe）の通信を可能にします。 メッセージは、チャンネルをリッスンしているすべての `BroadcastChannel` オブジェクトで発生する {{event("message")}} イベントを介して放送されます。

{{AvailableInWorkers}}

## コンストラクタ

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : 名前付きチャンネルにリンクするオブジェクトを作成します。

## プロパティ

_このインターフェイスは、その親である {{domxref("EventTarget")}} からもプロパティを継承します。_

- {{domxref("BroadcastChannel.name")}}
  - : チャネルの名前である {{domxref("DOMString")}} を返します。

### イベントハンドラ

- {{domxref("BroadcastChannel.onmessage")}}
  - : このオブジェクトで {{event("message")}} イベントが発生したときに実行する関数を指定する {{event("Event_handlers", "event handler")}} プロパティ。
- {{domxref("BroadcastChannel.onmessageerror")}}
  - : {{event("Event_handlers", "event handler")}} は、{{domxref("MessageError")}} 型の {{domxref("MessageEvent")}} が発生したとき、つまり逆シリアル化できないメッセージを受け取ったときに呼び出されます。

## メソッド

_このインターフェイスは、その親である {{domxref("EventTarget")}} からもメソッドを継承しています。_

- {{domxref("BroadcastChannel.postMessage()")}}
  - : 同じチャンネルをリッスンしている各 BroadcastChannel オブジェクトに、任意の種類のオブジェクトのメッセージを送信します。
- {{domxref("BroadcastChannel.close()")}}
  - : チャネルオブジェクトを閉じます。 これは、新しいメッセージを取得しないことを示し、最終的にガベージコレクションされることを許可します。

## イベント

- {{domxref("BroadcastChannel.message_event","message")}}
  - : メッセージがチャネルに到着したときに発生します。
    {{domxref("BroadcastChannel.onmessage","onmessage")}} プロパティからも利用できます。
- {{domxref("BroadcastChannel.messageerror_event","messageerror")}}
  - : 逆シリアル化できないメッセージが到着したときに発生します。
    {{domxref("BroadcastChannel.onmessageerror","onmessageerror")}} プロパティからも利用できます。

## 仕様

| 仕様                                                                                                     | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "comms.html#broadcastchannel", "BroadcastChannel")}} | {{Spec2('HTML WHATWG')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel")}}

## 関連情報

- ブラウザコンテキスト間でやり取りするもう 1 つの、よりヘビー級の方法: {{domxref("ServiceWorker")}}.
- [Broadcast Channel API の概要](/ja/docs/Web/API/Broadcast_Channel_API)
