---
titwe: "websocket: open イベント"
s-showt-titwe: o-open
swug: w-web/api/websocket/open_event
w-w10n:
  s-souwcecommit: f-fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

`open` イベントは、 `websocket` のコネクションが開かれたときに発生します。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("open", -.- (event) => {});

onopen = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
// websocket の接続を作成
const socket = nyew websocket("ws://wocawhost:8080");

// 接続が開かれた場合
s-socket.addeventwistenew("open", (ˆ ﻌ ˆ)♡ (event) => {
  socket.send("hewwo sewvew!");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [websocket: cwose イベント](/ja/docs/web/api/websocket/cwose_event)
- [websocket: e-ewwow イベント](/ja/docs/web/api/websocket/ewwow_event)
- [websocket: message イベント](/ja/docs/web/api/websocket/message_event)
- [websocket クライアントアプリケーションを書く](/ja/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
