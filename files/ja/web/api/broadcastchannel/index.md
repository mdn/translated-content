---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Broadcast Channel API")}}

**`BroadcastChannel`** インターフェイスは、特定の{{glossary("origin","オリジン")}}の{{glossary("browsing context","閲覧コンテキスト")}}が加入できる名前付きチャンネルを表します。これにより、同じオリジンの異なる文書間（異なるウィンドウ、タブ、フレーム、iframe）の通信を可能にします。 メッセージは、チャンネルに参加しているすべての `BroadcastChannel` オブジェクトで発生する {{domxref("BroadcastChannel/message_event", "message")}} イベントを介して配信されます。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : 名前付きチャンネルにリンクするオブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、その親である {{domxref("EventTarget")}} からもプロパティを継承します。_

- {{domxref("BroadcastChannel.name")}} {{ReadOnlyInline}}
  - : 文字列で、チャンネルの名前であるを返します。

## インスタンスメソッド

_このインターフェイスは、その親である {{domxref("EventTarget")}} からもメソッドを継承しています。_

- {{domxref("BroadcastChannel.postMessage()")}}
  - : 同じチャンネルに参加しているそれぞれの `BroadcastChannel` オブジェクトに、任意の種類のオブジェクトのメッセージを送信します。
- {{domxref("BroadcastChannel.close()")}}
  - : チャンネルオブジェクトを閉じます。 これは、新しいメッセージを取得しないことを示し、最終的にガベージコレクションされることを許可します。

## イベント

- [`message`](/ja/docs/Web/API/BroadcastChannel/message_event)
  - : メッセージがチャンネルに到着したときに発生します。
    `onmessage` プロパティからも利用できます。
- [`messageerror`](/ja/docs/Web/API/BroadcastChannel/messageerror_event)
  - : 逆シリアル化できないメッセージが到着したときに発生します。
    `onmessageerror` プロパティからも利用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 閲覧コンテキスト間で通信するための、もう一つの重量級の方法: {{domxref("ServiceWorker")}}.
- [ブロードキャストチャンネル API の概要](/ja/docs/Web/API/Broadcast_Channel_API)
