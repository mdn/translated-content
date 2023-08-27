---
title: MessageEvent.data
slug: Web/API/MessageEvent/data
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("HTML DOM")}}

**`data`** は {{domxref("MessageEvent")}} インターフェイスのプロパティで、このメッセージの送信元が送信するデータを表します。

## 値

このメッセージの送信元が送信するデータです。これはどの型でも構いません。

## 例

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
