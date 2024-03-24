---
title: "Client: postMessage() メソッド"
slug: Web/API/Client/postMessage
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Service Worker API")}}

**`postMessage()`** は {{domxref("Client")}} インターフェイスのメソッドで、サービスワーカーがクライアント ({{domxref("Window")}}, {{domxref("Worker")}}, {{domxref("SharedWorker")}}) にメッセージを送信することができます。メッセージは、{{domxref("ServiceWorkerContainer", "navigator.serviceWorker")}} の "`message`" イベントで受信されます。

## 構文

```js-nolint
postMessage(message)
postMessage(message, transferables)
```

### 引数

- `message`
  - : クライアントに送信するメッセージです。これは、任意の[構造化複製可能型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#%E5%AF%BE%E5%BF%9C%E6%B8%88%E3%81%BF%E3%81%AE%E5%9E%8B)にすることができます。
- `transfer` {{optional_inline}}
  - : メッセージとともに[転送される](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)オブジェクトのシーケンスです。 これらのオブジェクトの所有権は宛先側に与えられ、送信側では使用できなくなります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

サービスワーカーからクライアントへのメッセージの送信

```js
addEventListener("fetch", (event) => {
  event.waitUntil(
    (async () => {
      // クライアントにアクセスできない場合は、早期に終了します。
      // 例えば、クロスオリジンの場合。
      if (!event.clientId) return;

      // クライアントを取得します。
      const client = await clients.get(event.clientId);
      // クライアントを取得できない場合は、早期に終了します。
      // 例えば、閉じている場合。
      if (!client) return;

      // クライアントにメッセージを送信します。
      client.postMessage({
        msg: "私はあなたからフェッチされましたよ！",
        url: event.request.url,
      });
    })(),
  );
});
```

そのメッセージの受け取り

```js
navigator.serviceWorker.addEventListener("message", (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
