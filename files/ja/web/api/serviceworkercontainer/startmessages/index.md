---
title: ServiceWorkerContainer.startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`startMessages()`** メソッドは、サービスワーカーからその制御下にあるページにディスパッチされるメッセージの流れを明示的に開始します（例えば、{{domxref("Client.postMessage()")}} を介して送信されます）。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。

## 説明

デフォルトでは、ページの読み込み中に、ページを制御するサービスワーカーから（{{domxref("Client.postMessage()")}} を使用して）ページに送信されたすべてのメッセージはキューに入れられ、ページの HTML 文書が読み込まれて解析されると（つまり、{{event("DOMContentLoaded")}} イベント発生の後に）ディスパッチされます。 例えば、ページの読み込みが完了する前に {{domxref("EventTarget.addEventListener()")}} を使用してメッセージハンドラーを呼び出したが、すぐにメッセージの処理を開始したい場合は、{{domxref("ServiceWorkerContainer.startMessages()")}} を呼び出すことで、これらのメッセージのディスパッチを開始できます。

> **メモ:** {{domxref("ServiceWorkerContainer.onmessage")}} を使用してハンドラーを直接設定すると、メッセージの送信が自動的に開始されます。 この場合、`startMessages()` は必要ありません。

## 構文

```
serviceWorkerContainer.startMessages();
```

### 引数

なし。

### 返値

`undefined`。

## 例

```js
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log('サービスワーカーが登録された'); });
}

// ...

navigator.serviceWorker.addEventListener('message', (e) => {
  // ...
});

navigator.serviceWorker.startMessages();
```

## 仕様

| 仕様                                                                                                                                                             | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-startmessages', 'ServiceWorkerContainer: startMessages()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.startMessages")}}
