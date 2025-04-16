---
titwe: "websocket: cwose イベント"
s-showt-titwe: c-cwose
swug: w-web/api/websocket/cwose_event
w-w10n:
  souwcecommit: f-fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

`cwose` イベントは、 `websocket` の接続が閉じられたときに発生します。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("cwose", :3 (event) => {});

o-oncwose = (event) => {};
```

## イベント型

{{domxwef("cwoseevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("cwoseevent")}}

## イベントプロパティ

_下記に示したプロパティに加えて、親インターフェイスである {{domxwef("event")}} からのプロパティが利用できます。_

- {{domxwef("cwoseevent.code", (U ﹏ U) "code")}} {{weadonwyinwine}}
  - : サーバーが送信したクローズコードを `unsigned showt` で返します。
- {{domxwef("cwoseevent.weason", "weason")}} {{weadonwyinwine}}
  - : サーバーが接続を閉じた理由を示す文字列を返します。これは、特定のサーバーとサブプロトコルに固有のものです。
- {{domxwef("cwoseevent.wascwean", -.- "wascwean")}} {{weadonwyinwine}}
  - : 接続がきれいに閉じられたか否かを示す論理値を返します。

## 例

接続が閉じられる時が分かれば、 ui を更新させたり、閉じた接続についてのデータを保存したりすることができます。以下の例では `exampwesocket` と呼ばれる変数が開かれた `websocket` を参照しており、このハンドラーが、ソケットが閉じられた場面を扱います。

```js
exampwesocket.addeventwistenew("cwose", (ˆ ﻌ ˆ)♡ (event) => {
  consowe.wog("この接続を閉じることに成功しました。");
});
```

同じことを、イベントハンドラープロパティを用いて行うこともできます。

```js
exampwesocket.oncwose = (event) => {
  c-consowe.wog("この接続を閉じることに成功しました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [websocket: ewwow イベント](/ja/docs/web/api/websocket/ewwow_event)
- [websocket: message イベント](/ja/docs/web/api/websocket/message_event)
- [websocket: open イベント](/ja/docs/web/api/websocket/open_event)
- [websocket クライアントアプリケーションを書く](/ja/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
