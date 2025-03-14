---
title: ServiceWorkerContainer.startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Service Workers API")}}

**`startMessages()`** は {{domxref("ServiceWorkerContainer")}} インターフェイスのメソッドで、サービスワーカーからその制御下にあるページに配信されるメッセージの流れを明示的に開始します（例えば、 {{domxref("Client.postMessage()")}} を介して送信されます）。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。

## 説明

既定では、ページの読み込み中に、ページを制御するサービスワーカーから（{{domxref("Client.postMessage()")}} を使用して）ページに送信されたすべてのメッセージはキューに入れられ、ページの HTML 文書が読み込まれて解析されると（つまり、 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベント発生の後に）ディスパッチされます。 例えば、ページの読み込みが完了する前に {{domxref("EventTarget.addEventListener()")}} を使用してメッセージハンドラーを呼び出したが、すぐにメッセージの処理を開始したい場合は、{{domxref("ServiceWorkerContainer.startMessages()")}} を呼び出すことで、これらのメッセージの配信を開始できます。

> **メモ:** {{domxref("ServiceWorkerContainer.message_event", "onmessage")}} を使用してハンドラーを直接設定すると、メッセージの送信が自動的に開始されます。 この場合、`startMessages()` は必要ありません。

## 構文

```js-nolint
startMessages()
```

### 引数

なし。

### 返値

`undefined` です。

## 例

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("サービスワーカーが登録された");
  });
}

// …

navigator.serviceWorker.addEventListener("message", (e) => {
  // …
});

navigator.serviceWorker.startMessages();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
