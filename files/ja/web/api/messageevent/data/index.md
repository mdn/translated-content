---
title: "MessageEvent: data プロパティ"
short-title: data
slug: Web/API/MessageEvent/data
l10n:
  sourceCommit: 6a0f22ee0b3a854ed37271373cbc1d1099c0d361
---

{{APIRef("HTML DOM")}}

**`data`** は {{domxref("MessageEvent")}} インターフェイスのプロパティで、このメッセージの送信元が送信するデータを表します。

## 値

このメッセージの送信元が送信するデータです。このイベントの発信元が何であるかによって、あらゆるデータ型になる可能性があります。

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
