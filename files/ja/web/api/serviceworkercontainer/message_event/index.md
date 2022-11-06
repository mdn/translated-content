---
title: 'ServiceWorkerContainer: message イベント'
slug: Web/API/ServiceWorkerContainer/message_event
---

{{APIRef}}

**`message`** イベントは、サービスワーカーからメッセージを受信するために、サービスワーカーによって制御されるページで使用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/ServiceWorkerContainer/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では、サービスワーカーは [`fetch`](/ja/docs/Web/API/ServiceWorkerGlobalScope/onfetch) イベントからクライアントの ID を取得し、[`Client.postMessage`](/ja/docs/Web/API/Client/postMessage) を使用してメッセージを送信します。

```js
// サービスワーカー内
async function messageClient(clientId) {
    const client = await clients.get(clientId);
    client.postMessage('こんにちはクライアント！');
}

addEventListener('fetch', (event) => {
    messageClient(event.clientId);
    event.respondWith(() => {
      // ...
    });
});
```

クライアントは `message` イベントをリッスンしてメッセージを受信できます。

```js
// 制御されているページ
navigator.serviceWorker.addEventListener('message', (message) => {
    console.log(message);
});
```

## 仕様

| 仕様                                                                                                             | 状態                                 |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-onmessage', 'message')}} | {{Spec2('Service Workers')}} |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.message_event")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
