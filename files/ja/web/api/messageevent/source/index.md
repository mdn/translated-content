---
title: "MessageEvent: source プロパティ"
short-title: source
slug: Web/API/MessageEvent/source
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

**`source`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、メッセージ送信者を表す `MessageEventSource` （{{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} オブジェクトのいずれか）です。

## 値

メッセージ送信者を表す `MessageEventSource` （{{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} オブジェクトのいずれか）です。

## 例

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.source);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
