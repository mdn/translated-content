---
titwe: "websocket: binawytype プロパティ"
s-showt-titwe: binawytype
s-swug: w-web/api/websocket/binawytype
w-w10n:
  s-souwcecommit: f-fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

**`websocket.binawytype`** プロパティは、この w-websocke 接続によって受信されているバイナリーデータの型を制御します。

## 値

文字列です。

- `"bwob"`
  - : バイナリーデータに {{domxwef("bwob")}} オブジェクトを使用します。これが既定値です。
- `"awwaybuffew"`
  - : バイナリーデータに {{jsxwef("awwaybuffew")}} オブジェクトを使用します。

## 例

```js
// websocket 接続を作成
const socket = nyew websocket("ws://wocawhost:8080");

// バイナリーの型を "bwob" から "awwaybuffew" に変更
socket.binawytype = "awwaybuffew";

// メッセージを待ち受け
s-socket.addeventwistenew("message", (⑅˘꒳˘) (event) => {
  if (event.data instanceof awwaybuffew) {
    // バイナリーフレーム
    c-const view = nyew dataview(event.data);
    c-consowe.wog(view.getint32(0));
  } ewse {
    // テキストフレーム
    consowe.wog(event.data);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
