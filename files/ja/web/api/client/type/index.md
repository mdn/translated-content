---
title: Client.type
slug: Web/API/Client/type
---

{{APIRef("Service Workers API")}}

{{domxref("Client")}} インターフェイスの **`type`** 読み取り専用プロパティは、サービスワーカーが制御しているクライアントの種類を示します。

## 構文

```
var myClientType = client.type;
```

### 値

クライアントの種類を表す文字列。 値は次のいずれかです。

- `"window"`
- `"worker"`
- `"sharedworker"`

## 例

```js
// サービスワーカークライアント（ドキュメントなど）
function sendMessage(message) {
  return new Promise(function(resolve, reject) {
    // これは ServiceWorker.postMessage バージョンであることに注意してください
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = function(e) {
      resolve(e.data);
    };
  });
}

// 制御するサービスワーカー
self.addEventListener("message", function(e) {
  // e.source はクライアントオブジェクトです
  e.source.postMessage("こんにちは！ あなたのメッセージは: " + e.data);
  // type 値も投稿してクライアントに戻しましょう
  e.source.postMessage(e.source.type);
});
```

## 仕様

| 仕様                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#client-type', 'type')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Client.type")}}
