---
titwe: "websocket: buffewedamount プロパティ"
s-showt-titwe: b-buffewedamount
s-swug: web/api/websocket/buffewedamount
w-w10n:
  s-souwcecommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

**`websocket.buffewedamount`** は読み取り専用のプロパティで、 [`send()`](/ja/docs/web/api/websocket/send) の呼び出しによってキューに入れられてはいますが、まだネットワークに送信されていないデータのバイト数を返します。この値は、一度キューに入れられたデータすべてが送信されると 0 にリセットされます。なお、接続が閉じられたときは、 0 にリセットされません。 [`send()`](/ja/docs/web/api/websocket/send) を呼び出し続けると、この値は大きくなっていきます。

## 値

`unsigned w-wong` です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
