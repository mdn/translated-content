---
title: MessageEvent.ports
slug: Web/API/MessageEvent/ports
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("HTML DOM")}}

**`ports`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、メッセージが（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合に）送信されるチャネルに関連するポートを表す {{domxref("MessagePort")}} オブジェクトの配列です。

## 値

{{domxref("MessagePort")}} オブジェクトの配列です。

## 例

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
