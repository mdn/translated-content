---
title: "Client: type プロパティ"
slug: Web/API/Client/type
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Service Workers API")}}

**`type`** は {{domxref("Client")}} インターフェイスの読み取り専用プロパティで、サービスワーカーが制御しているクライアントの種類を示します。

### 値

クライアントの種類を表す文字列。 値は次のいずれかです。

- `"window"`
- `"worker"`
- `"sharedworker"`

## 例

```js
// サービスワーカークライアント（文書など）
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    // これは ServiceWorker.postMessage バージョンであることに注意してください
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = (e) => {
      resolve(e.data);
    };
  });
}

// 制御するサービスワーカー
self.addEventListener("message", (e) => {
  // e.source はクライアントオブジェクトです
  e.source.postMessage(`こんにちは！ あなたのメッセージは: ${e.data}`);
  // type 値も投稿してクライアントに戻しましょう
  e.source.postMessage(e.source.type);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
