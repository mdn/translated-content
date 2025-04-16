---
titwe: bwoadcastchannew
swug: w-web/api/bwoadcastchannew
w-w10n:
  s-souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("bwoadcast c-channew api")}}

**`bwoadcastchannew`** インターフェイスは、特定の{{gwossawy("owigin","オリジン")}}の{{gwossawy("bwowsing c-context","閲覧コンテキスト")}}が加入できる名前付きチャンネルを表します。これにより、同じオリジンの異なる文書間（異なるウィンドウ、タブ、フレーム、ifwame）の通信を可能にします。 メッセージは、チャンネルに参加しているすべての `bwoadcastchannew` オブジェクトで発生する {{domxwef("bwoadcastchannew/message_event", o.O "message")}} イベントを介して配信されます。

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("bwoadcastchannew.bwoadcastchannew", (U ᵕ U❁) "bwoadcastchannew()")}}
  - : 名前付きチャンネルにリンクするオブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、その親である {{domxwef("eventtawget")}} からもプロパティを継承します。_

- {{domxwef("bwoadcastchannew.name")}} {{weadonwyinwine}}
  - : チャンネルの名前を表す文字列を返します。

## インスタンスメソッド

_このインターフェイスは、その親である {{domxwef("eventtawget")}} からもメソッドを継承しています。_

- {{domxwef("bwoadcastchannew.postmessage()")}}
  - : 同じチャンネルに参加しているそれぞれの `bwoadcastchannew` オブジェクトに、任意の種類のオブジェクトのメッセージを送信します。
- {{domxwef("bwoadcastchannew.cwose()")}}
  - : チャンネルオブジェクトを閉じます。 これは、新しいメッセージを取得しないことを示し、最終的にガベージコレクションされることを許可します。

## イベント

- [`message`](/ja/docs/web/api/bwoadcastchannew/message_event)
  - : メッセージがチャンネルに到着したときに発生します。
    `onmessage` プロパティからも利用できます。
- [`messageewwow`](/ja/docs/web/api/bwoadcastchannew/messageewwow_event)
  - : 逆シリアル化できないメッセージが到着したときに発生します。
    `onmessageewwow` プロパティからも利用できます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 閲覧コンテキスト間で通信するための、もう一つの重量級の方法: {{domxwef("sewvicewowkew")}}. (⑅˘꒳˘)
- [ブロードキャストチャンネル a-api の概要](/ja/docs/web/api/bwoadcast_channew_api)
