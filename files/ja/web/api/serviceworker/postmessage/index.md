---
title: "ServiceWorker: postMessage() メソッド"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

**`postMessage()`** は {{domxref("ServiceWorker")}} インターフェイスのメソッドで、ワーカーにメッセージを送信します。第一引数はワーカーに送信するデータです。このデータは、[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で処理することができる任意の JavaScript オブジェクトにすることができます。

サービスワーカーは {{domxref("Client.postMessage", "postMessage()")}} メソッドを使用して、クライアントに情報を送り返すことができます。メッセージはこの `ServiceWorker` オブジェクトではなく、関連する {{domxref("ServiceWorkerContainer")}} に返送されます。これは{{domxref("navigator.serviceWorker")}} から利用できます。

## 構文

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### 引数

- `message`
  - : ワーカーに配信するオブジェクトです。これは {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} イベントに配信されるイベントの `data` フィールドに入ります。これは [構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) によって扱える JavaScript オブジェクトであれば何でもかまいません。

    `message` 引数は必須です。ワーカーに渡すデータが重要でない場合は、`null` または `undefined` を明示的に渡す必要があります。

- `transfer` {{optional_inline}}
  - : オプションで、所有権を移譲する[移譲可能なオブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)を渡します。オブジェクトの所有権が移譲されると、そのオブジェクトは移譲元のコンテキストでは使用できなくなり、送信先のワーカーのみで利用できるようになります。
- `options` {{optional_inline}}
  - : オプションのオブジェクトで、以下のプロパティがあります。
    - `transfer` {{optional_inline}}
      - : `transfer` 引数と同じ意味です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("SyntaxError")}}
  - : `message` 引数が提供されていない場合に発行されます。

## 例

この例では、{{domxref("ServiceWorker")}} を作成し、すぐにメッセージを送信しています。

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Test message sent immediately after creation",
  );
});
```

メッセージを受信するために、`service-worker.js` のサービスワーカーは、そのグローバルスコープで {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} イベントを待ち受けする必要があります。

```js
// これは `service-worker.js` に記述する必要があります
addEventListener("message", (event) => {
  console.log(`Message received: ${event.data}`);
});
```

サービスワーカーは、{{domxref("Client.postMessage()", "postMessage()")}} メソッドを用いてメインスレッドにメッセージを送り返すことができることに注意してください。これを受け取るには、メインスレッドは {{domxref("ServiceWorkerContainer.message_event", "message")}} オブジェクトの {{domxref("ServiceWorkerContainer")}} イベントを待ち受けする必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("ServiceWorker")}} インターフェイス。
- 反対側の {{domxref("Client.postMessage()", "postMessage()")}} メソッドは、サービスワーカーがメッセージを関連する {{domxref("ServiceWorkerContainer")}} に送り返すために使用する必要があるものです。
