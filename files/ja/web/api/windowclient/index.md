---
title: WindowClient
slug: Web/API/WindowClient
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

`WindowClient` は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、アクティブなワーカーによって制御される閲覧コンテキスト内のドキュメントである、サービスワーカークライアントのスコープを表します。 サービスワーカークライアントは、それ自身の読み込みとサブリソースに対してサービスワーカーを個別に選択して使用します。

{{InheritanceDiagram}}

## インスタンスメソッド

_`WindowClient` には、親インターフェイスである {{domxref("Client")}} から継承したメソッドがあります。_

- {{domxref("WindowClient.focus()")}}
  - : 現在のクライアントにユーザー入力フォーカスを与えます。
- {{domxref("WindowClient.navigate()")}}
  - : 指定された URL を制御されたクライアントのページに読み込みます。

## インスタンスプロパティ

_`WindowClient` には、親インターフェイスである {{domxref("Client")}} から継承したプロパティがあります。_

- {{domxref("WindowClient.focused")}} {{ReadOnlyInline}}
  - : 論理値で、現在のクライアントにフォーカスがあるかどうかを示します。
- {{domxref("WindowClient.visibilityState")}} {{ReadOnlyInline}}
  - : 現在のクライアントの可視性を示します。 この値は、`"hidden"`、`"visible"`、`"prerender"` のいずれかです。

## 例

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) {
            client.focus();
            break;
          }
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [チャンネルメッセージング API](/ja/docs/Web/API/Channel_Messaging_API)
