---
title: "CloseEvent: wasClean プロパティ"
slug: Web/API/CloseEvent/wasClean
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Websockets API")}}

**`wasClean`** は {{domxref("CloseEvent")}} インターフェイスの読み取り専用プロパティで、接続がきれいに閉じられた場合は `true` を返します。

## 値

論理値です。接続がきれいに閉じられた場合は true、そうでなければ false です。

## 例

次の例では、 `wasClean` の値をコンソールに表示します。

```js
WebSocket.onclose = (event) => {
  console.log(event.wasClean);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
