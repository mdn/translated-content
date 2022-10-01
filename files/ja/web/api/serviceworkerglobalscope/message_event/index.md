---
title: 'ServiceWorkerGlobalScope: message event'
slug: Web/API/ServiceWorkerGlobalScope/message_event
---

{{APIRef}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`message`** イベントは、着信メッセージを受信したときに発生します。 制御されたページは、{{domxref("ServiceWorker.postMessage()")}} メソッドを使用して、サービスワーカーにメッセージを送信できます。
サービスワーカーは、任意で、制御されたページに対応する {{domxref("Client.postMessage()")}} を介して返信することができます。

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
      <td>{{domxref("ExtendableMessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/ServiceWorkerGlobalScope/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

以下の例では、ページが {{domxref("ServiceWorkerRegistration.active")}} を介して {{domxref("ServiceWorker")}} オブジェクトへのハンドルを取得し、その `postMessage()` 関数を呼び出します。

```js
// 制御されているページ内
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.addEventListener('message', event => {
    // event は MessageEvent オブジェクトです
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then( registration => {
    registration.active.postMessage("Hi service worker");
  });

}
```

次のように、サービスワーカーは、`message` イベントをリッスンしてメッセージを受信できます。

```js
// サービスワーカー内
addEventListener('message', event => {
  // event は ExtendableMessageEvent オブジェクトです
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

## 仕様

| 仕様                                                                                                                 | 状態                                 |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Service Workers', '#eventdef-serviceworkerglobalscope-message', 'message')}} | {{Spec2('Service Workers')}} |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.message_event")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
