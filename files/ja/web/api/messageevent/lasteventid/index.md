---
title: "MessageEvent: lastEventId プロパティ"
short-title: lastEventId
slug: Web/API/MessageEvent/lastEventId
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("HTML DOM")}}

**`lastEventId`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、このイベントの固有の ID を表す文字列です。

## 値

ID を表す文字列です。

## 例

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.lastEventId);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
