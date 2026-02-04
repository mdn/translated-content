---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("Broadcast Channel API")}} {{AvailableInWorkers}}

**`BroadcastChannel`** インターフェイスは、特定の{{glossary("origin","オリジン")}}の{{glossary("browsing context","閲覧コンテキスト")}}が加入できる名前付きチャンネルを表します。これにより、同じオリジンの異なる文書間（異なるウィンドウ、タブ、フレーム、iframe）の通信を可能にします。 メッセージは、チャンネルに参加しているすべての `BroadcastChannel` オブジェクトで発生する {{domxref("BroadcastChannel/message_event", "message")}} イベントを介して配信されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : 名前付きチャンネルにリンクするオブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、その親である {{domxref("EventTarget")}} からもプロパティを継承します。_

- {{domxref("BroadcastChannel.name")}} {{ReadOnlyInline}}
  - : チャンネルの名前を表す文字列を返します。

## インスタンスメソッド

_このインターフェイスは、その親である {{domxref("EventTarget")}} からもメソッドを継承しています。_

- {{domxref("BroadcastChannel.postMessage()")}}
  - : 同じチャンネルに参加しているそれぞれの `BroadcastChannel` オブジェクトに、任意の種類のオブジェクトのメッセージを送信します。
- {{domxref("BroadcastChannel.close()")}}
  - : チャンネルオブジェクトを閉じます。 これは、新しいメッセージを取得しないことを示し、最終的にガベージコレクションされることを許可します。

## イベント

_このインターフェイスには、親である {{domxref("EventTarget")}} から継承したイベントもあります。_

- {{domxref("BroadcastChannel/message_event", "message")}}
  - : メッセージがチャンネルに到着したときに発生します。
    `onmessage` プロパティからも利用できます。
- {{domxref("BroadcastChannel/messageerror_event", "messageerror")}}
  - : 逆シリアル化できないメッセージが到着したときに発生します。
    `onmessageerror` プロパティからも利用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 閲覧コンテキスト間で通信するための、もう一つの重量級の方法: {{domxref("ServiceWorker")}}.
- [ブロードキャストチャンネル API の概要](/ja/docs/Web/API/Broadcast_Channel_API)
