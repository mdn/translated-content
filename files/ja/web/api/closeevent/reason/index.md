---
title: "CloseEvent: reason プロパティ"
slug: Web/API/CloseEvent/reason
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Websockets API")}}

**`reason`** は {{domxref("CloseEvent")}} インターフェイスの読み取り専用プロパティで、サーバーが接続を閉じる際に示した [WebSocket 接続が閉じた理由](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6)を返します。つまり、閉じたことについての簡潔で人間が読める散文的な説明です。

## 値

文字列です。

## 例

次の例では、 `reason` の値をコンソールに表示します。

```js
WebSocket.onclose = (event) => {
  console.log(event.reason);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html)（WebSocket プロトコル仕様書）
