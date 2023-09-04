---
title: MessageEvent.origin
slug: Web/API/MessageEvent/origin
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("HTML DOM")}}

**`origin`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、メッセージ送信元のオリジンを表す文字列です。

## 値

オリジンを表す文字列です。

## 例

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.origin);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
