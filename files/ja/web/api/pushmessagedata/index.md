---
title: PushMessageData
slug: Web/API/PushMessageData
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{APIRef("Push API")}}

**`PushMessageData`** は[プッシュ API](/ja/docs/Web/API/Push_API) のインターフェイスで、さまざまな形式でサーバーから送信されるプッシュテータを取得する方法を提供します。

[フェッチ API](/ja/docs/Web/API/Fetch_API) の同様のメソッドが 1 回しか呼び出せないのと異なり、これらは複数回呼び出せます。

プッシュ API を通して受け取ったメッセージはプッシュサービスによって暗号化されて送信され、`PushMessageData` インターフェースのメソッドで利用可能になる前にブラウザーによって自動的に復号されます。

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxref("PushMessageData.arrayBuffer()")}}
  - : データを {{jsxref("ArrayBuffer")}} オブジェクトとして抜き出します。
- {{domxref("PushMessageData.blob()")}}
  - : データを {{domxref("Blob")}} オブジェクトとして抜き出します。
- {{domxref("PushMessageData.json()")}}
  - : データを [JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) オブジェクトとして抜き出します。
- {{domxref("PushMessageData.text()")}}
  - : データをプレーンテキスト文字列として抜き出します。

## 例

```js
self.addEventListener("push", (event) => {
  const obj = event.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    fireNotification(obj, event);
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
