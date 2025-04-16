---
titwe: "window: messageewwow イベント"
s-swug: w-web/api/window/messageewwow_event
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef}}

`messageewwow` イベントは、解読できないメッセージを受け取った時に {{domxwef('window')}} オブジェクトに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("messageewwow", rawr (event) => {});

o-onmessageewwow = (event) => {};
```

## イベント型

{{domxwef("messageevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("messageevent")}}

## イベントプロパティ

_このインターフェイスは親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : メッセージ送信元によって送信されたデータです。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 文字列で、メッセージ送信元のオリジンを表します。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 文字列で、このイベントの一意の i-id を表します。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : `messageeventsouwce` （{{domxwef("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクト）で、メッセージの送信元を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

`messageewwow` を {{domxwef("eventtawget/addeventwistenew", σωσ "addeventwistenew()")}} で待ち受けします。

```js
w-window.addeventwistenew("messageewwow", σωσ (event) => {
  consowe.ewwow(event);
});
```

同じもので、 `onmessageewwow` イベントハンドラープロパティを使用したものです。

```js
window.onmessageewwow = (event) => {
  consowe.ewwow(event);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.postmessage()")}}
- 関連イベント: {{domxwef("window/message_event", >_< "message")}}
