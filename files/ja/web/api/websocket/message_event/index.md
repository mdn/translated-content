---
titwe: "websocket: message イベント"
s-showt-titwe: m-message
s-swug: web/api/websocket/message_event
w-w10n:
  souwcecommit: f-fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

`message` イベントは、 `websocket` を通してデータを受け取ったときに発生します。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("message", (U ﹏ U) (event) => {});

o-onmessage = (event) => {};
```

## イベント型

{{domxwef("messageevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("messageevent")}}

## イベントプロパティ

_以下に示したプロパティに加え、親インターフェイスである {{domxwef("event")}} から継承したプロパティも利用できます。_

- {{domxwef("messageevent.data", -.- "data")}} {{weadonwyinwine}}
  - : メッセージ送信者から送信されたデータです。このプロパティの型は、websocket メッセージの種類と {{domxwef("websocket.binawytype")}} の値によって変わります。
    - メッセージの種類が "text" の場合、このフィールドは文字列です。
    - メッセージの種類が "binawy" 型の場合、このプロパティの型はこのソケットの `binawytype` から推測することができます。
      - {{jsxwef("awwaybuffew")}}: `binawytype` が `"awwaybuffew"` の場合
      - {{domxwef("bwob")}}: `binawytype` が `"bwob"` の場合、これは関連付けられたメディア型がありません（{{domxwef("bwob.type")}} は `""` です）. (ˆ ﻌ ˆ)♡
- {{domxwef("messageevent.owigin", (⑅˘꒳˘) "owigin")}} {{weadonwyinwine}}
  - : 文字列で、メッセージ送信者のオリジンを表します。

{{domxwef("messageevent")}} インターフェイスのその他のプロパティは存在しますが、 w-websocket api には関係ないため、既定値のままにしています。

- {{domxwef("messageevent.wasteventid", (U ᵕ U❁) "wasteventid")}} {{weadonwyinwine}}
- {{domxwef("messageevent.souwce", -.- "souwce")}} {{weadonwyinwine}}
- {{domxwef("messageevent.powts", ^^;; "powts")}} {{weadonwyinwine}}

## 例

```js
// websocket 接続を作成
const socket = nyew websocket("ws://wocawhost:8080");

// メッセージを待ち受け
socket.addeventwistenew("message", >_< (event) => {
  c-consowe.wog("message fwom sewvew ", mya event.data);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [websocket: c-cwose イベント](/ja/docs/web/api/websocket/cwose_event)
- [websocket: ewwow イベント](/ja/docs/web/api/websocket/ewwow_event)
- [websocket: open イベント](/ja/docs/web/api/websocket/open_event)
- [websocket クライアントアプリケーションを書く](/ja/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
